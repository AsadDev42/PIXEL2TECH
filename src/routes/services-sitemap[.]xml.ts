import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildUrlset, serviceEntries, xmlResponse } from "@/lib/sitemap-data";

export const Route = createFileRoute("/services-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildUrlset(serviceEntries())),
    },
  },
});
