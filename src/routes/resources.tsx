import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    title: "AI & Automation Playbooks | The Vertex Technologies",
    meta: [
      { name: "description", content: "Practical, expert-authored playbooks, guides and research from The Vertex Technologies to help you put AI, automation and growth systems to work." },
      { property: "og:title", content: "AI & Automation Playbooks | The Vertex Technologies" },
      { property: "og:description", content: "Practical, expert-authored playbooks, guides and research from The Vertex Technologies to help you put AI, automation and growth systems to work." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/resources" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/resources" },
    ],
  }),
  component: ResourcesPage,
});

const guides = [
  {
    tag: "AI for Business",
    color: "var(--brand-red)",
    title: "How intelligent automation streamlines operations",
    body: "Discover how AI-driven systems boost productivity and revenue.",
  },
  {
    tag: "Digital Marketing",
    color: "var(--brand-blue)",
    title: "Step-by-step frameworks for conversion",
    body: "SEO, content, social and paid — designed to maximize conversions.",
  },
  {
    tag: "Startup Playbooks",
    color: "var(--brand-orange)",
    title: "Proven approaches for launching and scaling",
    body: "Validate fast, minimize risk and accelerate your growth path.",
  },
  {
    tag: "Growth Case Studies",
    color: "var(--brand-green)",
    title: "Real-world results across industries",
    body: "AI, automation, marketing and operational systems in action.",
  },
];

const tools = [
  {
    title: "AI Readiness Assessment",
    body: "Evaluate your organization's readiness to implement AI-powered systems.",
    color: "var(--brand-red)",
  },
  {
    title: "ROI Calculators",
    body: "Measure potential returns from marketing, AI and growth strategies.",
    color: "var(--brand-blue)",
  },
  {
    title: "Workflow Templates",
    body: "Pre-built systems for productivity, automation and marketing processes.",
    color: "var(--brand-orange)",
  },
  {
    title: "Campaign Planners",
    body: "Structured templates to manage content calendars and lead funnels.",
    color: "var(--brand-green)",
  },
];

function ResourcesPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-60" aria-hidden />
        <div className="container-x relative pt-16 md:pt-24 pb-20">
          <Reveal>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]" />
              Resources
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-display text-[clamp(2.6rem,7vw,5.6rem)] mt-5 max-w-5xl text-balance">
              Expert insights, tools and guides for business growth.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Actionable strategies and practical insights for founders, entrepreneurs
              and marketing leaders ready to leverage AI, automation and digital
              marketing for sustainable growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Featured guides & playbooks" title="Frameworks built from real engagements." intro="" />
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <Link to="/contact" className="block card-tile p-7 bg-card group h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4" style={{ color: g.color }} />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: g.color }}>
                      {g.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-snug">{g.title}</h3>
                  <p className="mt-3 text-muted-foreground">{g.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline-grow">
                    Request guide <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader eyebrow="Tools & templates" title="Use what we use to build growth systems." />
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <StaggerItem key={t.title} className="card-tile p-6 bg-card h-full">
                <Wrench className="h-5 w-5" style={{ color: t.color }} />
                <p className="mt-4 font-display text-lg font-bold leading-tight">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Why use Vertex resources"
        title="Practical strategies that drive measurable growth."
        body="Built to support data-driven decisions and reduce trial-and-error with proven frameworks and expert guidance."
      />
    </PageLayout>
  );
}