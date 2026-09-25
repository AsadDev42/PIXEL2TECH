import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Award,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { Faq } from "@/components/faq";
import { trackEvent } from "@/lib/analytics";
import { SITE } from "@/lib/site-config";
import type { PersonProfileData } from "@/lib/people";

const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION = "py-16 md:py-24";
const CARD = "rounded-2xl border border-border bg-card p-6";
const H2 = "text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl";
const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const PRIMARY_BUTTON =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90 sm:w-auto";
const SECONDARY_BUTTON =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto";

function SectionHeading({
  id,
  eyebrow,
  children,
  className = "max-w-2xl",
}: {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <p className={EYEBROW}>{eyebrow}</p>}
      <h2 id={id} className={`${eyebrow ? "mt-4 " : ""}${H2}`}>
        {children}
      </h2>
    </div>
  );
}

export function PersonProfile({ person }: { person: PersonProfileData }) {
  const slug = person.path.slice(1);
  const firstName = person.givenName;

  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="profile-name" className="bg-background">
        <div className={`${CONTAINER} pb-16 pt-8 md:pb-24 md:pt-12`}>
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground md:mb-10">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="inline-flex min-h-11 items-center hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/about"
                  className="inline-flex min-h-11 items-center hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {person.name}
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                {person.role}
              </p>
              <h1
                id="profile-name"
                className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                {person.name}
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {person.intro}
              </p>
              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {SITE.location}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {person.reach}
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton source={`${slug}_hero`} className={PRIMARY_BUTTON} />
                <Link to="/portfolio" className={SECONDARY_BUTTON}>
                  See our work
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-muted md:mr-0">
              <img
                src={person.portrait.src}
                alt={person.portrait.alt}
                width={person.portrait.width}
                height={person.portrait.height}
                fetchPriority="high"
                decoding="async"
                className="block h-auto w-full object-cover"
                style={{ aspectRatio: `${person.portrait.width} / ${person.portrait.height}` }}
              />
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
            {person.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse rounded-2xl border border-border bg-card p-4 sm:p-5"
              >
                <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Biography */}
      <section aria-labelledby="bio-title" className={`bg-muted ${SECTION}`}>
        <div className={`${CONTAINER} grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
          <SectionHeading id="bio-title" eyebrow="Biography">
            {person.bio.heading}
          </SectionHeading>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {person.bio.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading id="expertise-title" eyebrow={person.expertise.eyebrow}>
            {person.expertise.heading}
          </SectionHeading>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {person.expertise.items.map(({ icon: Icon, title, desc }) => (
              <li key={title} className={`h-full ${CARD}`}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience timeline */}
      <section aria-labelledby="experience-title" className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading id="experience-title" eyebrow="Experience">
            A timeline of the work
          </SectionHeading>
          <ol className="ml-1 mt-10 border-l border-foreground/15">
            {person.timeline.map((t) => (
              <li key={`${t.org}-${t.period}`} className="relative pb-8 pl-6 last:pb-0 sm:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-muted"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-bold tracking-tight text-foreground">{t.role}</h3>
                  <span className="text-sm font-medium text-primary">{t.org}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.period} · {t.place}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills, tools and industries */}
      <section aria-labelledby="skills-title" className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading id="skills-title">{person.skills.heading}</SectionHeading>
          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {person.skills.groups.map((group) => (
              <div key={group.heading}>
                <h3 className={EYEBROW}>{group.heading}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / case studies */}
      <section aria-labelledby="cases-title" className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading id="cases-title" eyebrow={person.highlights.eyebrow}>
            {person.highlights.heading}
          </SectionHeading>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {person.highlights.items.map((c) => (
              <li key={c.title}>
                {c.slug ? (
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: c.slug }}
                    className={`group flex h-full flex-col transition hover:shadow-xl ${CARD}`}
                  >
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.result}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read the case study
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                ) : (
                  <div className={`h-full ${CARD}`}>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership + credentials */}
      <section aria-labelledby="leadership-title" className={`bg-background ${SECTION}`}>
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading id="leadership-title" eyebrow="Pixel2Tech leadership" className="">
              {person.leadership.heading}
            </SectionHeading>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {person.leadership.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground hover:underline"
            >
              Meet the full team
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className={CARD}>
            <h3 className={`flex items-center gap-2 ${EYEBROW}`}>
              <Award className="h-4 w-4" aria-hidden="true" /> {person.credentials.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {person.credentials.items.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {person.credentials.note.label}:
              </span>{" "}
              {person.credentials.note.text}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-title" className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading id="testimonials-title">What clients say</SectionHeading>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {person.testimonials.map((t) => (
              <li key={t.author}>
                <figure className={`h-full ${CARD}`}>
                  <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-semibold text-foreground">
                    {t.author}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="mx-auto max-w-3xl">
            <SectionHeading id="faq-title" className="mb-8 text-center">
              Frequently asked questions
            </SectionHeading>
            <Faq items={person.faqs} />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="contact-title" className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="rounded-3xl border border-border bg-card px-5 py-10 text-center sm:p-12">
            <h2 id="contact-title" className={`mx-auto max-w-3xl ${H2}`}>
              {person.closing.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {person.closing.body}
            </p>
            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
              <BookCallButton source={`${slug}_closing`} className={PRIMARY_BUTTON} />
              <Link to="/contact" className={SECONDARY_BUTTON}>
                Send a project brief
              </Link>
            </div>
            <ul
              aria-label={`Other ways to reach ${firstName} and the team`}
              className="mt-6 flex flex-col items-center gap-x-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center"
            >
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => trackEvent("email_click", { location: slug })}
                  className="inline-flex min-h-11 items-center gap-2 break-all hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  onClick={() => trackEvent("phone_click", { location: slug })}
                  className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: slug })}
                  className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
