import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Brain,
  Calendar,
  CheckCircle2,
  Cog,
  MessageSquare,
  Phone,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerAi from "@/assets/banner-ai.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/ai-solutions")({
  head: () =>
    buildSeoHead({
      title: "Custom AI Agents & Automation | The Vertex Technologies",
      description:
        "The Vertex Technologies builds custom AI agents for sales, support and operations that run 24/7, cut manual workload and scale your business intelligently.",
      url: "https://www.thevertextechnologies.com/ai-solutions",
    }),
  component: AISolutionsPage,
});

type AiService = {
  icon: LucideIcon;
  color: string;
  soft: string;
  title: string;
  tagline: string;
  body: string;
  outcome: string;
  capabilities: string[];
  architecture: string[];
  integrations: string[];
  href: string;
  hrefLabel: string;
};

const aiServices: AiService[] = [
  {
    icon: Bot,
    color: "var(--brand-red)",
    soft: "var(--brand-red-soft)",
    title: "Specialized AI Agents",
    tagline: "Move beyond generic chatbots.",
    body: "We design agents for sales, support, and operations — each scoped to a real workflow, live data, and clear escalation rules. The agent acts in your systems: it qualifies, books, logs, and hands off. It does not just reply.",
    outcome: "More capable automation. Better control. Less generic AI noise.",
    capabilities: [
      "Customer support agents",
      "Sales qualification agents",
      "Internal operations agents",
      "Voice and chat delivery",
      "Live API actions",
      "Human escalation logic",
    ],
    architecture: [
      "Workflow mapping",
      "Tools & knowledge",
      "Agent orchestration",
      "Human escalation",
      "Analytics",
    ],
    integrations: ["CRM", "WhatsApp", "Calendly", "Google Calendar", "n8n", "Helpdesk"],
    href: "/blog/what-is-agentic-ai",
    hrefLabel: "What is agentic AI?",
  },
  {
    icon: Phone,
    color: "var(--brand-blue)",
    soft: "var(--brand-blue-soft)",
    title: "AI Voice Reception",
    tagline: "Answer, qualify, and book on the first call.",
    body: "Inbound voice agents for clinics and service businesses: they pick up immediately, run a consistent intake, check live calendar availability, and book — or escalate clinical and complex cases to staff with context.",
    outcome: "After-hours capture. Faster first response. Coordinators stay with patients already in the clinic.",
    capabilities: [
      "Always-on first response",
      "Standardized intake scripts",
      "Calendar-assisted booking",
      "Missed-call recovery",
      "Staff escalation with context",
      "Structured lead logging",
    ],
    architecture: [
      "Inbound call",
      "Speech & intent",
      "Intake + tools",
      "Calendar / CRM write",
      "Human handoff",
    ],
    integrations: [
      "ElevenLabs",
      "Gemini",
      "Google Calendar",
      "Practice software",
      "WhatsApp",
      "CRM",
    ],
    href: "/case-studies/ai-reception-aesthetic-clinic",
    hrefLabel: "Radiance voice + WhatsApp case study",
  },
  {
    icon: MessageSquare,
    color: "var(--brand-green)",
    soft: "var(--brand-green-soft)",
    title: "WhatsApp AI Automation",
    tagline: "Automate the channel your leads already use.",
    body: "WhatsApp agents for bookings, FAQs, location sharing, follow-ups, and order or appointment updates — with approved templates and a human handoff when the conversation needs a person.",
    outcome: "Faster replies on the highest-intent channel. Fewer after-hours missed bookings.",
    capabilities: [
      "WhatsApp booking flows",
      "FAQ and location replies",
      "Lead qualification",
      "Reminders and follow-up",
      "Template workflow design",
      "Human handoff",
    ],
    architecture: [
      "WhatsApp event",
      "Intent detection",
      "Business system lookup",
      "Reply or template",
      "Staff handoff",
    ],
    integrations: [
      "WhatsApp Business API",
      "Google Calendar",
      "Google Sheets",
      "CRM",
      "n8n",
      "Twilio",
    ],
    href: "/case-studies/dha-lahore-aesthetics-clinic",
    hrefLabel: "DHA Lahore WhatsApp case study",
  },
  {
    icon: Calendar,
    color: "var(--brand-orange)",
    soft: "var(--brand-orange-soft)",
    title: "AI Sales Qualification",
    tagline: "Capture, score, and route leads automatically.",
    body: "Engage inbound leads on web, WhatsApp, and voice. Ask qualification questions, score intent, recommend next steps, and route genuine fits into your CRM or booking flow — so sales spends time on buyers, not inbox triage.",
    outcome: "Cleaner pipeline. Seconds-not-hours first response. Sales focused on qualified buyers.",
    capabilities: [
      "Conversational qualification",
      "Intent scoring",
      "CRM field updates",
      "Calendar booking handoff",
      "Quote and inquiry intake",
      "Automated follow-up triggers",
    ],
    architecture: [
      "Lead source",
      "AI qualification",
      "Scoring & routing",
      "CRM sync",
      "Sales handoff",
    ],
    integrations: ["HubSpot", "Calendly", "WhatsApp", "Google Sheets", "Slack", "n8n"],
    href: "/blog/ai-booking-automation-aesthetics-clinics-case-study",
    hrefLabel: "72-hour booking automation study",
  },
  {
    icon: Workflow,
    color: "var(--brand-red)",
    soft: "var(--brand-red-soft)",
    title: "Workflow & CRM Automation",
    tagline: "Stop re-typing the same lead into five tools.",
    body: "Connect the systems your team already uses. Intake records, calendar writes, notifications, reporting, and follow-up sequences run from events — not from someone copying a WhatsApp thread into a spreadsheet.",
    outcome: "Fewer errors. Faster operations. Teams freed for high-value work.",
    capabilities: [
      "Lead logging and deduplication",
      "Calendar and booking sync",
      "Staff alerts and escalations",
      "Reporting dashboards",
      "Follow-up sequences",
      "Custom API orchestration",
    ],
    architecture: [
      "Event trigger",
      "Workflow engine",
      "API orchestration",
      "Notification layer",
      "Analytics",
    ],
    integrations: [
      "n8n",
      "Google Sheets",
      "Google Calendar",
      "HubSpot",
      "Slack",
      "WhatsApp",
    ],
    href: "/book-a-call",
    hrefLabel: "Map a workflow on a strategy call",
  },
  {
    icon: Brain,
    color: "var(--brand-blue)",
    soft: "var(--brand-blue-soft)",
    title: "Machine Learning & Predictive Analytics",
    tagline: "Turn data into strategic growth.",
    body: "We transform historical and live data into forecasts, anomaly detection, and dashboards your team can act on — so decisions are not stuck in a weekly spreadsheet pull.",
    outcome: "Earlier signals. Less dashboard digging. Decisions grounded in the numbers you already have.",
    capabilities: [
      "Predictive analytics for sales and ops",
      "Pattern and opportunity models",
      "Dashboards and visualization",
      "Anomaly detection",
      "KPI summaries",
      "Continuous model monitoring",
    ],
    architecture: [
      "Data sources",
      "Feature pipeline",
      "Models & rules",
      "Dashboards & alerts",
      "Feedback loop",
    ],
    integrations: [
      "Google Sheets",
      "CRM",
      "Analytics",
      "Looker Studio",
      "Slack",
      "Airtable",
    ],
    href: "/growth-consulting",
    hrefLabel: "Growth consulting",
  },
  {
    icon: Cog,
    color: "var(--brand-green)",
    soft: "var(--brand-green-soft)",
    title: "Cognitive Automation & Smart Systems",
    tagline: "Build autonomous business workflows.",
    body: "We combine AI, rules, and process automation so repeatable work runs without adding headcount — with monitoring, auditability, and a human in the loop where it matters.",
    outcome: "Scale operations without scaling the front desk or the inbox.",
    capabilities: [
      "Intelligent process automation",
      "AI-powered workflow optimization",
      "Autonomous sales, support, and admin flows",
      "Real-time monitoring",
      "Role-based access",
      "Enterprise tool integration",
    ],
    architecture: [
      "Process map",
      "Rules + AI layer",
      "System actions",
      "Monitoring",
      "Human review",
    ],
    integrations: ["CRM", "Helpdesk", "Calendar", "n8n", "Slack", "Internal APIs"],
    href: "/services",
    hrefLabel: "See all Vertex services",
  },
];

