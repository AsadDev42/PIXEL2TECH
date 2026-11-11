import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Copy, Mail } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { PageShell } from "@/components/site-chrome";
import { trackEvent } from "@/lib/analytics";
import { businessHead } from "@/lib/page-seo";
import { SERVICES, SITE, STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";
import { usePageEntrance } from "@/lib/use-anime";
import officeStudioAsset from "@/assets/opt-office-studio-2-800.webp.asset.json";

const FOUNDERS = TEAM.filter((person) => person.founder);

const COMPANY_DESCRIPTION =
  "Pixel2Tech is a creative and web studio based in Lahore, Pakistan, working with clients worldwide, including the United States, United Kingdom, Canada and Europe. Its in-house team covers branding, website and Shopify development, video production and automation. Projects connect the way a business looks, the way its website works and the content it publishes.";

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

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl";
const LEAD = "mt-4 text-base leading-relaxed text-muted-foreground";
const BODY = "text-[15px] leading-relaxed text-muted-foreground";
const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION = "scroll-mt-32 py-16 md:py-24";

const TOPICS = [
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
];

const USAGE_RULES = [
  "Please use the name Pixel2Tech and link to pixel2tech.com.",
  "Contact us for image files and usage permission.",
  "Client-owned materials and agency partner work may need additional approval before they can be reproduced.",
];

function PressPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);

  const clients = `Worldwide, including the ${SITE.primaryMarkets.join(", ").replace(/, ([^,]*)$/, " and $1")}`;

  // Plain, checkable facts only, all from site-config and the team list.
  const facts = [
    { label: "Name", value: SITE.name },
    { label: "Founded", value: STATS.foundingYear },
    { label: "Based in", value: SITE.location },
    { label: "Clients", value: clients },
    {
      label: FOUNDERS.length > 1 ? "Founders" : "Founder",
      value: FOUNDERS.map((person) => `${person.name}, ${person.role}`).join("; "),
    },
    { label: "Projects", value: `${STATS.projects} delivered` },
    { label: "Services", value: SERVICES.join(", ") },
    { label: "Pricing", value: "Fixed written quote after a free scoping call" },
    { label: "Contact", value: SITE.email },
  ];

  const highlights = [
    { label: "Founded", value: STATS.foundingYear },
    { label: "Based in", value: SITE.location },
    { label: "Projects delivered", value: STATS.projects },
    { label: "Clients", value: "Worldwide" },
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="press-title" className="bg-background pb-12 pt-8 md:pb-16 md:pt-12">
        <div ref={rootRef} className={CONTAINER}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className={`inline-flex min-h-10 items-center rounded hover:text-foreground ${FOCUS_RING}`}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="font-medium text-foreground">
                Press
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div data-enter className="min-w-0 lg:col-span-6">
              <p className={EYEBROW}>Press and studio information</p>
              <h1
                id="press-title"
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Company facts, founders <span className="text-primary">and a media contact</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                For writers, podcast hosts and event organisers who need company information or a
                conversation with our founders.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#media-enquiry"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                >
                  Send a media enquiry <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#founders"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  Meet the founders
                </a>
              </div>
            </div>

            <figure data-enter className="relative min-w-0 lg:col-span-6">
              <img
                src={officeStudioAsset.url}
                alt="Pixel2Tech designers and developers working at their desks"
                width={800}
                height={600}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-2xl bg-background/95 p-4 shadow-[var(--elev-2)] backdrop-blur sm:bottom-6 sm:left-6 sm:p-5">
                <span className="block text-sm text-muted-foreground">The studio</span>
                <span className="mt-1 block font-semibold text-foreground">{SITE.location}</span>
              </figcaption>
            </figure>
          </div>

          <dl
            data-enter
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-16 lg:grid-cols-4"
          >
            {highlights.map((item) => (
              <div key={item.label} className="min-w-0 bg-background p-5 sm:p-6">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Company description and facts */}
      <section aria-labelledby="about-pixel2tech" className={`bg-muted/50 ${SECTION}`}>
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:col-span-5">
            <p className={EYEBROW}>Company description</p>
            <h2 id="about-pixel2tech" className={`mt-4 ${H2}`}>
              About Pixel2Tech
            </h2>
            <p className={LEAD}>Use this description as it is, or copy it into your notes.</p>
            <figure className="mt-8 rounded-3xl border border-border bg-background p-6 sm:p-8">
              <blockquote className="text-lg leading-relaxed text-foreground">
                {COMPANY_DESCRIPTION}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-6">
                <CopyDescriptionButton />
              </figcaption>
            </figure>
          </div>

          <section aria-labelledby="company-facts" className="min-w-0 lg:col-span-7">
            <h2 id="company-facts" className="text-xl font-semibold tracking-tight">
              Company facts
            </h2>
            <dl className="mt-6 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 p-5 sm:grid-cols-3 sm:gap-6 sm:p-6">
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="min-w-0 break-words font-medium text-foreground sm:col-span-2">
                    {fact.value}
                  </dd>
                </div>
              ))}
              <div className="grid gap-1 p-5 sm:grid-cols-3 sm:gap-6 sm:p-6">
                <dt className="text-sm text-muted-foreground">Website</dt>
                <dd className="sm:col-span-2">
                  <a
                    href={SITE.url}
                    className={`-my-3 inline-flex min-h-11 items-center rounded font-medium text-primary hover:underline ${FOCUS_RING}`}
                  >
                    pixel2tech.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" aria-labelledby="founders-heading" className={SECTION}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Founders</p>
            <h2 id="founders-heading" className={`mt-4 ${H2}`}>
              Meet the founders
            </h2>
            <p className={LEAD}>
              Use these profile pages for background, current role descriptions and examples of the
              work. For a quote or interview, send a request so we can confirm who is best placed to
              speak.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FOUNDERS.map((person) => (
              <article
                key={person.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-background sm:flex-row"
              >
                <MediaImage
                  src={person.img}
                  alt={`Portrait of ${person.name}, ${person.role} at Pixel2Tech`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full shrink-0 object-cover object-top sm:aspect-auto sm:w-48 lg:w-56"
                />
                <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8">
                  <p className="text-sm font-medium text-primary">{person.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight">
                    {person.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-5">
                    {person.profile && (
                      <Link
                        to={person.profile}
                        className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                      >
                        Founder profile <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    )}
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                        className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-foreground hover:underline ${FOCUS_RING}`}
                      >
                        LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interview topics */}
      <section aria-labelledby="topics-heading" className={`bg-muted/50 ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Interviews</p>
            <h2 id="topics-heading" className={`mt-4 ${H2}`}>
              Topics we can discuss
            </h2>
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {TOPICS.map((topic, i) => (
              <li key={topic.title} className="flex min-w-0 flex-col bg-background p-6 sm:p-8">
                <span aria-hidden="true" className="text-sm font-medium tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight">
                  {topic.title}
                </h3>
                <p className={`mt-3 ${BODY}`}>{topic.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Media enquiry */}
      <section
        id="media-enquiry"
        aria-labelledby="media-enquiry-heading"
        className={`bg-slate-950 text-white ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Media enquiries
            </p>
            <h2
              id="media-enquiry-heading"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Send a media enquiry
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { heading: "Include", items: ENQUIRY_INCLUDES },
                { heading: "Tell us if you need", items: ENQUIRY_NEEDS },
              ].map((group) => (
                <div key={group.heading} className="rounded-2xl bg-white/5 p-6">
                  <h3 className="text-sm font-medium text-sky-300">{group.heading}</h3>
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={ENQUIRY_HREF}
                onClick={() => trackEvent("email_click", { location: "press" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Mail size={16} aria-hidden="true" /> Contact the studio
              </a>
              <span className="break-all text-center text-sm text-slate-300 sm:text-left">
                {SITE.email}
              </span>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/15 p-6 sm:p-8 lg:col-span-5 lg:self-start">
            <h3 className="text-xl font-semibold leading-snug tracking-tight">
              Using our name and project work
            </h3>
            <ul className="mt-6 divide-y divide-white/10">
              {USAGE_RULES.map((rule) => (
                <li
                  key={rule}
                  className="py-4 text-[15px] leading-relaxed text-slate-300 first:pt-0 last:pb-0"
                >
                  {rule}
                </li>
              ))}
            </ul>
            <Link
              to="/portfolio"
              className="mt-6 inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore the project portfolio <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
