import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { PageShell } from "@/components/site-chrome";
import { ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";
import { ALL_ITEMS } from "@/lib/portfolio-data";

const REASONS = [
  {
    title: "The campaign and the page say the same thing",
    body: "A campaign should lead to a page that explains the same product or service. We can work on both sides of that handover so the message stays clear after the click.",
  },
  {
    title: "The form or checkout works",
    body: "A good-looking page still needs a usable checkout or enquiry flow. We connect the design to the form, store or system the business relies on.",
  },
  {
    title: "You can start with one discipline",
    body: "You may only need one discipline. We agree the work from your brief and current setup; an industry page is a starting point, not a compulsory package.",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Route = createFileRoute("/industries/")({
  head: () =>
    businessHead(
      "/industries",
      "Industries we support",
      "Explore how Pixel2Tech connects branding, websites, campaign creative and automation for ecommerce, professional services, healthcare, food and local service businesses.",
    ),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Brand, website, content and automation work across {INDUSTRIES.length} industries.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            From product discovery to a service enquiry, each industry has a different point where
            customers need a clear answer. We connect brand design, websites, content and automation
            around that point and the next step your customer needs to take.
          </p>
        </div>
        <aside className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-8">
          <p className="text-sm font-semibold text-primary">Relevant work, clearly scoped</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Explore real project examples and the work behind them. These industries reflect
            selected Pixel2Tech experience; your brief, not a preset package, determines the right
            scope.
          </p>
          <Link
            to="/contact"
            className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded font-semibold text-foreground underline decoration-primary underline-offset-4 ${FOCUS_RING}`}
          >
            Talk through your project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </section>

      <section
        aria-labelledby="industry-list-title"
        className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24"
      >
        <div className="flex flex-col gap-3 border-t border-border pt-12 sm:flex-row sm:items-end sm:justify-between md:pt-16">
          <h2 id="industry-list-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find the work closest to yours.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Open an industry to see relevant capabilities, project examples and a way to start.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => {
            const project = ALL_ITEMS.find((item) => item.slug === industry.projects[0]);
            return (
              <li key={industry.slug} className="min-w-0">
                <article className="group relative grid overflow-hidden rounded-3xl border border-border transition hover:border-primary lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-80">
                    {project ? (
                      <MediaImage
                        src={project.store?.desktop[0] ?? project.img}
                        alt={`${project.client ?? project.title} project preview`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : null}
                    {project?.whiteLabel ? (
                      <span className="absolute bottom-2 left-2 rounded-xl bg-slate-950/85 px-3 py-2 text-xs font-medium text-white backdrop-blur">
                        Agency partner work
                      </span>
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-col p-6 sm:p-8">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      <Link
                        to="/industries/$slug"
                        params={{ slug: industry.slug }}
                        className="rounded after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {industry.title}
                      </Link>
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{industry.intro}</p>
                    <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {industry.capabilities.map((capability) => (
                        <li
                          key={capability.title}
                          className="flex items-start gap-2 text-sm font-medium"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {capability.title}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-foreground">
                      Explore relevant work
                      <ArrowRight
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="why-connect" className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 id="why-connect" className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Why connect the disciplines?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Customers experience the whole journey, even when different teams create each part.
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {REASONS.map((reason) => (
              <li key={reason.title} className="bg-slate-950 p-6 sm:p-8">
                <h3 className="text-xl font-bold leading-snug tracking-tight">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-24">
        <ProjectNextStep
          title="Working in an industry not listed here?"
          body="Share what you sell, who buys it and where the current journey breaks down. We will discuss whether our experience is a fit and show relevant work where we have it."
          source="industries"
        />
      </div>
    </PageShell>
  );
}
