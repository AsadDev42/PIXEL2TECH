import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { PageShell } from "@/components/site-chrome";
import {
  HUB_CONTAINER,
  HUB_FOCUS,
  HubHero,
  HubSection,
  JumpLinks,
  PostGrid,
  RelatedPages,
} from "@/components/resource-hub";
import { getPostSummaries } from "@/lib/blog-index";
import { PLAYBOOK_KINDS, isPlaybook } from "@/lib/learn-content";
import { businessHead } from "@/lib/page-seo";

const FAQS: FaqItem[] = [
  {
    q: "Are the checklists and briefs free to use?",
    a: "Yes. Every checklist, brief and routine on this page is free to read and use with your own team or with another studio. The Shopify store checklist is also a free download. We ask only that you link to the original article if you republish it.",
  },
  {
    q: "Which brief should I fill in before asking for a quote?",
    a: "Use the brief that matches the job. There is one for a service business website, one for a Shopify product page, one for a video editor and one for a SaaS demo video. A filled-in brief lets any studio quote the real scope instead of guessing, which keeps the price and timeline closer to what you get.",
  },
  {
    q: "Can Pixel2Tech run a checklist on our site or store for us?",
    a: "Yes. Send us the link and tell us which checklist you want checked, and we will review it and come back with what we found and what it would take to fix. If the fixes are part of a larger project, we quote them in writing before any work starts.",
  },
  {
    q: "Do you add new playbooks?",
    a: "Yes. When a project shows us a step that clients keep missing, we write it up as a checklist or routine. New ones appear on this page, on the blog and on the what's new page as soon as they are published.",
  },
];

export const Route = createFileRoute("/playbooks")({
  head: () => {
    const head = businessHead(
      "/playbooks",
      "Marketing playbooks, checklists and briefs",
      "Free marketing playbooks from Pixel2Tech, with checklists, project briefs and weekly routines for websites, Shopify stores, brands and video projects.",
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: PlaybooksPage,
});

function PlaybooksPage() {
  const posts = getPostSummaries().filter(isPlaybook);
  const kinds = PLAYBOOK_KINDS.map((k, i) => ({
    ...k,
    // Each article sits in the first kind that matches it.
    posts: posts.filter(
      (p) => k.match.test(p.slug) && !PLAYBOOK_KINDS.slice(0, i).some((e) => e.match.test(p.slug)),
    ),
  })).filter((k) => k.posts.length > 0);

  return (
    <PageShell>
      <HubHero
        crumb="Playbooks"
        eyebrow="Learn"
        title="Marketing playbooks for"
        highlight="websites, stores, brands and video"
        answer="Pixel2Tech publishes free checklists, project briefs and routines that you can use while you work. Each one comes from a step we check on client projects."
      >
        <JumpLinks
          links={[
            { id: "shopify-checklist", label: "Shopify store checklist" },
            ...kinds.map((k) => ({ id: k.id, label: k.title })),
          ]}
        />
      </HubHero>

      <section id="shopify-checklist" className="scroll-mt-32 bg-background pb-8">
        <div className={HUB_CONTAINER}>
          <div className="grid gap-6 rounded-3xl border border-border bg-muted/50 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"
            >
              <ClipboardCheck className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Free Shopify store checklist
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Walk through your store the way a first-time shopper does, page by page, and note
                what slows them down.
              </p>
            </div>
            <Link
              to="/resources/shopify-store-checklist"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 ${HUB_FOCUS}`}
            >
              Open the checklist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {kinds.map((k, i) => (
        <HubSection key={k.id} id={k.id} title={k.title} intro={k.intro} muted={i % 2 === 0}>
          <PostGrid posts={k.posts} />
        </HubSection>
      ))}

      <section
        aria-labelledby="playbooks-faq"
        className="scroll-mt-32 bg-background py-16 md:py-24"
      >
        <div className={`${HUB_CONTAINER} max-w-4xl`}>
          <h2
            id="playbooks-faq"
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Questions about the playbooks
          </h2>
          <Faq items={FAQS} className="mt-8" />
        </div>
      </section>

      <section aria-labelledby="playbooks-cta" className="bg-background pb-16 md:pb-24">
        <div className={HUB_CONTAINER}>
          <ClosingCta
            id="playbooks-cta"
            title="Want us to run the checklist for you?"
            body="Send us your site or store and the checklist you care about. We reply within one business day."
            source="playbooks_cta"
          />
          <RelatedPages
            links={[
              { label: "Guides", desc: "Buyer guides grouped by topic", to: "/guides" },
              { label: "Services", desc: "Everything we design and build", to: "/services" },
              { label: "Pricing", desc: "How we quote a project", to: "/pricing" },
              { label: "Help center", desc: "Answers about working with us", to: "/help-center" },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
