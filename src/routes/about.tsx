import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerAbout from "@/assets/banner-about.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    title: "About The Vertex Technologies | Your Growth Partner",
    meta: [
      { name: "description", content: "The Vertex Technologies is a growth partner combining deep AI, automation, strategy and marketing expertise to help ambitious organizations scale sustainably." },
      { property: "og:title", content: "About The Vertex Technologies | Your Growth Partner" },
      { property: "og:description", content: "The Vertex Technologies is a growth partner combining deep AI, automation, strategy and marketing expertise to help ambitious organizations scale sustainably." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="About Vertex"
        title="Engineering intelligent growth for modern businesses."
        intro="The Vertex Technologies is an AI‑driven growth and transformation company helping organizations scale faster through intelligent automation, data‑driven marketing systems and strategic consulting frameworks."
        image={bannerAbout}
        dark={false}
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Our vision" title="A globally trusted AI transformation partner." />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe the future of business belongs to organizations that embrace
                artificial intelligence, automation and data‑driven decision making. By
                combining strategic insight with cutting‑edge innovation, we help
                companies build smart digital infrastructure and autonomous business
                operations designed for sustainable growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)]">
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            title="Enterprise‑grade solutions across technology, strategy and growth."
          />
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              {
                t: "AI Solutions & Intelligent Automation",
                d: "Custom agents, machine learning and cognitive workflows.",
                c: "var(--brand-red)",
              },
              {
                t: "AI‑powered Marketing Systems",
                d: "Lead generation frameworks built for predictable performance.",
                c: "var(--brand-blue)",
              },
              {
                t: "Business Scaling & Operational Excellence",
                d: "Systems and SOPs that support long-term, scalable growth.",
                c: "var(--brand-orange)",
              },
              {
                t: "Predictive Analytics & Optimization",
                d: "Data-driven performance optimization across the org.",
                c: "var(--brand-green)",
              },
            ].map((i) => (
              <StaggerItem key={i.t} className="card-tile p-7 bg-card">
                <div className="h-9 w-9 rounded-lg" style={{ background: i.c }} />
                <h3 className="mt-5 font-display text-2xl font-bold">{i.t}</h3>
                <p className="mt-2 text-muted-foreground">{i.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeader eyebrow="Our approach" title="Strategic consulting + advanced implementation." />
            <Stagger className="mt-8 space-y-3">
              {[
                "ROI-focused strategies and performance-based growth",
                "Intelligent process automation and AI workforce solutions",
                "Client-centric methodologies for long-term partnerships",
              ].map((t) => (
                <StaggerItem key={t} className="flex gap-3 items-start">
                  <Sparkles className="h-5 w-5 mt-0.5 text-[var(--brand-orange)]" />
                  <span>{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeader eyebrow="A strategic partner" title="Recognized expertise. Results-oriented mindset." />
            <Stagger className="mt-8 space-y-3">
              {[
                "Industry-recognized growth expertise",
                "Innovation-driven, future-ready solutions",
                "Systems that scale with your business",
              ].map((t) => (
                <StaggerItem key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--brand-green)]" />
                  <span>{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <Link to="/book-a-call" className="btn-primary mt-10">
                Book a Free Strategy Session →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Build a future‑ready business powered by AI and automation." />
    </PageLayout>
  );
}