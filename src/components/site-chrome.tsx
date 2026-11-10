import { MediaImage } from "@/components/media-image";
import { Link, useRouterState } from "@tanstack/react-router";
import { Suspense, useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  ChevronDown,
  Clapperboard,
  ClipboardCheck,
  Cog,
  Globe,
  Handshake,
  House,
  Layers,
  LayoutGrid,
  Megaphone,
  Menu,
  Newspaper,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserPlus,
  Users,
  UtensilsCrossed,
  X,
  type LucideIcon,
} from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import logoAsset from "@/assets/pixel2tech-logo.png.asset.json";
import logoDarkAsset from "@/assets/pixel2tech-logo-dark.png.asset.json";
import { ThemeToggle } from "@/components/theme-provider";
import { SOCIAL_LINKS } from "@/components/social-links";
import { FadeIn } from "@/components/motion";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { trackEvent } from "@/lib/analytics";
import { INDUSTRIES } from "@/lib/industry-pages";
import { PRIMARY_CTA_LABEL, SERVICES, SITE, serviceAnchor } from "@/lib/site-config";

// Modal code (and its booking form) is only fetched when a user opens it.
const BookingModal = lazyWithRetry(() =>
  import("@/components/booking-modal").then((m) => ({ default: m.BookingModal })),
);

type StaticTo =
  | "/"
  | "/about"
  | "/careers"
  | "/press"
  | "/services"
  | "/for-agencies"
  | "/shopify-development-agency"
  | "/white-label-web-development"
  | "/industries"
  | "/portfolio"
  | "/results"
  | "/blog"
  | "/resources/shopify-store-checklist"
  | "/contact";

type NavChildBase = { label: string; description: string; icon: LucideIcon };

type NavChild =
  | (NavChildBase & { kind: "page"; to: StaticTo })
  | (NavChildBase & { kind: "service"; slug: string })
  | (NavChildBase & { kind: "industry"; slug: string });

type NavItem = {
  label: string;
  to: StaticTo;
  /** The child that points at `to` is the group's overview link. */
  children?: readonly NavChild[];
  /** Two columns of sub-pages, with the group's other pages in a side rail. */
  wide?: boolean;
};

const SERVICE_MENU: Record<(typeof SERVICES)[number], { icon: LucideIcon; description: string }> = {
  "Branding & Design": { icon: Palette, description: "Logo, color palette and brand guidelines" },
  "Website Development": { icon: Globe, description: "Landing pages and full business sites" },
  "WordPress & Shopify": { icon: ShoppingBag, description: "Sites, stores and product pages" },
  "Custom Platforms & Apps": { icon: Layers, description: "Mobile apps, SaaS and client portals" },
  "Automation & CRM": { icon: Cog, description: "Workflows, CRM setup and integrations" },
  "AI Solutions": { icon: Brain, description: "Chatbots, voice agents and RAG systems" },
  "SEO & Search Growth": { icon: Search, description: "On-page SEO, audits and keywords" },
  "Social Media & Email": { icon: Megaphone, description: "Content, ad campaigns and newsletters" },
  "Video Editing & Ads": {
    icon: Clapperboard,
    description: "Reels, brand videos and ad creatives",
  },
};

const INDUSTRY_MENU: Record<string, { icon: LucideIcon; description: string }> = {
  "beauty-and-ecommerce": { icon: Sparkles, description: "Shopify, product creative and content" },
  "professional-services": { icon: Briefcase, description: "Service websites and enquiry forms" },
  healthcare: { icon: Stethoscope, description: "Medical websites and accessible forms" },
  "food-and-hospitality": {
    icon: UtensilsCrossed,
    description: "Menus, brand identity and launch creative",
  },
  "home-and-local-services": { icon: House, description: "Service websites and local pages" },
};

