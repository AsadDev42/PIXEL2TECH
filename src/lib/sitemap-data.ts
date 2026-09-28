import { POST_INDEX } from "@/lib/blog-index";
import { toISODate, type PostMeta } from "@/lib/blog-types";
import { ALL_ITEMS } from "@/lib/portfolio-data";
import { SERVICES, SITE, serviceAnchor } from "@/lib/site-config";

/** Site origin for every <loc>. Single source of truth: SITE.url. */
export const BASE_URL = SITE.url;

export interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: string[];
}

/**
 * Last significant content change per static page, taken from that page's
 * source history. Update the date here when a page's content changes. Never
 * use "now": a lastmod that changes on every request teaches Google to ignore it.
 */
export const STATIC_LASTMOD: Record<string, string> = {
  "/": "2026-08-02",
  "/about": "2026-08-02",
  "/asad-farooq": "2026-08-08",
  "/saad": "2026-09-27",
  "/usama-farooq": "2026-08-08",
  "/services": "2026-08-01",
  "/portfolio": "2026-08-01",
  "/contact": "2026-08-01",
  "/privacy-policy": "2026-09-27",
  "/terms-and-conditions": "2026-09-27",
};

/** Last content change of the /services/<slug> pages (copy in src/lib/service-pages.ts). */
export const SERVICE_PAGES_LASTMOD = "2026-09-24";

type Post = PostMeta;

/** A post's real last change: its `updated` date when set, else its publish date. */
function postLastmod(p: Post): string | undefined {
  return (p.updated ? toISODate(p.updated) : undefined) ?? toISODate(p.date);
}

/** Most recent lastmod in a set, used for index and hub entries. */
export function latestLastmod(entries: SitemapEntry[]): string | undefined {
  return entries
    .map((e) => e.lastmod)
    .filter((d): d is string => Boolean(d))
    .sort()
    .reverse()[0];
}

/**
 * Static, indexable pages (no 404 / admin / api / auth routes). The /services
 * hub and its nine /services/<slug> pages live here, next to the other pages.
 */
export function pageEntries(): SitemapEntry[] {
  return (
    [
      { path: "/", changefreq: "weekly", priority: "1.0" },
      { path: "/about", changefreq: "monthly", priority: "0.8" },
      { path: "/services", changefreq: "monthly", priority: "0.9" },
      ...SERVICES.map((title) => ({
        path: `/services/${serviceAnchor(title)}`,
        changefreq: "monthly" as const,
        priority: "0.8",
        lastmod: SERVICE_PAGES_LASTMOD,
      })),
      { path: "/asad-farooq", changefreq: "monthly", priority: "0.7" },
      { path: "/saad", changefreq: "monthly", priority: "0.5" },
      { path: "/usama-farooq", changefreq: "monthly", priority: "0.7" },
      { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
      {
        path: "/blog",
        changefreq: "weekly",
        priority: "0.7",
        lastmod: latestLastmod(blogEntries()),
      },
      { path: "/contact", changefreq: "yearly", priority: "0.6" },
      { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
      { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
    ] satisfies SitemapEntry[]
  ).map((e) => ({ ...e, lastmod: e.lastmod ?? STATIC_LASTMOD[e.path] }));
}

export function blogEntries(): SitemapEntry[] {
  return POST_INDEX.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: postLastmod(p),
    changefreq: "monthly",
    priority: "0.6",
  }));
}

export function portfolioEntries(): SitemapEntry[] {
  return ALL_ITEMS.map((i) => ({
    path: `/portfolio/${i.slug}`,
    lastmod: STATIC_LASTMOD["/portfolio"],
    changefreq: "monthly",
    priority: "0.5",
  }));
}

function absolute(src: string | undefined): string | undefined {
  if (!src) return undefined;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return `${BASE_URL}${src}`;
  return undefined;
}

/** Pages that carry an indexable cover image, for the image sitemap. */
export function imageEntries(): SitemapEntry[] {
  const rows: SitemapEntry[] = [];
  for (const p of POST_INDEX) {
    const img = absolute(p.img);
    if (img) rows.push({ path: `/blog/${p.slug}`, lastmod: postLastmod(p), images: [img] });
  }
  for (const i of ALL_ITEMS) {
    const img = absolute(i.img);
    if (img)
      rows.push({
        path: `/portfolio/${i.slug}`,
        lastmod: STATIC_LASTMOD["/portfolio"],
        images: [img],
      });
  }
  return rows;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const XML_DECLARATION = `<?xml version="1.0" encoding="UTF-8"?>`;
const SITEMAP_NS = "http://www.sitemaps.org/schemas/sitemap/0.9";

/** One <url> or <sitemap> block; null lines are dropped. */
function block(tag: "url" | "sitemap", lines: (string | null)[]): string {
  return [`  <${tag}>`, ...lines, `  </${tag}>`].filter(Boolean).join("\n");
}

export function buildUrlset(entries: SitemapEntry[], withImages = false): string {
  const urls = entries.map((e) =>
    block("url", [
      `    <loc>${escapeXml(`${BASE_URL}${e.path}`)}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      ...(withImages && e.images
        ? e.images.map(
            (src) =>
              `    <image:image>\n      <image:loc>${escapeXml(src)}</image:loc>\n    </image:image>`,
          )
        : []),
    ]),
  );

  const open = withImages
    ? `<urlset xmlns="${SITEMAP_NS}" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`
    : `<urlset xmlns="${SITEMAP_NS}">`;

  return [XML_DECLARATION, open, ...urls, `</urlset>`].join("\n");
}

/**
 * The one sitemap index, served at /sitemap.xml (the address robots.txt
 * advertises). Legacy index addresses such as /sitemap_index.xml,
 * /wp-sitemap.xml and /sitemap.rss 301 here via src/lib/legacy-urls.ts.
 */
export function buildSitemapIndex(): string {
  const images = imageEntries();
  const children = [
    { path: "/pages-sitemap.xml", lastmod: latestLastmod(pageEntries()) },
    { path: "/blog-sitemap.xml", lastmod: latestLastmod(blogEntries()) },
    { path: "/portfolio-sitemap.xml", lastmod: latestLastmod(portfolioEntries()) },
    ...(images.length > 0 ? [{ path: "/images-sitemap.xml", lastmod: latestLastmod(images) }] : []),
  ];

  const sitemaps = children.map((c) =>
    block("sitemap", [
      `    <loc>${escapeXml(`${BASE_URL}${c.path}`)}</loc>`,
      c.lastmod ? `    <lastmod>${c.lastmod}</lastmod>` : null,
    ]),
  );

  return [
    XML_DECLARATION,
    `<sitemapindex xmlns="${SITEMAP_NS}">`,
    ...sitemaps,
    `</sitemapindex>`,
  ].join("\n");
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
