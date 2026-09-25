import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { legacySitemapRedirect } from "@/lib/legacy-urls";

/** Yoast-era sitemap index, 301 to /sitemap.xml. The target lives in LEGACY_SITEMAPS (src/lib/legacy-urls.ts). */
export const Route = createFileRoute("/sitemap_index.xml")({
  server: {
    handlers: {
      GET: async () => legacySitemapRedirect("sitemap_index.xml"),
    },
  },
});
