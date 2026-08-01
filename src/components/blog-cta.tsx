import { lazy, Suspense, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

const BookingModal = lazy(() =>
  import("@/components/booking-modal").then((m) => ({ default: m.BookingModal })),
);

export function BlogCta({
  title = "Ready to turn these ideas into results?",
  body = "Pixel2Tech is a full-service creative agency for branding, web design, development, AI and automation. Book a free strategy call and we will map the fastest path to your goals.",
  primaryLabel = "Book a Free Strategy Call",
  secondaryLabel = "Contact the team",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section aria-labelledby="blog-cta" className="rounded-3xl border border-border bg-foreground p-6 sm:p-8 md:p-10">
      <h2 id="blog-cta" className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-background/75 sm:text-base">{body}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
        >
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {primaryLabel}
        </button>
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition hover:bg-background/10"
        >
          {secondaryLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      {open ? (
        <Suspense fallback={null}>
          <BookingModal open={open} onClose={() => setOpen(false)} />
        </Suspense>
      ) : null}
    </section>
  );
}
