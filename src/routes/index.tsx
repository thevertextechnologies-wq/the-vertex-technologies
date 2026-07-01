import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowUpRight,
  Bot,
  LineChart,
  Compass,
  Workflow,
  Sparkles,
  Gauge,
  Cog,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import HeroVisual from "@/components/HeroVisual";
import ContactFormSection from "@/components/ContactFormSection";
import svcAi from "@/assets/svc-ai.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcConsulting from "@/assets/svc-consulting.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";
import pageMarketing from "@/assets/page-marketing.jpg";
import pageGrowth from "@/assets/page-growth.jpg";
import problemManual from "@/assets/problem-manual.jpg";
import problemMarketing from "@/assets/problem-marketing.jpg";
import problemBurnout from "@/assets/problem-burnout.jpg";
import problemScale from "@/assets/problem-scale.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Automation & Growth Agency | The Vertex Technologies" },
      { name: "description", content: "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines." },
      { property: "og:title", content: "AI Automation & Growth Agency | The Vertex Technologies" },
      { property: "og:description", content: "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    desc: "Custom AI agents for sales, support and operations that work continuously and intelligently.",
    color: "var(--brand-red)",
    soft: "var(--brand-red-soft)",
    to: "/ai-solutions",
    image: svcAi,
  },
  {
    icon: LineChart,
    title: "Digital Marketing Systems",
    desc: "Performance-focused marketing ecosystems that attract, nurture and convert qualified leads.",
    color: "var(--brand-blue)",
    soft: "var(--brand-blue-soft)",
    to: "/marketing-systems",
    image: svcMarketing,
  },
  {
    icon: Compass,
    title: "Entrepreneurship Consulting",
    desc: "Frameworks for founders to launch, validate and scale with focus and speed.",
    color: "var(--brand-orange)",
    soft: "var(--brand-orange-soft)",
    to: "/growth-consulting",
    image: svcConsulting,
  },
  {
    icon: Workflow,
    title: "Business Growth Consulting",
    desc: "Scalable systems, SOPs and revenue optimization for sustainable expansion.",
    color: "var(--brand-green)",
    soft: "var(--brand-green-soft)",
    to: "/growth-consulting",
    image: svcGrowth,
  },
];

const problems = [
  {
    title: "Manual operations drain time",
    body: "Teams stuck on repetitive sales, marketing and ops tasks lose productivity and waste resources.",
    color: "var(--brand-red)",
    image: problemManual,
  },
  {
    title: "Marketing without systems fails",
    body: "Random campaigns and inconsistent efforts rarely produce predictable revenue.",
    color: "var(--brand-blue)",
    image: problemMarketing,
  },
  {
    title: "Teams burn out as growth slows",
    body: "Operational complexity outpaces the team without automation and scalable systems.",
    color: "var(--brand-orange)",
    image: problemBurnout,
  },
  {
    title: "No automation, no scale",
    body: "Growth becomes dependent on more headcount instead of better infrastructure.",
    color: "var(--brand-green)",
    image: problemScale,
  },
];

const steps = [
  {
    n: "01",
    title: "Strategy & Audit",
    body: "We map your marketing, operations and tech to find the highest-leverage growth opportunities.",
    icon: Gauge,
  },
  {
    n: "02",
    title: "System Design",
    body: "We design custom frameworks integrating AI, automation and marketing tailored to your goals.",
    icon: Cog,
  },
  {
    n: "03",
    title: "Implementation",
    body: "We deploy the technology, workflows and systems to ensure seamless integration across teams.",
    icon: Workflow,
  },
  {
    n: "04",
    title: "Optimization & Scale",
    body: "We continuously refine performance, scale what works and compound results over time.",
    icon: Rocket,
  },
];

const stats = [
  { v: "70%", label: "Reduction in manual workload through intelligent automation." },
  { v: "3.4×", label: "Average lift in qualified pipeline from structured marketing systems." },
  { v: "24/7", label: "AI agents handling support, qualification and operational workflows." },
  { v: "1:1", label: "Strategic partnership focused on measurable, long-term outcomes." },
];

