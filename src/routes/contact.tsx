import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { ContactForm } from "@/components/contact-form";
import { trackEvent } from "@/lib/analytics";
import { SITE } from "@/lib/site-config";

const OG_IMAGE = "https://pixel2tech.com/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const PAGE_URL = `${SITE.url}/contact`;
const TITLE = "Contact Pixel2Tech | Start a Project or Book a Call";
const DESCRIPTION =
  "Tell us about your branding, website, video or automation project. We reply within one business day, or book a free strategy call. Based in Lahore, working worldwide.";

const MAP_QUERY = encodeURIComponent(SITE.location);

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        // The business itself (address, phone, email) is described once, in the root
        // Organization node; this page only points at it.
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Pixel2Tech",
          url: PAGE_URL,
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.858 0 2.42-.516 2.75-1.404.13-.343.187-.744.187-1.117 0-.286-1.877-1.135-2.15-1.246Zm-2.895 7.208a10.086 10.086 0 0 1-5.13-1.404l-3.583.945.96-3.522A10.028 10.028 0 0 1 6.145 14.4 10.079 10.079 0 0 1 16.2 4.348a10.079 10.079 0 0 1 10.055 10.052 10.079 10.079 0 0 1-10.041 10.013Zm0-22.146A12.11 12.11 0 0 0 4.098 14.4c0 2.147.573 4.194 1.65 6.055L3.75 27.75l7.457-1.949a12.121 12.121 0 0 0 5.784 1.476h.014c6.694 0 12.176-5.474 12.176-12.166A12.15 12.15 0 0 0 25.638 5.5a12.005 12.005 0 0 0-9.423-4.233Z" />
    </svg>
  );
}

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  event: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    event: "email_click",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phoneE164}`,
    event: "phone_click",
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.whatsappUrl,
    event: "whatsapp_click",
    Icon: WhatsAppIcon,
    external: true,
  },
];

const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const H2 = "text-xl font-bold tracking-tight text-foreground sm:text-2xl";
const PANEL = "rounded-3xl bg-muted p-6 sm:p-8";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function ContactPage() {
  return (
    <PageShell>
      <section aria-labelledby="contact-title" className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <header className="max-w-3xl">
            <p className={EYEBROW}>Contact</p>
            <h1
              id="contact-title"
              className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl xl:text-[56px]"
            >
              Tell us about <span className="text-primary">your project</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Share a few details about what you need, whether it&apos;s a brand, a website, video
              or an automation. We reply within one business day.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-[15px] font-medium text-foreground">Prefer to talk it through?</p>
              <BookCallButton
                source="contact_page"
                className={`inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
              />
            </div>
          </header>

          <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
            <section aria-labelledby="contact-form-title" className="min-w-0">
              <h2 id="contact-form-title" className={H2}>
                Send a project brief
              </h2>
              <ContactForm source="contact" className="mt-6" />
            </section>

            <aside aria-label="Other ways to reach us" className="min-w-0 space-y-6">
              <section aria-labelledby="contact-direct-title" className={PANEL}>
                <h2 id="contact-direct-title" className={H2}>
                  Contact details
                </h2>
                <ul className="mt-4 space-y-2">
                  {CONTACT_METHODS.map(({ label, value, href, event, Icon, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        onClick={() => trackEvent(event, { location: "contact_page" })}
                        className={`group -mx-2 flex min-h-12 items-center gap-4 rounded-2xl p-2 transition hover:bg-background ${FOCUS_RING}`}
                      >
                        <span
                          aria-hidden="true"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background text-primary"
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">
                            {label}
                          </span>
                          <span className="block break-words text-[15px] text-muted-foreground group-hover:text-foreground">
                            {value}
                          </span>
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="contact-hours-title" className={PANEL}>
                <h2 id="contact-hours-title" className={H2}>
                  Business hours
                </h2>
                <dl className="mt-4 divide-y divide-border text-[15px]">
                  {SITE.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
                    >
                      <dt className="text-foreground">{h.days}</dt>
                      <dd className="text-muted-foreground">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm text-muted-foreground">
                  Times are Pakistan Standard Time (UTC+5).
                </p>
              </section>

              <section
                aria-labelledby="contact-location-title"
                className="overflow-hidden rounded-3xl border border-border bg-background"
              >
                <div className="flex items-start gap-4 p-6 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 id="contact-location-title" className={H2}>
                      Where we are
                    </h2>
                    <p className="mt-1 text-[15px] text-muted-foreground">{SITE.locationLine}.</p>
                  </div>
                </div>
                <iframe
                  title={`Map of ${SITE.location}`}
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-[4/3] w-full border-0 bg-muted"
                />
                <div className="p-4 sm:px-8">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-primary underline-offset-4 hover:underline ${FOCUS_RING}`}
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
