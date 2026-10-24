import { createFileRoute, notFound } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
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
    />
  );
}
