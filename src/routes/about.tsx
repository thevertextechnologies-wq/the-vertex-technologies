import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerAbout from "@/assets/banner-about.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/data/team";

export const Route = createFileRoute("/about")({
  head: () => ({
    title: "Meet the Team | The Vertex Technologies",
    meta: [
      {
        name: "description",
        content:
          "Meet the team behind The Vertex Technologies — the people engineering AI agents, automation and growth systems for ambitious businesses.",
      },
      { property: "og:title", content: "Meet the Team | The Vertex Technologies" },
      {
        property: "og:description",
        content:
          "Meet the team behind The Vertex Technologies — the people engineering AI agents, automation and growth systems for ambitious businesses.",
      },
      { property: "og:url", content: "https://www.thevertextechnologies.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.thevertextechnologies.com/about" }],
  }),
  component: MeetTheTeamPage,
});

// Diagonal brand-colored "shards" — sharp angled parallelogram/arrow streaks
// like the reference. Base surface stays theme-aware (white in light mode,
// near-black in dark mode); only these shards carry the Vertex brand colors.
type Shard = { w: string; c: string; h: string; o: number; clip: string };

// Parallelogram (slanted ends) and arrow (pointed end) clip-paths.
const PARA = "polygon(8% 0, 100% 0, 92% 100%, 0 100%)";
const ARROW = "polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%)";

const topShards: Shard[] = [
  { w: "60vw", c: "var(--brand-blue)", h: "h-2 md:h-3", o: 0.5, clip: PARA },
  { w: "42vw", c: "var(--brand-red)", h: "h-2 md:h-2.5", o: 0.45, clip: ARROW },
  { w: "52vw", c: "var(--brand-orange)", h: "h-2 md:h-3", o: 0.42, clip: PARA },
  { w: "28vw", c: "var(--brand-green)", h: "h-1.5 md:h-2", o: 0.4, clip: ARROW },
  { w: "46vw", c: "var(--brand-blue)", h: "h-1.5 md:h-2", o: 0.28, clip: PARA },
  { w: "20vw", c: "var(--brand-red)", h: "h-1.5 md:h-2", o: 0.35, clip: ARROW },
  { w: "36vw", c: "var(--brand-orange)", h: "h-1.5 md:h-2", o: 0.25, clip: PARA },
];

const bottomShards: Shard[] = [
  { w: "58vw", c: "var(--brand-orange)", h: "h-2 md:h-3", o: 0.5, clip: PARA },
  { w: "40vw", c: "var(--brand-blue)", h: "h-2 md:h-2.5", o: 0.45, clip: ARROW },
  { w: "50vw", c: "var(--brand-red)", h: "h-2 md:h-3", o: 0.42, clip: PARA },
  { w: "26vw", c: "var(--brand-green)", h: "h-1.5 md:h-2", o: 0.4, clip: ARROW },
  { w: "44vw", c: "var(--brand-orange)", h: "h-1.5 md:h-2", o: 0.28, clip: PARA },
  { w: "20vw", c: "var(--brand-blue)", h: "h-1.5 md:h-2", o: 0.35, clip: ARROW },
  { w: "34vw", c: "var(--brand-red)", h: "h-1.5 md:h-2", o: 0.25, clip: PARA },
];

