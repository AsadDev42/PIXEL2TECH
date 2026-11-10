import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { PRICING_POINTS } from "@/lib/service-pages";
import { STATS } from "@/lib/site-config";
import { SUPERSIDE_CHECKED, SUPERSIDE_FACTS, SUPERSIDE_SOURCES } from "@/lib/superside-facts";

const PATH = "/superside-alternative";

const FAQS: FaqItem[] = [
  {
    q: "What is a good Superside alternative?",
    a: "It depends on how you want to buy creative work. If you need a steady, high volume of assets for an in-house team, another subscription service is the closest match. If you need a defined project, such as a brand identity, a website or store build, or a batch of video edits, a project-based studio such as Pixel2Tech, which quotes each job in writing, is a better fit.",
  },
  {
    q: "How much does Superside cost?",
    a: `When we checked its pricing page on ${SUPERSIDE_CHECKED.label}, Superside said subscriptions start at a $15,000 monthly minimum on an annual term, plus a $1,000 monthly software fee, and that Dedicated teams start at $30,000 a month on a 12-month term. Prices change, so confirm the current figures on superside.com/pricing.`,
  },
  {
    q: "Is Pixel2Tech a design subscription?",
    a: "No. Each project gets a fixed quote in writing that sets out the scope, price, milestones, revision rounds and timeline. Ongoing work, such as monthly social media or video editing, can run as a retainer. Retainers run for any minimum term stated in the proposal and then month to month until either side cancels with 30 days' written notice.",
  },
  {
    q: "Is Pixel2Tech cheaper than Superside?",
    a: "We can't give you a fair like-for-like number: we don't publish a price list, and the two models price different things. A Superside budget is a monthly subscription; a Pixel2Tech quote covers one defined scope. Send us the brief you would give a subscription team and compare our written quote with what you would spend.",
  },
  {
    q: "Can Pixel2Tech build the website, not only design it?",
    a: "Yes. We design and develop websites and stores on Shopify, WordPress, React or Next.js, and take them through launch and handover. Final files and logins transfer to you once the project is paid in full, as set out in the proposal.",
  },
  {
    q: "Is Pixel2Tech affiliated with Superside?",
    a: `No. Pixel2Tech is an independent studio and has no partnership with Superside. Superside is a trademark of its owner. The facts about Superside on this page come from its public website, checked on ${SUPERSIDE_CHECKED.label}.`,
  },
  {
    q: "Where is Pixel2Tech based, and who do you work with?",
    a: "We are based in Lahore, Pakistan, and work with businesses in the US, UK, Canada and the EU, plus agencies that resell our work under their own name. Calls run over Google Meet, and day-to-day updates over email or WhatsApp.",
  },
];

