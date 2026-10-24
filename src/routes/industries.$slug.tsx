import { createFileRoute, notFound } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";

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
  return (
    <BusinessLanding
      eyebrow={industry.title}
      title={industry.heading}
      intro={industry.intro}
      capabilities={industry.capabilities}
      projects={industry.projects}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Start with a customer task, then choose the work."
          intro="An industry label helps us find relevant examples. Your actual brief determines which disciplines are needed and how we will check the delivery."
          items={[
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
              body: "We agree practical acceptance checks, test the relevant devices and hand over the delivered work. If measurement is included, the baseline and tracking responsibilities are defined first.",
            },
          ]}
          numbered
        />
        <ProjectNextStep
          title={`Planning work in ${industry.title.toLowerCase()}?`}
          body="Send your current website or creative, who it serves and what you want customers to do next. We will use that context to discuss a focused first phase, rather than adding services you do not need."
          source={`industry-${industry.slug}`}
        />
      </div>
    </BusinessLanding>
  );
}
