import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerCases from "@/assets/banner-cases.jpg";
import featuredWhatsappAi from "@/assets/Case Studies Featured Image/the-vertex-technologies-agentic-ai-whatsapp-automation.webp";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    title: "AI Automation Case Studies | The Vertex Technologies",
    meta: [
      { name: "description", content: "See how The Vertex Technologies uses AI agents, automation and marketing systems to cut manual work, grow pipeline and deliver measurable client results." },
      { property: "og:title", content: "AI Automation Case Studies | The Vertex Technologies" },
      { property: "og:description", content: "See how The Vertex Technologies uses AI agents, automation and marketing systems to cut manual work, grow pipeline and deliver measurable client results." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/case-studies" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
});

const featured = {
  to: "/case-studies/dha-lahore-aesthetics-clinic",
  image: featuredWhatsappAi,
  tags: ["AI Automation", "WhatsApp AI Agent"],
  industry: "Aesthetics & Medical Spa",
  title: "How a DHA Lahore Aesthetics Clinic Got More Walk-ins & Zero After-Hours Missed Bookings in 72 Hours",
  excerpt:
    "A leading DHA Lahore aesthetics clinic was losing patients to slow WhatsApp replies. We designed and deployed a fully automated WhatsApp AI Agent in 72 hours — handling bookings, FAQs, location sharing and follow-ups around the clock.",
  stats: [
    { v: "72h", label: "Go-live", color: "var(--brand-blue)" },
    { v: "24/7", label: "Auto responses", color: "var(--brand-red)" },
    { v: "<60s", label: "Response time", color: "var(--brand-green)" },
  ],
};

const cases = [
  {
    tag: "AI Operations",
    color: "var(--brand-red)",
    title: "AI‑driven operations upgrade",
    body: "A growing service business struggled with manual workflows and delayed responses. By deploying AI-powered workflows and optimizing internal processes, we helped them increase efficiency, reduce operational load and scale without complexity.",
    stats: [{ k: "Efficiency", v: "↑ Significant" }, { k: "Manual load", v: "Reduced" }],
  },
  {
    tag: "Marketing Systems",
    color: "var(--brand-blue)",
    title: "Marketing system restructuring",
    body: "A B2B company lacked consistent leads and visibility. We built structured funnels, applied AI-assisted targeting and set up performance tracking — producing a predictable lead pipeline, higher conversion rates and improved ROI.",
    stats: [{ k: "Pipeline", v: "Predictable" }, { k: "ROI", v: "Improved" }],
  },
  {
    tag: "Startup Strategy",
    color: "var(--brand-orange)",
    title: "Startup growth structuring",
    body: "An early-stage startup had a viable idea but unclear execution. We refined the business model, built a market positioning strategy and implemented founder productivity frameworks — gaining clear direction, faster execution and a stronger market presence.",
    stats: [{ k: "Direction", v: "Clear" }, { k: "Execution", v: "Faster" }],
  },
  {
    tag: "Revenue",
    color: "var(--brand-green)",
    title: "Revenue optimization framework",
    body: "An established business operated below its potential due to inefficiencies. Through process restructuring, revenue gap analysis and strategic alignment, we improved profitability, operational control and resource efficiency.",
    stats: [{ k: "Profitability", v: "Improved" }, { k: "Efficiency", v: "↑" }],
  },
];

function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Case Studies"
        title="Real results across AI, marketing and growth."
        intro="Outcomes that help businesses operate efficiently, scale predictably and achieve measurable growth — across industries."
        image={bannerCases}
        dark={true}
      />

      {/* FEATURED CASE STUDY — card with Read More */}
      <section className="pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
                Featured case study
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <Link
              to={featured.to}
              className="group block card-tile overflow-hidden bg-card"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-black">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="eager"
                  />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9 lg:p-14 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-red)]">
                    {featured.industry}
                  </span>
                  <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold leading-tight text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {featured.stats.map((s) => (
                      <div key={s.label} className="rounded-xl border border-border px-4 py-2">
                        <p className="text-display text-xl" style={{ color: s.color }}>
                          {s.v}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-2">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-all group-hover:-translate-y-0.5"
                      style={{ background: "var(--brand-red)", boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)" }}
                    >
                      Read full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MORE CASE STUDIES — blog-style grid */}
      <section className="py-8 md:py-12 pb-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-10">
            <SectionHeader
              eyebrow="More transformations"
              title="Systems we've engineered for growth."
            />
            <span className="hidden md:inline-flex items-center gap-2 pill">
              <Clock className="h-3.5 w-3.5" /> More coming soon
            </span>
          </div>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <StaggerItem
                key={c.title}
                className="card-tile p-8 md:p-10 bg-card h-full relative overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-20"
                  style={{ background: c.color }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: c.color }}
                >
                  {c.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-6 flex gap-3 flex-wrap">
                  {c.stats.map((s) => (
                    <div key={s.k} className="rounded-xl border border-border px-4 py-2">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {s.k}
                      </p>
                      <p className="font-display font-bold">{s.v}</p>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHAT THESE SHOW */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="What these case studies show"
            title="AI, marketing and growth strategy — working as one."
          />
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Smarter, automated operations", c: "var(--brand-red)" },
              { t: "Predictable, high-performing marketing", c: "var(--brand-blue)" },
              { t: "Strategic growth frameworks", c: "var(--brand-orange)" },
              { t: "Scalable, long-term systems", c: "var(--brand-green)" },
            ].map((p) => (
              <StaggerItem key={p.t} className="card-tile p-6 bg-card">
                <div className="h-2 w-12 rounded-full" style={{ background: p.c }} />
                <p className="mt-4 font-display font-bold text-lg leading-tight">{p.t}</p>
                <span className="sr-only">{p.t}</span>
                <ArrowUpRight className="mt-4 h-5 w-5 text-muted-foreground" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Ready for similar results?"
        title="Scale with intelligent systems and proven frameworks."
      />
    </PageLayout>
  );
}
