import affinityVideo1 from "@/assets/affinity-video-1.mp4.asset.json";
import affinityVideo2 from "@/assets/affinity-video-2.mp4.asset.json";
import affinityVideo3 from "@/assets/affinity-video-3.mp4.asset.json";
import affinityVideo4 from "@/assets/affinity-video-4.mp4.asset.json";
import madluvvVideo1 from "@/assets/madluvv-video-1.mp4.asset.json";
import madluvvVideo2 from "@/assets/madluvv-video-2.mp4.asset.json";
import madluvvVideo3 from "@/assets/madluvv-video-3.mp4.asset.json";
import madluvvVideo4 from "@/assets/madluvv-video-4.mp4.asset.json";
import madluvvVideo5 from "@/assets/madluvv-video-5.mp4.asset.json";
import madluvvVideo6 from "@/assets/madluvv-video-6.mp4.asset.json";
import madluvvVideo8 from "@/assets/madluvv-video-8.mp4.asset.json";
import madluvvVideo9 from "@/assets/madluvv-video-9.mp4.asset.json";
import madluvvVideo10 from "@/assets/madluvv-video-10.mp4.asset.json";
import madluvvVideo11 from "@/assets/madluvv-video-11.mp4.asset.json";
import madluvvVideo12 from "@/assets/madluvv-video-12.mp4.asset.json";
import madluvvVideo13 from "@/assets/madluvv-video-13.mp4.asset.json";
import madluvvVideo14 from "@/assets/madluvv-video-14.mp4.asset.json";

type ProjectVideo = {
  src: string;
  title: string;
  uploadDate: string;
};

export const PROJECT_VIDEOS: Record<string, ProjectVideo[]> = {
  "affinity-law-social-media-ad-creatives": [
    {
      src: affinityVideo1.url,
      title: "He accepted the first offer and couldn't go back",
      uploadDate: affinityVideo1.created_at,
    },
    {
      src: affinityVideo2.url,
      title: "Partly at fault? You may still have a claim",
      uploadDate: affinityVideo2.created_at,
    },
    {
      src: affinityVideo3.url,
      title: "Insurance companies check your social media",
      uploadDate: affinityVideo3.created_at,
    },
    {
      src: affinityVideo4.url,
      title: "What to expect after hiring a lawyer",
      uploadDate: affinityVideo4.created_at,
    },
  ],
  "madluvv-social-media-meta-ads": [
    {
      src: madluvvVideo1.url,
      title: "Creator review: new favourite eyebrow product",
      uploadDate: madluvvVideo1.created_at,
    },
    {
      src: madluvvVideo2.url,
      title: "Mother's Day PSA",
      uploadDate: madluvvVideo2.created_at,
    },
    {
      src: madluvvVideo3.url,
      title: "Beach day approved: waterproof brows",
      uploadDate: madluvvVideo3.created_at,
    },
    {
      src: madluvvVideo4.url,
      title: "Brow Stamp Kit: easier than you expect",
      uploadDate: madluvvVideo4.created_at,
    },
    {
      src: madluvvVideo5.url,
      title: "Simple brow routine with Laminate Me gel",
      uploadDate: madluvvVideo5.created_at,
    },
    {
      src: madluvvVideo6.url,
      title: "Set Me Setting Spray for melting makeup",
      uploadDate: madluvvVideo6.created_at,
    },
    {
      src: madluvvVideo8.url,
      title: "The science behind perfectly shaped brows",
      uploadDate: madluvvVideo8.created_at,
    },
    {
      src: madluvvVideo9.url,
      title: "Clean stencil, clean brows",
      uploadDate: madluvvVideo9.created_at,
    },
    {
      src: madluvvVideo10.url,
      title: "Brow Stamp ASMR moment",
      uploadDate: madluvvVideo10.created_at,
    },
    {
      src: madluvvVideo11.url,
      title: "Celebrating Social Media Day with the community",
      uploadDate: madluvvVideo11.created_at,
    },
    {
      src: madluvvVideo12.url,
      title: "The life-changing eyeliner hack",
      uploadDate: madluvvVideo12.created_at,
    },
    {
      src: madluvvVideo13.url,
      title: "How to actually romanticise your life",
      uploadDate: madluvvVideo13.created_at,
    },
    {
      src: madluvvVideo14.url,
      title: "Which brow shape is your favourite?",
      uploadDate: madluvvVideo14.created_at,
    },
  ],
};
