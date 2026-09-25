import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { PRIMARY_CTA_LABEL } from "@/lib/site-config";

/**
 * End-of-article call to action. Posts can set the heading and body copy;
 * the two actions are the same site-wide: book a call, or send a brief.
 */
export function BlogCta({
  title = "Working on something like this?",
  body = "Tell us what you're building. We'll say what we would fix first and what it would take.",
  source = "blog_cta",
}: {
  title?: string;
  body?: string;
  /** Analytics label for the booking button. */
  source?: string;
}) {
  return (
    <section aria-labelledby="blog-cta" className="rounded-3xl bg-foreground p-6 sm:p-8">
      <h2
        id="blog-cta"
        className="text-2xl font-bold leading-tight tracking-tight text-balance text-background"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-background/75">{body}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <BookCallButton
          source={source}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {PRIMARY_CTA_LABEL}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </BookCallButton>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-background/40 px-6 py-3 text-center text-sm font-semibold text-background transition-colors hover:bg-background/10"
        >
          Send a project brief
        </Link>
      </div>
    </section>
  );
}
