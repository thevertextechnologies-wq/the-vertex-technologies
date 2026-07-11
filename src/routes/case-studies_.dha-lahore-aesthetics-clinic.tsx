import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  MapPin,
  Workflow,
  Quote,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import bannerCases from "@/assets/banner-cases.jpg";
import caseStudyWorkflow from "@/assets/Case studies/case-study-1.png";
import featuredWhatsappAi from "@/assets/Case Studies Featured Image/the-vertex-technologies-agentic-ai-whatsapp-automation.webp";

export const Route = createFileRoute("/case-studies_/dha-lahore-aesthetics-clinic")({
  head: () => ({
    title: "DHA Lahore Aesthetics Clinic WhatsApp AI Agent | The Vertex Technologies",
    meta: [
      {
        name: "description",
        content:
          "Case study: how The Vertex Technologies deployed a WhatsApp AI Agent in 72 hours for a DHA Lahore aesthetics clinic — more walk-ins, zero after-hours missed bookings.",
      },
      {
        property: "og:title",
        content: "DHA Lahore Aesthetics Clinic WhatsApp AI Agent | The Vertex Technologies",
      },
      {
        property: "og:description",
        content:
          "How a WhatsApp AI Agent got a DHA Lahore aesthetics clinic more walk-ins and zero after-hours missed bookings in 72 hours.",
      },
      {
        property: "og:url",
        content: "https://www.thevertextechnologies.com/case-studies/dha-lahore-aesthetics-clinic",
      },
      { property: "og:type", content: "article" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.thevertextechnologies.com/case-studies/dha-lahore-aesthetics-clinic",
      },
    ],
  }),
  component: CaseStudyDetailPage,
});

const stats = [
  { v: "72h", label: "Full deployment & go-live", color: "var(--brand-blue)" },
  { v: "24/7", label: "Automated patient responses", color: "var(--brand-red)" },
  { v: "<60s", label: "Average response time", color: "var(--brand-green)" },
];

const challenges = [
  "Slow response times: patients messaging outside clinic hours received no reply and chose competitors instead.",
  "Staff overloaded: reception spent hours answering repetitive FAQs instead of serving in-clinic patients.",
  "Location friction: new patients frequently asked for directions, consuming staff time on every inquiry.",
  "No follow-up system: interested prospects who did not book immediately were never followed up with automatically.",
];

const solutions = [
  {
    icon: MessageSquare,
    title: "Intelligent appointment booking",
    body: "Patients select services, choose time slots and receive confirmation automatically.",
  },
  {
    icon: CheckCircle2,
    title: "FAQ automation",
    body: "Pricing, treatment details, eligibility questions and clinic policies answered instantly at any hour.",
  },
  {
    icon: MapPin,
    title: "Automatic location sharing",
    body: "Every new inquiry receives the clinic's Google Maps pin automatically.",
  },
  {
    icon: Clock,
    title: "Automated follow-up sequences",
    body: "Prospects who inquire but don't book immediately receive structured follow-up messages.",
  },
];

const techStack = [
  "n8n Workflow Automation",
  "Meta WhatsApp Business API",
  "360Dialog",
  "Webhook Integration",
  "Google Maps API",
];

const timeline = [
  {
    day: "Day 1",
    title: "Discovery & configuration",
    body: "Mapped all patient inquiry types, booking flow, FAQs and escalation scenarios. WhatsApp Business API access configured via 360Dialog.",
  },
  {
    day: "Day 2",
    title: "Build & internal testing",
    body: "AI agent built in n8n with full conversation logic. Webhook endpoints configured. Booking confirmation, FAQ response library and location-sharing flows completed and tested internally.",
  },
  {
    day: "Day 3",
    title: "Live deployment",
    body: "Agent went live on the clinic's WhatsApp. Follow-up sequences activated. Staff briefed on handoff protocols for complex queries.",
  },
];

const results = [
  {
    k: "Walk-in clients",
    v: "Increased — faster response converted more inquiries into actual clinic visits.",
  },
  { k: "Staff workload", v: "Reduced — reception team freed from repetitive WhatsApp messages." },
  {
    k: "Response time",
    v: "< 60 sec — every patient inquiry answered automatically, day or night.",
  },
  { k: "Deployment", v: "72 hours — from initial brief to fully operational live agent." },
];

const glassCard = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm";

