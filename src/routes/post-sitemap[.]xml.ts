import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Legacy WordPress/Yoast post sitemap path — 301s to the current blog sitemap.
 */
export const Route = createFileRoute("/post-sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: "https://pixel2tech.com/blog-sitemap.xml",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