// Every page from the footer sits under the section it belongs to; Industries is its own group.
const NAV: readonly NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      {
        kind: "page",
        label: "About us",
        to: "/about",
        icon: Users,
        description: "Our studio, team and way of working",
      },
      {
        kind: "page",
        label: "Careers",
        to: "/careers",
        icon: UserPlus,
        description: "Show us your work and apply",
      },
      {
        kind: "page",
        label: "Press",
        to: "/press",
        icon: Newspaper,
        description: "Studio overview and media contact",
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    wide: true,
    children: [
      {
        kind: "page",
        label: "All services",
        to: "/services",
        icon: LayoutGrid,
        description: "See every service we offer",
      },
      ...SERVICES.map((title) => ({
        kind: "service" as const,
        label: title,
        slug: serviceAnchor(title),
        ...SERVICE_MENU[title],
      })),
      {
        kind: "page",
        label: "For agencies",
        to: "/for-agencies",
        icon: Handshake,
        description: "White-label design, web and video",
      },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      {
        kind: "page",
        label: "All industries",
        to: "/industries",
        icon: Building2,
        description: "The businesses we design and build for",
      },
      ...INDUSTRIES.map((industry) => ({
        kind: "industry" as const,
        label: industry.title,
        slug: industry.slug,
        icon: INDUSTRY_MENU[industry.slug]?.icon ?? Building2,
        description: INDUSTRY_MENU[industry.slug]?.description ?? industry.heading,
      })),
    ],
  },
  {
    label: "Portfolio",
    to: "/portfolio",
    children: [
      {
        kind: "page",
        label: "All work",
        to: "/portfolio",
        icon: LayoutGrid,
        description: "Brand, web, social, video and software projects",
      },
      {
        kind: "page",
        label: "Project outcomes",
        to: "/results",
        icon: TrendingUp,
        description: "What changed after past projects",
      },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    children: [
      {
        kind: "page",
        label: "All articles",
        to: "/blog",
        icon: BookOpen,
        description: "Guides on Shopify, web, SEO, AI and branding",
      },
      {
        kind: "page",
        label: "Free Shopify checklist",
        to: "/resources/shopify-store-checklist",
        icon: ClipboardCheck,
        description: "See your store through a shopper's eyes",
      },
    ],
  },
  { label: "Contact", to: "/contact" },
];

/** Inline nav with dropdowns needs ~1200px; below that the menu button takes over. */
const DESKTOP_NAV_QUERY = "(min-width: 1280px)";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function childPath(child: NavChild) {
  if (child.kind === "service") return `/services/${child.slug}`;
  if (child.kind === "industry") return `/industries/${child.slug}`;
  return child.to;
}

function isGroupActive(pathname: string, item: NavItem) {
  if (isActive(pathname, item.to)) return true;
  return item.children?.some((c) => isActive(pathname, childPath(c))) ?? false;
}

/** Sub-links of a group, without the overview link that repeats the group's own page. */
function subLinks(item: NavItem) {
  return (item.children ?? []).filter((c) => !(c.kind === "page" && c.to === item.to));
}

