import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerCases from "@/assets/banner-cases.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import caseStudyWorkflow from "@/assets/Case studies/case-study-1.png";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

const cases = [
  {
    tag: "AI Operations",
    color: "var(--brand-red)",
    title: "AI‑driven operations upgrade",
    body: "A growing service business struggled with manual workflows and delayed responses. By deploying AI-powered workflows and optimizing internal processes, we helped them increase efficiency, reduce operational load and scale without complexity.",
    stats: [{ k: "Efficiency", v: "↑ Significant" }, { k: "Manual load", v: "Reduced" }],
  },
  {
    tag: "Marketing Systems",
    color: "var(--brand-blue)",
    title: "Marketing system restructuring",
    body: "A B2B company lacked consistent leads and visibility. We built structured funnels, applied AI-assisted targeting and set up performance tracking — producing a predictable lead pipeline, higher conversion rates and improved ROI.",
    stats: [{ k: "Pipeline", v: "Predictable" }, { k: "ROI", v: "Improved" }],
  },
  {
    tag: "Startup Strategy",
    color: "var(--brand-orange)",
    title: "Startup growth structuring",
    body: "An early-stage startup had a viable idea but unclear execution. We refined the business model, built a market positioning strategy and implemented founder productivity frameworks — gaining clear direction, faster execution and a stronger market presence.",
    stats: [{ k: "Direction", v: "Clear" }, { k: "Execution", v: "Faster" }],
  },
  {
    tag: "Revenue",
    color: "var(--brand-green)",
    title: "Revenue optimization framework",
    body: "An established business operated below its potential due to inefficiencies. Through process restructuring, revenue gap analysis and strategic alignment, we improved profitability, operational control and resource efficiency.",
    stats: [{ k: "Profitability", v: "Improved" }, { k: "Efficiency", v: "↑" }],
  },
];

