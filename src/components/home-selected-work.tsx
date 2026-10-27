import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ALL_ITEMS } from "@/lib/portfolio-data";

function projectImage(slug: string) {
  // This inspected frame shows the motion design, rather than a text-only intro.
  if (slug === "animated-explainer-videos") return "/portfolio/animated-explainer-videos/9.jpg";
  const item = ALL_ITEMS.find((project) => project.slug === slug)!;
  return (
    item.store?.desktop[0] ??
    item.videos?.find((video) => video.orientation === "landscape")?.poster ??
    item.img
  );
}

const HOME_WORK = [
  {
    slug: "histreet-shopify-store",
    label: "Ecom Stores",
    description: "Shopify for a Pakistani men's footwear brand.",
  },
  {
    slug: "cargo-health-wordpress-website",
    label: "Websites",
    description: "Medical courier services for hospitals, labs and pharmacies.",
  },
  {
    slug: "linkedin-posting-agent",
    label: "AI Automation",
    description: "Research, generated images and LinkedIn posting in one workflow.",
  },
  {
    slug: "performance-marketing-video-ads",
    label: "Video Editing",
    description: "Creator-led demos, app promotions and animated ad creative.",
  },
  {
    slug: "madluvv-social-media-meta-ads",
    label: "Social Media & Ads",
    description: "Social content and Meta ad creative for MADLUVV.",
  },
  {
    slug: "brand-identity-design-collection",
    label: "Design",
    description: "Brand identities, visual systems and design guidelines.",
  },
];

export function HomeSelectedWork() {
  return (
    <section
      aria-labelledby="home-work-title"
      className="border-y border-border bg-muted/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              The work, across disciplines
            </p>
            <h2 id="home-work-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One team. A whole range of work.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold hover:bg-muted"
          >
            Explore our portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_WORK.map((work) => {
            const project = ALL_ITEMS.find((item) => item.slug === work.slug)!;
            return (
              <li key={work.slug}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: work.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted p-4">
                    <MediaImage
                      src={projectImage(work.slug)}
                      alt={`${project.client ?? project.title} project preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full rounded-lg object-contain object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {work.label}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-snug">
                      {project.client ?? project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {work.description}
                    </p>
                    <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm font-semibold">
                      View project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
