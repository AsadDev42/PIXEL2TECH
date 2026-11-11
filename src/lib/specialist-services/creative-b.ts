import { BookOpen, Lightbulb, Package, Printer } from "lucide-react";
import type { SpecialistServiceCopy } from "@/lib/specialist-services";

/**
 * Creative design specialist pages, part B: eBooks and reports, concepts,
 * print, and packaging and merchandise. Same truth rules as service-pages.ts.
 * We design and prepare files. We don't print or manufacture anything.
 */
export const CREATIVE_SERVICES_B: SpecialistServiceCopy[] = [
  {
    slug: "ebook-and-report-design",
    title: "eBooks & report design",
    parent: "Branding & Design",
    icon: BookOpen,
    menuDescription: "Lead magnets, reports and book layouts",
    bestFor: "A guide, whitepaper or report that needs a professional layout.",
    metaTitle: "Annual report design and eBook design services | Pixel2Tech",
    metaDescription:
      "Annual report design and eBook design services for businesses in the US, UK and EU. Lead magnets, whitepapers and book layouts. Fixed quote after a call.",
    serviceType: "eBook and report design",
    h1: "Annual report and eBook design",
    h1Highlight: "for businesses and agencies",
    answer:
      "Pixel2Tech, a design studio in Lahore, Pakistan, that works with businesses in the US, UK, Canada and the EU, offers annual report design and eBook design services. We lay out lead magnets, whitepapers, impact reports and books from your text, and deliver files ready to publish online or send to your printer.",
    tags: ["eBooks", "Annual reports", "Book covers"],
    deliverables: [
      {
        title: "eBooks and lead magnets",
        desc: "Guides, checklists and playbooks laid out as PDFs with a clickable contents page and links back to your website.",
      },
      {
        title: "Whitepapers and reports",
        desc: "Long reports with clear headings, pull quotes and sidebars, so readers can find the sections they need.",
      },
      {
        title: "Annual and impact reports",
        desc: "Annual report design that turns your figures and stories into spreads your board, investors or donors can follow.",
      },
      {
        title: "Charts and infographics",
        desc: "Charts, tables and diagrams redrawn in your brand colors from the data you supply.",
      },
      {
        title: "Book covers and interiors",
        desc: "Front covers, spines and back covers, plus interior layout for print and e-book editions.",
      },
      {
        title: "Templates for later editions",
        desc: "An editable template, so your team can produce the next report or guide in the same style.",
      },
    ],
    audiences: {
      startups:
        "You need a whitepaper or guide that explains your product to buyers and investors in more depth than a web page can.",
      smbs: "You have a useful guide or annual review in a Word file, and it needs to look as professional as the rest of your brand.",
      dtc: "You want a lookbook, product guide or recipe eBook to give away in exchange for email sign-ups.",
      agencies:
        "You need a designer to lay out client reports and lead magnets to your templates and deadlines.",
    },
    priceDrivers: [
      "Page count and how much text each page carries",
      "How many charts, tables and infographics we redraw",
      "A cover only, an interior only, or both",
      "Print, digital or both editions, and how many file versions",
      "Whether you need an editable template for later editions",
    ],
    work: [
      {
        slug: "book-cover-design-portfolio",
        note: "Covers for finance, business and self-help books, shown as hardcover, paperback and e-book mockups.",
      },
    ],
    articles: [
      {
        slug: "email-list-growth-without-discounts-service-businesses",
        title: "Lead magnets that grow an email list",
        desc: "Pick a guide or checklist that earns subscribers who want the service.",
      },
      {
        slug: "colour-type-choices-small-brand-look-established",
        title: "Color and type for a small brand",
        desc: "Choose colors and typefaces that make a small brand look established.",
      },
      {
        slug: "outsource-graphic-design-to-pakistan",
        title: "Outsourcing graphic design to Pakistan",
        desc: "A buyer's guide to working with a design team abroad.",
      },
    ],
    faqs: [
      {
        q: "What do your eBook design services include?",
        a: "We lay out your finished text and images, design the cover and redraw any charts in your brand colors. You get a PDF for the web with working links, a print PDF if you need one, and the files listed in your proposal. Writing and editing the text are separate services, which we can quote alongside the design. We agree the page count on the scoping call.",
      },
      {
        q: "How much does annual report design cost?",
        a: "We don't publish a price list, because a short lead magnet and a long annual report full of charts are very different jobs. After a free scoping call we send a written proposal with a fixed price, the page count, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Which file formats do you deliver, and can you work with our printer?",
        a: "For digital editions we supply a PDF with a clickable contents page and links. For print we supply a high-resolution PDF in CMYK with bleed, set up to your printer's specification, and we can send it to them directly. If you plan to sell through e-book stores, tell us early, because a reflowable EPUB needs a different setup from a fixed PDF.",
      },
      {
        q: "Do we own the final eBook and report files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the final PDFs and any template listed in the scope. Fonts and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
      {
        q: "How long does an eBook or report project take?",
        a: "It depends on the page count, how many charts there are and how quickly text and feedback arrive. A short lead magnet takes much less time than a long annual report with several review rounds. We set out the timeline in the proposal. If you have a print or launch date, we plan the schedule backward from it.",
      },
    ],
    ctaTitle: "Get a fixed quote for your eBook or report",
    firstPhase: {
      heading: "Start with one document.",
      body: "Send the text, any data for charts and an example of a report or guide you like. We can agree the page count, the cover direction and the file formats, then lay out sample spreads for your feedback before we design the full document.",
      inputs: [
        "Final or near-final text",
        "Data for charts and tables",
        "Print, digital or both, and your printer",
      ],
    },
  },

  {
    slug: "concept-creation",
    title: "Concept creation",
    parent: "Branding & Design",
    icon: Lightbulb,
    menuDescription: "Campaign ideas, moodboards and storyboards",
    bestFor: "A campaign or launch that needs one clear idea before production.",
    metaTitle: "Creative concepts and campaign ideas for brands | Pixel2Tech",
    metaDescription:
      "Creative concepts and campaign ideas for brands in the US, UK and EU. Written concepts, moodboards, key visuals and ad scripts. Fixed quote after a call.",
    serviceType: "Creative concept development",
    h1: "Creative concepts and campaign ideas",
    h1Highlight: "for brands planning a launch",
    answer:
      "Pixel2Tech, a design studio in Lahore, Pakistan, that works with businesses in the US, UK, Canada and the EU, develops creative concepts and campaign ideas for launches and ad campaigns. We turn your brief into written concepts with moodboards, key visuals and ad scripts or storyboards, so you can choose a direction before production starts.",
    tags: ["Campaign concepts", "Moodboards", "Storyboards"],
    deliverables: [
      {
        title: "Campaign concepts",
        desc: "Written concepts, each with a core idea, a headline and a note on how it answers your brief.",
      },
      {
        title: "Moodboards",
        desc: "Boards of color, type, photography and reference images that show how each concept will look.",
      },
      {
        title: "Key visuals",
        desc: "A finished hero image or layout for the chosen concept, which later ads, posts and print pieces build on.",
      },
      {
        title: "Ad scripts and storyboards",
        desc: "Scripts and frame-by-frame storyboards for video ads, so editors and creators know what to shoot and cut.",
      },
      {
        title: "Launch ideas",
        desc: "A plan for how a product launch or announcement runs across your website, email, social posts and paid ads.",
      },
      {
        title: "Sample formats",
        desc: "The chosen concept applied to a few ad sizes, social posts or a page header, so you can judge it in real formats.",
      },
    ],
    audiences: {
      startups:
        "You're launching a product and need one clear idea for the launch before you spend money on ads and video.",
      smbs: "Your ads and posts each look different, and you want one campaign idea that ties them together.",
      dtc: "Your current ads have stopped performing, and you need new angles and hooks to test.",
      agencies:
        "You need extra concept capacity for client pitches and campaigns, working to your process and deadlines.",
    },
    priceDrivers: [
      "How many concepts you want to see in the first round",
      "Moodboards only, or finished key visuals as well",
      "How many video ads need scripts and storyboards",
      "How many sample formats we mock up for the chosen concept",
      "Whether we also produce the full campaign after you approve the concept",
    ],
    work: [
      {
        slug: "nayyer-carpets-creative-direction-mockups",
        note: "Creative direction and realistic room mockups that gave the website and social posts one consistent look.",
      },
      {
        slug: "brand-identity-design-collection",
        note: "Identity boards that show a logo, palette and type on cups, bags and apparel, so a direction can be judged on one page.",
      },
    ],
    articles: [
      {
        slug: "ad-creative-testing-small-budgets",
        title: "Ad creative testing on a small budget",
        desc: "How to learn something useful from every creative test.",
      },
      {
        slug: "short-form-video-hooks-first-three-seconds",
        title: "Short-form video hooks",
        desc: "Ways to hold attention past the first three seconds.",
      },
      {
        slug: "brand-photography-brief-consistent-channels",
        title: "Write a brand photography brief",
        desc: "Keep the photos on every channel looking like one business.",
      },
    ],
    faqs: [
      {
        q: "What is creative concept development?",
        a: "It is the stage before production where we decide what a campaign will say and how it will look. We read your brief and review your competitors' ads and your past results. Then we present written concepts with moodboards. Once you pick one, we develop it into key visuals and scripts that our team, your team or another studio can produce.",
      },
      {
        q: "How much does concept development cost?",
        a: "We don't publish a price list, because one launch idea with a moodboard and a full campaign with key visuals and several storyboards are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "What do we receive at the end of the concept stage?",
        a: "You get a PDF deck with the chosen concept, its headline and supporting lines, the moodboard, the key visual and any scripts or storyboards in your scope. We also supply the key visual's source files. Your media buyer, video editor or printer can then work from the same reference, whether or not we produce the campaign.",
      },
      {
        q: "Do we own the concept and the files?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the approved concept, the key visual and the scripts. Moodboards often use reference images from other sources for direction only, and we replace them with licensed or original images in the final work. We tell you which fonts or stock images need a paid license.",
      },
      {
        q: "How long does concept development take?",
        a: "It depends on how many concepts you want, whether scripts and storyboards are included, and how many review rounds you need. A clear brief with past results and examples of ads you like saves time in the first round. We put the timeline in the proposal and plan it backward from your launch date.",
      },
    ],
    ctaTitle: "Get a fixed quote for your campaign concept",
    firstPhase: {
      heading: "Start with one campaign brief.",
      body: "Tell us what you're launching, who it's for and where the campaign will run. We can agree how many concepts to present, which formats to mock up and whether scripts belong in the first round.",
      inputs: [
        "The product, offer and launch date",
        "Audience and the channels you'll use",
        "Past ads and their results",
      ],
    },
  },

  {
    slug: "print-design",
    title: "Print design",
    parent: "Branding & Design",
    icon: Printer,
    menuDescription: "Brochures, menus, flyers and signage",
    bestFor: "Brochures, menus or signage that need clean, print-ready files.",
    metaTitle: "Print and brochure design services | Pixel2Tech",
    metaDescription:
      "Print and brochure design services for businesses in the US, UK and EU. Brochures, flyers, menus, posters, business cards and signage as print-ready files.",
    serviceType: "Print design",
    h1: "Print and brochure design services",
    h1Highlight: "for small businesses and agencies",
    answer:
      "Pixel2Tech, a design studio in Lahore, Pakistan, that works with businesses in the US, UK, Canada and the EU, offers print and brochure design services that also cover flyers, menus, posters, business cards and signage. We set up each file in CMYK with bleed to your printer's specification and send it to you or straight to your printer.",
    tags: ["Brochures", "Menus", "Print-ready files"],
    deliverables: [
      {
        title: "Brochures and catalogs",
        desc: "Folded brochures, booklets and product catalogs, laid out for the fold and page count your printer uses.",
      },
      {
        title: "Flyers and posters",
        desc: "Flyers, posters and leaflets for events, offers and in-store promotions, sized to the paper you order.",
      },
      {
        title: "Menus",
        desc: "Restaurant and cafe menus with clear categories, descriptions and prices, in print and PDF versions.",
      },
      {
        title: "Business cards and stationery",
        desc: "Business cards, letterheads, envelopes and compliment slips that follow your brand guidelines.",
      },
      {
        title: "Signage and large format",
        desc: "Shop signs, banners, roll-ups and window graphics, set up at the scale and resolution large-format printers need.",
      },
      {
        title: "Print-ready files",
        desc: "PDFs in CMYK with bleed, crop marks and embedded fonts. We check each one against your printer's specification before handoff.",
      },
    ],
    audiences: {
      startups:
        "You need business cards, a one-page leave-behind and an event banner before a launch or trade show.",
      smbs: "You reorder flyers, menus or brochures often and want artwork your printer can use without fixes.",
      dtc: "You need inserts, thank-you cards and pop-up stand signage that match your online store.",
      agencies:
        "You need print artwork for client campaigns, set up to the printer's specification and your deadlines.",
    },
    priceDrivers: [
      "How many pieces you need, and how many pages each one has",
      "A new design, or an update to an existing design or template",
      "How much copy, photography and illustration each piece needs",
      "Large-format signage or special finishes such as foil or spot UV",
      "How many sizes, languages or versions of each piece you need",
    ],
    work: [
      {
        slug: "sweet-temptation-logo-menu-design",
        note: "Dessert menu layouts with clear categories and price rows, designed alongside the logo for a UK client.",
      },
      {
        slug: "book-cover-design-portfolio",
        note: "Book covers with high-contrast type that stays readable on a shelf and as a small online thumbnail.",
      },
      {
        slug: "brand-identity-design-collection",
        note: "Identity boards with each brand applied to business cards, signage and other printed items.",
      },
    ],
    articles: [
      {
        slug: "brand-guidelines-for-small-business",
        title: "Brand guidelines for small businesses",
        desc: "What to put in a brand guide so printed pieces stay consistent.",
      },
      {
        slug: "colour-type-choices-small-brand-look-established",
        title: "Color and type for a small brand",
        desc: "Choose colors and typefaces that make a small brand look established.",
      },
      {
        slug: "outsource-graphic-design-to-pakistan",
        title: "Outsourcing graphic design to Pakistan",
        desc: "A buyer's guide to working with a design team abroad.",
      },
    ],
    faqs: [
      {
        q: "What do your print and brochure design services include?",
        a: "We design the artwork, set up the file to your printer's specification and check the printer's proof with you. That covers brochures, flyers, menus, posters, business cards, stationery and signage. We don't print or ship anything ourselves. You order printing from a printer you choose, and we can send the files to them and answer their technical questions.",
      },
      {
        q: "How much does print design cost?",
        a: "We don't publish a price list, because a single flyer and a long catalog with product photos are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "What does print-ready mean, and which files do we get?",
        a: "A print-ready file is one your printer can use without changes. We supply a high-resolution PDF in CMYK with bleed, crop marks and embedded fonts, at the size and in the format your printer asks for. Where your proposal includes them, you also get the editable source files and a web version for email or your website.",
      },
      {
        q: "Do we own the print artwork?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the print-ready files and any source files listed in the scope, so you can reprint with any printer. Fonts and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
      {
        q: "How long does a print design project take?",
        a: "It depends on how many pieces you need, how much content is ready and how many review rounds you need. A single flyer takes far less time than a catalog. Printers also need time for proofs, printing and delivery, so we plan the design schedule backward from the date you need the printed pieces in hand.",
      },
    ],
    ctaTitle: "Get a fixed quote for your print design",
    firstPhase: {
      heading: "Start with one printed piece.",
      body: "Tell us what the piece is for, where people will see it and which printer you plan to use. We can agree the size, paper and finish, get your printer's specification, and design the first piece before adding the rest.",
      inputs: [
        "Size, quantity and where it will be used",
        "Your printer's specification, if you have it",
        "Logo, brand colors, copy and photos",
      ],
    },
  },

  {
    slug: "packaging-design",
    title: "Packaging & merchandise design",
    parent: "Branding & Design",
    icon: Package,
    menuDescription: "Labels, boxes, mockups and branded merch",
    bestFor: "A product line that needs labels, boxes or merch ready for a supplier.",
    metaTitle: "Packaging design services for product brands | Pixel2Tech",
    metaDescription:
      "Packaging design services for product brands in the US, UK and EU. Product packaging design, labels, boxes, dielines and merch. Fixed quote after a call.",
    serviceType: "Packaging and merchandise design",
    h1: "Packaging design services",
    h1Highlight: "for product brands and online stores",
    answer:
      "Pixel2Tech, a design studio in Lahore, Pakistan, that works with businesses in the US, UK, Canada and the EU, offers packaging design services and merchandise design. We design labels, boxes and bags on your manufacturer's dielines, make product mockups, and prepare artwork for branded apparel, mugs and totes, ready to send to your supplier.",
    tags: ["Labels", "Dielines", "Branded merch"],
    deliverables: [
      {
        title: "Labels",
        desc: "Product labels and stickers sized to your containers, with space for the barcode, ingredients and legal text you supply.",
      },
      {
        title: "Boxes and bags",
        desc: "Artwork for boxes, sleeves, mailers and bags, placed on your manufacturer's dieline and kept clear of folds and glue areas.",
      },
      {
        title: "Dieline setup",
        desc: "If your supplier has no template, we draw a basic dieline from your measurements for them to confirm before artwork starts.",
      },
      {
        title: "Product mockups",
        desc: "Realistic mockups of the packed product for your store, ads and retailer pitches, made before anything goes into production.",
      },
      {
        title: "Branded merchandise",
        desc: "Merchandise design for T-shirts, hoodies, caps, mugs, tote bags and event giveaways, set up to each supplier's print area.",
      },
      {
        title: "Production files",
        desc: "Print-ready files with CMYK or spot colors, bleed and separate layers for finishes such as foil or varnish, as your supplier asks.",
      },
    ],
    audiences: {
      startups:
        "You're launching a physical product and need packaging and store mockups before the first production run.",
      smbs: "Your products sit on a shelf next to competitors, and the labels no longer match your current brand.",
      dtc: "You ship direct to customers and want mailer boxes, inserts and labels that match your website and ads.",
      agencies:
        "You need packaging or merch artwork for a client, prepared on the supplier's templates and to your deadlines.",
    },
    priceDrivers: [
      "How many products, sizes and variants need artwork",
      "New packaging, or a refresh of packaging you already sell",
      "Whether your supplier provides dielines, or we draw them from measurements",
      "How many mockups you need for your store, ads or retailer pitches",
      "How many merchandise items and print methods are in scope",
    ],
    work: [
      {
        slug: "brand-identity-design-collection",
        note: "Identity boards that apply each brand to packaging, cups, bags and apparel mockups.",
      },
      {
        slug: "sweet-temptation-logo-menu-design",
        note: "Logo and menu identity for a UK dessert brand, with bag, packaging and stationery mockups in the gallery.",
      },
    ],
    articles: [
      {
        slug: "branding-beyond-the-logo",
        title: "Branding beyond the logo",
        desc: "Give customers a clear reason to choose your product.",
      },
      {
        slug: "brand-guidelines-for-small-business",
        title: "Brand guidelines for small businesses",
        desc: "What to put in a brand guide so every supplier applies it the same way.",
      },
      {
        slug: "shopify-product-page-redesign-brief",
        title: "Redesign a Shopify product page",
        desc: "What to fix first when product photos and pages need work.",
      },
    ],
    faqs: [
      {
        q: "What do your packaging design services include?",
        a: "We design artwork for labels, boxes, bags and mailers, place it on your manufacturer's dieline and make mockups of the finished product. We also design branded merchandise such as apparel, mugs and totes. We don't manufacture or print anything. You order production from your own supplier, and we prepare the files to their specification and answer their artwork questions.",
      },
      {
        q: "How much does packaging design cost?",
        a: "We don't publish a price list, because one label and a full range of boxes, mailers and merch across several variants are very different jobs. After a free scoping call we send a written proposal with a fixed price, the deliverables, the revision rounds and a timeline. Work starts only once you accept it.",
      },
      {
        q: "Do you work with our manufacturer's dielines?",
        a: "Yes, and we prefer to. Your manufacturer's dieline shows the exact cut lines, folds and glue areas for the box they will make, so the artwork lines up with it. If you don't have a supplier yet, we can draw a basic dieline from your measurements. Your manufacturer should confirm the dieline, and you should confirm the legal text on labels, before production.",
      },
      {
        q: "Do we own the packaging and merchandise artwork?",
        a: "Yes. Final deliverables transfer to you once the project is paid in full, as described in your proposal. That includes the production files and mockups listed in the scope, so you can reorder from any supplier. Fonts and stock images stay under their own licenses, which pass to you where the license allows, and we tell you which ones need a paid license.",
      },
      {
        q: "How long does packaging design take?",
        a: "It depends on how many products and variants need artwork, whether dielines are ready, and how many review rounds you need. Manufacturers also need time for samples, proofs and production, so we plan the design schedule backward from your production or launch date. We set out the timeline in the proposal before work starts.",
      },
    ],
    ctaTitle: "Get a fixed quote for your packaging design",
    firstPhase: {
      heading: "Start with one product.",
      body: "Tell us what the product is, where it will be sold and who will manufacture the packaging. We can agree the formats, request the supplier's dielines and design one product's packaging before we extend it to other variants.",
      inputs: [
        "Product sizes, variants and where they sell",
        "Supplier dielines or exact measurements",
        "Brand guidelines, logo and label text",
      ],
    },
  },
];
