import { useEffect, useId, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  Check,
  Clock,
  Loader2,
  ArrowLeft,
  Video,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";
import { bookingAvailability, bookStrategyCall } from "@/lib/booking.functions";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
function hostDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useFocusTrap<HTMLDivElement>(open, { isolate: true });
  const [timezone] = useState(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");
  const [date, setDate] = useState(hostDate);
  const [slots, setSlots] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [confirmed, setConfirmed] = useState<{ meetUrl: string | null } | null>(null);
  const [bookingId] = useState(() => crypto.randomUUID());
  const [openedAt] = useState(Date.now);
  const maxDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(Date.now() + 29 * 86400000));
  useEffect(() => {
    if (!open) return;
    let current = true;
    setLoading(true);
    setError("");
    setSlots([]);
    bookingAvailability({ data: { date } })
      .then((result) => {
        if (current) {
          setConnected(result.connected);
          setSlots(result.slots);
        }
      })
      .catch(() => {
        if (current)
          setError("We couldn't load available times. Please try another date or contact us.");
      })
      .finally(() => {
        if (current) setLoading(false);
      });
    return () => {
      current = false;
    };
  }, [date, open]);
  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener("keydown", escape);
    };
  }, [open, onClose]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = new FormData(event.currentTarget);
    setSending(true);
    setError("");
    try {
      const result = await bookStrategyCall({
        data: {
          start: selected,
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          message: String(form.get("message") || ""),
          website: String(form.get("website") || ""),
          timezone,
          bookingId,
          elapsedMs: Date.now() - openedAt,
        },
      });
      if (result.confirmed) {
        setConfirmed({ meetUrl: result.meetUrl });
        trackEvent("booking_completed", {});
      } else {
        setSelected("");
        setSlots((values) => values.filter((value) => value !== selected));
        setError("That time is no longer available. Please choose another.");
      }
    } catch {
      setError(
        "We couldn't confirm this booking. Please retry, or email sales@pixel2tech.com for help.",
      );
    } finally {
      setSending(false);
    }
  }
  const dateLabel = (value: string) =>
    new Intl.DateTimeFormat("en", {
      timeZone: timezone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(value));
  if (!open || typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 backdrop-blur-sm sm:p-5">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative max-h-dvh w-full overflow-y-auto bg-background shadow-2xl outline-none sm:max-h-[90dvh] sm:max-w-4xl sm:rounded-[2rem]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking window"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
        >
          <X size={20} />
        </button>
        <div className="grid lg:grid-cols-[0.85fr_1.2fr]">
          <div className="bg-slate-950 p-6 pr-16 text-white sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <CalendarDays size={16} aria-hidden="true" /> Let's make a plan
            </p>
            <h2 id={titleId} className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next idea.
              <br />
              <span className="text-blue-300">Our first conversation.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Tell us where you want to go. We'll talk through your project and work out a useful
              next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} /> 30 minutes
              </span>
              <span className="inline-flex items-center gap-2">
                <Video size={17} /> Google Meet
              </span>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-slate-400">
              Free strategy call. No hard sell.
              <br />
              Questions?{" "}
              <a
                className="underline underline-offset-4 text-slate-200"
                href="mailto:sales@pixel2tech.com"
              >
                sales@pixel2tech.com
              </a>
            </p>
          </div>
          <div className="p-6 sm:p-8 lg:pt-16">
            {confirmed ? (
              <div role="status">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">You're booked.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {dateLabel(selected)} ({timezone})
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Google Calendar will send your invitation. You can reply to it if your plans
                  change.
                </p>
                {confirmed.meetUrl ? (
                  <a
                    href={confirmed.meetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    Open Google Meet <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your Meet link is being prepared by Google. Check the calendar invitation for
                    the link, or contact us if it doesn't arrive.
                  </p>
                )}
              </div>
            ) : selected ? (
              <form onSubmit={submit}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected("");
                    setError("");
                  }}
                  className="mb-5 inline-flex min-h-10 items-center gap-2 text-sm text-primary"
                >
                  <ArrowLeft size={16} /> Choose another time
                </button>
                <h3 className="text-xl font-semibold">A few details, then we're set.</h3>
                <p className="mt-2 rounded-xl bg-muted p-3 text-sm">
                  {dateLabel(selected)}
                  <span className="mt-1 block text-xs text-muted-foreground">{timezone}</span>
                </p>
                <label className="mt-5 block text-sm font-medium">
                  Your name *
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={120}
                    className={fieldClass}
                  />
                </label>
                <label className="mt-4 block text-sm font-medium">
                  Email *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={fieldClass}
                  />
                </label>
                <label className="mt-4 block text-sm font-medium">
                  What would you like to discuss?
                  <textarea
                    name="message"
                    maxLength={2000}
                    rows={3}
                    className={`${fieldClass} py-3`}
                  />
                </label>
                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                {error && (
                  <p role="alert" className="mt-4 text-sm text-destructive">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Your details go to Pixel2Tech and Google Calendar to arrange the call.{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy policy
                  </a>
                </p>
                <button
                  disabled={sending}
                  type="submit"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {sending && <Loader2 size={17} className="animate-spin" />}
                  {sending ? "Confirming..." : "Confirm my call"}
                </button>
              </form>
            ) : (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  01 / Choose your time
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Let's find a good moment.
                </h3>
                <label className="mt-6 block text-sm font-medium">
                  Date in Lahore (GMT+5)
                  <input
                    type="date"
                    value={date}
                    min={hostDate()}
                    max={maxDate}
                    onChange={(event) => {
                      if (event.target.value) setDate(event.target.value);
                    }}
                    className={fieldClass}
                  />
                </label>
                <p className="mt-3 text-xs text-muted-foreground">
                  Times below shown in {timezone}. Mon-Fri 9am-6pm, Sat 10am-4pm in Lahore.
                </p>
                <div className="mt-6" aria-live="polite" aria-busy={loading}>
                  {loading ? (
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 size={18} className="animate-spin" /> Checking the calendar...
                    </p>
                  ) : error ? (
                    <p role="alert" className="text-sm text-destructive">
                      {error}
                    </p>
                  ) : !connected ? (
                    <div className="rounded-2xl border border-border bg-muted/40 p-5">
                      <p className="font-semibold">Let's arrange your call.</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Online scheduling is being connected. Email your preferred time and a little
                        about your project. Our team will reply within one business day.
                      </p>
                      <a
                        href="mailto:sales@pixel2tech.com?subject=Strategy%20call%20request"
                        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                      >
                        Request a call by email <ArrowUpRight size={16} />
                      </a>
                    </div>
                  ) : slots.length ? (
                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelected(slot)}
                          className="min-h-12 rounded-xl border border-border px-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          {dateLabel(slot)}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
                      No open times on this date. Please choose another day.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