function ArchitectureFlow({ steps, color }: { steps: string[]; color: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <span key={step} className="inline-flex items-center gap-1.5">
          <span className="rounded-lg border border-white/40 bg-white/35 px-2.5 py-1 text-xs font-medium backdrop-blur-md">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0" style={{ color }} />
          )}
        </span>
      ))}
    </div>
  );
}

function AISolutionsPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="AI Solutions"
        title="Transform your business with intelligent AI systems."
        intro="Combining intelligent agents, machine learning, predictive analytics and cognitive automation to create autonomous business systems that deliver measurable results."
        image={bannerAi}
      />

      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-35 pointer-events-none" aria-hidden />
        <div className="container-x relative">
          <SectionHeader
            eyebrow="AI services"
            title="Practical AI agents and automations for the workflows you already run."
            intro="Each system is scoped around a real business function — voice, WhatsApp, qualification, booking, and operations — with live tools, escalation rules, and a clear outcome. Not a chatbot bolted onto a landing page."
          />

          <div className="mt-12 space-y-6">
            {aiServices.map((s) => (
              <Reveal key={s.title}>
                <article className="rounded-3xl border border-white/40 bg-white/45 p-6 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_50px_-28px_rgba(26,31,41,0.28)] backdrop-blur-xl">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-5">
                      <div
                        className="h-14 w-14 rounded-2xl flex items-center justify-center"
                        style={{ background: s.soft }}
                      >
                        <s.icon className="h-7 w-7" style={{ color: s.color }} />
                      </div>
                      <h2 className="text-display text-3xl md:text-4xl mt-5">{s.title}</h2>
                      <p className="mt-3 text-lg font-medium" style={{ color: s.color }}>
                        {s.tagline}
                      </p>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
                      <div
                        className="mt-6 rounded-2xl border border-white/35 bg-white/30 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-xl"
                        style={{ borderLeftWidth: 4, borderLeftColor: s.color }}
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          Business outcome
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed">{s.outcome}</p>
                      </div>
                      <Link
                        to={s.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold hover:underline"
                        style={{ color: s.color }}
                      >
                        {s.hrefLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Capabilities
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {s.capabilities.map((c) => (
                            <li
                              key={c}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/35 px-3 py-1.5 text-sm backdrop-blur-md"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 shrink-0"
                                style={{ color: s.color }}
                              />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Architecture
                        </p>
                        <div className="mt-4">
                          <ArchitectureFlow steps={s.architecture} color={s.color} />
                        </div>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Integrations
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {s.integrations.map((tool) => (
                            <li
                              key={tool}
                              className="rounded-full border border-white/40 bg-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] backdrop-blur-md"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why choose Vertex for AI"
            title="Globally trusted AI transformation partner."
            intro="We map the workflow before we write the agent. Delivery is scoped, measurable, and built around the tools you already use."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "AI Expertise", d: "Agents, voice, WhatsApp, ML and predictive analytics", c: "var(--brand-red)" },
              { t: "Operational Impact", d: "Save time and resources at scale", c: "var(--brand-blue)" },
              { t: "Strategic Insight", d: "Data-driven decision-making", c: "var(--brand-orange)" },
              { t: "Future-Ready", d: "Systems built to evolve with you", c: "var(--brand-green)" },
              { t: "Trusted Partnership", d: "Transparent and client-focused", c: "var(--ink)" },
            ].map((p) => (
              <StaggerItem key={p.t} className="card-tile p-6 bg-card">
                <div className="h-2 w-12 rounded-full" style={{ background: p.c }} />
                <p className="mt-5 font-display font-bold text-lg">{p.t}</p>
                <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Start your AI transformation"
        title="Streamline operations, enhance productivity, scale confidently."
        body="Book your free strategy session and explore intelligent AI solutions for your business."
      />
    </PageLayout>
  );
}
