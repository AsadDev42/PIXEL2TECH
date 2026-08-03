import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Premium, value-driven blog CTA. Intentionally avoids generic
 * "Book a call" / "Contact us" language.
 */
export function BlogCta({
  title = "Ready to Build a Smarter Growth System?",
  body = "Whether you're improving SEO, launching a new brand, building a high-converting website, or implementing AI automation, the right strategy creates long-term growth instead of short-term wins.",
  primaryLabel = "Get My Growth Blueprint",
  secondaryLabel = "Explore Pixel2Tech",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section
      aria-labelledby="blog-cta"
      className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-6 sm:p-9 md:p-11"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#7C3AED] opacity-30 blur-3xl"
      />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-background/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-background/80">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Growth systems, not guesswork
        </span>

        <h2 id="blog-cta" className="mt-5 text-2xl font-bold tracking-tight text-background sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-background/75 sm:text-base">{body}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#7C3AED] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-3 text-sm font-semibold text-background transition hover:bg-background/10"
          >
            {secondaryLabel}
          </Link>
        </div>

        <p className="mt-5 text-xs text-background/60">
          No pitch decks. A senior strategist reviews your site, funnel and systems, then sends a prioritised plan.
        </p>
      </div>
    </section>
  );
}
