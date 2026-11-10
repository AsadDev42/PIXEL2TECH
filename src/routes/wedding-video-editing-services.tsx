import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { ALL_ITEMS } from "@/lib/portfolio-data";

const PATH = "/wedding-video-editing-services";
const WEDDING = ALL_ITEMS.find((item) => item.slug === "wedding-video-and-reel-editing");
const weddingVideos = WEDDING?.videos ?? [];
const films = weddingVideos.filter((v) => v.orientation === "landscape").length;
const reels = weddingVideos.filter((v) => v.orientation === "vertical").length;

const FAQS: FaqItem[] = [
  {
    q: "What do you need from us to edit a wedding video?",
    a: "The raw footage from every camera, the audio files if sound was recorded separately, the order of the day, and any must-have moments, songs or names. A shared drive or transfer link works. We confirm the footage list before editing starts so nothing is missed.",
  },
  {
    q: "Can you edit both a wedding film and vertical reels from the same footage?",
    a: `Yes. Most couples and studios want both: a horizontal film for the full story and short 9:16 reels for Instagram and TikTok. Our wedding collection has ${films} horizontal films and ${reels} vertical reels, cut from wedding footage.`,
  },
  {
    q: "Do you work with wedding videographers who want to outsource editing?",
    a: "Yes. Videographers send us footage and a style reference, and we edit to that style so the finished films match the rest of their work. The videographer stays the point of contact for the couple. We only talk to the couple directly if you ask us to.",
  },
  {
    q: "Which ceremonies and events do you edit?",
    a: "Our published work includes bridal portraits, couple shoots, nikah and church ceremonies, baraat arrivals, mehndi and evening celebrations. If your wedding has other traditions or events, list them in the brief so the edit gives each one the right time.",
  },
  {
    q: "How are revisions handled?",
    a: "The number of revision rounds is written into the quote before work starts. You send timestamped notes on the first cut, we make the changes, and further rounds or new requests outside the agreed scope are quoted first.",
  },
  {
    q: "How much does wedding video editing cost?",
    a: "Each project gets a fixed quote after we see the brief. The price depends on how many hours of footage there are, how many cameras, the length of the film, how many reels you need, and any color, sound or music work. Monthly volume for videographers is quoted separately.",
  },
];

export const Route = createFileRoute("/wedding-video-editing-services")({
  head: () => {
    const head = businessHead(
      PATH,
      "Wedding Video Editing Services",
      `Wedding video editing services for couples and videographers: highlight films, full ceremony edits and 9:16 reels from your footage. ${weddingVideos.length} wedding films and reels in our portfolio.`,
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: WeddingVideoEditingServices,
});

function WeddingVideoEditingServices() {
  return (
    <BusinessLanding
      eyebrow="Wedding video editing services"
      title="Wedding video editing services"
      intro={`Send us the footage from the day and we edit it into a wedding film worth rewatching, plus vertical reels for social media. Our wedding collection has ${weddingVideos.length} finished edits: ${films} horizontal films and ${reels} vertical reels, from bridal portraits and couple shoots to nikah, church and baraat footage.`}
      capabilities={[
        {
          title: "Wedding highlight films",
          body: "A cinematic edit of the day, built around the vows, speeches, music and the moments the couple asked for.",
        },
        {
          title: "Full ceremony and event edits",
          body: "Longer edits of the ceremony, nikah, speeches or reception, with multi-camera footage synced and cleaned up.",
        },
        {
          title: "Vertical wedding reels",
          body: "9:16 reels cut around one look, moment or location, ready for Instagram, TikTok and YouTube Shorts.",
        },
        {
          title: "Color, sound and music",
          body: "Consistent color across cameras, cleaned-up audio for vows and speeches, and music cut to the pace of the edit.",
        },
      ]}
      projects={[
        "wedding-video-and-reel-editing",
        "short-form-social-media-videos",
        "long-form-video-editing",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Who we edit wedding videos for"
          items={[
            {
              title: "Wedding videographers",
              body: "Outsource the editing so you can shoot more weddings. We edit to your style reference and you deliver the films under your own name.",
            },
            {
              title: "Couples with raw footage",
              body: "Have footage from a friend, a family member or a videographer who only delivered raw files? We turn it into a finished film and reels.",
            },
            {
              title: "Studios and planners",
              body: "Add wedding films and social reels to your packages without hiring an in-house editor for busy seasons.",
            },
          ]}
        />
        <ContentGrid
          heading="How wedding video editing works"
          numbered
          items={[
            {
              title: "Send the footage and brief",
              body: "Share the footage, the order of the day, music choices, must-have moments and a reference film if you have one.",
            },
            {
              title: "Fixed quote and edit plan",
              body: "We check the footage, confirm the films and reels you want, and send a written quote with the revision rounds included.",
            },
            {
              title: "First cut, notes, delivery",
              body: "You review the first cut and send timestamped notes. We make the agreed changes and deliver the final files in the formats you need.",
            },
          ]}
        />
        <LandingFaq heading="Wedding video editing questions" items={FAQS} />
        <LandingLinks
          heading="See the work and plan your edit"
          links={[
            {
              href: "/portfolio/wedding-video-and-reel-editing",
              title: "Wedding films and reels",
              desc: `All ${weddingVideos.length} wedding edits in our portfolio, horizontal and vertical.`,
            },
            {
              href: "/outsource-video-editing",
              title: "Outsource video editing",
              desc: "Editing capacity for videographers, creators and agencies.",
            },
            {
              href: "/blog/how-to-brief-a-video-editor-first-cut",
              title: "Brief a video editor",
              desc: "What to send so the first cut is close to what you want.",
            },
            {
              href: "/blog/video-deliverables-aspect-ratio-brief",
              title: "Formats and aspect ratios",
              desc: "Plan 16:9 films and 9:16 reels before the edit starts.",
            },
            {
              href: "/services/video-editing-and-ads",
              title: "All video editing services",
              desc: "Reels, YouTube, brand videos and ad creative.",
            },
          ]}
        />
        <ProjectNextStep
          title="Have wedding footage waiting to be edited?"
          body="Tell us how much footage you have, which films and reels you need and when you need them. We will check it and send a fixed quote."
          source="wedding-video-next-step"
          label="Get a wedding edit quote"
        />
      </div>
    </BusinessLanding>
  );
}
