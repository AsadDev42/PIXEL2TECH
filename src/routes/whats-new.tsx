import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ClosingCta } from "@/components/closing-cta";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageShell } from "@/components/site-chrome";
import {
  HUB_CONTAINER,
  HUB_FOCUS,
  HubHero,
  HubSection,
  PostGrid,
  RelatedPages,
} from "@/components/resource-hub";
import { getLatestPostSummaries } from "@/lib/blog-index";
import { businessHead } from "@/lib/page-seo";
import { SPECIALIST_PAGES, groupOf } from "@/lib/specialist-services";

/**
 * Studio updates. Add a dated entry here when a service, page or resource
 * launches. Entries are facts about this site only, newest first.
 */
const UPDATES: { date: string; dateISO: string; title: string; body: string }[] = [
  {
    date: "November 10, 2026",
    dateISO: "2026-11-10",
    title: "Sixteen specialist service pages",
    body: "Each creative, production, AI and marketing service now has its own page with deliverables, pricing factors and questions. The menu and footer group them into four families.",
  },
  {
    date: "November 10, 2026",
    dateISO: "2026-11-10",
    title: "Guides, playbooks and a help center",
    body: "Buyer guides are grouped by topic, checklists and briefs have their own page, and common questions about working with us sit in one help center.",
  },
];

export const Route = createFileRoute("/whats-new")({
  head: () =>
    businessHead(
      "/whats-new",
      "What's new at Pixel2Tech",
      "New services, pages and articles from Pixel2Tech, the design, web, video and automation studio in Lahore, with the date each one went live on the site.",
    ),
  component: WhatsNewPage,
});

function WhatsNewPage() {
  const latest = getLatestPostSummaries(9);

  return (
    <PageShell>
      <HubHero
        crumb="What's new"
        eyebrow="Learn"
        title="What's new"
        highlight="at Pixel2Tech"
        answer="Pixel2Tech lists new services, pages and articles here with the date each one went live. The newest entries come first."
      />

      <section aria-labelledby="updates-title" className="bg-background pb-16 md:pb-24">
        <div className={HUB_CONTAINER}>
          <h2 id="updates-title" className="sr-only">
            Studio updates
          </h2>
          <ol className="divide-y divide-border border-y border-border">
            {UPDATES.map((u) => (
              <li
                key={`${u.dateISO}-${u.title}`}
                className="grid gap-2 py-8 md:grid-cols-[12rem_1fr] md:gap-8"
              >
                <time dateTime={u.dateISO} className="text-sm tabular-nums text-muted-foreground">
                  {u.date}
                </time>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight">{u.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {u.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HubSection
        id="new-services"
        title="New service pages"
        intro="Each page covers what you get, who it suits, what moves the quote and common questions."
        muted
        action={{ label: "See all services", to: "/services" }}
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIST_PAGES.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug} className="min-w-0">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`group flex h-full items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary ${HUB_FOCUS}`}
                >
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground">{s.title}</span>
                    <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                      {groupOf(s.slug)?.title}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </HubSection>

      <HubSection
        id="latest-articles"
        title="Latest articles"
        intro="The nine most recent articles from the blog."
        action={{ label: "All articles", to: "/blog" }}
      >
        <PostGrid posts={latest} />
      </HubSection>

      <section aria-labelledby="newsletter-title" className="bg-muted/50 py-16 md:py-24">
        <div className={`${HUB_CONTAINER} grid gap-8 md:grid-cols-2 md:items-center`}>
          <div>
            <h2
              id="newsletter-title"
              className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
            >
              Get new articles by email
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Leave your email and we will send you new articles from the blog.
            </p>
            <Link
              to="/privacy-policy"
              className={`mt-4 inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 ${HUB_FOCUS}`}
            >
              How we use your email
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <NewsletterForm idPrefix="whats-new-newsletter" location="whats_new" />
        </div>
      </section>

      <section aria-labelledby="whats-new-cta" className="bg-background py-16 md:py-24">
        <div className={HUB_CONTAINER}>
          <ClosingCta
            id="whats-new-cta"
            title="Planning something new?"
            body="Tell us what you are working on and we will recommend where to start. We reply within one business day."
            source="whats_new_cta"
          />
          <RelatedPages
            links={[
              { label: "Guides", desc: "Buyer guides grouped by topic", to: "/guides" },
              { label: "Playbooks", desc: "Checklists, briefs and routines", to: "/playbooks" },
              { label: "Our work", desc: "Brand, web, video and AI projects", to: "/portfolio" },
              { label: "Contact", desc: "Send a project brief", to: "/contact" },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
