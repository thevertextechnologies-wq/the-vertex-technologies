import { getRouteMeta } from "./metadata";

function replaceOrAppend(html: string, pattern: RegExp, replacement: string) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `${replacement}\n  </head>`);
}

export function renderHtmlWithSeo(template: string, pathname: string) {
  const meta = getRouteMeta(pathname);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  html = replaceOrAppend(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );
  html = replaceOrAppend(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = replaceOrAppend(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = replaceOrAppend(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${meta.url}" />`
  );
  html = replaceOrAppend(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${meta.url}" />`
  );

  return html;
}

export function injectSeoHead(pathname: string) {
  if (typeof document === "undefined") return;

  const meta = getRouteMeta(pathname);
  document.title = meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", meta.description);
  } else {
    const tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    tag.setAttribute("content", meta.description);
    document.head.appendChild(tag);
  }

  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute("content", meta.title);
  } else {
    const tag = document.createElement("meta");
    tag.setAttribute("property", "og:title");
    tag.setAttribute("content", meta.title);
    document.head.appendChild(tag);
  }

  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) {
    ogDescriptionTag.setAttribute("content", meta.description);
  } else {
    const tag = document.createElement("meta");
    tag.setAttribute("property", "og:description");
    tag.setAttribute("content", meta.description);
    document.head.appendChild(tag);
  }

  const ogUrlTag = document.querySelector('meta[property="og:url"]');
  if (ogUrlTag) {
    ogUrlTag.setAttribute("content", meta.url);
  } else {
    const tag = document.createElement("meta");
    tag.setAttribute("property", "og:url");
    tag.setAttribute("content", meta.url);
    document.head.appendChild(tag);
  }

  const canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) {
    canonicalTag.setAttribute("href", meta.url);
  } else {
    const tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    tag.setAttribute("href", meta.url);
    document.head.appendChild(tag);
  }
}
