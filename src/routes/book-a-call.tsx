import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Users, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { CALENDLY_BOOKING_URL } from "@/config/scheduling";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/book-a-call")({
  head: () =>
    buildSeoHead({
      title: "Book a Free AI Strategy Call | The Vertex Technologies",
      description:
        "Book a free strategy call with The Vertex Technologies and get a tailored AI and automation roadmap within 24 hours. Pick a time and start scaling today.",
      url: "https://www.thevertextechnologies.com/book-a-call",
    }),
  component: BookCallPage,
});

function BookCallPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)]">
        <div className="absolute inset-0 gradient-mesh opacity-35" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--ink)]" aria-hidden />
        <div className="container-x relative pt-16 md:pt-24 pb-14 md:pb-16">
          <Reveal>
            <Breadcrumbs tone="light" className="mb-5" />
          </Reveal>
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
              Book a Call
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-balance">
              A focused strategy session to plan your growth.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl">
              Pick a time that works for you — you&apos;ll get a calendar invite with a Google
              Meet link for our 30-minute call.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 bg-[var(--ink)] text-[var(--cream)]">
        <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <Reveal className="h-full w-full">
              <div className="glass-dark flex h-full flex-col overflow-hidden rounded-3xl">
                <div
                  className="shrink-0 border-b border-white/10 px-6 py-5 md:px-8"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--brand-red) 22%, transparent) 0%, transparent 55%)",
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-red)]">
                        The Vertex Technologies
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl text-white">
                        Free AI strategy call
                      </h2>
                      <p className="mt-2 text-sm text-white/65 md:text-base">
                        30 minutes · Google Meet · Pick a day and time below
                      </p>
                    </div>
                    <a
                      href={CALENDLY_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
                    >
                      Open full page ↗
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <CalendlyEmbed height={560} className="w-full shrink-0" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <Reveal className="flex h-full w-full flex-col">
              <div className="glass-dark flex h-full flex-col overflow-hidden rounded-3xl">
                <InfoSection
                  title="What we cover"
                  icon={<Sparkles className="h-5 w-5" />}
                  color="var(--brand-red)"
                  items={[
                    "Current business challenges",
                    "Opportunities for AI, automation and marketing",
                    "Scalable growth strategies",
                    "Next steps for implementation",
                  ]}
                />
                <InfoSection
                  title="Who should book"
                  icon={<Users className="h-5 w-5" />}
                  color="var(--brand-blue)"
                  items={[
                    "Founders and business owners",
                    "Companies ready to scale",
                    "Teams exploring AI and digital transformation",
                  ]}
                  bordered
                />
                <InfoSection
                  title="What you gain"
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  color="var(--brand-green)"
                  items={[
                    "Clear insights into your business position",
                    "Identified opportunities and priorities",
                    "Strategic direction tailored to your goals",
                  ]}
                  bordered
                  className="flex-1"
                />
                <div className="shrink-0 border-t border-white/10 px-6 py-4 md:px-8">
                  <Link
                    to="/contact"
                    className="block text-center text-sm font-semibold text-white/80 underline-grow transition-colors hover:text-white"
                  >
                    Prefer to send a message? Contact us →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function InfoSection({
  title,
  icon,
  color,
  items,
  bordered,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
  bordered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`px-6 py-6 md:px-8 md:py-7 ${bordered ? "border-t border-white/10" : ""} ${className}`}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ background: `color-mix(in oklab, ${color} 22%, transparent)`, color }}
        >
          {icon}
        </span>
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5 text-sm text-white/75">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: color }}
            />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
