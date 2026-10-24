import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { ALL_ITEMS, imageSrcSet } from "@/lib/portfolio-data";

const COLLECTIONS = ALL_ITEMS.filter((item) => item.category === "Social Media & Ads");

export function PortfolioSocialCreatives({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const projects = featuredOnly ? COLLECTIONS.slice(0, 3) : COLLECTIONS;

  return (
    <section aria-labelledby="social-work-title" className="mt-12 sm:mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Social Media & Ads / Creative collections
          </p>
          <h2 id="social-work-title" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Creative, in full view
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Social posts, ad creatives and product visuals. Open a project to explore the
            collection.
          </p>
        </div>
        {featuredOnly && (
          <Link
            to="/portfolio"
            search={{ category: "social-media-and-ads" }}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all {COLLECTIONS.length} collections <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              onClick={() =>
                trackEvent("portfolio_project_opened", { slug: project.slug, title: project.title })
              }
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:rounded-3xl"
            >
              <div className="bg-muted/60 p-4 sm:p-5">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    srcSet={imageSrcSet(project.img)}
                    sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    alt={`${project.client ?? project.title} — creative preview`}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-contain transition duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-t border-border p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {project.subcategory}
                </p>
                <h3 className="mb-6 mt-3 text-lg font-bold leading-snug tracking-tight sm:text-xl">
                  {project.title}
                </h3>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Explore the collection</span>
                  <span className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-semibold text-background transition group-hover:opacity-80">
                    View project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
