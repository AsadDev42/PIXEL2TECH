import { useEffect, useState } from "react";
import { Clock, Video, ShieldCheck, Target, X } from "lucide-react";
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

  const calUrl = CAL_URL;


  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a Strategy Session"
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl focus:outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur ring-1 ring-border transition hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left: essentials */}
          <div className="flex flex-col gap-8 border-b border-border bg-muted/40 p-6 sm:p-8 md:border-b-0 md:border-r md:p-10">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0784ff]">
                Strategy Session
              </div>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                Let&apos;s map out your next move
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A focused 30-minute call to understand your goals and outline what we&apos;d build.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill icon={<Clock className="h-3.5 w-3.5" />} label="30 min" />
              <Pill icon={<Video className="h-3.5 w-3.5" />} label="Google Meet" />
              <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />} label="No sales pitch" />
              <Pill icon={<Target className="h-3.5 w-3.5" />} label="Actionable plan" />
            </div>

            <p className="mt-auto text-xs text-muted-foreground">
              🔒 Your details stay private and are never shared.
            </p>
          </div>

          {/* Right: scheduler */}
          <div className="p-4 sm:p-6 md:p-8">
            <div
              key={calUrl}
              className="calendly-inline-widget overflow-hidden rounded-2xl border border-border bg-background"
              data-url={calUrl}
              style={{ minWidth: 280, height: 640 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
      <span className="text-[#0784ff]" aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
