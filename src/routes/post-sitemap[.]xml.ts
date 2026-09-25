import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { legacySitemapRedirect } from "@/lib/legacy-urls";

/** Yoast post sitemap, 301 to /blog-sitemap.xml. The target lives in LEGACY_SITEMAPS (src/lib/legacy-urls.ts). */
export const Route = createFileRoute("/post-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => legacySitemapRedirect("post-sitemap.xml"),
    },
  },
});
