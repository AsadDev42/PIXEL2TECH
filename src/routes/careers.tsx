import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid } from "@/components/content-blocks";
import { ContactForm } from "@/components/contact-form";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";

const DISCIPLINES = ["Designers", "Developers", "Video editors", "Automation specialists"];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Route = createFileRoute("/careers")({
  head: () =>
    businessHead(
      "/careers",
      "Careers at Pixel2Tech",
      "Explore careers at Pixel2Tech and send an application with your discipline, experience and portfolio. Applications go directly to our team.",
    ),
  component: () => (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <header className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="lg:pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Careers</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Show us what you make, and how you think.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Pixel2Tech is an in-house studio in Lahore. Our designers, developers and editors work
              on connected brand, website, video and automation projects. If you want to work with a
              team like ours, send a focused introduction with examples of your own contribution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#apply"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              >
                Send your application <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#what-to-include"
                className={`inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
              >
                What to include
              </a>
            </div>
          </div>

          <section
            aria-labelledby="open-applications"
            className="self-start rounded-[2rem] border border-border bg-muted/40 p-6 sm:p-8"
          >
            <h2 id="open-applications" className="text-2xl font-bold tracking-tight">
              Open applications
            </h2>
            <p className="mt-4 text-sm font-semibold text-foreground">
              We welcome applications from
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {DISCIPLINES.map((discipline) => (
                <li
                  key={discipline}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
                >
                  {discipline}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This is an open application form, not a promise that a specific vacancy is available.
              We review your details against our current and upcoming needs.
            </p>
          </section>
        </header>

        <div className="mt-12 md:mt-16">
          <ContentGrid
            heading="What to show for your discipline"
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
        </div>

        <div id="what-to-include" className="scroll-mt-24">
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
                title: "Your details",
                body: "Tell us your discipline, experience, location, time zone and availability, plus whether you are asking about a studio role or project collaboration. Attach a CV if it helps explain your background.",
              },
            ]}
          />
        </div>

        <section
          id="apply"
          aria-labelledby="apply-heading"
          className="grid scroll-mt-24 gap-8 rounded-[2rem] bg-muted/40 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 id="apply-heading" className="text-3xl font-bold tracking-tight">
              Send your application.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Your application will be emailed to our team at {SITE.email}. If there is a potential
              match, we can follow up about responsibilities, working arrangements and next steps.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
          <div className="min-w-0 rounded-2xl border border-border bg-background p-5 sm:p-8">
            <h3 className="text-lg font-semibold">Application form</h3>
            <ContactForm
              source="careers"
              idPrefix="careers-application"
              className="mt-5"
              allowCv
              submitLabel="Send application"
              messageLabel="Introduction and portfolio links"
              messagePlaceholder="Tell us which role or discipline interests you, what you have worked on, when you are available, and link to your portfolio."
              messageHint="Please do not include passwords, identity documents or other sensitive information. Portfolio links should open without a login where possible."
              successMessage="Thanks for applying. Your application has been sent to our team."
            />
          </div>
        </section>
      </div>
    </PageShell>
  ),
});
