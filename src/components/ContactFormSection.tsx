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
        const reason = json.code ? `${json.error || "Failed to send"} (${json.code})` : (json.error || "Failed to send");
        throw new Error(reason);
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
    <div className="max-w-6xl mx-auto px-2 md:px-0 rounded-3xl bg-[var(--brand-red)]">
      <section id="contact" className="py-16 md:py-24 text-white">
        <div className="grid lg:grid-cols-12 gap-12 items-start px-4 md:px-12">
        <div className="lg:col-span-5 text-white">
          <Reveal>
            <span className="pill text-[var(--brand-red)] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)] inline-block" />
              Let's build together
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-4xl md:text-6xl mt-5 text-balance text-white">
              Got a project? <br />
              <span className="text-white">Let's talk.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed max-w-md text-white/90">
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
              className="rounded-3xl bg-black text-white border-none p-6 md:p-10 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.25)]"
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
                <Field 
                  label="Project details" 
                  name="message" 
                  textarea 
                  placeholder="Tell us about your goals, current systems, and what you're trying to solve..." 
                  error={errors.message} 
                  className="mt-0" 
                />
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
    </div>
  );
}

function Field({
  label, name, placeholder, type = "text", textarea, select, options = [], error, className = "",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
  error?: string;
  className?: string;
}) {
  const cls = "mt-1.5 w-full rounded-xl border border-[#333] bg-[#232323] px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";
  const selectCls = "w-full appearance-none rounded-xl border border-white/25 bg-white/10 px-4 pr-11 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-white">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : select ? (
        <div className="relative mt-1.5">
          <select name={name} defaultValue="" className={selectCls}>
            <option value="" disabled className="bg-[var(--ink)] text-white">
              {placeholder || "Select an option"}
            </option>
            {options.map((option) => (
              <option key={option} value={option} className="bg-[var(--ink)] text-white">
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="text-xs text-[var(--brand-red)] mt-1 block">{error}</span>}
    </label>
  );
}
