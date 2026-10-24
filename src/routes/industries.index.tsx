import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { businessHead } from "@/lib/page-seo";
import { INDUSTRIES } from "@/lib/industry-pages";

export const Route = createFileRoute("/industries/")({
  head: () =>
    businessHead(
      "/industries",
      "Industries we work with",
      "Explore Pixel2Tech's work in beauty and ecommerce, professional services and healthcare, with relevant project examples and capabilities.",
    ),
  component: () => (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Different businesses. Connected disciplines.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Start with your industry, then explore the websites, creative and systems behind the work.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li key={industry.slug}>
              <Link
                to="/industries/$slug"
                params={{ slug: industry.slug }}
                className="block h-full rounded-2xl border border-border bg-muted/40 p-6 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h2 className="text-2xl font-bold">{industry.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {industry.heading}
                </p>
                <span className="mt-8 block text-sm font-semibold">Explore work →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  ),
});
