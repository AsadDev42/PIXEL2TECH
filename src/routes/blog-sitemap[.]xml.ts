import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogEntries, buildUrlset, xmlResponse } from "@/lib/sitemap-data";

export const Route = createFileRoute("/blog-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(buildUrlset(blogEntries())),
    },
  },
});
