import type { BlogBlock } from "../blog";

export const whatIsAgenticAiContent: BlogBlock[] = [
  {
    paras: [
      "The plain-English guide to AI that acts, not just answers — what \"agentic\" actually means, where it makes money, why 40% of these projects get cancelled, and how a small business deploys one without becoming a statistic.",
      "Operational and commercial guidance. Statistics are attributed to published analyst research as of mid-2026.",
    ],
  },
  {
    heading: "TL;DR — The Short Version",
    level: 2,
    paras: [
      "Agentic AI is software that pursues a goal on its own — it plans a sequence of steps, uses your tools and systems to carry them out, checks whether it worked, and adjusts — instead of waiting for a person to prompt it at every step. A chatbot answers a question. An agent gets the job done.",
    ],
    bullets: [
      "The one-line distinction: a chatbot responds; an agent acts. If it can't take an action in one of your systems — book the appointment, update the CRM, send the invoice, move the ticket — it isn't agentic, no matter what the sales deck says.",
      "Gartner sits agentic AI at the \"Peak of Inflated Expectations\" and predicts that more than 40% of agentic AI projects will be cancelled by the end of 2027 — not because the technology fails, but because of unclear business value, runaway costs, and missing governance.",
      "\"Agent washing\" is real: Gartner estimates only around 130 of the thousands of vendors marketing \"AI agents\" are building the real thing; the rest are rebranded chatbots, RPA scripts, and assistants.",
      "For a small or mid-sized business, the clearest early wins are lead response and qualification, appointment and scheduling workflows, customer support triage, and back-office data movement between apps that don't talk to each other.",
    ],
  },
  {
    paras: [
      "Direct answer for the person who searched this: agentic AI is worth your attention in 2026 — but not as a moonshot. Pick one painful, repetitive, multi-step workflow, define the outcome you want, connect the agent to the systems it needs, keep a human checkpoint on anything consequential, and measure it against a baseline.",
    ],
  },
  {
    heading: "Table of Contents",
    level: 2,
    bullets: [
      "What Is Agentic AI, Exactly?",
      "Chatbot vs Assistant vs Agent: The Distinction That Matters",
      "How an AI Agent Actually Works (The Four-Stage Loop)",
      "Agentic AI vs Traditional Automation",
      "The \"Agent Washing\" Problem: How to Spot a Fake",
      "Where Agentic AI Actually Makes Money for a Small Business",
      "Why 40% of These Projects Get Cancelled",
      "What It Costs — and How to Model the ROI",
      "The Levels of Autonomy: How Much Leash to Give It",
      "Governance, Risk, and the Human-in-the-Loop",
      "How to Deploy Your First Agent: A 60-Day Plan",
      "KPIs: How to Know If It's Working",
      "Common Mistakes That Kill Agentic AI Projects",
      "Myths vs Facts",
      "Industry Scenarios: Clinic, E-commerce, Service Business",
      "What Changes Between 2026 and 2028",
      "Vendor Due-Diligence Checklist",
      "Frequently Asked Questions",
      "Where to Go From Here",
    ],
  },
  {
    heading: "1. What Is Agentic AI, Exactly?",
    level: 2,
    paras: [
      "Definition. Agentic AI is a class of AI system that pursues a defined goal with minimal human supervision by perceiving its environment, planning a sequence of actions, executing those actions using external tools and systems, and adapting based on the results.",
      "The keyword is goal, not prompt. A standard large language model responds to one instruction at a time. An agent is handed an objective — \"qualify this lead and book a call if they're a fit\" — and works out the steps itself: read the enquiry, check the CRM, score the prospect, look up calendar availability, send the booking link, log the outcome.",
    ],
    bullets: [
      "Autonomous reasoning — breaking a complex goal into subtasks and adapting when an approach fails.",
      "Tool orchestration — reaching into APIs, databases, calendars, CRMs, and other software to actually do things.",
      "Persistent context — maintaining awareness of the goal and what's happened so far across multiple steps and sessions.",
    ],
  },
  {
    paras: [
      "If a system has all three, it's an agent. If it's missing tool orchestration — the ability to take real action in your systems — it's an assistant with good marketing. A search box finds information. An assistant drafts a reply you send yourself. An agent is a junior team member you hand a task to — within rules you set.",
    ],
  },
  {
    heading: "2. Chatbot vs Assistant vs Agent: The Distinction That Matters",
    level: 2,
    paras: [
      "Chatbots answer from scripts or knowledge bases and rarely write to your systems. Assistants respond to prompts and generate content, but you still take the actions. Agentic AI pursues a goal across multiple steps and completes tasks in your stack.",
      "The practical test: can it complete a task without a human touching each step? The one-line rule: A chatbot answers. An agent acts.",
    ],
  },
  {
    heading: "3. How an AI Agent Actually Works (The Four-Stage Loop)",
    level: 2,
    paras: [
      "Almost every agent runs the same loop: Perceive (read inputs and context) → Plan (break the goal into steps) → Act (call tools — CRM, calendar, email, database) → Reflect (check the result; loop back if needed).",
      "That reflect-and-adjust step is what makes an agent more than a fancy script. Quality is dominated by integration and guardrail design — not which model you pick.",
    ],
    bullets: [
      "Tool and integration quality — can it actually reach and write to your systems?",
      "Guardrail and goal design — how clearly the objective and limits are defined.",
      "Data access — whether the agent can see the information it needs.",
      "The model — often the smallest lever of the four.",
    ],
  },
  {
    heading: "4. Agentic AI vs Traditional Automation (RPA, Zapier, Chatbots)",
    level: 2,
    paras: [
      "Rule-based automation follows a fixed path and breaks when reality deviates — ideal for identical, repetitive tasks. Agentic AI handles variable situations that need a judgement call and adapts when things change.",
      "Many use cases marketed as \"agentic\" don't actually require an agent. Automate the identical with rules; reserve agents for the variable.",
    ],
  },
  {
    heading: "5. The \"Agent Washing\" Problem: How to Spot a Fake",
    level: 2,
    paras: [
      "Agent washing is vendors rebranding chatbots, RPA bots, and assistants as \"AI agents\" without the substance. Gartner's estimate: only around 130 of thousands of vendors claiming agentic AI are building the real thing.",
    ],
    bullets: [
      "Show me it complete a full task end-to-end in my systems, with no human in the middle.",
      "What does it do when something goes wrong mid-task?",
      "Which of my tools can it write to, not just read from?",
      "Show me the guardrails and escalation logic.",
      "Does it remember the goal and context across sessions?",
    ],
  },
  {
    paras: [
      "If the demo never shows the system taking an action in a real business system — only having a conversation — you are looking at agent washing.",
    ],
  },
  {
    heading: "6. Where Agentic AI Actually Makes Money for a Small Business",
    level: 2,
    bullets: [
      "Lead response and qualification — seconds-not-hours reply on web, WhatsApp, and email; score and book genuine fits.",
      "Appointment and scheduling — book, reschedule, confirm, and move cancellations into open slots in the same interaction.",
      "Customer support triage — resolve repetitive tickets; escalate with a clean summary.",
      "Back-office data movement — invoices, PO matching, CRM sync — variable work that eats hours.",
      "Follow-up and reactivation — quotes, dormant customers, post-purchase check-ins that slip when the team is busy.",
    ],
  },
  {
    heading: "7. Why 40% of These Projects Get Cancelled — and How to Be in the 60%",
    level: 2,
    paras: [
      "Gartner predicts more than 40% of agentic AI projects will be cancelled by end of 2027 — because of unclear business value, underestimated costs, and missing governance — not because models stopped working.",
      "The capability-deployment gap: demos work, pilots work, production fails when integration, data access, and ownership were afterthoughts.",
    ],
    bullets: [
      "Start with a problem, not a technology.",
      "Scope narrowly — one workflow done well.",
      "Define business value and measure against a baseline captured first.",
      "Budget build, subscription, and usage — not just software sticker price.",
      "Build governance before autonomy.",
      "Keep humans in the loop where stakes are high.",
    ],
  },
  {
    heading: "8. What It Costs — and How to Model the ROI",
    level: 2,
    paras: [
      "Three cost layers: one-time build/integration (often low four figures to five figures for SMB scope), monthly platform/subscription, and variable usage (API and per-action fees). Integration complexity drives build cost more than the AI label.",
      "Monthly value ≈ hours returned × loaded cost + revenue from faster response + errors prevented. Model conservatively — many organizations report AI payback in years, not weeks, though narrow workflows like lead response can pay back faster when unit economics are clear.",
    ],
  },
  {
    heading: "9. The Levels of Autonomy: How Much Leash to Give It",
    level: 2,
    bullets: [
      "Level 1 — Assisted: agent suggests, human approves every action.",
      "Level 2 — Supervised: agent acts, human reviews after.",
      "Level 3 — Conditional: agent acts within limits, escalates edge cases.",
      "Level 4 — Autonomous: agent acts alone; human audits periodically.",
    ],
  },
  {
    paras: [
      "Start at Level 1 or 2 on one workflow. Autonomy is earned per task, not granted per system.",
    ],
  },
  {
    heading: "10. Governance, Risk, and the Human-in-the-Loop",
    level: 2,
    bullets: [
      "Clear ownership — one named person accountable for the agent.",
      "Defined guardrails and a \"never\" list for high-stakes actions.",
      "Escalation paths when confidence is low or scope is exceeded.",
      "Rollback — ability to undo agent actions quickly.",
      "Audit logging — complete record of what the agent did and why.",
    ],
  },
  {
    paras: [
      "Human-in-the-loop is not failure — it's what makes automation safe enough to trust with more over time.",
    ],
  },
  {
    heading: "11. How to Deploy Your First Agent: A 60-Day Plan",
    level: 2,
    bullets: [
      "Week 1 — Pick one repetitive, multi-step, low-stakes workflow; document baseline cost.",
      "Weeks 2–3 — One-sentence goal, systems list, guardrails, escalation, sign-off.",
      "Weeks 3–6 — Integrate real systems; build at Level 1; test messy cases.",
      "Weeks 6–8 — Shadow run, then supervised live on limited volume.",
      "Ongoing — Measure vs baseline; expand autonomy one notch at a time.",
    ],
  },
  {
    heading: "12. KPIs: How to Know If It's Working",
    level: 2,
    bullets: [
      "Cost per unit of useful work (per qualified lead, ticket, invoice) vs before.",
      "Task completion rate without human rescue.",
      "Escalation accuracy — did it hand off the right things only?",
      "Human hours returned.",
      "Incident count — wrong actions should trend to zero.",
    ],
  },
  {
    heading: "13. Common Mistakes That Kill Agentic AI Projects",
    level: 2,
    bullets: [
      "Starting with technology instead of a measured problem.",
      "Automating ten workflows at once instead of one.",
      "Skipping the baseline.",
      "Treating integration as an afterthought.",
      "Full autonomy on day one.",
      "No governance until something breaks.",
      "Buying agent-washed software.",
      "Nobody owns it internally.",
    ],
  },
  {
    heading: "14. Myths vs Facts",
    level: 2,
    bullets: [
      "Myth: Agentic AI will run your whole business autonomously. Fact: Value is in specific workflows in 2026, not whole-business autonomy.",
      "Myth: It's just a chatbot with a new name. Fact: Real agents take action in your systems; washed products don't.",
      "Myth: If the demo works, the project works. Fact: Most failures happen in production integration.",
      "Myth: More autonomy is always better. Fact: Match autonomy to stakes; earn it per task.",
    ],
  },
  {
    heading: "15. Industry Scenarios: Clinic, E-commerce, Service Business",
    level: 2,
    paras: [
      "Clinic — agent watches phone, web, and messaging; books into live calendar; escalates anything clinical. For HIPAA, TCPA, and voice-specific rollout, see our dedicated healthcare voice agents guide (linked below).",
      "E-commerce — support triage plus speed-to-lead on ad enquiries; keep store, CRM, and fulfilment in sync.",
      "Local services — instant after-hours response, quote follow-up, CRM hygiene — work that always slips when the team is busy.",
    ],
    relatedLinks: [
      {
        slug: "ai-voice-agents-healthcare-clinics",
        label: "AI voice agents for healthcare clinics",
      },
      {
        slug: "ai-booking-automation-aesthetics-clinics-case-study",
        label: "AI booking automation for aesthetics clinics",
      },
    ],
  },
  {
    heading: "16. What Changes Between 2026 and 2028",
    level: 2,
    bullets: [
      "Market shakeout separates real agents from washed products.",
      "Governance tooling becomes as important as capability.",
      "Single agents evolve toward coordinated multi-agent workflows.",
      "The buying question shifts from \"can AI do this?\" to \"should this be an agent or a simple rule?\"",
    ],
  },
  {
    heading: "17. Vendor Due-Diligence Checklist",
    level: 2,
    bullets: [
      "End-to-end task in a real system demonstrated without human middle steps.",
      "Writes to your tools, handles mid-task failure, maintains session context.",
      "Live integration with your stack; references live in production.",
      "Configurable guardrails, escalation, rollback, audit logs.",
      "All three cost layers disclosed; you own data, prompts, and configuration.",
    ],
  },
  {
    heading: "18. Frequently Asked Questions",
    level: 2,
    faqs: [
      {
        question: "What is agentic AI in simple terms?",
        answer:
          "Agentic AI is software that pursues a goal on its own — it plans the steps, uses your business tools to carry them out, checks the result, and adjusts, instead of waiting for a person to instruct it at each step. A chatbot answers a question; an agent completes a task.",
      },
      {
        question: "What's the difference between agentic AI and a chatbot?",
        answer:
          "A chatbot responds to messages and takes no action in your systems. An agent pursues a goal across multiple steps and actually does things — books the appointment, updates the CRM, sends the invoice. The defining difference is action.",
      },
      {
        question: "Why do so many agentic AI projects fail?",
        answer:
          "Gartner predicts more than 40% will be cancelled by the end of 2027 because of unclear business value, underestimated costs, and missing governance — not because the technology fails. Success starts with a specific problem, narrow scope, baseline measurement, and governance before autonomy.",
      },
      {
        question: "What is agent washing?",
        answer:
          "Agent washing is vendors rebranding chatbots, RPA bots, and assistants as AI agents without the underlying capability. If a demo never shows the system taking a real action in a real system, it's likely washed.",
      },
      {
        question: "How much does agentic AI cost for a small business?",
        answer:
          "Cost has three layers: one-time build/integration, monthly subscription, and variable usage. Integration complexity drives most of the build cost. Ask for all three layers before committing.",
      },
      {
        question: "Is agentic AI the same as automation?",
        answer:
          "Related but distinct. Traditional automation follows a fixed path for identical tasks. Agentic AI handles variable situations that need judgement and adapts when things change. Many marketed \"agent\" use cases are better served by simple rules.",
      },
      {
        question: "What is the best first use case for agentic AI?",
        answer:
          "Pick one workflow that is repetitive, multi-step, currently resented by staff, and low-stakes enough that an early mistake won't hurt. Lead response, scheduling, and back-office sync are common high-return starts.",
      },
      {
        question: "Do I still need humans if I use AI agents?",
        answer:
          "Yes — by design. Keep a human on the loop for routine work and in the loop for consequential work. Vendors promising \"no humans from day one\" are a red flag.",
      },
      {
        question: "How is agentic AI different from ChatGPT?",
        answer:
          "ChatGPT used normally is an assistant: you prompt, it responds, you act. An agent is given a goal and tool access to carry out multi-step tasks in your systems without a prompt at every step.",
      },
      {
        question: "Is 2026 too early to adopt agentic AI?",
        answer:
          "No, but discipline matters. The technology works for well-scoped, well-governed use cases today. Treat it as a specific operational improvement, not a moonshot.",
      },
    ],
  },
  {
    heading: "19. Where to Go From Here",
    level: 2,
    paras: [
      "Agentic AI in 2026 pays off for businesses that pick one painful workflow, wire the agent into real systems, measure against a baseline, and keep a human on the wheel while autonomy is earned.",
      "The Vertex Technologies designs, builds, and manages AI agents and automation for small and mid-sized businesses — scoped to a real workflow, integrated with the tools you already use, and measured against a baseline.",
    ],
    bullets: [
      "Book a call for an automation assessment — we'll identify the highest, safest-return workflow and say honestly whether an agent or a simple rule fits.",
      "Start with the problem, not the tech — bring the workflow costing you the most time.",
    ],
    relatedLinks: [
      {
        slug: "ai-voice-agents-healthcare-clinics",
        label: "AI voice agents for healthcare clinics",
      },
      {
        slug: "ai-booking-automation-aesthetics-clinics-case-study",
        label: "AI booking automation case study",
      },
    ],
  },
];