export const Route = createFileRoute("/superside-alternative")({
  head: () => {
    const head = businessHead(
      PATH,
      "Superside Alternative for Project-Based Work",
      "Looking for a Superside alternative? Pixel2Tech quotes branding, website, Shopify and video projects in writing for US, UK, Canadian and EU businesses.",
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: SupersideAlternative,
});

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="underline underline-offset-4 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function SupersideAlternative() {
  return (
    <BusinessLanding
      eyebrow="Superside alternative"
      title="A Superside alternative for project-based design, web and video work"
      intro={`Superside is built for enterprise creative teams on annual subscriptions. If you need a defined project instead, such as a brand identity, a Shopify store, a website redesign or a batch of video edits, Pixel2Tech quotes each one in writing. We are an in-house studio based in Lahore, Pakistan, working with businesses in the US, UK, Canada and the EU, with ${STATS.projects} projects delivered since ${STATS.foundingYear}. Pixel2Tech is not affiliated with Superside.`}
      capabilities={[
        {
          title: "Branding and design",
          body: "Logos, brand guidelines, social templates and print artwork, designed in-house.",
        },
        {
          title: "Websites, built and launched",
          body: "Design and development in React, Next.js or WordPress, through launch and handover.",
        },
        {
          title: "Shopify stores",
          body: "Store setup, theme customization, product pages, apps and migrations.",
        },
        {
          title: "Video editing and ads",
          body: "Reels, YouTube, podcasts and ad creative edited from your footage.",
        },
        {
          title: "Social media and email",
          body: "Content calendars, post design and email campaigns for small marketing teams.",
        },
        {
          title: "Automation and AI",
          body: "CRM setup, workflow automation and AI chatbots that take busywork off your team.",
        },
      ]}
      projects={[
        "brand-identity-design-collection",
        "histreet-shopify-store",
        "short-form-social-media-videos",
        "cargo-health-wordpress-website",
        "performance-marketing-video-ads",
        "unze-london-shopify-store",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="What Superside offers, from its own website"
          intro={`We checked superside.com on ${SUPERSIDE_CHECKED.label}. Prices and terms can change, so confirm them on Superside's pricing page before you decide.`}
          items={[
            { title: "A subscription model", body: SUPERSIDE_FACTS.model },
            { title: "Built for in-house teams", body: SUPERSIDE_FACTS.audience },
            {
              title: "Published minimums",
              body: `${SUPERSIDE_FACTS.minimum} ${SUPERSIDE_FACTS.dedicated}`,
            },
            { title: "Starting with a project", body: SUPERSIDE_FACTS.projects },
          ]}
        />
        <p className="-mt-6 pb-4 text-sm leading-relaxed text-muted-foreground">
          Sources: <SourceLink href={SUPERSIDE_SOURCES.pricing}>Superside pricing</SourceLink> and{" "}
          <SourceLink href={SUPERSIDE_SOURCES.home}>Superside homepage</SourceLink>, checked{" "}
          {SUPERSIDE_CHECKED.label}.
        </p>
        <ContentGrid
          heading="When Superside is the better fit"
          intro="Superside does things a small studio does not. If these describe your team, it is worth a call with them."
          items={[
            {
              title: "Steady, high creative volume",
              body: "Your in-house team produces campaigns every month and needs more hands on an annual plan, with the budget that the published minimums require.",
            },
            {
              title: "A very wide range of formats",
              body: `You need many specialisms under one contract. ${SUPERSIDE_FACTS.range}`,
            },
            {
              title: "A platform on the same contract",
              body: "You want briefing, budget tracking, brand tools and creative analytics in one platform, which Superside's pricing page lists as part of every subscription.",
            },
          ]}
        />
        <ContentGrid
          heading="When Pixel2Tech is the better fit"
          items={[
            {
              title: "A defined project, priced up front",
              body: "You know what you need, such as a rebrand, a new site or a set of ads, and want a fixed quote for that scope rather than a monthly budget.",
            },
            {
              title: "A site that is built, not only designed",
              body: "You need the website or Shopify store developed and launched. We design, build, set up redirects and hand over the files and logins.",
            },
            {
              title: "Startups, small businesses and agencies",
              body: "You are a smaller team in the US, UK, Canada or the EU, or an agency that needs white label build and editing capacity under its own name.",
            },
          ]}
        />
        <ContentGrid
          heading="Types of Superside competitors"
          intro="People searching for companies like Superside usually choose between four ways of buying creative work."
          items={[
            {
              title: "Other design subscriptions",
              body: "A flat monthly fee for a queue of design requests. Good for steady streams of smaller tasks, less suited to builds with a fixed launch date.",
            },
            {
              title: "Freelancers",
              body: "Individual designers, developers or editors. Flexible and direct, but you manage the brief, the schedule and the handover yourself.",
            },
            {
              title: "Agencies on retainer",
              body: "A local or specialist agency with a monthly retainer. Close collaboration, usually with a minimum term.",
            },
            {
              title: "Project-based studios",
              body: "A studio like Pixel2Tech that scopes and quotes each job. You pay for a defined result, and can add a retainer for ongoing work.",
            },
          ]}
        />
        <ContentGrid
          heading="How Pixel2Tech prices work"
          items={PRICING_POINTS.map((p) => ({ title: p.title, body: p.desc }))}
        />
        <LandingFaq heading="Superside alternative questions" items={FAQS} />
        <LandingLinks
          heading="Compare and plan"
          links={[
            {
              href: "/superside-vs-pixel2tech",
              title: "Superside vs Pixel2Tech",
              desc: "A side-by-side table of pricing model, commitment and services.",
            },
            {
              href: "/services",
              title: "All Pixel2Tech services",
              desc: "Branding, websites, Shopify, apps, automation, SEO, social and video.",
            },
            {
              href: "/website-redesign-services",
              title: "Website redesign services",
              desc: "New design, rebuild and redirects, with a fixed quote.",
            },
            {
              href: "/outsource-video-editing",
              title: "Outsource video editing",
              desc: "Reels, YouTube, podcasts and ads edited from your footage.",
            },
            {
              href: "/white-label-web-development",
              title: "White label for agencies",
              desc: "Shopify, WordPress and custom builds under your agency's name.",
            },
            {
              href: "/portfolio",
              title: "Our portfolio",
              desc: "Brand, website, store and video work, with agency partner work labelled.",
            },
          ]}
        />
        <ProjectNextStep
          title="Have a project you would rather quote than subscribe to?"
          body="Send the brief, the deadline and any designs or footage you already have. We will reply with questions or a fixed written quote."
          source="superside-alternative-next-step"
          label="Get a fixed quote"
        />
      </div>
    </BusinessLanding>
  );
}
