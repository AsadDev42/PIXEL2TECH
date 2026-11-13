import type { ServiceStory } from "./types";

/** Proposed service journeys, not accounts of client results or completed engagements. */
export const CREATIVE_SERVICE_STORIES: Record<string, ServiceStory> = {
  "ad-creative-design": {
    keyword: "ad creative services",
    problem:
      "Your next campaign needs fresh creative, but the brief mixes several offers, audiences and placements. Resizing the same busy graphic produces more files without giving your media buyer a clear idea to test.",
    approach:
      "We separate the offer, audience and desired action, then develop distinct hooks around that brief. Each concept gets a readable hierarchy and placement-specific layout. Variations change an agreed element, such as the headline or product image, so your team can compare ideas rather than unrelated designs.",
    handover:
      "You receive the approved concepts, named test variations and placement exports listed in the scope. Your media buyer checks the files against the campaign setup before publishing.",
    process: [
      {
        title: "Define the test",
        desc: "Share the offer, audience, destination page and available assets. We agree which creative question the batch should answer and which placements it must support.",
      },
      {
        title: "Choose the visual angles",
        desc: "Review concept layouts with different hooks and a clear call to action. Select the directions to develop before we produce the full variation set.",
      },
      {
        title: "Build controlled variations",
        desc: "We develop the agreed headline, image or opening variations, adapting crops and text placement for each format rather than stretching one design across every placement.",
      },
      {
        title: "Check the export set",
        desc: "Review final wording, offer details, safe areas and filenames together. We supply the scoped exports for your team to upload, with source files where agreed.",
      },
    ],
  },
  "social-media-design": {
    keyword: "social media graphic design services",
    problem:
      "Different people create your weekly posts from old files, so offers, product images and announcements look disconnected. The team needs a consistent visual system that still works when the topic or platform changes.",
    approach:
      "We start with the content your team actually publishes, then define layouts for recurring formats such as offers, tips and product launches. A first batch establishes the visual style. Editable templates use the same type, image treatment and spacing, with room for realistic headline lengths and platform controls.",
    handover:
      "You receive the approved post exports and scoped editable templates in the agreed tool. Before sign-off, your team checks that representative text and photos fit the reusable layouts.",
    process: [
      {
        title: "Map the next content batch",
        desc: "List upcoming offers, announcements and recurring topics with their platforms. We agree quantities, formats and who supplies each caption, image and approval before production begins.",
      },
      {
        title: "Approve the feed style",
        desc: "We apply your brand to a small selection of posts and story frames. Review type, imagery and content hierarchy together before extending the style.",
      },
      {
        title: "Design the platform versions",
        desc: "Build the approved batch with carousel sequences and vertical crops where needed. We keep key text clear of interface overlays and check each layout at phone size.",
      },
      {
        title: "Prepare repeatable templates",
        desc: "We organize the agreed editable templates and final exports. Test a realistic content change before approval so your team can see which elements to replace.",
      },
    ],
  },
  "presentation-design": {
    keyword: "presentation design services",
    problem:
      "Your pitch contains the right information, but crowded slides make the main point hard to find. Charts need explaining, old layouts clash, and the deck reads differently when someone opens it without a presenter.",
    approach:
      "We establish whether the deck will be presented, sent ahead or used both ways, then organize the supplied material around the decisions your audience needs to make. Sample slides set the visual direction before the full deck is built. Charts retain their source figures while labels and layouts clarify the message.",
    handover:
      "You receive the approved deck in the agreed presentation format, plus the scoped PDF or reusable layouts. Final review checks slide order, figures, fonts and editing in the target tool.",
    process: [
      {
        title: "Set the audience and reading mode",
        desc: "Share your outline, existing slides, source figures and intended audience. We agree the deck's purpose, target tool and whether people will read or watch it.",
      },
      {
        title: "Shape the slide sequence",
        desc: "We organize the supplied story into a clear sequence and identify overloaded slides. You approve the key messages and missing content before detailed slide design.",
      },
      {
        title: "Resolve the difficult slides first",
        desc: "Review sample layouts for a dense chart, a text slide and a key argument. We use that approved approach to design the remaining presentation consistently.",
      },
      {
        title: "Review the deck in its final tool",
        desc: "Check figures and wording against your source material, then open the deck in the agreed software. We resolve layout issues and package the scoped editable files.",
      },
    ],
  },
  "illustration-design": {
    keyword: "custom illustration services",
    problem:
      "Stock artwork does not explain your product clearly, and illustrations collected from different libraries do not feel related. You need a recognizable style that can cover the right subjects across web, editorial or packaging use.",
    approach:
      "We turn the required subjects and placements into an illustration brief, then agree a visual direction through sample sketches. Line weight, palette and detail are settled before the full set is produced. Each piece is reviewed in its intended context so the composition works around the surrounding content.",
    handover:
      "You receive the approved artwork in the web or print formats listed in the proposal. Review covers subject accuracy, consistent style, intended sizes and any agreed editable source files.",
    process: [
      {
        title: "Describe the subjects and placements",
        desc: "List what each image needs to communicate, where it will appear and any subjects to avoid. Supply brand references and the required web or print dimensions.",
      },
      {
        title: "Approve a sample style",
        desc: "We sketch representative subjects to explore composition, line weight and palette. Choose the direction before detailed artwork starts so the full set follows one reference.",
      },
      {
        title: "Develop the connected artwork set",
        desc: "We draw the remaining pieces in the approved style and review them together. Check subject details and how each composition fits its intended page or package.",
      },
      {
        title: "Prepare the required artwork formats",
        desc: "After approval, we export the scoped vector or high-resolution files for their intended use. Print pieces follow the supplied size, bleed and color requirements.",
      },
    ],
  },
  "ebook-and-report-design": {
    keyword: "annual report and eBook design services",
    problem:
      "Your report has useful information, but long text blocks and inconsistent tables make it difficult to navigate. You need an edition that readers can scan, share or print without losing the meaning of the supplied data.",
    approach:
      "We agree the reading format and page scope, organize the supplied text, and design representative spreads before laying out the full document. Charts are built from your data, with labels and units checked against the source. Digital navigation and print preparation follow the edition you plan to distribute.",
    handover:
      "You receive the scoped digital or print PDF and any agreed template files. Sign-off checks page order, chart figures, contents links and the printer's requirements where applicable.",
    process: [
      {
        title: "Confirm the edition and source material",
        desc: "Provide near-final text, chart data, image permissions and publication plans. We agree page scope and whether the project needs digital, print or separately scoped e-book formats.",
      },
      {
        title: "Review the cover and sample spreads",
        desc: "We design sample pages covering text, charts and a section opening. Approve the reading hierarchy and visual direction before the whole document is laid out.",
      },
      {
        title: "Build and proof the full document",
        desc: "We apply the approved layouts across the supplied content. Review page flow, headings, image captions and chart labels, checking figures against your original data.",
      },
      {
        title: "Check the publishing files",
        desc: "Test the digital contents links and review the final page sequence. Print editions are prepared to the printer's specification, with scoped templates packaged for later updates.",
      },
    ],
  },
  "concept-creation": {
    keyword: "creative concept development",
    problem:
      "Your launch has a deadline and a list of assets, but the team has not agreed what the campaign should say. Production risks becoming separate ads, posts and videos without one idea connecting them.",
    approach:
      "We translate the brief into distinct written concepts, each linking an audience need to the offer. Moodboards show the visual direction without pretending reference images are finished artwork. The selected idea is developed into a key visual and the scoped scripts or sample formats before wider production is commissioned.",
    handover:
      "You receive the agreed concept deck, approved key visual and scoped scripts or storyboards. Final review confirms the core message, production requirements and which reference assets still need replacement or licensing.",
    process: [
      {
        title: "Define the campaign decision",
        desc: "Share the offer, audience, channels and launch constraints. We agree what the campaign must communicate and what evidence or product details the concept can use.",
      },
      {
        title: "Compare distinct creative directions",
        desc: "Review written concepts with headlines and moodboards. We explain how each direction answers the brief so you can choose an idea before committing to production.",
      },
      {
        title: "Develop the chosen idea in context",
        desc: "We turn the approved direction into a key visual and scoped sample formats or storyboards. Review how the same idea carries across the intended channels.",
      },
      {
        title: "Prepare the production reference",
        desc: "We organize the approved concept, wording and visual references into the scoped deck. Confirm the required assets and remaining production decisions before the next team starts work.",
      },
    ],
  },
  "print-design": {
    keyword: "print and brochure design services",
    problem:
      "A brochure, menu or event graphic looks acceptable on screen, but the printer needs exact dimensions, bleed and production settings. Late changes to prices, folds or finishes can make an approved design unusable for the order.",
    approach:
      "We collect the printer's specification before building the artwork, then arrange the supplied copy and imagery around the final size and reading order. Design reviews check real content, including prices and contact details. Approved artwork is prepared for the requested printing method, with proofs reviewed before your production decision.",
    handover:
      "You receive the scoped print-ready PDFs and agreed source or web files. Final approval checks copy, dimensions, bleed and the printer's proof; printing and shipping remain with your chosen supplier.",
    process: [
      {
        title: "Get the printer's specification",
        desc: "Confirm the finished size, folds, paper and any special finishes with your printer. Share final copy and images so the layout starts from the right constraints.",
      },
      {
        title: "Plan the reading order",
        desc: "We organize content around the brochure folds, menu categories or viewing distance. Review the first layout using actual text, prices and contact details rather than placeholders.",
      },
      {
        title: "Prepare the approved artwork for print",
        desc: "After content approval, we apply the supplier's file requirements, including color setup and bleed. Check images, fonts and any special-finish layers against the agreed specification.",
      },
      {
        title: "Review the proof before production",
        desc: "We check the printer's proof with you for layout or artwork issues. You approve production with your supplier after confirming the final content and order details.",
      },
    ],
  },
  "packaging-design": {
    keyword: "packaging design services",
    problem:
      "Your product range needs consistent packaging, but each container or box has different dimensions and required information. A mockup alone cannot show whether artwork will avoid folds, fit the label or reach the supplier correctly.",
    approach:
      "We start with one product and the manufacturer's confirmed dieline, using your approved brand assets and label text. The design establishes a hierarchy for product name, variant and supplied information. Once reviewed in a mockup and on the flat artwork, that direction can extend to the scoped variants or merchandise.",
    handover:
      "You receive the scoped production artwork and mockups, organized by product and variant. Your manufacturer confirms the dieline and proof, while you approve label wording before production.",
    process: [
      {
        title: "Confirm the product and supplier template",
        desc: "Provide the product variants, manufacturer dielines and approved label text. If a basic dieline must be drawn from measurements, the manufacturer confirms it before artwork proceeds.",
      },
      {
        title: "Design one representative product",
        desc: "We place the brand, product name and supplied information on the confirmed template. Review the hierarchy in a mockup before extending the design to other variants.",
      },
      {
        title: "Extend the approved range",
        desc: "Apply the chosen direction to the scoped sizes, flavors or merchandise items. Check variant names, supplied barcodes, folds and print areas on each individual artwork file.",
      },
      {
        title: "Check the supplier's production proof",
        desc: "We prepare the scoped production files to the supplier's specification and review artwork questions. You and the manufacturer confirm wording, physical fit and proofs before manufacturing.",
      },
    ],
  },
};
