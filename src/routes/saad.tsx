import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clapperboard, Film, Megaphone } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { ClosingCta } from "@/components/closing-cta";
import { SITE } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

/**
 * Team profile for Saad. Only facts the studio already publishes (name, role,
 * photo, LinkedIn, the work of the video team) are shown here; his detailed
 * work history lives on LinkedIn until he supplies it for this page.
 */
const saad = TEAM.find((m) => m.profile === "/saad")!;
const PAGE_URL = `${SITE.url}/saad`;
const TITLE = "Saad | Creative Video Editor at Pixel2Tech";
const DESCRIPTION =
  "Saad is a creative video editor at Pixel2Tech in Lahore, working on reels, ad creatives and brand videos for the studio's clients.";

const WORK = [
  {
    Icon: Film,
    title: "Reels and short-form video",
    desc: "Vertical edits for Instagram, TikTok and YouTube Shorts, cut for the first three seconds and for sound-off viewing.",
  },
  {
    Icon: Megaphone,
    title: "Paid ad creatives",
    desc: "Ad variations for Meta and TikTok campaigns, with hooks, captions and formats matched to each placement.",
  },
  {
    Icon: Clapperboard,
    title: "Brand and YouTube videos",
    desc: "Longer edits for brand stories, explainers and channel content, from rough cut to color and sound.",
  },
];

export const Route = createFileRoute("/saad")({
  component: SaadPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE.url}${saad.img}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: PAGE_URL,
          mainEntity: {
            "@type": "Person",
            name: saad.name,
            jobTitle: saad.role,
            image: `${SITE.url}${saad.img}`,
            worksFor: { "@id": `${SITE.url}/#organization` },
            sameAs: saad.linkedin ? [saad.linkedin] : [],
          },
        }),
      },
    ],
  }),
});

function SaadPage() {
  return (
    <PageShell>
      <section aria-labelledby="saad-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:gap-16">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-muted md:max-w-none">
            <img
              src={saad.img}
              alt={`Portrait of ${saad.name}, ${saad.role} at Pixel2Tech`}
              width={800}
              height={1067}
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Pixel2Tech team
            </p>
            <h1
              id="saad-title"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {saad.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-primary">{saad.role}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Saad works on the video side of the studio in {SITE.location}: reels, ad creatives and
              brand videos for Pixel2Tech clients, alongside the designers and developers who shape
              the rest of each project.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {saad.linkedin ? (
                <a
                  href={saad.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  See full experience on LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              <Link
                to="/services/$slug"
                params={{ slug: "video-editing-and-ads" }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Video editing services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="saad-work-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2
            id="saad-work-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What he works on
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3 lg:gap-6">
            {WORK.map(({ Icon, title, desc }) => (
              <li key={title} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/portfolio"
            search={{ category: "video-editing" }}
            className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            See video work from the studio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="saad-cta-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <ClosingCta
            id="saad-cta-title"
            title="Need video that"
            highlight="people finish watching?"
            body="Tell us what you're promoting and where it will run. We reply within one business day, or book a call and talk it through."
            source="saad_profile_cta"
          />
        </div>
      </section>
    </PageShell>
  );
}
