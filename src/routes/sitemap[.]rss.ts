import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * The previous WordPress site advertised /sitemap.rss. Google still requests
 * it, so answer with a permanent redirect to the current XML sitemap instead
 * of a 404. Nothing in this app links to it any more.
 */
export const Route = createFileRoute("/sitemap.rss")({
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
