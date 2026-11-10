import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildLlmsFullTxt } from "@/lib/llms";

/** Full text of the service pages and business facts, for AI answer engines. */
export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildLlmsFullTxt(), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
