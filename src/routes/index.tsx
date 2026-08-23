import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { LinkedInBadge, getLinkedInUrl } from "@/components/linkedin-badge";
import { LoopSlider } from "@/components/loop-slider";
import { AutoVideo } from "@/components/auto-video";
import { LazySection } from "@/components/lazy-section";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

import { getSortedPosts, type BlogPost } from "@/lib/blog-posts";


import { Plus, TrendingUp, Star, Mail, Phone, Loader2, Palette, Globe, LineChart, Megaphone, Clapperboard, Bot, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { lazyWithRetry } from "@/lib/lazy-with-retry";

// Heavy, below-the-fold: its chunk is fetched only when the user scrolls near it.
const VideoTestimonials = lazyWithRetry(() =>
  import("@/components/video-testimonials").then((m) => ({ default: m.VideoTestimonials })),
);

import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import { useFormValidation } from "@/lib/use-form-validation";

import officeStudioAsset from "@/assets/opt-office-studio-2-800.webp.asset.json";
import { heroColumns, heroLcpImage, heroMobileTiles, workItems } from "@/lib/home-media";
import indVahub from "@/assets/ind-vahub.png.asset.json";
import indSwishtag from "@/assets/ind-swishtag.webp.asset.json";
import indBiscuits from "@/assets/ind-biscuits.webp.asset.json";
import indCave from "@/assets/ind-cave.webp.asset.json";
import indEscada from "@/assets/ind-escada.webp.asset.json";
import indGallop from "@/assets/ind-gallop.webp.asset.json";
import indMixmasters from "@/assets/ind-mixmasters.webp.asset.json";
import indAchhsoft from "@/assets/ind-achhsoft.webp.asset.json";
import indLocks from "@/assets/ind-locks.webp.asset.json";
import indHolloway from "@/assets/ind-holloway.webp.asset.json";
import indCoinmarketfees from "@/assets/ind-coinmarketfees.webp.asset.json";
import indMadluvv from "@/assets/ind-madluvv.png.asset.json";
import indMadluvvWhite from "@/assets/ind-madluvv-white.png.asset.json";
import founderPortrait from "@/assets/opt-founder-portrait-540.webp.asset.json";
import founderPortrait1080 from "@/assets/opt-founder-portrait-1080.webp.asset.json";

import teamUsama from "@/assets/team-usama.webp.asset.json";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import teamSaad from "@/assets/team-saad.webp.asset.json";
import teamGul from "@/assets/team-gul.webp.asset.json";
import teamAhsan from "@/assets/team-ahsan.webp.asset.json";
import teamNoman from "@/assets/opt-team-noman-800.webp.asset.json";
import teamRashail from "@/assets/team-rashail.webp.asset.json";


const officeStudio = officeStudioAsset.url;

const homeContactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[0-9+\-\s().#*]{6,25}$/, "Only numbers and phone characters (#, -, *, etc) are accepted."),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(5000),
});
type HomeFormState = z.infer<typeof homeContactSchema>;
const homeInitial: HomeFormState = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function HomeContact() {
  const submit = useServerFn(submitContactForm);
  const [website, setWebsite] = useState("");
  const [loadedAt] = useState<number>(() => Date.now());
  const { values: form, errors, submitting: loading, setField, handleBlur, handleSubmit, reset } =
    useFormValidation(homeContactSchema, homeInitial);

  const onSubmit = handleSubmit(async (d) => {
    try {
      await submit({
        data: {
          name: `${d.firstName} ${d.lastName}`.trim(),
          email: d.email,
          subject: `New inquiry from ${d.firstName} ${d.lastName} (${d.phone})`,
          message: d.message,
          website,
          elapsedMs: Date.now() - loadedAt,
        },
      });

      toast.success("Message sent!", { description: "Thanks — we'll get back to you within one business day." });
      reset();
    } catch (err) {
      toast.error("Couldn't send message", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
    }
  });

  const inputCls = (invalid?: string) =>
    `min-h-11 w-full border-0 border-b bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors disabled:opacity-60 ${
      invalid
        ? "border-red-600 focus:border-red-600 dark:border-red-400 dark:focus:border-red-400"
        : "border-neutral-400 focus:border-foreground dark:border-white/25 dark:focus:border-white"
    }`;


  return (
    <>
      <section aria-labelledby="home-contact-title" className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <div className="rounded-2xl border border-transparent bg-muted p-6 dark:border-white/10 dark:bg-[#0a0d1f] sm:rounded-3xl sm:p-10 md:p-14">
            <h2 id="home-contact-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Ready to <span className="text-[#2b7fff]">Grow Your Brand?</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base whitespace-pre-wrap">
              {"'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            Perform a complete content quality audit across the entire website.\n\nI want you to check and fix ALL of the following:\n\n1. Grammar mistakes\n\n2. Spelling mistakes\n\n3. Punctuation mistakes\n\n4. Incorrect capitalization\n\n5. Awkward or unnatural English\n\n6. Sentence structure issues\n\n7. Incorrect or inconsistent terminology\n\n8. Duplicate or unnecessary words\n\n9. Unprofessional wording\n\n10. Broken or incomplete sentences\n\n11. Inconsistent wording between different pages\n\n12. AI-generated or robotic-sounding customer-facing copy\n\nIMPORTANT:\n\n- Check the ENTIRE website, not only the current page.\n\n- Review every public page, section, heading, subheading, paragraph, CTA, button, form, FAQ, blog, navigation, footer, popup, modal, and dynamic content.\n\n- Fix grammar and wording while preserving the original meaning and intent.\n\n- Use simple, natural, professional English.\n\n- Make the website sound human and polished, not AI-generated.\n\n- Keep the brand voice consistent across the entire website.\n\nALSO REMOVE ALL EXPOSED INTERNAL AI CONTENT:\n\n- Remove AI prompts.\n\n- Remove developer instructions.\n\n- Remove system-style instructions.\n\n- Remove internal implementation notes.\n\n- Remove AI generation commands.\n\n- Remove text such as \"Do not make any visual modifications...\" or similar prompt/instruction text.\n\n- Search database/CMS content, components, props, JSON data, and dynamic content for these issues.\n\n- Do NOT simply hide unwanted text with CSS. Remove it from its actual source.\n\nIMPORTANT FOR CONTENT EDITING:\n\n- Do NOT change the meaning of legitimate marketing content.\n\n- Do NOT invent claims, statistics, clients, awards, results, or services.\n\n- Do NOT add fake information.\n\n- Do NOT remove genuine customer-facing content.\n\n- Do NOT redesign the website.\n\n- Do NOT change the existing layout, colors, typography, spacing, animations, routes, or functionality.\n\n- Do NOT make unnecessary UI changes.\n\nFor every page, make sure:\n\n- Headings are grammatically correct.\n\n- Paragraphs read naturally.\n\n- CTAs are clear and professional.\n\n- Forms have correct labels and helpful text.\n\n- Buttons use consistent wording.\n\n- FAQs are grammatically correct.\n\n- Navigation labels are consistent.\n\n- Blog content is clean and readable.\n\n- No internal AI/developer instructions are visible.\n\nAfter completing the audit:\n\n1. Scan the entire website again.\n\n2. Check all public routes.\n\n3. Check dynamic/CMS/database content.\n\n4. Check for remaining grammar and spelling errors.\n\n5. Check for remaining exposed AI/internal instructions.\n\n6. Check for remaining exposed AI/internal instructions.\n\n7. Make sure all existing functionality still works.\n\nThe final website should feel like it was professionally written and reviewed by a human editor, with clean natural English and zero exposed internal AI instructions."}
            </p>



            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-x-8 gap-y-5 sm:mt-10 sm:grid-cols-2">
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="hp-home-website">Website</label>
                <input id="hp-home-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input id="firstName" name="firstName" autoComplete="given-name" enterKeyHint="next" placeholder="First Name" value={form.firstName} onChange={setField("firstName")} onBlur={handleBlur("firstName")} disabled={loading} aria-invalid={!!errors.firstName} aria-describedby="firstName-error" className={inputCls(errors.firstName)} />
                <p id="firstName-error" role="alert" aria-live="polite" className="mt-1 min-h-4 text-xs text-red-600 dark:text-red-400">{errors.firstName ?? ""}</p>
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input id="lastName" name="lastName" autoComplete="family-name" enterKeyHint="next" placeholder="Last Name" value={form.lastName} onChange={setField("lastName")} onBlur={handleBlur("lastName")} disabled={loading} aria-invalid={!!errors.lastName} aria-describedby="lastName-error" className={inputCls(errors.lastName)} />
                <p id="lastName-error" role="alert" aria-live="polite" className="mt-1 min-h-4 text-xs text-red-600 dark:text-red-400">{errors.lastName ?? ""}</p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" inputMode="email" autoComplete="email" enterKeyHint="next" placeholder="Email" value={form.email} onChange={setField("email")} onBlur={handleBlur("email")} disabled={loading} aria-invalid={!!errors.email} aria-describedby="email-error" className={inputCls(errors.email)} />
                <p id="email-error" role="alert" aria-live="polite" className="mt-1 min-h-4 text-xs text-red-600 dark:text-red-400">{errors.email ?? ""}</p>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" enterKeyHint="next" placeholder="Phone" value={form.phone} onChange={setField("phone")} onBlur={handleBlur("phone")} disabled={loading} aria-invalid={!!errors.phone} aria-describedby="phone-error" className={inputCls(errors.phone)} />
                <p id="phone-error" role="alert" aria-live="polite" className="mt-1 min-h-4 text-xs text-red-600 dark:text-red-400">{errors.phone ?? ""}</p>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={3} enterKeyHint="send" placeholder="Message" value={form.message} onChange={setField("message")} onBlur={handleBlur("message")} disabled={loading} aria-invalid={!!errors.message} aria-describedby="message-error" className={inputCls(errors.message)} />
                <p id="message-error" role="alert" aria-live="polite" className="mt-1 min-h-4 text-xs text-red-600 dark:text-red-400">{errors.message ?? ""}</p>
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
                  className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full p2t-on-dark bg-white px-7 py-3 text-sm font-semibold text-[#0a0d1f] shadow-lg shadow-black/30 transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
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
      { title: "Pixel2Tech | AI Creative Agency for Branding & Web Design" },
      {
        name: "description",
        content:
          "Pixel2Tech is a full-service creative agency delivering branding, web design, UI/UX, social media and custom software under one roof. Book a free call.",
      },
      { property: "og:title", content: "Pixel2Tech | AI Creative Agency for Branding & Web Design" },
      {
        property: "og:description",
        content:
          "One creative agency, not ten freelancers. Branding, web design, UI/UX, social media & software — all under one roof. Book a free strategy call.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pixel2Tech | AI Creative Agency for Branding & Web Design" },
      {
        name: "twitter:description",
        content:
          "One creative agency, not ten freelancers. Branding, web design, UI/UX, social media & software — all under one roof. Book a free strategy call.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://pixel2tech.com/" },
      // Only the hero (LCP) bitmap is preloaded — everything else lazy-loads.
      {
        rel: "preload",
        as: "image",
        href: heroLcpImage.src,
        imageSrcSet: heroLcpImage.srcSet,
        imageSizes: "(max-width: 640px) 32vw, 190px",
        fetchPriority: "high",
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
          "@type": "ProfessionalService",
          name: "Pixel2Tech",
          description:
            "A full-service creative agency from Pakistan, serving clients worldwide — branding, web design, UI/UX, social media, and software.",
          image: OG_IMAGE,
          logo: LOGO_URL,
          url: "https://pixel2tech.com",
          email: "sales@pixel2tech.com",
          telephone: "+923177475233",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office 12, Main Boulevard, Gulberg III",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            postalCode: "54000",
            addressCountry: "PK",
          },
          areaServed: "Worldwide",
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "10:00",
              closes: "16:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "15",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Pixel2Tech services",
            itemListElement: [
              "Branding & Design",
              "Website Development",
              "WordPress & Shopify",
              "Custom Platforms & Apps",
              "Automation & CRM",
              "AI Solutions",
              "SEO & Search Growth",
              "Social Media & Email",
              "Video Editing & Ads",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61575635244591",
            "https://www.instagram.com/pixel_2tech/",
            "https://x.com/Pixel2tech",
            "https://www.linkedin.com/company/pixel2tech",
            "https://www.pinterest.com/pixel2tech/",
          ],
        }),
      },
    ],
  }),
});

