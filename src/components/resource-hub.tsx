import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { ResponsiveImage } from "@/components/responsive-image";
import { usePageEntrance } from "@/lib/use-anime";
import type { PostSummary } from "@/lib/blog-types";

/** Shared layout pieces for the Learn pages: guides, playbooks and what's new. */

export const HUB_CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
export const HUB_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const CARD_FOCUS = "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring";
const STRETCHED_LINK = "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

export function HubHero({
  crumb,
  eyebrow,
  title,
  highlight,
  answer,
  children,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  answer: string;
  /** Jump links or actions under the intro. */
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  usePageEntrance(ref);
  return (
    <section className="bg-background pb-8 pt-8 md:pb-16 md:pt-12">
      <div ref={ref} className={HUB_CONTAINER}>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link
                to="/"
                className={`inline-flex min-h-10 items-center rounded hover:text-foreground ${HUB_FOCUS}`}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              {crumb}
            </li>
          </ol>
        </nav>
        <div data-enter className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
            {title} {highlight && <span className="text-primary">{highlight}</span>}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{answer}</p>
        </div>
        {children && (
          <div data-enter className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Anchor chips that jump to the sections of a long hub page. */
export function JumpLinks({ links }: { links: { id: string; label: string }[] }) {
  return (
    <ul aria-label="On this page" className="flex flex-wrap gap-2">
      {links.map((l) => (
        <li key={l.id}>
          <a
            href={`#${l.id}`}
            className={`inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted ${HUB_FOCUS}`}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Article cards in the same style as /blog. */
export function PostGrid({ posts }: { posts: PostSummary[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <li key={p.slug}>
          <article
            className={`group relative flex h-full flex-col rounded-3xl bg-muted p-3 transition-colors hover:bg-muted/70 sm:p-4 ${CARD_FOCUS}`}
          >
            <div className="aspect-[40/21] overflow-hidden rounded-2xl bg-background">
              <ResponsiveImage
                src={p.img}
                alt={p.imgAlt || p.title}
                width={1600}
                height={1000}
                sizes="(min-width: 1280px) 400px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>{p.tag}</span>
              <time dateTime={p.dateISO}>{p.date}</time>
            </p>
            <h3 className="mt-3 text-lg font-medium leading-snug text-foreground">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className={STRETCHED_LINK}>
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 pb-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

/** A titled section of a hub page, with an optional link to the matching service. */
export function HubSection({
  id,
  title,
  intro,
  action,
  muted = false,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  action?: { label: string; to: string; params?: Record<string, string> };
  muted?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-32 py-16 md:py-24 ${muted ? "bg-muted/50" : "bg-background"}`}
    >
      <div className={HUB_CONTAINER}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id={`${id}-title`}
              className="text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
            )}
          </div>
          {action && (
            <Link
              // Typed routes cannot express a runtime path, so this takes a plain string.
              to={action.to as "/services"}
              params={action.params as never}
              className={`inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:decoration-primary sm:self-auto ${HUB_FOCUS}`}
            >
              {action.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

/** A row of internal links at the end of a page, so the next step is always visible. */
export function RelatedPages({
  links,
}: {
  links: { label: string; desc: string; to: string; hash?: string }[];
}) {
  return (
    <nav aria-labelledby="related-pages" className="mt-12 sm:mt-16">
      <h2 id="related-pages" className="text-2xl font-semibold tracking-tight text-foreground">
        Related pages
      </h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => (
          <li key={`${l.to}${l.hash ?? ""}`} className="min-w-0">
            <Link
              to={l.to as "/services"}
              hash={l.hash}
              className={`group flex h-full flex-col rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary ${HUB_FOCUS}`}
            >
              <span className="flex items-center justify-between gap-2 text-sm font-medium text-foreground">
                {l.label}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