function TeamShards() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-left cluster */}
      <div className="absolute left-[-10%] top-[-8%] flex origin-top-left rotate-[-32deg] flex-col gap-2.5 md:gap-3.5">
        {topShards.map((s, i) => (
          <span
            key={i}
            className={`block ${s.h}`}
            style={{ width: s.w, background: s.c, opacity: s.o, clipPath: s.clip }}
          />
        ))}
      </div>

      {/* Bottom-right cluster (arrows point back toward the corner) */}
      <div className="absolute bottom-[-8%] right-[-10%] flex origin-bottom-right rotate-[-32deg] flex-col items-end gap-2.5 md:gap-3.5">
        {bottomShards.map((s, i) => (
          <span
            key={i}
            className={`block ${s.h}`}
            style={{
              width: s.w,
              background: s.c,
              opacity: s.o,
              clipPath: s.clip,
              transform: "scaleX(-1)",
            }}
          />
        ))}
      </div>

      {/* Soft fade so shards blend into the base and keep content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_45%,var(--background)_38%,transparent_100%)]" />
    </div>
  );
}

// Pointy-top hexagon clip — used only by the small floating background hexes.
const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// Small decorative hexagons that gently float in the background.
type FloatHex = {
  top: string;
  left: string;
  size: number;
  c: string;
  fill: boolean;
  o: number;
  dur: number;
  delay: number;
};

const floatHexes: FloatHex[] = [
  { top: "8%", left: "6%", size: 46, c: "var(--brand-blue)", fill: false, o: 0.5, dur: 7, delay: 0 },
  { top: "18%", left: "88%", size: 34, c: "var(--brand-red)", fill: true, o: 0.28, dur: 8, delay: 0.6 },
  { top: "62%", left: "4%", size: 30, c: "var(--brand-orange)", fill: true, o: 0.25, dur: 9, delay: 0.3 },
  { top: "72%", left: "92%", size: 52, c: "var(--brand-green)", fill: false, o: 0.5, dur: 7.5, delay: 1 },
  { top: "40%", left: "14%", size: 22, c: "var(--brand-red)", fill: false, o: 0.45, dur: 6.5, delay: 0.9 },
  { top: "34%", left: "82%", size: 26, c: "var(--brand-orange)", fill: false, o: 0.45, dur: 8.5, delay: 0.2 },
  { top: "86%", left: "20%", size: 34, c: "var(--brand-blue)", fill: true, o: 0.22, dur: 9.5, delay: 1.3 },
  { top: "6%", left: "48%", size: 24, c: "var(--brand-green)", fill: false, o: 0.4, dur: 7, delay: 0.5 },
  { top: "90%", left: "66%", size: 28, c: "var(--brand-red)", fill: false, o: 0.4, dur: 8, delay: 0.4 },
  { top: "52%", left: "94%", size: 20, c: "var(--brand-blue)", fill: true, o: 0.25, dur: 6, delay: 1.1 },
];

function FloatingHexes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatHexes.map((h, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: h.top, left: h.left, width: h.size, height: h.size * (4 / 3) }}
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: h.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: h.delay,
          }}
        >
          <div className="relative h-full w-full">
            <div
              className="absolute inset-0"
              style={{ clipPath: HEX, background: h.c, opacity: h.o }}
            />
            {!h.fill && (
              <div
                className="absolute inset-[3px]"
                style={{ clipPath: HEX, background: "var(--background)" }}
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MeetTheTeamPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Meet the Team"
        title="The people engineering your growth."
        intro="Behind The Vertex Technologies is a team building AI agents, automation and growth systems for ambitious businesses. Meet the people making it happen."
        image={bannerAbout}
        dark={false}
      />

      <section className="relative overflow-hidden bg-background text-foreground">
        <TeamShards />
        <FloatingHexes />

        <div className="container-x relative py-20 md:py-28">
          <SectionHeader
            align="center"
            eyebrow="Meet the team"
            title="The people behind The Vertex Technologies."
            intro="A team combining AI, automation, marketing and strategy to help ambitious businesses scale."
          />

          {/* Team member cards — glass, portrait photo, brand accent, LinkedIn */}
          <Stagger className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m) => (
              <StaggerItem
                key={m.name}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.55)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute inset-x-0 top-0 z-10 h-1.5" style={{ background: m.accent }} />
                <div className="relative aspect-[3/4] overflow-hidden">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted text-4xl font-bold text-muted-foreground">
                      {m.initials}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  {m.linkedin && m.linkedin !== "#" && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      style={{ ["--glow" as string]: m.accent }}
                      className="absolute right-3 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-[var(--glow)] hover:text-white hover:shadow-[0_0_18px_4px_var(--glow)]"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold leading-tight">{m.name}</h3>
                  <p
                    className="mt-1 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: m.accent }}
                  >
                    {m.role}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-16 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-red)",
                  boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)",
                }}
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK / VALUES */}
      <section className="bg-[var(--surface)] py-24">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="How we work"
            title="What brings the team together."
          />
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "ROI‑focused execution", c: "var(--brand-red)" },
              { t: "Automation‑first mindset", c: "var(--brand-blue)" },
              { t: "Client‑centric partnerships", c: "var(--brand-orange)" },
              { t: "Systems that scale", c: "var(--brand-green)" },
            ].map((v) => (
              <StaggerItem
                key={v.t}
                className="rounded-2xl border border-border bg-card/60 p-6 shadow-[0_20px_40px_-32px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform hover:-translate-y-1"
              >
                <div className="h-2 w-12 rounded-full" style={{ background: v.c }} />
                <p className="mt-4 font-display text-lg font-bold leading-tight">{v.t}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection title="Build a future‑ready business powered by AI and automation." />
    </PageLayout>
  );
}
