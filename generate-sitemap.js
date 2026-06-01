import { writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const HOSTNAME = "https://www.thevertextechnologies.com";
const ROUTES_DIR = join(__dirname, "src/routes");

function fileNameToRoute(fileName) {
  // Remove extension (.tsx / .ts / .js)
  const name = fileName.replace(/\.(tsx|ts|js)$/, "");

  // Skip internal TanStack Router files
  if (name.startsWith("__") || name === "routeTree.gen") return null;

  // index.tsx → "/"
  if (name === "index") return "/";

  // everything else → "/slug"
  return `/${name}`;
}

function generateSitemapXml(urls) {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = urls
    .map(({ url, priority }) => {
      return `  <url>
    <loc>${HOSTNAME}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function main() {
  // Auto-discover routes from the filesystem — no build step needed
  const files = readdirSync(ROUTES_DIR);

  const urls = files
    .map((file) => fileNameToRoute(file))
    .filter(Boolean)
    .map((url) => ({
      url,
      priority: url === "/" ? 1.0 : 0.8,
    }))
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));

  const xml = generateSitemapXml(urls);
  const outPath = join(__dirname, "public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");

  console.log(`✅ Sitemap generated at public/sitemap.xml`);
  console.log(`   ${urls.length} URLs:`);
  urls.forEach(({ url }) => console.log(`   ${HOSTNAME}${url}`));
}

main();