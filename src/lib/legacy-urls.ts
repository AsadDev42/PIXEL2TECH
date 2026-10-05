/**
 * Legacy WordPress URL policy for the migrated Pixel2Tech site.
 *
 * The old WordPress/WooCommerce install is fully retired. Every legacy URL now
 * falls into exactly one of three buckets:
 *
 *  1. `redirect` — the old page has a genuine live equivalent, so a permanent
 *     301 preserves the accumulated link equity.
 *  2. `gone` — CMS plumbing, taxonomy archives, feeds and shop pages that will
 *     never come back. These return `410 Gone` so Google drops them quickly
 *     instead of re-crawling them as soft 404s for months.
 *  3. `null` — not a legacy URL at all; the request continues to the router
 *     and an unknown path ends on the normal 404 page.
 *
 * It also owns two URL-hygiene rules: retired sitemap addresses 301 to the
 * current sitemaps, and page paths with capital letters 301 to lowercase.
 */

import { getPostMeta } from "@/lib/blog-index";
import { SERVICES, SITE, serviceAnchor } from "@/lib/site-config";

export type LegacyVerdict = { type: "redirect"; target: string } | { type: "gone" };

/** Paths that must never be treated as legacy content. */
const RESERVED_PREFIXES = [
  "api",
  "lovable",
  "assets",
  "_build",
  "_server",
  "@",
  "node_modules",
  "src",
];

/** Real files served from /public or by a dedicated route. */
const RESERVED_EXACT = new Set([
  "robots.txt",
  "llms.txt",
  "sitemap.xml",
  "pages-sitemap.xml",
  "blog-sitemap.xml",
  "portfolio-sitemap.xml",
  "images-sitemap.xml",
  "favicon.ico",
  "favicon.png",
  "manifest.json",
  "site.webmanifest",
]);

/**
 * Retired WordPress URLs with no SEO value — answered with 410 Gone.
 * Patterns are tested against the normalised path (lowercase, no slashes at
 * either end, query/hash already stripped).
 */
const GONE_EXACT = new Set([
  // Retired theme demo homepages — no equivalent page, so 410 rather than a
  // misleading redirect to the homepage.
  "home-two",
  "home-three",
  "home-three-2",
  "corporate-agencyone-page",
  "creative-agency-one-page",
  "digital-agency-onepage",
  "fullscreen-slider",
  "sample-page",
  "wishlist",
  "coming-soon",
  "maintenance",
]);

const DATED_POST = /^\d{4}\/\d{1,2}\/\d{1,2}\/([a-z0-9-]+)$/;

const GONE_PATTERNS: RegExp[] = [
  // --- Core WordPress plumbing -------------------------------------------
  // NOTE: deliberately does NOT match "wp-sitemap.xml", which still 301s.
  /^wp-(admin|content|includes|json|login|cron|links-opml|comments-post|signup|activate|trackback|mail|config|register)\b/,
  /^(xmlrpc|wp-load|wp-settings|wp-blog-header)\.php$/,
  /\.php$/,

  // --- Feeds --------------------------------------------------------------
  /^(feed|rss|rss2|atom|comments)(\/|$)/,
  /\/(feed|rss|rss2|atom)(\.xml)?$/,

  // --- Taxonomy + archive listings ---------------------------------------
  /^(category|tag|author|page|archives?|type|comments)(\/|$)/,
  /^(product-category|product_cat|product-tag|product_tag|portfolio-category|portfolio_category|rt-portfolio-category)(\/|$)/,

  // --- Dated permalinks and date archives: /2024/, /2024/12/, /2024/12/26/x
  /^\d{4}(\/\d{1,2}){0,2}(\/|$)/,

  // --- WooCommerce --------------------------------------------------------
  /^(shop|shop-2|cart|cart-2|checkout|wishlist|my-account|order-received|order-tracking|product)(\/|$)/,

  // --- Theme / plugin scaffolding that was never real content -------------
  /^(elementor|elementor-hf|rtelements_pro|tcg_teb|rt-portfolios|rt-portfolio|cf7|contact-form-7)(\/|$)/,
  /^(header|footer|pxl-template|pxl_template|pxl-templates|templates|template)(\/|$)/,

  // --- Retired theme onepage demo homepages --------------------------------
  /^home-\d+-onepage$/,
  /^home-onepage(-\d+)?$/,
  /^(onepage|one-page)(-\d+)?$/,

  // --- Demo careers / job listings from the old theme ----------------------
  /^(career|careers|job|jobs|job-listing|career-details|job-details)(\/|$)/,

  // --- Theme demo portfolio entries (never real client work) ---------------
  /^portfolio\/(figma-digital-agency|nice-guy|mails-mobile-app|astro-architecture|vortex-media)(-|$)/,
  /^portfolio\/(demo|sample|theme)-/,

  // --- Theme sample blog posts --------------------------------------------
  /^blog\/(hello-world|sample-post|demo-post|lorem-ipsum)(-|$)/,
  /^hello-world$/,
];

