import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/site-config";

export type LegalSection = { heading: string; body: string[] };

/** Postal address on one line, built from SITE so it never drifts. */
export const POSTAL_ADDRESS = `${SITE.name}, ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}, Pakistan`;

/** "Email …, call … or write to …" sentence used at the end of each legal page. */
export const CONTACT_SENTENCE = `Email ${SITE.email}, call ${SITE.phoneDisplay}, or write to ${POSTAL_ADDRESS}.`;

const OG_IMAGE = `${SITE.url}/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg`;

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

/** Shared reading layout for legal / policy pages. */
export function LegalBody({ updated, sections }: { updated: string; sections: LegalSection[] }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Last updated {updated}
          </p>
          <p className="mt-4 rounded-2xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
            {SITE.name} maintains this page to explain how we handle your information and how we
            work. It describes our own practices. It is not legal advice or an independent
            certification.
          </p>

          <nav aria-label="On this page" className="mt-8 border-l-2 border-border pl-4">
            <p className="text-sm font-semibold text-foreground">On this page</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
              {sections.map((s) => (
                <li key={s.heading}>
                  <a
                    href={`#${sectionId(s.heading)}`}
                    className="inline-flex min-h-10 items-center break-words text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading} id={sectionId(s.heading)} className="scroll-mt-24">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p
                      key={p}
                      className="break-words text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {p}
                    </p>
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
