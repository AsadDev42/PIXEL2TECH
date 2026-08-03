import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Premium, value-driven blog CTA. Intentionally avoids generic
 * "Book a call" / "Contact us" language.
 */
export function BlogCta({
  title = "Want this done properly?",
  body = "Tell us what you're working on. We'll tell you what we'd fix first.",
  primaryLabel = "Talk to a strategist",
  secondaryLabel = "See our work",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section
      aria-labelledby="blog-cta"
      className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-6 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#7C3AED] opacity-25 blur-3xl"
      />
      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="blog-cta" className="text-xl font-bold tracking-tight text-background sm:text-2xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-background/70">{body}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition hover:bg-background/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

