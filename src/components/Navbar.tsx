import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Bot, LineChart, Compass, Workflow, Sparkles, MessageSquare, Moon, Sun } from "lucide-react";
import logo from "@/assets/vertex-logo.png";
import svcAi from "@/assets/svc-ai.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcConsulting from "@/assets/svc-consulting.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";
import indSaas from "@/assets/ind-saas.jpg";
import indEcom from "@/assets/ind-ecom.jpg";
import indPro from "@/assets/ind-pro.jpg";
import indHealth from "@/assets/ind-health.jpg";
import indEdu from "@/assets/ind-edu.jpg";
import indFin from "@/assets/ind-fin.jpg";
import whyAbout from "@/assets/why-about.jpg";
import whyCases from "@/assets/why-cases.jpg";
import whyProcess from "@/assets/why-process.jpg";
import blackLogo from "@/assets/blacklogo.png";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    desc: "Custom AI agents and intelligent workflow automation.",
    to: "/ai-solutions",
    image: svcAi,
  },
  {
    icon: LineChart,
    title: "Digital Marketing Systems",
    desc: "Performance funnels, SEO and conversion-led campaigns.",
    to: "/marketing-systems",
    image: svcMarketing,
  },
  {
    icon: Compass,
    title: "Entrepreneurship Consulting",
    desc: "Frameworks for founders to launch and validate fast.",
    to: "/growth-consulting",
    image: svcConsulting,
  },
  {
    icon: Workflow,
    title: "Business Growth Consulting",
    desc: "Scalable systems, SOPs and revenue optimization.",
    to: "/growth-consulting",
    image: svcGrowth,
  },
];

const industries = [
  { icon: Sparkles, title: "SaaS & Tech", desc: "Scale-ready platforms with AI built-in.", image: indSaas },
  { icon: LineChart, title: "E-commerce & Retail", desc: "Conversion engines that compound.", image: indEcom },
  { icon: Compass, title: "Professional Services", desc: "Client acquisition systems.", image: indPro },
  { icon: Bot, title: "Healthcare", desc: "Compliant automation workflows.", image: indHealth },
  { icon: Workflow, title: "Education", desc: "Smart learning operations.", image: indEdu },
  { icon: MessageSquare, title: "Financial Services", desc: "Secure AI-driven workflows.", image: indFin },
];

const whyUs = [
  { title: "About Vertex", to: "/about", desc: "Our story, mission and the team building it.", icon: Sparkles, image: whyAbout },
  { title: "Case Studies", to: "/case-studies", desc: "Real outcomes we've engineered for clients.", icon: LineChart, image: whyCases },
  { title: "Our Process", to: "/about", desc: "How we design, ship and scale growth systems.", icon: Workflow, image: whyProcess },
];

