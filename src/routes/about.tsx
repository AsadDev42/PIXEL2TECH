import { ClosingCta } from "@/components/closing-cta";
import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Layers, Sparkles, Target, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { TeamSlider } from "@/components/team-slider";
import { ValueCards, type ValueCard } from "@/components/value-cards";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM, TEAM_SIZE } from "@/lib/team";
import officeImg from "@/assets/office.webp.asset.json";

const OG_IMAGE =
  "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const PAGE_URL = `${SITE.url}/about`;
const ORG_REF = { "@id": `${SITE.url}/#organization` };
const TITLE = "About Pixel2Tech | Design, Web & Video Team in Lahore";
const DESCRIPTION = `Meet the ${TEAM_SIZE}-person in-house team behind Pixel2Tech: designers, developers and video editors in Lahore, working with clients in the US, UK, Gulf and Europe.`;

/** People with a profile page are the founders (same rule as the root Organization schema). */
const FOUNDERS = TEAM.filter((m) => m.founder);

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&fm=webp&q=70`;

type Photo = { id: string; alt: string; aspect: string };

/** Hero collage: two staggered columns of two photos each. */
const HERO_COLUMNS: Photo[][] = [
  [
    {
      id: "photo-1522071820081-009f0129c71c",
      alt: "Creative team collaborating",
      aspect: "aspect-[3/4]",
    },
    { id: "photo-1531403009284-440f080d1e12", alt: "Design workspace", aspect: "aspect-square" },
  ],
  [
    { id: "photo-1552664730-d307ca884978", alt: "Strategy session", aspect: "aspect-square" },
    { id: "photo-1517245386807-bb43f82c33c4", alt: "Developer at work", aspect: "aspect-[3/4]" },
  ],
];

const TEAM_PHOTO_ID = "photo-1557804506-669a67965ba0";

const HERO_STATS = [
  { value: STATS.projects, label: "Projects delivered" },
  { value: STATS.clients, label: "Clients" },
  { value: String(TEAM_SIZE), label: "Team members" },
];

const VALUES: ValueCard[] = [
  {
    title: "Every skill in-house",
    desc: "Brand design, web development, video and automation are done by our own team, so nothing gets lost between vendors.",
    Icon: Sparkles,
  },
  {
    title: "Design and code together",
    desc: "The people who design your site and the people who build it work side by side, so what you approve is what gets built.",
    Icon: Layers,
  },
  {
    title: "Planned around your goals",
    desc: "We start with what the work needs to achieve, such as more leads, more sales or fewer hours on admin, and plan the project around it.",
    Icon: Target,
  },
  {
    title: "Built to grow with you",
    desc: "Sites, stores and systems are set up so you can add pages, products and features later without starting over.",
    Icon: TrendingUp,
  },
];

const ABOUT_FAQS: FaqItem[] = [
  {
    q: "Who will work on my project?",
    a: "People from the team on this page. Brand design, web development, video editing and automation are all done in-house by Pixel2Tech staff.",
  },
  {
    q: "Do you outsource or subcontract work?",
    a: "No. Design, development, content and deployment all happen in-house, so your project isn't passed between outside vendors.",
  },
  {
    q: "Where is the team based?",
    a: `In ${SITE.location}. We work with clients abroad over email, WhatsApp and Google Meet.`,
  },
  {
    q: "When was Pixel2Tech founded?",
    a: `${FOUNDERS.map((m) => m.name).join(" and ")} founded Pixel2Tech in ${STATS.foundingYear}. Since then the team has delivered ${STATS.projects} projects for ${STATS.clients} clients.`,
  },
];

const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

export const Route = createFileRoute("/about")({
  component: AboutPage,
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
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Pixel2Tech",
          url: PAGE_URL,
          mainEntity: ORG_REF,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": TEAM.map((m) => ({
            "@type": "Person",
            ...(m.profile
              ? { "@id": `${SITE.url}${m.profile}#person`, url: `${SITE.url}${m.profile}` }
              : {}),
            name: m.name,
            jobTitle: m.role,
            image: absoluteUrl(m.img),
            ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
            worksFor: ORG_REF,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
          ],
        }),
      },
      faqJsonLd(ABOUT_FAQS),
    ],
  }),
});

const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-2xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const INLINE_LINK =
  "font-semibold text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary";

