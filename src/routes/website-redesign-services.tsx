import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";

const PATH = "/website-redesign-services";

const FAQS: FaqItem[] = [
  {
    q: "How much do website redesign services cost?",
    a: "It depends on the number of pages and templates, how much content changes, the platform, and what has to be migrated, such as products, blog posts or customer accounts. We don't publish a price list. After a free scoping call you get a written proposal with a fixed price, milestones and a timeline. Our redesign cost guide breaks the usual line items down.",
  },
  {
    q: "Will a website redesign hurt my SEO?",
    a: "It can if old URLs disappear without redirects, pages that rank are cut, or the new site is blocked from indexing. We map every old URL to a new one with 301 redirects, keep the titles and content that bring in traffic, and check indexing after launch. No one can guarantee rankings, but these common causes of lost traffic can be planned for.",
  },
  {
    q: "Should we redesign or rebuild the website?",
    a: "A redesign changes how the site looks and how pages are organised; a rebuild also changes the code or the platform underneath. If the current platform is slow, hard to edit or can't do what you need, a rebuild is usually worth it. We give you our view, with the trade-offs, on the scoping call.",
  },
  {
    q: "Do you offer WordPress website redesign services?",
    a: "Yes. We redesign WordPress and WooCommerce sites on WordPress, cleaning up themes and plugins on the way, or move them to Shopify or a custom React or Next.js build when the business needs it.",
  },
  {
    q: "Can you redesign an ecommerce or Shopify store?",
    a: "Yes. We redesign Shopify stores and move stores from other platforms to Shopify, with products, collections, customers and redirects planned before launch. Our Shopify development page has more detail.",
  },
  {
    q: "How long does a website redesign take?",
    a: "It depends on the page count, how much content is ready and how quickly feedback comes back. Your proposal includes a timeline with milestones, and we tell you as soon as missing content or delayed approvals are likely to move a date.",
  },
  {
    q: "Do you do white label website redesigns for agencies?",
    a: "Yes. Agencies send the designs or the brief, and we rebuild the site for the agency to present under its own name. By default we work only with your team and never contact your client unless you ask us to.",
  },
];

export const Route = createFileRoute("/website-redesign-services")({
  head: () => {
    const head = businessHead(
      PATH,
      "Website Redesign Services for Small Businesses",
      "Website redesign services for US, UK, Canadian and EU businesses: new design, rebuild on WordPress, Shopify or custom code, 301 redirects and SEO checks.",
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: WebsiteRedesignServices,
});

function WebsiteRedesignServices() {
  return (
    <BusinessLanding
      eyebrow="Website redesign services"
      title="Website redesign services for small businesses and agencies"
      intro="We redesign and rebuild websites for businesses in the US, UK, Canada and the EU: a new design, a rebuild on WordPress, Shopify or custom code, and a launch plan that maps old URLs to new ones so traffic and links are not lost to missing redirects. Pixel2Tech is a web studio based in Lahore, Pakistan, and every redesign gets a fixed written quote."
      capabilities={[
        {
          title: "Site and content audit",
          body: "The pages, URLs, search traffic and leads you have today, and what to keep, merge or cut.",
        },
        {
          title: "New design and structure",
          body: "Sitemap, wireframes and responsive layouts in your brand, designed for phones first.",
        },
        {
          title: "Rebuild on the right platform",
          body: "WordPress, Shopify, React or Next.js, chosen for your content and who maintains the site.",
        },
        {
          title: "URL map and 301 redirects",
          body: "Every old address pointed to its new page, so bookmarks, links and rankings carry over.",
        },
        {
          title: "SEO carried over",
          body: "Titles, meta descriptions, headings, structured data and an XML sitemap in place at launch.",
        },
        {
          title: "Launch checks and handover",
          body: "Forms, tracking and indexing checked after launch, with files and logins handed over.",
        },
      ]}
      projects={[
        "cargo-health-wordpress-website",
        "reacon-group-website",
        "acely-website",
        "holloway-diamonds-wordpress-website",
        "histreet-shopify-store",
        "unze-london-shopify-store",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Signs your website needs a redesign"
          items={[
            {
              title: "It is hard to update",
              body: "Simple changes need a developer, or the editor breaks the layout when your team tries.",
            },
            {
              title: "It is slow or awkward on phones",
              body: "Pages load slowly, text is small, and buttons are hard to tap on mobile.",
            },
            {
              title: "It doesn't bring in inquiries",
              body: "Visitors arrive but can't tell what you offer or how to get in touch.",
            },
          ]}
        />
        <ContentGrid
          heading="How our website redesign process works"
          numbered
          items={[
            {
              title: "Audit and scope",
              body: "We review the current site, its traffic and its rankings, agree what the redesign must change, and send a fixed written quote.",
            },
            {
              title: "Design and approve",
              body: "Sitemap, wireframes and page designs, reviewed with you at the checkpoints in the proposal.",
            },
            {
              title: "Rebuild and migrate",
              body: "We build the new site, move the content and prepare the URL map and redirects on a staging copy.",
            },
            {
              title: "Launch and check",
              body: "We launch, test forms and tracking, check indexing and fix anything the launch turns up.",
            },
          ]}
        />
        <LandingFaq heading="Website redesign questions" items={FAQS} />
        <LandingLinks
          heading="Plan your redesign"
          links={[
            {
              href: "/blog/website-redesign-cost-small-business",
              title: "Website redesign cost",
              desc: "The line items in a redesign quote and how to budget.",
            },
            {
              href: "/blog/website-traffic-drop-after-redesign",
              title: "Traffic dropped after a redesign?",
              desc: "The usual causes and how to win the traffic back.",
            },
            {
              href: "/services/website-development",
              title: "Website development",
              desc: "New business websites in React, Next.js or custom code.",
            },
            {
              href: "/services/wordpress-and-shopify",
              title: "WordPress and Shopify",
              desc: "Store and site setup, themes, plugins and migrations.",
            },
            {
              href: "/shopify-development-agency",
              title: "Shopify development",
              desc: "Custom themes, headless storefronts, apps and integrations.",
            },
            {
              href: "/white-label-web-development",
              title: "White label for agencies",
              desc: "Redesigns and builds delivered under your agency's name.",
            },
          ]}
        />
        <ProjectNextStep
          title="Planning a redesign?"
          body="Send the current site address, what is not working and your launch date. We will review it and come back with questions or a fixed quote."
          source="website-redesign-next-step"
          label="Get a redesign quote"
        />
      </div>
    </BusinessLanding>
  );
}
