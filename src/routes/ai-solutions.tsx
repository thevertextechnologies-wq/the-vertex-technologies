import { createFileRoute } from "@tanstack/react-router";
import { Bot, Brain, Cog, CheckCircle2 } from "lucide-react";
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

const blocks = [
  {
    icon: Bot,
    color: "var(--brand-red)",
    soft: "var(--brand-red-soft)",
    title: "Intelligent AI Agents",
    sub: "AI that works for your business.",
    body: "Custom AI agents handle routine and complex tasks across sales, support and operations — reducing human error, improving productivity and freeing teams to focus on strategic work.",
    capabilities: [
      "AI agents for sales prospecting, support and operations",
      "Chatbots and voice assistants for instant engagement",
      "Workflow integration with CRM and internal systems",
      "Predictive insights to anticipate customer behavior",
      "Internal productivity agents for employee support",
    ],
  },
  {
    icon: Brain,
    color: "var(--brand-blue)",
    soft: "var(--brand-blue-soft)",
    title: "Machine Learning & Predictive Analytics",
    sub: "Turn data into strategic growth.",
    body: "We transform historical and real‑time data into actionable insights that forecast trends, optimize operations and unlock growth potential.",
    capabilities: [
      "Predictive analytics for sales, ops and marketing",
      "Machine learning models for patterns and opportunities",
      "Dashboards and visualization for actionable insight",
      "Cognitive automation to detect anomalies",
      "Continuous model improvement and monitoring",
    ],
  },
  {
    icon: Cog,
    color: "var(--brand-green)",
    soft: "var(--brand-green-soft)",
    title: "Cognitive Automation & Smart Systems",
    sub: "Build autonomous business workflows.",
    body: "We integrate AI, ML and intelligent process automation into systems that operate autonomously, learn from data and improve over time — so you scale without adding headcount.",
    capabilities: [
      "Intelligent process automation",
      "AI-powered workflow optimization",
      "Autonomous systems for sales, support and admin",
      "Real-time monitoring and automated decisions",
      "Integration with existing enterprise tools",
    ],
  },
];

function AISolutionsPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="AI Solutions"
        title="Transform your business with intelligent AI systems."
        intro="Combining intelligent agents, machine learning, predictive analytics and cognitive automation to create autonomous business systems that deliver measurable results."
        image={bannerAi}
      />

      {blocks.map((b, i) => (
        <section
          key={b.title}
          className={`py-20 ${i % 2 === 1 ? "bg-[var(--surface)]" : ""}`}
        >
          <div className="container-x grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center"
                  style={{ background: b.soft }}
                >
                  <b.icon className="h-7 w-7" style={{ color: b.color }} />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display text-4xl md:text-5xl mt-6">{b.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 text-lg" style={{ color: b.color }}>
                  {b.sub}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                  {b.body}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="card-tile p-8 bg-card">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Core capabilities
                </p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {b.capabilities.map((c) => (
                    <StaggerItem key={c} className="flex gap-2 items-start text-sm">
                      <CheckCircle2
                        className="h-5 w-5 mt-0.5 shrink-0"
                        style={{ color: b.color }}
                      />
                      <span>{c}</span>
                    </StaggerItem>
                  ))}
                </ul>
              </Stagger>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why choose Vertex for AI"
            title="Globally trusted AI transformation partner."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "AI Expertise", d: "Agents, ML and predictive analytics", c: "var(--brand-red)" },
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