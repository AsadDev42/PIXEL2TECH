import { Suspense, useState, type ReactNode } from "react";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { trackEvent } from "@/lib/analytics";
import { PRIMARY_CTA_LABEL } from "@/lib/site-config";

// Modal code (and its Calendly embed) is only fetched when a user opens it.
const BookingModal = lazyWithRetry(() =>
  import("@/components/booking-modal").then((m) => ({ default: m.BookingModal })),
);

/**
 * The site's primary call to action: opens the strategy-call booking modal.
 * `source` is sent to analytics so each placement can be measured.
 */
export function BookCallButton({
  source,
  className = "",
  children = PRIMARY_CTA_LABEL,
}: {
  source: string;
  className?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          trackEvent("strategy_call_modal_opened", { source });
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>
      {open && (
        <Suspense fallback={null}>
          <BookingModal open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
