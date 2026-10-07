// Vite config for the Pixel2Tech site (TanStack Start + React 19 + Tailwind v4 + Nitro).
//
// Plugin order matters: tailwind -> TanStack Start -> nitro (build only) -> React.
// Do not add a second copy of any of these plugins.
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, loadEnv, type PluginOption, type UserConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Default Nitro target is a standalone Node server (.output/server/index.mjs), which is what
// Prisma Compute runs. Override with NITRO_PRESET (or SERVER_PRESET) for other targets.
const DEFAULT_NITRO_PRESET = "node-server";

export default defineConfig(({ command, mode }): UserConfig => {
  // Load every env var from .env files (not just VITE_*) into process.env so server routes and
  // server functions can read them. Values already set in the real environment win.
  // These are NOT injected into the client bundle.
  Object.assign(process.env, loadEnv(mode, __dirname, ""));

  // Expose VITE_* vars as import.meta.env.* in every environment (client and SSR).
  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, __dirname, "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const isDevBuild = command === "build" && mode === "development";

  const plugins: PluginOption[] = [
    tailwindcss(),
    tanstackStart({
      // Fail the build if server-only code leaks into the client bundle.
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      // Use src/server.ts (our SSR error wrapper) as the server entry. nitro/vite builds from this.
      server: { entry: "server" },
    }),
  ];

  if (command === "build") {
    plugins.push(
      nitro({
        preset: process.env.NITRO_PRESET || process.env.SERVER_PRESET || DEFAULT_NITRO_PRESET,
        // media-range: byte-range (206) responses for every video in public/; Safari on iOS
        // needs them to play MP4. compress: gzip for server-rendered HTML/XML/JSON.
        // Order matters: the last plugin wraps the others, so compress sees the final response.
        plugins: [
          path.resolve(__dirname, "src/nitro/media-range.ts"),
          path.resolve(__dirname, "src/nitro/compress.ts"),
        ],
        // Write .br/.gz/.zst copies of text files in public/ (JS, CSS, SVG, XML, txt) at
        // build time; Nitro's static handler serves the best one the browser accepts.
        compressPublicAssets: true,
        routeRules: {
          // Self-hosted media lives in UUID folders that never change, so cache it for a year.
          "/media/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
          // These keep their file names when the content changes (not content-hashed), so
          // no `immutable`: a week, then revalidate in the background.
          "/portfolio/**": {
            headers: { "cache-control": "public, max-age=604800, stale-while-revalidate=86400" },
          },
          "/blog/covers/**": {
            headers: { "cache-control": "public, max-age=604800, stale-while-revalidate=86400" },
          },
          "/favicon.png": {
            headers: { "cache-control": "public, max-age=86400, stale-while-revalidate=604800" },
          },
          "/llms.txt": { headers: { "cache-control": "public, max-age=3600" } },
          "/robots.txt": { headers: { "cache-control": "public, max-age=3600" } },
        },
      }),
    );
  }

  plugins.push(viteReact());

  return {
    define: envDefine,
    ...(isDevBuild
      ? {
          environments: {
            client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
          },
          // Dev builds keep function names for readable stack traces. The cast is
          // needed because the esbuild types are an optional peer of Vite 8.
          esbuild: { keepNames: true } as UserConfig["esbuild"],
        }
      : {}),
    css: { transformer: "lightningcss" },
    resolve: {
      // Resolve the "paths" from tsconfig.json natively (replaces vite-tsconfig-paths).
      tsconfigPaths: true,
      alias: {
        "@": path.resolve(__dirname, "src"),
        "entities/lib/decode.js": path.resolve(__dirname, "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(__dirname, "node_modules/entities/lib/encode.js"),
        entities: path.resolve(__dirname, "node_modules/entities"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: {
      port: 5173,
    },
    plugins,
  };
});
