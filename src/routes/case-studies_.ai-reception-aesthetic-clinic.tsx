import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  Quote,
  Shield,
  Workflow,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import bannerCases from "@/assets/banner-cases.jpg";
import featuredRadiance from "@/assets/Case Studies Featured Image/Radiance Fearured image.webp";
import workflowRadiance from "@/assets/Case studies/Radiance workflow explained.webp";
import toolsRadiance from "@/assets/Case studies/Radiance tools used.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/case-studies_/ai-reception-aesthetic-clinic")({
  head: () =>
    buildSeoHead({
      title:
        "AI Voice + WhatsApp Reception for a U.S. Aesthetic Clinic — Case Study | The Vertex Technologies",
      description:
        "How a multi-location Austin aesthetic clinic replaced slow, manual lead intake with an always-on AI reception and speed-booking system across voice and WhatsApp.",
      url: "https://www.thevertextechnologies.com/case-studies/ai-reception-aesthetic-clinic",
      type: "article",
    }),
  component: RadianceCaseStudyPage,
});

const stats = [
  { v: "24/7", label: "Always-on first response", color: "var(--brand-red)" },
  { v: "2", label: "Channels: voice + WhatsApp", color: "var(--brand-blue)" },
  { v: "3", label: "Austin metro locations", color: "var(--brand-green)" },
];

const challenges = [
  {
    title: "Slow, staff-dependent follow-up",
    body: "A new prospect could arrive while the front desk was checking out a patient, on another call, or coordinating treatments — delaying the first response by 30 minutes to several hours during busy periods.",
  },
  {
    title: "Inconsistent intake",
    body: "Different staff captured different details for the same type of lead. Downstream follow-up was uneven because records were not comparable.",
  },
  {
    title: "Manual data entry",
    body: "Information from calls, WhatsApp threads, and web inquiries was transferred by hand into a Google Sheet — adding effort, duplicates, and room for error.",
  },
  {
    title: "After-hours inquiries",
    body: "Leads arriving outside front-desk hours could remain unanswered until the next business day, by which point many prospects had already booked elsewhere.",
  },
  {
    title: "Booking friction",
    body: "Booking required a staff member to respond, qualify, check availability, confirm location, schedule, and send confirmation — introducing avoidable back-and-forth.",
  },
];

const principles = [
  "Respond immediately on every channel, then qualify with a consistent script.",
  "Standardize intake — the same required fields every time.",
  "Assist booking against live calendar availability rather than a manual callback.",
  "Escalate clinical, complex, or sensitive conversations to staff — never guess.",
  "Never invent missing data — record gaps explicitly for staff follow-up.",
];

const architecture = [
  { layer: "Channel", job: "Inbound phone (voice) and WhatsApp Business inquiries" },
  {
    layer: "Conversation",
    job: "ElevenLabs conversational voice for speech; Gemini 2.5 Flash for reasoning, intent, and dialogue",
  },
  {
    layer: "Intake & qualification",
    job: "Standardized question set: patient type, treatment interest, location, appointment intent, urgency, contact details",
  },
  { layer: "Scheduling", job: "Live Google Calendar availability check and appointment assistance" },
  { layer: "Confirmation", job: "Booking confirmation and reminders via WhatsApp where configured" },
  { layer: "Data", job: "Structured lead + conversation record written to Google Sheets" },
  { layer: "Escalation", job: "Out-of-scope or sensitive requests routed to staff with context attached" },
  { layer: "Orchestration", job: "n8n hosted on Railway, coordinating all layers from one source of truth" },
];

const techStack = [
  "ElevenLabs conversational voice",
  "VoIP / telephony",
  "Google Gemini 2.5 Flash",
  "n8n on Railway",
  "Google Calendar",
  "Google Sheets",
  "WhatsApp Business (Meta API)",
  "Shopify (optional product lookup)",
];

