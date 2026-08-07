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
 */

export type LegacyVerdict =
  | { type: "redirect"; target: string }
  | { type: "gone" };

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
  "sitemap.xml",
  "sitemap.rss",
  "sitemap_index.xml",
  "pages-sitemap.xml",
  "blog-sitemap.xml",
  "services-sitemap.xml",
  "portfolio-sitemap.xml",
  "images-sitemap.xml",
  "wp-sitemap.xml",
  // Legacy Yoast sitemap names that 301 to their current equivalents.
  "post-sitemap.xml",
  "page-sitemap.xml",


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
];

/**
 * Old page -> live equivalent. These are the only redirects worth keeping:
 * each one points at a page that genuinely covers the same intent.
 * Keys are normalised paths.
 */
const REDIRECT_MAP: Record<string, string> = {
  // --- Home / retired theme demo pages ---
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
  quote: "/contact",
  "get-a-quote": "/contact",

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
  articles: "/blog",
  articles: "/blog",

  // --- Renamed portfolio slugs ---
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
  [/^careers?(\/|$)/, "/about"],
  [/^portfolio-/, "/portfolio"],
  [/^blog-/, "/blog"],
];

/** Live top-level pages — never classified as legacy (would self-redirect). */
const LIVE_EXACT = new Set(["about", "services", "portfolio", "blog", "contact"]);

/** Live sections with dynamic children: /blog/$slug, /portfolio/$slug. */
const LIVE_PREFIXES = ["blog", "portfolio"];

/** Lowercase, strip query/hash and surrounding slashes. */
export function normalizePath(input: string): string {
  const path = input.split("?")[0]!.split("#")[0]!;
  return path.replace(/^\/+|\/+$/g, "").toLowerCase();
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
 *     the /service* prefix rule and redirect to itself forever;
 *  5. remaining legacy prefixes redirect.
 */
export function classifyLegacyPath(rawPath: string): LegacyVerdict | null {
  const path = normalizePath(rawPath);
  if (!path) return null;

  const first = path.split("/")[0]!;
  if (RESERVED_PREFIXES.includes(first)) return null;
  if (RESERVED_EXACT.has(path)) return null;

  const mapped = REDIRECT_MAP[path];
  if (mapped) return { type: "redirect", target: mapped };

  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(path)) return { type: "gone" };
  }

  if (LIVE_EXACT.has(path)) return null;
  if (LIVE_PREFIXES.includes(first)) return null;

  for (const [pattern, target] of REDIRECT_PREFIXES) {
    if (pattern.test(path)) return { type: "redirect", target };
  }

  return null;
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
<title>410 — Page permanently removed | Pixel2Tech</title>
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
