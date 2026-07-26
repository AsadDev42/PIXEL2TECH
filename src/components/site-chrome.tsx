import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/pixel2tech-logo.png.asset.json";
import logoDarkAsset from "@/assets/pixel2tech-logo-dark.png.asset.json";
import { ThemeToggle } from "@/components/theme-provider";
import { BookingModal } from "@/components/booking-modal";
import { SOCIAL_LINKS } from "@/components/social-links";
import { Menu, X } from "lucide-react";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";


const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);
  // Lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const mobileNavRef = useFocusTrap<HTMLDivElement>(open);

  return (
    <>
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8 sm:py-5">
        <Link to="/" aria-label="Pixel2Tech — Home" className="flex shrink-0 items-center">

          <img fetchPriority="high" decoding="async" width={176} height={44} src={logoAsset.url} alt="Pixel2Tech" className="h-9 w-auto sm:h-11 block dark:hidden" />
          <img fetchPriority="high" decoding="async" width={176} height={44} src={logoDarkAsset.url} alt="Pixel2Tech" className="h-9 w-auto sm:h-11 hidden dark:block" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center justify-center gap-6 text-[15px] font-medium text-foreground lg:flex xl:gap-8">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                className="relative py-2"
              >
                <span className={active ? "font-semibold" : ""}>{n.label}</span>
                {active && (
                  <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => { trackEvent("strategy_call_modal_opened", { source: "header" }); setBookingOpen(true); }}
            className="hidden shrink-0 items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90 sm:inline-flex sm:px-6"
          >
            Schedule a Strategy Session
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          tabIndex={-1}
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-background shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-base">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl px-4 py-3 text-[17px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${active ? "bg-muted font-semibold text-foreground" : "text-foreground hover:bg-muted/60"}`}
                >
                  {n.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => { setOpen(false); trackEvent("strategy_call_modal_opened", { source: "mobile_menu" }); setBookingOpen(true); }}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Schedule a Strategy Session
            </button>
          </nav>

        </div>
      )}
    </header>
    <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}


const MARQUEE_WORDS = [
  "Brand Identity",
  "Website Design & Development",
  "UI UX",
  "Social Media",
  "AI Solutions",
  "Motion Design",
];

function FooterMarquee() {
  const loop = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="marquee-viewport edge-fade-x overflow-hidden bg-muted py-6 sm:py-8">
      <div className="marquee-track slow items-center gap-8 pr-8 sm:gap-14 sm:pr-14">
        {loop.map((w, i) => (
          <div
            key={`${w}-${i}`}
            className="flex shrink-0 items-center gap-8 text-[36px] font-black leading-none tracking-tight text-foreground sm:gap-14 sm:text-[64px] lg:text-[96px]"
          >
            <span aria-hidden="true" className="text-[#1E90FF]">✳</span>
            <span>{w}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export function SiteFooter() {
  const quick = [
    { label: "About", to: "/about" as const },
    { label: "Services", to: "/services" as const },
    { label: "Portfolio", to: "/portfolio" as const },
    { label: "Blog", to: "/blog" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  const svc = [
    { label: "Branding", to: "/services" as const },
    { label: "Web Design", to: "/services" as const },
    { label: "UI UX", to: "/services" as const },
    { label: "Social Media", to: "/services" as const },
    { label: "Software & Automation", to: "/services" as const },
  ];
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" aria-label="Pixel2Tech — Home">
              <img loading="lazy" decoding="async" width={176} height={44} src={logoAsset.url} alt="Pixel2Tech" className="h-11 w-auto block dark:hidden" />
              <img loading="lazy" decoding="async" width={176} height={44} src={logoDarkAsset.url} alt="Pixel2Tech" className="h-11 w-auto hidden dark:block" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A full-service creative agency from Pakistan, serving clients worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.filter((s) =>
                ["Facebook", "Instagram", "X / Twitter", "LinkedIn", "Pinterest"].includes(s.name)
              ).map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pixel2Tech on ${name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-background"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

          </div>
          <div>
            <div className="text-lg font-bold text-foreground">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {quick.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="hover:text-foreground">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">Services</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {svc.map((q) => (
                <li key={q.label}>
                  <Link to={q.to} className="hover:text-foreground">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li>
                <a href="mailto:sales@pixel2tech.com" onClick={() => trackEvent("email_click", { location: "footer" })} className="hover:text-foreground">
                  sales@pixel2tech.com
                </a>
              </li>
              <li>
                <a href="tel:+923177475233" onClick={() => trackEvent("phone_click", { location: "footer" })} className="hover:text-foreground">
                  +92 317 7475233
                </a>
              </li>
              <li>Pakistan Based, Serving Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:mt-12">
          © 2024 Pixel2Tech. All rights reserved.
        </div>
      </div>
      <FooterMarquee />
    </footer>
  );
}

function WhatsAppButton() {
  const number = "923177475233";
  const msg = encodeURIComponent("Hi Pixel2Tech, I'd like to discuss a project.");
  return (
    <a
      href={`https://wa.me/${number}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="group fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-xl transition-all duration-300 hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 group-hover:opacity-100">
        WhatsApp us
      </span>
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background/40" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.858 0 2.42-.516 2.75-1.404.13-.343.187-.744.187-1.117 0-.286-1.877-1.135-2.15-1.246Zm-2.895 7.208a10.086 10.086 0 0 1-5.13-1.404l-3.583.945.96-3.522A10.028 10.028 0 0 1 6.145 14.4 10.079 10.079 0 0 1 16.2 4.348a10.079 10.079 0 0 1 10.055 10.052 10.079 10.079 0 0 1-10.041 10.013Zm0-22.146A12.11 12.11 0 0 0 4.098 14.4c0 2.147.573 4.194 1.65 6.055L3.75 27.75l7.457-1.949a12.121 12.121 0 0 0 5.784 1.476h.014c6.694 0 12.176-5.474 12.176-12.166A12.15 12.15 0 0 0 25.638 5.5a12.005 12.005 0 0 0-9.423-4.233Z"/>
        </svg>
      </span>
    </a>
  );
}



import { CursorFollower } from "./cursor-follower";
import { PageTransition, PageLoader, FadeIn } from "./motion";
import { AnimatePresence } from "framer-motion";


export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <AnimatePresence>{loading && <PageLoader key="loader" />}</AnimatePresence>
      <SiteNav />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
        </PageTransition>
      </AnimatePresence>
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
    <section className="bg-background pt-10 pb-8 sm:pt-16 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <FadeIn>
          {eyebrow && (
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
            {title}{" "}
            {highlight && (
              <span className="text-[#1E90FF]">{highlight}</span>
            )}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-[14px] text-muted-foreground sm:text-[15px]">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

