import { MediaImage } from "@/components/media-image";
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
            A look inside each collection
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Selected creative work from each project. Open a collection to explore the designs.
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
      <ul className="mt-8 grid gap-6 md:grid-cols-2 sm:gap-8">
        {projects.map((project, index) => {
          // Preview the gallery itself; some covers duplicate a gallery image under another URL.
          // Keep the owner's explicitly selected healthcare cover first.
          const gallery = project.images?.length ? project.images : [project.img];
          const previews = [
            ...new Set(
              project.slug === "healthcare-meta-ad-creatives" ? [project.img, ...gallery] : gallery,
            ),
          ].slice(0, 3);
          return (
            <li key={project.slug}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                onClick={() =>
                  trackEvent("portfolio_project_opened", {
                    slug: project.slug,
                    title: project.title,
                  })
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:rounded-3xl"
              >
                <div className="bg-muted/60 p-4 sm:p-5">
                  <div
                    className={
                      previews.length === 1
                        ? "grid aspect-[4/3] grid-cols-1"
                        : "grid aspect-[4/3] grid-cols-[1.6fr_1fr] grid-rows-2 gap-2 sm:gap-3"
                    }
                  >
                    {previews.map((src, previewIndex) => (
                      <div
                        key={src}
                        className={`min-h-0 overflow-hidden rounded-xl border border-border/60 bg-background/60 ${previewIndex === 0 ? "row-span-2" : ""}`}
                      >
                        <MediaImage
                          src={src}
                          srcSet={imageSrcSet(src)}
                          sizes={
                            previewIndex === 0
                              ? "(min-width: 1280px) 320px, (min-width: 768px) 28vw, 55vw"
                              : "(min-width: 1280px) 200px, (min-width: 768px) 18vw, 35vw"
                          }
                          alt={`${project.client ?? project.title} — creative ${previewIndex + 1} of ${previews.length}`}
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
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
          );
        })}
      </ul>
    </section>
  );
}
