export type SeoMeta = {
  title: string;
  description: string;
  url: string;
};

const SITE_URL = "https://www.thevertextechnologies.com";

export const ROUTE_META: Record<string, SeoMeta> = {
  "/": {
    title: "AI Automation & Growth Agency | The Vertex Technologies",
    description:
      "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines.",
    url: `${SITE_URL}/`,
  },
  "/about": {
    title: "About The Vertex Technologies | Your Growth Partner",
    description:
      "The Vertex Technologies is a growth partner combining deep AI, automation, strategy and marketing expertise to help ambitious organizations scale sustainably.",
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
};

export function getRouteMeta(pathname: string): SeoMeta {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  return ROUTE_META[normalized] ?? ROUTE_META["/"];
}
