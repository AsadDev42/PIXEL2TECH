import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  FilePen,
  FileText,
  FolderOpen,
  Layers,
  MessagesSquare,
  Newspaper,
  Receipt,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { VideoTestimonials } from "@/components/video-testimonials";
import { businessHead } from "@/lib/page-seo";
import { PRICING_POINTS } from "@/lib/service-pages";
import { STATS } from "@/lib/site-config";
import { TESTIMONIAL_VIDEOS } from "@/lib/testimonial-videos";
import { usePageEntrance } from "@/lib/use-anime";

const PATH = "/reviews";
const VIDEO_COUNT = TESTIMONIAL_VIDEOS.length;

/** Same labels the portfolio page uses for these figures. */
const HERO_STATS = [
  { value: STATS.rating, label: "Client rating" },
  { value: STATS.projects, label: "Projects delivered" },
  { value: STATS.clients, label: "Clients" },
  { value: String(VIDEO_COUNT), label: "Video testimonials" },
];

const CHECKS = [
  {
    to: "/results",
    title: "Project outcomes",
    body: "Named website and Shopify case studies. Each one sets out the business need, what we built and what customers can now do on the site.",
    Icon: TrendingUp,
  },
  {
    to: "/portfolio",
    title: "Full portfolio",
    body: "Published brand, website, video and automation projects, filterable by category. Project pages label agency partner work as white-label.",
    Icon: FolderOpen,
  },
  {
    to: "/our-people",
    title: "The team",
    body: "The in-house people who do the work, with their roles, profile pages and LinkedIn links.",
    Icon: Users,
  },
  {
    to: "/press",
    title: "Company facts",
    body: "When the studio was founded, where it is based, who founded it and how to contact it.",
    Icon: Newspaper,
  },
] as const;

const PRICING_ICONS: LucideIcon[] = [MessagesSquare, FileText, FilePen, Receipt];

const FAQS: FaqItem[] = [
  {
    q: "Where can I see Pixel2Tech reviews?",
    a: "This page collects our client video testimonials, and each one plays in the page with sound and English captions. For the work behind them, the results page walks through named website and Shopify case studies, and the portfolio lists our published projects by category, with a page for each one.",
  },
  {
    q: "How can I check your work before hiring you?",
    a: "Start with the portfolio and the results page, then open the projects closest to yours. On the free 30-minute strategy call you can ask about any project, how it was scoped and which roles worked on it. The team page lists everyone in-house with their role, and the founders have profile pages and LinkedIn links.",
  },
  {
    q: "Do your case studies show revenue or conversion numbers?",
    a: "No. The results page describes changes you can see on each site, such as what customers can now do, instead of revenue or conversion lifts. Those numbers only mean something with a measured baseline, so we do not publish them without one. Project pages also label agency partner work as white-label, so you can see whose project it was.",
  },
  {
    q: "Do the testimonial videos have captions?",
    a: "Yes. Every video has English captions, and they are on when the video starts. Select a video to watch it inside the page with sound, then use the player controls to pause, seek, change the speed or go full screen. Only one video plays at a time, so starting a second video pauses the first one.",
  },
  {
    q: "What happens after I get in touch?",
    a: "We reply within one business day. If you book a strategy call, it is a free 30-minute Google Meet about your goals, audience and deadline. After the call we send a proposal with the scope, price, milestones and timeline. Work starts once you accept it and any agreed deposit is paid.",
  },
];

const RELATED = [
  { to: "/results", label: "Project outcomes", desc: "Named case studies", Icon: TrendingUp },
  { to: "/portfolio", label: "Portfolio", desc: "Every published project", Icon: FolderOpen },
  { to: "/our-people", label: "Our people", desc: "The in-house team", Icon: Users },
  { to: "/services", label: "Services", desc: "What we design and build", Icon: Layers },
] as const;

