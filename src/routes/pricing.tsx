import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  ChevronRight,
  FilePen,
  FileText,
  Layers,
  Megaphone,
  MessagesSquare,
  Palette,
  Receipt,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { StudioPage as PageShell } from "@/components/studio-page";
import { BookCallButton } from "@/components/book-call-button";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { businessHead } from "@/lib/page-seo";
import { PRICING_POINTS, SERVICE_PROCESS } from "@/lib/service-pages";
import {
  SERVICE_GROUPS,
  getAnyServicePage,
  serviceLabel,
  type ServiceGroupKey,
} from "@/lib/specialist-services";
import { usePageEntrance } from "@/lib/use-anime";

/*
 * Truth rules for this page: no prices, no turnaround times, no guarantees.
 * Every statement follows PRICING_POINTS and SERVICE_PROCESS in service-pages.ts
 * and the terms and conditions page.
 */

const TITLE = "Agency pricing and how our quotes work";
const DESCRIPTION =
  "How Pixel2Tech agency pricing works. We send a fixed written quote after a free scoping call and show what a proposal covers and what moves the price.";

const FAQS: FaqItem[] = [
  {
    q: "How much does a design agency cost?",
    a: "It depends on the scope. A logo refresh and a full identity with guidelines and templates are very different jobs, and so are a landing page and a store with integrations. That is why Pixel2Tech does not publish a price list. After a free scoping call, we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Work starts only once you accept it.",
  },
  {
    q: "Is the quoted price fixed?",
    a: "Yes, for the agreed scope. Fees in an accepted proposal for a fixed-scope project do not change unless the scope changes. If you ask for something outside the proposal, extra revision rounds or changes to work you already approved, we tell you the cost and the effect on the timeline first. We start that work only after you approve it in writing.",
  },
  {
    q: "What do I pay before work starts?",
    a: "Unless your proposal says otherwise, a deposit of 50% of the project fee is due before we schedule or start any work. The deposit reserves our team's time and covers initial planning, and it is non-refundable. You pay the balance at the milestones in your proposal. Without milestones, the balance is due when the work is complete and before final delivery.",
  },
  {
    q: "Which costs are not included in your fee?",
    a: "Third-party costs are separate unless the proposal includes them. They include domains, hosting, premium themes, plugins and apps, fonts, stock media, music licenses, software subscriptions, API and AI usage fees and advertising spend. We list the ones we expect in the proposal. You may pay them in advance or directly to the provider. Our fees also do not include taxes.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes, for ongoing work such as maintenance, SEO, social media, advertising management and support. We bill retainers monthly in advance. Each month includes the hours or deliverables in your proposal, and unused hours do not roll over unless the proposal says so. After any minimum term, a retainer continues month to month until either of us cancels with 30 days' written notice.",
  },
  {
    q: "Which currency do you invoice in?",
    a: "You pay in the currency on the invoice, which is usually US dollars, with a payment method listed on that invoice. Invoices are due within 7 days unless the invoice or proposal states another period. You cover bank charges, currency conversion costs and payment platform fees, so that the full invoiced amount reaches us.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => {
    const head = businessHead("/pricing", TITLE, DESCRIPTION);
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: PricingPage,
});

/* -------------------------------------------------------------------------- */

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl";
const LEAD = "mt-4 text-base leading-relaxed text-muted-foreground";
const BODY = "text-[15px] leading-relaxed text-muted-foreground";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION = "scroll-mt-32 py-16 md:py-24";
const TEXT_LINK =
  "font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary";

const PRICING_ICONS: LucideIcon[] = [MessagesSquare, FileText, FilePen, Receipt];

const AT_A_GLANCE = [
  { label: "Scoping call", value: "Free, before any quote" },
  { label: "Quote", value: "A fixed price in writing" },
  { label: "Quote valid for", value: "30 days by default" },
  { label: "Deposit", value: "50% by default" },
  { label: "Invoices", value: "Within 7 days by default" },
  { label: "Currency", value: "Usually US dollars" },
];

const PROPOSAL_COVERS = [
  "The exact scope. Anything not listed is added later as a change request.",
  "A fixed price and the milestones for paying it.",
  "The revision rounds for each deliverable. Two is the default when the proposal does not say.",
  "The currency and the timeline.",
  "The third-party costs you should expect.",
  "Which source or working files you receive.",
  "The support period after launch.",
];

