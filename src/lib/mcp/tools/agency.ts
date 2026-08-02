import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ALL_ITEMS, CATEGORIES } from "@/lib/portfolio-data";
import { AGENCY, SERVICES, SITE_URL } from "../catalog";

export const listServices = defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services Pixel2Tech offers, with a short description and specialty tags for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rows = SERVICES.map((s) => ({ ...s, tags: [...s.tags] }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { services: rows, url: `${SITE_URL}/services` },
    };
  },
});

export const listPortfolioProjects = defineTool({
  name: "list_portfolio_projects",
  title: "List portfolio projects",
  description:
    "List Pixel2Tech portfolio projects with title, category, subcategory and public URL. Optionally filter by category or keyword.",
  inputSchema: {
    category: z.string().optional().describe(`One of: ${CATEGORIES.join(", ")}`),
    query: z.string().optional().describe("Case-insensitive keyword filter on title or subcategory."),
    limit: z.number().int().min(1).max(100).optional().describe("Max projects to return. Default 20."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query, limit }) => {
    const cat = category?.toLowerCase().trim();
    const q = query?.toLowerCase().trim();
    const rows = ALL_ITEMS.filter((i) => (!cat ? true : i.category.toLowerCase() === cat))
      .filter((i) => (!q ? true : `${i.title} ${i.subcategory}`.toLowerCase().includes(q)))
      .slice(0, limit ?? 20)
      .map((i) => ({
        title: i.title,
        category: i.category,
        subcategory: i.subcategory,
        url: `${SITE_URL}/portfolio/${i.slug}`,
      }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { projects: rows, count: rows.length, categories: [...CATEGORIES] },
    };
  },
});

export const getAgencyInfo = defineTool({
  name: "get_agency_info",
  title: "Get agency info",
  description: "Get Pixel2Tech company details: positioning, contact information, address and delivery process.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = { ...AGENCY, process: [...AGENCY.process] };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});

export default listServices;
