import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { isChunkLoadError, reloadForStaleChunk } from "@/lib/lazy-with-retry";
import { ThemeProvider, THEME_BOOT_SCRIPT } from "@/components/theme-provider";
import { PageShell } from "@/components/site-chrome";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM, TEAM_SIZE } from "@/lib/team";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { ContentProtection } from "@/components/content-protection";

import { Toaster } from "@/components/ui/sonner";

const NOT_FOUND_LINKS = [
  { to: "/services" as const, label: "Services" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function NotFoundComponent() {
  return (
    <PageShell>
      {/* React 19 hoists these into <head>. */}
      <title>Page not found | Pixel2Tech</title>
      <meta name="robots" content="noindex" />
      <div className="flex min-h-[70dvh] items-center justify-center bg-background px-5 py-16">
        <div className="max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-4 text-[15px] text-muted-foreground">
            The page you&apos;re looking for was moved, renamed, or never existed. Try one of the
            pages below, or head back to the homepage.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Back to homepage
            </Link>
          </div>
          <nav aria-label="Helpful links" className="mt-8 flex flex-wrap justify-center gap-2">
            {NOT_FOUND_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex min-h-10 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </PageShell>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const chunkError = isChunkLoadError(error);
  // A stale tab whose asset hashes no longer exist should silently reload once
  // (rate-limited); if that isn't allowed, fall through to the error page.
  const [reloading, setReloading] = useState(chunkError);

  useEffect(() => {
    if (chunkError) {
      if (!reloadForStaleChunk()) setReloading(false);
      return;
    }
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error, chunkError]);

  if (reloading) {
    return <div className="min-h-screen bg-background" aria-hidden />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Pixel2Tech" },
      {
        name: "google-site-verification",
        content: "S6ztcxzh9YNUQjvX1iYls3EVoH7JCdpqj684i-0I_rs",
      },
      { property: "og:site_name", content: "Pixel2Tech" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      // Clarity + GA4 are loaded on idle from <AnalyticsTracker /> so they never
      // block first paint on mobile.

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pixel2tech.com/#organization",
          name: "Pixel2Tech",
          description: SITE.shortDescription,
          url: SITE.url,
          logo: "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png",
          email: SITE.email,
          telephone: SITE.phoneE164,
          foundingDate: STATS.foundingYear,
          numberOfEmployees: { "@type": "QuantitativeValue", value: TEAM_SIZE },
          founder: TEAM.filter((m) => m.founder).map((m) => ({
            "@type": "Person",
            name: m.name,
            jobTitle: m.role,
            url: `${SITE.url}${m.profile}`,
          })),
          address: { "@type": "PostalAddress", ...SITE.address },
          openingHoursSpecification: SITE.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
          areaServed: ["US", "GB", "AE", "PK", "Worldwide"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: SITE.email,
              telephone: SITE.phoneE164,
              areaServed: "Worldwide",
              availableLanguage: ["English", "Urdu"],
            },
          ],
          sameAs: [
            "https://www.facebook.com/profile.php?id=61575635244591",
            "https://www.instagram.com/pixel_2tech/",
            "https://x.com/Pixel2tech",
            "https://www.linkedin.com/company/pixel2tech",
            "https://www.pinterest.com/pixel2tech/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Pixel2Tech",
          url: "https://pixel2tech.com/",
          inLanguage: "en",
          publisher: {
            "@type": "Organization",
            name: "Pixel2Tech",
            url: "https://pixel2tech.com/",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    // The inline boot script adds the theme class to <html> before hydration,
    // so attribute differences here are expected.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AnalyticsTracker />
        <ContentProtection />

        {/* Honour the OS "reduce motion" setting for every framer-motion animation. */}
        <MotionConfig reducedMotion="user">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </MotionConfig>
        <Toaster position="top-center" richColors closeButton />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
