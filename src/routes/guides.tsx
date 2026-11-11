import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { PageShell } from "@/components/site-chrome";
import {
  HUB_CONTAINER,
  HubHero,
  HubSection,
  JumpLinks,
  PostGrid,
  RelatedPages,
} from "@/components/resource-hub";
import { getPostSummaries } from "@/lib/blog-index";
import { businessHead } from "@/lib/page-seo";
import { isPlaybook } from "@/lib/learn-content";

/**
 * Buyer guides, grouped by the service a reader is researching. Each group
 * links to the matching service page, so a reader can go from learning to a
 * quote. Checklists and briefs live on /playbooks instead.
 */
const TOPICS: {
  id: string;
  title: string;
  intro: string;
  tags: string[];
  service: { label: string; slug: string };
}[] = [
  {
    id: "branding",
    title: "Branding and design guides",
    intro:
      "How a brand identity project runs, what a brand guide should hold and when a refresh beats a rebrand.",
    tags: ["Branding", "Design"],
    service: { label: "Branding services", slug: "branding-and-design" },
  },
  {
    id: "websites",
    title: "Website and Shopify guides",
    intro:
      "What websites and stores cost, how to compare quotes and what to fix when a site stops bringing in leads or sales.",
    tags: ["Web Development", "Shopify", "WordPress", "E-commerce", "Custom Platforms"],
    service: { label: "Web design", slug: "website-development" },
  },
  {
    id: "seo",
    title: "SEO and search guides",
    intro:
      "How service businesses get found on Google and in AI answers, and which mistakes cost traffic after a redesign.",
    tags: ["SEO"],
    service: { label: "SEO and search growth", slug: "seo-and-search-growth" },
  },
  {
    id: "video",
    title: "Video and ad creative guides",
    intro:
      "How to brief an editor, choose formats for each placement and test ad creative on a small budget.",
    tags: ["Video Editing", "Video & Ads", "Marketing", "Social Media", "Email Marketing"],
    service: { label: "Video production and editing", slug: "video-editing-and-ads" },
  },
  {
    id: "ai-automation",
    title: "AI and automation guides",
    intro:
      "Where AI assistants and workflow automation save a small team time, what they cost and how to keep a person in the loop.",
    tags: [
      "AI",
      "AI Solutions",
      "Automation",
      "Automation & CRM",
      "AI Automation",
      "Business Systems",
    ],
    service: { label: "AI consulting", slug: "ai-consulting" },
  },
  {
    id: "outsourcing",
    title: "Outsourcing guides",
    intro:
      "What to check before you hire a design, web or video team in another country, and how to run the work once you do.",
    tags: ["Outsourcing", "Business", "Development"],
    service: { label: "All services", slug: "" },
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Who writes the Pixel2Tech guides?",
    a: "The people who do the work write them. Designers write the branding guides, developers write the website and Shopify guides, and editors write the video guides. Each article names its author and the date it was published or last updated, so you can judge how current the advice is.",
  },
  {
    q: "What is the difference between a guide and a playbook?",
    a: "A guide explains a decision, such as what a website should cost or whether to rebrand. A playbook is something you use while you work, such as a launch checklist, a project brief or a weekly routine. Guides are on this page. Checklists, briefs and routines are on the playbooks page.",
  },
  {
    q: "Can I use these guides to brief another agency?",
    a: "Yes. The guides are written for buyers, so the questions and checklists in them work with any studio or freelancer. If you would like us to quote the work, send the brief through the contact page and we will reply within one business day with questions or a proposal.",
  },
  {
    q: "How often do you publish new guides?",
    a: "We publish when we have something useful to say about work we do, rather than on a fixed schedule. The newest articles appear first on the blog and on the what's new page. You can also subscribe to the newsletter on the blog to get new articles by email.",
  },
];

export const Route = createFileRoute("/guides")({
  head: () => {
    const head = businessHead(
      "/guides",
      "Buyer guides for design, websites, SEO and AI",
      "Buyer guides from the Pixel2Tech team on branding, websites, Shopify, SEO, video and AI automation, grouped by topic and linked to the matching service.",
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: GuidesPage,
});

function GuidesPage() {
  const posts = getPostSummaries().filter((p) => !isPlaybook(p));
  const groups = TOPICS.map((t) => ({
    ...t,
    posts: posts.filter((p) => t.tags.includes(p.tag)).slice(0, 6),
  })).filter((t) => t.posts.length > 0);

  return (
    <PageShell>
      <HubHero
        crumb="Guides"
        eyebrow="Learn"
        title="Buyer guides for design,"
        highlight="web, video and AI work"
        answer="Pixel2Tech publishes buyer guides on branding, websites, Shopify, SEO, video and AI automation. Pick a topic to read what the work involves, what drives its cost and what to ask before you hire anyone."
      >
        <JumpLinks
          links={groups.map((g) => ({ id: g.id, label: g.title.replace(" guides", "") }))}
        />
      </HubHero>

      {groups.map((g, i) => (
        <HubSection
          key={g.id}
          id={g.id}
          title={g.title}
          intro={g.intro}
          muted={i % 2 === 0}
          action={
            g.service.slug
              ? {
                  label: g.service.label,
                  to: "/services/$slug",
                  params: { slug: g.service.slug },
                }
              : { label: g.service.label, to: "/services" }
          }
        >
          <PostGrid posts={g.posts} />
        </HubSection>
      ))}

      <section aria-labelledby="guides-faq" className="scroll-mt-32 bg-background py-16 md:py-24">
        <div className={`${HUB_CONTAINER} max-w-4xl`}>
          <h2
            id="guides-faq"
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Questions about the guides
          </h2>
          <Faq items={FAQS} className="mt-8" />
        </div>
      </section>

      <section aria-labelledby="guides-cta" className="bg-background pb-16 md:pb-24">
        <div className={HUB_CONTAINER}>
          <ClosingCta
            id="guides-cta"
            title="Read enough? Talk to the team"
            body="Tell us what you are planning and we will recommend where to start. We reply within one business day."
            source="guides_cta"
          />
          <RelatedPages
            links={[
              { label: "Playbooks", desc: "Checklists, briefs and routines", to: "/playbooks" },
              { label: "Blog", desc: "Every article, newest first", to: "/blog" },
              {
                label: "Customer stories",
                desc: "What changed after past projects",
                to: "/results",
              },
              { label: "Help center", desc: "Answers about working with us", to: "/help-center" },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
