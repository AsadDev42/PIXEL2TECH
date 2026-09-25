import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { legacySitemapRedirect } from "@/lib/legacy-urls";

/** Yoast page sitemap, 301 to /pages-sitemap.xml. The target lives in LEGACY_SITEMAPS (src/lib/legacy-urls.ts). */
export const Route = createFileRoute("/page-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => legacySitemapRedirect("page-sitemap.xml"),
    },
  },
});
