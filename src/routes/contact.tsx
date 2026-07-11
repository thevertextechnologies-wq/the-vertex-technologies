import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoHead({
      title: "Contact The Vertex Technologies | Get Your Roadmap",
      description:
        "Tell The Vertex Technologies your goals and get a tailored AI and automation roadmap within 24 hours. Partner with a team engineered for measurable growth.",
      url: "https://www.thevertextechnologies.com/contact",
    }),
  component: ContactPage,
});

const businessSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  company: z.string().trim().min(1, "Company required").max(150),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  goal: z.string().trim().min(10, "Tell us a little more").max(2000),
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

type FormMode = "business" | "institute";

function ContactPage() {
  const [mode, setMode] = useState<FormMode>("business");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);
    setServerError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = mode === "institute"
      ? instituteSchema.safeParse(data)
      : businessSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: mode, ...Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)])) }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const reason = json.code ? `${json.error || "Failed to send"} (${json.code})` : (json.error || "Failed to send");
        throw new Error(reason);
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-60" aria-hidden />
        <div className="container-x relative pt-16 md:pt-24 pb-20">
          <Reveal>
            <Breadcrumbs tone="dark" className="mb-5" />
          </Reveal>
          <Reveal>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-display text-[clamp(2.6rem,7vw,5.2rem)] mt-5 max-w-4xl text-balance">
              Let's build your future‑ready business.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Every transformation starts with a conversation. Share your needs and
              our team responds with a thoughtful, actionable plan — not a generic reply.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="card-tile p-8 md:p-10 bg-card" noValidate>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 mx-auto text-[var(--brand-green)]" />
                    <h3 className="text-display text-3xl mt-5">Message received.</h3>
                    <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                      Thanks for reaching out. A member of the Vertex team will get back
                      to you with a tailored response.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-display text-3xl font-bold">
                      {mode === "institute" ? "The Vertex Institute Enrollment" : "Tell us about your project"}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {mode === "institute"
                        ? "Apply for The Vertex Institute training programs."
                        : "We typically respond within one business day."}
                    </p>

                    <div className="mt-6 inline-flex rounded-full border border-border bg-muted p-1">
                      <button
                        type="button"
                        onClick={() => {
                          setMode("business");
                          setErrors({});
                          setSubmitted(false);
                        }}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          mode === "business"
                            ? "bg-[var(--brand-red)] text-white shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Business Inquiry
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMode("institute");
                          setErrors({});
                          setSubmitted(false);
                        }}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          mode === "institute"
                            ? "bg-[var(--brand-red)] text-white shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        The Vertex Institute
                      </button>
                    </div>

                    {mode === "business" ? (
                      <div className="mt-8 grid sm:grid-cols-2 gap-5">
                        <Field label="Name" name="name" placeholder="Jane Doe" error={errors.name} />
                        <Field label="Email" name="email" type="email" placeholder="jane@company.com" error={errors.email} />
                        <Field label="Company" name="company" placeholder="Acme Inc." error={errors.company} />
                        <Field label="Website (optional)" name="website" placeholder="acme.com" error={errors.website} />
                        <Field
                          label="Your Goal"
                          name="goal"
                          textarea
                          placeholder="What outcome would make this engagement a success?"
                          error={errors.goal}
                          className="sm:col-span-2"
                        />
                      </div>
                    ) : (
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
                    )}

                    {serverError && (
                      <p className="mt-6 text-sm text-[var(--brand-red)] font-medium">{serverError}</p>
                    )}

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                        {loading ? "Sending…" : mode === "institute" ? "Submit Institute Form →" : "Send Your Message →"}
                      </button>
                      {mode === "business" && (
                        <Link to="/book-a-call" className="btn-outline">Book a Strategy Call</Link>
                      )}
                    </div>
                  </>
                )}
              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="card-tile p-7 bg-card">
                <h3 className="font-display text-xl font-bold">Why connect with us?</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Personalized guidance aligned with your objectives",
                    "Clear, practical steps for growth and efficiency",
                    "Expert-driven insights in AI, marketing and systems",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-green)] mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card-tile p-7 bg-card space-y-3">
                <Item icon={<Mail className="h-4 w-4" />} label="hello@thevertextechnologies.com" />
                <Item icon={<Phone className="h-4 w-4" />} label="Available on request" />
                <Item icon={<MapPin className="h-4 w-4" />} label="Working with clients globally" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="rounded-3xl p-7 text-[var(--cream)]"
                style={{
                  background: "linear-gradient(135deg, var(--ink), color-mix(in oklab, var(--brand-blue) 35%, var(--ink)))",
                }}
              >
                <h3 className="font-display text-2xl font-bold">Want immediate results?</h3>
                <p className="mt-2 text-white/70 text-sm">
                  Book a focused strategy call and start accelerating growth.
                </p>
                <Link to="/book-a-call" className="btn-accent mt-5">Book Your Call →</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Item({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">{icon}</span>
      {label}
    </div>
  );
}

function Field({
  label, name, placeholder, type = "text", textarea, select, options = [], error, className = "",
}: {
  label: string; name: string; placeholder?: string; type?: string;
  textarea?: boolean; select?: boolean; options?: string[]; error?: string; className?: string;
}) {
  const cls = "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";
  const selectCls = "w-full appearance-none rounded-xl border border-border bg-background px-4 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent transition-all";
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : select ? (
        <div className="relative mt-1.5">
          <select name={name} defaultValue="" className={selectCls}>
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="text-xs text-[var(--brand-red)] mt-1 block">{error}</span>}
    </label>
  );
}