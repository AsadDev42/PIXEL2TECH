import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";

export function ContentGrid({
  heading,
  intro,
  items,
  numbered = false,
}: {
  heading: string;
  intro?: string;
  items: readonly { title: string; body: string }[];
  numbered?: boolean;
}) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>}
      <div
        className={`mt-8 grid gap-4 ${items.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
      >
        {items.map((item, index) => (
          <article key={item.title} className="rounded-2xl border border-border bg-muted/30 p-6">
            {numbered && (
              <p
                aria-hidden="true"
                className="mb-6 text-xs font-semibold tracking-widest text-primary"
              >
                0{index + 1}
              </p>
            )}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectNextStep({
  title,
  body,
  source,
  label = "Discuss your project",
}: {
  title: string;
  body: string;
  source: string;
  label?: string;
}) {
  return (
    <section className="mb-12 grid gap-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
      <div>
        <p className="text-sm font-medium text-slate-300">Your next step</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{body}</p>
      </div>
      <div className="flex flex-wrap gap-3 lg:flex-col">
        <BookCallButton
          source={source}
          className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-blue-100"
        >
          {label}
          <ArrowUpRight size={17} aria-hidden="true" />
        </BookCallButton>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 text-sm font-semibold hover:bg-white/10"
        >
          Send a project brief
        </Link>
      </div>
    </section>
  );
}