function ChildLink({
  child,
  className,
  current,
  children,
}: {
  child: NavChild;
  className: string;
  current: boolean;
  children: React.ReactNode;
}) {
  const ariaCurrent = current ? ("page" as const) : undefined;
  if (child.kind === "service") {
    return (
      <Link
        to="/services/$slug"
        params={{ slug: child.slug }}
        aria-current={ariaCurrent}
        className={className}
      >
        {children}
      </Link>
    );
  }
  if (child.kind === "industry") {
    return (
      <Link
        to="/industries/$slug"
        params={{ slug: child.slug }}
        aria-current={ariaCurrent}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link to={child.to} aria-current={ariaCurrent} className={className}>
      {children}
    </Link>
  );
}

/** Desktop dropdown: opens on mouse hover, keyboard focus or the chevron button. */
function NavDropdown({
  item,
  active,
  pathname,
  openMenu,
  setOpenMenu,
}: {
  item: NavItem;
  active: boolean;
  pathname: string;
  /** Owned by the nav, so opening one menu always closes the others. */
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const open = openMenu === item.label;
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const lastPointer = useRef("");
  const children = item.children ?? [];
  const overview = children.find((c) => c.kind === "page" && c.to === item.to);
  const railLinks = item.wide ? children.filter((c) => c.kind === "page") : [];
  const listLinks = item.wide ? children.filter((c) => c.kind !== "page") : children;

  const show = () => setOpenMenu(item.label);
  const hide = () => setOpenMenu((current) => (current === item.label ? null : current));

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) hide();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hide only depends on the stable setter and label
  }, [open]);

  const renderChild = (child: NavChild) => {
    // The overview link only counts as current on the exact page, not its sub-pages.
    const current =
      child === overview ? pathname === item.to : isActive(pathname, childPath(child));
    const Icon = child.icon;
    return (
      <ChildLink
        child={child}
        current={current}
        className={`group/item flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${
          current ? "bg-muted" : ""
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
            current
              ? "bg-primary text-primary-foreground"
              : "bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-foreground">{child.label}</span>
          <span className="mt-1 block text-xs font-normal leading-snug text-muted-foreground">
            {child.description}
          </span>
        </span>
      </ChildLink>
    );
  };

  return (
    <div
      ref={ref}
      className="relative"
      // Touch taps also fire pointerenter; only a real mouse should open on hover.
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") show();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") hide();
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide();
      }}
    >
      <div className="flex items-center gap-1">
        <Link
          to={item.to}
          aria-current={pathname === item.to ? "page" : undefined}
          className="relative whitespace-nowrap py-2 transition-colors hover:text-primary"
        >
          <span className={active ? "font-semibold" : ""}>{item.label}</span>
          {active && (
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[2px] w-full bg-foreground"
            />
          )}
        </Link>
        <button
          type="button"
          onPointerDown={(e) => {
            lastPointer.current = e.pointerType;
          }}
          onClick={() => {
            // Hover has already opened it for a mouse, so a click must not close it again.
            if (lastPointer.current === "mouse" || !open) show();
            else hide();
            lastPointer.current = "";
          }}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`More ${item.label} pages`}
          className="inline-flex h-8 w-5 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id={menuId}
        className={`absolute left-1/2 top-full z-50 origin-top -translate-x-1/2 pt-4 transition duration-200 ease-out motion-reduce:transition-none ${
          item.wide ? "w-[58rem]" : "w-[22rem]"
        } ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible -translate-y-1 scale-[0.98] opacity-0"
        }`}
      >
        <div
          className={`rounded-3xl border border-border bg-background p-2 shadow-[0_24px_60px_-20px_rgba(10,13,31,0.3)] ${
            item.wide ? "flex gap-2" : ""
          }`}
        >
          <ul className={item.wide ? "grid flex-1 grid-cols-2 gap-1" : "grid gap-1"}>
            {listLinks.map((child) => (
              <li key={childPath(child)}>{renderChild(child)}</li>
            ))}
          </ul>
          {item.wide && (
            <div className="flex w-64 shrink-0 flex-col rounded-2xl bg-muted/50 p-2">
              <ul className="grid gap-1">
                {railLinks.map((child) => (
                  <li key={childPath(child)}>{renderChild(child)}</li>
                ))}
              </ul>
              <div className="mt-auto p-2">
                <p className="text-sm font-semibold text-foreground">Not sure where to start?</p>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex min-h-11 items-center gap-1 rounded text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Talk to us <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const activeGroup = NAV.find((n) => n.children && isGroupActive(pathname, n))?.label ?? null;
  const [mobileGroup, setMobileGroup] = useState<string | null>(activeGroup);

  // Close menu on route change; keep the current page's group expanded in the drawer.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileGroup(activeGroup);
  }, [pathname, activeGroup]);

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
            <MediaImage
              decoding="async"
              width={411}
              height={98}
              src={logoAsset.url}
              alt="Pixel2Tech"
              className="block h-9 w-auto sm:h-10 dark:hidden"
            />
            <MediaImage
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
            className="hidden items-center gap-8 text-sm font-medium text-foreground xl:flex"
          >
            {NAV.map((n) => {
              if (n.children) {
                return (
                  <NavDropdown
                    key={n.to}
                    item={n}
                    active={isGroupActive(pathname, n)}
                    pathname={pathname}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                );
              }
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
              <span className="2xl:hidden">Book a call</span>
              <span className="hidden 2xl:inline">{PRIMARY_CTA_LABEL}</span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
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
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-300 ease-out xl:hidden ${
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
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-border bg-background shadow-2xl transition-transform duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] xl:hidden ${
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
            const motion = {
              transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
              transform: open ? "translate3d(0,0,0)" : "translate3d(14px,0,0)",
            };
            if (n.children) {
              const groupActive = isGroupActive(pathname, n);
              const expanded = mobileGroup === n.label;
              const listId = `mobile-${n.label.toLowerCase()}-links`;
              return (
                <div
                  key={n.to}
                  style={motion}
                  className={`transition-[opacity,transform] duration-300 ease-out ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`flex min-h-14 items-center justify-between rounded-2xl pl-4 pr-2 ${
                      active ? "bg-muted" : ""
                    }`}
                  >
                    <Link
                      to={n.to}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-14 flex-1 items-center text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        groupActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {n.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileGroup(expanded ? null : n.label)}
                      aria-expanded={expanded}
                      aria-controls={listId}
                      aria-label={`${expanded ? "Hide" : "Show"} ${n.label} pages`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/70 transition active:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div
                    id={listId}
                    inert={!expanded || undefined}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="ml-4 flex flex-col gap-1 overflow-hidden border-l border-border pl-3">
                      {subLinks(n).map((c) => {
                        const current = isActive(pathname, childPath(c));
                        return (
                          <li key={childPath(c)}>
                            <ChildLink
                              child={c}
                              current={current}
                              className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                                current
                                  ? "bg-muted text-foreground"
                                  : "text-foreground/70 active:bg-muted/60"
                              }`}
                            >
                              <span className="flex min-w-0 items-center gap-3">
                                <c.icon
                                  className="h-4 w-4 shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                {c.label}
                              </span>
                              {current && (
                                <span
                                  aria-hidden="true"
                                  className="h-2 w-2 rounded-full bg-brand"
                                />
                              )}
                            </ChildLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                style={motion}
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

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Press", to: "/press" },
  { label: "Contact", to: "/contact" },
] as const;
const WORK_LINKS = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Project outcomes", to: "/results" },
  { label: "For agencies", to: "/for-agencies" },
  { label: "Shopify development agency", to: "/shopify-development-agency" },
  { label: "White label web development", to: "/white-label-web-development" },
  { label: "Blog", to: "/blog" },
  { label: "Free Shopify checklist", to: "/resources/shopify-store-checklist" },
] as const;

const FOOTER_SOCIALS = [
  "Facebook",
  "Instagram",
  "X / Twitter",
  "LinkedIn",
  "Pinterest",
  "YouTube",
  "Threads",
  "Bluesky",
  "Medium",
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkCls =
    "inline-flex min-h-11 items-center py-2 text-muted-foreground transition-colors hover:text-foreground";
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
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Get in touch
              </p>
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:gap-x-8 lg:grid-cols-[1.1fr_0.65fr_0.9fr_1.5fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" aria-label="Pixel2Tech home" className="inline-block">
              <MediaImage
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

          <nav aria-labelledby="footer-quick-links" className="min-w-0">
            <p
              id="footer-quick-links"
              className="text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Company
            </p>
            <ul className="mt-4 text-sm">
              {COMPANY_LINKS.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className={linkCls}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-work-links" className="min-w-0">
            <p
              id="footer-work-links"
              className="text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Work &amp; resources
            </p>
            <ul className="mt-4 text-sm">
              {WORK_LINKS.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className={linkCls}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-services" className="col-span-2 min-w-0 lg:col-span-1">
            <p
              id="footer-services"
              className="text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Services
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 text-sm">
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
