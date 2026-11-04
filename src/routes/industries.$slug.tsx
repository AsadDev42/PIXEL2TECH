import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BusinessLanding } from "@/components/business-landing";
import { ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";

const STEPS = [
  {
    title: "Find the friction",
    body: "Show us the journey that is difficult today: finding the right product, understanding a service or sending an enquiry. Include customer questions, recordings or support messages where available.",
  },
  {
    title: "Define a useful change",
    body: "We turn that evidence into a scoped plan: pages, creative assets, integrations and review points. Your team confirms the facts, product information and any specialist requirements.",
  },
  {
    title: "Check the finished journey",
    body: "We agree acceptance checks, test the relevant devices and hand over the delivered work. If measurement is included, the baseline and tracking responsibilities are defined first.",
  },
];

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = INDUSTRIES.find((item) => item.slug === params.slug);
    if (!industry) throw notFound();
    return industry;
  },
  head: ({ loaderData }) =>
    loaderData
      ? businessHead(`/industries/${loaderData.slug}`, loaderData.title, loaderData.description)
      : {
          meta: [
            { title: "Industry not found | Pixel2Tech" },
            { name: "robots", content: "noindex" },
          ],
        },
  component: IndustryPage,
});

function IndustryPage() {
  const industry = Route.useLoaderData();
  const others = INDUSTRIES.filter((item) => item.slug !== industry.slug);
  return (
    <BusinessLanding
      eyebrow={industry.title}
      title={industry.heading}
      intro={industry.intro}
      capabilities={industry.capabilities}
      projects={industry.projects}
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Start with a customer task, then choose the work.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            An industry label helps us find relevant examples. Your actual brief determines which
            disciplines are needed and how we will check the delivery.
          </p>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative min-w-0 border-t-2 border-border pt-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-0 grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground ring-4 ring-background"
                >
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ProjectNextStep
          title={`Planning work in ${industry.title.toLowerCase()}?`}
          body="Send your current website or creative, who it serves and what you want customers to do next. We will use that context to discuss a focused first phase, rather than adding services you do not need."
          source={`industry-${industry.slug}`}
        />
        <nav aria-labelledby="other-industries" className="pb-16 md:pb-24">
          <h2 id="other-industries" className="text-2xl font-bold tracking-tight">
            Other industries
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug} className="min-w-0">
                <Link
                  to="/industries/$slug"
                  params={{ slug: item.slug }}
                  className="group flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-border p-4 text-sm font-semibold transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.title}
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </BusinessLanding>
  );
}