type MegaKey = "services" | "industries" | "why";
type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "vertex-theme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<MegaKey | null>(null);
  const [hoverIdx, setHoverIdx] = useState(0);
  const [theme, setTheme] = useState<Theme>("light");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const hasSavedTheme = savedTheme === "light" || savedTheme === "dark";
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const initialTheme: Theme = hasSavedTheme
      ? (savedTheme as Theme)
      : mediaQuery.matches
        ? "dark"
        : "light";

    setTheme(initialTheme);
    setThemeReady(true);

    if (hasSavedTheme) return;

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, themeReady]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const navItem =
    "relative inline-flex items-center gap-1 py-2 text-[15px] font-semibold text-foreground/85 hover:text-[var(--brand-red)] transition-colors";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-background"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-x flex h-[72px] md:h-[76px] items-center justify-between">
        {/* Mobile: logo centered */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={theme === "dark" ? blackLogo : logo}
              alt="The Vertex Technologies"
              className="h-9 md:h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <div onMouseEnter={() => { setOpen("services"); setHoverIdx(0); }}>
            <button className={navItem}>
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === "services" ? "rotate-180" : ""}`} />
            </button>
          </div>
          <div onMouseEnter={() => { setOpen("industries"); setHoverIdx(0); }}>
            <button className={navItem}>
              Industries
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === "industries" ? "rotate-180" : ""}`} />
            </button>
          </div>
          <Link to="/portfolio" className={navItem} onMouseEnter={() => setOpen(null)}>
            Portfolio
          </Link>
          <div onMouseEnter={() => { setOpen("why"); setHoverIdx(0); }}>
            <button className={navItem}>
              Why Us
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === "why" ? "rotate-180" : ""}`} />
            </button>
          </div>
          <Link to="/case-studies" className={navItem} onMouseEnter={() => setOpen(null)}>
            Case Studies
          </Link>
          <Link to="/resources" className={navItem} onMouseEnter={() => setOpen(null)}>
            Resources
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background p-2.5 text-foreground transition hover:bg-muted"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-bold text-white transition-all hover:opacity-95 hover:-translate-y-0.5"
            style={{ background: "var(--brand-red)", boxShadow: "0 10px 24px -10px rgba(218,72,56,0.55)" }}
          >
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-full border border-border p-2 absolute left-4"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button
          className="lg:hidden rounded-full border border-border p-2 absolute right-4"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* MEGA PANELS */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full hidden lg:block"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="bg-background border-t border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.22)]">
              <div className="container-x py-10">
                {/* SERVICES — split: list + image preview */}
                {open === "services" && (
                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-7">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                        What we build
                      </p>
                      <div className="space-y-1">
                        {services.map((s, idx) => (
                          <Link
                            key={s.title}
                            to={s.to}
                            onClick={() => setOpen(null)}
                            onMouseEnter={() => setHoverIdx(idx)}
                            className="group flex items-center justify-between gap-4 rounded-2xl py-3 px-4 transition-all hover:bg-muted"
                          >
                            <div className="flex items-center gap-4 min-w-0">
                              <div
                                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                  background: hoverIdx === idx ? "var(--brand-red)" : "var(--muted)",
                                  color: hoverIdx === idx ? "white" : "var(--foreground)",
                                  transition: "all .25s",
                                }}
                              >
                                <s.icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-display font-bold text-lg leading-tight">
                                  {s.title}
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{s.desc}</p>
                              </div>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={hoverIdx}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="relative overflow-hidden rounded-3xl aspect-[5/4] bg-muted"
                        >
                          <img
                            src={services[hoverIdx].image}
                            alt={services[hoverIdx].title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span
                              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
                              style={{ background: "var(--brand-red)", color: "white" }}
                            >
                              Featured
                            </span>
                            <p className="font-display font-extrabold text-white text-2xl leading-tight">
                              {services[hoverIdx].title}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* INDUSTRIES — split: list + image preview */}
                {open === "industries" && (
                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-7">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                        Industries we serve
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {industries.map((i, idx) => (
                          <Link
                            key={i.title}
                            to="/case-studies"
                            onClick={() => setOpen(null)}
                            onMouseEnter={() => setHoverIdx(idx)}
                            className="group flex items-center justify-between gap-3 rounded-2xl py-3 px-4 transition-all hover:bg-muted"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                  background: hoverIdx === idx ? "var(--brand-red)" : "var(--muted)",
                                  color: hoverIdx === idx ? "white" : "var(--foreground)",
                                  transition: "all .25s",
                                }}
                              >
                                <i.icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-display font-bold text-base leading-tight">{i.title}</div>
                                <p className="text-xs text-muted-foreground truncate">{i.desc}</p>
                              </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={hoverIdx}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="relative overflow-hidden rounded-3xl aspect-[5/4] bg-muted"
                        >
                          <img
                            src={industries[hoverIdx].image}
                            alt={industries[hoverIdx].title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span
                              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
                              style={{ background: "var(--brand-red)", color: "white" }}
                            >
                              Industry
                            </span>
                            <p className="font-display font-extrabold text-white text-2xl leading-tight">
                              {industries[hoverIdx].title}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* WHY US — split: list + image preview */}
                {open === "why" && (
                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-7">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
                        Why The Vertex
                      </p>
                      <div className="space-y-1">
                        {whyUs.map((w, idx) => (
                          <Link
                            key={w.title}
                            to={w.to}
                            onClick={() => setOpen(null)}
                            onMouseEnter={() => setHoverIdx(idx)}
                            className="group flex items-center justify-between gap-4 rounded-2xl py-3 px-4 transition-all hover:bg-muted"
                          >
                            <div className="flex items-center gap-4 min-w-0">
                              <div
                                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                  background: hoverIdx === idx ? "var(--brand-red)" : "var(--muted)",
                                  color: hoverIdx === idx ? "white" : "var(--foreground)",
                                  transition: "all .25s",
                                }}
                              >
                                <w.icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-display font-bold text-lg leading-tight">{w.title}</div>
                                <p className="text-sm text-muted-foreground truncate">{w.desc}</p>
                              </div>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={hoverIdx}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="relative overflow-hidden rounded-3xl aspect-[5/4] bg-muted"
                        >
                          <img
                            src={whyUs[hoverIdx].image}
                            alt={whyUs[hoverIdx].title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span
                              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
                              style={{ background: "var(--brand-red)", color: "white" }}
                            >
                              Discover
                            </span>
                            <p className="font-display font-extrabold text-white text-2xl leading-tight">
                              {whyUs[hoverIdx].title}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="container-x flex h-[72px] items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <img src={theme === "dark" ? blackLogo : logo} alt="The Vertex Technologies" className="h-9 w-auto" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-border p-2"
                  onClick={toggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  className="rounded-full border border-border p-2"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="container-x py-6 space-y-1 overflow-y-auto h-[calc(100dvh-72px)]">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Resources", to: "/resources" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-2xl font-display font-bold tracking-tight"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Services
                </p>
                {services.map((s) => (
                  <Link
                    key={s.title}
                    to={s.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <s.icon className="h-5 w-5 text-[var(--brand-red)]" />
                    <span className="text-base font-medium">{s.title}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-white mt-6"
                style={{ background: "var(--brand-red)" }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
