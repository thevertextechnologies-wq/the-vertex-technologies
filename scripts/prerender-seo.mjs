import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const SITE = "https://www.thevertextechnologies.com";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const PUBLISHER = {
  "@type": "Organization",
  name: "The Vertex Technologies",
  logo: { "@type": "ImageObject", url: OG_IMAGE },
};

// ---------------------------------------------------------------------------
// Structured data (JSON-LD) injected statically into prerendered HTML so that
// crawlers get Article/BlogPosting + FAQPage + BreadcrumbList WITHOUT having to
// execute JS. When a new blog post is added, add its schema block here too.
// ---------------------------------------------------------------------------

const blogPostUrl = `${SITE}/blog/ai-booking-automation-aesthetics-clinics-case-study`;

const voiceAgentsBlogPostUrl = `${SITE}/blog/ai-voice-agents-healthcare-clinics`;

const voiceAgentsBlogPostFaqs = [
  [
    "Is an AI voice agent HIPAA compliant?",
    "Not inherently. If the agent handles protected health information, the vendor is a business associate under HHS rules and a signed Business Associate Agreement is required, along with appropriate safeguards, breach notification, and flow-down obligations to subcontractors. Because a voice stack typically involves several vendors, the critical question is which subprocessors the BAA covers.",
  ],
  [
    "How much does an AI voice agent cost for a clinic?",
    "Raw production cost typically runs $0.07 to $0.30 per minute across telephony, speech processing, model inference, and orchestration. A single-location clinic handling around 1,200 inbound minutes per month usually lands between $300 and $900 monthly for a managed deployment, plus a one-time build and integration fee of roughly $1,500 to $8,000.",
  ],
  [
    "Do I need patient consent to use an AI voice agent?",
    "For inbound calls the patient initiated, standard practice notices generally apply. For outbound automated calls, the FCC's February 2024 declaratory ruling placed AI-generated voices within the TCPA's artificial or prerecorded voice rules, which carry prior express consent, identification, and opt-out obligations. Clinics running outbound reminders, recall, or marketing campaigns should have consent language reviewed by counsel.",
  ],
  [
    "Does the AI have to tell patients it is an AI?",
    "In several states, yes, for certain communication types. California's AB 3030 requires a disclaimer plus human-contact instructions when generative AI produces patient communications about clinical information, with the audio disclaimer delivered verbally at the start and end of the interaction. Utah's AI Policy Act imposes disclosure obligations for regulated occupations, and Texas's TRAIGA took effect January 1, 2026.",
  ],
  [
    "Will an AI voice agent reduce patient no-shows?",
    "It can, but the mechanism matters. One-way reminders have not solved no-shows industry-wide. The improvement comes from two-way outreach that reschedules the patient into a live open slot during the same interaction, rather than simply reminding them of an appointment they already know they cannot attend.",
  ],
  [
    "Can an AI voice agent book directly into my practice management system?",
    "Only if the practice management system exposes an API that supports writing appointments and respects provider-level scheduling rules. Modern cloud schedulers generally do; older server-based systems often do not, in which case the options are middleware, a synced intermediate calendar, or scoping the agent to capture-and-transfer only.",
  ],
  [
    "What happens if someone calls with a medical emergency?",
    "A properly designed agent detects emergency language and immediately instructs the caller to hang up and dial 911, then triggers alerts to on-call staff and logs the event. This branch should be built and tested before any other functionality and re-tested on every release.",
  ],
  [
    "Will an AI voice agent replace my receptionist?",
    "Usually not. It absorbs the repetitive majority of call volume such as booking, rescheduling, hours, directions, and insurance questions, which frees front-desk staff for in-person patient experience and complex cases. Most clinics use it to gain capacity without adding headcount rather than to reduce existing staff.",
  ],
];

const voiceAgentsBlogPostJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "AI Voice Agents for Healthcare Clinics: The Complete 2026 Implementation Guide",
    description:
      "How US clinics deploy AI voice agents that book appointments and cut no-shows — with real costs, HIPAA and TCPA compliance, ROI modeling, and a 90-day rollout plan.",
    image: OG_IMAGE,
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    author: { "@type": "Organization", name: "The Vertex Technologies" },
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": voiceAgentsBlogPostUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Voice Agents for Healthcare Clinics",
        item: voiceAgentsBlogPostUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: voiceAgentsBlogPostFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

