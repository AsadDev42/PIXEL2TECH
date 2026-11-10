import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Faq, type FaqItem } from "@/components/faq";

/** FAQ block for landing pages. Pair it with faqJsonLd(items) in the route head. */
export function LandingFaq({ heading, items }: { heading: string; items: readonly FaqItem[] }) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      <Faq items={items} className="mt-8" />
    </section>
  );
}

const CARD =
  "group flex h-full flex-col rounded-2xl border border-border p-6 transition hover:bg-muted/40";

/** Links to the pages and articles that go deeper than a landing page. */
export function LandingLinks({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; title: string; desc: string }[];
}) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {links.map((link) => {
          const body = (
            <>
              <span className="flex items-start justify-between gap-3 font-semibold">
                {link.title}
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-muted-foreground transition group-hover:text-primary"
                />
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {link.desc}
              </span>
            </>
          );
          return (
            <li key={link.href}>
              {/* Links with a query string (portfolio filters) use a plain anchor. */}
              {link.href.includes("?") ? (
                <a href={link.href} className={CARD}>
                  {body}
                </a>
              ) : (
                <Link to={link.href} className={CARD}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
