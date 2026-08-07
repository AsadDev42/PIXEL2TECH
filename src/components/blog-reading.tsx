import type * as React from "react";
import { useEffect, useState } from "react";

import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Facebook,
  Lightbulb,
  Link2,
  Linkedin,
  ListChecks,
  Twitter,
} from "lucide-react";
import { headingId, type BlogPost, type BlogSection } from "@/lib/blog-posts";

/* ------------------------------------------------------------------ */
/* Sticky reading progress bar                                         */
/* ------------------------------------------------------------------ */

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent"
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#1E90FF] to-[#7C3AED] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

export function TableOfContents({
  sections,
  hasFaqs,
  maxVisible = 6,
}: {
  sections: BlogSection[];
  hasFaqs: boolean;
  maxVisible?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const items = [
    ...sections.map((s) => ({ id: headingId(s.heading), label: s.heading })),
    ...(hasFaqs ? [{ id: "faqs", label: "FAQs" }] : []),
  ];
  if (items.length < 3) return null;

  const hasMore = items.length > maxVisible;
  const visibleItems = expanded ? items : items.slice(0, maxVisible);

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-background p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <ListChecks className="h-4 w-4" aria-hidden="true" />
        Table of contents
      </h2>
      <ol className="mt-4 space-y-1.5 text-[13px]">
        {visibleItems.map((item, i) => (
          <li key={item.id} className="flex items-start gap-2.5">
            <span className="mt-0.5 w-5 tabular-nums text-muted-foreground/70">{i + 1}.</span>
            <a
              href={`#${item.id}`}
              className="line-clamp-2 leading-snug text-foreground transition hover:text-[#1E90FF]"
              title={item.label}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-semibold text-[#1E90FF] transition hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show all ${items.length} sections`}
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
      className="rounded-2xl border border-[#1E90FF]/25 bg-[#1E90FF]/5 p-5 sm:p-7"
    >
      <h2 id="key-takeaways" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
        <Lightbulb className="h-5 w-5 text-[#1E90FF]" aria-hidden="true" />
        Key takeaways
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E90FF]" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
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
export function renderInline(text: string) {
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
        className="font-medium text-[#1E90FF] underline underline-offset-4 hover:opacity-80"
      >
        {m[1]}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}


export function ArticleSection({ section }: { section: BlogSection }) {
  return (
    <section id={headingId(section.heading)} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>

      {section.definition ? (
        <p className="mt-4 border-l-2 border-[#1E90FF] pl-4 text-[15px] font-medium leading-relaxed text-foreground sm:text-base">
          {section.definition}
        </p>
      ) : null}

      <div className="mt-4 space-y-4">
        {section.body.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {p}
          </p>
        ))}
      </div>

      {section.bullets?.length ? (
        <ul className="mt-5 space-y-2.5">
          {section.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E90FF]" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.table ? (
        <figure className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            {section.table.caption ? (
              <caption className="px-4 pt-4 text-left text-sm text-muted-foreground">{section.table.caption}</caption>
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
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      ) : null}

      {section.callout ? (
        <aside className="mt-6 rounded-2xl border border-border bg-muted/60 p-5 sm:p-6">
          {section.callout.title ? (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">{section.callout.title}</h3>
          ) : null}
          <p className="mt-2 text-[15px] leading-relaxed text-foreground sm:text-base">{section.callout.body}</p>
        </aside>
      ) : null}

      {section.subsections?.length ? (
        <div className="mt-8 space-y-6">
          {section.subsections.map((sub) => (
            <div key={sub.heading} id={headingId(sub.heading)} className="scroll-mt-28">
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{sub.heading}</h3>
              <div className="mt-3 space-y-3">
                {sub.body.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
              {sub.bullets?.length ? (
                <ul className="mt-3 space-y-2">
                  {sub.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
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
  "google.com", "developers.google.com", "support.google.com", "search.google.com", "web.dev", "schema.org",
  "microsoft.com", "learn.microsoft.com", "openai.com", "platform.openai.com", "anthropic.com",
  "github.com", "figma.com", "shopify.com", "shopify.dev", "react.dev", "nextjs.org", "supabase.com",
  "developer.mozilla.org", "w3.org", "wikipedia.org", "gartner.com", "mckinsey.com", "hbr.org",
  "statista.com", "nngroup.com", "semrush.com", "ahrefs.com", "cloudflare.com", "stripe.com",
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
    <div aria-labelledby="sources" className="border-t border-border pt-6">
      <h3 id="sources" className="text-base font-semibold tracking-tight text-foreground">
        Sources and further reading
      </h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-muted-foreground">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel={isTrustedLink(s.href) ? "noopener noreferrer" : "noopener noreferrer nofollow"}
              className="text-[15px] leading-relaxed text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Author card                                                         */
/* ------------------------------------------------------------------ */

export function AuthorCard({ post }: { post: BlogPost }) {
  const initials = post.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section aria-label="About the author" className="rounded-2xl border border-border bg-background p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1E90FF] to-[#7C3AED] text-sm font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-base font-semibold text-foreground">{post.author}</div>
          <div className="text-sm text-muted-foreground">
            {post.authorRole ?? "Pixel2Tech — design, development and AI automation"}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {post.authorBio ??
              "Pixel2Tech is a full-service creative agency building brands, websites, Shopify stores and AI automation systems for founders and growing companies. Everything we publish comes from client work we have shipped."}
          </p>
          <Link to="/about" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1E90FF]">
            More about the team
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
    { Icon: Facebook, label: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
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
          aria-label={`Share on ${label}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-muted"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-foreground transition hover:bg-muted"
      >
        {copied ? <Check className="h-4 w-4 text-[#1E90FF]" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Previous / next                                                     */
/* ------------------------------------------------------------------ */

export function PrevNextNav({ previous, next }: { previous?: BlogPost; next?: BlogPost }) {
  if (!previous && !next) return null;
  return (
    <nav aria-label="More articles" className="grid gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          to="/blog/$slug"
          params={{ slug: previous.slug }}
          className="group rounded-2xl border border-border bg-background p-5 transition hover:bg-muted"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Previous article
          </span>
          <div className="mt-2 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-[#1E90FF] sm:text-base">
            {previous.title}
          </div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to="/blog/$slug"
          params={{ slug: next.slug }}
          className="group rounded-2xl border border-border bg-background p-5 text-right transition hover:bg-muted"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Next article
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="mt-2 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-[#1E90FF] sm:text-base">
            {next.title}
          </div>
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
    <section aria-labelledby="explore-more" className="rounded-2xl border border-border bg-background p-5 sm:p-6">
      <h2 id="explore-more" className="text-lg font-bold tracking-tight text-foreground">
        Explore related Pixel2Tech services
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={`${l.label}-${l.to}`}
            to={l.to}
            className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-[#1E90FF] hover:text-[#1E90FF]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
