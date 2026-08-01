import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Browsers and crawlers request /favicon.ico by convention even though the
 * site declares a PNG icon. Redirect instead of returning 404.
 */
export const Route = createFileRoute("/favicon.ico")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: {
            Location: "/favicon.png",
            "Cache-Control": "public, max-age=604800",
          },
        }),
    },
  },
});
