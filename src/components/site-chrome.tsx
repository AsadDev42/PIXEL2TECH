import { Link, useRouterState } from "@tanstack/react-router";
import { Suspense, useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import logoAsset from "@/assets/pixel2tech-logo.png.asset.json";
import logoDarkAsset from "@/assets/pixel2tech-logo-dark.png.asset.json";
import { ThemeToggle } from "@/components/theme-provider";
import { SOCIAL_LINKS } from "@/components/social-links";
import { FadeIn } from "@/components/motion";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { CursorFollower } from "@/components/cursor-follower";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";
import { PRIMARY_CTA_LABEL, SERVICES, SITE, serviceAnchor } from "@/lib/site-config";

// Modal code (and its Calendly embed) is only fetched when a user opens it.
const BookingModal = lazyWithRetry(() =>
  import("@/components/booking-modal").then((m) => ({ default: m.BookingModal })),
);

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

/** Inline nav needs ~1000px; below that the menu button takes over. */
const DESKTOP_NAV_QUERY = "(min-width: 1024px)";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the menu is open; close on Escape or when the
  // viewport grows into the desktop nav breakpoint.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia(DESKTOP_NAV_QUERY);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const mobileNavRef = useFocusTrap<HTMLDivElement>(open);

  const openBooking = (source: string) => {
    trackEvent("strategy_call_modal_opened", { source });
    setBookingOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:py-4 md:px-8 lg:px-10">
          <Link to="/" aria-label="Pixel2Tech home" className="flex shrink-0 items-center">
            <img
              decoding="async"
              width={411}
              height={98}
              src={logoAsset.url}
              alt="Pixel2Tech"
              className="block h-9 w-auto sm:h-10 dark:hidden"
            />
            <img
              decoding="async"
              width={411}
              height={98}
              src={logoDarkAsset.url}
              alt="Pixel2Tech"
              // Lazy: a display:none image never loads, so light-mode visitors skip it.
              loading="lazy"
              className="hidden h-9 w-auto sm:h-10 dark:block"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm font-medium text-foreground lg:flex xl:gap-8 xl:text-[15px]"
          >
            {NAV.map((n) => {
              const active = isActive(pathname, n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  aria-current={active ? "page" : undefined}
                  className="relative whitespace-nowrap py-2 transition-colors hover:text-primary"
                >
                  <span className={active ? "font-semibold" : ""}>{n.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-foreground"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => openBooking("header")}
              className="hidden min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90 sm:inline-flex"
            >
              <span className="xl:hidden">Book a call</span>
              <span className="hidden xl:inline">{PRIMARY_CTA_LABEL}</span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — rendered outside the sticky/backdrop-blurred header so the
          fixed panel animates against the viewport (no jitter/shake). */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-300 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="mobile-nav"
        ref={mobileNavRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        // A closed drawer must not be reachable with Tab.
        inert={!open || undefined}
        tabIndex={-1}
        style={{
          transform: open ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-border bg-background shadow-2xl transition-transform duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 pb-2 pt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition active:scale-95"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pt-2">
          {NAV.map((n, i) => {
            const active = isActive(pathname, n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                style={{
                  transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
                  transform: open ? "translate3d(0,0,0)" : "translate3d(14px,0,0)",
                }}
                className={`flex min-h-14 items-center justify-between rounded-2xl px-4 text-lg font-semibold tracking-tight transition-[opacity,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  open ? "opacity-100" : "opacity-0"
                } ${active ? "bg-muted text-foreground" : "text-foreground/80 active:bg-muted/60"}`}
              >
                <span>{n.label}</span>
                {active && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4 px-6 pb-8 pt-8">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openBooking("mobile_menu");
            }}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-foreground px-6 text-base font-semibold text-background transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {PRIMARY_CTA_LABEL}
          </button>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a href={`mailto:${SITE.email}`} className="min-h-11 py-2">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneE164}`} className="min-h-11 py-2">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {bookingOpen && (
        <Suspense fallback={null}>
          <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
        </Suspense>
      )}
    </>
  );
}

const QUICK_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

const FOOTER_SOCIALS = ["Facebook", "Instagram", "X / Twitter", "LinkedIn", "Pinterest"];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkCls =
    "inline-flex min-h-9 items-center text-muted-foreground transition-colors hover:text-foreground";
  const hours = SITE.hours
    .filter((h) => h.time !== "Closed")
    .map(
      (h) =>
        `${h.days.replace("Monday – Friday", "Mon–Fri").replace("Saturday", "Sat")}: ${h.time}`,
    );
  const contacts: {
    label: string;
    value: string;
    href?: string;
    track?: string;
    external?: boolean;
  }[] = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, track: "email_click" },
    {
      label: "WhatsApp or call",
      value: SITE.phoneDisplay,
      href: SITE.whatsappUrl,
      track: "whatsapp_click",
      external: true,
    },
    { label: "Studio", value: SITE.location },
    { label: "Hours (Pakistan time)", value: hours.join("\n") },
  ];

  return (
    // The footer always uses the dark palette, whatever the site theme.
    <footer className="dark relative overflow-hidden bg-background text-foreground [color-scheme:dark]">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-24">
        {/* Call to action + contact, one card */}
        <section
          aria-labelledby="footer-cta-title"
          className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-card"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="grid lg:grid-cols-[1.35fr_1fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
                Replies within one business day
              </p>
              <h2
                id="footer-cta-title"
                className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Have a project in mind? <span className="text-primary">Let&apos;s talk.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. We&apos;ll come back with questions, a plan and a
                fixed quote.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookCallButton
                  source="footer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                />
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-8 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-foreground/5"
                >
                  Send a project brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="border-t border-border bg-background/40 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Get in touch
              </h3>
              <ul className="mt-2 divide-y divide-border">
                {contacts.map(({ label, value, href, track, external }) => {
                  const body = (
                    <>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{label}</span>
                        <span className="mt-1 block whitespace-pre-line break-words text-base font-semibold text-foreground sm:text-lg">
                          {value}
                        </span>
                      </span>
                      {href ? (
                        <span
                          aria-hidden="true"
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      ) : null}
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          onClick={() => track && trackEvent(track, { location: "footer" })}
                          className="group flex items-center justify-between gap-4 py-5"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center justify-between gap-4 py-5">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Link columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" aria-label="Pixel2Tech home" className="inline-block">
              <img
                loading="lazy"
                decoding="async"
                width={411}
                height={98}
                src={logoDarkAsset.url}
                alt="Pixel2Tech"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.positioning}, working with clients worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.filter((s) => FOOTER_SOCIALS.includes(s.name)).map(
                ({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pixel2Tech on ${name}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ),
              )}
            </div>
          </div>

          <nav aria-labelledby="footer-quick-links" className="lg:col-span-2">
            <h2
              id="footer-quick-links"
              className="text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Company
            </h2>
            <ul className="mt-4 text-sm">
              {QUICK_LINKS.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className={linkCls}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services" className="lg:col-span-5">
            <h2
              id="footer-services"
              className="text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Services
            </h2>
            <ul className="mt-4 grid gap-x-6 text-sm sm:grid-cols-2">
              {SERVICES.map((title) => (
                <li key={title}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: serviceAnchor(title) }}
                    className={`${linkCls} group gap-1`}
                  >
                    {title}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Wordmark: an SVG sized to the container, so it always fits and never crops */}
        <svg
          viewBox="0 0 1000 132"
          aria-hidden="true"
          className="block w-full select-none text-foreground"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="footer-wordmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.16" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <text
            x="500"
            y="118"
            textAnchor="middle"
            textLength="990"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="Sora, sans-serif"
            fontWeight="800"
            fontSize="150"
            fill="url(#footer-wordmark)"
          >
            PIXEL2TECH
          </text>
        </svg>

        {/* Bottom bar; extra padding on phones keeps it clear of the WhatsApp button */}
        <div className="flex flex-col items-center gap-3 border-t border-border py-6 pb-24 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left md:pb-6 md:pr-20">
          <span>© {year} Pixel2Tech. All rights reserved.</span>
          <span className="flex flex-wrap items-center justify-center gap-x-1">
            <Link
              to="/privacy-policy"
              className="inline-flex min-h-11 items-center px-2 hover:text-foreground"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="inline-flex min-h-11 items-center px-2 hover:text-foreground"
            >
              Terms &amp; conditions
            </Link>
            <a
              href="#main-content"
              aria-label="Back to top"
              className="ml-2 grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      // z-30 keeps it under the header, the mobile menu and modals.
      className="group fixed bottom-4 right-4 z-30 flex h-14 items-center gap-2 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-xl transition-all duration-300 hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 group-hover:opacity-100">
        WhatsApp us
      </span>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.290-1.460-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.490 0-.143-.73-2.090-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.858 0 2.42-.516 2.75-1.404.13-.343.187-.744.187-1.117 0-.286-1.877-1.135-2.15-1.246Zm-2.895 7.208a10.086 10.086 0 0 1-5.13-1.404l-3.583.945.96-3.522A10.028 10.028 0 0 1 6.145 14.4 10.079 10.079 0 0 1 16.2 4.348a10.079 10.079 0 0 1 10.055 10.052 10.079 10.079 0 0 1-10.041 10.013Zm0-22.146A12.11 12.11 0 0 0 4.098 14.4c0 2.147.573 4.194 1.65 6.055L3.75 27.75l7.457-1.949a12.121 12.121 0 0 0 5.784 1.476h.014c6.694 0 12.176-5.474 12.176-12.166A12.15 12.15 0 0 0 25.638 5.5a12.005 12.005 0 0 0-9.423-4.233Z" />
      </svg>
    </a>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <CursorFollower />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-background pb-8 pt-10 sm:pb-10 sm:pt-16">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <FadeIn>
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
            {title} {highlight && <span className="text-primary">{highlight}</span>}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-[15px]">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
