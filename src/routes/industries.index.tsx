import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";

export const Route = createFileRoute("/industries/")({
  head: () =>
    businessHead(
      "/industries",
      "Industries we work with",
      "Explore Pixel2Tech's work in beauty and ecommerce, professional services and healthcare, with relevant project examples and capabilities.",
    ),
  component: () => (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Different businesses. Connected disciplines.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A product brand needs a clear shopping journey. A service business needs to explain
          expertise and receive qualified enquiries. Healthcare services need information people can
          understand and trust. We connect design, development, video and automation around those
          different needs.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li key={industry.slug}>
              <Link
                to="/industries/$slug"
                params={{ slug: industry.slug }}
                className="block h-full rounded-2xl border border-border bg-muted/40 p-6 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h2 className="text-2xl font-bold">{industry.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {industry.intro}
                </p>
                <span className="mt-8 block text-sm font-semibold">Explore work →</span>
              </Link>
            </li>
          ))}
        </ul>
        <ContentGrid
          heading="Why work across disciplines?"
          items={[
            {
              title: "The promise matches the experience",
              body: "A campaign should lead to a page that explains the same product or service. We can work on both sides of that handover, so the message does not change after the click.",
            },
            {
              title: "The next step works",
              body: "A good-looking page still needs a usable checkout or enquiry flow. We connect the design to the form, store or system the business relies on.",
            },
            {
              title: "The scope follows your need",
              body: "You may only need one discipline. We agree the work from your brief and current setup; an industry page is a starting point, not a compulsory package.",
            },
          ]}
        />
        <ProjectNextStep
          title="Your business does not fit one of these categories?"
          body="Share what you sell, who buys it and where the current journey breaks down. We will discuss whether our experience is a fit and show relevant work where we have it."
          source="industries"
        />
      </section>
    </PageShell>
  ),
});
