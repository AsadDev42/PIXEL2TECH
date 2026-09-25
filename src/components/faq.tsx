import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

/**
 * Accessible FAQ list built on native <details>/<summary>: keyboard and screen
 * reader support come for free, and every answer is in the server HTML (so it
 * stays crawlable and matches the FAQPage JSON-LD).
 */
export function Faq({ items, className = "" }: { items: readonly FaqItem[]; className?: string }) {
  return (
    <div className={`divide-y divide-border border-y border-border ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground sm:text-lg [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data for the same items rendered by <Faq />. */
export function faqJsonLd(items: readonly FaqItem[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    }),
  };
}
