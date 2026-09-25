import type * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Lightbulb,
  Link2,
  Linkedin,
  ListChecks,
  Twitter,
} from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { headingId, type BlogPost, type BlogSection, type PostSummary } from "@/lib/blog-types";

/* Shared type scale for article pages. */
const SECTION_HEADING = "text-2xl font-bold tracking-tight text-foreground sm:text-3xl";
const PANEL_HEADING = "text-lg font-bold tracking-tight text-foreground";
const PROSE = "text-base leading-relaxed text-muted-foreground";

/* ------------------------------------------------------------------ */
/* Reading progress bar                                                */
/* ------------------------------------------------------------------ */

/**
 * Thin progress bar at the top of the viewport. Decorative, so hidden from
 * assistive tech. Writes a transform once per frame instead of re-rendering.
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let max = 0;
    let frame = 0;

    const measure = () => {
      max = document.documentElement.scrollHeight - window.innerHeight;
    };
    const paint = () => {
      frame = 0;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    paint();
    const observer = new ResizeObserver(onResize);
    observer.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
      <div
        ref={barRef}
        className="h-full origin-left bg-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

function tocItems(sections: BlogSection[], hasFaqs: boolean) {
  return [
    ...sections.map((s) => ({ id: headingId(s.heading), label: s.heading })),
    ...(hasFaqs ? [{ id: "faqs", label: "FAQs" }] : []),
  ];
}

function TocList({ items }: { items: { id: string; label: string }[] }) {
  return (
    <ol className="space-y-1 text-sm">
      {items.map((item, i) => (
        <li key={item.id} className="flex items-start gap-2">
          <span className="w-6 shrink-0 py-1 tabular-nums text-muted-foreground">{i + 1}.</span>
          <a
            href={`#${item.id}`}
            className="block py-1 leading-snug text-foreground transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

/**
 * Article outline. `variant="sidebar"` is the desktop column (first six
 * sections, then a toggle); `variant="collapsible"` is a closed-by-default
 * disclosure for phones and tablets.
 */
