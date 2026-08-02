import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  BASE_URL,
  blogEntries,
  imageEntries,
  latestLastmod,
  pageEntries,
  portfolioEntries,
  serviceEntries,
  xmlResponse,
} from "@/lib/sitemap-data";

/** Sitemap index referencing every child sitemap. */
export const Route = createFileRoute("/sitemap_index.xml")({
  server: {
    handlers: {
      GET: async () => {
        const images = imageEntries();
        const children = [
          { path: "/pages-sitemap.xml", lastmod: latestLastmod(pageEntries()) },
          { path: "/blog-sitemap.xml", lastmod: latestLastmod(blogEntries()) },
          { path: "/services-sitemap.xml", lastmod: latestLastmod(serviceEntries()) },
          { path: "/portfolio-sitemap.xml", lastmod: latestLastmod(portfolioEntries()) },
          ...(images.length > 0 ? [{ path: "/images-sitemap.xml", lastmod: latestLastmod(images) }] : []),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...children.map((c) =>
            [
              `  <sitemap>`,
              `    <loc>${BASE_URL}${c.path}</loc>`,
              c.lastmod ? `    <lastmod>${c.lastmod}</lastmod>` : null,
              `  </sitemap>`,
            ]
              .filter(Boolean)
              .join("\n"),
          ),
          `</sitemapindex>`,
        ].join("\n");

        return xmlResponse(xml);
      },
    },
  },
});
