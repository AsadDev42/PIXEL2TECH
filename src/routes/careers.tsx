import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/careers")({
  head: () =>
    businessHead(
      "/careers",
      "Careers at Pixel2Tech",
      "Learn what Pixel2Tech's design, development and video team works on, what to include in a portfolio introduction and how to ask about current opportunities.",
    ),
  component: () => (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Careers</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Show us what you make, and how you think.
        </h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          Pixel2Tech is an in-house studio in Lahore. Our designers, developers and editors work on
          connected brand, website, video and automation projects. If you want to work with a team
          like ours, send a focused introduction with examples of your own contribution.
        </p>
        <div className="my-8 rounded-2xl border border-border bg-muted/40 p-6">
          <h2 className="text-lg font-semibold">Ask about current opportunities</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            We are not advertising a specific vacancy on this page. Contact the team to find out
            whether there is a suitable role or project collaboration before treating your
            introduction as an application to an open position.
          </p>
        </div>
        <ContentGrid
          heading="The work behind the job titles"
          items={[
            {
              title: "Design",
              body: "Brand identities, website layouts, campaign assets and social content. Share the brief, your design decisions and how your work fits the wider brand.",
            },
            {
              title: "Development and automation",
              body: "Shopify and WordPress stores, custom websites and connected workflows. Explain what you built, the tools you used and how you checked that it works.",
            },
            {
              title: "Video and motion",
              body: "Short-form content, long-form edits, ads and animation. Show how you handle pacing, captions, sound and the different formats a client needs.",
            },
          ]}
        />
        <ContentGrid
          heading="What to include in your introduction"
          numbered
          items={[
            {
              title: "A short, relevant portfolio",
              body: "Choose two or three projects. For each, tell us the problem, your exact role and which parts of the work are yours. Links should open without a login where possible.",
            },
            {
              title: "How you approach the work",
              body: "Include a short note about a decision or constraint in each project. Process files, a code repository or an editing breakdown can help us understand your contribution.",
            },
            {
              title: "Practical details",
              body: "Tell us your discipline, experience, location and availability, plus whether you are asking about a studio role or project collaboration. Add a CV if it helps explain your background.",
            },
          ]}
        />
        <section className="mb-12 grid gap-8 rounded-[2rem] bg-muted/40 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Start a conversation with the team.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We use your introduction to understand the work you want to do and whether it fits a
              current need. If there is a potential match, the team can discuss responsibilities,
              working arrangements and next steps with you.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Send your portfolio and a short introduction</h3>
            <a
              href={`mailto:${SITE.email}?subject=Portfolio%20introduction%20-%20Pixel2Tech`}
              className="mt-5 inline-flex min-h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background"
            >
              Introduce yourself by email
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              To see the kind of work we make, explore our{" "}
              <Link to="/portfolio" className="underline underline-offset-4">
                portfolio
              </Link>{" "}
              or{" "}
              <Link to="/about" className="underline underline-offset-4">
                meet the team
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  ),
});
