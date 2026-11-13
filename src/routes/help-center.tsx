import { useRef, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Clock,
  FolderOpen,
  Globe,
  Mail,
  MessageCircle,
  MessagesSquare,
  Receipt,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { StudioPage as PageShell } from "@/components/studio-page";
import { BookCallButton } from "@/components/book-call-button";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { trackEvent } from "@/lib/analytics";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";
import { usePageEntrance } from "@/lib/use-anime";

/*
 * Answers here condense the FAQs on /, /services, /about and the service pages,
 * and follow the terms and privacy policy. No turnaround times, prices or
 * guarantees.
 */

const TITLE = "Help center for clients and new projects";
const DESCRIPTION =
  "Answers for Pixel2Tech clients on starting a project, pricing and payment, working together, file ownership, websites and hosting, and help after launch.";

/** SITE.hours uses dashes in its ranges; this page writes them out in words. */
const spellRange = (text: string) => text.replace(/\s*[–-]\s*/g, " to ");

const FAQS: FaqItem[] = [
  {
    q: "Can I hire you for just one service?",
    a: "Yes. You can hire us for a single job, such as a logo, a Shopify store or a set of ad edits, and add other services later if you need them. Each piece of work gets its own scope in a proposal, so you pay only for the work you agree to.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: `Yes. We work with clients worldwide, including the US, UK, Canada and Europe, from our studio in ${SITE.location}. Calls run over Google Meet, and day-to-day work happens over email and WhatsApp. You get a fixed written quote before we start, and you review every stage before files are final.`,
  },
  {
    q: "Can you work with our agency or in-house team?",
    a: "Yes. We can deliver an agreed part of a project, such as development from approved designs, campaign creative or video editing. We define the review process, the communication owner and the handover requirements before production starts. We label agency partner work on the relevant portfolio pages.",
  },
  {
    q: "Which platforms and tools do you use?",
    a: "We build websites in React, Next.js or custom code, and online stores on Shopify or WordPress with WooCommerce. For automation we use n8n, Make or Zapier. We recommend a platform based on your budget and on who will maintain the work after handover, and we explain the trade-offs on the scoping call.",
  },
  {
    q: "How do I get help with a live project?",
    a: `Message us in the channel your project already uses, such as email, WhatsApp or your project management tool. For anything formal, such as an invoice question or a notice under the agreement, email ${SITE.email}. Our business hours are in Pakistan time, and we do not promise replies outside them unless your proposal says so.`,
  },
];

export const Route = createFileRoute("/help-center")({
  head: () => {
    const head = businessHead("/help-center", TITLE, DESCRIPTION);
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: HelpCenterPage,
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

type Answer = { q: string; a: ReactNode };

type Topic = {
  id: string;
  title: string;
  lead: string;
  Icon: LucideIcon;
  link: { to: "/contact" | "/pricing" | "/about" | "/trust-center" | "/services"; label: string };
  answers: Answer[];
};

const TOPICS: Topic[] = [
  {
    id: "starting-a-project",
    title: "Starting a project",
    lead: "What to send us, what happens on the first call and when work begins.",
    Icon: Rocket,
    link: { to: "/contact", label: "Send a project brief" },
    answers: [
      {
        q: "What should I send with a project enquiry?",
        a: "Share your current website or creative, the audience you want to reach, what needs to change and any deadline. Include existing brand files or footage where relevant. If the brief is still taking shape, tell us the problem you want to solve, and we can discuss a useful first phase.",
      },
      {
        q: "What happens after I book a call?",
        a: "We talk through your goals, audience and deadline on a 30-minute call, and we ask questions before we recommend anything. Then we send a proposal with the scope, price and timeline. Work starts once you approve it.",
      },
      {
        q: "When does work start?",
        a: "Work starts after you accept the proposal and the agreed deposit reaches our account. You accept a proposal when you sign it, confirm it by email or message, pay the deposit or ask us to start, whichever comes first.",
      },
      {
        q: "How long is a quote valid?",
        a: "Unless the proposal says otherwise, a quote is valid for 30 days from the date we issue it. After that, or if the scope changes, we may revise it.",
      },
    ],
  },
  {
    id: "pricing-and-payment",
    title: "Pricing and payment",
    lead: "How quotes, deposits and invoices work. Your proposal can set different terms.",
    Icon: Receipt,
    link: { to: "/pricing", label: "How pricing works" },
    answers: [
      {
        q: "How much will my project cost?",
        a: "We don't publish a price list, because scope varies too much from one project to the next. After a free scoping call, you get a fixed price in writing with the scope, milestones and timeline. The pricing page explains what moves the quote.",
      },
      {
        q: "How much is the deposit?",
        a: "Unless your proposal says otherwise, the deposit is 50% of the project fee. It is due before we schedule or start work, it reserves our team's time, and it is non-refundable.",
      },
      {
        q: "When are invoices due, and in which currency?",
        a: "Invoices are due within 7 days unless the invoice or proposal says otherwise. You pay in the currency on the invoice, usually US dollars, and you cover bank, conversion and payment platform fees.",
      },
      {
        q: "Do you give refunds?",
        a: "Deposits, fees for work already done and third-party costs already committed are non-refundable. Differences of creative taste go through the revision rounds in your proposal. Any other refund is at our discretion or where the law requires it.",
      },
    ],
  },
  {
    id: "working-together",
    title: "Working together",
    lead: "How we communicate, when we work and what we need from you.",
    Icon: MessagesSquare,
    link: { to: "/about", label: "Meet the team" },
    answers: [
      {
        q: "How do we communicate during a project?",
        a: "We use email, project management tools, video calls and WhatsApp. You can give feedback, approvals and change requests in any of them. Formal notices, such as an invoice dispute, go by email.",
      },
      {
        q: "What are your working hours?",
        a: (
          <>
            Our business hours are in Pakistan time.
            <span className="mt-3 block max-w-sm space-y-1">
              {SITE.hours.map((h) => (
                <span key={h.days} className="flex justify-between gap-4 text-foreground">
                  <span>{spellRange(h.days)}</span>
                  <span className="text-right">{spellRange(h.time)}</span>
                </span>
              ))}
            </span>
          </>
        ),
      },
      {
        q: "How many revision rounds are included?",
        a: "Your proposal states the number. If it doesn't, you get two revision rounds for each deliverable. A round is one consolidated set of feedback. Revisions refine the agreed direction, and new concepts, pages or features count as change requests.",
      },
      {
        q: "What do you need from us?",
        a: "We need one contact person who can give feedback and approvals, plus the content and access we ask for. Approvals are due within 5 business days unless we agree otherwise. Late content or feedback moves the schedule by at least the length of the delay.",
      },
      {
        q: "What if we want something that isn't in the proposal?",
        a: "We treat it as a change request. We tell you the cost and the effect on the timeline before we start, and we do the work only once you approve it in writing.",
      },
    ],
  },
  {
    id: "files-and-ownership",
    title: "Files and ownership",
    lead: "Who owns the work, which files you receive and how licenses work.",
    Icon: FolderOpen,
    link: { to: "/trust-center", label: "Read the trust center" },
    answers: [
      {
        q: "Do we own the final files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as set out in your proposal. We keep only our own pre-existing tools and templates, and you get a license to use the parts built into your work.",
      },
      {
        q: "Do we get the source and working files?",
        a: "Layered design files, project files and raw footage are part of the handover only when the proposal lists them. Tell us on the scoping call if you need them, so we can add them to the scope.",
      },
      {
        q: "Who holds the licenses for fonts, stock media and plugins?",
        a: "Third-party items stay under their owners' licenses. We buy licenses in your name wherever possible, and we tell you which items need a paid license.",
      },
      {
        q: "Will our project appear in your portfolio?",
        a: "We may show completed work that is already public, unless you have an NDA with us or ask us in writing not to. We never show your confidential information, and we remove a project from our own channels if you ask.",
      },
    ],
  },
  {
    id: "websites-and-hosting",
    title: "Websites and hosting",
    lead: "Platforms, hosting costs, redesigns and what we can promise about uptime.",
    Icon: Globe,
    link: { to: "/services", label: "See all services" },
    answers: [
      {
        q: "Do you build with WordPress, Shopify or custom code?",
        a: "All three. Custom React or Next.js builds suit sites that need speed or custom features. WordPress suits teams who want a familiar editor, and Shopify suits online stores. We recommend one based on your budget, your content and who will maintain the site after launch.",
      },
      {
        q: "Who pays for hosting, domains and apps?",
        a: "You do, unless your proposal says they are included. That covers hosting, domains, Shopify plans, paid themes, plugins and apps. We list the ones we expect in the proposal and recommend keeping those subscriptions in your own accounts.",
      },
      {
        q: "Can you redesign our site without losing search traffic?",
        a: "We plan redesigns to protect what already ranks. We map old URLs to new ones with 301 redirects, keep the titles and content that bring in traffic, and check indexing after launch. No one can guarantee rankings, but we plan for common causes of lost traffic, such as missing redirects and deleted content.",
      },
      {
        q: "Do you guarantee uptime?",
        a: "Not unless the proposal states a level. Hosting runs on third-party providers, so we do not promise uptime by default. If we provide hosting, maintenance or support, your proposal describes what the plan includes.",
      },
    ],
  },
  {
    id: "after-launch",
    title: "After launch",
    lead: "Fixes, monthly work, platform changes and the handover checklist.",
    Icon: Wrench,
    link: { to: "/services", label: "Explore ongoing services" },
    answers: [
      {
        q: "Do you fix problems after launch?",
        a: "Yes, for defects in our own work. Unless your proposal states another period, we fix defects you report within 14 days after launch or acceptance at no extra cost. This does not cover new features, changes by others, third-party updates or hosting problems.",
      },
      {
        q: "Can you keep working on the site each month?",
        a: "Yes. Maintenance, SEO, social media, advertising management and support can run on a monthly retainer. Each month includes the hours or deliverables in your proposal, and either of us can cancel with 30 days' written notice after any minimum term.",
      },
      {
        q: "What if a platform such as Shopify changes something?",
        a: "We don't control third-party platforms. Adapting your site to their changes after delivery is new work, unless a maintenance plan covers it, and we quote it before we start.",
      },
      {
        q: "Who renews the domain and SSL certificate?",
        a: "You do, unless your maintenance plan includes renewals. Keep your own backups of your website and files too, because any backups we keep are a convenience.",
      },
      {
        q: "What should we do when the project ends?",
        a: "Change any passwords you shared with us, and check that every account for your business is in your name. If we opened an account in ours, we transfer it to you on request after full payment, where the provider allows.",
      },
    ],
  },
];

const RELATED = [
  { to: "/services", label: "Services", desc: "Every service we offer" },
  { to: "/portfolio", label: "Portfolio", desc: "Real client projects" },
  { to: "/results", label: "Results", desc: "What the work changed" },
  { to: "/blog", label: "Blog", desc: "Guides and articles" },
  { to: "/pricing", label: "Pricing", desc: "How quotes work" },
  { to: "/trust-center", label: "Trust center", desc: "Files, data and privacy" },
  { to: "/terms-and-conditions", label: "Terms and conditions", desc: "The full agreement" },
  { to: "/privacy-policy", label: "Privacy policy", desc: "Personal data and cookies" },
] as const;

function HelpCenterPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);
  const [query, setQuery] = useState("");
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const visibleTopics = TOPICS.map((topic) => ({
    ...topic,
    answers: topic.answers.filter((answer) =>
      terms.every((term) => `${topic.title} ${answer.q}`.toLocaleLowerCase().includes(term)),
    ),
  })).filter((topic) => topic.answers.length > 0);
  const matchingQuestions = visibleTopics.reduce((count, topic) => count + topic.answers.length, 0);

  const id = (name: string) => `help-${name}`;

  return (
    <PageShell>
      {/* Hero with the topic jump list */}
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
                Help center
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div data-enter className="min-w-0 lg:col-span-7">
              <p className={EYEBROW}>Help center</p>
              <h1
                id={id("title")}
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Answers before, during and after your project
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Find answers on quotes, reviews, payments and handovers. For an active project, use
                your agreed project channel.
              </p>
              <div className="mt-6 max-w-xl">
                <label htmlFor="help-search" className="text-sm font-medium">
                  Search topics and questions
                </label>
                <input
                  id="help-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-describedby="help-search-count"
                  placeholder="Try payment, ownership or hosting"
                  className={`mt-2 min-h-12 w-full rounded-lg border border-border bg-background px-4 text-base ${FOCUS_RING}`}
                />
                <p
                  id="help-search-count"
                  role="status"
                  className="mt-2 text-sm text-muted-foreground"
                >
                  {matchingQuestions} {matchingQuestions === 1 ? "question" : "questions"}
                  {terms.length > 0 ? " match your search" : " across the topics below"}
                </p>
                {terms.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className={`mt-2 min-h-11 rounded text-sm font-medium underline underline-offset-4 ${FOCUS_RING}`}
                  >
                    Clear search
                  </button>
                )}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton
                  source="help_center_hero"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                />
                <a
                  href={`#${id("contact")}`}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  Contact the team
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <nav
              data-enter
              aria-labelledby={id("topics")}
              className="min-w-0 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 lg:col-span-5"
            >
              <h2 id={id("topics")} className={EYEBROW}>
                Browse by topic
              </h2>
              <ul className="mt-4 divide-y divide-border">
                {visibleTopics.map(({ id: topicId, title, Icon, answers }) => (
                  <li key={topicId}>
                    <a
                      href={`#${topicId}`}
                      className={`group flex min-h-14 items-center gap-4 rounded py-3 ${FOCUS_RING}`}
                    >
                      <span
                        aria-hidden="true"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background text-primary"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1 font-medium text-foreground group-hover:text-primary">
                        {title}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {answers.length} answers
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {visibleTopics.length === 0 && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  No matching question. Try fewer words, clear the search or contact the team.
                </p>
              )}
            </nav>
          </div>
        </div>
      </section>

      {/* One section per topic */}
      {visibleTopics.map((topic, index) => {
        const TopicIcon = topic.Icon;
        return (
          <section
            key={topic.id}
            id={topic.id}
            aria-labelledby={`${topic.id}-title`}
            className={`${index % 2 === 0 ? "bg-muted/50" : "bg-background"} ${SECTION}`}
          >
            <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
              <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"
                >
                  <TopicIcon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h2 id={`${topic.id}-title`} className={`mt-6 ${H2}`}>
                  {topic.title}
                </h2>
                <p className={LEAD}>{topic.lead}</p>
                <Link
                  to={topic.link.to}
                  className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                >
                  {topic.link.label} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <ul className="divide-y divide-border border-y border-border lg:col-span-8">
                {topic.answers.map((answer) => (
                  <li key={answer.q} className="py-6 sm:py-8">
                    <h3 className="text-lg font-medium leading-snug text-foreground">{answer.q}</h3>
                    <div className={`mt-3 ${BODY}`}>{answer.a}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Quick answers */}
      <section
        id={id("faq")}
        aria-labelledby={id("faq-title")}
        className={`border-t border-border ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:col-span-8">
            <h2 id={id("faq-title")} className={H2}>
              More common questions
            </h2>
            <Faq items={FAQS} className="mt-8" />
          </div>
          <aside
            aria-labelledby={id("terms")}
            className="min-w-0 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 lg:sticky lg:top-32 lg:col-span-4 lg:self-start"
          >
            <h2 id={id("terms")} className="text-xl font-semibold tracking-tight">
              Where these answers come from
            </h2>
            <p className={`mt-3 ${BODY}`}>
              The answers summarise our{" "}
              <Link to="/terms-and-conditions" className={TEXT_LINK}>
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className={TEXT_LINK}>
                privacy policy
              </Link>
              . If anything differs, those documents and your signed proposal apply.
            </p>
          </aside>
        </div>
      </section>

      {/* Contact block */}
      <section
        id={id("contact")}
        aria-labelledby={id("contact-title")}
        className={`bg-background ${SECTION}`}
      >
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Contact</p>
            <h2 id={id("contact-title")} className={`mt-4 ${H2}`}>
              Still have a question?
            </h2>
            <p className={LEAD}>
              Ask us directly. We reply to new enquiries within one business day.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            <li className="flex min-w-0 flex-col rounded-3xl border border-border p-6 sm:p-8">
              <Mail className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-6 text-xl font-medium tracking-tight">Email</h3>
              <p className={`mt-2 ${BODY}`}>
                Best for briefs, files and anything formal, such as invoice questions.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() => trackEvent("email_click", { location: "help_center" })}
                className={`mt-auto inline-flex min-h-11 items-center gap-2 break-all rounded pt-4 text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex min-w-0 flex-col rounded-3xl border border-border p-6 sm:p-8">
              <MessageCircle
                className="h-6 w-6 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-medium tracking-tight">WhatsApp</h3>
              <p className={`mt-2 ${BODY}`}>
                Best for quick questions and day-to-day project messages.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Message us on WhatsApp at ${SITE.phoneDisplay} (opens in a new tab)`}
                onClick={() => trackEvent("whatsapp_click", { location: "help_center" })}
                className={`mt-auto inline-flex min-h-11 items-center gap-2 rounded pt-4 text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
              >
                {SITE.phoneDisplay} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
            <li className="flex min-w-0 flex-col rounded-3xl border border-border p-6 sm:p-8">
              <Clock className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-6 text-xl font-medium tracking-tight">Business hours</h3>
              <p className={`mt-2 ${BODY}`}>
                In Pakistan time, from our studio in {SITE.location}.
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                {SITE.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{spellRange(h.days)}</dt>
                    <dd className="text-right font-medium text-foreground">{spellRange(h.time)}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>
      </section>

      {/* Closing CTA + related pages */}
      <section aria-labelledby={id("cta")} className="bg-background pb-16 md:pb-24">
        <div className={CONTAINER}>
          <ClosingCta
            id={id("cta")}
            title="Ready to start a project?"
            body="Tell us what you need and we'll recommend where to start. We reply within one business day."
            source="help_center_cta"
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
