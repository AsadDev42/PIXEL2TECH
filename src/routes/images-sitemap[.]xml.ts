import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildUrlset, imageEntries, xmlResponse } from "@/lib/sitemap-data";

export const Route = createFileRoute("/images-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildUrlset(imageEntries(), true)),
    },
  },
});
