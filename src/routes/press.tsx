import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { ContentGrid } from "@/components/content-blocks";
import { businessHead } from "@/lib/page-seo";
import { SITE, STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

export const Route = createFileRoute("/press")({
  head: () =>
    businessHead(
      "/press",
      "Press & studio information",
      "A company overview, founder profiles, interview topics and the media enquiry process for Pixel2Tech, the creative and web studio in Lahore.",
    ),
  component: () => (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Press & studio information
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          The studio, the people and the work.
        </h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          For writers, podcast hosts and event organisers looking for company information or a
          conversation with our founders. This page brings together our studio overview, profile
          links and the right contact for a media request.
        </p>
        <section className="my-10 rounded-[2rem] border border-border bg-muted/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Company overview
          </p>
          <h2 className="mt-3 text-2xl font-bold">About Pixel2Tech</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Pixel2Tech is a creative and web studio based in Lahore, Pakistan, working with clients
            worldwide. Its in-house team brings together branding, website and Shopify development,
            video production and automation. Projects connect the way a business looks, the way its
            website works and the content it publishes.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Founded", value: STATS.foundingYear },
              { label: "Based in", value: SITE.location },
              { label: "Work", value: "Brand, web, video & automation" },
            ].map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="border-t border-border py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Meet the founders</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Use these profile pages for background, current role descriptions and examples of the
            work. For a quote or interview, send a request so we can confirm who is best placed to
            speak.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {TEAM.filter((person) => person.founder).map((person) => (
              <Link
                key={person.name}
                to={person.profile!}
                className="flex items-center gap-5 rounded-2xl border border-border p-6 hover:bg-muted/40"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  loading="lazy"
                  className="h-20 w-20 rounded-2xl object-cover object-top"
                />
                <span>
                  <span className="block text-lg font-semibold">{person.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{person.role}</span>
                  <span className="mt-3 block text-sm font-semibold text-primary">
                    Read founder profile →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
        <ContentGrid
          heading="Topics we can discuss"
          items={[
            {
              title: "Building a connected brand",
              body: "How a studio carries visual identity and messaging into websites, social content and video, with examples from its project work.",
            },
            {
              title: "Practical website and store decisions",
              body: "How product navigation, page structure and mobile layouts are planned around what a customer needs to do next.",
            },
            {
              title: "The production process",
              body: "How an in-house team handles briefs, reviews, design-to-development handovers and agency production partnerships.",
            },
          ]}
        />
        <section className="mb-12 grid gap-8 rounded-[2rem] bg-slate-950 p-6 text-white sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Send a media enquiry.</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Include the publication or event, your topic, the format and your deadline. Tell us
              whether you need an interview, company facts, founder portraits or project imagery.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Media%20enquiry%20-%20Pixel2Tech`}
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950"
            >
              Contact the studio
            </a>
          </div>
          <div className="rounded-2xl border border-white/15 p-6">
            <h3 className="text-lg font-semibold">Using our name and project work</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Please use the name Pixel2Tech and link to pixel2tech.com. Contact us for image files
              and usage permission. Client-owned materials and agency partner work may need
              additional approval before they can be reproduced.
            </p>
            <Link
              to="/portfolio"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-blue-300"
            >
              Explore the project portfolio →
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  ),
});