export const Route = createFileRoute("/reviews")({
  head: () => {
    const head = businessHead(
      PATH,
      "Agency reviews and client video testimonials",
      `Watch Pixel2Tech agency reviews and client video testimonials in ${VIDEO_COUNT} captioned videos, then see the named case studies, the portfolio and the team.`,
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: ReviewsPage,
});

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl";
const LEAD = "mt-4 text-base leading-relaxed text-muted-foreground";
const BODY = "text-[15px] leading-relaxed text-muted-foreground";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION = "scroll-mt-32 py-16 md:py-24";

function ReviewsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);

  return (
    <PageShell>
      {/* Hero */}
      <section
        aria-labelledby="reviews-title"
        className="bg-background pb-12 pt-8 md:pb-16 md:pt-12"
      >
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
                Reviews
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div data-enter className="min-w-0 lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 py-1 pl-1 pr-4 text-sm font-medium text-primary">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <Star className="h-4 w-4" strokeWidth={2} />
                </span>
                Client reviews
              </p>
              <h1
                id="reviews-title"
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Pixel2Tech agency reviews{" "}
                <span className="text-primary">from clients, on video</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Pixel2Tech client reviews are collected here as {VIDEO_COUNT} short video
                testimonials with English captions, next to the case studies and project work you
                can check for yourself.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#videos"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                >
                  Watch the testimonials
                </a>
                <Link
                  to="/results"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  See project outcomes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div data-enter className="min-w-0 lg:col-span-5">
              <dl className="grid grid-cols-2 gap-3 sm:gap-4">
                {HERO_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col-reverse justify-end rounded-2xl border border-border bg-muted/40 p-4 sm:p-6"
                  >
                    <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonials: the same player as the home page */}
      <div id="videos" className="scroll-mt-32">
        <VideoTestimonials className="bg-muted" />
      </div>

      {/* Check the work */}
      <section id="check" aria-labelledby="check-title" className={SECTION}>
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:sticky lg:top-40 lg:col-span-4 lg:self-start">
            <p className={EYEBROW}>Check the work</p>
            <h2 id="check-title" className={`mt-4 ${H2}`}>
              Look past the reviews
            </h2>
            <p className={LEAD}>
              These pages show the finished work, the people who did it and the company behind it.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {CHECKS.map(({ to, title, body, Icon }) => (
              <li key={to} className="min-w-0 border-t border-border pb-8 pt-6">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">{title}</h3>
                <p className={`mt-2 ${BODY}`}>{body}</p>
                <Link
                  to={to}
                  className={`mt-3 inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                >
                  Open {title.toLowerCase()} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How every engagement works */}
      <section id="terms" aria-labelledby="terms-title" className={`bg-muted/50 ${SECTION}`}>
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
          <div className="min-w-0 lg:col-span-7">
            <p className={EYEBROW}>Working with us</p>
            <h2 id="terms-title" className={`mt-4 ${H2}`}>
              What every client gets
            </h2>
            <p className={LEAD}>
              Every project starts with a free call, and you get a fixed quote in writing before any
              work starts.
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
              Ask about a project like yours
            </h3>
            <p className={`mt-4 ${BODY}`}>
              On the free 30-minute call you can ask about any project in the portfolio, how it was
              scoped and which roles worked on it. We reply to messages within one business day.
            </p>
            <BookCallButton
              source="reviews_side"
              className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
            />
            <p className={`mt-6 border-t border-border pt-6 ${BODY}`}>
              Payment terms, revisions and ownership are covered in our{" "}
              <Link
                to="/terms-and-conditions"
                className="font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary"
              >
                terms and conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className={SECTION}>
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 id="faq-title" className={`text-center ${H2}`}>
            Questions about our reviews
          </h2>
          <Faq items={FAQS} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA and related pages */}
      <section aria-labelledby="reviews-cta" className="bg-background pb-16 md:pb-24">
        <div className={CONTAINER}>
          <ClosingCta
            id="reviews-cta"
            title="Want to be the next"
            highlight="project we ship?"
            body="Tell us what you need and we'll recommend where to start. We reply within one business day."
            source="reviews_cta"
          />
          <nav aria-labelledby="reviews-related" className="mt-12 sm:mt-16">
            <h2
              id="reviews-related"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              Related pages
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map(({ to, label, desc, Icon }) => (
                <li key={to} className="min-w-0">
                  <Link
                    to={to}
                    className={`group flex min-h-16 items-center gap-3 rounded-2xl border border-border bg-background p-3 text-sm text-foreground transition hover:border-primary ${FOCUS_RING}`}
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium">{label}</span>
                      <span className="block text-xs text-muted-foreground">{desc}</span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 shrink-0 text-muted-foreground"
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
