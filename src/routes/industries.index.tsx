import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";

export const Route = createFileRoute("/industries/")({
  head: () =>
    businessHead(
      "/industries",
      "Industries we support",
      "Explore how Pixel2Tech connects branding, websites, campaign creative and automation for ecommerce, professional services, healthcare, food and local service businesses.",
    ),
  component: () => (
    <PageShell>
      <>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Industries
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Different businesses. One connected customer journey.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From product discovery to a service enquiry, each industry has a different moment
              where customers need clarity. We connect brand design, websites, content and
              automation around that moment—and the next step your customer needs to take.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
            <p className="text-sm font-semibold text-primary">Relevant work, clearly scoped</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Explore real project examples and the work behind them. These industries reflect
              selected Pixel2Tech experience; your brief—not a preset package—determines the right
              scope.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline decoration-primary underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Talk through your project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </section>
        <section
          aria-labelledby="industry-list-title"
          className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Selected experience
              </p>
              <h2 id="industry-list-title" className="mt-3 text-3xl font-bold tracking-tight">
                Find the work closest to yours.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Open an industry to see relevant capabilities, project examples and a practical way to
              start.
            </p>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRIES.map((industry, index) => (
              <li key={industry.slug} className="min-w-0">
                <Link
                  to="/industries/$slug"
                  params={{ slug: industry.slug }}
                  className="group flex h-full min-h-64 flex-col rounded-2xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
                >
                  <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-primary">
                    <span>0{index + 1}</span>
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-8 text-2xl font-bold tracking-tight">{industry.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.intro}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Explore relevant work <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <ContentGrid
              heading="Why connect the disciplines?"
              intro="Customers experience the whole journey, even when different teams create each part."
              items={[
                {
                  title: "The promise matches the experience",
                  body: "A campaign should lead to a page that explains the same product or service. We can work on both sides of that handover so the message stays clear after the click.",
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
              title="Working in an industry not listed here?"
              body="Share what you sell, who buys it and where the current journey breaks down. We will discuss whether our experience is a fit and show relevant work where we have it."
              source="industries"
            />
          </div>
        </section>
      </>
    </PageShell>
  ),
});
