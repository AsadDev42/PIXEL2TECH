import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { PORTFOLIO_STATS } from "@/lib/portfolio-stats";

const PATH = "/shopify-development-agency";
const { shopify, shopifyDirect } = PORTFOLIO_STATS;
const partnered = shopify - shopifyDirect;

const FAQS: FaqItem[] = [
  {
    q: "What does a Shopify development agency do?",
    a: "A Shopify development agency plans, designs and builds your online store on Shopify: theme setup or a custom theme, product and collection pages, apps and integrations, payments and shipping settings, and the speed and SEO basics. We also take on fixes and new features for stores that are already live.",
  },
  {
    q: "How much does it cost to have a Shopify store built?",
    a: "It depends on the number of templates, how much is custom rather than theme settings, the apps and integrations you need and how many products we load. After a free scoping call we send a fixed quote in writing. Our Shopify store cost guide explains what moves the price.",
  },
  {
    q: "Do you work with brands in the United States?",
    a: `Yes. Our portfolio has ${shopify} Shopify stores, including stores for brands in the United States, the United Kingdom, Canada, Australia and Europe. Many of the international stores were built as development partner for agencies, and their project pages say so.`,
  },
  {
    q: "Can you build a headless Shopify store?",
    a: "Yes, when the brand needs it. We built Breakout's storefront on Shopify Hydrogen, and worked as development partner on a headless store with a Next.js front end. For most stores a well built Online Store 2.0 theme is faster to launch and easier to run, and we will say so if that fits you better.",
  },
  {
    q: "Can you improve or fix a store we already have?",
    a: "Yes. Send us the store URL and what is not working, such as a slow product page, a broken app, tracking that stopped after a checkout change or a theme you want to customize. We review it and quote the fix before we change anything.",
  },
  {
    q: "Do you build Shopify stores for agencies under their name?",
    a: `Yes. ${partnered} of the Shopify stores in our portfolio were built as white-label development partner for agencies. See our white label web development page for how briefs, reviews and handovers work.`,
  },
];

export const Route = createFileRoute("/shopify-development-agency")({
  head: () => {
    const head = businessHead(
      PATH,
      "Shopify Development Agency for Online Brands",
      `Pixel2Tech is a Shopify development agency: custom themes, headless storefronts, apps and integrations. ${shopify} Shopify stores built for brands and agencies.`,
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: ShopifyDevelopmentAgency,
});

function ShopifyDevelopmentAgency() {
  return (
    <BusinessLanding
      eyebrow="Shopify development agency"
      title="Shopify development agency for brands that sell online"
      intro={`We design and build Shopify stores: theme setup and customization, custom themes, headless storefronts, apps and integrations. Our portfolio has ${shopify} Shopify stores across fashion, beauty, home and wellness, ${shopifyDirect} built directly for brands and ${partnered} as development partner for agencies.`}
      capabilities={[
        {
          title: "Store design and build",
          body: "Home, collection, product, cart and content pages designed around how your customers shop, then built and tested on mobile and desktop before launch.",
        },
        {
          title: "Custom Shopify themes",
          body: "Online Store 2.0 themes customized with your own sections, or a custom theme when the design needs it, so your team can still edit pages without a developer.",
        },
        {
          title: "Headless Shopify",
          body: "Hydrogen or Next.js storefronts for brands that need custom front ends, with the catalog, checkout and orders still running on Shopify.",
        },
        {
          title: "Apps, integrations and migrations",
          body: "Reviews, loyalty, subscriptions, Klaviyo, multi-currency with Shopify Markets, installment payments, and moving a store to Shopify from another platform.",
        },
      ]}
      projects={[
        "breakout-shopify-store",
        "rsvlts-shopify-store",
        "miniso-pakistan-shopify-store",
        "dune-london-pakistan-shopify-store",
        "bombas-shopify-store",
        "skin-deep-shopify-store",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Theme, custom theme or headless?"
          intro="The right build depends on your catalog, your team and how often your pages change. We recommend one after the scoping call and explain why."
          items={[
            {
              title: "Customized theme",
              body: "A proven Online Store 2.0 theme set up with your brand, sections and apps. The quickest route to a fast, editable store for most brands.",
            },
            {
              title: "Custom theme",
              body: "Built for a design or shopping flow a standard theme cannot handle well, while keeping the Shopify editor your team already knows.",
            },
            {
              title: "Headless storefront",
              body: "A separate front end on Hydrogen or Next.js for content-heavy or highly custom brands. More flexible, and more to maintain, so we only suggest it when it pays off.",
            },
          ]}
        />
        <ContentGrid
          heading="How a Shopify project runs"
          numbered
          items={[
            {
              title: "Scoping call",
              body: "We look at your products, current store or platform, apps, markets and launch date, and ask what has to work on day one.",
            },
            {
              title: "Fixed quote in writing",
              body: "You get the scope, templates, integrations, review rounds and timeline in a proposal. Work starts once you approve it.",
            },
            {
              title: "Design, build and launch",
              body: "You review designs and the working store at agreed checkpoints. We test checkout, payments and tracking before the store goes live.",
            },
          ]}
        />
        <ContentGrid
          heading="How to choose a Shopify development agency"
          intro="Whoever you hire, these questions separate a store that launches well from one that needs rework."
          items={[
            {
              title: "Can they show live Shopify stores?",
              body: "Ask for stores you can open today, in a category close to yours, and check them on your phone.",
            },
            {
              title: "Who will build your store?",
              body: "Find out whether the work stays in-house or is passed to freelancers, and who you will talk to during the build.",
            },
            {
              title: "What is in the quote?",
              body: "A good quote lists templates, apps, integrations, product loading and review rounds, so you know what costs extra.",
            },
            {
              title: "What happens after launch?",
              body: "Agree who owns the theme code and accounts, and how fixes and new features are handled once the store is live.",
            },
          ]}
        />
        <LandingFaq heading="Shopify development questions" items={FAQS} />
        <LandingLinks
          heading="Plan your Shopify store"
          links={[
            {
              href: "/blog/shopify-store-cost",
              title: "What a Shopify store costs",
              desc: "Plans, apps, setup and the choices that move the price.",
            },
            {
              href: "/blog/shopify-theme-customization-vs-custom-theme",
              title: "Theme customization or custom theme",
              desc: "When a theme is enough and when custom work pays off.",
            },
            {
              href: "/blog/headless-shopify-commerce-guide",
              title: "Headless Shopify guide",
              desc: "What headless changes, what it costs to run, and who needs it.",
            },
            {
              href: "/services/wordpress-and-shopify",
              title: "Shopify and WordPress development",
              desc: "Our full service for stores and sites, from setup to migrations.",
            },
            {
              href: "/portfolio?category=ecom-stores",
              title: "Every Shopify store we built",
              desc: "Browse the stores in our portfolio, with screenshots and details.",
            },
            {
              href: "/white-label-web-development",
              title: "White label for agencies",
              desc: "Shopify and website builds delivered under your agency's name.",
            },
          ]}
        />
        <ProjectNextStep
          title="Planning a new Shopify store or a rebuild?"
          body="Tell us what you sell, where you sell it and what the store has to do. We will come back with questions and a fixed quote."
          source="shopify-agency-next-step"
          label="Discuss your Shopify store"
        />
      </div>
    </BusinessLanding>
  );
}
