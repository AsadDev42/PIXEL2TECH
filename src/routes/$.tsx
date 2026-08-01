import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

/**
 * Catch-all for legacy WordPress URLs that Google still has indexed.
 *
 * The map below was built from the actual page list reported by Google Search
 * Console for this property, so every known old URL resolves with a single
 * 301 to the closest live page. Anything genuinely unknown still returns a
 * real HTTP 404 via the root notFoundComponent.
 */

/** Exact legacy path -> new path. Keys are lowercase, no leading/trailing slash. */
const LEGACY_MAP: Record<string, string> = {
  // --- Home / theme demo pages ---
  home: "/",
  "home-two": "/",
  "home-three": "/",
  "home-three-2": "/",
  "home-6-onepage": "/",
  "corporate-agencyone-page": "/",
  "creative-agency-one-page": "/",
  "digital-agency-onepage": "/",
  "fullscreen-slider": "/",
  "sample-page": "/",

  // --- About / team ---
  "about-us": "/about",
  aboutus: "/about",
  team: "/about",
  "team-details": "/about",
  "team-stye-4": "/about",
  "team-style-4": "/about",
  faq: "/about",
  faqs: "/about",

  // --- Contact ---
  "contact-us": "/contact",
  contactus: "/contact",
  appointment: "/contact",
  "price-plans": "/contact",
  pricing: "/contact",

  // --- Services ---
  "our-services": "/services",
  "services-2": "/services",
  "services-v3": "/services",
  "app-design": "/services",
  "apps-development": "/services",
  "branding-design": "/services",
  "brand-development": "/services",
  "digital-agency": "/services",
  "digital-marketing": "/services",
  "market-research": "/services",
  "website-development": "/services",
  "web-development": "/services",
  "animation-video-editing": "/services",
  "business-marketing": "/services",

  // --- Portfolio ---
  "portfolio-case-studies": "/portfolio",
  "case-studies": "/portfolio",
  "our-portfolio": "/portfolio",
  "portfolio-filter": "/portfolio",
  "portfolio-grid": "/portfolio",
  "portfolio-showcase": "/portfolio",
  "photographer-portfolio": "/portfolio",
  "reveal-portfolio": "/portfolio",
  "project-details": "/portfolio",

  // --- Blog ---
  blogs: "/blog",
  "blog-list": "/blog",
  news: "/blog",

  // --- Retired shop / WooCommerce ---
  shop: "/",
  "shop-2": "/",
  "cart-2": "/",
  cart: "/",
  checkout: "/",
  wishlist: "/",
  "my-account": "/",
};

/**
 * Legacy first-segment prefixes -> new path.
 * Covers WordPress taxonomies, CPT archives and theme scaffolding.
 */
const PREFIX_MAP: [RegExp, string][] = [
  // Blog taxonomies + archives
  [/^(category|tag|type|author|archives?|comments|page)(\/|$)/, "/blog"],
  // Dated permalinks: /2024/12/26/post-name/ or /2023/10/
  [/^\d{4}(\/\d{1,2}){0,2}(\/|$)/, "/blog"],

  // Portfolio custom post types + taxonomies
  [/^(portfolio-category|portfolio_category|rt-portfolio-category|rt-portfolios|rt-portfolio)(\/|$)/, "/portfolio"],
  [/^portfolio-/, "/portfolio"],

  // Services custom post type
  [/^(service|services)(\/|$)/, "/services"],
  [/^services?-/, "/services"],

  // Team custom post type
  [/^(teams|team)(\/|$)/, "/about"],
  [/^careers?(\/|$)/, "/about"],

  // WooCommerce taxonomies
  [/^(product-tag|product-category|product_cat|product_tag|product)(\/|$)/, "/"],

  // Theme/plugin scaffolding that should never have been public
  [/^(rtelements_pro|tcg_teb|elementor|elementor-hf|wp-json)(\/|$)/, "/"],

  [/^blog-/, "/blog"],
];

/**
 * Retired standalone blog articles from the old site (no date prefix).
 * Matched on keyword so near-miss variants resolve too.
 */
const BLOG_KEYWORDS = [
  "design-that-resonates",
  "from-brand-strategy",
  "from-visual-storytelling",
  "the-digital-experiences-we-offer",
  "business-and-finance-services",
  "et-sint-facere-illo",
];

export function resolveLegacy(splat: string): string | null {
  // Strip slashes, query and hash, then normalise.
  let path = splat.split("?")[0]!.split("#")[0]!;
  path = path.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!path) return null;

  // Bare WordPress feed endpoints (/feed, /rss, /atom, /feed.xml) belong on
  // the blog index, not the homepage.
  if (/^(feed|rss|rss2|atom)(\.xml)?$/.test(path)) return "/blog";

  // Drop WordPress feed / pagination suffixes: /blog/feed, /category/x/page/2
  path = path.replace(/\/(feed|rss|rss2|atom|amp)(\.xml)?$/, "");
  path = path.replace(/\/page\/\d+$/, "");
  if (!path) return "/";


  if (LEGACY_MAP[path]) return LEGACY_MAP[path];

  for (const [pattern, target] of PREFIX_MAP) {
    if (pattern.test(path)) return target;
  }

  if (BLOG_KEYWORDS.some((k) => path.includes(k))) return "/blog";

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
