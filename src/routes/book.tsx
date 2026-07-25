import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Pixel2Tech" },
      { name: "description", content: "Schedule a free strategy call with Pixel2Tech to plan your brand, website, or growth roadmap." },
      { property: "og:title", content: "Book a Strategy Call — Pixel2Tech" },
      { property: "og:description", content: "Pick a time that works for you and let's talk about your project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

function BookPage() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <PageShell>
      <section className="bg-background pb-8 pt-10 sm:pb-10 sm:pt-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <FadeIn>
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
              Book a <span className="text-[#0784ff]">Strategy Call</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Pick a time that works for you. We'll discuss your goals, timelines, and how Pixel2Tech can help you grow.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-background sm:rounded-3xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pixel2tech/strategy-call?primary_color=0784ff"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
