import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { VideoTestimonials } from "@/components/video-testimonials";
import { LoopSlider } from "@/components/loop-slider";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { posts as blogPosts, type BlogPost } from "@/lib/blog-posts";


import { Plus, TrendingUp, Star, Mail, Phone, Loader2, Palette, Globe, LineChart, Megaphone, Clapperboard, Bot, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import officeStudioAsset from "@/assets/office-studio-2.webp.asset.json";
import heroDeskVideoAsset from "@/assets/hero-desk.mp4.asset.json";
import heroArmpearlAsset from "@/assets/hero-armpearl.webp.asset.json";
import heroRavokafeAsset from "@/assets/hero-ravokafe.png.asset.json";
import heroSpiralAsset from "@/assets/hero-spiral.mp4.asset.json";
import workAutomationVideo from "@/assets/work-automation.mp4.asset.json";
import heroStickynotesAsset from "@/assets/hero-stickynotes.mp4.asset.json";
import heroCoffeemockAsset from "@/assets/hero-coffeemock.png.asset.json";
import heroMidCozyAsset from "@/assets/hero-midcozy.mp4.asset.json";
import heroLovebitesAsset from "@/assets/hero-lovebites.webp.asset.json";
import heroLimaAsset from "@/assets/hero-lima.jpg.asset.json";
import heroLaptopCodeAsset from "@/assets/hero-laptopcode.mp4.asset.json";
import locksAndCoLogo from "@/assets/locks-and-co.webp.asset.json";
import biscuitsLogo from "@/assets/industry-biscuits.webp.asset.json";
import achhsoftLogo from "@/assets/industry-achhsoft.webp.asset.json";
import mixmastersLogo from "@/assets/industry-mixmasters.webp.asset.json";
import gallopLogo from "@/assets/industry-gallop.webp.asset.json";
import escadaLogo from "@/assets/industry-escada.webp.asset.json";
import caveLogo from "@/assets/industry-cave.webp.asset.json";
import founderPortrait from "@/assets/founder-portrait.png.asset.json";
import teamUsama from "@/assets/team-usama.webp.asset.json";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import teamSaad from "@/assets/team-saad.webp.asset.json";
import teamGul from "@/assets/team-gul.webp.asset.json";
import teamAhsan from "@/assets/team-ahsan.webp.asset.json";
import teamNoman from "@/assets/team-noman.webp.asset.json";

const officeStudio = officeStudioAsset.url;

const homeContactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[0-9+\-\s().#*]{6,25}$/, "Only numbers and phone characters (#, -, *, etc) are accepted."),
  message: z.string().trim().min(1, "Required").max(5000),
});
type HomeFormState = z.infer<typeof homeContactSchema>;
const homeInitial: HomeFormState = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function HomeContact() {
  const submit = useServerFn(submitContactForm);
  const [form, setForm] = useState<HomeFormState>(homeInitial);
  const [website, setWebsite] = useState("");
  const [loadedAt] = useState<number>(() => Date.now());
  const [errors, setErrors] = useState<Partial<Record<keyof HomeFormState, string>>>({});
  const [loading, setLoading] = useState(false);


  const set = (k: keyof HomeFormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = homeContactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof HomeFormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof HomeFormState;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setLoading(true);
    try {
      const d = parsed.data;
      await submit({
        data: {
          name: `${d.firstName} ${d.lastName}`.trim(),
          email: d.email,
          subject: `New inquiry from ${d.firstName} ${d.lastName} (${d.phone})`,
          message: d.message,
          website,
          ts: loadedAt,
        },
      });

      toast.success("Message sent!", { description: "Thanks — we'll get back to you within one business day." });
      setForm(homeInitial);
      setErrors({});
    } catch (err) {
      toast.error("Couldn't send message", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "min-h-11 w-full border-0 border-b border-neutral-400 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground";

  return (
    <>
      <section aria-labelledby="home-contact-title" className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <div className="rounded-2xl bg-muted p-6 dark:bg-neutral-900 sm:rounded-3xl sm:p-10 md:p-14">
            <h2 id="home-contact-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Ready to <span className="text-[#2b7fff]">Grow Your Brand?</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Tell us about your project and goals. Let's build something great together.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-x-8 gap-y-5 sm:mt-10 sm:grid-cols-2">
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="hp-home-website">Website</label>
                <input id="hp-home-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input id="firstName" name="firstName" autoComplete="given-name" placeholder="First Name" value={form.firstName} onChange={set("firstName")} aria-invalid={!!errors.firstName} className={inputCls} />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input id="lastName" name="lastName" autoComplete="family-name" placeholder="Last Name" value={form.lastName} onChange={set("lastName")} aria-invalid={!!errors.lastName} className={inputCls} />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="Email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} className={inputCls} />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} aria-invalid={!!errors.phone} className={inputCls} />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={3} placeholder="Message" value={form.message} onChange={set("message")} aria-invalid={!!errors.message} className={inputCls} />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={loading} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                  {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {loading ? "Sending…" : "Get in Touch"}
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </section>

      <section aria-labelledby="home-cta-title" className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0d1f] p-8 text-white shadow-[0_30px_80px_-30px_rgba(59,130,246,0.45)] sm:p-12 lg:p-14">
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Let's Talk
                </span>
                <h2 id="home-cta-title" className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Contact us today and let's discuss how we can help grow your brand.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:w-auto lg:justify-end">
                  <a
                    href="mailto:sales@pixel2tech.com"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10 sm:justify-start"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    sales@pixel2tech.com
                  </a>
                  <a
                    href="tel:+923177475233"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10 sm:justify-start"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    +92 317 7475233
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground shadow-lg shadow-black/30 ring-1 ring-border transition hover:bg-primary hover:text-primary-foreground hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-auto"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </>
  );
}



const homeFaqs = [
  { q: "What services does Pixel2Tech offer?", a: "Branding and design, website development, UI/UX, social media and content, motion and video, plus custom software and automation — all handled in-house by one team." },
  { q: "How long does a typical project take?", a: "Branding takes 2–3 weeks, websites 3–6 weeks, and custom software depends on scope. We share a clear timeline before starting." },
  { q: "How much does a project cost?", a: "It depends on scope, but most projects start from a fixed package we agree on upfront. Book a free strategy call and we'll give you a clear quote." },
  { q: "Do you work with international clients?", a: "Yes. We're based in Lahore, Pakistan and work with clients across the US, UK, Gulf, and Europe — communication over email, WhatsApp, and Google Meet." },
  { q: "Can you handle both design and development?", a: "Yes. Design, development, content, and deployment all happen in-house, so there are no hand-offs between vendors." },
  { q: "What happens after I book a strategy call?", a: "We discuss your goals on a 30-minute call, send a proposal with scope and timeline, and start once you approve." },
];

function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32" aria-labelledby="home-faq-title">
      <FadeIn>
        <div className="text-center">
          <h2 id="home-faq-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Everything you need to know before starting a project with us.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="mt-8 sm:mt-10">
          <div className="mx-auto max-w-3xl">
            {homeFaqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-foreground sm:text-lg"
                  >
                    {item.q}
                    <ChevronDown
                      aria-hidden="true"
                      className={`ml-4 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

const OG_IMAGE = "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const LOGO_URL = "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Pixel2Tech | One Agency Instead of Ten Freelancers" },
      {
        name: "description",
        content:
          "Branding, websites, social media, and custom software — everything your brand needs to grow, built by one team in Lahore. Worldwide clients.",
      },
      { property: "og:title", content: "Pixel2Tech | One Agency Instead of Ten Freelancers" },
      {
        property: "og:description",
        content:
          "Branding, websites, social media, and custom software — everything your brand needs to grow, built by one team in Lahore. Worldwide clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pixel2Tech | One Agency Instead of Ten Freelancers" },
      {
        name: "twitter:description",
        content:
          "Branding, websites, social media, and custom software — everything your brand needs to grow, built by one team in Lahore. Worldwide clients.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://pixel2tech.com/" },
      {
        rel: "preload",
        as: "image",
        href: founderPortrait.url,
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Pixel2Tech",
          description:
            "Pixel2Tech is a full-service creative agency in Lahore, Pakistan, offering branding, web design, UI/UX, social media, video, and custom software development for clients worldwide.",
          image: OG_IMAGE,
          logo: LOGO_URL,
          url: "https://pixel2tech.com/",
          email: "hello@pixel2tech.com",
          telephone: "+92-317-7475212",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
          areaServed: ["US", "GB", "AE", "SA", "EU", "PK"],
          priceRange: "$$",
          sameAs: [
            "https://www.facebook.com/pixel2tech",
            "https://www.instagram.com/pixel2tech",
            "https://x.com/pixel2tech",
            "https://www.linkedin.com/company/pixel2tech",
          ],
        }),
      },
    ],
  }),
});

const heroCols: string[][] = [
  [
    heroSpiralAsset.url,
    heroStickynotesAsset.url,
    heroCoffeemockAsset.url,
  ],
  [
    heroRavokafeAsset.url,
    heroLovebitesAsset.url,
    heroDeskVideoAsset.url,
  ],
  [
    heroLimaAsset.url,
    heroLaptopCodeAsset.url,
    heroArmpearlAsset.url,
  ],
];


function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-12 md:px-10 md:py-28">
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
            One Creative Agency.{" "}
            <span className="text-[#1E90FF]">Not Ten Freelancers.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-6">
            A full-service creative agency handling everything your brand needs — design, development, social media, and software — so you can focus on growing the business.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex min-h-11 items-center rounded-full border border-foreground bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[420px] grid-cols-3 gap-2 self-center sm:max-w-[480px] sm:gap-3 md:max-w-[520px] lg:max-w-[560px]">
          {heroCols.map((col, ci) => (
            <div key={ci} className="h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px]">
              <LoopSlider
                axis="y"
                className="h-full"
                direction={ci % 2 === 0 ? "up" : "down"}
                speed={30}
                gapClassName="gap-2 sm:gap-3"
                items={col}
                keyFor={(_src, i) => `${ci}-${i}`}
                renderItem={(src, i) => (
                  <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-muted sm:rounded-2xl">
                    {src.endsWith(".mp4") ? (
                      <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="pointer-events-none h-full w-full select-none object-cover"
                      />
                    ) : (
                      <img
                        decoding="async"
                        src={src}
                        alt=""
                        draggable={false}
                        loading={ci === 0 && i === 0 ? "eager" : "lazy"}
                        fetchPriority={ci === 0 && i === 0 ? "high" : "auto"}
                        className="pointer-events-none h-full w-full select-none object-cover"
                      />
                    )}
                  </div>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}



function Brands() {
  const brands = [
    { slug: "google", name: "Google" },
    { slug: "microsoft", name: "Microsoft" },
    { slug: "stripe", name: "Stripe" },
    { slug: "locks-and-co", name: "Locks & Co", src: locksAndCoLogo.url },
    { slug: "notion", name: "Notion" },
    { slug: "figma", name: "Figma" },
    { slug: "netflix", name: "Netflix" },
    { slug: "meta", name: "Meta" },
    { slug: "tesla", name: "Tesla" },
    { slug: "apple", name: "Apple" },
    { slug: "github", name: "GitHub" },
  ];
  // Duplicate list so translateX(-50%) creates a seamless right→left loop
  const loop = [...brands, ...brands];
  return (
    <section className="bg-background pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Industries We Work With
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] text-muted-foreground sm:text-[15px]">
          From startups to established businesses — ecommerce, real estate, health, food, and professional services.
        </p>
      </div>

      <div className="marquee-viewport edge-fade-x mt-8 overflow-hidden sm:mt-10">
        <div className="marquee-track slow items-center gap-12 pr-12 sm:gap-16 sm:pr-16" role="list" aria-label="Brands that trust Pixel2Tech">
          {loop.map((b, i) => {
            const isDup = i >= brands.length;
            return (
              <div
                key={`${b.slug}-${i}`}
                className="flex h-10 w-28 shrink-0 items-center justify-center sm:h-12 sm:w-32"
                role={isDup ? "presentation" : "listitem"}
                aria-hidden={isDup || undefined}
              >
                <img
                  decoding="async"
                  src={(b as { src?: string }).src ?? `https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/${b.slug}.svg`}
                  alt={isDup ? "" : `${b.name} logo`}
                  title={b.name}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (!el.dataset.fallback) {
                      el.dataset.fallback = "1";
                      el.src = `https://www.vectorlogo.zone/logos/${b.slug}/${b.slug}-ar21.svg`;
                    } else if (el.dataset.fallback === "1") {
                      el.dataset.fallback = "2";
                      el.src = `https://logo.clearbit.com/${b.slug}.com`;
                    } else {
                      el.style.display = "none";
                    }
                  }}
                  className="max-h-6 max-w-full object-contain opacity-80 transition hover:opacity-100 sm:max-h-7"
                />
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-black dark:bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-10 md:py-24 lg:py-32 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-white dark:text-foreground sm:text-4xl lg:text-[54px]">
            A Full-Service Creative Agency Built Around Your Growth
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-200 dark:text-foreground/90 sm:mt-6 sm:text-[15px]">
            We're a creative agency that takes brands from idea to launch and beyond. Everything under one roof, one team, one standard — no chasing five different freelancers.
          </p>
          <div className="mt-6 text-sm text-neutral-300 dark:text-foreground/80 sm:mt-8">— Pixel2Tech Team</div>

        </div>
        <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]">
          <motion.div
            initial={{ y: 0, rotate: -2 }}
            animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] right-0 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-xl shadow-black/20 sm:top-[20%] sm:-right-4 sm:px-5 sm:py-3 lg:-right-8"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
            </div>
            <div className="min-w-0 text-left">
              <div className="truncate text-xs font-bold text-card-foreground sm:text-sm">
                Trusted Creative Partner
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-card-foreground">4.9</span> Client Rating
              </div>
            </div>
          </motion.div>
          <div className="mt-10 aspect-square w-full overflow-hidden rounded-full">
            <img loading="eager" decoding="async" fetchPriority="high"
              src={founderPortrait.url}
              alt="Pixel2Tech founder portrait"
              className="h-full w-full object-contain"
            />
          </div>

          <motion.div
            initial={{ y: 0, rotate: 2 }}
            animate={{ y: [0, 8, 0], rotate: [2, -1, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute bottom-[18%] left-0 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-xl shadow-black/20 sm:bottom-[20%] sm:-left-4 sm:px-5 sm:py-3 lg:-left-8"
          >
            <div className="min-w-0 text-left">
              <div className="truncate text-xs font-bold text-card-foreground sm:text-sm">
                15+ Happy Clients
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-card-foreground">4.9</span> Client Rating
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


const services = [
  { title: "Branding & Design", desc: "Logos, brand kits, colors, and guidelines that make you look established from day one.", Icon: Palette },
  { title: "Website Development", desc: "Fast, mobile-friendly websites built to load quickly and turn visitors into paying customers.", Icon: Globe },
  { title: "UI/UX Design", desc: "Clean, simple interfaces that make your product easy to use and easy to buy from.", Icon: LineChart },
  { title: "Social Media & Content", desc: "Posts, reels, and content plans that build authority and bring in consistent leads.", Icon: Megaphone },
  { title: "Motion & Video", desc: "Reels, ads, and brand videos that stop the scroll and get watched.", Icon: Clapperboard },
  { title: "Software & Automation", desc: "Custom web apps, dashboards, CRMs, and AI-assisted automation built around how your business actually works.", Icon: Bot },
];

function Services() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-6 dark:border-white/10 dark:bg-white/[0.03] md:p-12 lg:p-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1E90FF]/10 blur-3xl md:h-64 md:w-64"
            />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground dark:border-white/10 dark:bg-white/[0.04] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" aria-hidden="true" />
                What We Do
              </span>

              <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
                Everything You Need to{" "}
                <span className="text-[#1E90FF]">Build, Grow and Scale</span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                From creative design and custom development to AI-powered automation and digital
                solutions, we help businesses streamline operations, improve customer experiences,
                and accelerate growth.
              </p>

              <div className="mt-8 flex w-full flex-col items-center gap-6 border-t border-border pt-8 dark:border-white/10 md:flex-row md:justify-between md:gap-8 md:text-left">
                <p className="text-base font-bold leading-snug tracking-tight text-foreground sm:text-lg">
                  One Team. Multiple Expertise. Real Business Impact.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90 sm:px-8 sm:py-4"
                >
                  Start Your Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mb-10 mt-10 md:mb-12 md:mt-12" aria-hidden="true" />




        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="group h-full rounded-2xl border border-border bg-background p-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.05] md:p-6 lg:p-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E90FF]/10 text-[#1E90FF] transition group-hover:scale-110 sm:h-16 sm:w-16">
                  <s.Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


const work = [
  { title: "Web design and development", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "UI UX designing", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Logo and branding", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Concept creation", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "WordPress & Shopify", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Custom Platforms & Apps", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Automation & CRM", img: workAutomationVideo.url, video: true },
  { title: "AI Solutions", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "SEO & Search Growth", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Social Media & Email", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Video Editing & Ads", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&fm=webp&q=70" },
];

function Work() {
  return (
    <section className="bg-background pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            Work That Helps{" "}
            <span className="text-[#1E90FF]">Brands Grow</span>
          </h2>
          <p className="mt-2 text-[14px] text-muted-foreground sm:text-[15px]">
            One team. All your creative and digital needs. Drag to explore.
          </p>
        </FadeIn>
      </div>
      <LoopSlider
        items={work}
        keyFor={(w, i) => `${w.title}-${i}`}
        direction="ltr"
        speed={40}
        gapClassName="gap-4 sm:gap-5"
        className="mt-8 sm:mt-10"
        ariaLabel="Our services"
        renderItem={(w, i) => (
          <div
            data-cursor="expand"
            className="group relative aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-[280px] sm:rounded-3xl lg:w-[320px]"
          >
            {("video" in w && (w as { video?: boolean }).video) ? (
              <video
                src={w.img}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="pointer-events-none h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
              />
            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={w.img}
                alt={i < work.length ? w.title : ""}
                draggable={false}
                className="pointer-events-none h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
              />
            )}
            <div className="pointer-events-none absolute inset-x-0 top-0 p-4 text-center text-base font-semibold text-white drop-shadow sm:p-5 sm:text-lg">
              {w.title}
            </div>
          </div>
        )}
      />
    </section>
  );
}



const team = [
  { name: "Usama Farooq", role: "CEO & Founder", img: teamUsama.url },
  { name: "Asad Farooq", role: "Co Founder & Creative Director", img: teamAsad.url },
  { name: "Saad", role: "Creative Video Editor", img: teamSaad.url },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: teamGul.url },
  { name: "Ahsan Mushtaq", role: "Website Developer", img: teamAhsan.url },
  { name: "Noman Ahmed", role: "Video Editor", img: teamNoman.url },
];

function Team() {
  return (
    <section aria-labelledby="team-section-title" className="bg-muted py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                OUR CREATIVE TEAM
              </div>
              <h2 id="team-section-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
                Meet the people behind the work
              </h2>
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                A small, senior team of designers, developers, and strategists building work that creates measurable impact.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
            >
              About the team
              <Plus className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <Stagger className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:mt-14 md:gap-6 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <article
                aria-labelledby={`team-${m.name.replace(/\s+/g, "-")}-name`}
                aria-describedby={`team-${m.name.replace(/\s+/g, "-")}-role`}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={m.img}
                    alt={`Portrait of ${m.name}, ${m.role} at Pixel2Tech`}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 id={`team-${m.name.replace(/\s+/g, "-")}-name`} className="text-sm font-bold tracking-tight text-foreground sm:text-base">{m.name}</h3>
                  <p id={`team-${m.name.replace(/\s+/g, "-")}-role`} className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}


function Insights() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:flex-wrap sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">Latest Insights</h2>
            <p className="mt-2 text-[14px] text-muted-foreground sm:text-[15px]">Tips, trends, and thought leadership from the Pixel2Tech team.</p>
          </div>
          <Link to="/blog" className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-foreground px-4 py-3 text-xs font-semibold text-background hover:opacity-90 sm:px-6 sm:py-3.5 sm:text-sm">
            Read Articles
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {latest.map((p: BlogPost) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-3xl bg-muted p-3 transition hover:bg-neutral-200/60 dark:hover:bg-muted/70 sm:p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-background">
                <img loading="lazy" decoding="async" src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:mt-5 sm:gap-4">
                <span>{p.tag}</span><span>{p.date}</span>
              </div>
              <div className="mt-3 pb-3 text-base font-semibold leading-snug text-foreground sm:pb-4 sm:text-lg">{p.title}</div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}


function Studio() {
  return (
    <section className="bg-muted/60 py-16 md:py-24 lg:py-32 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <FadeIn>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm dark:border-white/10">
                <img
                  src={officeStudio}
                  alt="Inside the Pixel2Tech studio — team working at their desks"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 hidden rounded-2xl border border-border/60 bg-background px-5 py-4 shadow-md dark:border-white/10 sm:block">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Studio</div>
                <div className="mt-1 text-sm font-semibold text-foreground">Lahore, Pakistan</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Inside the Studio</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
                Where the work <span className="text-[hsl(206_100%_50%)]">actually happens</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Our studio is where designers, developers, and strategists sit shoulder-to-shoulder — sketching brands, shipping code, and reviewing campaigns in real time. No hand-offs, no silos, just one team building for clients around the world.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { k: "6", v: "In-house experts" },
                  { k: "50+", v: "Projects shipped" },
                  { k: "3", v: "Years growing" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-border/60 bg-background p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5">
                    <dt className="text-2xl font-bold text-foreground sm:text-3xl">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground sm:text-[13px]">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90">
                  About the studio
                </Link>
                <Link to="/contact" className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted dark:border-white/15 dark:hover:bg-white/[0.05]">
                  Visit us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Brands />
      <PartnerBand />
      <Services />
      <Work />
      <VideoTestimonials />
      <Team />
      <Studio />
      <Insights />
      <HomeFaq />
      <HomeContact />
    </PageShell>

  );
}
