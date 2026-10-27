import { MediaImage } from "@/components/media-image";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { ProjectNextStep } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { STORE_PROJECTS } from "@/lib/store-projects";

const CASES = [
  { slug: "histreet-shopify-store", industry: "Ecommerce" },
  { slug: "unze-london-shopify-store", industry: "Ecommerce" },
  { slug: "skin-deep-shopify-store", industry: "Beauty" },
  { slug: "acely-website", industry: "Education" },
  { slug: "cargo-health-wordpress-website", industry: "Healthcare" },
].map((item) => ({
  ...item,
  project: STORE_PROJECTS.find((project) => project.slug === item.slug)!,
}));

export const Route = createFileRoute("/results")({
  head: () =>
    businessHead(
      "/results",
      "Project outcomes & case studies",
      "Explore five named Pixel2Tech website and Shopify case studies. Filter by industry and service, and inspect the delivered work and engagement details.",
    ),
  component: ResultsPage,
});

function ResultsPage() {
  const [industry, setIndustry] = useState("All industries");
  const [service, setService] = useState("All services");
  const cases = CASES.filter(
    (item) =>
      (industry === "All industries" || item.industry === industry) &&
      (service === "All services" ||
        (item.project.platform === "Shopify" ? "Shopify stores" : "Websites") === service),
  );
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Project outcomes
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          See what changed. Inspect the work.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Five builds, with the business need, design decisions and delivered result explained.
          These are observable changes to the customer journey; revenue or conversion lifts are only
          meaningful with a measured baseline. Filter by industry or service to explore the work.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <label className="text-sm font-semibold">
            Industry
            <select
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              className="ml-3 min-h-11 rounded-xl border border-border bg-background px-4"
            >
              {["All industries", "Ecommerce", "Beauty", "Education", "Healthcare"].map(
                (option) => (
                  <option key={option}>{option}</option>
                ),
              )}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Service
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="ml-3 min-h-11 rounded-xl border border-border bg-background px-4"
            >
              {["All services", "Shopify stores", "Websites"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
          {cases.length} {cases.length === 1 ? "case study" : "case studies"}
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {cases.map(({ project, industry }) => (
            <li key={project.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
                <div className="aspect-[16/10] bg-muted p-4">
                  <MediaImage
                    src={`/portfolio/${project.slug}/${project.shots.desktop[0]}.webp`}
                    alt={`${project.client} delivered website`}
                    loading="lazy"
                    className="h-full w-full object-contain object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-muted-foreground">
                    {industry} · {project.platform} ·{" "}
                    {project.engagement === "white-label"
                      ? "Agency partner work"
                      : project.engagement === "direct"
                        ? "Direct client"
                        : "Delivered project"}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">{project.client}</h2>
                  <dl className="mt-6 space-y-5 text-sm leading-relaxed">
                    {[
                      ["The business need", project.challenge],
                      ["What we changed", project.approach],
                      ["The delivered outcome", project.outcome],
                    ].map(([label, body]) => (
                      <div key={label}>
                        <dt className="font-semibold">{label}</dt>
                        <dd className="mt-2 text-muted-foreground">{body}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: project.slug }}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold text-primary"
                  >
                    Read the case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {!cases.length && (
          <p className="mt-8 rounded-2xl bg-muted p-6 text-sm">
            No case studies match these filters. Choose All industries or All services to broaden
            the selection.
          </p>
        )}
        <div className="mt-12">
          <ProjectNextStep
            title="What should change for your customers?"
            body="Send your current website, the task customers struggle with and the business goal behind it. We can discuss the right scope, relevant examples and how to check the result after launch."
            source="project-outcomes"
          />
        </div>
      </section>
    </PageShell>
  );
}
