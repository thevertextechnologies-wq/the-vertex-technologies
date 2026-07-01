import { readFileSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { renderHtmlWithSeo } from "./src/seo/head";

function seoDevMiddleware() {
  return {
    name: "seo-dev-routes",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || req.method !== "GET") {
          next();
          return;
        }

        const requestPath = req.url.split("?")[0];
        const isAssetRequest = requestPath.includes(".") || requestPath.startsWith("/@") || requestPath.startsWith("/api/");
        if (isAssetRequest) {
          next();
          return;
        }

        const normalizedPath = requestPath === "/" ? "/" : requestPath.replace(/\/+$/, "") || "/";
        const indexHtml = readFileSync(path.resolve(process.cwd(), "index.html"), "utf8");
        const transformed = await server.transformIndexHtml(req.url, indexHtml);
        const html = renderHtmlWithSeo(transformed, normalizedPath);

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
      });
    },
  };
}

export default defineConfig({
  plugins: [
    seoDevMiddleware(),
    TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});