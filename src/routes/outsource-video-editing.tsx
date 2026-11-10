import { createFileRoute } from "@tanstack/react-router";
import { BusinessLanding } from "@/components/business-landing";
import { ContentGrid, ProjectNextStep } from "@/components/content-blocks";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { LandingFaq, LandingLinks } from "@/components/landing-extras";
import { businessHead } from "@/lib/page-seo";
import { WORK } from "@/lib/portfolio-data";

const PATH = "/outsource-video-editing";
const VIDEO_COLLECTIONS = Object.values(WORK["Video Editing"]).flat();
const videoCount = VIDEO_COLLECTIONS.reduce((sum, item) => sum + (item.videos?.length ?? 0), 0);

const FAQS: FaqItem[] = [
  {
    q: "What does it mean to outsource video editing?",
    a: "You send your footage to an outside editing team instead of editing in-house or hiring a full-time editor. You keep control of the brief, the style and the approvals; the team edits, applies your notes and delivers finished files.",
  },
  {
    q: "Do you offer white label video editing for agencies?",
    a: "Yes. Agencies send footage and a brief, and we deliver finished edits that the agency presents to its client as its own work. By default we work only with your team and never contact your client unless you ask us to.",
  },
  {
    q: "What kinds of videos can we outsource?",
    a: "Short-form reels, TikToks and Shorts, YouTube videos, podcasts, talking-head content, wedding films, explainer animations and paid ad creative. Our portfolio shows examples of each in their own collections.",
  },
  {
    q: "How do we send footage and feedback?",
    a: "Footage comes through a shared drive or transfer link, with a short brief and a style reference. Feedback is timestamped notes on each cut. We agree the review rounds and delivery formats in the quote, so there is no guesswork at handover.",
  },
  {
    q: "Can we outsource a regular monthly volume?",
    a: "Yes. For ongoing content we agree a monthly volume, the formats, and how footage and notes arrive. One-off projects such as a launch video, a wedding film or an ad set are quoted separately with their own scope.",
  },
  {
    q: "How is outsourced video editing priced?",
    a: "Every project or monthly volume gets a fixed quote in writing. Price depends on the number and length of videos, short-form or long-form, versions per video, and captions, motion graphics or sound work.",
  },
];

export const Route = createFileRoute("/outsource-video-editing")({
  head: () => {
    const head = businessHead(
      PATH,
      "Outsource Video Editing Services",
      `Outsource video editing to a team that edits reels, YouTube, podcasts, wedding films and ads from your footage. White label editing for agencies. ${videoCount} edited videos in our portfolio.`,
    );
    return { ...head, scripts: [...head.scripts, faqJsonLd(FAQS)] };
  },
  component: OutsourceVideoEditing,
});

function OutsourceVideoEditing() {
  return (
    <BusinessLanding
      eyebrow="Outsource video editing"
      title="Outsource video editing to an in-house team"
      intro={`Send your footage and get finished edits back: reels, YouTube videos, podcasts, wedding films and ad creative, cut for the platform each one runs on. Our portfolio has ${videoCount} edited videos across ${VIDEO_COLLECTIONS.length} collections, and we also edit white label for agencies.`}
      capabilities={[
        {
          title: "Short-form and social",
          body: "Reels, TikToks and Shorts with hooks, captions and pacing made for vertical feeds.",
        },
        {
          title: "YouTube and podcasts",
          body: "Long-form edits with color, sound cleanup and chapters, plus short clips cut from each episode.",
        },
        {
          title: "Wedding and event films",
          body: "Highlight films, ceremony edits and vertical reels for videographers and couples.",
        },
        {
          title: "Ad creative",
          body: "Video ads in several hooks and aspect ratios, ready to test on Meta, TikTok and YouTube.",
        },
      ]}
      projects={[
        "short-form-social-media-videos",
        "long-form-video-and-podcast-production",
        "wedding-video-and-reel-editing",
        "vip-talking-head-videos",
        "performance-marketing-video-ads",
        "animated-explainer-videos",
      ]}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ContentGrid
          heading="Who outsources video editing to us"
          items={[
            {
              title: "Marketing and creative agencies",
              body: "White label editing for client campaigns and social content, delivered for your team to present under your agency's name.",
            },
            {
              title: "Creators and personal brands",
              body: "A steady flow of YouTube videos and short clips, edited to your style, so you can spend your time recording.",
            },
            {
              title: "Videographers and brands",
              body: "Extra editing capacity for busy seasons, launches and ad testing, without hiring a full-time editor.",
            },
          ]}
        />
        <ContentGrid
          heading="How outsourced editing works"
          numbered
          items={[
            {
              title: "Send footage and a brief",
              body: "Share the footage, the formats you need, a style reference and the deadline. Agencies tell us how they want us to appear to their client.",
            },
            {
              title: "Fixed quote",
              body: "We list the videos, versions, review rounds and delivery formats with a written quote. Work starts once it is agreed.",
            },
            {
              title: "Edit, review, deliver",
              body: "You send timestamped notes on each cut. We make the agreed changes and deliver final files ready to publish or hand to your client.",
            },
          ]}
        />
        <LandingFaq heading="Outsourced video editing questions" items={FAQS} />
        <LandingLinks
          heading="Plan your editing"
          links={[
            {
              href: "/wedding-video-editing-services",
              title: "Wedding video editing",
              desc: "Wedding films and reels for videographers and couples.",
            },
            {
              href: "/blog/outsource-video-editing-to-pakistan",
              title: "Outsourcing to an offshore team",
              desc: "Footage, approvals, time zones and handover with an offshore editor.",
            },
            {
              href: "/blog/video-editing-handover-checklist",
              title: "Video handover checklist",
              desc: "The files and formats to ask for at delivery.",
            },
            {
              href: "/blog/white-label-creative-for-agencies",
              title: "White label design and video",
              desc: "Adding creative capacity under your agency's name.",
            },
            {
              href: "/for-agencies",
              title: "Everything we do for agencies",
              desc: "Website, store, design and video production for agency teams.",
            },
            {
              href: "/services/video-editing-and-ads",
              title: "Video editing agency",
              desc: "Reels, YouTube, brand videos and ad creative for US brands.",
            },
          ]}
        />
        <ProjectNextStep
          title="Ready to hand off your editing?"
          body="Tell us what you film, how many videos you need and the formats. We will review a sample of the footage and send a fixed quote."
          source="outsource-video-next-step"
          label="Get an editing quote"
        />
      </div>
    </BusinessLanding>
  );
}
