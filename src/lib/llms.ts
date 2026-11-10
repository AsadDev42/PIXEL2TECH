import { POST_INDEX } from "@/lib/blog-index";
import { ALL_ITEMS } from "@/lib/portfolio-data";
import { PRICING_POINTS, SERVICE_PAGES, SERVICE_PROCESS } from "@/lib/service-pages";
import { latestLastmod, pageEntries } from "@/lib/sitemap-data";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";
import { SOCIAL_LINKS } from "@/components/social-links";

/**
 * Text for /llms.txt (an index of the site for AI answer engines) and
 * /llms-full.txt (the same facts plus the full service page copy). Both are
 * built from the data the pages use, so they cannot drift from the site.
 */

const SERVICE_BY_PATH = new Map(SERVICE_PAGES.map((page) => [`/services/${page.slug}`, page]));

function pageLabel(path: string): string {
  if (path === "/") return "Home";
  return path.slice(1).replaceAll("/", " / ").replaceAll("-", " ");
}

/** The business facts both files open with. */
function entityLines(): string[] {
  const founders = TEAM.filter((m) => m.founder).map((m) => `${m.name} (${m.role})`);
  return [
    "# Pixel2Tech",
    "",
    `> ${SITE.positioning}. Founded in ${STATS.foundingYear}, based in ${SITE.location}.`,
    "",
    `Last updated: ${latestLastmod(pageEntries()) ?? ""}`,
    "",
    "## About Pixel2Tech",
    "",
    `- Founded: ${STATS.foundingYear}`,
    `- Base: ${SITE.location} (no public street address)`,
    `- Founders: ${founders.join(", ")}`,
    `- Team: ${TEAM.map((m) => `${m.name}, ${m.role}`).join("; ")}`,
    `- Projects delivered: ${STATS.projects}`,
    `- Main markets: ${SITE.primaryMarkets.join(", ")}. Also serves: ${SITE.areaServed.slice(5).join(", ")}`,
    `- Services: ${SERVICE_PAGES.map((page) => page.title).join(", ")}`,
    `- Contact: ${SITE.email}, ${SITE.phoneDisplay}`,
    `- Hours: ${SITE.hours.map((h) => `${h.days} ${h.time}`).join("; ")} (Pakistan time)`,
    `- Profiles: ${SOCIAL_LINKS.map((link) => link.href).join(", ")}`,
    "",
    "Pricing: fixed written quotes after scoping; no public price list. White-label projects are labelled on their project pages. Business performance metrics are not implied by screenshots or deliverables.",
    "",
  ];
}

export function buildLlmsTxt(): string {
  return [
    ...entityLines(),
    "## Pages",
    "",
    ...pageEntries().map((page) => {
      const service = SERVICE_BY_PATH.get(page.path);
      const line = `- [${service ? service.title : pageLabel(page.path)}](${SITE.url}${page.path})`;
      return service ? `${line}: ${service.answer}` : line;
    }),
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
    `- [Full text of the service pages](${SITE.url}/llms-full.txt)`,
    `- [XML sitemap](${SITE.url}/sitemap.xml)`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  const lines = [...entityLines()];
  lines.push("## How a project runs", "");
  SERVICE_PROCESS.forEach((step, i) => lines.push(`${i + 1}. ${step.title}: ${step.desc}`));
  lines.push("", "## How pricing works", "");
  for (const point of PRICING_POINTS) lines.push(`- ${point.title}: ${point.desc}`);
  lines.push("");
  for (const page of SERVICE_PAGES) {
    lines.push(
      `## ${page.title}`,
      "",
      `URL: ${SITE.url}/services/${page.slug}`,
      "",
      page.answer,
      "",
    );
    lines.push("What you get:", "");
    for (const d of page.deliverables) lines.push(`- ${d.title}: ${d.desc}`);
    lines.push("", "What changes the quote:", "");
    for (const driver of page.priceDrivers) lines.push(`- ${driver}`);
    lines.push("", "Questions:", "");
    for (const faq of page.faqs) lines.push(`Q: ${faq.q}`, `A: ${faq.a}`, "");
  }
  lines.push(`Index of every page, project and article: ${SITE.url}/llms.txt`, "");
  return lines.join("\n");
}
