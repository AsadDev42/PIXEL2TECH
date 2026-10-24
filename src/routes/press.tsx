import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { businessHead } from "@/lib/page-seo";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM_SIZE } from "@/lib/team";

export const Route = createFileRoute("/press")({
  head: () =>
    businessHead(
      "/press",
      "Press & studio information",
      "Company facts, founder profiles and the media contact for Pixel2Tech, the creative and web studio in Lahore, Pakistan.",
    ),
  component: () => (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Press</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Pixel2Tech, at a glance.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Pixel2Tech is a creative and web studio in Lahore, Pakistan. The team works across
          branding, websites, Shopify, video and automation for clients worldwide.
        </p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Founded", value: STATS.foundingYear },
            { label: "In-house team", value: String(TEAM_SIZE) },
            { label: "Studio", value: SITE.location },
          ].map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-border bg-muted/40 p-6">
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-2 text-xl font-bold">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <h2 className="mt-12 text-2xl font-bold">Founders and media enquiries</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Read the profiles of{" "}
          <Link to="/usama-farooq" className="underline underline-offset-4">
            Usama Farooq
          </Link>{" "}
          and{" "}
          <Link to="/asad-farooq" className="underline underline-offset-4">
            Asad Farooq
          </Link>
          . For interviews, studio information or permission to reproduce project images, contact{" "}
          <a
            href={`mailto:${SITE.email}?subject=Media%20enquiry`}
            className="underline underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </p>
      </section>
    </PageShell>
  ),
});