const phases = [
  { n: "01", title: "Intake mapping", body: "Document lead sources, required patient information, booking workflow, and escalation rules." },
  { n: "02", title: "WhatsApp intake", body: "Deploy structured WhatsApp intake and lead capture." },
  { n: "03", title: "Voice AI", body: "Connect inbound calls to the AI receptionist." },
  { n: "04", title: "Calendar integration", body: "Connect the booking workflow to live Google Calendar availability." },
  { n: "05", title: "Data logging", body: "Standardize lead records inside Google Sheets." },
  { n: "06", title: "Testing", body: "Normal inquiries, missing info, multi-location, changes, complex questions, escalation, concurrent bookings." },
  { n: "07", title: "Optimization", body: "Refine question order, intake accuracy, response quality, escalation and booking flow." },
];

const beforeAfter = [
  { dim: "First response", before: "Variable / staff-dependent", after: "Automated and immediate" },
  { dim: "Intake process", before: "Manual", after: "Structured" },
  { dim: "Lead information", before: "Sometimes incomplete", after: "Standardized fields" },
  { dim: "Data entry", before: "Manual", after: "Automated logging" },
  { dim: "Calendar checking", before: "Staff-dependent", after: "Automated availability check" },
  { dim: "After-hours inquiries", before: "May wait until next day", after: "AI can respond 24/7" },
  { dim: "Booking process", before: "Back-and-forth", after: "Same-conversation where possible" },
  { dim: "Complex questions", before: "Handled manually", after: "AI escalates to staff" },
  { dim: "Follow-up visibility", before: "Spreadsheet-dependent", after: "Structured lead record" },
];

const kpis = [
  { k: "Lead response time", t: "Near-immediate first response" },
  { k: "Intake completeness", t: "90%+ complete records" },
  { k: "Time to booking", t: "Same-session where availability allows" },
  { k: "Manual intake workload", t: "Reduced staff entry time" },
  { k: "Human escalation rate", t: "Tracked with reasons" },
];

const testimonials = [
  {
    quote:
      "The front desk was never the problem — they were already busy with patients in the clinic. New inquiries just had to wait. Now the first response is immediate, intake is the same every time, and coordinators stay with the people already in the chair.",
    by: "Patient coordination",
    org: "Radiance Aesthetics Group, Austin, Texas",
  },
  {
    quote:
      "After-hours WhatsApp and missed-call overflow used to sit until morning. The agent answers, qualifies, checks the calendar, and books — or hands us a complete record if it is clinical. No dead ends.",
    by: "Front desk operations",
    org: "Radiance Aesthetics Group",
  },
  {
    quote:
      "We did not want an AI that guessed at medical questions. We wanted speed on the repeatable first interaction and a clean handoff when a human should take over. That is exactly what went live.",
    by: "Clinic operations",
    org: "Radiance Aesthetics Group — three Austin locations",
  },
];

const faqs = [
  {
    q: "Does the AI replace front-desk staff?",
    a: "No. It handles the repeatable first interaction and data entry so staff can focus on patients in the clinic. Complex and sensitive cases are escalated to a human.",
  },
  {
    q: "Is the system HIPAA-compliant?",
    a: "The system is designed around minimum-necessary data handling. It is not a diagnostic or medical decision-making system. Compliance and BAA status must be verified against the production environment before any such claim is made.",
  },
  {
    q: "What happens if the AI can't handle a request?",
    a: "It escalates to staff with context — medical questions, complaints, and complex treatment questions always route to a human.",
  },
  {
    q: "What channels does it cover?",
    a: "Inbound voice and WhatsApp, with confirmations and reminders via WhatsApp where configured.",
  },
  {
    q: "What does the AI do with missing information?",
    a: "It records the gap explicitly as “Not provided / needs staff follow-up” rather than guessing.",
  },
];

const glassCard = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm";

