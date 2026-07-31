import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

/**
 * Catch-all route for legacy WordPress URLs indexed by Google.
 * Known old paths 301 to their new home; everything else falls through
 * to the root notFoundComponent with a real HTTP 404.
 */
const LEGACY_MAP: Record<string, string> = {
  "portfolio-case-studies": "/portfolio",
  "case-studies": "/portfolio",
  "our-portfolio": "/portfolio",
  "about-us": "/about",
  "aboutus": "/about",
  "contact-us": "/contact",
  "contactus": "/contact",
  "our-services": "/services",
  "services-2": "/services",
  "blogs": "/blog",
  "news": "/blog",
  "home": "/",
};

function resolveLegacy(splat: string): string | null {
  const path = splat.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!path) return null;
  if (LEGACY_MAP[path]) return LEGACY_MAP[path];
  if (path.startsWith("portfolio-")) return "/portfolio";
  if (path.startsWith("service-") || path.startsWith("services-")) return "/services";
  if (path.startsWith("blog-")) return "/blog";
  return null;
}

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const target = resolveLegacy((params as { _splat?: string })._splat ?? "");
    if (target) {
      throw redirect({ to: target, statusCode: 301, reloadDocument: false });
    }
    throw notFound();
  },
  component: () => null,
});
