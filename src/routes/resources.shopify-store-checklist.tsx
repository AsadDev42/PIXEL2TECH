import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { businessHead } from "@/lib/page-seo";
import { ShopifyChecklist } from "@/components/shopify-checklist";

export const Route = createFileRoute("/resources/shopify-store-checklist")({
  head: () =>
    businessHead(
      "/resources/shopify-store-checklist",
      "Free Shopify store review checklist",
      "Review your Shopify product pages, mobile shopping, checkout and tracking. Read the checks, download the free checklist and see how Pixel2Tech can help.",
    ),
  component: () => (
    <PageShell>
      <ShopifyChecklist />
    </PageShell>
  ),
});