const PAYMENT_TERMS = [
  {
    title: "Deposit",
    desc: "Unless your proposal says otherwise, 50% of the project fee is due before we schedule or start work. The deposit is non-refundable, and work starts once it reaches our account.",
  },
  {
    title: "Milestones and final payment",
    desc: "You pay the balance at the milestones in your proposal. Without milestones, it is due when the work is complete and before final delivery. We release final files, launch and hand over after full payment.",
  },
  {
    title: "Invoices",
    desc: "Invoices are due within 7 days of the invoice date unless the invoice or proposal states another period. If you disagree with an invoice, tell us in writing within 7 days.",
  },
  {
    title: "Currency and fees",
    desc: "You pay in the currency on the invoice, usually US dollars. You cover bank, conversion and payment platform fees so that the full amount reaches us.",
  },
  {
    title: "Taxes",
    desc: "Our fees do not include sales tax, VAT, withholding or similar taxes. You are responsible for those, except taxes on our own income.",
  },
];

const THIRD_PARTY_COSTS = [
  "Domains",
  "Hosting",
  "Premium themes",
  "Plugins and apps",
  "Fonts",
  "Stock media",
  "Music licenses",
  "Software subscriptions",
  "API and AI usage",
  "Email or SMS sending",
  "Advertising spend",
];

const ENGAGEMENTS = [
  {
    title: "A one-off project",
    Icon: FileText,
    lead: "For a defined piece of work, such as a brand identity, a website or a set of videos.",
    points: [
      "One proposal sets the scope, price and timeline.",
      "The price changes only if the scope changes.",
      "We quote extra work as a change request before we start it.",
      "We fix defects in our work that you report within 14 days after launch or acceptance, unless the proposal sets another period.",
    ],
  },
  {
    title: "Ongoing monthly work",
    Icon: Repeat,
    lead: "For maintenance, SEO, social media, advertising management and support.",
    points: [
      "We bill monthly in advance, and payment is due before each month starts.",
      "The proposal sets the hours or deliverables for each month. Unused ones do not roll over unless it says so.",
      "A retainer runs for any minimum term, then month to month until either of us cancels with 30 days' written notice.",
      "Ad spend is separate and usually goes straight to the advertising platform.",
    ],
  },
];

const GROUP_ICONS: Record<ServiceGroupKey, LucideIcon> = {
  creative: Palette,
  production: Layers,
  ai: Brain,
  marketing: Megaphone,
};

/** Services whose price drivers represent each family. */
const FEATURED: Record<ServiceGroupKey, string[]> = {
  creative: ["branding-and-design"],
  production: ["website-development", "video-editing-and-ads"],
  ai: ["automation-and-crm", "ai-solutions"],
  marketing: ["seo-and-search-growth", "social-media-and-email"],
};

const RELATED = [
  { to: "/services", label: "Services", desc: "Every service we offer" },
  { to: "/portfolio", label: "Portfolio", desc: "Real client projects" },
  { to: "/results", label: "Results", desc: "What the work changed" },
  { to: "/terms-and-conditions", label: "Terms and conditions", desc: "Payment and ownership" },
  { to: "/trust-center", label: "Trust center", desc: "Files, data and privacy" },
  { to: "/help-center", label: "Help center", desc: "Answers by topic" },
  { to: "/contact", label: "Contact", desc: "Send a project brief" },
] as const;

function PricingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);

  const id = (name: string) => `pricing-${name}`;
  const sections = [
    { id: id("how"), label: "How pricing works" },
    { id: id("steps"), label: "Steps" },
    { id: id("payments"), label: "Payments" },
    { id: id("engagements"), label: "Project or monthly" },
    { id: id("drivers"), label: "What affects the quote" },
    { id: id("faq"), label: "Questions" },
  ];

  const families = SERVICE_GROUPS.map((group) => ({
    ...group,
    Icon: GROUP_ICONS[group.key],
    featured: FEATURED[group.key].flatMap((slug) => {
      const found = getAnyServicePage(slug);
      if (!found) return [];
      const item = group.items.find((i) => i.slug === slug);
      return [
        {
          slug,
          label: serviceLabel(slug, item?.label),
          drivers: found.page.priceDrivers.slice(0, 3),
        },
      ];
    }),
  }));

  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby={id("title")} className="bg-background pb-12 pt-8 md:pb-16 md:pt-12">
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
                Pricing
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div data-enter className="min-w-0 lg:col-span-7">
              <p className={EYEBROW}>Pricing</p>
              <h1
                id={id("title")}
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Agency pricing with a clear scope
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you need to make. After a free scoping call, you receive a fixed
                written quote with deliverables, review rounds and payment milestones. You know what
                is included before production starts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton
                  source="pricing_hero"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                />
                <a
                  href={`#${id("drivers")}`}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  What affects the quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <section
              data-enter
              aria-labelledby={id("glance")}
              className="min-w-0 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 lg:col-span-5"
            >
              <h2 id={id("glance")} className={EYEBROW}>
                Pricing at a glance
              </h2>
              <dl className="mt-4 divide-y divide-border">
                {AT_A_GLANCE.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4"
                  >
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="font-medium text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Your proposal and invoice confirm the exact payment terms.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Jump links */}
      <nav
        aria-label="On this page"
        className="sticky top-[61px] z-30 border-y border-border bg-background/95 backdrop-blur sm:top-[73px]"
      >
        <ul
          className={`${CONTAINER} flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={`inline-flex min-h-12 items-center whitespace-nowrap rounded px-3 text-sm font-medium text-muted-foreground transition hover:text-foreground ${FOCUS_RING}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* How pricing works */}
      <section
        id={id("how")}
        aria-labelledby={id("how-title")}
        className={`bg-muted/50 ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
          <div className="min-w-0 lg:col-span-7">
            <p className={EYEBROW}>Engagement and pricing</p>
            <h2 id={id("how-title")} className={`mt-4 ${H2}`}>
              How pricing works
            </h2>
            <p className={LEAD}>
              We don&apos;t publish a price list, because scope varies too much from one project to
              the next. You get a fixed quote in writing before any work starts.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {PRICING_POINTS.map((point, i) => {
                const PointIcon = PRICING_ICONS[i] ?? Check;
                return (
                  <li key={point.title} className="flex min-w-0 gap-4">
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background text-primary"
                    >
                      <PointIcon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-snug">{point.title}</h3>
                      <p className={`mt-1 ${BODY}`}>{point.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="min-w-0 rounded-3xl border border-border bg-background p-6 sm:p-8 lg:col-span-5 lg:self-start">
            <h3 className="text-xl font-semibold leading-snug tracking-tight">
              What your proposal sets out
            </h3>
            <ul className="mt-6 space-y-4">
              {PROPOSAL_COVERS.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={2.25}
                  />
                  <span className="text-[15px] leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-8 border-t border-border pt-6 ${BODY}`}>
              Unless a proposal says otherwise, a quote is valid for 30 days. The full rules are in
              our{" "}
              <Link to="/terms-and-conditions" className={TEXT_LINK}>
                terms and conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Steps: the same four steps as /services */}
      <section id={id("steps")} aria-labelledby={id("steps-title")} className={SECTION}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Process</p>
            <h2 id={id("steps-title")} className={`mt-4 ${H2}`}>
              How a quote comes together
            </h2>
            <p className={LEAD}>
              The first two steps happen before you pay anything. We start the work only once you
              approve the proposal.
            </p>
          </div>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SERVICE_PROCESS.map((step, i) => {
              return (
                <li key={step.title} className="min-w-0 border-t border-border pt-6">
                  <span
                    aria-hidden="true"
                    className="studio-step mb-4 block text-sm font-medium tabular-nums text-primary"
                  >
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className={`mt-2 ${BODY}`}>{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Payments */}
      <section
        id={id("payments")}
        aria-labelledby={id("payments-title")}
        className={`border-t border-border ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:sticky lg:top-40 lg:col-span-4 lg:self-start">
            <p className={EYEBROW}>Payments</p>
            <h2 id={id("payments-title")} className={`mt-4 ${H2}`}>
              Deposits, milestones and invoices
            </h2>
            <p className={LEAD}>
              These are the defaults in our terms. Your proposal can set different payment terms,
              and where it does, the proposal applies.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {PAYMENT_TERMS.map((term, i) => (
                <li key={term.title} className="min-w-0 border-t border-border pb-8 pt-6">
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium tabular-nums text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
                    {term.title}
                  </h3>
                  <p className={`mt-2 ${BODY}`}>{term.desc}</p>
                </li>
              ))}
            </ol>
            <div className="rounded-3xl border border-border p-6 sm:p-8">
              <h3 className="text-xl font-semibold leading-snug tracking-tight">
                Costs outside our fee
              </h3>
              <p className={`mt-2 ${BODY}`}>
                Unless the proposal includes them, you pay these yourself, in advance or directly to
                the provider. We buy licenses in your name wherever possible.
              </p>
              <ul aria-label="Third-party costs" className="mt-6 flex flex-wrap gap-2">
                {THIRD_PARTY_COSTS.map((cost) => (
                  <li key={cost} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {cost}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* One-off projects and monthly work */}
      <section
        id={id("engagements")}
        aria-labelledby={id("engagements-title")}
        className={`bg-muted/50 ${SECTION}`}
      >
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Ways to work with us</p>
            <h2 id={id("engagements-title")} className={`mt-4 ${H2}`}>
              One project or ongoing monthly work
            </h2>
            <p className={LEAD}>
              You can hire us for a single project and add other work later. Work that repeats every
              month runs on a retainer with its own proposal.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
            {ENGAGEMENTS.map(({ title, Icon, lead, points }) => (
              <article
                key={title}
                className="flex min-w-0 flex-col rounded-3xl border border-border bg-background p-6 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className={`mt-2 ${BODY}`}>{lead}</p>
                <ul className="mt-6 space-y-4 border-t border-border pt-6">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.25}
                      />
                      <span className="text-[15px] leading-relaxed text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What affects the quote, by service family */}
      <section id={id("drivers")} aria-labelledby={id("drivers-title")} className={SECTION}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className={EYEBROW}>Price drivers</p>
              <h2 id={id("drivers-title")} className={`mt-4 ${H2}`}>
                What affects the quote
              </h2>
              <p className={LEAD}>
                Each service has its own price drivers. Here are the main ones by service family.
                Every service page lists the full set.
              </p>
            </div>
            <Link
              to="/services"
              className={`inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary sm:self-auto ${FOCUS_RING}`}
            >
              See all services
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
            {families.map(({ key, title, description, items, Icon, featured }) => (
              <article
                key={key}
                aria-labelledby={id(`family-${key}`)}
                className="flex min-w-0 flex-col rounded-3xl border border-border bg-background p-6 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 id={id(`family-${key}`)} className="text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className={`mt-4 ${BODY}`}>{description}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {featured.map((service) => (
                    <div key={service.slug} className="min-w-0 border-t border-border pt-4">
                      <h4 className="text-sm font-medium text-foreground">{service.label}</h4>
                      <ul className="mt-3 space-y-2">
                        {service.drivers.map((driver) => (
                          <li key={driver} className="flex gap-2 text-sm text-muted-foreground">
                            <Check
                              aria-hidden="true"
                              className="mt-1 h-4 w-4 shrink-0 text-primary"
                              strokeWidth={2.25}
                            />
                            <span className="leading-relaxed">{driver}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Services in this family
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: item.slug }}
                          className={`inline-flex min-h-10 items-center rounded-full border border-border px-3 text-xs font-medium text-foreground transition hover:border-primary ${FOCUS_RING}`}
                        >
                          {serviceLabel(item.slug, item.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section
        id={id("faq")}
        aria-labelledby={id("faq-title")}
        className={`border-t border-border ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:col-span-8">
            <h2 id={id("faq-title")} className={H2}>
              Common questions about pricing
            </h2>
            <Faq items={FAQS} className="mt-8" />
          </div>
          <aside
            aria-labelledby={id("terms")}
            className="min-w-0 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 lg:sticky lg:top-40 lg:col-span-4 lg:self-start"
          >
            <h2 id={id("terms")} className="text-xl font-semibold tracking-tight">
              The full payment terms
            </h2>
            <p className={`mt-3 ${BODY}`}>
              Deposits, refunds, late payment, retainers and ownership are all set out in our terms
              and conditions. Your proposal can change them for your project.
            </p>
            <Link
              to="/terms-and-conditions"
              className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
            >
              Read the terms and conditions <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      {/* Closing CTA + related pages */}
      <section aria-labelledby={id("cta")} className="bg-background pb-16 md:pb-24">
        <div className={CONTAINER}>
          <ClosingCta
            id={id("cta")}
            title="Get a fixed quote for your project"
            body="Tell us what you need and we'll recommend where to start. We reply within one business day."
            source="pricing_cta"
          />

          <nav aria-labelledby={id("related")} className="mt-12 sm:mt-16">
            <h2
              id={id("related")}
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              Related pages
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((page) => (
                <li key={page.to} className="min-w-0">
                  <Link
                    to={page.to}
                    className={`group flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4 text-foreground transition hover:border-primary ${FOCUS_RING}`}
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{page.label}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{page.desc}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
