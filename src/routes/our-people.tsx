import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  ChevronRight,
  Clock,
  FolderOpen,
  Info,
  Mail,
  MessageCircle,
  Star,
  Video,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { ClosingCta } from "@/components/closing-cta";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { MediaImage } from "@/components/media-image";
import { TeamCard } from "@/components/team-slider";
import { businessHead } from "@/lib/page-seo";
import { SERVICE_PROCESS } from "@/lib/service-pages";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";
import { usePageEntrance } from "@/lib/use-anime";
import officeStudioAsset from "@/assets/opt-office-studio-2-800.webp.asset.json";

const PATH = "/our-people";
const ORG_REF = { "@id": `${SITE.url}/#organization` };

const FOUNDERS = TEAM.filter((m) => m.founder);
const CEO = TEAM.find((m) => m.profile === "/usama-farooq");
const COO = TEAM.find((m) => m.profile === "/asad-farooq");

/**
 * What each role handles on a project. Wording follows the profile pages
 * (people.ts, saad.tsx) and the role titles in team.ts. A role without an entry
 * shows its title only.
 */
const ROLE_WORK: Record<string, string> = {
  "CEO & Founder": "Sets company strategy and leads client partnerships and new business.",
  "Co-Founder & COO": "Leads creative direction and mentors the studio's designers and editors.",
  "Creative Video Editor":
    "Edits vertical video for Instagram, TikTok and YouTube Shorts, plus longer brand and channel edits.",
  "Creative Brand Designer": "Designs brand identities and the brand assets that apply them.",
  "Website Developer": "Builds websites and stores from the approved designs.",
  "Video Editor": "Edits video for client content and ad campaigns.",
};

/**
 * Disciplines for the roles section. Each group lists the role titles from
 * team.ts it holds; a role in no group lands under "Studio" so no one drops off.
 */
const ROLE_GROUPS = [
  {
    title: "Leadership",
    covers: "Company strategy, client partnerships and creative direction.",
    roles: ["CEO & Founder", "Co-Founder & COO"],
  },
  {
    title: "Brand design",
    covers: "Brand identities and the brand assets that apply them.",
    roles: ["Creative Brand Designer"],
  },
  {
    title: "Video",
    covers: "Short-form, brand and ad video edits.",
    roles: ["Creative Video Editor", "Video Editor"],
  },
  {
    title: "Web",
    covers: "Websites and stores built from the approved designs.",
    roles: ["Website Developer"],
  },
];

function roleGroups() {
  const groups = ROLE_GROUPS.map((g) => ({
    ...g,
    members: TEAM.filter((m) => g.roles.includes(m.role)),
  }));
  const rest = TEAM.filter((m) => !ROLE_GROUPS.some((g) => g.roles.includes(m.role)));
  if (rest.length) groups.push({ title: "Studio", covers: "", roles: [], members: rest });
  return groups.filter((g) => g.members.length > 0);
}

/** How the team works together. Facts from /about and the service pages. */
const WAYS_OF_WORKING = [
  {
    title: "One brief for every discipline",
    body: "Brand, web, video and automation work from the same brief, so everyone on the project sees your goals and the approved direction.",
  },
  {
    title: "Designers and developers review together",
    body: "They go through layouts, interactions and content together before a build is handed over.",
  },
  {
    title: "You review before launch",
    body: "Our in-house team designs and builds the work, and you review it before anything goes live.",
  },
  {
    title: "No outside vendors",
    body: "Design, development, content and deployment stay in-house, so your project is not passed between subcontractors.",
  },
];

// Site hours use en dashes; this page writes the ranges with "to".
const HOURS = SITE.hours.map((h) =>
  `${h.days}, ${h.time}`.replaceAll(` ${String.fromCharCode(0x2013)} `, " to "),
);

const CHANNELS: { title: string; body: string; detail: string; Icon: LucideIcon }[] = [
  {
    title: "Google Meet",
    body: "Plan the project together.",
    detail: "Start with a free 30-minute call",
    Icon: Video,
  },
  {
    title: "Email",
    body: "Briefs, feedback and approvals.",
    detail: SITE.email,
    Icon: Mail,
  },
  {
    title: "WhatsApp",
    body: "Quick questions and updates.",
    detail: SITE.phoneDisplay,
    Icon: MessageCircle,
  },
  {
    title: "Reply time",
    body: "Within one business day.",
    detail: "Office hours in Pakistan time",
    Icon: Clock,
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Who is on the Pixel2Tech creative team?",
    a: `The in-house team is ${TEAM.map((m) => `${m.name} (${m.role})`).join(", ")}. Brand design, web development, video editing and automation are all done inside the studio in ${SITE.location}, so the person who designs your work can talk directly to the person who builds it.`,
  },
  {
    q: "Does Pixel2Tech outsource any work?",
    a: "No. Design, development, content and deployment all happen in-house, so your project is not passed between outside vendors. The designers, developers and video editors on this page work from one brief, and designers and developers review layouts, interactions and content together before a build is handed over.",
  },
  {
    q: "How do I talk to the team during a project?",
    a: "Calls run over Google Meet, and day-to-day updates go over email or WhatsApp. The first call is a free 30-minute strategy call about your goals, audience and deadline. We reply to new messages within one business day. Agencies can name one person on their side, usually a project manager, and we work through that contact.",
  },
  ...(CEO && COO
    ? [
        {
          q: "Can I work directly with the founders?",
          a: `${CEO.name}, the ${CEO.role.replace("&", "and")}, leads client partnerships and new business. ${COO.name}, the ${COO.role.replace("&", "and")}, leads creative direction and mentors the studio's designers and editors. Both have profile pages with their background, and you can ask on the strategy call who will handle each part of your project.`,
        },
      ]
    : []),
  {
    q: "Is Pixel2Tech hiring?",
    a: "The careers page explains how to apply. Send your discipline, your experience and a link to your portfolio, and the application goes directly to our team. Designers, developers and editors here work on connected brand, website, video and automation projects, so show the work you did yourself and how you approached it.",
  },
];

