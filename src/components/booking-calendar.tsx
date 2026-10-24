import { ChevronLeft, ChevronRight } from "lucide-react";
import { candidateSlots } from "@/lib/booking-slots";

export function BookingCalendar({
  date,
  month,
  min,
  max,
  onDate,
  onMonth,
}: {
  date: string;
  month: string;
  min: string;
  max: string;
  onDate: (date: string) => void;
  onMonth: (month: string) => void;
}) {
  const first = new Date(`${month}-01T12:00:00Z`);
  const offset = (first.getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  const monthName = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(first);
  const move = (amount: number) => {
    const next = new Date(first);
    next.setUTCMonth(next.getUTCMonth() + amount);
    onMonth(next.toISOString().slice(0, 7));
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <h4 aria-live="polite" className="text-lg font-semibold">
          {monthName}
        </h4>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous month"
            disabled={month <= min.slice(0, 7)}
            onClick={() => move(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next month"
            disabled={month >= max.slice(0, 7)}
            onClick={() => move(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-y-2 text-center">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="pb-2 text-xs font-medium text-muted-foreground"
          >
            {day}
          </span>
        ))}
        {Array.from({ length: offset }, (_, index) => (
          <span key={`empty-${index}`} aria-hidden="true" />
        ))}
        {Array.from({ length: days }, (_, index) => {
          const value = `${month}-${String(index + 1).padStart(2, "0")}`;
          const disabled = value < min || value > max || !candidateSlots(value).length;
          const label = new Intl.DateTimeFormat("en", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          }).format(new Date(`${value}T12:00:00Z`));
          return (
            <button
              key={value}
              type="button"
              disabled={disabled}
              aria-label={label}
              aria-pressed={value === date}
              onClick={() => onDate(value)}
              className={`mx-auto grid h-11 w-full max-w-11 place-items-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:font-normal disabled:opacity-25 ${value === date && !disabled ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground hover:bg-primary/10"}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Calendar dates use Lahore time (GMT+5). Sundays and dates outside the booking window are
        unavailable.
      </p>
    </div>
  );
}
