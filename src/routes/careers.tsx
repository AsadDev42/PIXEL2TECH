import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/careers")({
  head: () =>
    businessHead(
      "/careers",
      "Careers at Pixel2Tech",
      "Meet the disciplines in Pixel2Tech's Lahore studio and introduce yourself with your portfolio. Contact the team to ask about current opportunities.",
    ),
  component: () => (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Careers</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Bring your craft to the studio.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our Lahore team works across brand design, web development, video and automation. If that
          sounds like your kind of work, introduce yourself and share a few projects you are proud
          of.
        </p>
        <div className="mt-10 max-w-3xl rounded-3xl border border-border bg-muted/40 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Ask about current opportunities</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Send your portfolio, the discipline you work in and your availability. The team will
            confirm whether there is a relevant opening; this page does not list a specific vacancy.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Careers%20at%20Pixel2Tech`}
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background"
          >
            Introduce yourself
          </a>
        </div>
      </section>
    </PageShell>
  ),
});
