import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, Clock, Users, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/book-a-call")({
  head: () =>
    buildSeoHead({
      title: "Book a Free AI Strategy Call | The Vertex Technologies",
      description:
        "Book a free strategy call with The Vertex Technologies and get a tailored AI and automation roadmap within 24 hours. Pick a time and start scaling today.",
      url: "https://www.thevertextechnologies.com/book-a-call",
    }),
  component: BookCallPage,
});

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

function BookCallPage() {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i + 1);
    return d;
  });

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-60" aria-hidden />
        <div className="container-x relative pt-16 md:pt-24 pb-20">
          <Reveal>
            <Breadcrumbs tone="dark" className="mb-5" />
          </Reveal>
          <Reveal>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
              Book a Call
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-display text-[clamp(2.6rem,7vw,5.2rem)] mt-5 max-w-4xl text-balance">
              A focused strategy session to plan your growth.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Connect with The Vertex Technologies to explore actionable solutions for
              growth, automation and scalable systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="card-tile p-7 md:p-10 bg-card">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[var(--brand-blue)]" />
                  <h2 className="font-display text-2xl font-bold">Select a date</h2>
                </div>
                <Stagger className="mt-6 grid grid-cols-7 gap-2" stagger={0.04}>
                  {days.map((d, i) => (
                    <StaggerItem
                      key={d.toISOString()}
                      className={`text-center rounded-xl border p-3 cursor-pointer transition-all hover:bg-muted ${
                        i === 1
                          ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--cream)]"
                          : "border-border"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wider opacity-75">
                        {d.toLocaleDateString(undefined, { weekday: "short" })}
                      </p>
                      <p className="font-display text-2xl font-bold mt-1">
                        {d.getDate()}
                      </p>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-10 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[var(--brand-orange)]" />
                  <h3 className="font-display text-xl font-bold">Available times</h3>
                </div>
                <Stagger className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {slots.map((s, i) => (
                    <StaggerItem
                      key={s}
                      className={`rounded-xl border p-3 text-center font-medium cursor-pointer transition-all hover:border-[var(--ink)] ${
                        i === 1 ? "border-[var(--brand-orange)] bg-[var(--brand-orange-soft)]" : "border-border"
                      }`}
                    >
                      {s}
                    </StaggerItem>
                  ))}
                </Stagger>

                <button className="btn-primary mt-10 w-full justify-center text-base">
                  Confirm Your Call →
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  This is a placeholder calendar. Real bookings can be wired to your
                  scheduling tool of choice.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <InfoCard
              title="What we cover"
              icon={<Sparkles className="h-5 w-5" />}
              color="var(--brand-red)"
              items={[
                "Current business challenges",
                "Opportunities for AI, automation and marketing",
                "Scalable growth strategies",
                "Next steps for implementation",
              ]}
            />
            <InfoCard
              title="Who should book"
              icon={<Users className="h-5 w-5" />}
              color="var(--brand-blue)"
              items={[
                "Founders and business owners",
                "Companies ready to scale",
                "Teams exploring AI and digital transformation",
              ]}
            />
            <InfoCard
              title="What you gain"
              icon={<CheckCircle2 className="h-5 w-5" />}
              color="var(--brand-green)"
              items={[
                "Clear insights into your business position",
                "Identified opportunities and priorities",
                "Strategic direction tailored to your goals",
              ]}
            />

            <Reveal delay={0.1}>
              <Link
                to="/contact"
                className="block text-center text-sm font-semibold underline-grow"
              >
                Prefer to send a message? Contact us →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function InfoCard({
  title,
  icon,
  color,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}) {
  return (
    <Reveal>
      <div className="card-tile p-7 bg-card">
        <div className="flex items-center gap-3">
          <span
            className="h-9 w-9 rounded-lg flex items-center justify-center"
            style={{ background: `color-mix(in oklab, ${color} 14%, transparent)`, color }}
          >
            {icon}
          </span>
          <h3 className="font-display text-xl font-bold">{title}</h3>
        </div>
        <ul className="mt-5 space-y-2.5 text-sm">
          {items.map((i) => (
            <li key={i} className="flex gap-2 items-start">
              <span
                className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                style={{ background: color }}
              />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}