const heroCols = heroColumns;



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
        {/* Mobile: static tiles — no video, no loop animation (fast FCP/LCP, zero CLS). */}
        <div className="mx-auto grid w-full max-w-[420px] grid-cols-3 gap-2 md:hidden">
          {heroMobileTiles.map((t, i) => (
            <div key={i} className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-muted">
              <img
                src={t.src}
                srcSet={t.srcSet}
                sizes="32vw"
                width={384}
                height={683}
                alt="Pixel2Tech branding and web design project preview"
                draggable={false}
                decoding={i === 0 ? "sync" : "async"}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                className="pointer-events-none h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop / tablet: animated looping columns (unchanged). */}
        <div className="mx-auto hidden w-full max-w-[420px] grid-cols-3 gap-2 self-center sm:max-w-[480px] sm:gap-3 md:grid md:max-w-[520px] lg:max-w-[560px]">
          {heroCols.map((col, ci) => (
            <div key={ci} className="h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px]">
              <LoopSlider
                axis="y"
                className="h-full"
                direction={ci % 2 === 0 ? "up" : "down"}
                speed={30}
                gapClassName="gap-2 sm:gap-3"
                items={col}
                keyFor={(_m, i) => `${ci}-${i}`}
                renderItem={(m, i) => (
                  <div
                    data-cursor="expand"
                    className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-muted sm:rounded-2xl"
                  >
                    {m.kind === "video" ? (
                      <AutoVideo
                        src={m.src}
                        poster={m.poster}
                        className="pointer-events-none h-full w-full select-none object-cover"
                      />
                    ) : (

                      <img
                        decoding="async"
                        src={m.src}
                        srcSet={m.srcSet}
                        sizes="(max-width: 640px) 32vw, 190px"
                        width={384}
                        height={683}
                        alt="Pixel2Tech branding and web design project preview"
                        draggable={false}
                        loading={ci === 1 && i === 0 ? "eager" : "lazy"}
                        fetchPriority={ci === 1 && i === 0 ? "high" : "auto"}
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



const industryLogos: { name: string; src: string; darkSrc?: string }[] = [
  { name: "VA Hub PRO", src: indVahub.url },
  { name: "Swishtag", src: indSwishtag.url },
  { name: "Biscuit's Backyard", src: indBiscuits.url },
  { name: "Cave Magazine", src: indCave.url },
  { name: "Escada", src: indEscada.url },
  { name: "Gallop", src: indGallop.url },
  { name: "Mix Masters", src: indMixmasters.url },
  { name: "AchhSoft", src: indAchhsoft.url },
  { name: "Locks & Co", src: indLocks.url },
  { name: "Holloway Diamonds", src: indHolloway.url },
  { name: "Coinmarketfees", src: indCoinmarketfees.url },
  { name: "MADLUVV", src: indMadluvv.url, darkSrc: indMadluvvWhite.url },
];



function Brands() {
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
      <div data-cursor="expand">
        <LoopSlider
          items={industryLogos}
          keyFor={(b, i) => `${b.name}-${i}`}
          direction="rtl"
          speed={40}
          gapClassName="gap-14 sm:gap-[84px]"
          className="mt-10 sm:mt-12"
          ariaLabel="Industries we work with"
          renderItem={(b) => (
            <div className="flex h-6 w-20 shrink-0 items-center justify-center sm:h-8 sm:w-28">
              <img
                loading="lazy"
                decoding="async"
                src={b.src}
                alt={b.name}
                draggable={false}
                className={`pointer-events-none h-6 max-w-full object-contain opacity-80 transition hover:opacity-100 sm:h-8 ${b.darkSrc ? "dark:hidden" : "dark:invert"}`}
              />
              {b.darkSrc ? (
                <img
                  loading="lazy"
                  decoding="async"
                  src={b.darkSrc}
                  alt={b.name}
                  draggable={false}
                  className="pointer-events-none hidden h-6 max-w-full object-contain opacity-80 transition hover:opacity-100 dark:block sm:h-8"
                />
              ) : null}
            </div>
          )}

        />
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
            initial={{ y: 0, rotate: 2 }}
            animate={{ y: [0, 8, 0], rotate: [2, -1, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-[35%] left-0 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-xl shadow-black/20 sm:top-[38%] sm:-left-4 sm:px-5 sm:py-3 lg:-left-8"
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
          <div className="mt-10 aspect-square w-full overflow-hidden rounded-full">
            <img loading="lazy" decoding="async"
              src={founderPortrait.url}
              srcSet={`${founderPortrait.url} 540w, ${founderPortrait1080.url} 1080w`}
              sizes="(max-width: 640px) 90vw, 540px"
              width={540}
              height={707}
              alt="Pixel2Tech founder portrait"
              className="h-full w-full object-contain"
            />
          </div>

          <motion.div
            initial={{ y: 0, rotate: -2 }}
            animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[65%] right-0 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-xl shadow-black/20 sm:top-[70%] sm:-right-4 sm:px-5 sm:py-3 lg:-right-8"
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


const work = workItems;


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
            {w.video ? (
              <AutoVideo
                src={w.img}
                poster={w.poster}
                className="pointer-events-none h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
              />

            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={w.img}
                width={640}
                height={853}
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
  { name: "Muhammad Rashail", role: "Head of Engineering & Automation", img: teamRashail.url },
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
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
              >
                About the team
                <Plus className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      <div>
        <LoopSlider
          items={team}
          keyFor={(m, i) => `${m.name}-${i}`}
          direction="ltr"
          speed={40}
          autoplay
          gapClassName="gap-4 md:gap-6"
          className="mt-10 sm:mt-14"
          pauseOnHover
          ariaLabel="Pixel2Tech creative team"
          renderItem={(m) => (
            <article className="group w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] sm:w-[320px]">

              <div data-cursor="expand" className="relative aspect-[3/4] overflow-hidden bg-muted">
              {m.name === "Asad Farooq" && (
                <Link
                  to="/asad-farooq"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                  aria-label="View Asad Farooq's profile page"
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-neutral-900 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:scale-[1.06] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/15 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
                >
                  View Profile
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
              {m.name === "Usama Farooq" && (
                <Link
                  to="/usama-farooq"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                  aria-label="View Usama Farooq's profile page"
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-neutral-900 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:scale-[1.06] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/15 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
                >
                  View Profile
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
                <img
                  loading="lazy"
                  decoding="async"
                  src={m.img}
                  alt={`Portrait of ${m.name}, ${m.role} at Pixel2Tech`}
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="flex items-center gap-1.5 text-sm font-bold tracking-tight text-foreground sm:text-base">
                  {m.name}
                  {getLinkedInUrl(m.name) && (
                    <LinkedInBadge name={m.name} url={getLinkedInUrl(m.name)!} />
                  )}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </div>
            </article>
          )}
        />
      </div>

    </section>
  );
}


function Insights() {
  const latest = getSortedPosts().slice(0, 3);
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
                  width={800}
                  height={600}
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
      <LazySection minHeight={520}>
        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="mx-auto h-[520px] max-w-7xl animate-pulse rounded-3xl bg-muted/60"
            />
          }
        >
          <VideoTestimonials />
        </Suspense>
      </LazySection>

      <Team />
      <Studio />
      <Insights />
      <HomeFaq />
      <HomeContact />
    </PageShell>

  );
}
