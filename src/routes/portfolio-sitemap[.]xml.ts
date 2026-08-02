import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildUrlset, portfolioEntries, xmlResponse } from "@/lib/sitemap-data";

export const Route = createFileRoute("/portfolio-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildUrlset(portfolioEntries())),
    },
  },
});
