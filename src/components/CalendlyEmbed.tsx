import { getCalendlyEmbedUrl } from "@/config/scheduling";

type CalendlyEmbedProps = {
  /** Visible iframe height — month picker + timezone (scroll inside iframe when times open) */
  height?: number;
  className?: string;
};

export default function CalendlyEmbed({ height = 560, className = "" }: CalendlyEmbedProps) {
  const src = getCalendlyEmbedUrl();

  return (
    <div
      className={`calendly-embed-root overflow-hidden rounded-2xl border border-white/10 bg-[#14141c] ${className}`}
    >
      <iframe
        title="Schedule a free AI strategy call with The Vertex Technologies"
        src={src}
        className="block w-full border-0 bg-[#14141c]"
        style={{ height: `${height}px` }}
        loading="lazy"
      />
    </div>
  );
}
