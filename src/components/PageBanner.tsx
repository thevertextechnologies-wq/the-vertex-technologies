import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageBannerProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function PageBanner({
  eyebrow,
  title,
  intro,
  image,
  align = "left",
  dark = true,
}: PageBannerProps) {
  const hasContent = eyebrow || title || intro;

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[240px] sm:h-[400px] md:h-[420px] lg:h-[480px] w-full">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          loading="eager"
        />

        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? "linear-gradient(180deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.90) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          className={`absolute inset-0 ${
            hasContent ? "flex items-end pb-2" : ""
          }`}
        >
          <div
            className={`container-x w-full px-4 sm:px-6 ${
              hasContent ? "pb-4 sm:pb-10 md:pb-14 lg:pb-16" : ""
            }`}
          >
            <div
              className={`max-w-[340px] sm:max-w-3xl ${
                align === "center" ? "mx-auto text-center" : ""
              }`}
            >
              {eyebrow && (
                <Reveal>
                  <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] mb-1 sm:mb-4 text-white/80">
                    {eyebrow}
                  </p>
                </Reveal>
              )}

              {title && (
                <Reveal delay={0.1}>
                  <h1
                    className={`font-display font-extrabold leading-[1] tracking-tight text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl ${
                      dark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {title}
                  </h1>
                </Reveal>
              )}

              {intro && (
                <Reveal delay={0.2}>
                  <p
                    className={`hidden sm:block mt-3 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${
                      align === "center" ? "mx-auto" : ""
                    } text-white/85`}
                  >
                    {intro}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}