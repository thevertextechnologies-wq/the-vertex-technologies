import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const routes = [
  {
    path: "/",
    title: "AI Automation & Growth Agency | The Vertex Technologies",
    description:
      "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines.",
    url: "https://www.thevertextechnologies.com/",
  },
  {
    path: "/about",
    title: "Meet the Team | The Vertex Technologies",
    description:
      "Meet the team behind The Vertex Technologies — the people engineering AI agents, automation and growth systems for ambitious businesses.",
    url: "https://www.thevertextechnologies.com/about",
  },
  {
    path: "/ai-solutions",
    title: "Custom AI Agents & Automation | The Vertex Technologies",
    description:
      "The Vertex Technologies builds custom AI agents for sales, support and operations that run 24/7, cut manual workload and scale your business intelligently.",
    url: "https://www.thevertextechnologies.com/ai-solutions",
  },
  {
    path: "/services",
    title: "AI, Automation & Growth Services | The Vertex Technologies",
    description:
      "The Vertex Technologies delivers full-stack AI, automation, performance marketing and growth consulting to help companies scale operations and revenue.",
    url: "https://www.thevertextechnologies.com/services",
  },
  {
    path: "/marketing-systems",
    title: "Performance Marketing Systems | The Vertex Technologies",
    description:
      "The Vertex Technologies engineers performance marketing systems that attract, nurture and convert qualified leads into predictable pipeline and revenue.",
    url: "https://www.thevertextechnologies.com/marketing-systems",
  },
  {
    path: "/growth-consulting",
    title: "AI-Driven Growth Consulting | The Vertex Technologies",
    description:
      "The Vertex Technologies offers AI-driven growth consulting that turns messy operations into scalable systems, with expert roadmaps for long-term results.",
    url: "https://www.thevertextechnologies.com/growth-consulting",
  },
  {
    path: "/case-studies",
    title: "AI Automation Case Studies | The Vertex Technologies",
    description:
      "See how The Vertex Technologies uses AI agents, automation and marketing systems to cut manual work, grow pipeline and deliver measurable client results.",
    url: "https://www.thevertextechnologies.com/case-studies",
  },
  {
    path: "/case-studies/dha-lahore-aesthetics-clinic",
    title: "DHA Lahore Aesthetics Clinic WhatsApp AI Agent | The Vertex Technologies",
    description:
      "Case study: how The Vertex Technologies deployed a WhatsApp AI Agent in 72 hours for a DHA Lahore aesthetics clinic — more walk-ins, zero after-hours missed bookings.",
    url: "https://www.thevertextechnologies.com/case-studies/dha-lahore-aesthetics-clinic",
  },
  {
    path: "/portfolio",
    title: "AI & Automation Portfolio | The Vertex Technologies",
    description:
      "Explore The Vertex Technologies portfolio of AI, automation and marketing projects engineered to help ambitious companies scale and grow revenue faster.",
    url: "https://www.thevertextechnologies.com/portfolio",
  },
  {
    path: "/resources",
    title: "AI & Automation Playbooks | The Vertex Technologies",
    description:
      "Practical, expert-authored playbooks, guides and research from The Vertex Technologies to help you put AI, automation and growth systems to work.",
    url: "https://www.thevertextechnologies.com/resources",
  },
  {
    path: "/the-vertex-institute",
    title: "AI & Automation Training | The Vertex Technologies",
    description:
      "The Vertex Institute, by The Vertex Technologies, equips founders and teams with expert AI, automation and growth training, frameworks and research.",
    url: "https://www.thevertextechnologies.com/the-vertex-institute",
  },
  {
    path: "/contact",
    title: "Contact The Vertex Technologies | Get Your Roadmap",
    description:
      "Tell The Vertex Technologies your goals and get a tailored AI and automation roadmap within 24 hours. Partner with a team engineered for measurable growth.",
    url: "https://www.thevertextechnologies.com/contact",
  },
  {
    path: "/book-a-call",
    title: "Book a Free AI Strategy Call | The Vertex Technologies",
    description:
      "Book a free strategy call with The Vertex Technologies and get a tailored AI and automation roadmap within 24 hours. Pick a time and start scaling today.",
    url: "https://www.thevertextechnologies.com/book-a-call",
  },
  {
    path: "/blog",
    title: "Blog | AI, Automation & Growth Insights | The Vertex Technologies",
    description:
      "Practical articles on AI agents, automation, marketing systems and business growth from The Vertex Technologies — actionable insights you can apply today.",
    url: "https://www.thevertextechnologies.com/blog",
  },
  {
    path: "/blog/ai-agents-for-small-business",
    title: "Why Every Small Business Needs an AI Agent in 2026 | The Vertex Technologies",
    description:
      "AI agents are no longer an enterprise luxury. Here is how small businesses use them to answer customers instantly, book more appointments and reclaim hours every week.",
    url: "https://www.thevertextechnologies.com/blog/ai-agents-for-small-business",
  },
  {
    path: "/blog/automation-workflows-that-save-hours",
    title: "5 Automation Workflows That Save Teams 20+ Hours a Week | The Vertex Technologies",
    description:
      "Manual copy-paste work quietly drains your team. These five automation workflows remove the busywork so people can focus on what actually grows the business.",
    url: "https://www.thevertextechnologies.com/blog/automation-workflows-that-save-hours",
  },
  {
    path: "/blog/whatsapp-ai-agent-guide",
    title: "The Complete Guide to WhatsApp AI Agents | The Vertex Technologies",
    description:
      "WhatsApp is where your customers already are. Learn how a WhatsApp AI Agent handles bookings, FAQs and follow-ups 24/7 — and what it takes to set one up.",
    url: "https://www.thevertextechnologies.com/blog/whatsapp-ai-agent-guide",
  },
  {
    path: "/blog/predictable-lead-generation-system",
    title: "How to Build a Predictable Lead Generation System | The Vertex Technologies",
    description:
      "Relying on referrals and luck is not a strategy. Here is the framework we use to turn marketing from a gamble into a predictable, measurable pipeline.",
    url: "https://www.thevertextechnologies.com/blog/predictable-lead-generation-system",
  },
  {
    path: "/blog/scaling-without-burnout",
    title: "Scaling Without Burnout: Systems Over Hustle | The Vertex Technologies",
    description:
      "Growth built on working harder eventually breaks. Learn how founders replace hustle with systems that scale revenue without scaling stress.",
    url: "https://www.thevertextechnologies.com/blog/scaling-without-burnout",
  },
  {
    path: "/blog/startup-idea-to-execution",
    title: "From Idea to Execution: A Founder's First 90 Days | The Vertex Technologies",
    description:
      "A great idea is worth little without execution. Here is a 90-day framework to validate, position and launch — without wasting months building the wrong thing.",
    url: "https://www.thevertextechnologies.com/blog/startup-idea-to-execution",
  },
];

function replaceOrAppend(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `${replacement}\n  </head>`);
}

async function main() {
  const templatePath = path.join(distDir, "index.html");
  const template = await readFile(templatePath, "utf8");

  for (const route of routes) {
    const routeDir = route.path === "/" ? distDir : path.join(distDir, route.path.replace(/^\//, ""));
    await mkdir(routeDir, { recursive: true });

    let html = template;
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
    html = replaceOrAppend(
      html,
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );
    html = replaceOrAppend(
      html,
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = replaceOrAppend(
      html,
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = replaceOrAppend(
      html,
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${route.url}" />`
    );
    html = replaceOrAppend(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${route.url}" />`
    );

    const outputPath = route.path === "/" ? templatePath : path.join(routeDir, "index.html");
    await writeFile(outputPath, html, "utf8");
  }

  console.log(`Generated prerendered SEO HTML for ${routes.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
