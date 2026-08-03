import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClass =
  "font-semibold text-[var(--brand-red)] underline-offset-2 hover:underline";

function BlogInlineLink({ href, label }: { href: string; label: string }) {
  const trimmed = href.trim();
  const isExternal = /^https?:\/\//i.test(trimmed);

  if (isExternal) {
    return (
      <a href={trimmed} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    );
  }

  const blogMatch = trimmed.match(/^\/blog\/([^/?#]+)\/?$/);
  if (blogMatch) {
    return (
      <Link to="/blog/$slug" params={{ slug: blogMatch[1] }} className={linkClass}>
        {label}
      </Link>
    );
  }

  if (trimmed.startsWith("/")) {
    return (
      <Link to={trimmed} className={linkClass}>
        {label}
      </Link>
    );
  }

  return (
    <a href={trimmed} className={linkClass}>
      {label}
    </a>
  );
}

/** Renders blog copy with `[label](/path)` and `[label](https://…)` hyperlinks */
export function BlogRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const re = new RegExp(MARKDOWN_LINK.source, "g");
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <BlogInlineLink key={`${match.index}-${match[1]}`} href={match[2]} label={match[1]} />,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