export function TableOfContents({
  sections,
  hasFaqs,
  variant = "sidebar",
  maxVisible = 6,
}: {
  sections: BlogSection[];
  hasFaqs: boolean;
  variant?: "sidebar" | "collapsible";
  maxVisible?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const items = tocItems(sections, hasFaqs);
  if (items.length < 3) return null;

  if (variant === "collapsible") {
    return (
      <details className="group rounded-2xl border border-border bg-background">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
          <span className="inline-flex items-center gap-2">
            <ListChecks className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            In this article ({items.length} sections)
          </span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <nav aria-label="Table of contents" className="border-t border-border px-5 pb-5 pt-3">
          <TocList items={items} />
        </nav>
      </details>
    );
  }

  const hasMore = items.length > maxVisible;
  const visibleItems = expanded ? items : items.slice(0, maxVisible);

  return (
    <nav
      aria-labelledby="toc-heading"
      className="rounded-2xl border border-border bg-background p-5"
    >
      <h2
        id="toc-heading"
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
      >
        <ListChecks className="h-4 w-4" aria-hidden="true" />
        In this article
      </h2>
      <div className="mt-3">
        <TocList items={visibleItems} />
      </div>
      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 min-h-10 text-sm font-semibold text-primary hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show fewer" : `Show all ${items.length} sections`}
        </button>
      ) : null}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Key takeaways                                                       */
/* ------------------------------------------------------------------ */

export function KeyTakeaways({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section
      aria-labelledby="key-takeaways"
      className="rounded-2xl border border-primary/25 bg-brand/5 p-5 sm:p-6"
    >
      <h2 id="key-takeaways" className={`flex items-center gap-2 ${PANEL_HEADING}`}>
        <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
        Key takeaways
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className={`flex gap-3 ${PROSE}`}>
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Disclosure and quick verdict                                        */
/* ------------------------------------------------------------------ */

export function Disclosure({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl border border-border bg-muted p-4 text-sm leading-relaxed text-foreground sm:p-5">
      {children}
    </p>
  );
}

export function QuickVerdict({ verdict }: { verdict: NonNullable<BlogPost["quickVerdict"]> }) {
  const linkLabel = verdict.urlLabel ?? (verdict.winner ? `Visit ${verdict.winner}` : undefined);
  return (
    <section
      aria-labelledby="quick-verdict"
      className="rounded-2xl border border-border bg-background p-5 sm:p-8"
    >
      <h2 id="quick-verdict" className={SECTION_HEADING}>
        {verdict.title}
      </h2>
      {verdict.label ? (
        <p className="mt-1 text-sm font-medium text-primary">{verdict.label}</p>
      ) : null}
      <p className={`mt-4 ${PROSE}`}>{verdict.body}</p>
      {verdict.winner || verdict.url ? (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          {verdict.winner ? (
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-primary/25 bg-brand/10 px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Our pick
              </span>
              <span className="text-base font-bold text-foreground">{verdict.winner}</span>
            </p>
          ) : null}
          {verdict.url && linkLabel ? (
            <a
              href={verdict.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Article body renderer                                               */
/* ------------------------------------------------------------------ */

/**
 * Renders inline markdown links — [label](https://example.com) — inside
 * article prose, bullets and table cells. Plain text passes through as-is.
 */
function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const href = m[2];
    parts.push(
      <a
        key={`${href}-${m.index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((b) => (
        <li key={b} className={`flex gap-3 ${PROSE}`}>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
          <span>{renderInline(b)}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleSection({ section }: { section: BlogSection }) {
  return (
    <section id={headingId(section.heading)} className="scroll-mt-28">
      <h2 className={SECTION_HEADING}>{section.heading}</h2>

      {section.definition ? (
        <p className="mt-4 border-l-2 border-primary pl-4 text-base font-medium leading-relaxed text-foreground">
          {section.definition}
        </p>
      ) : null}

      <div className="mt-4 space-y-4">
        {section.body.map((p, i) => (
          <p key={i} className={PROSE}>
            {renderInline(p)}
          </p>
        ))}
      </div>

      {section.image ? (
        <figure className="mt-6">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
            <ResponsiveImage
              src={section.image.src}
              alt={section.image.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 92vw"
              className="h-full w-full object-cover"
            />
          </div>
          {section.image.caption ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {section.image.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {section.video ? (
        <figure className="mt-6">
          <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${section.video.id}`}
              title={section.video.title ?? "Embedded video"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          {section.video.title ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {section.video.title}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {section.bullets?.length ? <Bullets items={section.bullets} /> : null}

      {section.table ? (
        <figure className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            {section.table.caption ? (
              <caption className="px-4 pt-4 text-left text-sm text-muted-foreground">
                {section.table.caption}
              </caption>
            ) : null}
            <thead>
              <tr className="bg-muted">
                {section.table.headers.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold text-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 align-top text-muted-foreground">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      ) : null}

      {section.callout ? (
        <aside className="mt-6 rounded-2xl border border-border bg-muted p-5 sm:p-6">
          {section.callout.title ? (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              {section.callout.title}
            </h3>
          ) : null}
          <p className="mt-2 text-base leading-relaxed text-foreground">
            {renderInline(section.callout.body)}
          </p>
        </aside>
      ) : null}

      {section.subsections?.length ? (
        <div className="mt-8 space-y-6">
          {section.subsections.map((sub) => (
            <div key={sub.heading} id={headingId(sub.heading)} className="scroll-mt-28">
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {sub.heading}
              </h3>
              <div className="mt-3 space-y-3">
                {sub.body.map((p, i) => (
                  <p key={i} className={PROSE}>
                    {renderInline(p)}
                  </p>
                ))}
              </div>
              {sub.bullets?.length ? <Bullets items={sub.bullets} /> : null}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

/**
 * Trusted publishers and official documentation: these earn a normal followed
 * link. Everything else keeps rel="nofollow".
 */
const TRUSTED_LINK_HOSTS = [
  "google.com",
  "developers.google.com",
  "support.google.com",
  "search.google.com",
  "web.dev",
  "schema.org",
  "microsoft.com",
  "learn.microsoft.com",
  "openai.com",
  "platform.openai.com",
  "anthropic.com",
  "github.com",
  "figma.com",
  "shopify.com",
  "shopify.dev",
  "react.dev",
  "nextjs.org",
  "supabase.com",
  "developer.mozilla.org",
  "w3.org",
  "wikipedia.org",
  "gartner.com",
  "mckinsey.com",
  "hbr.org",
  "statista.com",
  "nngroup.com",
  "semrush.com",
  "ahrefs.com",
  "cloudflare.com",
  "stripe.com",
];

function isTrustedLink(href: string): boolean {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    return TRUSTED_LINK_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

export function SourceList({ sources }: { sources: { label: string; href: string }[] }) {
  if (!sources.length) return null;
  return (
    <section aria-labelledby="sources" className="border-t border-border pt-6">
      <h2 id="sources" className={PANEL_HEADING}>
        Sources and further reading
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted-foreground">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel={isTrustedLink(s.href) ? "noopener noreferrer" : "noopener noreferrer nofollow"}
              className="text-base leading-relaxed text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Author card                                                         */
/* ------------------------------------------------------------------ */

const STUDIO_BIO =
  "Pixel2Tech is a Lahore studio for brand, web, video and automation work. We write about problems we see in client projects.";

export function AuthorCard({
  author,
  role,
  bio,
  profilePath,
}: {
  author: string;
  role?: string;
  bio?: string;
  /** The author's profile page, when they have one. */
  profilePath?: string;
}) {
  const initials = author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      aria-labelledby="about-author"
      className="rounded-2xl border border-border bg-background p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h2 id="about-author" className="text-base font-semibold text-foreground">
            <span className="sr-only">About the author: </span>
            {author}
          </h2>
          {role ? <p className="text-sm text-muted-foreground">{role}</p> : null}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bio ?? STUDIO_BIO}</p>
          <Link
            to={profilePath ?? "/about"}
            className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {profilePath ? `More about ${author.split(" ")[0]}` : "Meet the team"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Share bar with copy link                                            */
/* ------------------------------------------------------------------ */

export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const socials = [
    {
      Icon: Facebook,
      label: "Facebook",
      href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      Icon: Twitter,
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {socials.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label} (opens in a new tab)`}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
        <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Related articles                                                    */
/* ------------------------------------------------------------------ */

export function RelatedArticles({ posts }: { posts: PostSummary[] }) {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-articles">
      <h2 id="related-articles" className={SECTION_HEADING}>
        Related articles
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map((r) => (
          <li
            key={r.slug}
            className="relative flex gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:bg-muted has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring"
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
              <ResponsiveImage
                src={r.img}
                alt=""
                width={480}
                height={480}
                sizes="80px"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                {r.tag} · <time dateTime={r.dateISO}>{r.date}</time>
              </p>
              <h3 className="mt-1 line-clamp-3 text-base font-semibold leading-snug text-foreground">
                <Link
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                >
                  {r.title}
                </Link>
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Previous / next                                                     */
/* ------------------------------------------------------------------ */

export function PrevNextNav({ previous, next }: { previous?: PostSummary; next?: PostSummary }) {
  if (!previous && !next) return null;
  return (
    <nav aria-label="More articles" className="grid gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          to="/blog/$slug"
          params={{ slug: previous.slug }}
          className="group min-w-0 rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-muted"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Newer article
          </span>
          <span className="mt-2 line-clamp-2 block text-sm font-semibold text-foreground group-hover:text-primary sm:text-base">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link
          to="/blog/$slug"
          params={{ slug: next.slug }}
          className="group min-w-0 rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-muted sm:text-right"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Older article
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="mt-2 line-clamp-2 block text-sm font-semibold text-foreground group-hover:text-primary sm:text-base">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Internal link suggestions                                           */
/* ------------------------------------------------------------------ */

export function InternalLinks({ links }: { links: { label: string; to: string }[] }) {
  if (!links.length) return null;
  return (
    <section
      aria-labelledby="explore-more"
      className="rounded-2xl border border-border bg-background p-5 sm:p-6"
    >
      <h2 id="explore-more" className={PANEL_HEADING}>
        Related Pixel2Tech services
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={`${l.label}-${l.to}`}>
            <Link
              to={l.to}
              className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
