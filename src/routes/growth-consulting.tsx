import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, TrendingUp, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerGrowth from "@/assets/banner-growth.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/growth-consulting")({
  head: () => ({
    meta: [
      { title: "AI-Driven Growth Consulting | The Vertex Technologies" },
      { name: "description", content: "The Vertex Technologies offers AI-driven growth consulting that turns messy operations into scalable systems, with expert roadmaps for long-term results." },
      { property: "og:title", content: "AI-Driven Growth Consulting | The Vertex Technologies" },
      { property: "og:description", content: "The Vertex Technologies offers AI-driven growth consulting that turns messy operations into scalable systems, with expert roadmaps for long-term results." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/growth-consulting" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/growth-consulting" },
    ],
  }),
  component: GrowthPage,
});

const focusAreas = [
  {
    icon: Compass,
    title: "Strategic Clarity",
    body: "Define market position, value proposition and growth direction so every decision compounds.",
    color: "var(--brand-red)",
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    body: "Repeatable processes that allow growth without chaos or constant manual effort.",
    color: "var(--brand-blue)",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    body: "Improve pricing, profitability and the strength of your revenue streams.",
    color: "var(--brand-orange)",
  },
  {
    icon: Target,
    title: "Execution Discipline",
    body: "Frameworks, accountability and performance tracking that turn plans into outcomes.",
    color: "var(--brand-green)",
  },
];

function GrowthPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Growth Consulting"
        title="From ideas to scalable, high‑performance businesses."
        intro="Real, sustainable growth requires more than ambition. It requires clarity, structure and the right systems working together. We bring structure to complexity and strategy to execution."
        image={bannerGrowth}
        dark={false}
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Where founders get stuck" title="The pattern behind stalled growth." />
            <Stagger className="mt-8 space-y-3">
              {[
                "Unclear positioning in competitive markets",
                "Inconsistent or unpredictable growth",
                "Operational inefficiencies slowing execution",
                "Lack of structured systems and processes",
                "Founder overwhelm and limited strategic focus",
              ].map((t, i) => (
                <StaggerItem
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-card"
                >
                  <span
                    className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-mono"
                    style={{
                      background: [
                        "var(--brand-red-soft)",
                        "var(--brand-blue-soft)",
                        "var(--brand-orange-soft)",
                        "var(--brand-green-soft)",
                        "var(--brand-red-soft)",
                      ][i],
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium pt-0.5">{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeader
              eyebrow="Our approach to growth"
              title="Intentional, measurable, system‑driven."
              intro="We work with you to design tailored growth frameworks aligned with your vision, market and operational capacity."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader eyebrow="Four focus areas" title="What we help you build." />
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((f) => (
              <StaggerItem key={f.title} className="card-tile p-7 bg-card h-full">
                <f.icon className="h-7 w-7" style={{ color: f.color }} />
                <h3 className="mt-5 font-display text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              eyebrow="Working with founders"
              title="From operator to leader of systems."
              intro="We bring clarity in direction, structure in operations, focus on high-impact activities, and systems that reduce dependency on constant founder involvement."
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Supporting growing businesses"
              title="Aligned teams, removed inefficiencies, sustainable growth."
              intro="We help organizations align teams, strengthen internal operations and build frameworks that support consistent, long-term growth."
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Take the next step"
        title="Structured. Scalable. Future‑ready."
        body="If growth feels uncertain or inconsistent, it may not be a problem of effort — it may be a problem of structure."
      />
    </PageLayout>
  );
}