const insights = [
  {
    tag: "AI for Business",
    title: "How intelligent automation reshapes operations",
    body: "From AI agents to cognitive workflows — what high-performing teams deploy first.",
    color: "var(--brand-red)",
  },
  {
    tag: "Marketing Systems",
    title: "Designing a predictable lead pipeline",
    body: "The funnel architecture behind consistent, ROI-positive customer acquisition.",
    color: "var(--brand-blue)",
  },
  {
    tag: "Growth Strategy",
    title: "From operator to leader of systems",
    body: "How founders graduate from doing the work to engineering the engine.",
    color: "var(--brand-green)",
  },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO — alternating infinite-scroll image columns */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-x relative pt-1 md:pt-2 lg:pt-3 pb-10 md:pb-14 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Reveal>
                <h1
                  className="font-display text-foreground text-balance"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(2.25rem, 4.6vw, 4.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span style={{ fontWeight: 800 }}>Engineering Growth</span>{" "}
                  <span style={{ fontWeight: 300 }}>Through Intelligent</span>{" "}
                  <span style={{ fontWeight: 800 }}>Systems</span>{" "}
                  <span style={{ fontWeight: 300 }}>&amp; AI-Driven</span>{" "}
                  <span style={{ fontWeight: 800, color: "var(--brand-red)" }}>
                    Automation
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p
                  className="text-muted-foreground max-w-xl"
                  style={{
                    marginTop: "1.25rem",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 1.15vw, 1.25rem)",
                    lineHeight: 1.5,
                  }}
                >
                  As your growth partner, The Vertex Technologies is your all-in-one
                  destination for AI, automation and marketing systems — engineered
                  to remove bottlenecks, scale operations and unlock predictable revenue.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-6 md:mt-7 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{ background: "var(--brand-red)", boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)" }}
                  >
                    Contact Us
                  </Link>
                  <Link to="/services" className="btn-outline">
                    Explore services →
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hero visual: infinite-scroll up/down columns */}
            <div className="lg:col-span-5 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-14 border-y border-border bg-[var(--surface)]">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Trusted by ambitious companies seeking enterprise‑grade AI & growth systems
            </p>
          </Reveal>
          <Stagger className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "International client base across industries",
              "Proven frameworks for scalable growth",
              "AI automation & performance marketing expertise",
              "Long-term partnerships, measurable results",
            ].map((t) => (
              <StaggerItem
                key={t}
                className="flex items-start gap-3 text-sm font-medium"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[var(--brand-green)]" />
                <span>{t}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Why most businesses struggle to scale"
                title={
                  <>
                    Effort isn't the problem.{" "}
                    <span className="text-muted-foreground">Structure is.</span>
                  </>
                }
                intro="Growing a business today requires more than ambition. Without the right systems, even promising companies hit operational ceilings."
              />
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img
                    src={pageGrowth}
                    alt="Bottlenecks slowing teams"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-red)]/30 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>

          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p) => (
              <StaggerItem key={p.title} className="card-tile overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{ background: `linear-gradient(135deg, ${p.color}, transparent)` }}
                  />
                </div>
                <div className="p-7 flex-1">
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SOLUTION — Vertex Growth Engine */}
      <section className="py-24 md:py-32 bg-[var(--ink)] text-[var(--cream)] grain relative overflow-hidden">
        <div className="container-x relative">
          <SectionHeader
            invert
            eyebrow="The solution"
            title={
              <>
                The <span style={{ color: "var(--brand-orange)" }}>Vertex Growth Engine</span>
              </>
            }
            intro="A framework that turns businesses into scalable, system-driven organizations — combining AI, automation, marketing and strategic consulting."
          />

          <Reveal delay={0.15}>
            <div className="mt-14 rounded-3xl glass-dark p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                The Formula
              </p>
              <p className="mt-4 text-display text-3xl md:text-5xl text-balance">
                <span style={{ color: "var(--brand-red)" }}>AI</span>
                <span className="text-white/40"> + </span>
                <span style={{ color: "var(--brand-blue)" }}>Automation</span>
                <span className="text-white/40"> + </span>
                <span style={{ color: "var(--brand-orange)" }}>Marketing</span>
                <span className="text-white/40"> + </span>
                <span style={{ color: "var(--brand-green)" }}>Strategy</span>
                <span className="text-white/40"> = </span>
                <span className="text-white">Predictable Scale</span>
              </p>

              <Stagger className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-4 text-white/80">
                {[
                  "AI-powered operational systems that eliminate repetitive tasks",
                  "Intelligent marketing infrastructures that generate consistent leads",
                  "Data-driven growth strategies that lift performance and revenue",
                  "Scalable business frameworks that support long-term expansion",
                ].map((t) => (
                  <StaggerItem key={t} className="flex gap-3 items-start">
                    <Sparkles
                      className="h-5 w-5 mt-0.5 shrink-0"
                      style={{ color: "var(--brand-orange)" }}
                    />
                    <span>{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <SectionHeader
              eyebrow="Our services"
              title={<>Four engines.<br/>One growth system.</>}
            />
            <Reveal>
              <Link to="/services" className="btn-outline">
                Explore all services →
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  to={s.to}
                  className="group block card-tile h-full relative overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-30"
                      style={{ background: s.color }}
                    />
                  </div>
                  <div className="relative p-8 md:p-10">
                    <div
                      className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-80"
                      style={{ background: s.color }}
                    />
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center"
                      style={{ background: s.soft }}
                    >
                      <s.icon className="h-6 w-6" style={{ color: s.color }} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                      {s.desc}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-1 font-semibold underline-grow">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-[var(--surface)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="How it works"
                title="A four-step path to predictable scale"
                intro="A repeatable methodology that turns ambition into infrastructure."
              />
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img
                    src={pageMarketing}
                    alt="Process visualization"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/30 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <StaggerItem
                key={s.n}
                className="card-tile p-7 h-full bg-card relative"
              >
                <span className="text-xs font-mono text-muted-foreground">{s.n}</span>
                <s.icon className="h-7 w-7 mt-3 text-[var(--brand-blue)]" />
                <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CASE STUDIES / RESULTS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Case studies & results"
            title="Outcomes you can measure"
            intro="Our solutions deliver real transformation for organizations seeking operational excellence and scalable growth."
          />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StaggerItem
                key={s.v}
                className="card-tile p-7 h-full"
                aria-label={s.label}
              >
                <p
                  className="text-display text-5xl md:text-6xl"
                  style={{
                    color: [
                      "var(--brand-red)",
                      "var(--brand-blue)",
                      "var(--brand-orange)",
                      "var(--brand-green)",
                    ][i],
                  }}
                >
                  {s.v}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Link to="/case-studies" className="btn-outline">
                Read full case studies →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI READINESS QUIZ */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div
              className="rounded-3xl p-8 md:p-14 relative overflow-hidden text-white"
              style={{
                background:
                  "linear-gradient(135deg, #181c1f 0%, #23272b 100%)",
              }}
            >
              <div className="grid lg:grid-cols-12 gap-10 items-center relative">
                <div className="lg:col-span-7">
                  <span className="pill !bg-white/10 !text-white !border-white/15">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-orange)" }}
                    />
                    AI Readiness Assessment
                  </span>
                  <h2 className="text-display text-4xl md:text-6xl mt-5 text-balance">
                    How ready is your business for AI?
                  </h2>
                  <p className="mt-5 text-lg text-white/80 max-w-xl">
                    In just a few minutes, discover your AI readiness score, automation
                    opportunities, growth bottlenecks and strategic recommendations for
                    implementation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--brand-red)", boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)" }}
                    >
                      Get Your AI Readiness Score →
                    </Link>
                    <Link to="/ai-solutions" className="btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-[var(--ink)]">
                      Explore AI Solutions
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <Stagger className="space-y-3">
                    {[
                      "AI readiness score for your company",
                      "Key automation opportunities",
                      "Growth bottlenecks slowing you down",
                      "Strategic implementation recommendations",
                    ].map((t) => (
                      <StaggerItem
                        key={t}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-2xl px-4 py-3.5 border border-white/20"
                      >
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-white"
                        />
                        <span className="text-sm font-medium text-white">{t}</span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 md:py-32 bg-[var(--surface)]">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <SectionHeader
              eyebrow="Thought leadership & insights"
              title="Frameworks for the AI‑driven era"
              intro="Practical research and playbooks to help organizations navigate transformation."
            />
            <Reveal>
              <Link to="/resources" className="btn-outline">
                Explore Resources →
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {insights.map((i) => (
              <StaggerItem key={i.title}>
                <Link
                  to="/resources"
                  className="block card-tile p-7 h-full bg-card"
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: i.color }}
                  >
                    {i.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-snug">
                    {i.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {i.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline-grow">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TRUST / AUTHORITY */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Trust & authority"
                title="Engineering future‑ready organizations"
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to empower ambitious organizations with the systems,
                  strategies and technology required to achieve sustainable growth.
                  We combine expertise in AI, digital transformation, business
                  strategy and performance marketing.
                </p>
              </Reveal>
              <Stagger className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "Strategic, data-driven decision making",
                  "Long-term partnerships focused on growth",
                  "Transparent and ethical consulting",
                  "High-impact, measurable solutions",
                ].map((t) => (
                  <StaggerItem
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-border p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--brand-blue)] shrink-0" />
                    <span className="text-sm font-medium">{t}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />

      <CTASection />
    </PageLayout>
  );
}