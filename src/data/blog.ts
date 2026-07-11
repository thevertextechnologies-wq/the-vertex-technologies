import svcAi from "@/assets/svc-ai.jpg";
import svcAutomation from "@/assets/svc-automation.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcChatbot from "@/assets/svc-chatbot.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";
import svcConsulting from "@/assets/svc-consulting.jpg";

export type BlogBlock = {
  heading?: string;
  paras?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agents-for-small-business",
    title: "Why Every Small Business Needs an AI Agent in 2026",
    excerpt:
      "AI agents are no longer an enterprise luxury. Here is how small businesses use them to answer customers instantly, book more appointments and reclaim hours every week.",
    category: "AI Automation",
    date: "2026-06-28",
    readTime: "6 min read",
    author: "The Vertex Technologies",
    image: svcAi,
    content: [
      {
        paras: [
          "For years, AI adoption felt like something reserved for large companies with big budgets and dedicated engineering teams. That has changed. Today a small clinic, agency or e-commerce store can deploy an AI agent in days — and it pays for itself almost immediately.",
          "An AI agent is software that can understand natural language, make decisions and take actions on your behalf. Instead of a rigid chatbot that only follows a script, a modern agent can answer questions, qualify leads, book appointments and hand off complex cases to a human when needed.",
        ],
      },
      {
        heading: "The real problem AI agents solve",
        paras: [
          "Most small businesses do not lose customers because their product is bad. They lose customers because they respond too slowly. A prospect messages at 9pm, gets no reply, and books with a competitor by morning.",
          "An AI agent closes that gap. It replies in seconds, any hour of the day, in a tone that matches your brand — turning missed messages into booked revenue.",
        ],
        bullets: [
          "Instant replies to WhatsApp, Instagram and website messages",
          "Automated appointment booking and reminders",
          "Answers to repetitive FAQs so staff focus on high-value work",
          "Smart follow-ups for leads who did not convert immediately",
        ],
      },
      {
        heading: "Where to start",
        paras: [
          "You do not need to automate everything at once. Start with your highest-volume, most repetitive interaction — usually inbound inquiries. Measure the time saved and the extra bookings, then expand from there.",
          "At The Vertex Technologies we typically design, test and deploy a first working agent within a week, then optimise it against real conversations.",
        ],
      },
    ],
  },
  {
    slug: "automation-workflows-that-save-hours",
    title: "5 Automation Workflows That Save Teams 20+ Hours a Week",
    excerpt:
      "Manual copy-paste work quietly drains your team. These five automation workflows remove the busywork so people can focus on what actually grows the business.",
    category: "Automation",
    date: "2026-06-15",
    readTime: "7 min read",
    author: "The Vertex Technologies",
    image: svcAutomation,
    content: [
      {
        paras: [
          "Automation is not about replacing people — it is about removing the repetitive tasks that stop people from doing their best work. Here are five workflows we deploy again and again because the return is immediate.",
        ],
      },
      {
        heading: "1. Lead capture to CRM",
        paras: [
          "Every form submission, DM and inbound email is automatically parsed and pushed into your CRM with the right tags and owner — no manual data entry, no leads slipping through the cracks.",
        ],
      },
      {
        heading: "2. Automated follow-up sequences",
        paras: [
          "When a lead goes quiet, a structured sequence of messages keeps the conversation warm. Most extra revenue hides in follow-ups nobody had time to send.",
        ],
      },
      {
        heading: "3. Invoice and document generation",
        paras: [
          "Approved deals trigger invoices, contracts and onboarding docs automatically, populated from your CRM data and sent for signature.",
        ],
      },
      {
        heading: "4. Reporting on autopilot",
        paras: [
          "Instead of building the same spreadsheet every Monday, automated reports compile your key metrics and drop them into Slack or email on schedule.",
        ],
      },
      {
        heading: "5. Internal handoffs",
        paras: [
          "When sales closes a deal, operations is notified instantly with everything they need to start delivery — no status meetings required.",
        ],
        bullets: [
          "Fewer errors from manual data entry",
          "Faster response and delivery times",
          "A single source of truth across tools",
          "Happier teams focused on meaningful work",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-ai-agent-guide",
    title: "The Complete Guide to WhatsApp AI Agents",
    excerpt:
      "WhatsApp is where your customers already are. Learn how a WhatsApp AI Agent handles bookings, FAQs and follow-ups 24/7 — and what it takes to set one up.",
    category: "AI Automation",
    date: "2026-05-30",
    readTime: "8 min read",
    author: "The Vertex Technologies",
    image: svcChatbot,
    content: [
      {
        paras: [
          "In Pakistan and much of the world, WhatsApp is the default way customers reach a business. Yet most companies still answer WhatsApp manually — which means slow replies, missed messages and lost sales after hours.",
          "A WhatsApp AI Agent fixes this by connecting the official WhatsApp Business API to an intelligent automation layer that understands and responds to real customer messages.",
        ],
      },
      {
        heading: "What a WhatsApp AI Agent can do",
        bullets: [
          "Answer pricing, service and eligibility questions instantly",
          "Book appointments and send confirmations automatically",
          "Share your location pin to every new inquiry",
          "Follow up with prospects who did not book right away",
          "Escalate complex conversations to a human seamlessly",
        ],
      },
      {
        heading: "What you need to set one up",
        paras: [
          "You need an approved WhatsApp Business API number (via a provider such as 360Dialog or Meta), an automation platform to hold the conversation logic, and a clear map of your most common customer journeys.",
          "The build itself is fast. The value comes from designing conversations that feel human and actually move customers toward a booking.",
        ],
      },
      {
        heading: "Is it worth it?",
        paras: [
          "If even a handful of after-hours inquiries turn into bookings each month, the agent pays for itself. For high-ticket services like clinics, agencies and real estate, the ROI is dramatic.",
        ],
      },
    ],
  },
  {
    slug: "predictable-lead-generation-system",
    title: "How to Build a Predictable Lead Generation System",
    excerpt:
      "Relying on referrals and luck is not a strategy. Here is the framework we use to turn marketing from a gamble into a predictable, measurable pipeline.",
    category: "Marketing Systems",
    date: "2026-05-12",
    readTime: "6 min read",
    author: "The Vertex Technologies",
    image: svcMarketing,
    content: [
      {
        paras: [
          "Most businesses market in bursts — a campaign here, a boosted post there — and wonder why their pipeline is unpredictable. A real lead generation system is built on repeatable stages, each one measured and improved.",
        ],
      },
      {
        heading: "The four stages",
        bullets: [
          "Attract: targeted content and ads that reach the right audience",
          "Capture: landing pages and offers that convert attention into contacts",
          "Nurture: automated sequences that build trust over time",
          "Convert: clear calls to action and fast human follow-up",
        ],
      },
      {
        heading: "Measure what matters",
        paras: [
          "Track cost per lead, lead-to-call rate and call-to-close rate. When you know these numbers, growth becomes a matter of turning dials — not guessing.",
          "The goal is simple: put a rupee in and reliably get more than a rupee out. That is when marketing becomes an engine instead of an expense.",
        ],
      },
    ],
  },
  {
    slug: "scaling-without-burnout",
    title: "Scaling Without Burnout: Systems Over Hustle",
    excerpt:
      "Growth built on working harder eventually breaks. Learn how founders replace hustle with systems that scale revenue without scaling stress.",
    category: "Business Growth",
    date: "2026-04-25",
    readTime: "5 min read",
    author: "The Vertex Technologies",
    image: svcGrowth,
    content: [
      {
        paras: [
          "Early growth often comes from sheer effort — the founder does everything. But that same effort becomes the ceiling. You cannot scale a business that depends entirely on your personal hours.",
        ],
      },
      {
        heading: "Replace yourself with systems",
        paras: [
          "The path out is to document, standardise and automate. Every task you do more than a few times a week is a candidate for a system: a documented process, a template, or an automation.",
        ],
        bullets: [
          "Document your core processes so anyone can follow them",
          "Automate the repetitive steps inside those processes",
          "Delegate with clear checklists instead of tribal knowledge",
          "Review metrics weekly so problems surface early",
        ],
      },
      {
        heading: "The payoff",
        paras: [
          "When your business runs on systems, growth stops feeling like adding stress and starts feeling like turning up the volume on something that already works.",
        ],
      },
    ],
  },
  {
    slug: "startup-idea-to-execution",
    title: "From Idea to Execution: A Founder's First 90 Days",
    excerpt:
      "A great idea is worth little without execution. Here is a 90-day framework to validate, position and launch — without wasting months building the wrong thing.",
    category: "Entrepreneurship",
    date: "2026-04-08",
    readTime: "7 min read",
    author: "The Vertex Technologies",
    image: svcConsulting,
    content: [
      {
        paras: [
          "The biggest risk for a new founder is not competition — it is spending months building something nobody wants. A structured first 90 days keeps you focused on evidence, not assumptions.",
        ],
      },
      {
        heading: "Days 1–30: Validate",
        paras: [
          "Talk to real potential customers before you build. Understand the problem deeply, and confirm people will pay to solve it.",
        ],
      },
      {
        heading: "Days 31–60: Position",
        paras: [
          "Define who you serve, the outcome you deliver and why you are different. Sharp positioning makes every later marketing decision easier.",
        ],
      },
      {
        heading: "Days 61–90: Launch",
        paras: [
          "Ship a focused first version, put it in front of customers, and set up the feedback loops that let you improve quickly.",
        ],
        bullets: [
          "Validate demand before writing a line of code",
          "Position around a clear customer outcome",
          "Launch small, learn fast, iterate",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
