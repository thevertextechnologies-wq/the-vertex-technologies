import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1200),
});

export default function ContactFormSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...data }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Failed to send");
      }
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrors({ message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              Let's build together
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-4xl md:text-6xl mt-5 text-balance">
              Got a project? <br />
              <span style={{ color: "var(--brand-red)" }}>Let's talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Tell us about your business goals. We'll respond within 24 hours with a tailored
              roadmap to help you scale with AI and automation.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-3 text-sm">
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-green)]" /> Free 30‑min strategy session</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-green)]" /> Custom growth roadmap</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--brand-green)]" /> No obligation, no spam</p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.05}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.25)]"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" placeholder="Jane Doe" error={errors.name} />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" error={errors.email} />
              </div>
              <div className="mt-5">
                <Field label="Company (optional)" name="company" placeholder="Acme Inc." error={errors.company} />
              </div>
              <div className="mt-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Project details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, current systems, and what you're trying to solve..."
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/30 focus:border-[var(--brand-red)] transition"
                />
                {errors.message && (
                  <p className="text-xs mt-1.5 text-[var(--brand-red)]">{errors.message}</p>
                )}
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground">
                  By submitting you agree to our friendly privacy policy.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ background: "var(--brand-red)", boxShadow: "0 12px 28px -12px rgba(218,72,56,0.6)" }}
                >
                  {submitting ? "Sending..." : sent ? "Sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </div>

              {sent && (
                <p className="mt-4 text-sm text-[var(--brand-green)] flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: {
  label: string; name: string; type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/30 focus:border-[var(--brand-red)] transition"
      />
      {error && <p className="text-xs mt-1.5 text-[var(--brand-red)]">{error}</p>}
    </div>
  );
}
