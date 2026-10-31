import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid } from "@/components/content-blocks";
import { ContactForm } from "@/components/contact-form";
import { businessHead } from "@/lib/page-seo";

export const Route = createFileRoute("/careers")({
  head: () =>
    businessHead(
      "/careers",
      "Careers at Pixel2Tech",
      "Explore careers at Pixel2Tech and send an application with your discipline, experience and portfolio. Applications go directly to our team.",
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
          <h2 className="text-lg font-semibold">Open applications</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            We welcome applications from designers, developers, video editors and automation
            specialists. This is an open application form, not a promise that a specific vacancy is
            available. We review your details against our current and upcoming needs.
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
            <h2 className="text-2xl font-bold">Send your application.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Share a focused introduction and a few examples of your work. Your application will be
              emailed to our team at sales@pixel2tech.com. If there is a potential match, we can
              follow up about responsibilities, working arrangements and next steps.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Include your discipline or role, location and time zone, relevant experience,
              availability, and links to two or three portfolio pieces or a CV. Please use links
              rather than attaching sensitive documents.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We handle application information under our{" "}
              <Link to="/privacy-policy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              . To see the kind of work we make, explore our{" "}
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
          <div className="rounded-2xl border border-border bg-background p-5 sm:p-8">
            <h3 className="text-lg font-semibold">Application form</h3>
            <ContactForm
              source="careers"
              idPrefix="careers-application"
              className="mt-5"
              submitLabel="Send application"
              messageLabel="Introduction and portfolio links"
              messagePlaceholder="Tell us which role or discipline interests you, what you have worked on, when you are available, and link to your portfolio or CV."
              messageHint="Please do not include passwords, identity documents or other sensitive information. Portfolio and CV links should open without a login where possible."
              successMessage="Thanks for applying. Your application has been sent to our team."
            />
          </div>
        </section>
      </div>
    </PageShell>
  ),
});
