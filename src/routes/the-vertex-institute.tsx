import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  GraduationCap,
  Clock3,
  Users,
  ChevronDown,
  Megaphone,
  Bot,
  MessageCircle,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import tvtBanner from "@/assets/thevertexinstitute/tvtbanner.jpg";

export const Route = createFileRoute("/the-vertex-institute")({
  component: TheVertexInstitutePage,
});

const instituteSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(7, "Phone number required").max(25),
  trainingMode: z.enum(["Online Training", "Physical Training"], {
    errorMap: () => ({ message: "Select training type" }),
  }),
  course: z.enum(["Digital Marketing", "E-Commerce", "Agentic Ai Automations"], {
    errorMap: () => ({ message: "Select a course" }),
  }),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function TheVertexInstitutePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);
    setServerError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = instituteSchema.safeParse(data);

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) nextErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "institute", ...Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Failed to send");
      }
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout>
      <PageBanner
        eyebrow="The Vertex Institute"
        title={null}
        image={tvtBanner}
        dark={true}
      />

      <section className="relative py-20 md:py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl opacity-25 bg-[var(--brand-red)]" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[var(--brand-blue)]" />
        </div>
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-display text-4xl md:text-6xl" style={{ color: "var(--brand-red)" }}>
                Book Your Training Program
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
                Build practical skills with focused programs in Digital Marketing, E-Commerce and Agentic AI Automations.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
                <h2 className="text-display text-3xl" style={{ color: "var(--brand-red)" }}>
                  Featured Training Topics
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-white/85">
                  <li className="flex items-start gap-3">
                    <Megaphone className="h-5 w-5 text-[var(--brand-orange)] mt-0.5 shrink-0" />
                    Free AI seminar Lahore
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-[var(--brand-red)] mt-0.5 shrink-0" />
                    Digital Marketing training DHA Lahore
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="h-5 w-5 text-[var(--brand-blue)] mt-0.5 shrink-0" />
                    AI automation course Pakistan
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-[var(--brand-green)] mt-0.5 shrink-0" />
                    WhatsApp AI agent training
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[var(--brand-orange)] mt-0.5 shrink-0" />
                    Agentic AI Lahore
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarDays className="h-5 w-5 text-[var(--brand-blue)] mt-0.5 shrink-0" />
                    Free digital marketing seminar 2026
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-[var(--brand-green)] mt-0.5 shrink-0" />
                    The Vertex Technologies seminar
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
                <h2 className="text-display text-3xl" style={{ color: "var(--brand-orange)" }}>
                  Why train with us
                </h2>
                <div className="mt-5 space-y-4 text-sm text-white/80">
                  <p className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-[var(--brand-red)] mt-0.5 shrink-0" />
                    Industry-relevant, practical curriculum.
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock3 className="h-5 w-5 text-[var(--brand-blue)] mt-0.5 shrink-0" />
                    Flexible learning in online or physical format.
                  </p>
                  <p className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[var(--brand-green)] mt-0.5 shrink-0" />
                    Guided support to help you apply skills confidently.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
                noValidate
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 mx-auto text-[var(--brand-green)]" />
                    <h3 className="text-display text-3xl mt-5" style={{ color: "var(--brand-green)" }}>
                      Enrollment request received.
                    </h3>
                    <p className="mt-3 text-white/80 max-w-md mx-auto">
                      Thanks for applying to The Vertex Institute. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-display text-3xl font-bold" style={{ color: "var(--brand-red)" }}>
                      The Vertex Institute Enrollment Form
                    </h3>
                    <p className="mt-2 text-white/80">Complete this form to book your training.</p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      <Field label="Name" name="name" placeholder="Jane Doe" error={errors.name} />
                      <Field label="Email" name="email" type="email" placeholder="jane@example.com" error={errors.email} />
                      <Field label="Phone Number" name="phone" type="tel" placeholder="+92 300 1234567" error={errors.phone} />
                      <Field
                        label="Training Type"
                        name="trainingMode"
                        select
                        options={["Online Training", "Physical Training"]}
                        placeholder="Select training type"
                        error={errors.trainingMode}
                      />
                      <Field
                        label="Course"
                        name="course"
                        select
                        options={["Digital Marketing", "E-Commerce", "Agentic Ai Automations"]}
                        placeholder="Select a course"
                        error={errors.course}
                      />
                      <Field
                        label="Message"
                        name="message"
                        textarea
                        placeholder="Tell us about your background and what you want to achieve."
                        error={errors.message}
                        className="sm:col-span-2"
                      />
                    </div>

                    {serverError && (
                      <p className="mt-6 text-sm text-[var(--brand-red)] font-medium">{serverError}</p>
                    )}

                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
                        style={{ background: "var(--brand-red)", boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)" }}
                      >
                        {loading ? "Sending…" : "Submit Institute Form →"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </Reveal>
          </div>
          </div>
        </div>
      </section>
    </PageLayout>
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
  const cls = "mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";
  const selectCls = "w-full appearance-none rounded-xl border border-white/25 bg-white/10 px-4 pr-11 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";

  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-[var(--brand-blue)]">{label}</span>
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
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
        </div>
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="text-xs text-[var(--brand-red)] mt-1 block">{error}</span>}
    </label>
  );
}
