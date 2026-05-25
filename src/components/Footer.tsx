import { Link } from "@tanstack/react-router";
import footerLogo from "@/assets/footerlogo.png";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "AI Automation & Agents", to: "/ai-solutions" },
      { label: "Digital Marketing Systems", to: "/marketing-systems" },
      { label: "Entrepreneurship Consulting", to: "/growth-consulting" },
      { label: "Business Growth Consulting", to: "/growth-consulting" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Resources", to: "/resources" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Book a Call", to: "/book-a-call" },
      { label: "AI Readiness Report", to: "/contact" },
      { label: "All Services", to: "/services" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-black text-[var(--cream)]">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 flex flex-col items-start justify-start h-full">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img src={footerLogo} alt="The Vertex Technologies" className="h-32 w-auto" />
            </Link>
            <h3 className="text-display text-3xl md:text-5xl max-w-md">
              Build a self‑running business.
            </h3>
            <p className="mt-4 text-white/65 max-w-md">
              AI, automation, marketing and strategy — engineered into one growth engine.
            </p>
            <Link to="/book-a-call" className="btn-accent mt-8">
              Book a Free Strategy Call →
            </Link>
          </div>

          <div className="md:col-span-7 md:col-start-6 lg:col-start-auto flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {cols.map((c) => (
                <div key={c.heading}>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-4">
                    {c.heading}
                  </p>
                  <ul className="space-y-3">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          className="text-white/85 hover:text-white underline-grow"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <form className="mt-8 bg-white/5 rounded-lg p-6 flex flex-col gap-2 max-w-xl" onSubmit={e => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-white mb-2">Subscribe to our newsletter</label>
              <div className="flex w-full gap-4">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 rounded-md px-4 py-2 bg-black/80 text-white border border-white/20 focus:border-brand-blue outline-none transition"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md bg-[var(--brand-blue)] text-white font-semibold hover:bg-[var(--brand-blue)]/90 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} The Vertex Technologies. Innovate. Automate. Scale.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-red)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-blue)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-orange)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
