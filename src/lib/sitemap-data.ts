import { posts } from "@/lib/blog-posts";
import { ALL_ITEMS } from "@/lib/portfolio-data";

export const BASE_URL = "https://pixel2tech.com";

export interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: string[];
}

/** "August 1, 2026" -> "2026-08-01"; returns undefined when unparseable. */
export function toIsoDate(value: string): string | undefined {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

/**
 * Last significant content change per static page, taken from that page's
 * source history. Update the date here when a page's content changes.
 */
export const STATIC_LASTMOD: Record<string, string> = {
  "/": "2026-08-02",
  "/about": "2026-08-02",
  "/services": "2026-08-01",
  "/portfolio": "2026-08-01",
  "/contact": "2026-08-01",
  "/privacy-policy": "2026-08-02",
  "/terms-and-conditions": "2026-08-02",
};

/** Newest published blog post date, used for the blog index lastmod. */
export function newestPostDate(): string | undefined {
  return posts
    .map((p) => toIsoDate(p.date))
    .filter((d): d is string => Boolean(d))
    .sort()
    .reverse()[0];
}

/** Static, indexable marketing pages (no 404 / admin / api / auth routes). */
export function pageEntries(): SitemapEntry[] {
  return (
    [
      { path: "/", changefreq: "weekly", priority: "1.0" },
      { path: "/about", changefreq: "monthly", priority: "0.8" },
      { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
      { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: newestPostDate() },
      { path: "/contact", changefreq: "yearly", priority: "0.6" },
      { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
      { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
    ] satisfies SitemapEntry[]
  ).map((e) => ({ ...e, lastmod: e.lastmod ?? STATIC_LASTMOD[e.path] }));
}


/** Service pages. Currently a single hub route; new service routes go here. */
export function serviceEntries(): SitemapEntry[] {
  return [
    { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: STATIC_LASTMOD["/services"] },
  ];
}

export function blogEntries(): SitemapEntry[] {
  return posts.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: toIsoDate(p.date),
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
  for (const p of posts) {
    const img = absolute(p.img);
    if (img) rows.push({ path: `/blog/${p.slug}`, lastmod: toIsoDate(p.date), images: [img] });
  }
  for (const i of ALL_ITEMS) {
    const img = absolute(i.img);
    if (img) rows.push({ path: `/portfolio/${i.slug}`, lastmod: STATIC_LASTMOD["/portfolio"], images: [img] });
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

export function buildUrlset(entries: SitemapEntry[], withImages = false): string {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${escapeXml(`${BASE_URL}${e.path}`)}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      ...(withImages && e.images
        ? e.images.map((src) => `    <image:image>\n      <image:loc>${escapeXml(src)}</image:loc>\n    </image:image>`)
        : []),
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const ns = withImages
    ? `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`
    : `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  return [`<?xml version="1.0" encoding="UTF-8"?>`, ns, ...urls, `</urlset>`].join("\n");
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

/** Most recent lastmod in a set, used for sitemap index entries. */
export function latestLastmod(entries: SitemapEntry[]): string | undefined {
  return entries
    .map((e) => e.lastmod)
    .filter((d): d is string => Boolean(d))
    .sort()
    .reverse()[0];
}
