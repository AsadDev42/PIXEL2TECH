import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Pixel2Tech" },
      { name: "description", content: "Get in touch with Pixel2Tech. Tell us about your project and let's build something great together." },
      { property: "og:title", content: "Contact — Pixel2Tech" },
      { property: "og:description", content: "Tell us about your project. We reply within one business day." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        title="Ready to"
        highlight="Grow Your Brand?"
        subtitle="Tell us about your project and goals. Let's build something great together."
      />

      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl bg-neutral-100 p-10 md:p-14">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-6 md:grid-cols-2">
              {[
                ["First Name", "text"],
                ["Last Name", "text"],
                ["Email", "email"],
                ["Phone", "tel"],
              ].map(([label, type]) => (
                <input
                  key={label}
                  type={type}
                  placeholder={label}
                  className="border-0 border-b border-neutral-400 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-500 outline-none focus:border-black"
                />
              ))}
              <textarea
                rows={4}
                placeholder="Message"
                className="md:col-span-2 border-0 border-b border-neutral-400 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-500 outline-none focus:border-black"
              />
              <button
                type="submit"
                className="mt-4 w-fit rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Get in Touch
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-black p-10 text-white md:p-12">
            <div>
              <h3 className="text-2xl font-bold">Talk to us directly</h3>
              <p className="mt-3 text-sm text-white/70">
                Prefer to skip the form? Reach out on the channels below and a
                team member will get back within one business day.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  sales@pixel2tech.com
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  +92 317 7475233
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Pakistan Based, Serving Worldwide
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl bg-white/5 p-5 text-sm text-white/80">
              Response time <span className="font-bold text-white">under 24h</span> · Mon – Sat
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
