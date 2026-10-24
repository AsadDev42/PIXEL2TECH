import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { ALL_ITEMS } from "@/lib/portfolio-data";

export function BusinessLanding({
  eyebrow,
  title,
  intro,
  capabilities,
  projects,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: readonly (string | { title: string; body: string })[];
  projects?: readonly string[];
  children?: React.ReactNode;
}) {
  return (
    <PageShell>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
          <BookCallButton
            source={eyebrow}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <li
                key={typeof capability === "string" ? capability : capability.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-6"
              >
                <span aria-hidden="true" className="text-sm font-semibold text-primary">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="text-base font-semibold">
                    {typeof capability === "string" ? capability : capability.title}
                  </h2>
                  {typeof capability !== "string" && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {capability.body}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {children}
      {projects?.length ? (
        <section aria-labelledby="business-work-title" className="bg-muted/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 id="business-work-title" className="text-3xl font-bold tracking-tight">
              Relevant work
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Project pages explain our role. Agency partner engagements are labelled as white-label
              work.
            </p>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {projects.map((slug) => {
                const project = ALL_ITEMS.find((item) => item.slug === slug);
                if (!project) return null;
                return (
                  <li key={slug}>
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug }}
                      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="aspect-[4/3] bg-muted p-4">
                        <img
                          src={project.store?.desktop[0] ?? project.img}
                          alt={`${project.client ?? project.title} project preview`}
                          loading="lazy"
                          className="h-full w-full object-contain object-top"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs text-muted-foreground">
                          {project.category}
                          {project.whiteLabel ? " · Agency partner work" : ""}
                        </p>
                        <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
                        <span className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold">
                          View project <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
