import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { classifyLegacyPath } from "@/lib/legacy-urls";

/**
 * Catch-all for anything the router does not match.
 *
 * The legacy-URL policy itself lives in `src/lib/legacy-urls.ts` and is applied
 * server-side by the request middleware in `src/start.ts`, which is what
 * crawlers hit (real 301 / 410 status codes). This route repeats the redirect
 * half of that policy so an in-app client-side navigation to a stale link
 * lands on the right page instead of flashing the 404 screen.
 *
 * Genuinely unknown paths fall through to the root notFoundComponent.
 */
export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const verdict = classifyLegacyPath((params as { _splat?: string })._splat ?? "");
    if (verdict?.type === "redirect") {
      throw redirect({ to: verdict.target, statusCode: 301, reloadDocument: false });
    }
    // 410s are emitted by the middleware before the router runs; if one ever
    // reaches here it is a client-side navigation, so reload to get the real
    // status code from the server.
    throw notFound();
  },
  component: () => null,
});
