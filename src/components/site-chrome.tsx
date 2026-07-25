import { Link, useRouterState } from "@tanstack/react-router";
import logoAsset from "@/assets/pixel2tech-logo.png.asset.json";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

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
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link to="/" className="flex items-center">
          <img src={logoAsset.url} alt="Pixel2Tech" className="h-11 w-auto" />
        </Link>
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-black md:flex">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className="relative"
              >
                <span className={active ? "font-semibold" : ""}>{n.label}</span>
                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-black" />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Book a Call
        </Link>
      </div>
    </header>
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
  const svc = ["Branding", "Web Design", "UI UX", "Social Media", "AI Solutions"];
  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src={logoAsset.url} alt="Pixel2Tech" className="h-11 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-600">
              Leading AI-Powered Creative Agency from Pakistan serving clients worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-black hover:bg-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {quick.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="hover:text-black">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Services</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {svc.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>sales@pixel2tech.com</li>
              <li>+92 317 7475233</li>
              <li>Pakistan Based, Serving Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-300 pt-6 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Pixel2Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteNav />
      {children}
      <SiteFooter />
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
    <section className="bg-white pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-8 text-center">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-3 text-[52px] font-bold leading-[1.05] tracking-tight text-black">
          {title}{" "}
          {highlight && (
            <span className="relative text-[#1E90FF]">
              {highlight}
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#1E90FF]/30" />
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-neutral-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
