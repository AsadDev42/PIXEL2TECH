import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { PORTFOLIO_STATS } from "@/lib/portfolio-stats";

const PATH = "/white-label-web-development";
const { whiteLabel, whiteLabelShopify, whiteLabelWordPress, whiteLabelOther } = PORTFOLIO_STATS;

const FAQS: FaqItem[] = [
  {
    q: "What is white label web development?",
    a: "White label web development means an outside team builds websites or online stores that your agency delivers to its clients under your own name. You keep the client relationship, the brief and the billing; the development partner does the agreed build work behind the scenes.",
  },
  {
    q: "How do you choose a white label web development agency?",
    a: "Look at real projects on the platform you sell, ask how they handle client confidentiality, and check how they scope work: a written quote, named deliverables and agreed review rounds. Send a small first project to see how they communicate before handing over larger builds.",
  },
  {
    q: "Will you contact our clients?",
    a: "Only if you want us to. By default your team runs client calls and approvals and we work through your project manager. Before the project starts we agree who talks to whom, so nobody is surprised.",
  },
  {
    q: "Which platforms do you build on?",
    a: `Mostly Shopify and WordPress, plus custom and Next.js builds. Of our ${whiteLabel} agency partner projects, ${whiteLabelShopify} are Shopify stores, ${whiteLabelWordPress} are WordPress sites and ${whiteLabelOther} are custom or Next.js builds.`,
  },
  {
    q: "How do you price white label work?",
    a: "Each project gets a fixed quote in writing after we review the brief, designs and functionality. Changes outside the agreed scope are quoted before we start them. We do not publish a price list, because builds vary too much for one to be accurate.",
  },
  {
    q: "Can we see work you have done for other agencies?",
    a: "Yes. Our portfolio shows agency partner projects, and each one is labelled as agency partner work so it never suggests the brand hired us directly. If your agreement with your client limits where the work can be shown, tell us before we start.",
  },
  {
    q: "Can you work from our Figma designs?",
    a: "Yes. Most agency projects start from an approved design. We review the files and the required pages and functionality, flag anything missing, and then scope the build.",
  },
];

export const Route = createFileRoute("/white-label-web-development")({
  head: () => {
    const head = businessHead(
      PATH,
      "White Label Web Development for Agencies",
      `White label web development for agencies: Shopify stores, WordPress sites and custom builds under your name. ${whiteLabel} agency partner projects delivered.`,
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: WhiteLabelWebDevelopment,
});

function WhiteLabelWebDevelopment() {
  return (
    <BusinessLanding
      eyebrow="White label web development"
      title="White label web development for agencies"
      intro={`Pixel2Tech, a Lahore-based development studio, is a white label partner for agencies: it builds Shopify stores, WordPress sites and custom websites that your agency delivers under its own name. ${whiteLabel} projects in our portfolio are agency partner work: ${whiteLabelShopify} Shopify stores, ${whiteLabelWordPress} WordPress sites and ${whiteLabelOther} custom or Next.js builds, for brands in the US, UK, Canada, Australia and Europe.`}
      capabilities={[
        {
          title: "White label Shopify development",
          body: "Theme customization, custom themes, product and collection templates, apps and integrations, built from your designs and your client's catalog.",
        },
        {
          title: "White label WordPress development",
          body: "Responsive WordPress and WooCommerce sites built from approved designs, with editable pages your client's team can manage after handover.",
        },
        {
          title: "Custom and Next.js builds",
          body: "Custom websites and headless front ends when a project needs more than a theme, scoped and quoted like any other build.",
        },
        {
          title: "Design to code",
          body: "Figma designs turned into working pages, checked on mobile and desktop against the files before you show your client.",
        },
      ]}
      projects={[
        "rsvlts-shopify-store",
        "neom-wellbeing-shopify-store",
        "frank-and-oak-shopify-store",
        "holloway-diamonds-wordpress-website",
        "bombas-shopify-store",
        "new-era-uk-shopify-store",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Your agency stays in front"
          intro="White label only works when your client never has to think about who built the site. This is how we keep it that way."
          items={[
            {
              title: "Your name on the work",
              body: "Deliverables, staging links and handover notes are prepared for your agency to present to your client as its own work.",
            },
            {
              title: "One point of contact",
              body: "We work through the person you choose, usually your project manager, and send updates on the schedule you set.",
            },
            {
              title: "Confidentiality agreed first",
              body: "If you need an NDA or other terms before sharing files, send them with the brief so they can be agreed before work starts.",
            },
          ]}
        />
        <ContentGrid
          heading="How a white label project runs"
          numbered
          items={[
            {
              title: "Send the brief",
              body: "Share the platform, designs, page list, functionality, content status and launch date, and how client approvals work on your side.",
            },
            {
              title: "Scope and fixed quote",
              body: "We list deliverables, dependencies, review points and a written quote. Work starts once the scope is agreed and the assets or access are ready.",
            },
            {
              title: "Build, review, hand over",
              body: "Your reviewer collects feedback at the agreed checkpoints. We make the scoped changes, check the build and hand over the files or access in the proposal.",
            },
          ]}
        />
        <LandingFaq heading="White label development questions" items={FAQS} />
        <LandingLinks
          heading="More for agencies"
          links={[
            {
              href: "/blog/white-label-shopify-development-for-agencies",
              title: "White label Shopify development",
              desc: "How agencies hand over Shopify builds and what to check in a partner.",
            },
            {
              href: "/blog/white-label-creative-for-agencies",
              title: "White label design and video",
              desc: "Adding design, social and video capacity under your agency name.",
            },
            {
              href: "/blog/shopify-developer-rates",
              title: "Shopify developer rates",
              desc: "What agencies and brands pay for Shopify development work.",
            },
            {
              href: "/for-agencies",
              title: "Everything we do for agencies",
              desc: "Website, store, design and video production for agency teams.",
            },
            {
              href: "/shopify-development-agency",
              title: "Shopify development",
              desc: "Custom themes, headless storefronts, apps and integrations.",
            },
            {
              href: "/portfolio?category=ecom-stores",
              title: "Stores we have built",
              desc: "Every Shopify store in our portfolio, agency partner work labelled.",
            },
          ]}
        />
        <ProjectNextStep
          title="Have a build that needs a development partner?"
          body="Send the designs, the platform and the launch date. We will review the requirements, flag missing inputs and come back with a fixed quote your agency can plan around."
          source="white-label-next-step"
          label="Discuss an agency brief"
        />
      </div>
    </BusinessLanding>
  );
}
