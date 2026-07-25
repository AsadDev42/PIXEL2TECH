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

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-6 sm:gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl bg-neutral-100 p-6 sm:rounded-3xl sm:p-10 md:p-14">
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-labelledby="contact-form-title"
              className="grid gap-5 sm:gap-6 sm:grid-cols-2"
            >
              <h2 id="contact-form-title" className="sr-only">Contact form</h2>
              {([
                { id: "firstName", label: "First Name", type: "text", autoComplete: "given-name", required: true },
                { id: "lastName", label: "Last Name", type: "text", autoComplete: "family-name", required: true },
                { id: "email", label: "Email", type: "email", autoComplete: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: false },
              ] as const).map((f) => (
                <div key={f.id} className="flex flex-col">
                  <label htmlFor={f.id} className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    {f.label}{f.required && <span aria-hidden="true"> *</span>}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required={f.required}
                    aria-required={f.required}
                    className="min-h-11 border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-black placeholder:text-neutral-600 outline-none focus:border-black sm:text-sm"
                  />
                </div>
              ))}
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="message" className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  className="border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-black placeholder:text-neutral-600 outline-none focus:border-black sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex min-h-11 w-fit items-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 sm:mt-4 sm:px-8"
              >
                Get in Touch
              </button>
            </form>
          </div>

          <aside aria-labelledby="direct-contact-title" className="flex flex-col justify-between rounded-2xl bg-black p-6 text-white sm:rounded-3xl sm:p-10 md:p-12">
            <div>
              <h2 id="direct-contact-title" className="text-xl font-bold sm:text-2xl">Talk to us directly</h2>
              <p className="mt-3 text-sm text-white/80">
                Prefer to skip the form? Reach out on the channels below and a
                team member will get back within one business day.
              </p>
              <ul className="mt-6 space-y-4 text-sm sm:mt-8">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a href="mailto:sales@pixel2tech.com" className="min-w-0 break-all hover:underline">sales@pixel2tech.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href="tel:+923177475233" className="hover:underline">+92 317 7475233</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Pakistan Based, Serving Worldwide
                </li>
              </ul>
            </div>
            <p className="mt-8 rounded-2xl bg-white/10 p-4 text-sm text-white sm:mt-10 sm:p-5">
              Response time <span className="font-bold">under 24h</span> · Mon – Sat
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl bg-neutral-100 p-10 md:p-14">
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-labelledby="contact-form-title"
              className="grid gap-6 md:grid-cols-2"
            >
              <h2 id="contact-form-title" className="sr-only">Contact form</h2>
              {([
                { id: "firstName", label: "First Name", type: "text", autoComplete: "given-name", required: true },
                { id: "lastName", label: "Last Name", type: "text", autoComplete: "family-name", required: true },
                { id: "email", label: "Email", type: "email", autoComplete: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: false },
              ] as const).map((f) => (
                <div key={f.id} className="flex flex-col">
                  <label htmlFor={f.id} className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    {f.label}{f.required && <span aria-hidden="true"> *</span>}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required={f.required}
                    aria-required={f.required}
                    className="border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-600 outline-none focus:border-black"
                  />
                </div>
              ))}
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  className="border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-600 outline-none focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-fit rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Get in Touch
              </button>
            </form>
          </div>

          <aside aria-labelledby="direct-contact-title" className="flex flex-col justify-between rounded-3xl bg-black p-10 text-white md:p-12">
            <div>
              <h2 id="direct-contact-title" className="text-2xl font-bold">Talk to us directly</h2>
              <p className="mt-3 text-sm text-white/80">
                Prefer to skip the form? Reach out on the channels below and a
                team member will get back within one business day.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a href="mailto:sales@pixel2tech.com" className="hover:underline">sales@pixel2tech.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href="tel:+923177475233" className="hover:underline">+92 317 7475233</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Pakistan Based, Serving Worldwide
                </li>
              </ul>
            </div>
            <p className="mt-10 rounded-2xl bg-white/10 p-5 text-sm text-white">
              Response time <span className="font-bold">under 24h</span> · Mon – Sat
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

