import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { StudioPage } from "@/components/studio-page";
import { BookCallButton } from "@/components/book-call-button";
import { ALL_ITEMS } from "@/lib/portfolio-data";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type Project = (typeof ALL_ITEMS)[number];

/** A linked project preview. White-label work always says so, here as on the project page. */
function ProjectImage({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className: string;
  priority?: boolean;
}) {
  const fit = project.automation ? "object-contain p-3" : "object-cover object-top";
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className={`group relative block overflow-hidden rounded-3xl bg-muted ${FOCUS_RING} ${className}`}
    >
      <MediaImage
        src={project.store?.desktop[0] ?? project.img}
        alt={`${project.client ?? project.title} project preview`}
        loading={priority ? undefined : "lazy"}
        className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.03] ${fit}`}
      />
      <span className="absolute bottom-2 left-2 right-2 truncate rounded-xl bg-slate-950/85 px-3 py-2 text-xs font-medium text-white backdrop-blur">
        {project.client ?? project.title}
        {project.whiteLabel ? " · Agency partner work" : ""}
      </span>
    </Link>
  );
}

export function BusinessLanding({
  eyebrow,
  title,
  intro,
  capabilities,
  projects,
  children,
  polished = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: readonly (string | { title: string; body: string })[];
  projects?: readonly string[];
  children?: React.ReactNode;
  polished?: boolean;
}) {
  const work = (projects ?? []).flatMap((slug) => {
    const project = ALL_ITEMS.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
  const [lead, ...rest] = work;
  const Shell = polished ? StudioPage : PageShell;

  return (
    <Shell>
      <section className="bg-background pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className={`min-w-0 ${polished ? "lg:col-span-6" : "lg:col-span-7"}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookCallButton
                source={eyebrow}
                className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              />
              {work.length > 0 ? (
                <a
                  href="#business-work"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  See relevant work <ArrowRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
          {lead ? (
            <div
              className={`grid min-w-0 grid-cols-2 gap-3 ${polished ? "lg:col-span-6" : "lg:col-span-5"}`}
            >
              <ProjectImage project={lead} priority className="col-span-2 aspect-[16/10]" />
              {(!polished ? rest.slice(0, 2) : []).map((project) => (
                <ProjectImage
                  key={project.slug}
                  project={project}
                  className={`aspect-[4/3] ${rest.length === 1 ? "col-span-2 aspect-[16/10]" : ""}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What we work on</h2>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {capabilities.map((capability, index) => (
              <li
                key={typeof capability === "string" ? capability : capability.title}
                className="min-w-0 border-t border-border pb-8 pt-6"
              >
                <span aria-hidden="true" className="text-sm font-semibold text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">
                  {typeof capability === "string" ? capability : capability.title}
                </h3>
                {typeof capability !== "string" && (
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {capability.body}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {work.length > 0 ? (
        <section
          id="business-work"
          aria-labelledby="business-work-title"
          className="scroll-mt-24 bg-muted/50 py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 id="business-work-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Relevant work
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Project pages explain our role. Agency partner engagements are labelled as white-label
              work.
            </p>
            <ul
              className={`mt-8 grid gap-6 ${work.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
            >
              {work.map((project) => (
                <li key={project.slug} className="min-w-0">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: project.slug }}
                    className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition hover:border-primary ${FOCUS_RING}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <MediaImage
                        src={project.store?.desktop[0] ?? project.img}
                        alt={`${project.client ?? project.title} project preview`}
                        loading="lazy"
                        className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                          project.automation ? "object-contain p-3" : "object-cover object-top"
                        }`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs text-muted-foreground">
                        {project.category}
                        {project.whiteLabel ? " · Agency partner work" : ""}
                      </p>
                      <h3 className="mt-3 text-xl font-bold leading-snug">{project.title}</h3>
                      <span className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold">
                        View project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {children}
    </Shell>
  );
}
