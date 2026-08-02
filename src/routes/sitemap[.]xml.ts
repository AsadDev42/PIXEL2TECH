import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BASE_URL } from "@/lib/sitemap-data";

/**
 * /sitemap.xml is not a second source of URLs. It permanently redirects to the
 * single sitemap index so crawlers never see duplicate listings.
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: `${BASE_URL}/sitemap_index.xml`,
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
