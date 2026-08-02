import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildUrlset, pageEntries, xmlResponse } from "@/lib/sitemap-data";

export const Route = createFileRoute("/pages-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildUrlset(pageEntries())),
    },
  },
});