const RELATED = [
  { to: "/about", label: "About Pixel2Tech", desc: "The studio and its story", Icon: Info },
  { to: "/careers", label: "Careers", desc: "How to apply to the team", Icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", desc: "Work the team has delivered", Icon: FolderOpen },
  { to: "/reviews", label: "Client reviews", desc: "Video testimonials", Icon: Star },
] as const;

const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

export const Route = createFileRoute("/our-people")({
  head: () => {
    const head = businessHead(
      PATH,
      "Meet the creative team in Lahore",
      "Meet the Pixel2Tech creative team in Lahore. See each person's role, who does what on a project and how clients talk to the designers, developers and editors.",
    );
    return {
      ...head,
      scripts: [
        ...head.scripts,
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": TEAM.map((m) => ({
              "@type": "Person",
              ...(m.profile
                ? { "@id": `${SITE.url}${m.profile}#person`, url: `${SITE.url}${m.profile}` }
                : {}),
              name: m.name,
              jobTitle: m.role,
              image: absoluteUrl(m.img),
              ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
              worksFor: ORG_REF,
            })),
          }),
        },
        faqJsonLd(FAQS),
      ],
    };
  },
  component: OurPeoplePage,
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
const INLINE_LINK =
  "font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary";

function OurPeoplePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageEntrance(rootRef);

  const facts = [
    { label: "Based in", value: SITE.location },
    { label: "Founded", value: STATS.foundingYear },
    {
      label: FOUNDERS.length > 1 ? "Founders" : "Founder",
      value: FOUNDERS.map((m) => m.name).join(" and "),
    },
    { label: "Disciplines", value: "Brand design, web development, video editing and automation" },
    {
      label: "Clients",
      value: `Worldwide, including the ${SITE.primaryMarkets.join(", ").replace(/, ([^,]*)$/, " and $1")}`,
    },
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section
        aria-labelledby="people-title"
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
                Our people
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div data-enter className="min-w-0 lg:col-span-7">
              <h1
                id="people-title"
                className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              >
                Meet the creative team <span className="text-primary">behind Pixel2Tech</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Pixel2Tech is a studio in {SITE.location} where in-house designers, developers and
                video editors work on brand, website, video and automation projects for clients
                worldwide.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton
                  source="our_people_hero"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90 ${FOCUS_RING}`}
                />
                <a
                  href="#team"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  See who does what
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
                  >
                    <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure data-enter className="min-w-0 lg:col-span-5">
              <MediaImage
                src={officeStudioAsset.url}
                alt="Pixel2Tech designers and developers working at their desks"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Our studio in {SITE.location}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" aria-labelledby="team-title" className={`bg-muted/50 ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>The team</p>
            <h2 id="team-title" className={`mt-4 ${H2}`}>
              Meet our design team
            </h2>
            <p className={LEAD}>
              Everyone here is in-house, and each person focuses on one craft. Founders with a
              profile page have more on their background and work.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {TEAM.map((member) => (
              <li key={member.name} className="min-w-0 [&>article]:w-full">
                <TeamCard member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who does what */}
      <section id="roles" aria-labelledby="roles-title" className={SECTION}>
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:sticky lg:top-40 lg:col-span-4 lg:self-start">
            <p className={EYEBROW}>Roles</p>
            <h2 id="roles-title" className={`mt-4 ${H2}`}>
              Who does what on your project
            </h2>
            <p className={LEAD}>
              Each project draws on the roles it needs. Your proposal names the scope, and you can
              ask on the call who will handle each part.
            </p>
          </div>
          <div className="grid min-w-0 gap-4 lg:col-span-8">
            {roleGroups().map((group) => (
              <div
                key={group.title}
                className="min-w-0 rounded-3xl border border-border bg-background p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm tabular-nums text-muted-foreground">
                    {group.members.length === 1 ? "1 person" : `${group.members.length} people`}
                  </p>
                </div>
                {group.covers && <p className={`mt-1 ${BODY}`}>{group.covers}</p>}
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.members.map((member) => (
                    <li
                      key={member.name}
                      className="flex min-w-0 gap-4 rounded-2xl bg-muted/50 p-4 sm:p-5"
                    >
                      <img
                        src={member.img}
                        alt=""
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <h4 className="font-semibold leading-snug text-foreground">
                          {member.name}
                        </h4>
                        <p className="text-sm font-medium text-primary">{member.role}</p>
                        {ROLE_WORK[member.role] && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {ROLE_WORK[member.role]}
                          </p>
                        )}
                        {(member.profile || member.linkedin) && (
                          <div className="mt-1 flex flex-wrap gap-x-5">
                            {member.profile && (
                              <Link
                                to={member.profile}
                                className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-primary hover:underline ${FOCUS_RING}`}
                              >
                                Profile <ArrowRight size={14} aria-hidden="true" />
                              </Link>
                            )}
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                                className={`inline-flex min-h-11 items-center gap-1 rounded text-sm font-medium text-foreground hover:underline ${FOCUS_RING}`}
                              >
                                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the team works */}
      <section id="how-we-work" aria-labelledby="work-title" className={`bg-muted/50 ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>How we work</p>
            <h2 id="work-title" className={`mt-4 ${H2}`}>
              How the team works on a project
            </h2>
            <p className={LEAD}>
              The same four steps run on every project, and the team keeps a few habits throughout.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((step, i) => (
              <li
                key={step.title}
                className="flex min-w-0 flex-col rounded-3xl border border-border bg-background p-6 sm:p-8"
              >
                <div aria-hidden="true" className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold tabular-nums text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className={`mt-2 ${BODY}`}>{step.desc}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-16 text-xl font-semibold leading-snug tracking-tight">
            Habits on every project
          </h3>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {WAYS_OF_WORKING.map((item) => (
              <li key={item.title} className="flex min-w-0 gap-4 bg-background p-6 sm:p-8">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold leading-snug">{item.title}</h4>
                  <p className={`mt-2 ${BODY}`}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How clients talk to the team */}
      <section
        id="contact-the-team"
        aria-labelledby="channels-title"
        className={`border-y border-border bg-muted/40 ${SECTION}`}
      >
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Talking to the team</p>
            <h2
              id="channels-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Talk directly to your team
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Calls for planning. Email for feedback. WhatsApp for quick updates. Agencies can work
              through one project manager.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CHANNELS.map(({ title, body, detail, Icon }) => (
              <li
                key={title}
                className="flex min-w-0 items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <div className="mt-3 break-words text-sm">
                    {title === "Google Meet" ? (
                      <BookCallButton
                        source="people_channels"
                        className="inline-flex min-h-11 items-center text-primary underline underline-offset-4"
                      >
                        Book a call
                      </BookCallButton>
                    ) : title === "Email" ? (
                      <a
                        href={`mailto:${SITE.email}`}
                        className="inline-flex min-h-11 items-center underline underline-offset-4"
                      >
                        {detail}
                      </a>
                    ) : title === "WhatsApp" ? (
                      <a
                        href={SITE.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center underline underline-offset-4"
                      >
                        {detail}
                      </a>
                    ) : (
                      <details>
                        <summary className="min-h-11 cursor-pointer py-3 text-muted-foreground">
                          {detail}
                        </summary>
                        <ul className="space-y-2 text-muted-foreground">
                          {HOURS.map((hours) => (
                            <li key={hours}>{hours}</li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Careers */}
      <section aria-labelledby="join-title" className="bg-background pt-16 md:pt-24">
        <div className={CONTAINER}>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 id="join-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Join the team
              </h2>
              <p className={`mt-3 ${BODY}`}>
                Send your discipline, your experience and your portfolio. Applications go directly
                to our team, and the{" "}
                <Link to="/careers" className={INLINE_LINK}>
                  careers page
                </Link>{" "}
                explains what to include.
              </p>
            </div>
            <Link
              to="/careers"
              className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition hover:bg-muted ${FOCUS_RING}`}
            >
              See careers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className={SECTION}>
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 id="faq-title" className={`text-center ${H2}`}>
            Questions about the team
          </h2>
          <Faq items={FAQS} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA and related pages */}
      <section aria-labelledby="people-cta" className="bg-background pb-16 md:pb-24">
        <div className={CONTAINER}>
          <ClosingCta
            id="people-cta"
            title="Want this team on"
            highlight="your project?"
            body="Tell us what you're planning. We reply within one business day, or you can book a call and talk it through."
            source="our_people_cta"
          />
          <RelatedPages />
        </div>
      </section>
    </PageShell>
  );
}

function RelatedPages() {
  return (
    <nav aria-labelledby="people-related" className="mt-12 sm:mt-16">
      <h2 id="people-related" className="text-2xl font-semibold tracking-tight text-foreground">
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
