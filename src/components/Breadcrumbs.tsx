import { Link, useRouterState } from "@tanstack/react-router";

export type Crumb = { label: string; to?: string };

// Human-readable labels for known route segments.
const SEGMENT_LABELS: Record<string, string> = {
  "ai-solutions": "AI Solutions",
  services: "Services",
  "marketing-systems": "Marketing Systems",
  "growth-consulting": "Growth Consulting",
  "case-studies": "Case Studies",
  portfolio: "Portfolio",
  resources: "Resources",
  "the-vertex-institute": "The Vertex Institute",
  contact: "Contact",
  "book-a-call": "Book a Call",
  blog: "Blog",
  about: "Meet the Team",
};

function prettify(segment: string): string {
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function deriveCrumbs(pathname: string): Crumb[] {
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ label: "Home", to: "/" }];
  let acc = "";
  for (const segment of segments) {
    acc += `/${segment}`;
    crumbs.push({ label: SEGMENT_LABELS[segment] ?? prettify(segment), to: acc });
  }
  return crumbs;
}

const TONES = {
  light: {
    base: "text-white/70",
    link: "transition-colors hover:text-white",
    sep: "text-white/40",
    current: "text-white/90",
  },
  dark: {
    base: "text-muted-foreground",
    link: "transition-colors hover:text-foreground",
    sep: "text-muted-foreground/50",
    current: "text-foreground",
  },
} as const;

interface BreadcrumbsProps {
  /** Override the auto-derived trail (e.g. detail pages with a nicer title). */
  items?: Crumb[];
  /** "light" for dark hero backgrounds (default), "dark" for light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

export default function Breadcrumbs({ items, tone = "light", className = "" }: BreadcrumbsProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const crumbs = items ?? deriveCrumbs(pathname);

  // Nothing to show on the home page.
  if (crumbs.length <= 1) return null;

  const t = TONES[tone];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${t.base}`}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {crumb.to && !isLast ? (
                <Link to={crumb.to} className={t.link}>
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? `line-clamp-1 max-w-[60vw] ${t.current}` : ""}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className={t.sep}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
