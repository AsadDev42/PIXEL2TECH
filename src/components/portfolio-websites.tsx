import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { STORE_PROJECTS, isStore } from "@/lib/store-projects";

export function PortfolioWebsites({
  featuredOnly = false,
  kind = "websites",
}: {
  featuredOnly?: boolean;
  kind?: "websites" | "ecom-stores";
}) {
  const stores = kind === "ecom-stores";
  const collection = STORE_PROJECTS.filter((project) => isStore(project) === stores);
  const projects = featuredOnly ? collection.slice(0, 4) : collection;
  const label = stores ? "Ecom Stores" : "Websites";
  const titleId = `${kind}-work-title`;

  return (
    <section aria-labelledby={titleId} className="mt-12 sm:mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {label} / Selected builds
          </p>
          <h2 id={titleId} className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            A closer look at our {stores ? "online stores" : "websites"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore the design, pages and development behind each project.
          </p>
        </div>
        {featuredOnly && (
          <Link
            to="/portfolio"
            search={{ category: kind }}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all {collection.length} {stores ? "stores" : "websites"}{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <ul className="mt-8 grid gap-6 md:grid-cols-2 sm:gap-8">
        {projects.map((project, index) => {
          const host = new URL(project.url).hostname.replace(/^www\./, "");
          return (
            <li key={project.slug}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                onClick={() =>
                  trackEvent("portfolio_project_opened", {
                    slug: project.slug,
                    title: `${project.client} — ${stores ? "Shopify store" : "website"}`,
                  })
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:rounded-3xl"
              >
                <div className="bg-muted/60 p-4 pb-0 sm:p-6 sm:pb-0">
                  <div className="overflow-hidden rounded-t-xl border border-b-0 border-border bg-background shadow-sm">
                    <div className="flex h-10 items-center gap-3 border-b border-border bg-background px-3 sm:px-4">
                      <span aria-hidden="true" className="flex shrink-0 gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      </span>
                      <span className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-muted/60 px-2 py-1 text-[10px] text-muted-foreground sm:text-xs">
                        <LockKeyhole aria-hidden="true" className="h-3 w-3 shrink-0" />
                        <span className="truncate">{host}</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={`/portfolio/${project.slug}/${project.shots.desktop[0]}.webp`}
                        alt={`${project.client} ${stores ? "store" : "website"} desktop preview`}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        width={1440}
                        height={900}
                        className="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col border-t border-border p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      {stores ? "Ecommerce development" : "Website development"}
                    </p>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.platform}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                    {project.client}
                  </h3>
                  <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">
                      {project.engagement === "white-label"
                        ? "Agency development partner"
                        : stores
                          ? "Online store project"
                          : "Website project"}
                    </span>
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
