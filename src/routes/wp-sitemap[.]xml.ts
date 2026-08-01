import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * WordPress core sitemap path left over from the previous site.
 * Permanent redirect to the live sitemap so crawlers stop logging 404s.
 */
export const Route = createFileRoute("/wp-sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: "https://pixel2tech.com/sitemap.xml",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
