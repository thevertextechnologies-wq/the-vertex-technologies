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
    title: "About The Vertex Technologies | Your Growth Partner",
    description:
      "The Vertex Technologies is a growth partner combining deep AI, automation, strategy and marketing expertise to help ambitious organizations scale sustainably.",
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
