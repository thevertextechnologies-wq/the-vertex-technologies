import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const ALLOWED_FORM_TYPES = ["business", "institute", "contact"] as const;
type FormType = (typeof ALLOWED_FORM_TYPES)[number];

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
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate Content-Type
  const ct = req.headers["content-type"] || "";
  if (!ct.includes("application/json")) {
    return res.status(415).json({ error: "Expected application/json" });
  }

  const body = req.body as Record<string, unknown>;

  const formType = sanitize(body?.formType) as FormType;
  if (!ALLOWED_FORM_TYPES.includes(formType)) {
    return res.status(400).json({ error: "Invalid form type" });
  }

  // Sanitize every field
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (k !== "formType") data[k] = sanitize(v);
  }

  // Basic server-side validation at API boundary
  if (!data.name || data.name.length < 1) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!data.email || !data.email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  // Verify env vars are present
  const {
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
    GMAIL_SENDER,
    GMAIL_RECEIVER,
  } = process.env;

  if (
    !GMAIL_CLIENT_ID ||
    !GMAIL_CLIENT_SECRET ||
    !GMAIL_REFRESH_TOKEN ||
    !GMAIL_SENDER ||
    !GMAIL_RECEIVER
  ) {
    console.error("Missing Gmail environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
    oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

    const { token: accessToken } = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_SENDER,
        clientId: GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: GMAIL_REFRESH_TOKEN,
        accessToken: accessToken ?? undefined,
      },
    });

    const { subject, html } = buildEmail(formType, data);

    await transporter.sendMail({
      from: `"The Vertex Technologies" <${GMAIL_SENDER}>`,
      to: GMAIL_RECEIVER,
      replyTo: data.email,
      subject,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
