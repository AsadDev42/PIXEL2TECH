import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/site-config";

/**
 * One block inside a legal section:
 * - a string is a paragraph,
 * - `{ subheading }` is a small heading inside the section,
 * - `{ list }` is a bulleted list.
 * Paragraphs and list items may use **bold** for a short lead-in. URLs and email
 * addresses in the text become links automatically.
 */
export type LegalBlock = string | { subheading: string } | { list: readonly string[] };

export type LegalSection = { heading: string; body: LegalBlock[] };

/** Short, non-binding overview shown above the table of contents. */
export type LegalSummary = { points: readonly string[]; note: string };

/** Postal address on one line, built from SITE so it never drifts. */
export const POSTAL_ADDRESS = `${SITE.name}, ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}, Pakistan`;

/** "Email …, call … or write to …" sentence used at the end of each legal page. */
export const CONTACT_SENTENCE = `Email ${SITE.email}, call ${SITE.phoneDisplay}, or write to ${POSTAL_ADDRESS}.`;

const OG_IMAGE = `${SITE.url}/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg`;

/** Shared <head> for legal pages: meta, canonical, WebPage + breadcrumb JSON-LD. */
export function legalPageHead({
  path,
  name,
  description,
  dateModified,
}: {
  /** Route path, e.g. "/privacy-policy". */
  path: string;
  /** Page name in sentence case, e.g. "Privacy policy". */
  name: string;
  description: string;
  /** ISO date of the last content change, e.g. "2026-09-24". */
  dateModified: string;
}) {
  const title = `${name} | ${SITE.name}`;
  const url = `${SITE.url}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name,
          url,
          description,
          dateModified,
          isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE.url}/#organization`,
            name: SITE.name,
            url: SITE.url,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name, item: url },
          ],
        }),
      },
    ],
  };
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const LINK_CLASS =
  "break-words font-medium text-primary underline underline-offset-4 hover:opacity-80 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

/** URLs (without trailing punctuation) and email addresses. */
const LINK_PATTERN =
  /(https?:\/\/[^\s]*[^\s.,;:)]|[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,})/g;

function linkify(text: string, keyPrefix: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part;
    const key = `${keyPrefix}-l${i}`;
    if (!part.startsWith("http")) {
      return (
        <a key={key} href={`mailto:${part}`} className={LINK_CLASS}>
          {part}
        </a>
      );
    }
    const internal = part.startsWith(SITE.url);
    return (
      <a
        key={key}
        href={internal ? part.slice(SITE.url.length) || "/" : part}
        className={LINK_CLASS}
        {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {part.replace(/^https?:\/\//, "")}
      </a>
    );
  });
}

/** Renders **bold** lead-ins and auto-links URLs and email addresses. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {linkify(part, `b${i}`)}
          </strong>
        ) : (
          linkify(part, `t${i}`)
        ),
      )}
    </>
  );
}

const TEXT_CLASS = "break-words text-sm leading-relaxed text-muted-foreground sm:text-base";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return (
      <p className={TEXT_CLASS}>
        <RichText text={block} />
      </p>
    );
  }
  if ("subheading" in block) {
    return (
      <h3 className="pt-2 text-base font-semibold tracking-tight text-foreground sm:text-lg">
        {block.subheading}
      </h3>
    );
  }
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-primary">
      {block.list.map((item, i) => (
        <li key={i} className={TEXT_CLASS}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

/** Shared reading layout for legal / policy pages. */
export function LegalBody({
  updated,
  sections,
  summary,
  numbered = false,
}: {
  updated: string;
  sections: LegalSection[];
  /** Optional non-binding overview shown before the table of contents. */
  summary?: LegalSummary;
  /** Prefix headings and contents entries with 1., 2., 3. … */
  numbered?: boolean;
}) {
  const label = (s: LegalSection, i: number) => (numbered ? `${i + 1}. ${s.heading}` : s.heading);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Last updated {updated}
          </p>

          {summary ? (
            <aside
              aria-label="Summary"
              className="mt-4 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground sm:p-6"
            >
              <p className="text-base font-semibold text-foreground">Summary</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-primary">
                {summary.points.map((point, i) => (
                  <li key={i} className="break-words">
                    <RichText text={point} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic">{summary.note}</p>
            </aside>
          ) : (
            <p className="mt-4 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
              {SITE.name} maintains this page to explain how we handle your information and how we
              work.
            </p>
          )}

          <nav aria-label="On this page" className="mt-8 border-l-2 border-border pl-4">
            <p className="text-sm font-semibold text-foreground">On this page</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#${sectionId(s.heading)}`}
                    className="inline-flex min-h-10 items-center break-words text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {label(s, i)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading} id={sectionId(s.heading)} className="scroll-mt-24">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {label(s, i)}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