/**
 * Retired sitemap addresses -> the current sitemap that replaced them. Search
 * Console and old robots.txt copies may still request these, so each one
 * answers a single-hop 301. /sitemap.xml is the only sitemap index.
 */
export const LEGACY_SITEMAPS = {
  "sitemap_index.xml": "/sitemap.xml", // Yoast-era index
  "wp-sitemap.xml": "/sitemap.xml", // WordPress core index
  "sitemap.rss": "/sitemap.xml", // old RSS-format sitemap
  "page-sitemap.xml": "/pages-sitemap.xml", // Yoast page sitemap
  "post-sitemap.xml": "/blog-sitemap.xml", // Yoast post sitemap
  "services-sitemap.xml": "/pages-sitemap.xml", // /services now lives in the pages sitemap
} as const satisfies Record<string, string>;

/**
 * Old page -> live equivalent. These are the only redirects worth keeping:
 * each one points at a page that genuinely covers the same intent.
 * Keys are normalised paths.
 */
const REDIRECT_MAP: Record<string, string> = {
  ...LEGACY_SITEMAPS,

  // --- Home / retired theme demo pages ---
  home: "/",

  // --- About / team ---
  "about-us": "/about",
  aboutus: "/about",

  // Founder profiles have their own pages; send old team URLs straight there
  // (these win over the generic /team prefix rule below).
  "team/usama": "/usama-farooq",
  "team/usama-farooq": "/usama-farooq",
  "team/asad": "/asad-farooq",
  "team/asad-farooq": "/asad-farooq",

  team: "/about",
  "our-team": "/about",
  "meet-the-team": "/about",
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
  quote: "/contact",
  "get-a-quote": "/contact",

  // --- Services ---
  "our-services": "/services",
  "services-2": "/services",
  "services-v3": "/services",
  "app-design": "/services/custom-platforms-and-apps",
  "apps-development": "/services/custom-platforms-and-apps",
  "branding-design": "/services/branding-and-design",
  "brand-development": "/services/branding-and-design",
  "digital-agency": "/services",
  "digital-marketing": "/services/social-media-and-email",
  "market-research": "/services",
  "website-development": "/services/website-development",
  "web-development": "/services/website-development",
  "animation-video-editing": "/services/video-editing-and-ads",
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
  // Old WordPress portfolio categories and retired items.
  "portfolio/branding": "/portfolio",
  "portfolio/web-design": "/portfolio",
  "portfolio/video": "/portfolio",
  "portfolio/creative-social-media-product-launch-campaign": "/portfolio",

  // --- Blog ---
  blogs: "/blog",
  "blog-list": "/blog",
  news: "/blog",
  articles: "/blog",

  // Posts retargeted from Pakistan-local buyers to US, UK and EU buyers (Sep 2026).
  "blog/website-development-cost-pakistan": "/blog/website-development-cost",
  "blog/custom-web-app-development-cost-pakistan": "/blog/custom-web-app-development-cost",
  "blog/shopify-store-cost-pakistan": "/blog/shopify-store-cost",
  "blog/shopify-payment-gateways-pakistan": "/blog/shopify-payment-gateways-us-uk-eu",
  "blog/sell-internationally-from-pakistan-shopify": "/blog/sell-internationally-on-shopify",
  "blog/whatsapp-business-api-setup-pakistan": "/blog/whatsapp-business-api-setup-guide",
  "blog/reduce-fake-cod-orders-shopify-pakistan": "/blog/reduce-shopify-chargebacks-and-fraud",
  "blog/local-seo-lahore-guide": "/blog/local-seo-for-small-business",
  "blog/logo-design-cost-in-pakistan": "/blog/logo-design-cost",

  // Retired WordPress portfolio items reported as 404 in Search Console (Sep 2026).
  "portfolio/modaro-fashion-branding-studio": "/portfolio",
  "portfolio/blockchain-development": "/portfolio",
  "portfolio/crafting-stories-that-stick": "/portfolio",
  "portfolio/creative-pulse-rising": "/portfolio",
  "portfolio/elegant-branding-flow": "/portfolio",
  "portfolio/elevate-your-brand-with-creative-precision": "/portfolio",
  "portfolio/future-focused-studio": "/portfolio",
  "portfolio/game-design": "/portfolio",
  "portfolio/klayn-fashion-brand-identity": "/portfolio",
  "portfolio/loop-agency-creative-branding": "/portfolio",
  "portfolio/search-engine-optimization": "/portfolio",
  "portfolio/seo-marketing": "/portfolio",
  "portfolio/smart-contract-development": "/portfolio",
  "portfolio/sophisticated-token-line": "/portfolio",
  "portfolio/superpower-branding": "/portfolio",
  "portfolio/vanta-visual-identity-system": "/portfolio",
  "portfolio/vision-driven-refresh": "/portfolio",
  "portfolio/web3-crypto": "/portfolio",

  // Retired theme service/landing pages reported as 404 in Search Console (Sep 2026).
  "from-concept-development-to-multi-channel-execution-we-bring-your-brand-stories-to-life":
    "/services",
  "business-and-finance-services-play-a-crucial": "/services",
  "from-brand-strategy-to-immersive-digital-experiences": "/services",
  "from-business-objectives-to-user-first-design-we-build-systems-that-grow-with-your-vision":
    "/services",
  "from-creative-thinking-to-seamless-production-we-deliver-compelling-results-that-drive-impact":
    "/services",
  "from-data-driven-insights-to-bold-creative-we-shape-strategies-that-connect-and-convert":
    "/services",
  "from-insightful-research-to-striking-design-we-craft-experiences-that-elevate-your-brand-identity":
    "/services",
  "from-ux-strategy-to-content-creation-we-engineer-digital-solutions-that-resonate-and-perform":
    "/services",
  "from-visual-storytelling-to-digital-innovation-we-create-meaningful-brand-interactions":
    "/services",
  "immersive-digital-experiences-we-offer-end-to-end": "/services",
  "the-digital-experiences-we-offer-end-to-end": "/services",
  "your-brand-for-impact-with-deep-market-insights": "/services",

  // --- Renamed portfolio slugs (the only place these are defined) ---
  "portfolio/creative-social-media-madluvv-social-and-meta-ads":
    "/portfolio/madluvv-social-media-meta-ads",
  "portfolio/creative-social-media-madluvv-social-meta-ads":
    "/portfolio/madluvv-social-media-meta-ads",
};

