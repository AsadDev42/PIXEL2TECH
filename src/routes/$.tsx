import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { classifyLegacyPath } from "@/lib/legacy-urls";

/**
 * Catch-all for anything the router does not match.
 *
 * The legacy-URL policy lives in `src/lib/legacy-urls.ts` and is applied
 * server-side by the request middleware in `src/start.ts`, which is what
 * crawlers hit (real 301 / 410 status codes). This route only matters for
 * client-side navigation to a stale in-app link:
 *
 *  - `redirect`: navigate to the live page instead of flashing the 404 screen;
 *  - `gone`: do a full page load so the server answers with its real 410 page;
 *  - anything else falls through to the root notFoundComponent.
 */
export const Route = createFileRoute("/$")({
  beforeLoad: ({ params, location }) => {
    const verdict = classifyLegacyPath((params as { _splat?: string })._splat ?? "");
    if (verdict?.type === "redirect") {
      throw redirect({ to: verdict.target, statusCode: 301, reloadDocument: false });
    }
    if (verdict?.type === "gone" && typeof window !== "undefined") {
      window.location.assign(location.href);
      return;
    }
    throw notFound();
  },
  component: () => null,
});
