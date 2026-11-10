import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ComparisonTable } from "@/components/comparison-table";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { STATS } from "@/lib/site-config";
import { SUPERSIDE_CHECKED, SUPERSIDE_SOURCES } from "@/lib/superside-facts";

const PATH = "/superside-vs-pixel2tech";

const FAQS: FaqItem[] = [
  {
    q: "What is the main difference between Superside and Pixel2Tech?",
    a: "How you buy. Superside sells creative capacity on an annual subscription for in-house teams. Pixel2Tech scopes and quotes each project in writing, and builds websites and stores as well as designing them.",
  },
  {
    q: "Does Pixel2Tech offer unlimited requests?",
    a: "No. We agree the deliverables, revision rounds and timeline in the proposal before work starts, and quote anything outside that scope before we do it. If you need a queue of small requests every week, a subscription service may suit you better.",
  },
  {
    q: "Can we use Superside and Pixel2Tech together?",
    a: "Yes. Some teams keep a subscription for campaign creative and hire a project studio for a one-off job, such as a Shopify store build or a website redesign. Tell us which files and brand guidelines we should work from.",
  },
  {
    q: "Is this comparison neutral?",
    a: `It is written by Pixel2Tech, so read it as our view. Every statement about Superside comes from its own public pages, checked on ${SUPERSIDE_CHECKED.label}, and we link to them so you can check. Pixel2Tech is not affiliated with Superside.`,
  },
  {
    q: "How do I get a quote from Pixel2Tech?",
    a: "Book a free call or send a project brief. After we review the scope we send a written proposal with a fixed price, milestones, revision rounds and a timeline. Work starts once you accept it.",
  },
];

export const Route = createFileRoute("/superside-vs-pixel2tech")({
  head: () => {
    const head = businessHead(
      PATH,
      "Superside vs Pixel2Tech: Pricing, Terms, Services",
      "Superside vs Pixel2Tech compared from public facts: subscription vs fixed project quotes, minimums, commitment, services and website builds.",
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: SupersideVsPixel2Tech,
});

function SupersideVsPixel2Tech() {
  return (
    <BusinessLanding
      eyebrow="Superside vs Pixel2Tech"
      title="Superside vs Pixel2Tech: subscription or fixed-quote projects"
      intro={`Both teams produce design and video for brands, but they are bought in different ways. Superside is an enterprise creative subscription. Pixel2Tech is an in-house studio in Lahore, Pakistan that quotes each project in writing for businesses in the US, UK, Canada and the EU, with ${STATS.projects} projects delivered since ${STATS.foundingYear}. The Superside details below come from its own website, checked on ${SUPERSIDE_CHECKED.label}.`}
      capabilities={[
        {
          title: "Pricing model",
          body: "A monthly subscription budget, or a fixed price for a defined scope.",
        },
        {
          title: "Commitment",
          body: "An annual term, or a project that ends at handover.",
        },
        {
          title: "Websites",
          body: "Design files for your developers, or a site built and launched.",
        },
        {
          title: "Who it suits",
          body: "Enterprise in-house teams, or startups, small businesses and agencies.",
        },
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ComparisonTable
          heading="Superside and Pixel2Tech side by side"
          columns={["Superside", "Pixel2Tech"]}
          rows={[
            {
              label: "How you buy",
              values: [
                "Subscription: a Flex or Dedicated plan, plus fixed-scope projects that can sit on top of a subscription.",
                "Per project, with a fixed written quote. Ongoing work such as social media or monthly video can run as a retainer.",
              ],
            },
            {
              label: "Published price",
              values: [
                "From $15,000 a month on an annual term, plus a $1,000 monthly software fee. Dedicated teams from $30,000 a month on a 12-month term.",
                "No price list. Each proposal states the price, milestones, revision rounds, currency and timeline.",
              ],
            },
            {
              label: "Commitment",
              values: [
                "All subscriptions run on an annual commitment. Unused Flex budget rolls over for up to three months.",
                "A project ends at handover. Retainers run for any minimum term in the proposal, then month to month with 30 days' notice.",
              ],
            },
            {
              label: "Trying it first",
              values: [
                "A paid Exploratory Project, described as a pathway toward a subscription.",
                "Start with one project. A free scoping call comes before any quote.",
              ],
            },
            {
              label: "Built for",
              values: [
                "Enterprises and in-house creative teams that need to scale output.",
                "Startups, small businesses and agencies in the US, UK, Canada and the EU.",
              ],
            },
            {
              label: "Services",
              values: [
                "Design, video, photo, UI/UX, illustration, motion, 3D, AR, video editing, audio, creative and brand strategy, AI consulting and training.",
                "Branding and design, websites, Shopify and WordPress, custom apps, automation and CRM, AI chatbots, SEO, social media and email, video editing and ads.",
              ],
            },
            {
              label: "Websites",
              values: [
                "Design files, design systems and documentation for your development team to implement.",
                "Design and development on Shopify, WordPress, React or Next.js, through launch, redirects and handover.",
              ],
            },
            {
              label: "Team",
              values: [
                "Senior creatives with global coverage, working through Superside's own platform.",
                "An in-house team in Lahore, Pakistan, working over Google Meet, email and WhatsApp.",
              ],
            },
          ]}
          footnote={
            <>
              Superside details from its{" "}
              <a
                href={SUPERSIDE_SOURCES.pricing}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                pricing page
              </a>
              ,{" "}
              <a
                href={SUPERSIDE_SOURCES.home}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                homepage
              </a>{" "}
              and{" "}
              <a
                href={SUPERSIDE_SOURCES.webDesign}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                web design page
              </a>
              , checked {SUPERSIDE_CHECKED.label}. Prices and terms may have changed since.
              Pixel2Tech is not affiliated with Superside.
            </>
          }
        />
        <ContentGrid
          heading="Choose Superside if"
          items={[
            {
              title: "You need capacity every month",
              body: "Your in-house team runs campaigns all year and wants an outside team on an annual plan.",
            },
            {
              title: "You need many specialisms",
              body: "3D, AR, illustration, localization and audio under one contract matter more than a single project price.",
            },
            {
              title: "You want the platform",
              body: "Briefing, budget tracking, brand tools and creative analytics in one platform, which Superside's pricing page lists in every subscription.",
            },
          ]}
        />
        <ContentGrid
          heading="Choose Pixel2Tech if"
          items={[
            {
              title: "You have a defined project",
              body: "A brand identity, a new website, a Shopify store or a set of videos, with a fixed quote for that scope.",
            },
            {
              title: "You need it built and launched",
              body: "We develop the site or store, set up redirects and tracking, and hand over the files and logins.",
            },
            {
              title: "You are a smaller team or an agency",
              body: "A startup, a small business, or an agency that needs white label work delivered under its own name.",
            },
          ]}
        />
        <LandingFaq heading="Superside vs Pixel2Tech questions" items={FAQS} />
        <LandingLinks
          heading="Keep comparing"
          links={[
            {
              href: "/superside-alternative",
              title: "Superside alternatives",
              desc: "Types of Superside competitors and when each one fits.",
            },
            {
              href: "/services",
              title: "Pixel2Tech services",
              desc: "Every service we offer, with deliverables and FAQs.",
            },
            {
              href: "/portfolio",
              title: "Our portfolio",
              desc: "Brand, website, store and video work, with agency partner work labelled.",
            },
          ]}
        />
        <ProjectNextStep
          title="Want a fixed quote to compare?"
          body="Send the brief you would give a subscription team. We will come back with questions or a written quote for that scope."
          source="superside-vs-next-step"
          label="Get a fixed quote"
        />
      </div>
    </BusinessLanding>
  );
}