/**
 * Legacy custom-post-type archives whose whole section maps cleanly onto one
 * live page. Only kept where the destination genuinely covers the old topic.
 */
const REDIRECT_PREFIXES: [RegExp, string][] = [
  [/^(service|services)(\/|$)/, "/services"],
  [/^services?-/, "/services"],
  [/^(teams|team)(\/|$)/, "/about"],
  [/^portfolio-/, "/portfolio"],
  [/^blog-/, "/blog"],
];

/** Live top-level pages — never classified as legacy (would self-redirect). */
const LIVE_EXACT = new Set(["about", "services", "portfolio", "blog", "contact"]);

/** Live sections with dynamic children: /blog/$slug, /portfolio/$slug. */
const LIVE_PREFIXES = ["blog", "portfolio"];

/**
 * Live service pages, /services/<serviceAnchor(title)>. Only these exact paths
 * pass through: any other /services/* URL is a retired WordPress page and
 * still 301s to the /services hub via REDIRECT_PREFIXES.
 */
const LIVE_SERVICE_PATHS = new Set(SERVICES.map((title) => `services/${serviceAnchor(title)}`));

/** Lowercase, strip query/hash and surrounding slashes. */
export function normalizePath(input: string): string {
  const path = input.split("?")[0]!.split("#")[0]!;
  return path.replace(/^\/+|\/+$/g, "").toLowerCase();
}

/**
 * True when a path has capital letters worth redirecting away from: it is a
 * page-style path (no file extension in the last segment) and the capitals
 * are not just percent-encoding hex digits (%C3 and %c3 are the same byte).
 * Tooling paths (/@vite, /__l5e, /~flock.js, /.well-known) are skipped.
 */
function hasUppercasePagePath(rawPath: string): boolean {
  const path = rawPath.split("?")[0]!.split("#")[0]!.replace(/^\/+/, "");
  if (!path || /^[@_~.]/.test(path)) return false;
  const last = path.replace(/\/+$/, "").split("/").pop() ?? "";
  if (last.includes(".")) return false;
  return /[A-Z]/.test(path.replace(/%[0-9A-Fa-f]{2}/g, ""));
}

