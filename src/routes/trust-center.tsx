import { useRef, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Clock,
  Cookie,
  Database,
  FileCheck,
  FolderLock,
  KeyRound,
  MapPin,
  MessageCircle,
  Receipt,
  ScrollText,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { openCookieSettings } from "@/lib/consent";
import { businessHead } from "@/lib/page-seo";
import { SITE } from "@/lib/site-config";
import { usePageEntrance } from "@/lib/use-anime";
import officeStudioAsset from "@/assets/office-studio.webp.asset.json";

/*
 * Truth rules for this page: only what terms-and-conditions.tsx,
 * privacy-policy.tsx and site-config.ts say. No certifications, no security
 * claims beyond the privacy policy, no response-time promises.
 */

const TITLE = "Agency trust center and client data protection";
const DESCRIPTION =
  "How Pixel2Tech protects client data and logins, when you own the files, and how confidentiality, payments, cookies and privacy work under our terms.";

const FAQS: FaqItem[] = [
  {
    q: "Do I own the files and code you create for me?",
    a: "Yes, once the project is paid in full. We then assign you our rights in the final, approved deliverables made for you, including the code written for your project. We keep our own pre-existing tools and templates, and you get a license to use the parts built into your work. Fonts, themes, plugins and stock media stay under their own licenses.",
  },
  {
    q: "Can we sign an NDA before sharing files?",
    a: "Ask us before you send anything sensitive. Our terms already require both sides to keep confidential information private and use it only for the project, for two years after the agreement ends. If we sign an NDA with you, it takes priority over that section of our terms. You can also ask us in writing not to show your project in our portfolio.",
  },
  {
    q: "How do you handle our account logins?",
    a: "We use the login details you share only to do the agreed work, and our terms treat them as confidential information. Please don't send passwords through our website forms. We agree a suitable way to share access with you instead. Keep accounts in your own name where possible, use strong and unique passwords, and change any password you shared when the project ends.",
  },
  {
    q: "Do you sign a data processing agreement?",
    a: "Yes, a data processing agreement is available on request. When we handle personal data about your customers, users or staff, you are the controller and we act as your processor. We process that data only to provide the services and in line with your documented instructions. Where we sign a data processing agreement with you, it governs that processing.",
  },
  {
    q: "Which cookies does pixel2tech.com use?",
    a: "Until you choose, the site uses only what it needs to work, such as a cookie that remembers your cookie choice. Google Analytics and Microsoft Clarity load only if you accept analytics cookies. We do not use advertising, retargeting or social media tracking cookies. You can change your choice at any time from the Cookie settings link at the bottom of every page.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. We do the work with reasonable care and skill, but search engines, ad platforms, your market and your budget all affect outcomes. We do not guarantee rankings, traffic, leads, sales or ad performance. Timelines in proposals are good-faith estimates, and they move if content, feedback or approvals arrive late.",
  },
];

export const Route = createFileRoute("/trust-center")({
  head: () => {
    const head = businessHead("/trust-center", TITLE, DESCRIPTION);
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: TrustCenterPage,
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

/** SITE.hours uses dashes in its ranges; this page writes them out in words. */
const spellRange = (text: string) => text.replace(/\s*[–-]\s*/g, " to ");

const SUMMARY = [
  { label: "Ownership", value: "Final deliverables pass to you after full payment" },
  { label: "Confidentiality", value: "Both sides, for two years after the agreement ends" },
  { label: "NDA", value: "A signed NDA takes priority over our terms" },
  { label: "Client data", value: "A data processing agreement is available on request" },
  { label: "Cookies", value: "Analytics load only after you accept them" },
  { label: "Studio", value: SITE.location },
];

const OWNERSHIP = [
  {
    title: "Your materials stay yours",
    desc: "You keep ownership of the content, logos, images, data and other materials you give us. You license them to us only so we can do the work.",
  },
  {
    title: "Final deliverables pass to you",
    desc: "Once you pay all fees under the proposal, we assign you our rights in the final, approved deliverables made for you, such as designs, code, copy and videos.",
  },
  {
    title: "Before full payment",
    desc: "Until then, you may use the deliverables only to review them. If we agree to launch first, you get a limited license that ends if payment is not made when due.",
  },
  {
    title: "Our own tools and components",
    desc: "We keep our pre-existing code libraries, templates and workflows. After full payment, you get a perpetual, royalty-free license to use the ones built into your deliverables.",
  },
  {
    title: "Third-party licenses",
    desc: "Fonts, stock media, themes, plugins and apps stay under their owners' licenses. We buy licenses in your name wherever possible.",
  },
  {
    title: "Source and working files",
    desc: "Layered design files, project files and raw footage are part of the handover only when the proposal lists them. Unused concepts and rejected options stay with us.",
  },
  {
    title: "AI-assisted work",
    desc: "We may make some deliverables with the help of AI tools. We transfer the rights we hold, but in some countries AI-generated material has limited or no copyright protection.",
  },
];

const PORTFOLIO_RULES = [
  "We may show completed work that is already public, with your name and logo, unless you have an NDA with us or ask us in writing not to.",
  "We never put your confidential information in our portfolio.",
  "If you ask us to remove a project, we take it down from our own channels within a reasonable time.",
  "We publish testimonials and reviews from you only with your permission.",
  "You can ask us to leave the small credit link out of a website footer.",
];

/** The confidentiality section of our terms, one row per question a client asks. */
const CONFIDENTIALITY = [
  {
    label: "What it covers",
    value:
      "Both sides keep the other's confidential information private and use it only for the project. That covers non-public business, technical and financial information, and it includes account credentials.",
  },
  {
    label: "Who can see it",
    value:
      "We share it only with team members, contractors and advisers who need it and are bound by confidentiality.",
  },
  {
    label: "How long it lasts",
    value:
      "Two years after the agreement ends, and for as long as the information remains a trade secret.",
  },
  {
    label: "When you ask",
    value:
      "We return or delete your confidential information. The exceptions are copies the law requires us to keep and copies in routine backups, which stay until they are overwritten.",
  },
];

const DATA_PRACTICES: { title: string; desc: string; Icon: LucideIcon }[] = [
  {
    title: "Logins used only for your project",
    desc: "We use the account details you share only to provide the services, and our terms treat credentials as confidential. Change any password you shared when the project ends.",
    Icon: KeyRound,
  },
  {
    title: "Accounts in your name",
    desc: "Business accounts should be in your name. If we open one in ours for convenience, we transfer it to you on request after full payment, where the provider allows.",
    Icon: Users,
  },
  {
    title: "No sensitive data through forms",
    desc: "Please don't send card numbers, passwords or ID numbers through our website forms. If a project needs account access, we agree a suitable way to arrange it with you.",
    Icon: FolderLock,
  },
  {
    title: "Your customers' data",
    desc: "For personal data about your customers or staff, you are the controller and we act as your processor. We follow your documented instructions and return or delete the data as agreed.",
    Icon: Database,
  },
  {
    title: "Data processing agreement",
    desc: "A data processing agreement is available on request. Agree with us in writing before you send health, financial account or children's data.",
    Icon: FileCheck,
  },
  {
    title: "AI tools and personal data",
    desc: "When we use AI tools in client work, we aim to enter only the personal information the task needs and our agreement with you permits.",
    Icon: Bot,
  },
];

const SITE_PRIVACY = [
  {
    title: "Analytics only with consent",
    desc: "Google Analytics and Microsoft Clarity load only if you choose Accept all or switch analytics on. If you reject non-essential cookies, they do not load.",
  },
  {
    title: "No advertising cookies",
    desc: "We do not use advertising, retargeting or social media tracking cookies, and we do not currently use advertising pixels on this site.",
  },
  {
    title: "No sale of personal information",
    desc: "We do not sell personal information or share it for cross-context behavioral advertising.",
  },
  {
    title: "Where data is stored",
    desc: "Our team works from Pakistan. The website and the database that stores form submissions are hosted in the United States.",
  },
  {
    title: "How the site protects data",
    desc: "The site runs over HTTPS, and only the website's server can reach its database. Access to our email, systems and project files is limited to the people who need it.",
  },
  {
    title: "Privacy requests",
    desc: `Email ${SITE.email} with the subject line "Privacy request" to access, correct or delete your information. We aim to respond within one month.`,
  },
];

const RELATED = [
  { to: "/services", label: "Services", desc: "Every service we offer" },
  { to: "/portfolio", label: "Portfolio", desc: "Real client projects" },
  { to: "/about", label: "About", desc: "The in-house team" },
  { to: "/privacy-policy", label: "Privacy policy", desc: "Personal data and cookies" },
  { to: "/terms-and-conditions", label: "Terms and conditions", desc: "The full agreement" },
  { to: "/pricing", label: "Pricing", desc: "How quotes work" },
  { to: "/help-center", label: "Help center", desc: "Answers by topic" },
  { to: "/contact", label: "Contact", desc: "Ask us a question" },
] as const;

function CookieSettingsButton({ className }: { className: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      <Cookie className="h-4 w-4" aria-hidden="true" />
      Cookie settings
    </button>
  );
}

function TrustCenterPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);

  const id = (name: string) => `trust-${name}`;
  const sections = [
    { id: id("ownership"), label: "Ownership" },
    { id: id("confidentiality"), label: "Confidentiality" },
    { id: id("data"), label: "Client data" },
    { id: id("privacy"), label: "Privacy and cookies" },
    { id: id("working"), label: "Working with us" },
    { id: id("faq"), label: "Questions" },
  ];

  const working: { title: string; Icon: LucideIcon; body: ReactNode }[] = [
    {
      title: "Payments",
      Icon: Receipt,
      body: (
        <>
          Invoices list the payment method and currency, usually US dollars. Work starts after the
          deposit reaches our account, and final files follow full payment. The{" "}
          <Link to="/pricing" className={TEXT_LINK}>
            pricing page
          </Link>{" "}
          has the details.
        </>
      ),
    },
    {
      title: "Accessibility of the work",
      Icon: Accessibility,
      body: "If your site or app must meet a standard such as the ADA or the European Accessibility Act, tell us before we quote. An accessibility audit or a named conformance level is part of the work only when the proposal lists it.",
    },
    {
      title: "Communication",
      Icon: MessageCircle,
      body: `We work over email, project management tools, video calls and WhatsApp, and you can give feedback and approvals in any of them. Formal notices go by email to ${SITE.email}.`,
    },
    {
      title: "Working hours",
      Icon: Clock,
      body: (
        <>
          <span className="block">Our business hours are in Pakistan time.</span>
          <span className="mt-3 block space-y-1">
            {SITE.hours.map((h) => (
              <span key={h.days} className="flex justify-between gap-4 text-foreground">
                <span>{spellRange(h.days)}</span>
                <span className="text-right">{spellRange(h.time)}</span>
              </span>
            ))}
          </span>
          <span className="mt-3 block">
            We do not promise replies outside these hours unless your proposal says so.
          </span>
        </>
      ),
    },
    {
      title: "Where we are",
      Icon: MapPin,
      body: `Our studio is in ${SITE.location}, and we work with clients worldwide. The laws of Pakistan govern our terms, and the courts of Lahore handle disputes.`,
    },
    {
      title: "What we do not promise",
      Icon: ScrollText,
      body: "We work with reasonable care and skill, but we do not guarantee rankings, leads, sales or other business results. Timelines are good-faith estimates.",
    },
  ];

  const leadOwnership = OWNERSHIP.slice(0, 2);
  const moreOwnership = OWNERSHIP.slice(2);

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
                Trust center
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div data-enter className="min-w-0 lg:col-span-6">
              <p className={EYEBROW}>Trust center</p>
              <h1
                id={id("title")}
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Agency trust center{" "}
                <span className="text-primary">for client data, files and payments</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Pixel2Tech keeps client information confidential, uses shared logins only to do the
                agreed work, transfers final deliverables to you after full payment, and sets out
                each of these rules in its terms and privacy policy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton
                  source="trust_center_hero"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                />
                <a
                  href={`#${id("data")}`}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  How we handle client data
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure data-enter className="relative min-w-0 lg:col-span-6">
              <img
                src={officeStudioAsset.url}
                alt="The Pixel2Tech team at work in the studio, with the logo on the back wall"
                width={1600}
                height={1074}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-background/95 p-4 shadow-[var(--elev-2)] backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:p-5">
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">In-house studio</span>
                  <span className="mt-1 block font-semibold text-foreground">{SITE.location}</span>
                </span>
              </figcaption>
            </figure>
          </div>

          <section data-enter aria-labelledby={id("summary")} className="mt-12 md:mt-16">
            <h2 id={id("summary")} className={EYEBROW}>
              The short version
            </h2>
            <dl className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SUMMARY.map((fact) => (
                <div key={fact.label} className="flex min-w-0 gap-4 bg-background p-5 sm:p-6">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    strokeWidth={2.25}
                  />
                  <div className="min-w-0">
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-1 font-medium leading-snug text-foreground">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      {/* Jump links */}
      <nav
        aria-label="On this page"
        className="sticky top-[61px] z-30 border-y border-border bg-background/95 backdrop-blur sm:top-[73px]"
      >
        <ul
          className={`${CONTAINER} flex gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={`inline-flex min-h-10 items-center whitespace-nowrap rounded-full border border-border px-4 text-sm font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground ${FOCUS_RING}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ownership */}
      <section id={id("ownership")} aria-labelledby={id("ownership-title")} className={SECTION}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Files and IP</p>
            <h2 id={id("ownership-title")} className={`mt-4 ${H2}`}>
              Who owns the files and code
            </h2>
            <p className={LEAD}>
              Ownership follows payment. These are the defaults in our terms, and your proposal says
              exactly which files you receive.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {leadOwnership.map((item, i) => (
              <li
                key={item.title}
                className={`flex min-w-0 flex-col rounded-3xl p-6 sm:p-8 lg:p-10 ${
                  i === 0 ? "bg-muted/60" : "bg-primary text-primary-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`text-sm font-medium tabular-nums ${
                    i === 0 ? "text-primary" : "text-primary-foreground/80"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-[15px] leading-relaxed ${
                    i === 0 ? "text-muted-foreground" : "text-primary-foreground/90"
                  }`}
                >
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
          <ol
            start={leadOwnership.length + 1}
            className="mt-4 divide-y divide-border overflow-hidden rounded-3xl border border-border"
          >
            {moreOwnership.map((item, i) => (
              <li
                key={item.title}
                className="grid min-w-0 gap-2 p-6 sm:p-8 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium tabular-nums text-primary"
                  >
                    {String(leadOwnership.length + i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                </div>
                <p className={`md:col-span-8 ${BODY}`}>{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Confidentiality */}
      <section
        id={id("confidentiality")}
        aria-labelledby={id("confidentiality-title")}
        className={`bg-muted/50 ${SECTION}`}
      >
        <div className={CONTAINER}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-5">
              <p className={EYEBROW}>Confidentiality</p>
              <h2 id={id("confidentiality-title")} className={`mt-4 ${H2}`}>
                Confidentiality and NDAs
              </h2>
              <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                <h3 className="text-xl font-semibold leading-snug tracking-tight">
                  Need an NDA first?
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                  Ask us if you need an NDA before you share files. A signed NDA between us takes
                  priority over the confidentiality section of our terms.
                </p>
              </div>
            </div>
            <dl className="min-w-0 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background lg:col-span-7">
              {CONFIDENTIALITY.map((row) => (
                <div key={row.label} className="grid gap-2 p-6 sm:grid-cols-3 sm:gap-6 sm:p-8">
                  <dt className="text-sm font-medium text-foreground">{row.label}</dt>
                  <dd className={`sm:col-span-2 ${BODY}`}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-4 grid gap-8 rounded-3xl border border-border bg-background p-6 sm:p-8 lg:grid-cols-12 lg:gap-16 lg:p-10">
            <div className="min-w-0 lg:col-span-4">
              <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                Your project in our portfolio
              </h3>
              <p className={`mt-3 ${BODY}`}>
                How we show finished work, and how you keep a project out of it.
              </p>
            </div>
            <ul className="min-w-0 divide-y divide-border lg:col-span-8">
              {PORTFOLIO_RULES.map((rule) => (
                <li key={rule} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    strokeWidth={2.25}
                  />
                  <span className="text-[15px] leading-relaxed text-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client data and logins */}
      <section id={id("data")} aria-labelledby={id("data-title")} className={SECTION}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className={EYEBROW}>Client data</p>
              <h2 id={id("data-title")} className={`mt-4 ${H2}`}>
                How we handle client data and logins
              </h2>
            </div>
            <p className="max-w-md border-l-2 border-primary pl-4 text-[15px] leading-relaxed text-foreground">
              You stay in control of your accounts and data. Please keep your own backups of your
              website, data and files before and during our work.
            </p>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {DATA_PRACTICES.map(({ title, desc, Icon }) => (
              <li key={title} className="flex min-w-0 flex-col bg-background p-6 sm:p-8">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
                <p className={`mt-2 ${BODY}`}>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy and cookies on this website */}
      <section
        id={id("privacy")}
        aria-labelledby={id("privacy-title")}
        className={`bg-slate-950 text-white ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:sticky lg:top-40 lg:col-span-5 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">Privacy</p>
            <h2
              id={id("privacy-title")}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Privacy and cookies on this website
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              This covers pixel2tech.com and how we handle the details you send us. Websites and
              stores we build for clients have their own privacy notices.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CookieSettingsButton className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" />
              <Link
                to="/privacy-policy"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Read the privacy policy
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="min-w-0 divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
            {SITE_PRIVACY.map((point, i) => (
              <li key={point.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6 sm:py-8">
                <span
                  aria-hidden="true"
                  className="text-sm font-medium tabular-nums text-slate-400 sm:col-span-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 sm:col-span-11">
                  <h3 className="text-lg font-semibold leading-snug text-white">{point.title}</h3>
                  <p className="mt-2 break-words leading-relaxed text-slate-300">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working with us */}
      <section id={id("working")} aria-labelledby={id("working-title")} className={SECTION}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Working with us</p>
            <h2 id={id("working-title")} className={`mt-4 ${H2}`}>
              Payments, accessibility and communication
            </h2>
            <p className={LEAD}>
              The practical rules that apply on every project, unless your proposal says otherwise.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {working.map(({ title, Icon, body }) => (
              <article
                key={title}
                className="flex min-w-0 flex-col rounded-3xl bg-muted/50 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                </div>
                <div className={`mt-4 border-t border-border pt-4 ${BODY}`}>{body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Questions, with the source documents beside them */}
      <section
        id={id("faq")}
        aria-labelledby={id("faq-title")}
        className={`border-t border-border ${SECTION}`}
      >
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="min-w-0 lg:col-span-8">
            <h2 id={id("faq-title")} className={H2}>
              Common questions about trust and data
            </h2>
            <Faq items={FAQS} className="mt-8" />
          </div>
          <aside
            aria-labelledby={id("documents")}
            className="min-w-0 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 lg:sticky lg:top-40 lg:col-span-4 lg:self-start"
          >
            <h2 id={id("documents")} className="text-xl font-semibold tracking-tight">
              The documents behind this page
            </h2>
            <p className={`mt-3 ${BODY}`}>
              This page summarises our terms and privacy policy. If anything here differs, those
              documents and your signed proposal apply.
            </p>
            <ul className="mt-5 space-y-1">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className={`inline-flex min-h-11 items-center gap-2 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                >
                  Terms and conditions <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className={`inline-flex min-h-11 items-center gap-2 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                >
                  Privacy policy <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <CookieSettingsButton
                  className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                />
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Closing CTA + related pages */}
      <section aria-labelledby={id("cta")} className="bg-background pb-16 md:pb-24">
        <div className={CONTAINER}>
          <ClosingCta
            id={id("cta")}
            title="Have a question before you share files?"
            body="Tell us what you need to protect and we'll explain how it works on your project. We reply within one business day."
            source="trust_center_cta"
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
