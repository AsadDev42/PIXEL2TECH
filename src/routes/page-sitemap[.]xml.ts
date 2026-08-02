import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Legacy WordPress/Yoast page sitemap path — 301s to the current pages sitemap.
 */
export const Route = createFileRoute("/page-sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: "https://pixel2tech.com/pages-sitemap.xml",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
