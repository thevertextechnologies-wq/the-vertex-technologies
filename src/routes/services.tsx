import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Bot, LineChart, Compass, Workflow } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerServices from "@/assets/banner-services.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI, Automation & Growth Services | The Vertex Technologies" },
      { name: "description", content: "The Vertex Technologies delivers full-stack AI, automation, performance marketing and growth consulting to help companies scale operations and revenue." },
      { property: "og:title", content: "AI, Automation & Growth Services | The Vertex Technologies" },
      { property: "og:description", content: "The Vertex Technologies delivers full-stack AI, automation, performance marketing and growth consulting to help companies scale operations and revenue." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/services" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Bot,
    title: "AI Automation & Intelligent Agents",
    tagline: "Empowering businesses with smart, autonomous systems.",
    color: "var(--brand-red)",
    soft: "var(--brand-red-soft)",
    to: "/ai-solutions",
    offer: [
      "Custom AI agents for operations, sales and support",
      "Workflow automation across departments",
      "Chatbots and voice agents for customer engagement",
      "CRM automation and data management",
      "Internal AI productivity tools",
    ],
    why: [
      "Reduce manual workloads and inefficiencies",
      "Improve decision-making with AI-driven insights",
      "Deliver consistent customer experiences",
      "Scale processes without growing headcount",
    ],
  },
  {
    icon: LineChart,
    title: "Digital Marketing Systems",
    tagline: "Turn marketing into a predictable growth engine.",
    color: "var(--brand-blue)",
    soft: "var(--brand-blue-soft)",
    to: "/marketing-systems",
    offer: [
      "AI-powered lead generation and conversion funnels",
      "SEO and content growth strategies",
      "Social media systems for audience reach",
      "Performance marketing campaigns with measurable ROI",
      "Conversion optimization and analytics",
    ],
    why: [
      "Generate consistent, qualified leads",
      "Optimize spend for maximum return",
      "Build repeatable, scalable processes",
      "Gain insights to improve over time",
    ],
  },
  {
    icon: Compass,
    title: "Entrepreneurship Consulting",
    tagline: "Strategic guidance for founders and startups.",
    color: "var(--brand-orange)",
    soft: "var(--brand-orange-soft)",
    to: "/growth-consulting",
    offer: [
      "Startup launch frameworks for rapid market entry",
      "Business model validation",
      "Founder productivity systems",
      "Personal brand development",
    ],
    why: [
      "Launch with confidence and clarity",
      "Validate before committing resources",
      "Improve founder and team productivity",
      "Establish a strong market presence",
    ],
  },
  {
    icon: Workflow,
    title: "Business Growth Consulting",
    tagline: "Scale efficiently with systems, strategy and process.",
    color: "var(--brand-green)",
    soft: "var(--brand-green-soft)",
    to: "/growth-consulting",
    offer: [
      "Strategic scaling for long-term growth",
      "Revenue and profitability optimization",
      "Systems and SOP design",
      "Team productivity frameworks",
    ],
    why: [
      "Achieve predictable, repeatable growth",
      "Standardize operations for excellence",
      "Empower teams with clear workflows",
      "Increase profitability with optimized strategies",
    ],
  },
];

function ServicesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Our Services"
        title="Transform your business with AI, automation and strategic growth."
        intro="Our services combine AI‑powered systems, intelligent automation, digital marketing frameworks and strategic consulting to create businesses that are future‑ready and capable of sustained growth."
        image={bannerServices}
      />

      {services.map((s, idx) => (
        <section key={s.title} className={`py-20 ${idx % 2 === 1 ? "bg-[var(--surface)]" : ""}`}>
          <div className="container-x grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: s.soft }}>
                  <s.icon className="h-7 w-7" style={{ color: s.color }} />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display text-4xl md:text-5xl mt-6">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground">{s.tagline}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link to={s.to} className="btn-outline mt-8">
                  Explore service <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <Stagger className="card-tile p-7 bg-card">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What we offer</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {s.offer.map((o) => (
                    <StaggerItem key={o} className="flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full mt-2 shrink-0" style={{ background: s.color }} />
                      {o}
                    </StaggerItem>
                  ))}
                </ul>
              </Stagger>
              <Stagger className="card-tile p-7 bg-card">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Why it matters</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {s.why.map((o) => (
                    <StaggerItem key={o} className="flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full mt-2 shrink-0" style={{ background: s.color }} />
                      {o}
                    </StaggerItem>
                  ))}
                </ul>
              </Stagger>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        eyebrow="Why partner with Vertex"
        title="Globally trusted AI‑driven growth partner."
        body="Expertise in AI automation, intelligent systems and strategic growth — paired with ROI-focused, transparent consulting."
      />
    </PageLayout>
  );
}