function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Case Studies"
        title="Real results across AI, marketing and growth."
        intro="Outcomes that help businesses operate efficiently, scale predictably and achieve measurable growth — across industries."
        image={bannerCases}
        dark={true}
      />

      <FeaturedCaseStudy />

      <section className="py-20">
        <div className="container-x">
          <Stagger className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <StaggerItem
                key={c.title}
                className="card-tile p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg h-full relative overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-40"
                  style={{ background: c.color }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: c.color }}
                >
                  {c.tag}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-6 flex gap-3 flex-wrap">
                  {c.stats.map((s) => (
                    <div key={s.k} className="rounded-xl border border-border px-4 py-2">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {s.k}
                      </p>
                      <p className="font-display font-bold">{s.v}</p>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-x">
          <SectionHeader
            eyebrow="What these case studies show"
            title="AI, marketing and growth strategy — working as one."
          />
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Smarter, automated operations", c: "var(--brand-red)" },
              { t: "Predictable, high-performing marketing", c: "var(--brand-blue)" },
              { t: "Strategic growth frameworks", c: "var(--brand-orange)" },
              { t: "Scalable, long-term systems", c: "var(--brand-green)" },
            ].map((p) => (
              <StaggerItem key={p.t} className="card-tile p-6 bg-card">
                <div className="h-2 w-12 rounded-full" style={{ background: p.c }} />
                <p className="mt-4 font-display font-bold text-lg leading-tight">{p.t}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Ready for similar results?"
        title="Scale with intelligent systems and proven frameworks."
      />
    </PageLayout>
  );
}

function FeaturedCaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-black border-b border-border">
      <div className="container-x max-w-5xl text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-10">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-(--brand-red) text-white">CASE STUDY</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-(--brand-blue) text-white">AI AUTOMATION</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted text-foreground/80">THE VERTEX TECHNOLOGIES</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-3">
              How a DHA Lahore Aesthetics Clinic Got More Walk-ins & Zero After-Hours Missed Bookings in 72 Hours
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-white mb-4">
              <span><b>Industry:</b> Aesthetics & Medical Spa</span>
              <span><b>Location:</b> DHA Lahore, Pakistan</span>
              <span><b>Solution:</b> WhatsApp AI Agent</span>
              <span><b>Deploy Time:</b> 72 Hours</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-(--brand-blue)">72h</span>
                <span className="text-xs text-white">Full deployment & go-live</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-(--brand-red)">24/7</span>
                <span className="text-xs text-white">Automated patient responses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-(--brand-green)">↑ Walk-ins</span>
                <span className="text-xs text-white">Increased client visits</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-2 text-(--brand-blue)">Overview</h3>
            <p className="mb-4 text-white">A leading aesthetics clinic in DHA Lahore was losing patients to slow response times. Potential patients reaching out on WhatsApp after hours or during busy periods were not receiving timely replies. In aesthetics, speed of response is directly tied to booking conversion—a delayed reply means a lost client. The Vertex Technologies was engaged to design and deploy a fully automated WhatsApp AI Agent that could handle patient communication, bookings, and follow-ups around the clock without adding headcount.</p>
            <h3 className="font-bold text-lg mb-2 text-(--brand-red)">The Challenge</h3>
            <ul className="list-disc pl-5 text-white mb-4">
              <li>Slow response times: Patients messaging outside clinic hours received no reply and chose competitors instead</li>
              <li>Staff overloaded: Reception staff spent hours answering repetitive FAQs instead of serving in-clinic patients</li>
              <li>Location friction: New patients frequently asked for directions, consuming staff time on every inquiry</li>
              <li>No follow-up system: Interested prospects who did not book immediately were never followed up with automatically</li>
            </ul>
            <h3 className="font-bold text-lg mb-2 text-(--brand-green)">The Solution</h3>
            <ul className="list-disc pl-5 text-white mb-4">
              <li>Intelligent appointment booking: patients select services, choose time slots, and receive confirmation automatically</li>
              <li>FAQ automation: pricing, treatment details, eligibility questions, and clinic policies answered instantly at any hour</li>
              <li>Automatic PIN location sharing: every new inquiry receives the clinic’s Google Maps pin automatically</li>
              <li>Automated follow-up sequences: prospects who inquire but do not immediately book receive structured follow-up messages</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-2 text-(--brand-blue)">Technology Stack</h3>
            <ul className="list-disc pl-5 text-white mb-4">
              <li>n8n Workflow Automation</li>
              <li>Meta WhatsApp Business API</li>
              <li>360Dialog</li>
              <li>Webhook Integration</li>
              <li>Google Maps API</li>
            </ul>
            <h3 className="font-bold text-lg mb-2 text-(--brand-orange)">Implementation</h3>
            <ul className="list-disc pl-5 text-white mb-4">
              <li><b>Day 1:</b> Discovery session, mapped all patient inquiry types, booking flow, FAQs, and escalation scenarios. WhatsApp Business API access configured via 360Dialog.</li>
              <li><b>Day 2:</b> AI agent built in n8n with full conversation logic. Webhook endpoints configured. Booking confirmation, FAQ response library, and location-sharing flows completed and tested internally.</li>
              <li><b>Day 3:</b> Live deployment. Agent went live on the clinic’s WhatsApp. Follow-up sequences activated. Staff briefed on handoff protocols for complex queries.</li>
            </ul>
            <div className="w-full flex justify-center mt-6">
              <img
                src={caseStudyWorkflow}
                alt="Workflow diagram for case study implementation"
                className="rounded-xl shadow-lg max-w-full h-auto border border-white/20 bg-black/30 backdrop-blur"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-2 text-(--brand-blue)">Results</h3>
            <ul className="list-disc pl-5 text-white mb-4">
              <li><b>Walk-in clients:</b> Increased — faster response time converted more inquiries into actual clinic visits</li>
              <li><b>Staff workload:</b> Reduced — reception team freed from repetitive WhatsApp messages</li>
              <li><b>Response time:</b> &lt; 60 sec — every patient inquiry answered automatically, day or night</li>
              <li><b>Deployment:</b> 72 hours — from initial brief to fully operational live agent</li>
            </ul>
            <blockquote className="border-l-4 border-(--brand-blue) pl-4 italic text-white mb-4">
              "The agent was live within three days and immediately started handling patient inquiries we were previously missing. Walk-in traffic increased noticeably within the first week as patients received instant replies and directions automatically."
              <br />
              <span className="not-italic font-medium text-xs text-white">— Clinic Management, DHA Lahore Aesthetics Practice</span>
            </blockquote>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-2 text-(--brand-green)">Key Takeaway</h3>
            <p className="text-white mb-4">Speed of response is the new competitive advantage in healthcare. In Pakistan’s growing aesthetics market, patients do not wait. They message multiple clinics simultaneously and book with whoever responds first. An AI agent that replies in under 60 seconds—even at 2am on a Sunday—is not a luxury. It is a revenue protection system. This deployment demonstrated that AI automation does not require months of setup or enterprise budgets. A focused, well-built agent can be live and generating ROI within 72 hours.</p>
            <div className="mt-6">
              <a href="https://thevertextechnologies.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-full bg-(--brand-blue) text-white font-bold shadow hover:bg-(--brand-blue)/90 transition">About The Vertex Technologies</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}