import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Video Editing Handover Checklist: Files Your Team Needs",
  metaDescription:
    "Plan a clear video editing handover: approved masters, captions, source projects, linked media, music licences and an organised archive for future updates.",
  keyTakeaways: [
    "Agree the handover before the edit starts, including whether editable project files are included.",
    "Keep publish-ready exports separate from original footage and working files.",
    "Test that another editor can understand the archive and locate the approved version.",
  ],
  content: [
    {
      heading: "A finished video and an editable project are different deliverables",
      body: [
        "A publish-ready export is the file your marketing team uploads. An editing project contains the sequence and references needed to revise the work. It can depend on footage, audio, fonts, plugins and linked graphics stored elsewhere. Receiving a project file alone does not mean another editor can open it successfully. Agree what the handover includes before the project reaches final approval.",
        "This matters when a founder changes a call to action, a podcast needs a new introduction or a product video must replace an outdated screen. The right handover depends on who will maintain the work. A client who only needs approved distribution files has a different requirement from an in-house editor taking over a recurring series. Put that responsibility in the brief rather than leaving it to the final invoice conversation.",
      ],
    },
    {
      heading: "Separate final masters, channel versions and review exports",
      body: [
        "Create an obvious final-delivery folder containing only approved files. Distinguish the main master from vertical adaptations, shorter versions, language variants and versions with burned-in captions. Include a delivery index that describes the intended use of each file. A file called final-new-revised can still be the wrong edit if there is no record of who approved it and where it belongs.",
        "A useful naming pattern includes the project, subject, format, language and revision. For example, product-introduction_16x9_en_approved-v03.mp4 is more informative than export3.mp4. Keep draft review files elsewhere so a colleague cannot publish an old version by mistake. Record whether the final files include music, narration, captions and any channel-specific end card.",
      ],
      table: {
        caption: "Example delivery index",
        headers: ["File group", "Purpose", "What to record"],
        rows: [
          ["Approved master", "Primary publication", "Aspect ratio, language and approval date"],
          ["Channel variants", "Specific placements", "Crop, duration and caption treatment"],
          [
            "Captions and transcript",
            "Accessible publication",
            "Language, timing and matching revision",
          ],
          ["Editable archive", "Future changes", "Software version and required dependencies"],
        ],
      },
    },
    {
      heading: "Collect the media the project actually references",
      body: [
        "If editable delivery is included, ask for an organised archive with the source material the sequence needs. That can include camera footage, screen captures, voice recordings, music, graphics and image files. Decide whether the archive contains all raw material or only the media used in the edit. Those options have different storage and future-editing implications, so describe the choice clearly.",
        "Record the editing application and version, plus any linked motion-graphics projects, special fonts or required plugins. Where practical, agree whether graphics can be supplied as rendered files so a future editor does not need the original tool. A short readme should explain folder locations and unresolved dependencies. Test the handover from the delivered archive rather than relying on the producer’s workstation, where missing files may still exist locally.",
      ],
    },
    {
      heading: "Treat captions and transcripts as separate files to review",
      body: [
        "Burned-in captions become part of the image and cannot be switched off or corrected independently. A timed caption file can be uploaded to a compatible player and may support selectable languages. A transcript provides a readable text version. Decide which forms your audience and publishing channels need, then request the relevant files as explicit deliverables.",
        "Check names, technical terms, timing and meaningful sound information against the approved edit. The [W3C media guidance](https://www.w3.org/WAI/media/av/) explains the different roles of captions, transcripts and descriptions. Do not describe an export as fully accessible merely because it has animated headlines. Keep the transcript and caption revision aligned with the video, especially when a sentence is removed late in the review.",
      ],
    },
    {
      heading: "Document usage permissions without assuming ownership",
      body: [
        "Include an asset record describing supplied logos, stock material, music, voice recordings and any third-party templates. Ask which usage rights apply to the delivered work and who can obtain the relevant licence evidence. Availability inside an editing tool does not automatically answer whether an asset may be reused in a different campaign, territory or client project.",
        "Agree the treatment of editable templates, raw footage and licensed fonts in the project scope. Some dependencies may need to be acquired by the receiving team rather than copied into an archive. This is a practical handover question, not a substitute for the actual licence terms. Pixel2Tech can discuss the required delivery scope with you before production, so the files and permissions needed for your planned use are identified early.",
      ],
    },
    {
      heading: "Test playback in the place where the audience will watch",
      body: [
        "Open the final files, check the first and last frames and scrub through the edit. Listen for missing narration, unexpected silence and abrupt music endings. Check captions on a phone and inspect any small interface text. Review the version uploaded to your destination as well: processing, cropping and player behaviour can differ from a local review file.",
        "For YouTube publication, compare the export specification with [YouTube’s own encoding guidance](https://support.google.com/youtube/answer/1722171?hl=en), rather than treating one export preset as suitable for every destination. The brief should name the destination and the required versions. If your campaign needs landscape, square and vertical outputs, use a [format-by-format delivery list](/blog/video-deliverables-aspect-ratio-brief) so the editor can plan the adaptations.",
      ],
    },
    {
      heading: "Name an owner for the archive and future changes",
      body: [
        "Choose a shared storage location your business controls and document who can access it. Confirm that the receiving team can download the delivery and that important access does not depend on a departing contractor’s personal account. Agree retention arrangements with the production team, but do not assume that your agency keeps every original file indefinitely. Maintain the archive you need for your own continuity.",
        "Keep the approved brief, final feedback and delivery index beside the assets. When you request an update, name the exact source revision and describe the intended change. For a recurring podcast series, also keep the current intro, lower thirds, caption style and thumbnail rules. Our [podcast editing workflow](/blog/podcast-to-short-form-video-workflow) explains how to organise the production stage before files reach this archive.",
      ],
    },
    {
      heading: "Send this handover request with your editing brief",
      body: [
        "A useful example is: ‘Our internal editor will maintain this series after launch. Please include approved landscape and vertical exports, matching caption files, an editable project archive with the agreed media, and a readme covering application versions and dependencies. Identify third-party assets and any permissions we need separately. We will review the archive and confirm receipt before closing the project.’",
        "If you only need finished videos, say that instead and list the publication formats clearly. [Explore our video portfolio](/portfolio?category=video-editing), then [send your footage and delivery requirements](/contact). We can discuss editing, captions and the handover your team will actually use. The goal is a usable delivery with understood responsibilities, rather than the largest possible folder of unexplained files.",
      ],
    },
  ],
  faqs: [
    {
      q: "Are project files always included in video editing?",
      a: "No. Editable projects, raw footage and linked media should be named in the agreed scope. Confirm software dependencies, third-party rights and who will maintain the archive.",
    },
    {
      q: "Do I need both burned-in and separate captions?",
      a: "That depends on the publishing channels and audience. A social export may use burned-in captions, while a compatible web player can use a selectable timed-caption file. Specify each required version.",
    },
    {
      q: "How do I check that a handover is usable?",
      a: "Open the approved exports, compare the delivery index with the files, and test the editable archive on the receiving team’s system when editable delivery is included.",
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
    { label: "Video editing services", to: "/services/video-editing-and-ads" },
    {
      label: "Long-form and podcast work",
      to: "/portfolio/long-form-video-and-podcast-production",
    },
  ],
  cta: {
    title: "Finish with files your team can use.",
    body: "Share your footage, publication channels and future editing plans. We can agree the edit, export versions and handover before production starts.",
  },
};
export default post;
