import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/blog-posts";
import { ALL_ITEMS } from "@/lib/portfolio-data";


const BASE_URL = "https://pixel2tech.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

/** "August 1, 2026" -> "2026-08-01"; returns undefined when unparseable. */
function toIsoDate(value: string): string | undefined {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

/**
 * Last significant content change per static page, taken from that page's
 * source history. Update the date here when a page's content changes.
 */
const STATIC_LASTMOD: Record<string, string> = {
  "/": "2026-08-02",
  "/about": "2026-08-02",
  "/services": "2026-08-01",
  "/portfolio": "2026-08-01",
  "/contact": "2026-08-01",
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Blog index reflects the newest published post.
        const newestPostDate = posts
          .map((p) => toIsoDate(p.date))
          .filter((d): d is string => Boolean(d))
          .sort()
          .reverse()[0];

        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: newestPostDate },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
        ].map((e) => ({ ...e, lastmod: e.lastmod ?? STATIC_LASTMOD[e.path] }));

        const blogEntries: SitemapEntry[] = posts.map((p) => ({
          path: `/blog/${p.slug}`,
          lastmod: toIsoDate(p.date),
          changefreq: "monthly",
          priority: "0.6",
        }));

        const portfolioEntries: SitemapEntry[] = ALL_ITEMS.map((i) => ({
          path: `/portfolio/${i.slug}`,
          lastmod: STATIC_LASTMOD["/portfolio"],
          changefreq: "monthly",
          priority: "0.5",
        }));

        const entries = [...staticEntries, ...blogEntries, ...portfolioEntries];



        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );


        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
