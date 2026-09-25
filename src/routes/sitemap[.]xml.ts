import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildSitemapIndex, xmlResponse } from "@/lib/sitemap-data";

/**
 * /sitemap.xml is the address robots.txt advertises, so it answers 200
 * directly. It is the only sitemap index; older index addresses and retired
 * child sitemaps 301 to their replacements (see LEGACY_SITEMAPS in
 * src/lib/legacy-urls.ts).
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildSitemapIndex()),
    },
  },
});
