import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Video,
  ShieldCheck,
  Target,
  X,
  Lock,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";

const CAL_URL =
  "https://calendly.com/pixel2tech/strategy-call?primary_color=1e90ff&hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=0f172a";

const benefits = [
  {
    icon: Clock,
    label: "30-minute consultation",
    desc: "A focused call to understand your goals.",
  },
  {
    icon: Video,
    label: "Google Meet call",
    desc: "Join instantly from any device.",
  },
  {
    icon: ShieldCheck,
    label: "No sales pressure",
    desc: "Honest advice, no aggressive pitches.",
  },
  {
    icon: Target,
    label: "Actionable recommendations",
    desc: "Leave with a clear next-step plan.",
  },
];

export function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Load Calendly script once
  useEffect(() => {
    if (!open) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Track Calendly booking completion via postMessage
  useEffect(() => {
    if (!open) return;
    const onMsg = (e: MessageEvent) => {
      const d = e.data as { event?: string } | undefined;
      if (d?.event === "calendly.event_scheduled") {
        trackEvent("booking_completed", {});
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [open]);

  const dialogRef = useFocusTrap<HTMLDivElement>(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/25 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Book a Pixel2Tech Strategy Session"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex w-full max-w-6xl max-h-[90vh] flex-col overflow-hidden rounded-[2rem] bg-background ring-1 ring-border/60 focus:outline-none"
            style={{ boxShadow: "var(--elev-3)" }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close booking modal"
              className="absolute right-5 top-5 z-50 grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background text-muted-foreground shadow-[var(--elev-1)] transition-all duration-200 hover:rotate-90 hover:border-brand/30 hover:text-brand hover:shadow-[var(--elev-2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </motion.button>

            <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              {/* Left: value + trust */}
              <motion.div
                className="flex flex-col gap-6 border-b border-border/60 bg-gradient-to-br from-muted/50 to-muted/20 p-6 lg:gap-8 lg:border-b-0 lg:border-r lg:border-border/60 lg:p-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3 lg:space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    Free Strategy Session
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    Let&apos;s Build Something Great Together
                  </h2>
                  <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    Book a free 30-minute strategy session to discuss your goals
                    and the right digital solution for your business.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b.label}
                      className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-[var(--elev-2)] lg:gap-4 lg:p-4"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-primary-foreground lg:h-10 lg:w-10">
                        <b.icon
                          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 lg:h-5 lg:w-5"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          {b.label}
                        </p>
                        <p className="text-xs text-muted-foreground lg:text-sm">
                          {b.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto flex items-start gap-3 rounded-2xl border border-border/40 bg-background/60 p-3.5 text-xs text-muted-foreground lg:p-4 lg:text-sm">
                  <Lock
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>Your information stays private and is only used to prepare for your session.</span>
                </div>
              </motion.div>

              {/* Right: Calendly embed */}
              <motion.div
                className="flex min-h-0 flex-col gap-4 p-5 lg:gap-5 lg:p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
                      Pixel2Tech Strategy Session
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                      A focused conversation to understand your business goals
                      and explore how we can help you Design, Develop, and
                      Grow.
                    </p>
                  </div>
                  <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand sm:grid lg:h-10 lg:w-10">
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--elev-1)]">
                  <div
                    key={CAL_URL}
                    className="calendly-inline-widget h-[420px] sm:h-[480px] lg:h-[560px]"
                    data-url={CAL_URL}
                    style={{ minWidth: 280 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
