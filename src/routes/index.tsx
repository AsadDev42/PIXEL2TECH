import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { VideoTestimonials } from "@/components/video-testimonials";
import { LoopSlider } from "@/components/loop-slider";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

import { Plus, TrendingUp, Star, Mail, Phone, Loader2, Palette, Globe, LineChart, Megaphone, Clapperboard, Bot, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import officeStudio from "@/assets/office-studio.jpg";

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
      <section aria-labelledby="home-contact-title" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <FadeIn>
          <div className="rounded-2xl bg-muted p-6 dark:bg-neutral-900 sm:rounded-3xl sm:p-10 md:p-14">
            <h2 id="home-contact-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Ready to <span className="text-[#2b7fff]">Grow Your Brand?</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Tell us about your project and goals. Let's build something great together.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-x-8 gap-y-5 sm:mt-10 sm:grid-cols-2">
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

      <section aria-labelledby="home-cta-title" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
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
                <h2 id="home-cta-title" className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                  Ready to Get <span className="text-white">Started?</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Contact us today and let's discuss how we can help grow your brand.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <a
                    href="mailto:sales@pixel2tech.com"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    sales@pixel2tech.com
                  </a>
                  <a
                    href="tel:+923177475233"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    +92 317 7475233
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0d1f] shadow-lg shadow-black/20 transition hover:bg-primary hover:text-white sm:self-auto lg:self-end"
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



export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Pixel2Tech — Design. Develop. Grow." },
      {
        name: "description",
        content:
          "AI-powered creative agency. Branding, web design, marketing, motion and AI solutions that help businesses grow.",
      },
      { property: "og:title", content: "Pixel2Tech — Design. Develop. Grow." },
      {
        property: "og:description",
        content:
          "AI-powered creative agency for branding, web design, marketing and automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const heroCols: string[][] = [
  [
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&fm=webp&q=70",
  ],
  [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&fm=webp&q=70",
  ],
  [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&fm=webp&q=70",
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&auto=format&fit=crop&fm=webp&q=70",
  ],
];

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
            Growing Businesses Don't Need More Tools. They Need{" "}
            <span className="text-[#1E90FF]">AI-Powered Systems</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-6">
            We help businesses automate workflows, build scalable software, and
            create seamless digital experiences that improve efficiency,
            customer experience, and growth.
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
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {heroCols.map((col, ci) => (
            <div key={ci} className="h-[328px] sm:h-[412px]">
              <LoopSlider
                axis="y"
                className="h-full"
                direction={ci % 2 === 0 ? "up" : "down"}
                speed={30}
                gapClassName="gap-2 sm:gap-3"
                items={col}
                keyFor={(_src, i) => `${ci}-${i}`}
                renderItem={(src) => (
                  <div className="h-[160px] w-full overflow-hidden rounded-xl bg-muted sm:h-[200px] sm:rounded-2xl">
                    <img
                      decoding="async"
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
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
    { slug: "shopify", name: "Shopify" },
    { slug: "stripe", name: "Stripe" },
    { slug: "spotify", name: "Spotify" },
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
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Brands That Trust Pixel2Tech
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] text-muted-foreground sm:text-[15px]">
          We work with startups, businesses, and founders who want to grow
          faster. From Pakistan to the world.
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
                  src={`https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/${b.slug}.svg`}
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
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-white dark:text-foreground sm:text-4xl lg:text-[54px]">
            Technology Partners Focused on Business Growth
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-400 dark:text-muted-foreground sm:mt-6 sm:text-[15px]">
            We help businesses grow with smart digital solutions. Our mission is
            to turn ideas into impactful brands and technology that drive real
            results.
          </p>
          <div className="mt-6 text-sm text-muted-foreground sm:mt-8">— Pixel2Tech Team</div>
        </div>
        <div className="relative mx-auto w-full max-w-[360px]">
          <motion.div
            initial={{ y: 0, rotate: -2 }}
            animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 left-0 z-10 flex items-center gap-3 rounded-2xl bg-background px-4 py-2.5 shadow-lg sm:px-5 sm:py-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground">
              <TrendingUp className="h-4 w-4 text-[#1E90FF]" aria-hidden="true" />
            </div>
            <div className="min-w-0 text-left">
              <div className="truncate text-xs font-bold text-foreground sm:text-sm">
                Trusted Technology Partner
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-foreground">4.9</span> (1520 Reviews)
              </div>
            </div>
          </motion.div>
          <div className="mt-10 aspect-square w-full overflow-hidden rounded-full bg-[#1E90FF]">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&auto=format&fit=crop&fm=webp&q=70"
              alt="Pixel2Tech founder portrait"
              className="h-full w-full object-cover mix-blend-luminosity"
            />
          </div>
          <motion.div
            initial={{ y: 0, rotate: 2 }}
            animate={{ y: [0, 8, 0], rotate: [2, -1, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-4 right-0 z-10 flex items-center gap-3 rounded-2xl bg-background px-4 py-2.5 shadow-lg sm:px-5 sm:py-3"
          >
            <div className="min-w-0 text-left">
              <div className="truncate text-xs font-bold text-foreground sm:text-sm">
                100% Business Growth
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-foreground">4.9</span> (1520 Reviews)
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


const services = [
  { title: "Branding & Design", desc: "Logo design, brand style, colors, guidelines. We help you look professional and stand out.", Icon: Palette },
  { title: "Website Development", desc: "Modern, fast, and mobile-friendly websites that convert visitors into customers.", Icon: Globe },
  { title: "Digital Marketing", desc: "Clean and simple designs that improve user experience and increase sales.", Icon: LineChart },
  { title: "Social Media & Content", desc: "Creative posts, content ideas, and strategies that build authority and attract leads.", Icon: Megaphone },
  { title: "Motion & Video", desc: "Reels, ads, and brand videos that grab attention.", Icon: Clapperboard },
  { title: "AI Solutions", desc: "Smart tools and automation to save time and improve business performance.", Icon: Bot },
];

function Services() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Everything You Need to{" "}
              <span className="text-[#1E90FF]">Build &amp; Grow</span>
            </h2>
            <p className="mt-4 text-[14px] text-muted-foreground sm:text-[15px]">
              One team. All your creative and digital needs.
            </p>
          </div>
        </FadeIn>
        <Stagger className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.05] sm:p-8">
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
  { title: "Automation & CRM", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "AI Solutions", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "SEO & Search Growth", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Social Media & Email", img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Video Editing & Ads", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&fm=webp&q=70" },
];

function Work() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
          <div className="group relative aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-[280px] sm:rounded-3xl lg:w-[320px]">
            <img
              loading="lazy"
              decoding="async"
              src={w.img}
              alt={i < work.length ? w.title : ""}
              draggable={false}
              className="pointer-events-none h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
            />
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
  { name: "Usama Farooq", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Asad Farooq", role: "Co Founder & Creative Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Saad", role: "Creative Video Editor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Ahsan Mushtaq", role: "Website Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Noman Ahmed", role: "Video Editor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&fm=webp&q=70" },
];

function Team() {
  return (
    <section aria-labelledby="team-section-title" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
                A small, senior team of designers, engineers, and strategists building technology that creates measurable impact.
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

        <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <article
                aria-labelledby={`team-${m.name.replace(/\s+/g, "-")}-name`}
                aria-describedby={`team-${m.name.replace(/\s+/g, "-")}-role`}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={m.img}
                    alt={`Portrait of ${m.name}, ${m.role} at Pixel2Tech`}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 id={`team-${m.name.replace(/\s+/g, "-")}-name`} className="text-base font-bold tracking-tight text-foreground sm:text-lg">{m.name}</h3>
                  <p id={`team-${m.name.replace(/\s+/g, "-")}-role`} className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


const posts = [
  { tag: "Creative", date: "June 22, 2026", title: "How AI is Changing Modern Branding", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Creative", date: "April 5, 2026", title: "Why Every Business Needs a Modern Website in 2026", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Creative", date: "April 5, 2026", title: "The Power of Good Branding for Business Growth", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&fm=webp&q=70" },
];

function Insights() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
          {posts.map((p) => (
            <Link key={p.title} to="/blog" className="block rounded-3xl bg-muted p-3 transition hover:bg-neutral-200/60 dark:hover:bg-muted/70 sm:p-4">
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
    <section className="bg-muted/60 py-16 dark:bg-white/[0.02] sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <FadeIn>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm dark:border-white/10">
                <img
                  src={officeStudio}
                  alt="Inside the Pixel2Tech studio — team working at their desks"
                  loading="lazy"
                  decoding="async"
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
                Our studio is where designers, developers, and strategists sit shoulder-to-shoulder — sketching brands, shipping code, and reviewing campaigns in real time. No hand-offs, no silos, just a team building for clients around the world.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { k: "15+", v: "In-house experts" },
                  { k: "120+", v: "Projects shipped" },
                  { k: "6", v: "Years growing" },
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
      <HomeContact />
    </PageShell>

  );
}
