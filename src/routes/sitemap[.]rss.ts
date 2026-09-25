import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { legacySitemapRedirect } from "@/lib/legacy-urls";

/** Old RSS-format sitemap, 301 to /sitemap.xml. The target lives in LEGACY_SITEMAPS (src/lib/legacy-urls.ts). */
export const Route = createFileRoute("/sitemap.rss")({
  server: {
    handlers: {
      GET: async () => legacySitemapRedirect("sitemap.rss"),
    },
  },
});
