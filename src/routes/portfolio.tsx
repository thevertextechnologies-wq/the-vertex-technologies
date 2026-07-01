import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import { SectionHeader } from "@/components/SectionHeader";
import bannerPortfolio from "@/assets/banner-resources.jpg";
import logoPeeraan from "@/assets/projects/peeraan.jpeg";
import logoCustomBoxesCanada from "@/assets/projects/customboxescanada.jpeg";
import logoEnlivenSkinCare from "@/assets/projects/enlivenskincare.jpeg";
import logoNeedCustomPackaging from "@/assets/projects/needcustompackaging.jpeg";
import logoPremiumPackagingAmerica from "@/assets/projects/premiumpackagingamerica.jpg";
import logoEfone from "@/assets/projects/efone.jpeg";
import logoOneVision from "@/assets/projects/onevision.jpeg";
import logoLazzat from "@/assets/projects/lazzat.jpeg";
import logoDrWarisAnwar from "@/assets/projects/dr-waris-anwar-aesthetics.jpeg";
import logoTransVision from "@/assets/projects/transvision.jpeg";
import logoSonicAccountants from "@/assets/projects/sonicaccountants.jpeg";
import logoEliteHorizon from "@/assets/projects/elitehorizontourism.jpeg";
import logoTodsAndTeens from "@/assets/projects/todsandteens.jpeg";
import logoCitiHousingPk from "@/assets/projects/citi-housing-pk.jpeg";
import logoCitiHousingUk from "@/assets/projects/citi-housing-uk.jpeg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    title: "AI & Automation Portfolio | The Vertex Technologies",
    meta: [
      { name: "description", content: "Explore The Vertex Technologies portfolio of AI, automation and marketing projects engineered to help ambitious companies scale and grow revenue faster." },
      { property: "og:title", content: "AI & Automation Portfolio | The Vertex Technologies" },
      { property: "og:description", content: "Explore The Vertex Technologies portfolio of AI, automation and marketing projects engineered to help ambitious companies scale and grow revenue faster." },
      { property: "og:url", content: "https://www.thevertextechnologies.com/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thevertextechnologies.com/portfolio" },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "Peeraan",                       category: "Marketing Systems",   color: "var(--brand-blue)",   logo: logoPeeraan,               url: "https://peeraan.com/" },
  { title: "Custom Boxes Canada",           category: "Digital Marketing",   color: "var(--brand-red)",    logo: logoCustomBoxesCanada,     url: "https://customboxescanada.ca/" },
  { title: "Chor Bazar",                    category: "Growth Consulting",   color: "var(--brand-orange)", logo: null,                      url: null },
  { title: "Enliven SkinCare",              category: "Marketing Systems",   color: "var(--brand-blue)",   logo: logoEnlivenSkinCare,       url: "http://enlivenskincare.pk/" },
  { title: "Need Custom Packaging",         category: "Digital Marketing",   color: "var(--brand-red)",    logo: logoNeedCustomPackaging,   url: "https://www.needcustompackaging.com/" },
  { title: "Premium Packaging America",     category: "Digital Marketing",   color: "var(--brand-orange)", logo: logoPremiumPackagingAmerica, url: "https://premiumpackagingamerica.com/" },
  { title: "Efone",                         category: "AI Solutions",        color: "var(--brand-red)",    logo: logoEfone,                 url: "https://efone.app/" },
  { title: "OneVision",                     category: "AI Solutions",        color: "var(--brand-green)",  logo: logoOneVision,             url: "https://onevision.io/" },
  { title: "Lazzat",                        category: "Marketing Systems",   color: "var(--brand-orange)", logo: logoLazzat,                url: "https://lazzat.ca/" },
  { title: "Aesthetics by Dr Waris Anwar",  category: "Digital Marketing",   color: "var(--brand-blue)",   logo: logoDrWarisAnwar,          url: "https://aesthetics.com.pk/" },
  { title: "TransVision Immigration",       category: "Growth Consulting",   color: "var(--brand-green)",  logo: logoTransVision,           url: "https://www.transvisionimmigration.com/" },
  { title: "Sonic Accountants",             category: "AI Solutions",        color: "var(--brand-red)",    logo: logoSonicAccountants,      url: "https://www.sonicaccountants.com/" },
  { title: "Elite Horizon Tourism",         category: "Marketing Systems",   color: "var(--brand-blue)",   logo: logoEliteHorizon,          url: "https://elitehorizontourism.com/" },
  { title: "Tods & Teens",                  category: "Digital Marketing",   color: "var(--brand-orange)", logo: logoTodsAndTeens,          url: "https://www.todsnteens.com/" },
  { title: "Citi Housing Pvt Ltd",          category: "Growth Consulting",   color: "var(--brand-green)",  logo: logoCitiHousingPk,         url: "https://www.citihousing.pk/" },
  { title: "Citi Housing UK",               category: "Growth Consulting",   color: "var(--brand-red)",    logo: logoCitiHousingUk,         url: "https://www.citihousing.co.uk/" },
];

const categories = ["All", "AI Solutions", "Digital Marketing", "Marketing Systems", "Growth Consulting"];

function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageLayout>
      {/* Header Banner */}
      <PageBanner
        eyebrow="Portfolio"
        title="Projects we've delivered"
        intro="Explore the brands and businesses we've helped transform with AI automation, marketing systems and growth strategies."
        image={bannerPortfolio}
        dark={true}
      />

      {/* Projects Section */}
      <section className="py-20 md:py-24">
        <div className="container-x">

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                Our work
              </p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
                {projects.length}{" "}
                <span className="text-muted-foreground font-light">projects</span>
              </h2>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    active === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.url ?? undefined}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noopener noreferrer" : undefined}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.28, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-2xl border border-border bg-card overflow-hidden block ${project.url ? "cursor-pointer" : "cursor-default"}`}
                  style={
                    {
                      "--accent": project.color,
                    } as React.CSSProperties
                  }
                >
                  {/* Animated top line on hover */}
                  <div
                    className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 z-10"
                    style={{ background: project.color }}
                  />

                  {/* Glow behind card on hover */}
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color}22 0%, transparent 70%)`,
                    }}
                  />

                  {/* Logo box — grayscale → color on hover */}
                  <div className="p-5 pb-3">
                    <div className="aspect-square w-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs text-muted-foreground font-medium text-center px-3">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-5 pb-5">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <p className="mt-1 font-display font-bold text-sm leading-snug text-foreground">
                      {project.title}
                    </p>
                  </div>

                  {/* Index number — top right */}
                  <span className="absolute top-3.5 right-4 font-mono text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-x max-w-4xl">
          <SectionHeader
            eyebrow="Let's talk about your project"
            title="Tell us about your goals and we'll design a solution."
            align="center"
          />
          <div className="mt-12">
            <ContactFormSection />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to grow?"
        title="Transform your business with intelligent systems."
      />
    </PageLayout>
  );
}


