import type { LucideIcon } from "lucide-react";

export type ValueCard = { title: string; desc: string; Icon: LucideIcon };

/**
 * Numbered value/reason cards. The first card is featured in brand blue so the
 * row reads as a hierarchy rather than four identical boxes. Tokens only, so it
 * works in light and dark mode; 1 → 2 → 4 columns from phone to desktop.
 */
export function ValueCards({
  items,
  className = "",
}: {
  items: readonly ValueCard[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 ${className}`}>
      {items.map(({ title, desc, Icon }, i) => {
        const featured = i === 0;
        return (
          <li
            key={title}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 motion-safe:hover:-translate-y-1 sm:p-8 ${
              featured
                ? "border-transparent bg-primary text-primary-foreground shadow-[var(--elev-3)]"
                : "border-border bg-card text-card-foreground hover:border-primary/40 hover:shadow-[var(--elev-3)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span
                aria-hidden="true"
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                  featured
                    ? "bg-primary-foreground/15 text-primary-foreground ring-1 ring-primary-foreground/25"
                    : "bg-primary/10 text-primary ring-1 ring-primary/15"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span
                aria-hidden="true"
                className={`font-heading text-4xl font-bold leading-none tracking-tight tabular-nums ${
                  featured ? "text-primary-foreground/35" : "text-foreground/10"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-8 text-lg font-bold leading-snug sm:text-xl">{title}</h3>
            <p
              className={`mt-3 text-[15px] leading-relaxed ${
                featured ? "text-primary-foreground/85" : "text-muted-foreground"
              }`}
            >
              {desc}
            </p>
            {!featured && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
