import type { VercelRequest, VercelResponse } from "@vercel/node";

const ALLOWED_FORM_TYPES = ["business", "institute", "contact"] as const;
type FormType = (typeof ALLOWED_FORM_TYPES)[number];

function env(name: string): string {
  return (process.env[name] ?? "").trim();
}

const OUTBOUND_TIMEOUT_MS = 12000;

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = OUTBOUND_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      const timeoutError = new Error("Mail provider request timed out") as Error & { code?: string };
      timeoutError.code = "ETIMEDOUT";
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

function base64UrlEncode(value: string): string {
  return Buffer.from(value, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function fetchGmailAccessToken(config: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}) {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetchWithTimeout("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const payload = (await response.json().catch(() => null)) as
    | { access_token?: string; error?: string; error_description?: string }
    | null;

  if (!response.ok || !payload?.access_token) {
    const reason = payload?.error_description || payload?.error || "Token request failed";
    const err = new Error(reason) as Error & { code?: string; responseCode?: number };
    err.code = "EAUTH";
    err.responseCode = response.status;
    throw err;
  }

  return payload.access_token;
}

async function sendViaGmailApi({
  sender,
  receiver,
  replyTo,
  subject,
  html,
  clientId,
  clientSecret,
  refreshToken,
}: {
  sender: string;
  receiver: string;
  replyTo: string;
  subject: string;
  html: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}) {
  const accessToken = await fetchGmailAccessToken({ clientId, clientSecret, refreshToken });

  const mimeMessage = [
    `From: The Vertex Technologies <${sender}>`,
    `To: ${receiver}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
  ].join("\r\n");

  const raw = base64UrlEncode(mimeMessage);

  const response = await fetchWithTimeout("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as
      | { error?: { message?: string; status?: string } }
      | null;
    const reason = payload?.error?.message || "Gmail API send failed";
    const err = new Error(reason) as Error & { code?: string; responseCode?: number };
    err.code = "EGMAIL_SEND";
    err.responseCode = response.status;
    throw err;
  }
}

/** Strip HTML entities to prevent injection in email body */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitize(val: unknown, maxLen = 2000): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

function buildEmail(
  type: FormType,
  data: Record<string, string>
): { subject: string; html: string } {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:8px 14px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${label}</td>
      <td style="padding:8px 14px;color:#222;word-break:break-word">${esc(value) || "—"}</td>
    </tr>`;

  const wrap = (title: string, badge: string, rows: string) => `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto">
      <div style="background:#1a1a2e;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;font-size:22px;color:#fff">${esc(title)}</h1>
        <span style="display:inline-block;margin-top:8px;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;background:#da4838;color:#fff">${esc(badge)}</span>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:0 0 12px 12px;overflow:hidden">
        ${rows}
      </table>
      <p style="margin-top:16px;font-size:11px;color:#999;text-align:center">
        Sent from The Vertex Technologies website · thevertextechnologies.com
      </p>
    </div>`;

  if (type === "business") {
    return {
      subject: `New Business Inquiry — ${sanitize(data.name)}`,
      html: wrap(
        "New Business Inquiry",
        "Business",
        row("Name", data.name) +
          row("Email", data.email) +
          row("Company", data.company) +
          row("Website", data.website || "") +
          row("Goal", data.goal)
      ),
    };
  }

  if (type === "institute") {
    return {
      subject: `New Institute Enrollment — ${sanitize(data.name)}`,
      html: wrap(
        "New Vertex Institute Enrollment",
        "Institute",
        row("Name", data.name) +
          row("Email", data.email) +
          row("Phone", data.phone) +
          row("Training Type", data.trainingMode) +
          row("Course", data.course) +
          row("Message", data.message)
      ),
    };
  }

  // contact (homepage section)
  return {
    subject: `New Contact Message — ${sanitize(data.name)}`,
    html: wrap(
      "New Contact Message",
      "Contact",
      row("Name", data.name) +
        row("Email", data.email) +
        row("Company", data.company || "") +
        row("Message", data.message)
    ),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed", code: "method_not_allowed" });
  }

  // Validate Content-Type
  const ct = req.headers["content-type"] || "";
  if (!ct.includes("application/json")) {
    return res.status(415).json({ error: "Expected application/json", code: "unsupported_content_type" });
  }

  const body = req.body as Record<string, unknown>;

  const formType = sanitize(body?.formType) as FormType;
  if (!ALLOWED_FORM_TYPES.includes(formType)) {
    return res.status(400).json({ error: "Invalid form type", code: "invalid_form_type" });
  }

  // Sanitize every field
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (k !== "formType") data[k] = sanitize(v);
  }

  // Basic server-side validation at API boundary
  if (!data.name || data.name.length < 1) {
    return res.status(400).json({ error: "Name is required", code: "name_required" });
  }
  if (!data.email || !data.email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required", code: "email_required" });
  }

  // Verify env vars are present
  const GMAIL_CLIENT_ID = env("GMAIL_CLIENT_ID");
  const GMAIL_CLIENT_SECRET = env("GMAIL_CLIENT_SECRET");
  const GMAIL_REFRESH_TOKEN = env("GMAIL_REFRESH_TOKEN");
  const GMAIL_SENDER = env("GMAIL_SENDER") || env("GMAIL_SENDER_EMAIL") || env("GMAIL_USER");
  const GMAIL_RECEIVER = env("GMAIL_RECEIVER") || env("FORM_RECEIVER_EMAIL") || env("CONTACT_TO_EMAIL");

  if (
    !GMAIL_CLIENT_ID ||
    !GMAIL_CLIENT_SECRET ||
    !GMAIL_REFRESH_TOKEN ||
    !GMAIL_SENDER ||
    !GMAIL_RECEIVER
  ) {
    console.error("Missing Gmail environment variables", {
      hasClientId: Boolean(GMAIL_CLIENT_ID),
      hasClientSecret: Boolean(GMAIL_CLIENT_SECRET),
      hasRefreshToken: Boolean(GMAIL_REFRESH_TOKEN),
      hasSender: Boolean(GMAIL_SENDER),
      hasReceiver: Boolean(GMAIL_RECEIVER),
    });
    return res.status(500).json({
      error: "Server configuration error",
      code: "missing_env_vars",
    });
  }

  try {
    const { subject, html } = buildEmail(formType, data);

    await sendViaGmailApi({
      sender: GMAIL_SENDER,
      receiver: GMAIL_RECEIVER,
      replyTo: data.email,
      subject,
      html,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
    });

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const stack = err instanceof Error ? err.stack : undefined;
    const responseCode =
      typeof err === "object" && err && "responseCode" in err
        ? String((err as { responseCode?: number | string }).responseCode ?? "")
        : "";
    const responseText =
      typeof err === "object" && err && "response" in err
        ? String((err as { response?: string }).response ?? "")
        : "";
    const nestedData =
      typeof err === "object" && err && "response" in err
        ? JSON.stringify((err as { response?: { data?: unknown } }).response?.data ?? "")
        : "";
    const raw = `${String(message || "")} ${responseCode} ${responseText} ${nestedData}`.toLowerCase();

    console.error("Email send error:", { message, stack });

    if (raw.includes("invalid_grant") || raw.includes("unauthorized_client")) {
      return res.status(500).json({
        error: "Gmail OAuth credentials are invalid or expired",
        code: "oauth_invalid_grant",
      });
    }

    if (raw.includes("invalid_client") || raw.includes("client_secret")) {
      return res.status(500).json({
        error: "OAuth client ID/secret mismatch",
        code: "oauth_client_mismatch",
      });
    }

    if (
      raw.includes("insufficient authentication scopes") ||
      raw.includes("insufficient permissions") ||
      raw.includes("scope")
    ) {
      return res.status(500).json({
        error: "OAuth scope is insufficient for Nodemailer SMTP",
        code: "oauth_scope_invalid",
      });
    }

    if (
      raw.includes("invalid login") ||
      raw.includes("badcredentials") ||
      raw.includes("username and password not accepted") ||
      raw.includes("535") ||
      raw.includes("534") ||
      raw.includes("eauth")
    ) {
      return res.status(500).json({
        error: "Gmail authentication failed",
        code: "gmail_auth_rejected",
      });
    }

    if (raw.includes("failedprecondition") || raw.includes("precondition")) {
      return res.status(500).json({
        error: "Gmail account is not ready for API sending",
        code: "gmail_precondition_failed",
      });
    }

    if (raw.includes("quota") || raw.includes("rate limit") || raw.includes("too many")) {
      return res.status(500).json({
        error: "Gmail sending quota or rate limit reached",
        code: "gmail_quota_limited",
      });
    }

    if (raw.includes("insufficientpermissions") || raw.includes("insufficient permission") || raw.includes("scope")) {
      return res.status(500).json({
        error: "Gmail OAuth scope is insufficient",
        code: "oauth_scope_invalid",
      });
    }

    if (raw.includes("envelope") || raw.includes("from") || raw.includes("sender")) {
      return res.status(500).json({
        error: "Invalid sender/receiver email configuration",
        code: "mailbox_config_error",
      });
    }

    return res.status(500).json({
      error: "Failed to send email. Please try again.",
      code: "mail_send_failed",
    });
  }
}
