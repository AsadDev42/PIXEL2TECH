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
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-5 sm:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoAsset.url} alt="Pixel2Tech" className="h-10 w-auto sm:h-11" />
        </Link>
        <nav className="hidden items-center justify-center gap-8 text-[15px] font-medium text-black lg:flex">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link key={n.to} to={n.to} className="relative">
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
          className="shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 sm:px-6 sm:py-3"
        >
          Book a Call
        </Link>
      </div>
    </header>
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
    <div className="marquee-viewport edge-fade-x overflow-hidden bg-neutral-100 py-8">
      <div className="marquee-track slow items-center gap-14 pr-14">
        {loop.map((w, i) => (
          <div
            key={`${w}-${i}`}
            className="flex shrink-0 items-center gap-14 text-[64px] font-black leading-none tracking-tight text-black sm:text-[96px]"
          >
            <span className="text-[#1E90FF]">✳</span>
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
  const svc = ["Branding", "Web Design", "UI UX", "Social Media", "AI Solutions"];
  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.858 0 2.42-.516 2.75-1.404.13-.343.187-.744.187-1.117 0-.286-1.877-1.135-2.15-1.246Zm-2.895 7.208a10.086 10.086 0 0 1-5.13-1.404l-3.583.945.96-3.522A10.028 10.028 0 0 1 6.145 14.4 10.079 10.079 0 0 1 16.2 4.348a10.079 10.079 0 0 1 10.055 10.052 10.079 10.079 0 0 1-10.041 10.013Zm0-22.146A12.11 12.11 0 0 0 4.098 14.4c0 2.147.573 4.194 1.65 6.055L3.75 27.75l7.457-1.949a12.121 12.121 0 0 0 5.784 1.476h.014c6.694 0 12.176-5.474 12.176-12.166A12.15 12.15 0 0 0 25.638 5.5a12.005 12.005 0 0 0-9.423-4.233Z"/>
      </svg>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}


import { CursorFollower } from "./cursor-follower";
import { PageTransition, PageLoader, FadeIn } from "./motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen bg-white text-black">
      <AnimatePresence>{loading && <PageLoader key="loader" />}</AnimatePresence>
      <SiteNav />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>{children}</PageTransition>
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
    <section className="bg-white pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
        <FadeIn>
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-[52px]">
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
        </FadeIn>
      </div>
    </section>
  );
}
