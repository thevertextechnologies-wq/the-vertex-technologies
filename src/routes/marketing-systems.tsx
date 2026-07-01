import { createFileRoute } from "@tanstack/react-router";
import { Palette, Video, PenLine, Share2, Megaphone, Search, Mail, BarChart3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerMarketing from "@/assets/banner-marketing.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/marketing-systems")({
  head: () => ({
    meta: [
      { title: "Performance Marketing Systems | The Vertex Technologies" },
      { name: "description", content: "The Vertex Technologies engineers performance marketing systems that attract, nurture and convert qualified leads into predictable pipeline and revenue." },
      { property: "og:title", content: "Performance Marketing Systems | The Vertex Technologies" },
      { property: "og:description", content: "The Vertex Technologies engineers performance marketing systems that attract, nurture and convert qualified leads into predictable pipeline and revenue." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/marketing-systems" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/marketing-systems" },
    ],
  }),
  component: MarketingPage,
});

const services = [
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    color: "var(--brand-red)",
    body: "Cohesive visual identity from logos and colors to brand systems used across every platform.",
    benefits: ["Strong brand identity", "Increased trust", "Better positioning", "Visual consistency"],
    deliverables: "Logos, brand guidelines, identity systems, marketing creatives.",
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    color: "var(--brand-orange)",
    body: "Visual storytelling — from script to edit — engineered to engage and convert.",
    benefits: ["Higher engagement", "Stronger connection", "More conversions", "Clearer messaging"],
    deliverables: "Brand videos, social reels, promos, motion graphics.",
  },
  {
    icon: PenLine,
    title: "Content Marketing & Copy",
    color: "var(--brand-blue)",
    body: "Valuable, persuasive content that informs, engages and guides buyers across the journey.",
    benefits: ["SEO visibility", "Brand authority", "Audience engagement", "Consistent leads"],
    deliverables: "Web copy, blogs, landing pages, ad copy, content strategies.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    color: "var(--brand-green)",
    body: "Active, on-brand social presence aligned with your overall growth strategy.",
    benefits: ["Brand visibility", "Consistent engagement", "Stronger relationships", "Marketing support"],
    deliverables: "Content calendars, post designs, captions, account management.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising & Campaigns",
    color: "var(--brand-red)",
    body: "Targeted campaigns on Google and Meta — continuously optimized for performance.",
    benefits: ["Immediate traffic", "Precise targeting", "Measurable ROI", "Scalable growth"],
    deliverables: "Setup, creatives, targeting, testing, optimization.",
  },
  {
    icon: Search,
    title: "SEO & Web Optimization",
    color: "var(--brand-blue)",
    body: "Sustainable organic visibility through content, structure and technical excellence.",
    benefits: ["Organic traffic", "Higher rankings", "UX improvements", "Long-term growth"],
    deliverables: "Keyword research, on-page SEO, audits, optimization.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    color: "var(--brand-orange)",
    body: "Personalized sequences that nurture interest into long-term loyalty.",
    benefits: ["Stronger relationships", "Higher retention", "Greater LTV", "Consistent comms"],
    deliverables: "Campaigns, automations, segmentation, newsletters.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance",
    color: "var(--brand-green)",
    body: "Track, measure and translate marketing data into clear, actionable insights.",
    benefits: ["Performance clarity", "Data-driven decisions", "ROI tracking", "Ongoing optimization"],
    deliverables: "Reports, dashboards, KPIs, performance analysis.",
  },
];

function MarketingPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Marketing Systems"
        title="Digital marketing that moves your business forward."
        intro="Creative thinking meets performance‑focused execution. Every service is built to drive real, measurable growth — not just look good."
        image={bannerMarketing}
      />

      <section className="py-20">
        <div className="container-x">
          <Stagger className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title} className="card-tile p-8 bg-card h-full">
                <div className="flex items-start justify-between">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ background: `color-mix(in oklab, ${s.color} 14%, transparent)` }}
                  >
                    <s.icon className="h-6 w-6" style={{ color: s.color }} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: s.color }}>
                    Service
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.benefits.map((b) => (
                    <span key={b} className="text-xs px-2.5 py-1 rounded-full border border-border bg-muted">{b}</span>
                  ))}
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.16em] font-semibold mr-2">Deliverables</span>
                  {s.deliverables}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why choose Vertex"
            title="Results matched with creativity."
            intro="Every strategy is backed by data, every campaign has a clear goal, every solution is tailored. We don't just run campaigns — we build systems that consistently drive growth."
          />
        </div>
      </section>

      <CTASection eyebrow="Build a growth system" title="Marketing that produces predictable revenue." />
    </PageLayout>
  );
}