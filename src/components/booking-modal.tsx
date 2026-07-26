import { useEffect, useState } from "react";
import { CalendarDays, Clock, Video, Layers, ShieldCheck, Target, X } from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
  "AI Solutions & Automation",
  "Website Development",
  "Custom Platform / SaaS",
  "Systems & Workflow Automation",
  "Digital Experience & UX",
  "Branding & Design",
  "SEO & Search Growth",
  "Social Media & Email",
  "Video Editing & Ads",
  "General Consultation",
];

const CAL_URL = "https://calendly.com/pixel2tech/strategy-call?primary_color=0784ff&hide_gdpr_banner=1";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");

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
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]');
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
        trackEvent("booking_completed", { service });
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [open, service]);

  const dialogRef = useFocusTrap<HTMLDivElement>(open);

  if (!open) return null;

  const calUrl = service
    ? `${CAL_URL}&a1=${encodeURIComponent(service)}${notes ? `&a2=${encodeURIComponent(notes)}` : ""}`
    : CAL_URL;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a Strategy Session"
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-background shadow-2xl sm:rounded-3xl focus:outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border hover:bg-muted"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid gap-0 md:grid-cols-2">
          {/* Left: intro + form */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0784ff]/10 text-[#0784ff]">
                <CalendarDays className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                  Schedule a<br />Strategy Session
                </h2>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Let&apos;s discuss your challenges and explore how we can help your business grow with the right systems and technology.
            </p>

            <div className="mt-7">
              <label htmlFor="booking-service" className="block text-sm font-semibold text-foreground">
                What would you like to discuss? <span className="text-[#0784ff]">*</span>
              </label>
              <div className="relative mt-2">
                <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0784ff]">
                  <Layers className="h-4 w-4" />
                </span>
                <select
                  id="booking-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-border bg-background py-3 pl-10 pr-10 text-sm text-foreground shadow-sm focus:border-[#0784ff] focus:outline-none focus:ring-2 focus:ring-[#0784ff]/30"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</span>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="booking-notes" className="block text-sm font-semibold text-foreground">
                Additional Notes (Optional)
              </label>
              <textarea
                id="booking-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value.slice(0, 500))}
                placeholder="Tell us about your project, goals, or challenges..."
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground shadow-sm focus:border-[#0784ff] focus:outline-none focus:ring-2 focus:ring-[#0784ff]/30"
              />
              <div className="mt-1 text-right text-xs text-muted-foreground">{notes.length}/500</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Feature icon={<Clock className="h-5 w-5" />} title="30 Min" sub="Strategy Session" />
              <Feature icon={<Target className="h-5 w-5" />} title="Actionable" sub="Recommendations" />
              <Feature icon={<ShieldCheck className="h-5 w-5" />} title="No Sales Pitch," sub="Just Solutions" />
            </div>
          </div>

          {/* Right: session info + Calendly */}
          <div className="border-t border-border bg-muted/40 p-6 pt-16 sm:p-8 sm:pt-16 md:border-l md:border-t-0 md:p-10 md:pt-16">
            <div className="relative z-10 rounded-2xl border border-border bg-background p-5 pr-12">
              <div className="text-lg font-bold text-foreground">Strategy Session</div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-[#0784ff]" aria-hidden="true" />
                30 min
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="h-4 w-4 text-[#0784ff]" aria-hidden="true" />
                Google Meet
              </div>
            </div>

            <div className="mt-5">
              <div className="text-base font-bold text-foreground">Select a Date &amp; Time</div>
              <div
                key={calUrl}
                className="calendly-inline-widget mt-3 overflow-hidden rounded-2xl border border-border bg-background"
                data-url={calUrl}
                style={{ minWidth: 280, height: 620 }}
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0784ff]/10 text-[#0784ff]">{icon}</div>
      <div className="text-xs font-semibold leading-tight text-foreground">{title}</div>
      <div className="-mt-1 text-xs leading-tight text-muted-foreground">{sub}</div>
    </div>
  );
}