const caseStudyContents = [
  { n: "01", id: "executive-summary", label: "Executive Summary" },
  { n: "02", id: "client-snapshot", label: "Client Snapshot" },
  { n: "03", id: "industry-context", label: "Industry Context" },
  { n: "04", id: "business-challenge", label: "The Business Challenge" },
  { n: "05", id: "business-objectives", label: "Business Objectives" },
  { n: "06", id: "discovery-findings", label: "Discovery Findings" },
  { n: "07", id: "root-cause-analysis", label: "Root Cause Analysis" },
  { n: "08", id: "solution-strategy", label: "Solution Strategy" },
  { n: "09", id: "ai-architecture", label: "AI Architecture" },
  { n: "10", id: "workflow-before-and-after", label: "Workflow — Before and After" },
  { n: "11", id: "technology-stack", label: "Technology Stack" },
  { n: "12", id: "implementation-plan", label: "Implementation Plan" },
  { n: "13", id: "automation-breakdown", label: "Automation Breakdown" },
  { n: "14", id: "intake-accuracy-framework", label: "Intake Accuracy Framework" },
  { n: "15", id: "before-vs-target-state", label: "Before vs. Target State" },
  { n: "16", id: "business-impact-scalability", label: "Business Impact & Scalability" },
  { n: "17", id: "performance-metrics", label: "Performance Metrics" },
  { n: "18", id: "how-results-should-be-reported", label: "How Results Should Be Reported" },
  { n: "19", id: "compliance-data-handling", label: "Compliance & Data Handling" },
  { n: "20", id: "client-testimonial", label: "Client Testimonial" },
  { n: "21", id: "lessons-continuous-optimization", label: "Lessons & Continuous Optimization" },
  { n: "22", id: "future-roadmap", label: "Future Roadmap" },
  { n: "23", id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { n: "24", id: "take-the-next-step", label: "Take the Next Step" },
  { n: "A", id: "appendix-seo-package", label: "Appendix — SEO Package" },
  { n: "B", id: "appendix-ux-cro", label: "Appendix — UX / CRO Recommendations" },
  { n: "C", id: "positioning-statement", label: "Positioning Statement" },
] as const;

function SectionHeading({
  id,
  children,
  className = "font-display text-2xl md:text-3xl font-bold tracking-tight",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={`scroll-mt-28 ${className}`}>
      {children}
    </h2>
  );
}

function RadianceCaseStudyPage() {
  return (
    <PageLayout>
      <article className="bg-[var(--ink)] text-white">
        <section className="relative overflow-hidden">
          <img
            src={bannerCases}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[var(--ink)]" />
          <div className="container-x relative py-14 md:py-20">
            <Breadcrumbs
              tone="light"
              className="mb-5"
              items={[
                { label: "Home", to: "/" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "AI Reception for Aesthetic Clinic" },
              ]}
            />
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
                AI Agentic Automation
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-white">
                Voice + WhatsApp
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-display font-extrabold leading-[1.05] tracking-tight text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              AI Voice + WhatsApp Reception and Speed-Booking Automation
            </h1>
            <p className="mt-5 max-w-3xl text-base md:text-lg text-white/80 leading-relaxed">
              Replacing a staff-dependent, manual lead-intake process with an always-on agentic
              reception layer for a multi-location U.S. aesthetic clinic.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <span>
                <span className="text-white/55">Client:</span> Radiance Aesthetics Group
              </span>
              <span>
                <span className="text-white/55">Location:</span> Austin, Texas
              </span>
              <span>
                <span className="text-white/55">Industry:</span> Aesthetic Medicine / Med-Spa
              </span>
              <span>
                <span className="text-white/55">Built by:</span> The Vertex Technologies
              </span>
            </div>
          </div>
        </section>

        <section className="container-x pb-2">
          <Reveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black">
              <img
                src={featuredRadiance}
                alt="Radiance Aesthetics Group AI voice and WhatsApp reception dashboard for a multi-location Austin med spa"
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

        <section className="relative py-12 md:py-16">
          <div className="absolute inset-0 gradient-mesh opacity-20" aria-hidden />
          <div className="container-x relative">
            <Reveal>
              <div className="mx-auto max-w-4xl glass-dark rounded-3xl p-6 sm:p-9 lg:p-12 space-y-14">
                <nav
                  aria-label="Table of contents"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
                >
                  <SectionHeading
                    id="contents"
                    className="font-display text-xl md:text-2xl font-bold tracking-tight"
                  >
                    Contents
                  </SectionHeading>
                  <ol className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                    {caseStudyContents.map(({ n, id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group flex gap-2.5 text-white/70 transition-colors hover:text-white"
                        >
                          <span className="w-6 shrink-0 font-mono text-[11px] tabular-nums text-white/40 pt-0.5">
                            {n}
                          </span>
                          <span className="leading-snug group-hover:underline">{label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div>
                  <SectionHeading id="executive-summary">Executive summary</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    Radiance Aesthetics Group operates three aesthetic-medicine clinics across the
                    Austin, Texas metro, drawing high-intent demand from Instagram, Google Ads,
                    referrals, WhatsApp, and website inquiries. Demand was not the constraint. The
                    constraint was the intake layer: new-patient inquiries were handled by a small
                    front-desk team whenever staff were free, with lead details collected and typed
                    into a spreadsheet by hand.
                  </p>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    The Vertex Technologies designed an{" "}
                    <Link to="/ai-solutions" className="font-semibold text-[var(--brand-red)] hover:underline">
                      AI agentic automation
                    </Link>{" "}
                    system to sit in front of that intake process across two channels — inbound
                    voice and WhatsApp. The agent responds immediately, runs a standardized intake,
                    qualifies the inquiry, checks live calendar availability, assists with booking,
                    logs a structured record, and escalates anything clinical or complex to staff.
                    The objective was not to replace the front desk, but to compress the time
                    between a new inquiry and a booked appointment.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    This case study reports the operating model and target workflow. Revenue and
                    appointment-growth figures are only published from measured before/after data —
                    not estimates. See{" "}
                    <a
                      href="#how-results-should-be-reported"
                      className="font-semibold text-[var(--brand-red)] hover:underline"
                    >
                      Section 18
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <SectionHeading id="client-snapshot">Client snapshot</SectionHeading>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {[
                      ["Locations", "3 clinics — Austin, Texas metro"],
                      ["Team", "~20–25 employees, including ~3 patient coordinators"],
                      ["Ideal patient", "Women 28–55, moderate-to-high disposable income"],
                      ["Top treatments", "Botox, fillers, laser hair removal, HydraFacial"],
                      ["Highest-revenue service", "Injectables (Botox & dermal fillers)"],
                      ["Inbound leads", "~250–350 / month across calls, WhatsApp, forms, social"],
                    ].map(([k, v]) => (
                      <div key={k} className={`${glassCard} p-4`}>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                          {k}
                        </p>
                        <p className="mt-1.5 text-sm text-white/80">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="industry-context">Industry context</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    U.S. aesthetic medicine runs on high-intent, time-sensitive, largely cash-pay
                    demand. A prospect researching Botox or filler is often ready to act quickly and
                    will contact more than one clinic until someone responds. Response time
                    functions as a conversion lever: the first clinic to answer clearly and offer a
                    time frequently wins the booking. The bottleneck is rarely ad spend — it is the
                    handoff between an inbound inquiry and a booked chair. See also our{" "}
                    <Link
                      to="/blog/ai-voice-agents-healthcare-clinics"
                      className="font-semibold text-[var(--brand-red)] hover:underline"
                    >
                      AI voice agents for healthcare clinics
                    </Link>{" "}
                    guide.
                  </p>
                </div>

                <div>
                  <SectionHeading id="business-challenge">The business challenge</SectionHeading>
                  <div className="mt-6 space-y-3">
                    {challenges.map((c) => (
                      <div key={c.title} className={`${glassCard} p-5`}>
                        <h3 className="font-display text-lg font-bold">{c.title}</h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="business-objectives">Business objectives</SectionHeading>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className={`${glassCard} p-6`}>
                      <Clock className="h-5 w-5 text-[var(--brand-red)]" />
                      <h3 className="mt-3 font-display text-lg font-bold">Faster lead follow-up</h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        Compress new inquiry → first response → information collection → appointment
                        booking so qualified prospects move without the front desk handling every
                        first interaction.
                      </p>
                    </div>
                    <div className={`${glassCard} p-6`}>
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-green)]" />
                      <h3 className="mt-3 font-display text-lg font-bold">Improve intake accuracy</h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        Capture every lead against a consistent structure: name, phone, new vs
                        returning, source, treatment, preferred clinic and time, urgency, and
                        booking status.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionHeading id="discovery-findings">Discovery findings</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    Before designing anything, the engagement mapped the real intake environment:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Lead sources — Instagram, Google Ads, referrals, website inquiries, and WhatsApp, each arriving in a different format and place.",
                      "Current workflow — a linear, staff-gated path from inquiry to manual spreadsheet entry to manual calendar check to manual confirmation.",
                      "Required patient information — the minimum fields the front desk actually needs to qualify and book a lead.",
                      "Escalation rules — the categories (medical questions, complaints, complex treatment questions) that must always reach a human.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                        <span className="text-white/75 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading id="root-cause-analysis">Root cause analysis</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    The delays were not a staff-effort problem — they were structural. The front
                    desk was a single-threaded resource performing reception, qualification,
                    scheduling, and data entry at the same time, and dropping whichever task was
                    least visible (usually the new inquiry).
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "No always-on first response — coverage was tied to staff availability and clinic hours.",
                      "No standardized intake — each interaction captured a different data shape.",
                      "Manual transfer of data — every lead had to be re-keyed into the spreadsheet.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                        <span className="text-white/75 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading id="solution-strategy">Solution strategy</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    We did not propose replacing the front desk. We placed a supervised, always-on{" "}
                    <Link
                      to="/blog/what-is-agentic-ai"
                      className="font-semibold text-[var(--brand-red)] hover:underline"
                    >
                      agentic layer
                    </Link>{" "}
                    in front of intake that handles the repeatable first interaction and escalates
                    the exceptional case to a human with context.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {principles.map((p) => (
                      <li key={p} className="flex gap-3 items-start">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-green)]" />
                        <span className="text-white/75 leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading id="ai-architecture">AI architecture</SectionHeading>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    A layered agentic system rather than a single chatbot. Voice and WhatsApp share
                    the same intake logic and the same source of truth.
                  </p>
                  <div className="mt-6 space-y-2">
                    {architecture.map((row) => (
                      <div
                        key={row.layer}
                        className="grid sm:grid-cols-12 gap-2 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      >
                        <p className="sm:col-span-4 font-display font-bold text-[var(--brand-orange)]">
                          {row.layer}
                        </p>
                        <p className="sm:col-span-8 text-sm text-white/70 leading-relaxed">
                          {row.job}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="workflow-before-and-after">
                    Workflow — before and after
                  </SectionHeading>
                  <p className="mt-4 text-sm text-white/60">
                    Previous: lead arrives → staff if available → questions asked manually →
                    spreadsheet → calendar check → times relayed → confirm → appointment entered by
                    hand.
                  </p>
                  <ol className="mt-6 space-y-3">
                    {[
                      "Lead arrives via phone or WhatsApp.",
                      "AI receptionist responds immediately and opens a standardized intake.",
                      "System captures patient type, treatment interest, location, appointment preference, urgency, and contact details.",
                      "Information is structured into a consistent record.",
                      "Automation checks Google Calendar availability.",
                      "Prospect receives appointment options without waiting for a callback.",
                      "On confirmation, booking is recorded, confirmation sent, and details logged.",
                      "Out-of-scope questions are escalated to staff for human follow-up.",
                    ].map((step, i) => (
                      <li key={step} className="flex gap-3 items-start">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)] text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-white/75 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <figure>
                  <div className="rounded-2xl border border-white/10 overflow-x-auto bg-[#0e0e12]">
                    <img
                      src={workflowRadiance}
                      alt="Radiance Aesthetics AI reception workflow: voice and WhatsApp intake, qualification, calendar booking, and staff escalation"
                      className="h-auto w-full min-w-[680px]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
                    <Workflow className="h-4 w-4" />
                    <span>How a live interaction flows across voice, WhatsApp, calendar, and logging.</span>
                    <span className="sm:hidden">(swipe to view)</span>
                  </figcaption>
                </figure>

                <div>
                  <SectionHeading id="technology-stack">Technology stack</SectionHeading>
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

                <figure>
                  <div className="rounded-2xl border border-white/10 overflow-x-auto bg-[#0e0e12]">
                    <img
                      src={toolsRadiance}
                      alt="Tools used in the Radiance AI reception build: ElevenLabs, Gemini, n8n, Google Calendar, Google Sheets, WhatsApp Business"
                      className="h-auto w-full min-w-[680px]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-xs text-white/60">
                    The production stack coordinating voice, messaging, calendar, and lead records.
                  </figcaption>
                </figure>

                <div>
                  <SectionHeading id="implementation-plan">Implementation plan</SectionHeading>
                  <div className="mt-6 space-y-4">
                    {phases.map((p) => (
                      <div key={p.n} className={`${glassCard} relative p-6 pl-7`}>
                        <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[var(--brand-orange)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                          Phase {p.n}
                        </span>
                        <h3 className="mt-1 font-display text-lg md:text-xl font-bold">{p.title}</h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="automation-breakdown">Automation breakdown</SectionHeading>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Phone, title: "Voice AI", body: "Handles inbound (and where configured, outbound) phone conversations." },
                      { icon: MessageSquare, title: "WhatsApp AI", body: "Handles incoming WhatsApp inquiries and structured intake." },
                      { icon: CheckCircle2, title: "Lead qualification", body: "Identifies new vs. returning, treatment interest, location, appointment intent, and urgency." },
                      { icon: Calendar, title: "Booking", body: "Checks Google Calendar slots and assists with scheduling in the same conversation." },
                    ].map((s) => (
                      <div key={s.title} className={`${glassCard} p-6`}>
                        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-[var(--brand-blue)]/20">
                          <s.icon className="h-5 w-5 text-[var(--brand-blue)]" />
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="intake-accuracy-framework">
                    Intake accuracy framework
                  </SectionHeading>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    Quality-control rule: the automation does not invent missing information. Where
                    a field is unavailable it is recorded as “Not provided / needs staff follow-up.”
                  </p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    {[
                      ["Identity", "Name; phone number"],
                      ["Lead classification", "New / returning patient; lead source"],
                      ["Treatment", "Service requested; general reason for inquiry"],
                      ["Location", "Preferred clinic"],
                      ["Scheduling", "Preferred day, time, and appointment status"],
                      ["Follow-up", "Escalation required?; follow-up status"],
                    ].map(([k, v]) => (
                      <div key={k} className={`${glassCard} p-4`}>
                        <p className="font-display font-bold text-[var(--brand-green)]">{k}</p>
                        <p className="mt-1 text-sm text-white/70">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="before-vs-target-state">Before vs. target state</SectionHeading>
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="px-4 py-3 font-display font-bold">Dimension</th>
                          <th className="px-4 py-3 font-display font-bold text-white/60">Previous</th>
                          <th className="px-4 py-3 font-display font-bold text-[var(--brand-green)]">
                            Target
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row) => (
                          <tr key={row.dim} className="border-t border-white/10">
                            <td className="px-4 py-3 font-semibold">{row.dim}</td>
                            <td className="px-4 py-3 text-white/55">{row.before}</td>
                            <td className="px-4 py-3 text-white/85">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <SectionHeading id="business-impact-scalability">
                    Business impact & scalability
                  </SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    The system converts a fixed-capacity intake bottleneck into elastic capacity.
                    Because the agent handles the repeatable first interaction across all three
                    locations, additional volume — or an additional clinic — adds little marginal
                    reception load. Coordinators are freed from switchboard and data-entry duty to
                    focus on patients already in the clinic.
                  </p>
                </div>

                <div>
                  <SectionHeading id="performance-metrics">Performance metrics</SectionHeading>
                  <p className="mt-4 text-sm text-white/55">
                    Success is measured as operational improvement, not guaranteed revenue. Targets
                    below; published numbers come from verified before/after measurement only.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {kpis.map((r) => (
                      <div key={r.k} className={`${glassCard} p-5`}>
                        <p className="font-display font-bold text-[var(--brand-green)]">{r.k}</p>
                        <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{r.t}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="how-results-should-be-reported">
                    How results should be reported
                  </SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    To keep the case study credible, capture matched before/after data around
                    deployment.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className={`${glassCard} p-6`}>
                      <h3 className="font-display text-lg font-bold">Measure before implementation</h3>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {[
                          "Average response time; missed-call percentage",
                          "Number of inbound leads; number of incomplete intake records",
                          "Average booking time; monthly booked appointments",
                          "Staff hours spent on manual intake",
                        ].map((item) => (
                          <li key={item} className="flex gap-2 items-start">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${glassCard} p-6`}>
                      <h3 className="font-display text-lg font-bold">Measure after implementation</h3>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {[
                          "Average first-response time; share of leads receiving immediate response",
                          "Intake completeness; booking time; number of automated bookings",
                          "Number of escalations; staff time saved",
                        ].map((item) => (
                          <li key={item} className="flex gap-2 items-start">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${glassCard} p-6 flex gap-4`}>
                  <Shield className="h-6 w-6 shrink-0 text-[var(--brand-blue)]" />
                  <div>
                    <SectionHeading
                      id="compliance-data-handling"
                      className="font-display text-xl font-bold tracking-tight"
                    >
                      Compliance & data handling
                    </SectionHeading>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      The AI collects only what is needed for lead management, appointment
                      scheduling, follow-up, and customer communication. It is not positioned as a
                      diagnostic system. Medical questions escalate to clinic staff. BAA / HIPAA
                      claims are only made after the production environment is reviewed and
                      confirmed.
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeading id="client-testimonial">Client testimonial</SectionHeading>
                  <p className="mt-3 text-sm text-white/55">
                    What changed most for the front desk after the AI receptionist went live.
                  </p>
                  <div className="mt-6 space-y-4">
                    {testimonials.map((t) => (
                      <blockquote
                        key={t.by}
                        className="rounded-3xl bg-black/40 border border-white/10 p-7 md:p-9"
                      >
                        <Quote className="h-8 w-8 text-[var(--brand-orange)]" />
                        <p className="mt-4 text-lg md:text-xl font-display leading-snug">
                          “{t.quote}”
                        </p>
                        <footer className="mt-5 text-sm text-white/60">
                          — {t.by}, {t.org}
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading id="lessons-continuous-optimization">
                    Lessons & continuous optimization
                  </SectionHeading>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    The largest operational gain comes from combining immediate response, structured
                    intake, and assisted booking — not from an AI simply answering calls.
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/45">
                    What to optimize continuously
                  </p>
                  <ul className="mt-4 space-y-2 text-white/75">
                    {[
                      "Intake question sequence and AI response quality",
                      "Lead qualification and booking accuracy",
                      "Escalation logic and staff notification",
                      "Duplicate-lead prevention and calendar-conflict prevention",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading id="future-roadmap">Future roadmap</SectionHeading>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    Phase 2 opportunities, sequenced as the core system stabilizes:
                  </p>
                  <ul className="mt-5 space-y-2 text-white/75">
                    {[
                      "CRM integration beyond the spreadsheet",
                      "Automated lead follow-up sequences",
                      "Advanced reporting dashboards",
                      "Missed-call recovery and review-request automation",
                      "Additional messaging channels and Shopify lookup where relevant",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading id="frequently-asked-questions">
                    Frequently asked questions
                  </SectionHeading>
                  <Accordion
                    type="single"
                    collapsible
                    className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 md:px-6"
                  >
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={faq.q}
                        value={`faq-${index}`}
                        className="border-white/10"
                      >
                        <AccordionTrigger className="py-5 text-left font-display text-base font-semibold leading-snug text-white hover:no-underline md:text-lg [&[data-state=open]>svg]:text-white">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-base leading-relaxed text-white/70">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <SectionHeading id="take-the-next-step">Take the next step</SectionHeading>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">
                    Your intake process is either capturing demand or leaking it. The Vertex
                    Technologies will map exactly where response delays and intake gaps are costing
                    you bookings — before you spend another dollar on ads.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
                    Related
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <Link
                        to="/case-studies/dha-lahore-aesthetics-clinic"
                        className="inline-flex items-center gap-2 font-semibold text-[var(--brand-red)] hover:underline"
                      >
                        DHA Lahore aesthetics WhatsApp AI agent
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/ai-booking-automation-aesthetics-clinics-case-study"
                        className="inline-flex items-center gap-2 font-semibold text-[var(--brand-red)] hover:underline"
                      >
                        AI booking automation for aesthetics clinics
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ai-solutions"
                        className="inline-flex items-center gap-2 font-semibold text-[var(--brand-red)] hover:underline"
                      >
                        AI automation services
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/book-a-call"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--brand-red)",
                      boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)",
                    }}
                  >
                    Book a lead-intake audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Talk to The Vertex Technologies
                  </Link>
                </div>

                <div>
                  <SectionHeading id="appendix-seo-package">Appendix — SEO package</SectionHeading>
                  <div className="mt-5 space-y-3 text-sm text-white/70">
                    <p>
                      <span className="font-semibold text-white/85">Primary keyword:</span> AI
                      receptionist for aesthetic clinics
                    </p>
                    <p>
                      <span className="font-semibold text-white/85">Secondary keywords:</span> AI
                      voice agent med spa; WhatsApp booking automation; speed to lead med spa; med
                      spa lead intake automation
                    </p>
                    <p>
                      <span className="font-semibold text-white/85">Schema:</span> Article +
                      FAQPage + Organization + BreadcrumbList
                    </p>
                  </div>
                </div>

                <div>
                  <SectionHeading id="appendix-ux-cro">
                    Appendix — UX / CRO recommendations
                  </SectionHeading>
                  <ul className="mt-5 space-y-2 text-sm text-white/70">
                    {[
                      "Table of contents with anchor links to each section",
                      "Before/after comparison block and workflow architecture diagrams",
                      "Quote blocks for client testimonials",
                      "Audit CTA repeated mid-page and in the footer",
                      "Related case studies strip for internal linking",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-green)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border-l-4 border-[var(--brand-red)] bg-white/5 p-7">
                  <SectionHeading
                    id="positioning-statement"
                    className="font-display text-xl md:text-2xl font-bold tracking-tight"
                  >
                    Positioning statement
                  </SectionHeading>
                  <p className="mt-3 leading-relaxed text-white/75">
                    The story is not “we installed AI and generated extra revenue.” Radiance
                    Aesthetics Group had a lead-intake process that relied heavily on staff
                    availability and manual information collection. The AI receptionist was designed
                    to respond immediately, standardize intake, and help prospects move toward
                    booking without waiting for a callback. The objective was not to replace the
                    front desk, but to reduce response delays, improve intake consistency, and let
                    staff focus on patients already in the clinic.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Your intake is either capturing demand or leaking it"
        title="Map where response delays are costing you bookings."
        body="Book a free strategy call. We'll tell you honestly whether voice, WhatsApp, or a simple rule is the right first layer."
      />
    </PageLayout>
  );
}
