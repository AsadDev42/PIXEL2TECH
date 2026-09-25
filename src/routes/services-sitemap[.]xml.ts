import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { legacySitemapRedirect } from "@/lib/legacy-urls";

/** Retired one-URL services sitemap (/services is in the pages sitemap), 301 to /pages-sitemap.xml. The target lives in LEGACY_SITEMAPS (src/lib/legacy-urls.ts). */
export const Route = createFileRoute("/services-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => legacySitemapRedirect("services-sitemap.xml"),
    },
  },
});
