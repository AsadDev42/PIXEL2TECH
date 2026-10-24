import { useState } from "react";
import { NewsletterForm } from "@/components/newsletter-form";

export function ShopifyChecklist() {
  const [ready, setReady] = useState(false);
  return (
    <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-muted/40 p-6 md:grid-cols-2 sm:p-8">
      <div>
        <h2 className="text-2xl font-bold">A practical review before your next store update.</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Check your product pages, mobile navigation, checkout, content and measurement. Each item
          includes a place to record evidence, priority and an owner.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {[
            "Product and collection clarity",
            "Mobile navigation and shopping flow",
            "Shipping, returns and checkout",
            "Performance and accessibility",
            "Tracking, consent and ownership",
          ].map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-background p-6">
        <h3 className="text-xl font-bold">Get the checklist</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Subscribe to Pixel2Tech's studio notes to unlock the free Markdown download. We will use
          your email for the subscription; see our{" "}
          <a href="/privacy-policy" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
        {ready ? (
          <a
            href="/resources/shopify-store-review-checklist.md"
            download
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background"
          >
            Download checklist
          </a>
        ) : (
          <NewsletterForm
            idPrefix="shopify-checklist"
            location="shopify-checklist"
            submitLabel="Subscribe & unlock checklist"
            onSubscribed={() => setReady(true)}
          />
        )}
      </div>
    </div>
  );
}
