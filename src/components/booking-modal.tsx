import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  Check,
  Clock,
  Loader2,
  ArrowLeft,
  ArrowRight,
  Video,
  X,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";
import { bookingAvailability, bookStrategyCall } from "@/lib/booking.functions";
import { bookingDateRange, candidateSlots, HOST_TIMEZONE } from "@/lib/booking-slots";
import { BookingCalendar } from "@/components/booking-calendar";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
function nextDay(value: string) {
  const day = new Date(`${value}T12:00:00Z`);
  day.setUTCDate(day.getUTCDate() + 1);
  return day.toISOString().slice(0, 10);
}
function nextOfficeDate(from: string, includeStart = false) {
  let value = includeStart ? from : nextDay(from);
  const { max } = bookingDateRange();
  while (value <= max) {
    if (candidateSlots(value).length) return value;
    value = nextDay(value);
  }
  return null;
}
function initialDate() {
  const range = bookingDateRange();
  return nextOfficeDate(range.min, true) ?? range.min;
}

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useFocusTrap<HTMLDivElement>(open, { isolate: true });
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const [timezone, setTimezone] = useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
  );
  const [timezones] = useState(() => [
    ...new Set([
      Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      HOST_TIMEZONE,
      "UTC",
      ...Intl.supportedValuesOf("timeZone"),
    ]),
  ]);
  const [date, setDate] = useState(initialDate);
  const [month, setMonth] = useState(() => initialDate().slice(0, 7));
  const [slots, setSlots] = useState<string[]>([]);
  const [chosen, setChosen] = useState("");
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true);
  const [availabilityError, setAvailabilityError] = useState("");
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [sending, setSending] = useState(false);
  const [details, setDetails] = useState({ name: "", email: "", message: "" });
  const [confirmed, setConfirmed] = useState<{ meetUrl: string | null } | null>(null);
  const [bookingId] = useState(() => crypto.randomUUID());
  const [openedAt] = useState(Date.now);
  const range = bookingDateRange();
  const step = confirmed ? 3 : selected ? 2 : 1;
  const visibleMonth = date.startsWith(month);
  const followingDate = nextOfficeDate(date);
  const dateLabel = (value: string, zone = timezone) =>
    new Intl.DateTimeFormat("en", {
      timeZone: zone,
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(value));
  const dayLabel = new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
  const chooseDate = (value: string) => {
    setDate(value);
    setMonth(value.slice(0, 7));
    setChosen("");
    setError("");
  };

  useEffect(() => {
    if (!open) return;
    let current = true;
    setLoading(true);
    setAvailabilityError("");
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
          setAvailabilityError("We couldn't load the calendar. Please retry or contact us.");
      })
      .finally(() => {
        if (current) setLoading(false);
      });
    return () => {
      current = false;
    };
  }, [date, open, retry]);

  useEffect(() => {
    if (open && step > 1) stepHeading.current?.focus({ preventScroll: false });
  }, [step, open]);

  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !sending) onClose();
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener("keydown", escape);
    };
  }, [open, onClose, sending]);

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
          ...details,
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
        setChosen("");
        setRetry((value) => value + 1);
        setError(
          "That time was just booked. Please choose another available time. Your details have been kept.",
        );
      }
    } catch {
      setError(
        "We couldn't confirm this booking. Please retry, or email sales@pixel2tech.com for help.",
      );
    } finally {
      setSending(false);
    }
  }

  if (!open || typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 backdrop-blur-sm sm:p-4">
      <div
        className="absolute inset-0"
        onClick={() => {
          if (!sending) onClose();
        }}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative max-h-dvh w-full overflow-y-auto overscroll-contain bg-background shadow-2xl outline-none sm:max-h-[94dvh] sm:max-w-6xl sm:rounded-[2rem]"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={sending}
          aria-label="Close booking window"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40"
        >
          <X size={20} />
        </button>
        <div className="grid lg:min-h-[660px] lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="bg-slate-950 p-5 pr-16 text-white sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <CalendarDays size={16} aria-hidden="true" /> Let's make a plan
            </p>
            <h2
              id={titleId}
              className="mt-3 text-2xl font-semibold tracking-tight lg:mt-8 lg:text-3xl"
            >
              <span className="lg:hidden">Book a strategy call.</span>
              <span className="hidden lg:inline">
                Your next idea.
                <br />
                <span className="text-blue-300">Our first conversation.</span>
              </span>
            </h2>
            <p className="mt-5 hidden text-sm leading-relaxed text-slate-300 lg:block">
              Tell us what you're working on. We'll discuss your goals and work out a useful next
              step.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-200 lg:mt-6">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                30 minutes
              </span>
              <span className="inline-flex items-center gap-2">
                <Video size={17} />
                Google Meet
              </span>
            </div>
            <ol
              aria-label="Booking progress"
              className="mt-10 hidden space-y-6 border-t border-white/15 pt-8 lg:block"
            >
              {["Choose a date & time", "Your details", "You're booked"].map((label, index) => (
                <li
                  key={label}
                  aria-current={step === index + 1 ? "step" : undefined}
                  className={`flex items-center gap-3 text-sm ${step >= index + 1 ? "text-white" : "text-slate-400"}`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${step === index + 1 ? "border-blue-300 bg-blue-300 text-slate-950" : "border-white/25"}`}
                  >
                    {step > index + 1 ? <Check size={15} /> : index + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
            <p className="mt-10 hidden text-xs leading-relaxed text-slate-400 lg:block">
              Free strategy call. No hard sell.
              <br />
              <a
                className="mt-2 inline-block text-slate-200 underline underline-offset-4"
                href="mailto:sales@pixel2tech.com"
              >
                sales@pixel2tech.com
              </a>
            </p>
          </aside>
          <div className="min-w-0 p-5 sm:p-8 lg:p-10">
            <p className="pr-10 text-xs font-semibold uppercase tracking-widest text-primary">
              Step {step} of 3 ·{" "}
              {step === 1 ? "Date & time" : step === 2 ? "Your details" : "Confirmation"}
            </p>
            {confirmed ? (
              <section role="status" className="py-8">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check size={30} />
                </span>
                <h3
                  ref={stepHeading}
                  tabIndex={-1}
                  className="mt-6 text-3xl font-semibold tracking-tight outline-none"
                >
                  You're booked. Let's talk.
                </h3>
                <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5">
                  <p className="font-semibold">{dateLabel(selected)}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {timezone} · 30 minutes · Google Meet
                  </p>
                  {timezone !== HOST_TIMEZONE && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      Lahore: {dateLabel(selected, HOST_TIMEZONE)} (GMT+5)
                    </p>
                  )}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Google Calendar will send your invitation to{" "}
                  <strong className="break-all text-foreground">{details.email}</strong>. You can
                  reply to the invitation if your plans change.
                </p>
                {confirmed.meetUrl ? (
                  <a
                    href={confirmed.meetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                  >
                    Open Google Meet <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your Meet link is being prepared by Google. Check your calendar invitation, or
                    contact us if it doesn't arrive.
                  </p>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-3 mt-6 inline-flex min-h-12 items-center px-5 text-sm font-semibold"
                >
                  Done
                </button>
              </section>
            ) : selected ? (
              <form onSubmit={submit} className="mt-5">
                <h3
                  ref={stepHeading}
                  tabIndex={-1}
                  className="text-2xl font-semibold tracking-tight outline-none sm:text-3xl"
                >
                  A few details, then we're set.
                </h3>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                  <div>
                    <p className="text-sm font-semibold">{dateLabel(selected)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{timezone} · 30 minutes</p>
                    {timezone !== HOST_TIMEZONE && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Lahore: {dateLabel(selected, HOST_TIMEZONE)} (GMT+5)
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    disabled={sending}
                    onClick={() => {
                      setSelected("");
                      setError("");
                    }}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary disabled:opacity-50"
                  >
                    <ArrowLeft size={16} />
                    Change time
                  </button>
                </div>
                <fieldset disabled={sending} className="mt-5 grid gap-4 sm:grid-cols-2">
                  <legend className="sr-only">Your contact details</legend>
                  <label className="block text-sm font-medium">
                    Your name *
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={120}
                      value={details.name}
                      onChange={(event) => setDetails({ ...details, name: event.target.value })}
                      className={fieldClass}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Email *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={details.email}
                      onChange={(event) => setDetails({ ...details, email: event.target.value })}
                      className={fieldClass}
                    />
                  </label>
                  <label className="block text-sm font-medium sm:col-span-2">
                    What would you like to discuss?{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                    <textarea
                      name="message"
                      maxLength={2000}
                      rows={3}
                      placeholder="A little about your project and what you need help with."
                      value={details.message}
                      onChange={(event) => setDetails({ ...details, message: event.target.value })}
                      className={`${fieldClass} py-3`}
                    />
                  </label>
                </fieldset>
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
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Your details go to Pixel2Tech and Google Calendar to arrange the call.{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy policy
                  </a>
                </p>
                <button
                  disabled={sending}
                  type="submit"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {sending ? <Loader2 size={18} className="animate-spin" /> : <Check size={18} />}
                  {sending ? "Confirming your call..." : "Confirm my call"}
                </button>
              </form>
            ) : (
              <section className="mt-3">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Find a time that works for you.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Choose a day, pick an available time, then add your details. You can book up to 2
                  months ahead.
                </p>
                <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                  <div className="min-w-0 rounded-2xl border border-border p-4 sm:p-5">
                    <BookingCalendar
                      date={date}
                      month={month}
                      min={range.min}
                      max={range.max}
                      onDate={chooseDate}
                      onMonth={setMonth}
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-xs font-semibold text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Globe2 size={14} /> Show times in
                      </span>
                      <select
                        value={timezone}
                        onChange={(event) => setTimezone(event.target.value)}
                        className="mt-2 min-h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                      >
                        {timezones.map((zone) => (
                          <option key={zone} value={zone}>
                            {zone.replaceAll("_", " ")}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="mt-4" aria-live="polite" aria-busy={loading}>
                      {!visibleMonth ? (
                        <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
                          Choose a day in the calendar to see its available times.
                        </p>
                      ) : (
                        <>
                          <h4 className="text-sm font-semibold">
                            {dayLabel}{" "}
                            <span className="font-normal text-muted-foreground">in Lahore</span>
                          </h4>
                          {loading ? (
                            <div className="mt-4 flex min-h-32 items-center justify-center gap-2 rounded-xl bg-muted/50 text-sm text-muted-foreground">
                              <Loader2 size={18} className="animate-spin" />
                              Checking the calendar...
                            </div>
                          ) : availabilityError ? (
                            <div className="mt-4 rounded-xl border border-destructive/30 p-4">
                              <p role="alert" className="text-sm text-destructive">
                                {availabilityError}
                              </p>
                              <button
                                type="button"
                                onClick={() => setRetry((value) => value + 1)}
                                className="mt-3 min-h-11 text-sm font-semibold text-primary"
                              >
                                Try again
                              </button>
                            </div>
                          ) : !connected ? (
                            <div className="mt-4 rounded-xl bg-muted p-4">
                              <p className="text-sm font-semibold">Let's arrange your call.</p>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                Online scheduling is being connected. Email your preferred time and
                                a little about your project.
                              </p>
                              <a
                                href="mailto:sales@pixel2tech.com?subject=Strategy%20call%20request"
                                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                              >
                                Request a call by email <ArrowUpRight size={16} />
                              </a>
                            </div>
                          ) : slots.length ? (
                            <div className="mt-3 grid max-h-64 grid-cols-2 gap-2 overflow-y-auto rounded-xl p-1 sm:max-h-72">
                              {slots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  aria-pressed={chosen === slot}
                                  aria-label={dateLabel(slot)}
                                  onClick={() => {
                                    setChosen(slot);
                                    setError("");
                                  }}
                                  className={`min-h-16 rounded-xl border px-2 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${chosen === slot ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary hover:bg-primary/5"}`}
                                >
                                  <span className="block font-semibold">
                                    {new Intl.DateTimeFormat("en", {
                                      timeZone: timezone,
                                      hour: "numeric",
                                      minute: "2-digit",
                                    }).format(new Date(slot))}
                                  </span>
                                  <span className="mt-1 block text-xs text-muted-foreground">
                                    {new Intl.DateTimeFormat("en", {
                                      timeZone: timezone,
                                      weekday: "short",
                                      month: "short",
                                      day: "numeric",
                                    }).format(new Date(slot))}
                                  </span>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="mt-4 rounded-xl bg-muted p-4">
                              <p className="text-sm font-semibold">No open times on this day.</p>
                              <p className="mt-2 text-sm text-muted-foreground">
                                Try another date on the calendar.
                              </p>
                              {followingDate && (
                                <button
                                  type="button"
                                  onClick={() => chooseDate(followingDate)}
                                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                                >
                                  Try the next day <ArrowRight size={16} />
                                </button>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {error && (
                  <p role="alert" className="mt-4 text-sm text-destructive">
                    {error}
                  </p>
                )}
                <div className="sticky bottom-0 -mx-5 -mb-5 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border bg-background/95 px-5 py-4 backdrop-blur-sm sm:-mx-8 sm:-mb-8 sm:px-8 lg:-mx-10 lg:-mb-10 lg:px-10">
                  <div className="text-sm">
                    {chosen && visibleMonth ? (
                      <>
                        <p className="font-semibold">{dateLabel(chosen)}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {timezone} · 30 minutes
                        </p>
                      </>
                    ) : (
                      <p className="text-muted-foreground">Select a time to continue.</p>
                    )}
                  </div>
                  <button
                    type="button"
                    disabled={!chosen || !visibleMonth || loading || !slots.includes(chosen)}
                    onClick={() => {
                      setSelected(chosen);
                      setError("");
                    }}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                  >
                    Continue <ArrowRight size={17} />
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
