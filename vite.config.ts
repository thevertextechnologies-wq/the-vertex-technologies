import { readFileSync } from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { renderHtmlWithSeo } from "./src/seo/head";

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function createVercelResponse(res: ServerResponse) {
  return {
    status(code: number) {
      res.statusCode = code;
      return this;
    },
    json(data: unknown) {
      if (!res.headersSent) {
        res.setHeader("Content-Type", "application/json");
      }
      res.end(JSON.stringify(data));
    },
  };
}

/** Dev-only: run Vercel serverless handlers so forms work on `npm run dev` (port 5173). */
function vercelApiDevMiddleware() {
  return {
    name: "vercel-api-dev",
    configureServer(server) {
      const env = loadEnv("development", process.cwd(), "");
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) {
          process.env[key] = value;
        }
      }

      server.middlewares.use(async (req, res, next) => {
        const requestPath = req.url?.split("?")[0];
        if (requestPath !== "/api/send-email") {
          next();
          return;
        }

        try {
          const mod = await server.ssrLoadModule("/api/send-email.ts");
          const handler = mod.default as (
            req: IncomingMessage & { body?: unknown },
            res: ReturnType<typeof createVercelResponse>,
          ) => Promise<void>;

          let body: unknown = undefined;
          if (req.method === "POST") {
            const raw = await readRequestBody(req);
            body = raw ? JSON.parse(raw) : undefined;
          }

          const vercelReq = Object.assign(req, { body });
          await handler(vercelReq, createVercelResponse(res));
        } catch (error) {
          console.error("[dev] /api/send-email error:", error);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Dev API handler failed", code: "dev_handler_error" }));
          }
        }
      });
    },
  };
}

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
    vercelApiDevMiddleware(),
    seoDevMiddleware(),
    TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});