/**
 * Classify a request path. Returns `null` when the path is not a legacy URL
 * and should be handled by the router as normal.
 *
 * Order matters:
 *  1. reserved/internal paths pass through untouched;
 *  2. exact legacy pages redirect (most specific rule wins);
 *  3. retired CMS shapes return 410 — this runs before the generic prefix
 *     redirects so taxonomy archives like /portfolio-category/x are dropped
 *     rather than funnelled into /portfolio;
 *  4. live routes pass through — critical, otherwise /services would match
 *     the /service* prefix rule and redirect to itself forever. A live path
 *     typed with capitals (/About, /Blog/Some-Post) 301s to its lowercase
 *     form so only one URL is ever served;
 *  5. remaining legacy prefixes redirect.
 *
 * Every rule matches the lowercased path, so a capitalised legacy URL
 * redirects straight to its final target in one hop.
 */
export function classifyLegacyPath(rawPath: string): LegacyVerdict | null {
  const path = normalizePath(rawPath);
  if (!path) return null;

  const first = path.split("/")[0]!;
  if (RESERVED_PREFIXES.includes(first)) return null;
  if (RESERVED_EXACT.has(path)) return null;

  const verdict = classifyNormalized(path, first);
  if (verdict) return verdict;
  if (hasUppercasePagePath(rawPath)) return { type: "redirect", target: `/${path}` };
  return null;
}

function classifyNormalized(path: string, first: string): LegacyVerdict | null {
  const mapped = REDIRECT_MAP[path];
  if (mapped) return { type: "redirect", target: mapped };

  if (GONE_EXACT.has(path)) return { type: "gone" };

  // Old WordPress dated permalinks (/2026/02/24/<slug>) for posts that still
  // exist move to the post; every other dated URL falls through to 410 below.
  const dated = DATED_POST.exec(path);
  if (dated && getPostMeta(dated[1]!)) return { type: "redirect", target: `/blog/${dated[1]}` };

  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(path)) return { type: "gone" };
  }

  if (LIVE_EXACT.has(path)) return null;
  if (LIVE_SERVICE_PATHS.has(path)) return null;
  if (LIVE_PREFIXES.includes(first)) return null;

  for (const [pattern, target] of REDIRECT_PREFIXES) {
    if (pattern.test(path)) return { type: "redirect", target };
  }

  return null;
}

/** The 301 response for a redirect verdict. Shared by the middleware and route handlers. */
export function permanentRedirect(target: string, search = ""): Response {
  return new Response(null, {
    status: 301,
    headers: { location: target + search, "cache-control": "public, max-age=86400" },
  });
}

/**
 * Handler for a retired sitemap route file. The request middleware normally
 * answers these first; this keeps the route itself correct if it is ever
 * reached directly. The target always comes from LEGACY_SITEMAPS.
 */
export function legacySitemapRedirect(path: keyof typeof LEGACY_SITEMAPS): Response {
  return permanentRedirect(LEGACY_SITEMAPS[path]);
}

/** Minimal, self-contained 410 page. Marked noindex so it is never surfaced. */
export function renderGonePage(path: string): string {
  const safe = path.replace(/[<>&"']/g, "");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>410 — Page permanently removed | ${SITE.name}</title>
<style>
:root{color-scheme:light dark}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
font-family:'Plus Jakarta Sans',ui-sans-serif,system-ui,-apple-system,sans-serif;
background:#0b0b0f;color:#f4f4f5;padding:24px;text-align:center}
main{max-width:520px}
p.code{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#2b7fff;margin:0 0 12px}
h1{font-size:clamp(26px,5vw,38px);line-height:1.15;margin:0 0 14px;font-weight:700}
p.lead{color:#a1a1aa;line-height:1.6;margin:0 0 28px;font-size:15px}
code{background:#18181d;padding:2px 7px;border-radius:5px;font-size:13px;color:#d4d4d8}
.links{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
a{display:inline-block;padding:11px 20px;border-radius:9px;text-decoration:none;
font-size:14px;font-weight:600;border:1px solid #27272e;color:#f4f4f5}
a.primary{background:#2b7fff;border-color:#2b7fff;color:#fff}
</style>
</head>
<body>
<main>
<p class="code">410 &middot; Gone</p>
<h1>This page has been permanently removed</h1>
<p class="lead"><code>/${safe}</code> belonged to our previous website and no longer exists. Nothing replaced it &mdash; but everything we do now lives on the pages below.</p>
<div class="links">
<a class="primary" href="/">Home</a>
<a href="/services">Services</a>
<a href="/portfolio">Portfolio</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a>
</div>
</main>
</body>
</html>`;
}