function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="about-title" className="bg-background py-12 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-16">
          <div className="min-w-0">
            <p className={EYEBROW}>About Pixel2Tech</p>
            <h1
              id="about-title"
              className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl xl:text-[56px]"
            >
              A small studio for <span className="text-primary">brand, web, video</span> and
              automation work
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Designers, developers, video editors and an automation lead, working from Lahore with
              clients in the US, UK, Gulf and Europe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookCallButton
                source="about_hero"
                className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              />
              <Link
                to="/portfolio"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
              >
                See our work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex min-w-0 flex-col-reverse">
                  <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            {HERO_COLUMNS.map((column, c) => (
              <div key={c} className={`space-y-3 sm:space-y-4 ${c === 1 ? "pt-8 sm:pt-12" : ""}`}>
                {column.map((photo, p) => (
                  <div
                    key={photo.id}
                    className={`${photo.aspect} overflow-hidden rounded-2xl bg-muted sm:rounded-3xl`}
                  >
                    {/* Above the fold on desktop: load right away instead of lazily. */}
                    <img
                      loading="eager"
                      decoding="async"
                      fetchPriority={c === 0 && p === 0 ? "high" : "auto"}
                      src={unsplash(photo.id, 800)}
                      srcSet={`${unsplash(photo.id, 400)} 400w, ${unsplash(photo.id, 800)} 800w`}
                      sizes="(min-width: 1280px) 290px, (min-width: 768px) 25vw, 50vw"
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section aria-labelledby="about-story-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-12 md:px-10 lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-background sm:rounded-3xl">
            <img
              loading="lazy"
              decoding="async"
              src={officeImg.url}
              alt="Pixel2Tech team working at the Lahore office"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className={EYEBROW}>Who we are</p>
            <h2 id="about-story-title" className={`mt-4 ${H2}`}>
              Designers, developers and editors in one Lahore studio
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {FOUNDERS.map((m, i) => (
                <Fragment key={m.name}>
                  {i > 0 && " and "}
                  {m.profile ? (
                    <Link to={m.profile} className={INLINE_LINK}>
                      {m.name}
                    </Link>
                  ) : (
                    m.name
                  )}
                </Fragment>
              ))}{" "}
              started Pixel2Tech in {STATS.foundingYear}. Today the studio designs brands, builds
              websites and apps, edits video and automates the busywork behind them.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              You can bring us one job, like a logo, a Shopify store or a set of ad edits. Because
              design, web, video and automation sit with the same team, the next job doesn&apos;t
              have to go to someone new.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="about-team-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className={EYEBROW}>Our team</p>
            <h2 id="about-team-title" className={`mt-4 ${H2}`}>
              Meet the people you&apos;ll work with
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Everyone is in-house, and each person focuses on one craft, from brand design and web
              development to video editing and automation.
            </p>
          </div>
        </div>
        <TeamSlider />
      </section>

      {/* Values: the only "Why Pixel2Tech" block on the site */}
      <section aria-labelledby="about-values-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="min-w-0">
              <p className={EYEBROW}>Why Pixel2Tech</p>
              <h2 id="about-values-title" className={`mt-4 ${H2}`}>
                Why work with us
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                The range of an in-house creative team, without the in-house payroll.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-background sm:aspect-video sm:rounded-3xl">
              <img
                loading="lazy"
                decoding="async"
                src={unsplash(TEAM_PHOTO_ID, 1200)}
                srcSet={`${unsplash(TEAM_PHOTO_ID, 800)} 800w, ${unsplash(TEAM_PHOTO_ID, 1200)} 1200w`}
                sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 100vw"
                alt="A team reviewing sticky notes on a whiteboard during a meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ValueCards items={VALUES} className="mt-10 sm:mt-12" />
        </div>
      </section>

      {/* FAQ: team and company questions only (buyer questions live on Home, scope on Services) */}
      <section aria-labelledby="about-faq-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 id="about-faq-title" className={`text-center ${H2}`}>
            Questions about the team
          </h2>
          <Faq items={ABOUT_FAQS} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="about-cta-title" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <ClosingCta
            id="about-cta-title"
            title="Want this team on"
            highlight="your project?"
            body="Tell us what you're planning. We reply within one business day, or you can book a call and talk it through."
            source="about_cta"
          />
        </div>
      </section>
    </PageShell>
  );
}
