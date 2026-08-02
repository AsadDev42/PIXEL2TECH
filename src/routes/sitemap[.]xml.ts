import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  blogEntries,
  buildUrlset,
  pageEntries,
  portfolioEntries,
  serviceEntries,
  xmlResponse,
} from "@/lib/sitemap-data";

/** Flat sitemap of every indexable URL (kept alongside /sitemap_index.xml). */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        xmlResponse(
          buildUrlset([...pageEntries(), ...serviceEntries(), ...blogEntries(), ...portfolioEntries()]),
        ),
    },
  },
});