const blogPostFaqs = [
  [
    "How long does it take to set up AI booking automation for an aesthetics clinic?",
    "A focused build — AI messaging, calendar sync, and reminders — can go live in as little as 72 hours, as in this case study. More complex builds involving deposit collection or EMR integration typically take one to two weeks.",
  ],
  [
    "Will an AI receptionist replace my front-desk staff?",
    "No. It handles repetitive, after-hours, and overflow inquiries so staff can focus on in-clinic patients and anything requiring clinical judgment or a personal touch.",
  ],
  [
    "Does this work with the booking software my clinic already uses?",
    "Most systems connect through existing calendar and CRM integrations rather than replacing them, so the clinic keeps its current software while automation handles the busywork around it.",
  ],
  [
    "What's the biggest driver of ROI — fewer no-shows or more after-hours bookings?",
    "Both matter, but for most clinics the after-hours capture has the bigger immediate impact, since it turns previously lost leads into booked revenue rather than just protecting revenue that was already scheduled.",
  ],
  [
    "How much does AI booking automation cost for a clinic?",
    "Cost depends on the number of channels, the complexity of the booking rules, and whether you need extras like deposits or EMR integration. A focused single-location build is far more affordable than most clinics expect — and because it protects revenue that was previously lost after hours, it typically pays for itself well before the first quarter is over.",
  ],
  [
    "Is patient data handled securely?",
    "Yes. The system uses the official APIs of the messaging platforms and your calendar or CRM, and sensitive information is only stored where your existing tools already store it. We configure access controls and data-handling rules during setup, and we can align the build with the privacy requirements your clinic operates under.",
  ],
  [
    "Can the AI handle WhatsApp, Instagram, and website chat at the same time?",
    "Yes. Every channel feeds into one automation backbone, so a patient can start on Instagram, continue on WhatsApp, and still receive a single, consistent booking experience. Your team never has to jump between separate inboxes to piece a conversation together.",
  ],
  [
    "What happens when the AI can't answer a question?",
    "The agent is built to recognise when a query needs a human — anything involving clinical judgment, complex medical history, or a sensitive request. In those cases it collects the key details and hands the conversation off to your staff, so the patient is never left stuck and nothing important is missed.",
  ],
  [
    "Can it collect deposits or payments at the time of booking?",
    "Yes, though this is usually a phase-two addition. Deposit collection is one of the most effective ways to cut no-shows for high-ticket treatments, and it can be layered onto the booking flow once the core system is live and stable.",
  ],
  [
    "Will the AI sound robotic to my patients?",
    "No. A big part of the build is tuning the tone so it matches your clinic's voice — warm, professional, and on-brand. Most patients simply experience it as a fast, helpful reply, and complex or personal moments are handed to your team so the human touch is preserved where it matters.",
  ],
  [
    "What languages can the AI receptionist handle?",
    "The AI can understand and respond in multiple languages, which is especially useful in markets where patients switch between English and a local language mid-conversation. We configure the primary languages your clinic serves during setup.",
  ],
  [
    "Do I need to change my current booking or calendar software?",
    "In most cases, no. The automation connects to the calendar and CRM you already use rather than replacing them, so your staff keeps working in familiar tools while the system handles the repetitive scheduling work around them.",
  ],
  [
    "How do we measure whether it's actually working?",
    "We track a small set of metrics that map directly to revenue: response time, number of after-hours inquiries captured, bookings created by the agent, and no-show rate before versus after launch. These numbers make it easy to see the return rather than guess at it.",
  ],
  [
    "Does this only work for large clinics or chains?",
    "Not at all. Single-location clinics often see the fastest impact, because even one owner-operator can't personally answer messages at midnight. The system gives a small practice the same always-on responsiveness that used to require a large front-desk team.",
  ],
  [
    "What do we need to provide to get started?",
    "Very little to begin: access to your messaging channels and calendar, your treatment and pricing information, and answers to your most common patient questions. From there, we handle the mapping, building, testing, and launch.",
  ],
];

const blogPostJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "AI Booking Automation for Aesthetics Clinics: How One Clinic Got More Walk-Ins and Zero Missed Bookings in 72 Hours",
    description:
      "See how AI booking automation helped an aesthetics clinic capture after-hours leads, boost walk-ins, and hit zero missed bookings in just 72 hours.",
    image: OG_IMAGE,
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    author: { "@type": "Organization", name: "The Vertex Technologies" },
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": blogPostUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Booking Automation for Aesthetics Clinics",
        item: blogPostUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blogPostFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

const caseStudyUrl = `${SITE}/case-studies/dha-lahore-aesthetics-clinic`;

const caseStudyJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How a DHA Lahore Aesthetics Clinic Got More Walk-ins in 72 Hours",
    description:
      "Case study: how The Vertex Technologies deployed a WhatsApp AI Agent in 72 hours for a DHA Lahore aesthetics clinic — more walk-ins, zero after-hours missed bookings.",
    image: OG_IMAGE,
    author: { "@type": "Organization", name: "The Vertex Technologies" },
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": caseStudyUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/case-studies` },
      {
        "@type": "ListItem",
        position: 3,
        name: "DHA Lahore Aesthetics Clinic",
        item: caseStudyUrl,
      },
    ],
  },
];

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
    type: "article",
    jsonLd: caseStudyJsonLd,
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
    path: "/blog/ai-voice-agents-healthcare-clinics",
    title: "AI Voice Agents for Healthcare Clinics: 2026 Guide | The Vertex Technologies",
    description:
      "How US clinics deploy AI voice agents that book appointments and cut no-shows — with real costs, HIPAA and TCPA rules, ROI math, and the 90-day rollout plan.",
    url: "https://www.thevertextechnologies.com/blog/ai-voice-agents-healthcare-clinics",
    type: "article",
    jsonLd: voiceAgentsBlogPostJsonLd,
  },
  {
    path: "/blog/ai-booking-automation-aesthetics-clinics-case-study",
    title: "AI Booking Automation for Aesthetics Clinics | The Vertex Technologies",
    description:
      "See how AI booking automation helped an aesthetics clinic capture after-hours leads, boost walk-ins, and hit zero missed bookings in just 72 hours.",
    url: "https://www.thevertextechnologies.com/blog/ai-booking-automation-aesthetics-clinics-case-study",
    type: "article",
    jsonLd: blogPostJsonLd,
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
      /<meta property="og:type" content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="${route.type ?? "website"}" />`
    );
    html = replaceOrAppend(
      html,
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = replaceOrAppend(
      html,
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );
    html = replaceOrAppend(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${route.url}" />`
    );

    if (Array.isArray(route.jsonLd) && route.jsonLd.length > 0) {
      const scripts = route.jsonLd
        .map(
          (obj) =>
            `    <script type="application/ld+json">${JSON.stringify(obj)}</script>`
        )
        .join("\n");
      html = html.replace("</head>", `${scripts}\n  </head>`);
    }

    const outputPath = route.path === "/" ? templatePath : path.join(routeDir, "index.html");
    await writeFile(outputPath, html, "utf8");
  }

  console.log(`Generated prerendered SEO HTML for ${routes.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
