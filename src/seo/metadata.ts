export type SeoMeta = {
  title: string;
  description: string;
  url: string;
};

export const SITE_URL = "https://www.thevertextechnologies.com";
export const SITE_NAME = "The Vertex Technologies";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string };

export type SeoHeadInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};

/**
 * Single source of truth for a route's <head>. Guarantees every page ships a
 * consistent, complete set of technical-SEO tags: description, robots,
 * canonical, Open Graph and Twitter cards.
 */
export function buildSeoHead(input: SeoHeadInput) {
  const {
    title,
    description,
    url,
    image = DEFAULT_OG_IMAGE,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
  } = input;

  const meta: MetaTag[] = [
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (type === "article") {
    if (publishedTime) meta.push({ property: "article:published_time", content: publishedTime });
    if (modifiedTime) meta.push({ property: "article:modified_time", content: modifiedTime });
    if (author) meta.push({ property: "article:author", content: author });
  }

  return {
    title,
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export const ROUTE_META: Record<string, SeoMeta> = {
  "/": {
    title: "AI Automation & Growth Agency | The Vertex Technologies",
    description:
      "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines.",
    url: `${SITE_URL}/`,
  },
  "/about": {
    title: "Meet the Team | The Vertex Technologies",
    description:
      "Meet the team behind The Vertex Technologies — the people engineering AI agents, automation and growth systems for ambitious businesses.",
    url: `${SITE_URL}/about`,
  },
  "/ai-solutions": {
    title: "Custom AI Agents & Automation | The Vertex Technologies",
    description:
      "The Vertex Technologies builds custom AI agents for sales, support and operations that run 24/7, cut manual workload and scale your business intelligently.",
    url: `${SITE_URL}/ai-solutions`,
  },
  "/services": {
    title: "AI, Automation & Growth Services | The Vertex Technologies",
    description:
      "The Vertex Technologies delivers full-stack AI, automation, performance marketing and growth consulting to help companies scale operations and revenue.",
    url: `${SITE_URL}/services`,
  },
  "/marketing-systems": {
    title: "Performance Marketing Systems | The Vertex Technologies",
    description:
      "The Vertex Technologies engineers performance marketing systems that attract, nurture and convert qualified leads into predictable pipeline and revenue.",
    url: `${SITE_URL}/marketing-systems`,
  },
  "/growth-consulting": {
    title: "AI-Driven Growth Consulting | The Vertex Technologies",
    description:
      "The Vertex Technologies offers AI-driven growth consulting that turns messy operations into scalable systems, with expert roadmaps for long-term results.",
    url: `${SITE_URL}/growth-consulting`,
  },
  "/case-studies": {
    title: "AI Automation Case Studies | The Vertex Technologies",
    description:
      "See how The Vertex Technologies uses AI agents, automation and marketing systems to cut manual work, grow pipeline and deliver measurable client results.",
    url: `${SITE_URL}/case-studies`,
  },
  "/case-studies/dha-lahore-aesthetics-clinic": {
    title: "DHA Lahore Aesthetics Clinic WhatsApp AI Agent | The Vertex Technologies",
    description:
      "Case study: how The Vertex Technologies deployed a WhatsApp AI Agent in 72 hours for a DHA Lahore aesthetics clinic — more walk-ins, zero after-hours missed bookings.",
    url: `${SITE_URL}/case-studies/dha-lahore-aesthetics-clinic`,
  },
  "/portfolio": {
    title: "AI & Automation Portfolio | The Vertex Technologies",
    description:
      "Explore The Vertex Technologies portfolio of AI, automation and marketing projects engineered to help ambitious companies scale and grow revenue faster.",
    url: `${SITE_URL}/portfolio`,
  },
  "/resources": {
    title: "AI & Automation Playbooks | The Vertex Technologies",
    description:
      "Practical, expert-authored playbooks, guides and research from The Vertex Technologies to help you put AI, automation and growth systems to work.",
    url: `${SITE_URL}/resources`,
  },
  "/the-vertex-institute": {
    title: "AI & Automation Training | The Vertex Technologies",
    description:
      "The Vertex Institute, by The Vertex Technologies, equips founders and teams with expert AI, automation and growth training, frameworks and research.",
    url: `${SITE_URL}/the-vertex-institute`,
  },
  "/contact": {
    title: "Contact The Vertex Technologies | Get Your Roadmap",
    description:
      "Tell The Vertex Technologies your goals and get a tailored AI and automation roadmap within 24 hours. Partner with a team engineered for measurable growth.",
    url: `${SITE_URL}/contact`,
  },
  "/book-a-call": {
    title: "Book a Free AI Strategy Call | The Vertex Technologies",
    description:
      "Book a free strategy call with The Vertex Technologies and get a tailored AI and automation roadmap within 24 hours. Pick a time and start scaling today.",
    url: `${SITE_URL}/book-a-call`,
  },
  "/blog": {
    title: "Blog | AI, Automation & Growth Insights | The Vertex Technologies",
    description:
      "Practical articles on AI agents, automation, marketing systems and business growth from The Vertex Technologies — actionable insights you can apply today.",
    url: `${SITE_URL}/blog`,
  },
};

export function getRouteMeta(pathname: string): SeoMeta {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  return ROUTE_META[normalized] ?? ROUTE_META["/"];
}
