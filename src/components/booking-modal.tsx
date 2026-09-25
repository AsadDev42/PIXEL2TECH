import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Clock, Loader2, Lock, ShieldCheck, Target, Video, X } from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";
import { PRIMARY_CTA_LABEL } from "@/lib/site-config";

const CALENDLY_ORIGIN = "https://calendly.com";
const CALENDLY_EVENT_URL = `${CALENDLY_ORIGIN}/pixel2tech/strategy-call`;

// Calendly only accepts hex colours. These mirror the --primary, --background
// and --foreground tokens in src/styles.css for each theme.
const CALENDLY_COLORS = {
  light: { primary_color: "0b74e0", background_color: "ffffff", text_color: "0f172a" },
  dark: { primary_color: "4da3ff", background_color: "020618", text_color: "f8fafc" },
} as const;

/**
 * A plain iframe instead of Calendly's widget.js: widget.js only fills the
 * inline widgets that exist when the script first runs, so the modal came up
 * empty from the second open on. A fresh iframe on every open always loads.
 * embed_domain + embed_type keep Calendly's postMessage events working.
 */
function calendlyEmbedUrl() {
  const dark = document.documentElement.classList.contains("dark");
  const params = new URLSearchParams({
    embed_domain: window.location.host,
    embed_type: "Inline",
    hide_event_type_details: "1",
    ...(dark ? CALENDLY_COLORS.dark : CALENDLY_COLORS.light),
  });
  return `${CALENDLY_EVENT_URL}?${params.toString()}`;
}

const BENEFITS = [
  { icon: Clock, label: "30 minutes", desc: "Enough time to talk through your goals." },
  { icon: Video, label: "On Google Meet", desc: "Join from your laptop or phone." },
  { icon: ShieldCheck, label: "No hard sell", desc: "Honest advice, no pushy pitch." },
  { icon: Target, label: "A clear next step", desc: "You leave with a plan you can act on." },
] as const;

function CalendlyEmbed() {
  const [src] = useState(calendlyEmbedUrl);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative min-h-[440px] flex-1 bg-background lg:min-h-0">
      {loaded ? null : (
        <div className="absolute inset-0 grid place-items-center p-6">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2
              className="h-4 w-4 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
            Loading available times…
          </p>
        </div>
      )}
      <iframe
        src={src}
        title="Choose a time for your strategy call"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  const descId = useId();
  // The modal is portaled into <body>; `isolate` makes the rest of the page
  // inert while it is open, so Tab (even out of the cross-origin Calendly
  // iframe) and screen readers stay inside, and focus returns to the trigger.
  const dialogRef = useFocusTrap<HTMLDivElement>(open, { isolate: true });

  // Lock page scroll without shifting the layout by the scrollbar width.
  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Count completed bookings. Only trust messages that really come from Calendly.
  useEffect(() => {
    if (!open) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CALENDLY_ORIGIN) return;
      const data: unknown = e.data;
      if (
        typeof data === "object" &&
        data !== null &&
        (data as { event?: unknown }).event === "calendly.event_scheduled"
      ) {
        trackEvent("booking_completed", {});
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center sm:p-4 lg:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            className="relative flex h-dvh w-full flex-col overflow-hidden bg-background focus:outline-none sm:h-[min(90dvh,880px)] sm:max-w-3xl sm:rounded-3xl sm:ring-1 sm:ring-border lg:max-w-5xl"
            style={{ boxShadow: "var(--elev-3)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close booking window"
              className="absolute right-2 top-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-3 sm:top-3"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Phones: short header, then the calendar fills the screen.
                Desktop: details on the left, calendar on the right. */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain lg:flex-row lg:overflow-hidden">
              <div className="shrink-0 border-b border-border bg-muted/50 py-4 pl-5 pr-16 sm:p-6 sm:pr-20 lg:w-2/5 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-8">
                <p className="hidden items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-primary sm:inline-flex">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Free · 30 minutes
                </p>
                <h2
                  id={titleId}
                  className="text-xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-2xl lg:text-3xl"
                >
                  {PRIMARY_CTA_LABEL}
                </h2>
                <p id={descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A 30-minute Google Meet call about your goals and the best next step. Pick a time
                  that suits you.
                </p>

                <ul className="mt-6 hidden gap-3 lg:grid">
                  {BENEFITS.map((b) => (
                    <li
                      key={b.label}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-background p-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-primary">
                        <b.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground">
                          {b.label}
                        </span>
                        <span className="block text-sm leading-snug text-muted-foreground">
                          {b.desc}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 hidden items-start gap-2 text-sm text-muted-foreground lg:flex">
                  <Lock
                    className="h-4 w-4 shrink-0 translate-y-0.5 text-primary"
                    aria-hidden="true"
                  />
                  We only use your details to prepare for the call.
                </p>
                <p className="mt-2 text-sm text-muted-foreground sm:mt-4">
                  Calendar not loading?{" "}
                  <a
                    href={CALENDLY_EVENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4 sm:min-h-0"
                  >
                    Open it on Calendly
                  </a>
                </p>
              </div>

              <CalendlyEmbed />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
