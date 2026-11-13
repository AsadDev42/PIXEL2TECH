import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { MediaImage } from "@/components/media-image";
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

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** The case study pages carry the full text; this page shows the opening point of each. */
const firstSentence = (text: string) => text.split(/(?<=\.)\s/)[0];

export const Route = createFileRoute("/results")({
  head: () =>
    businessHead(
      "/results",
      "Project outcomes & case studies",
      "Explore five named Pixel2Tech website and Shopify case studies: the business need, what was built and what customers can now do on each site.",
    ),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <PageShell>
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Project outcomes
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Five builds, and what each one changed for customers.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          For each one: the business need, what was built and what customers can now do. We describe
          changes you can see on the site, because revenue or conversion lifts are only meaningful
          with a measured baseline.
        </p>
        <nav aria-label="Jump to a case study" className="mt-10">
          <ul className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {CASES.map(({ project }) => (
              <li key={project.slug} className="w-40 shrink-0 md:w-auto">
                <a href={`#${project.slug}`} className={`group block rounded-2xl ${FOCUS_RING}`}>
                  <span className="block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                    <MediaImage
                      src={`/portfolio/${project.slug}/${project.shots.desktop[0]}.webp`}
                      alt=""
                      loading="eager"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-2 block text-sm font-semibold transition-colors group-hover:text-primary">
                    {project.client}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl divide-y divide-border border-t border-border px-5 md:px-10">
        {CASES.map(({ project, industry }, index) => (
          <article
            key={project.slug}
            id={project.slug}
            className="grid scroll-mt-20 gap-8 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-16"
          >
            <div className={`relative min-w-0 lg:col-span-7 ${index % 2 ? "lg:order-last" : ""}`}>
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted">
                <MediaImage
                  src={`/portfolio/${project.slug}/${project.shots.desktop[0]}.webp`}
                  alt={`${project.client} delivered website on desktop`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 right-4 aspect-[9/16] w-1/5 min-w-20 overflow-hidden rounded-2xl border-4 border-background bg-muted shadow-xl">
                <MediaImage
                  src={`/portfolio/${project.slug}/mobile-home.webp`}
                  alt={`${project.client} delivered website on a phone`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <p className="text-xs font-medium text-muted-foreground">
                {industry} · {project.platform} ·{" "}
                {project.engagement === "white-label"
                  ? "Agency partner work"
                  : project.engagement === "direct"
                    ? "Direct client"
                    : "Delivered project"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {project.client}
              </h2>
              <p className="mt-4 text-lg font-medium leading-snug text-foreground">
                {firstSentence(project.outcome)}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The business need: </span>
                {firstSentence(project.challenge)}
              </p>
              <h3 className="mt-6 text-sm font-semibold">What we built</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {project.deliverables.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                className={`mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              >
                Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Want to see more of our work?</h2>
            <p className="mt-1 text-muted-foreground">
              The portfolio also covers branding, video, social content and automation.
            </p>
          </div>
          <Link
            to="/portfolio"
            className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition hover:bg-muted ${FOCUS_RING}`}
          >
            See the full portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ProjectNextStep
          title="What should change for your customers?"
          body="Share your website, customer challenge and goal. We'll help define the scope and how to measure the result."
          source="project-outcomes"
        />
      </div>
    </PageShell>
  );
}
