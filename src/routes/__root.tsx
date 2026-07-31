import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsTracker } from "@/components/analytics-tracker";

const NOT_FOUND_LINKS = [
  { to: "/services" as const, label: "Services" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          The page you&apos;re looking for was moved, renamed, or never existed. Try one of the pages below,
          or head back to the homepage.
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
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      ...(import.meta.env.VITE_GSC_VERIFICATION
        ? [{ name: "google-site-verification", content: import.meta.env.VITE_GSC_VERIFICATION as string }]
        : []),
      { property: "og:site_name", content: "Pixel2Tech" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://cdn.simpleicons.org", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://logo.clearbit.com" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        children:
          "requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('p2t-ready')})})",
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pixel2Tech",
          description:
            "Pixel2Tech is a full-service creative agency in Lahore, Pakistan, offering branding, web design, UI/UX, social media, video, and custom software development for clients worldwide.",
          url: "https://pixel2tech.com/",
          logo: "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png",
          email: "sales@pixel2tech.com",
          telephone: "+92 317 7475233",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "sales@pixel2tech.com",
              telephone: "+92 317 7475233",
              areaServed: ["US", "GB", "AE", "SA", "EU", "PK"],
              availableLanguage: ["en"],
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
          publisher: { "@type": "Organization", name: "Pixel2Tech", url: "https://pixel2tech.com/" },
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
    <html lang="en">
      <head>
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
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