function CaseStudyDetailPage() {
  return (
    <PageLayout>
      <article className="bg-[var(--ink)] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src={bannerCases}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[var(--ink)]" />
          <div className="container-x relative py-14 md:py-20">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to case studies
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                style={{ background: "var(--brand-red)" }}
              >
                Case Study
              </span>
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white"
                style={{ background: "var(--brand-blue)" }}
              >
                AI Automation
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-white">
                WhatsApp AI Agent
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-display font-extrabold leading-[1.05] tracking-tight text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl">
              How a DHA Lahore Aesthetics Clinic Got More Walk-ins & Zero After-Hours Missed
              Bookings in 72 Hours
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <span>
                <span className="text-white/55">Industry:</span> Aesthetics & Medical Spa
              </span>
              <span>
                <span className="text-white/55">Location:</span> DHA Lahore, Pakistan
              </span>
              <span>
                <span className="text-white/55">Solution:</span> WhatsApp AI Agent
              </span>
              <span>
                <span className="text-white/55">Deploy time:</span> 72 Hours
              </span>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE SHOWCASE + STATS */}
        <section className="container-x pb-2">
          <Reveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black">
              <img
                src={featuredWhatsappAi}
                alt="The Vertex Technologies agentic AI WhatsApp automation for aesthetics clinic"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className={`${glassCard} p-5 flex flex-col items-start`}>
                  <span className="text-display text-3xl md:text-4xl" style={{ color: s.color }}>
                    {s.v}
                  </span>
                  <span className="mt-1.5 text-sm text-white/60">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTENT — glass box */}
        <section className="relative py-12 md:py-16">
          <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden />
          <div className="container-x relative">
            <Reveal>
              <div className="mx-auto max-w-4xl glass-dark rounded-3xl p-6 sm:p-9 lg:p-12 space-y-14">
                {/* Overview */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    Overview
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    A leading aesthetics clinic in DHA Lahore was losing patients to slow response
                    times. Potential patients reaching out on WhatsApp after hours or during busy
                    periods were not receiving timely replies. In aesthetics, speed of response is
                    directly tied to booking conversion — a delayed reply means a lost client. The
                    Vertex Technologies was engaged to design and deploy a fully automated WhatsApp
                    AI Agent that could handle patient communication, bookings and follow-ups around
                    the clock without adding headcount.
                  </p>
                </div>

                {/* Challenge */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    The Challenge
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {challenges.map((c) => (
                      <li key={c} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                        <span className="text-white/75 leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    The Solution
                  </h2>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {solutions.map((s) => (
                      <div key={s.title} className={`${glassCard} p-6`}>
                        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-[var(--brand-blue)]/20">
                          <s.icon className="h-5 w-5 text-[var(--brand-blue)]" />
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold leading-tight">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    Technology Stack
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Implementation */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    Implementation
                  </h2>
                  <div className="mt-6 space-y-4">
                    {timeline.map((t) => (
                      <div key={t.day} className={`${glassCard} relative p-6 pl-7`}>
                        <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[var(--brand-orange)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                          {t.day}
                        </span>
                        <h3 className="mt-1 font-display text-lg md:text-xl font-bold">
                          {t.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow diagram */}
                <figure>
                  <div className="rounded-2xl border border-white/10 overflow-x-auto bg-[#0e0e12]">
                    <img
                      src={caseStudyWorkflow}
                      alt="n8n workflow: WhatsApp trigger to AI agent handling booking, FAQs and follow-ups"
                      className="h-auto w-full min-w-[680px]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
                    <Workflow className="h-4 w-4" />
                    <span>The automated WhatsApp AI Agent workflow built in n8n.</span>
                    <span className="sm:hidden">(swipe to view)</span>
                  </figcaption>
                </figure>

                {/* Results */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    Results
                  </h2>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {results.map((r) => (
                      <div key={r.k} className={`${glassCard} p-5`}>
                        <p className="font-display font-bold text-[var(--brand-green)]">{r.k}</p>
                        <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{r.v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="rounded-3xl bg-black/40 border border-white/10 p-7 md:p-9">
                  <Quote className="h-9 w-9 text-[var(--brand-orange)]" />
                  <p className="mt-4 text-lg md:text-2xl font-display leading-snug text-balance">
                    "The agent was live within three days and immediately started handling patient
                    inquiries we were previously missing. Walk-in traffic increased noticeably
                    within the first week as patients received instant replies and directions
                    automatically."
                  </p>
                  <footer className="mt-5 text-sm text-white/60">
                    — Clinic Management, DHA Lahore Aesthetics Practice
                  </footer>
                </blockquote>

                {/* Key takeaway */}
                <div className="rounded-2xl border-l-4 border-[var(--brand-red)] bg-white/5 p-7">
                  <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                    Key Takeaway
                  </h2>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Speed of response is the new competitive advantage in healthcare. In Pakistan's
                    growing aesthetics market, patients do not wait — they message multiple clinics
                    simultaneously and book with whoever responds first. An AI agent that replies in
                    under 60 seconds, even at 2am on a Sunday, is not a luxury; it is a revenue
                    protection system. This deployment demonstrated that AI automation does not
                    require months of setup or enterprise budgets. A focused, well-built agent can
                    be live and generating ROI within 72 hours.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--brand-red)",
                      boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)",
                    }}
                  >
                    Get a system like this <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/10"
                  >
                    <ArrowLeft className="h-4 w-4" /> All case studies
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Ready for similar results?"
        title="Deploy an AI agent that never misses a lead."
        body="Book a free strategy call and get a tailored automation roadmap within 24 hours."
      />
    </PageLayout>
  );
}
