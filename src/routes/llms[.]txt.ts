import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POST_INDEX } from "@/lib/blog-index";
import { ALL_ITEMS } from "@/lib/portfolio-data";
import { pageEntries } from "@/lib/sitemap-data";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () => {
        const lines = [
          "# Pixel2Tech",
          "",
          `> ${SITE.positioning}. Founded in 2023, based in Lahore, Pakistan, working worldwide.`,
          "",
          "Founders: Usama Farooq and Asad Farooq. Contact: sales@pixel2tech.com, +92 317 7475233.",
          "Pricing: fixed written quotes after scoping; no public price list. White-label projects are labelled on their project pages. Business performance metrics are not implied by screenshots or deliverables.",
          "",
          "## Pages",
          "",
          ...pageEntries().map(
            (page) =>
              `- [${page.path === "/" ? "Home" : page.path.slice(1).replaceAll("/", " / ").replaceAll("-", " ")}](${SITE.url}${page.path})`,
          ),
          "",
          "## Complete portfolio",
          "",
          ...ALL_ITEMS.map(
            (item) =>
              `- [${item.title}](${SITE.url}/portfolio/${item.slug}): ${item.category}${item.whiteLabel ? "; white-label agency partner work" : ""}.`,
          ),
          "",
          "## Complete article index",
          "",
          ...POST_INDEX.map(
            (post) =>
              `- [${post.title}](${SITE.url}/blog/${post.slug}): ${post.excerpt.replaceAll("\n", " ")}`,
          ),
          "",
          "## Discovery",
          "",
          `- [XML sitemap](${SITE.url}/sitemap.xml)`,
          "",
        ];
        return new Response(lines.join("\n"), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
