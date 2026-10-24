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
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Free resource
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          See your store through a shopper's eyes.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Use this checklist to turn a store review into a prioritised list of fixes, with evidence
          for each recommendation.
        </p>
        <ShopifyChecklist />
      </section>
    </PageShell>
  ),
});
