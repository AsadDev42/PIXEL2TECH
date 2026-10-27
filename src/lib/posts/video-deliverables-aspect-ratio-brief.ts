import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "One Video, Multiple Formats: A Deliverables Brief",
  metaDescription:
    "Brief landscape, vertical and square video versions properly. Plan reframing, captions, graphics, end cards and delivery checks before the edit starts.",
  keyTakeaways: [
    "A different aspect ratio can require a different composition, rather than a simple crop.",
    "Specify where each version will appear and what the viewer should do next.",
    "Approve a sample frame in every format before producing the full set of exports.",
  ],
  content: [
    {
      heading: "Why one master file does not answer every placement",
      body: [
        "A video can appear on a website, in a sales presentation, inside a vertical social feed and as part of an advertising campaign. Those placements do not necessarily share the same framing, length or viewer context. A wide product walkthrough may contain interface detail that becomes unreadable when cropped. A portrait interview may leave useful space for captions that a square crop removes.",
        "Start by listing the actual destinations, rather than requesting all formats. For each one, explain the audience, the viewing context and the next action. This gives the editor a reason to make a specific version. It also helps distinguish a technical export from a separate edit that needs a different introduction, story order or call to action.",
      ],
    },
    {
      heading: "Build a delivery matrix before editing begins",
      body: [
        "A delivery matrix names each required version and the decisions attached to it. Record the aspect ratio, intended placement, approximate story scope, language, caption treatment and final action. Use it to review the proposal so a small-looking request for extra sizes does not conceal additional composition and editing work. The exact platform requirements should be checked against the destination when the files are prepared.",
        "The example below is a planning structure, not a universal list of platform specifications. A campaign may need fewer versions or a separate set for different audiences. Link the matrix to the approved script and footage so the production team can see which material each version uses. Confirm who approves the variants and how changes to the main edit affect them.",
      ],
      table: {
        caption: "Example video delivery matrix",
        headers: ["Version", "Viewer context", "Adaptation to plan"],
        rows: [
          [
            "Landscape introduction",
            "Website or presentation",
            "Room for the main idea and supporting visual",
          ],
          [
            "Vertical cut",
            "Phone-based feed",
            "Reframed subjects, readable captions and a focused opening",
          ],
          [
            "Square variation",
            "A placement needing square composition",
            "Repositioned graphics and checked text boundaries",
          ],
          [
            "Caption-free master",
            "Future localisation or selected placements",
            "Clean image plus matching caption files",
          ],
        ],
      },
    },
    {
      heading: "Reframe the idea, not just the centre of the image",
      body: [
        "For interviews, identify who must remain visible, where their eyeline falls and whether another speaker enters the shot. A centre crop can remove the person who is speaking or cut off a meaningful gesture. When a conversation uses two speakers in a wide frame, a vertical edit may need alternating close-ups or a deliberately designed split layout. Decide the treatment with sample footage before editing the full conversation.",
        "For product demos, decide which interface action matters in each shot. A wide screen reduced to phone width may need a close-up, a supporting callout or a shorter sequence. Keep the action accurate; hiding a prerequisite can change the meaning of the demonstration. If recording has not started, plan source framing and captures with the required outputs in mind rather than expecting every crop to work afterwards.",
      ],
    },
    {
      heading: "Adapt graphics, captions and animation to the frame",
      body: [
        "Moving the same text box into a smaller frame can change its line breaks, reading time and relationship to the subject. Check names, lower thirds, diagrams and end cards individually. For animation, scene layouts may need to be rebuilt so a process still reads in the correct order. Approve one representative style frame in each required format before the team rolls that treatment through the entire video.",
        "Plan captions around actual content and destination controls. Keep essential text away from areas likely to be occupied by interface elements, and test on the intended device. Where selectable captions or transcripts are needed, name them separately in the delivery matrix. The [W3C media guide](https://www.w3.org/WAI/media/av/) explains why captions and text alternatives serve different audience needs; neither is a reason to fill every frame with duplicate headlines.",
      ],
    },
    {
      heading: "Give each cut a complete opening and ending",
      body: [
        "A short variant should introduce a complete idea. Cutting a long edit at an arbitrary time can remove the setup, leave an unresolved reference or end before the promised answer. Review the selected section as if the viewer has never watched the main version. Ask what the viewer learns and whether the next action follows naturally from that particular story.",
        "The action can also change by placement. A website visitor may already be next to a contact form, while a social viewer may need a clear invitation to visit the relevant page. Keep destination details current and avoid a call to action that the surrounding experience cannot support. If the offer, audience or main message changes, describe the request as a new creative variation rather than only a different export size.",
      ],
    },
    {
      heading: "Check technical exports against the real destination",
      body: [
        "Separate composition approval from technical delivery. The composition review asks whether the content is readable and understandable. The delivery check asks whether the file plays correctly and meets the required dimensions, encoding and audio settings. For a YouTube destination, use [YouTube’s published encoding recommendations](https://support.google.com/youtube/answer/1722171?hl=en) as the reference. Other placements may have their own requirements and processing behaviour.",
        "Upload a test where practical and inspect the processed result. Check the opening image, caption timing, sound, cropping and the final action. A correct local file can still be displayed differently by a destination player. Record the approved output and its intended placement in the handover index. Our [editing handover checklist](/blog/video-editing-handover-checklist) covers the files and supporting notes that help a team publish the correct version.",
      ],
    },
    {
      heading: "Control revisions across the complete set",
      body: [
        "Lock the main story before polishing every variation, while still testing format feasibility early. Otherwise a late wording change can require replacement captions, new narration timing and updated graphics in several versions. Keep one feedback owner and refer to the exact version and timecode. A correction in a product name should be tracked across the whole delivery list rather than fixed in just the file one reviewer happened to open.",
        "Use a checklist with one row per final output and a visible approval status. Include language, duration, aspect ratio and caption treatment in the file name or delivery index. Keep drafts away from the publication folder. This is particularly useful for recurring content, where a previous campaign’s end card or an older introduction can accidentally survive into a new batch.",
      ],
    },
    {
      heading: "A multi-format brief for your next project",
      body: [
        "Here is a hypothetical brief: ‘We need a landscape product introduction for our website and a separate vertical social cut focused on the same buyer problem. Please propose the reframing and graphic changes, show us a sample frame in both formats, and include matching caption files. Both versions should lead to the same current product page. We will supply approved screen recordings and one consolidated feedback list.’",
        "Attach the destination links, available source footage, brand assets and a list of required versions. If the story is mainly animated, read our [explainer production workflow](/blog/animated-explainer-video-production-process) before deciding which scenes need adaptation. Pixel2Tech can discuss the edit and motion work around your publishing plan. [Send your brief](/contact) and see the [video portfolio](/portfolio?category=video-editing) for examples across different formats.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can every landscape video become a vertical video?",
      a: "Not through cropping alone. The source framing, interface detail, graphics and intended story determine whether a vertical version needs reframing, a new layout or additional source material.",
    },
    {
      q: "Should every format have the same running time?",
      a: "Only when that serves the placement and viewer. Agree the story for each version; a focused social cut can have a different opening and ending from the full website edit.",
    },
    {
      q: "What should I send an editor before requesting multiple sizes?",
      a: "Send the destination list, audience, next action, existing footage, brand files, caption requirements and the versions you expect to receive. Ask for a sample frame in each format before full production.",
    },
  ],
  sources: [
    { label: "W3C: accessible audio and video", href: "https://www.w3.org/WAI/media/av/" },
    {
      label: "YouTube: recommended upload encoding settings",
      href: "https://support.google.com/youtube/answer/1722171?hl=en",
    },
  ],
  internalLinks: [
    { label: "Video editing and ads", to: "/services/video-editing-and-ads" },
    { label: "View video collections", to: "/portfolio?category=video-editing" },
  ],
  cta: {
    title: "Plan the versions before the edit.",
    body: "Send your footage and publishing channels. We will discuss the story, reframing, motion work and deliverables each placement needs.",
  },
};
export default post;
