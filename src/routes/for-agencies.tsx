import { createFileRoute, Link } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { businessHead } from "@/lib/page-seo";

export const Route = createFileRoute("/for-agencies")({
  head: () =>
    businessHead(
      "/for-agencies",
      "White-label design & development for agencies",
      "Pixel2Tech supports agencies with Shopify, WordPress, Next.js, design and video production. Explore clearly labelled partner work and discuss your brief.",
    ),
  component: () => (
    <BusinessLanding
      eyebrow="For agencies"
      title="Your client relationship. Our production team."
      intro="Bring a brief, an approved design or a production backlog. Our Lahore studio supports agency delivery across Shopify, WordPress, custom websites, brand design and video, with scope and responsibilities agreed before work begins."
      capabilities={[
        "Shopify and WordPress development",
        "Next.js and custom website builds",
        "Brand and campaign creative",
        "Video editing and motion graphics",
      ]}
      projects={["acely-website", "skin-deep-shopify-store", "holloway-diamonds-wordpress-website"]}
    >
      <section className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-3xl font-bold tracking-tight">
            A clear hand-off, from brief to delivery.
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Share the brief",
                body: "Tell us the platform, deliverables, assets and deadline. Flag confidentiality and client-contact requirements at the start.",
              },
              {
                title: "Agree the scope",
                body: "Review a written quote, responsibilities, milestones and acceptance criteria before production starts.",
              },
              {
                title: "Review and hand over",
                body: "Review work against the agreed brief. Files, access and ownership follow the scope and payment terms in your proposal.",
              },
            ].map((step) => (
              <li key={step.title} className="rounded-2xl border border-border p-6">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Confidentiality and intellectual property are covered in our{" "}
            <Link to="/terms-and-conditions" className="underline underline-offset-4">
              terms
            </Link>
            . A signed project agreement takes precedence where it expressly changes them.
          </p>
        </div>
      </section>
    </BusinessLanding>
  ),
});
