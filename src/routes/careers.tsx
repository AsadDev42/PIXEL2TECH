import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clapperboard, Code, Palette } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { PageShell } from "@/components/site-chrome";
import { ContactForm } from "@/components/contact-form";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

const DISCIPLINES = [
  {
    title: "Design",
    Icon: Palette,
    work: ["Brand identities", "Website layouts", "Campaign assets", "Social content"],
    show: "Share the brief, your design decisions and how your work fits the wider brand.",
  },
  {
    title: "Development and automation",
    Icon: Code,
    work: ["Shopify and WordPress stores", "Custom websites", "Connected workflows"],
    show: "Explain what you built, the tools you used and how you checked that it works.",
  },
  {
    title: "Video and motion",
    Icon: Clapperboard,
    work: ["Short-form content", "Long-form edits", "Ads", "Animation"],
    show: "Show how you handle pacing, captions, sound and the different formats a client needs.",
  },
];

const INTRODUCTION = [
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
];

const NEXT_STEPS = [
  `Your application is emailed to our team at ${SITE.email}.`,
  "We review your details against our current and upcoming needs.",
  "If there is a potential match, we can follow up about responsibilities, working arrangements and next steps.",
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Route = createFileRoute("/careers")({
  head: () =>
    businessHead(
      "/careers",
      "Careers at Pixel2Tech",
      "Explore careers at Pixel2Tech and send an application with your discipline, experience and portfolio. Applications go directly to our team.",
    ),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <header className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
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

          <section aria-labelledby="team-heading">
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="team-heading" className="text-sm font-semibold text-foreground">
                The in-house team
              </h2>
              <Link
                to="/about"
                className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-semibold text-primary hover:underline ${FOCUS_RING}`}
              >
                Meet the team <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-2 grid grid-cols-3 gap-3 sm:gap-4">
              {TEAM.map((person) => (
                <li key={person.name} className="min-w-0">
                  <MediaImage
                    src={person.img}
                    alt={person.name}
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl bg-muted object-cover object-top"
                  />
                  <p className="mt-2 truncate text-sm font-semibold text-foreground">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{person.role}</p>
                </li>
              ))}
            </ul>
          </section>
        </header>

        <section
          aria-labelledby="open-applications"
          className="mt-12 grid gap-3 rounded-[2rem] bg-muted/40 p-6 sm:p-8 md:mt-16 lg:grid-cols-[0.5fr_1.5fr] lg:gap-8"
        >
          <h2 id="open-applications" className="text-2xl font-bold tracking-tight">
            Open applications
          </h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            We welcome applications from designers, developers, video editors and automation
            specialists. This is an open application form, not a promise that a specific vacancy is
            available. We review your details against our current and upcoming needs.
          </p>
        </section>

        <section aria-labelledby="disciplines-heading" className="mt-16 md:mt-24">
          <h2
            id="disciplines-heading"
            className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What to show for your discipline
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {DISCIPLINES.map(({ title, Icon, work, show }) => (
              <article
                key={title}
                className="flex flex-col rounded-3xl border border-border bg-background p-6 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <ul className="mb-6 mt-4 flex flex-wrap gap-2">
                  {work.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  {show}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="what-to-include"
          aria-labelledby="include-heading"
          className="mt-16 grid scroll-mt-24 gap-8 md:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <h2
            id="include-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:sticky lg:top-24 lg:self-start"
          >
            What to include in your introduction
          </h2>
          <ol className="divide-y divide-border border-y border-border">
            {INTRODUCTION.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_1fr] sm:py-8">
                <span aria-hidden="true" className="text-3xl font-bold tracking-tight text-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="apply"
          aria-labelledby="apply-heading"
          className="mt-16 grid scroll-mt-24 gap-8 rounded-[2rem] border border-transparent bg-slate-950 p-5 text-white sm:p-10 md:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 dark:border-white/15"
        >
          <div className="p-1 sm:p-0 lg:sticky lg:top-24 lg:self-start">
            <h2 id="apply-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Send your application.
            </h2>
            <h3 className="mt-8 text-sm font-semibold text-sky-300">What happens next</h3>
            <ol className="mt-4 space-y-4">
              {NEXT_STEPS.map((step, index) => (
                <li key={step} className="flex gap-4 leading-relaxed text-slate-200">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 break-words">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-slate-400">
              We handle application information under our{" "}
              <Link to="/privacy-policy" className="text-slate-200 underline underline-offset-4">
                Privacy Policy
              </Link>
              . To see the kind of work we make, explore our{" "}
              <Link to="/portfolio" className="text-slate-200 underline underline-offset-4">
                portfolio
              </Link>
              .
            </p>
          </div>
          <div className="min-w-0 rounded-3xl bg-background p-5 text-foreground sm:p-8">
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
  );
}
