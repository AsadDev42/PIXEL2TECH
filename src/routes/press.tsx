import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid } from "@/components/content-blocks";
import { trackEvent } from "@/lib/analytics";
import { businessHead } from "@/lib/page-seo";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

const FOUNDERS = TEAM.filter((person) => person.founder);

const COMPANY_DESCRIPTION =
  "Pixel2Tech is a creative and web studio based in Lahore, Pakistan, working with clients worldwide. Its in-house team covers branding, website and Shopify development, video production and automation. Projects connect the way a business looks, the way its website works and the content it publishes.";

const ENQUIRY_INCLUDES = ["The publication or event", "Your topic", "The format", "Your deadline"];
const ENQUIRY_NEEDS = ["An interview", "Company facts", "Founder portraits", "Project imagery"];

// Opens the visitor's email app with the details we ask for already laid out.
const ENQUIRY_HREF = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Media enquiry - Pixel2Tech",
)}&body=${encodeURIComponent(
  "Publication or event:\nTopic:\nFormat:\nDeadline:\nWhat you need (interview, company facts, founder portraits or project imagery):\n",
)}`;

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Route = createFileRoute("/press")({
  head: () =>
    businessHead(
      "/press",
      "Press & studio information",
      "A company overview, founder profiles, interview topics and the media enquiry process for Pixel2Tech, the creative and web studio in Lahore.",
    ),
  component: PressPage,
});

function CopyDescriptionButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_DESCRIPTION);
      setStatus("copied");
      trackEvent("press_description_copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
    >
      {status === "copied" ? (
        <Check size={16} aria-hidden="true" className="text-primary" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      <span aria-live="polite">
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Couldn't copy, select the text"
            : "Copy text"}
      </span>
    </button>
  );
}

function PressPage() {
  const facts = [
    { label: "Founded", value: STATS.foundingYear },
    { label: "Based in", value: SITE.location },
    { label: "Founders", value: FOUNDERS.map((person) => person.name).join(" and ") },
    { label: "Work", value: "Brand, web, video & automation" },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <header className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="lg:pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Press & studio information
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Company facts, founders and a media contact.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For writers, podcast hosts and event organisers who need company information or a
              conversation with our founders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#media-enquiry"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              >
                Send a media enquiry <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#founders"
                className={`inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
              >
                Meet the founders
              </a>
            </div>
          </div>

          <section
            aria-labelledby="company-facts"
            className="rounded-[2rem] border border-border bg-muted/40 p-6 sm:p-8"
          >
            <h2
              id="company-facts"
              className="text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Company facts
            </h2>
            <dl className="mt-4 divide-y divide-border">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
              <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="text-sm text-muted-foreground">Website</dt>
                <dd>
                  <a
                    href={SITE.url}
                    className={`-my-3 inline-flex min-h-11 items-center rounded font-semibold text-primary hover:underline ${FOCUS_RING}`}
                  >
                    pixel2tech.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </header>

        <section
          aria-labelledby="about-pixel2tech"
          className="mt-12 border-t border-border pt-12 md:mt-16 md:pt-16"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Company description
              </p>
              <h2
                id="about-pixel2tech"
                className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                About Pixel2Tech
              </h2>
            </div>
            <CopyDescriptionButton />
          </div>
          <blockquote className="mt-6 max-w-4xl border-l-2 border-primary pl-6 text-lg leading-relaxed text-foreground">
            {COMPANY_DESCRIPTION}
          </blockquote>
        </section>

        <section
          id="founders"
          aria-labelledby="founders-heading"
          className="mt-12 scroll-mt-24 border-t border-border pt-12 md:mt-16 md:pt-16"
        >
          <h2 id="founders-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Meet the founders
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Use these profile pages for background, current role descriptions and examples of the
            work. For a quote or interview, send a request so we can confirm who is best placed to
            speak.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FOUNDERS.map((person) => (
              <article
                key={person.name}
                className="flex items-center gap-5 rounded-2xl border border-border p-5 sm:gap-6 sm:p-6"
              >
                <MediaImage
                  src={person.img}
                  alt={person.name}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover object-top sm:h-32 sm:w-32"
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5">
                    <Link
                      to={person.profile!}
                      className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-semibold text-primary hover:underline ${FOCUS_RING}`}
                    >
                      Founder profile <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                        className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-semibold text-foreground hover:underline ${FOCUS_RING}`}
                      >
                        LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 md:mt-16">
          <ContentGrid
            heading="Topics we can discuss"
            numbered
            items={[
              {
                title: "Building a connected brand",
                body: "How a studio carries visual identity and messaging into websites, social content and video, with examples from its project work.",
              },
              {
                title: "Website and store decisions",
                body: "How product navigation, page structure and mobile layouts are planned around what a customer needs to do next.",
              },
              {
                title: "The production process",
                body: "How an in-house team handles briefs, reviews, design-to-development handovers and agency production partnerships.",
              },
            ]}
          />
        </div>

        <section
          id="media-enquiry"
          aria-labelledby="media-enquiry-heading"
          className="grid scroll-mt-24 gap-8 rounded-[2rem] border border-transparent bg-slate-950 p-6 text-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 dark:border-white/15"
        >
          <div>
            <h2 id="media-enquiry-heading" className="text-3xl font-bold tracking-tight">
              Send a media enquiry.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {[
                { heading: "Include", items: ENQUIRY_INCLUDES },
                { heading: "Tell us if you need", items: ENQUIRY_NEEDS },
              ].map((group) => (
                <div key={group.heading}>
                  <h3 className="text-sm font-semibold text-sky-300">{group.heading}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-200">
                        <Check
                          size={16}
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-sky-300"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={ENQUIRY_HREF}
                onClick={() => trackEvent("email_click", { location: "press" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Mail size={16} aria-hidden="true" /> Contact the studio
              </a>
              <span className="break-all text-center text-sm text-slate-300 sm:text-left">
                {SITE.email}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 p-6">
            <h3 className="text-lg font-semibold">Using our name and project work</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <li>Please use the name Pixel2Tech and link to pixel2tech.com.</li>
              <li>Contact us for image files and usage permission.</li>
              <li>
                Client-owned materials and agency partner work may need additional approval before
                they can be reproduced.
              </li>
            </ul>
            <Link
              to="/portfolio"
              className="mt-5 inline-flex min-h-11 items-center gap-1 rounded text-sm font-semibold text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore the project portfolio <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
