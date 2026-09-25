import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Brand Guidelines for Small Business: What to Include",
  metaDescription:
    "What small-business brand guidelines need: logo rules, color codes, type, imagery, voice and templates, plus what a guidelines package should cost you.",
  keywords: [
    "brand guidelines for small business",
    "what to include in brand guidelines",
    "brand style guide",
    "brand book cost",
    "brand voice guidelines",
    "brand guidelines example",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and offers the branding services discussed here.",
  keyTakeaways: [
    "Brand guidelines tell anyone making something for your business how to use the logo, colors, fonts, images and voice. For most small businesses, one or two pages plus editable templates beat a long brand book.",
    "The minimum: logo versions and clear space, color codes (HEX, RGB, CMYK), two fonts with fallbacks, a photo style, three voice rules, and do and don't examples.",
    "Check color pairs against WCAG 2.2: at least 4.5:1 contrast for normal text and 3:1 for large text and for buttons, icons and other interface graphics. Logos are exempt.",
    "Templates for social posts, ads, email and decks are what make guidelines get used. Without them, people guess.",
    "Guidelines are priced on hours. At the BLS median graphic designer wage of $30.27 an hour (May 2025), a 30-hour guide is about $910 in wages alone, before overhead.",
  ],
  content: [
    {
      heading: "What are brand guidelines for a small business?",
      definition:
        "Brand guidelines are a short reference that shows anyone making something for your business how to use the logo, colors, fonts, images and voice. For a small business, one or two pages plus a few editable templates usually do more than a long brand book that nobody opens.",
      body: [
        "Most small businesses feel the need for guidelines at the same moment: the website, the Instagram grid, the ads and the flyers all look like different companies. Usually nobody did anything wrong. Each person just guessed, because nothing was written down.",
        "Guidelines fix the guessing. They are not a strategy document, not a folder of logo files, and not a design system for developers. They are the rules and examples that let a new hire, a freelancer or an agency produce something that looks like you on the first try.",
        "If you don't have an identity yet, start there; our guide to the [brand identity process for startups](/blog/brand-identity-process-for-startups) covers what comes before guidelines.",
      ],
    },
    {
      heading: "The minimum viable brand guide: what fits on one or two pages",
      definition:
        "A minimum viable brand guide covers logo use, colors, fonts, imagery and voice on one or two pages, with an example of each rule done right and done wrong.",
      body: [
        "Start small and make it usable. A one-page guide that people actually open beats a thorough document that lives in a shared drive. You can always add sections when a real problem shows up.",
        "Every small-business guide should have these:",
      ],
      bullets: [
        "Logo versions: primary, horizontal or compact, icon, one-color and reversed, with when to use each.",
        "Clear space and minimum size for the logo, shown visually.",
        "Color palette with HEX, RGB and CMYK codes, and which colors are for backgrounds, text and accents.",
        "Two fonts at most (headings and body), plus a fallback for email and office documents.",
        "Photo style in three or four words, with two example images and one to avoid.",
        "Voice: three rules with a short do and don't line for each.",
        "Three common mistakes shown crossed out: stretched logo, off-palette color, wrong font.",
        "Where to download the files and templates, and who to ask.",
      ],
    },
    {
      heading: "What to include in full brand guidelines",
      body: [
        "A full guide makes sense once several people or outside partners produce work for you every month. The sections are the same as the minimum version, with more detail and more examples.",
      ],
      table: {
        caption: "Sections of a full brand guidelines document",
        headers: ["Section", "What to include", "Common gap"],
        rows: [
          [
            "Logo usage",
            "All versions, clear space, minimum sizes, placement on photos, co-branding rules",
            "No guidance for dark or busy backgrounds",
          ],
          [
            "Color",
            "Primary and secondary palettes with HEX, RGB, CMYK and Pantone; usage ratios; accessible text pairs",
            "Codes that don't match between web and print",
          ],
          [
            "Typography",
            "Typefaces, weights, sizes for headings and body, line spacing, fallbacks, license notes",
            "No fallback for email or Office",
          ],
          [
            "Imagery",
            "Photo style, lighting, subjects, cropping, illustration style, what to avoid",
            "Only showing ideal images, no don'ts",
          ],
          [
            "Icons and graphics",
            "Icon style, stroke weight, patterns, shapes",
            "Mixing icon sets from different sources",
          ],
          [
            "Voice and tone",
            "Personality traits, tone by channel, word list, example rewrites",
            "Adjectives without examples",
          ],
          [
            "Applications",
            "Social posts, ads, email, website, signage, packaging examples",
            "Rules with no real examples",
          ],
        ],
      },
      subsections: [
        {
          heading: "Logo rules that prevent the usual mistakes",
          body: [
            "Most logo misuse comes from a handful of situations: a busy photo behind the logo, a dark background, a tiny size in a footer, or a partner's logo placed too close. Show each situation with the right version of the logo, rather than listing rules in text.",
            "Define clear space using a part of the logo itself, such as the height of a letter, so it scales with the logo. Set a minimum size for screens and for print separately, because thin details disappear faster on paper than on a phone.",
          ],
        },
        {
          heading: "Writing voice rules people can follow",
          body: [
            '"Friendly but professional" doesn\'t help anyone write a caption. Voice rules work when each one comes with a rewrite: the sentence a new hire might write, and the version that sounds like you.',
            "Keep it to three rules. For example, a local bakery might choose: talk like a neighbor, not a corporation; name the ingredient, not the adjective; keep sentences short enough to read on a sign. Add a short word list of terms you always use and terms you never use, such as product names spelled one way only.",
          ],
        },
      ],
    },
    {
      heading: "Color codes: HEX, RGB, CMYK and Pantone",
      body: [
        "Each color needs more than one code, because screens and printers make color differently. List all of them side by side so nobody converts on the fly.",
        "HEX and RGB are for screens: websites, social, email and apps. CMYK is for everyday printing, such as flyers and business cards. Pantone numbers are for print jobs that need exact, consistent color, such as packaging, signage or merchandise.",
        "Screen and print versions of the same color never match perfectly, so have your designer choose each code by eye and approve a printed proof, rather than relying on automatic conversion. Then write down which color is for text, which is for backgrounds and which is only for small accents.",
        'Usage ratios help as much as codes. A simple rule such as "mostly white and one dark neutral, the brand color for buttons and highlights only" stops the common problem of a bright brand color flooding every surface until nothing stands out.',
      ],
    },
    {
      heading: "Accessibility: contrast and legibility rules",
      definition:
        "WCAG 2.2 asks for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, and 3:1 for interface components and meaningful graphics. Logos are exempt.",
      body: [
        "Brand colors end up behind buttons, headlines and body text, so accessibility belongs in the guidelines, not only on the website. The W3C's [overview of WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) says WCAG 2.2 was published in October 2023 and updated in December 2024, and encourages using the latest version.",
        "Under the [contrast minimum criterion](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), normal text needs at least 4.5:1 against its background, and large text (at least 18 point, or 14 point bold) needs 3:1. Text that is part of a logo or brand name has no contrast requirement.",
        "The [non-text contrast criterion](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) asks for at least 3:1 against adjacent colors for interface components and graphical objects, such as button borders, form fields and icons that carry meaning. Its guidance also treats logos as exempt.",
        "The practical step: test every text and background pair in your palette with a contrast checker, and list only the passing pairs in the guidelines. Designers then never have to check again.",
      ],
      table: {
        caption: "Contrast targets to write into your guidelines (WCAG 2.2, level AA)",
        headers: ["Element", "Minimum contrast", "WCAG criterion"],
        rows: [
          ["Body text and small labels", "4.5:1", "1.4.3 Contrast (Minimum)"],
          ["Large text (18 pt, or 14 pt bold, and up)", "3:1", "1.4.3 Contrast (Minimum)"],
          [
            "Buttons, form fields, meaningful icons",
            "3:1 against adjacent colors",
            "1.4.11 Non-text Contrast",
          ],
          ["Logos and brand names", "No requirement", "Exempt under 1.4.3"],
        ],
      },
    },
    {
      heading: "Fonts: licensing and fallbacks",
      body: [
        "Fonts are software, and each one comes with a license that says where you can use it. A font licensed for desktop design may need a separate license for your website, app or ads. Record the license for each font in the guidelines, and in whose name it's held.",
        "Free fonts remove most of that work. The [Google Fonts FAQ](https://fonts.google.com/faq) says its fonts are open source and free, can be used commercially and in logos, and can be used on any surface, including print, websites and apps. Most are under the SIL Open Font License, with some under Apache or the Ubuntu Font License.",
        "Set a short type scale as well: the sizes and weights for main headings, subheadings, body text and small print, on screen and in print. Without one, every designer picks their own sizes and the same brand looks subtly different on every page.",
        "Always name a fallback. Email clients and office software often can't load your brand font, so pick a common system font that looks close, and say where to use it.",
      ],
    },
    {
      heading: "Templates that make guidelines usable",
      body: [
        "Rules tell people what not to do. Templates show them what to do, and they are the part of a guidelines package that gets used every week.",
        "Build templates in the tools your team already uses, such as Canva, Figma or Google Slides, and lock the logo, colors and fonts so only the content changes. The templates most small businesses need:",
      ],
      bullets: [
        "Social posts: a quote, a product, an announcement and a story format.",
        "Ads: a static in square and vertical sizes, with safe areas marked.",
        "Email: a header, a footer and one or two content blocks.",
        "Sales deck or proposal: title, section, content and closing slides.",
        "Documents: letterhead, invoice and a one-page flyer.",
        "Email signature and business card.",
      ],
      callout: {
        title: "From the studio",
        body: "When we hand over guidelines, we include one finished example for every template, made from the client's real content, not lorem ipsum. The first thing most teams do is copy an example and edit it. If the example is real, the copy usually is too.",
      },
    },
    {
      heading: "How much do brand guidelines cost?",
      definition:
        "Brand guidelines are priced on design hours. A one-page guide takes far less time than a full brand book with templates, and the provider type changes the rate, not the underlying hours.",
      body: [
        "For a US reference point, the Bureau of Labor Statistics reports a May 2025 median wage of $30.27 an hour for [graphic designers](https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm). That's what an employee earns, not what a freelancer, studio or agency bills, since those rates also cover overhead, tools and profit.",
        "The table below shows illustrative hours by scope, based on how long each set of deliverables usually takes to design, write and revise. As an illustrative calculation, 30 hours at the BLS median comes to about $910 in wages alone.",
        "Freelancers usually cost least per hour but may not include templates or voice guidelines. Studios and agencies cost more per hour and usually bundle strategy, templates and rollout support. For offshore pricing in PKR, see our guide to logo design cost in Pakistan.",
        "To compare quotes fairly, ask each provider for the same things in writing: the sections included, how many templates and in which tools, whether accessible color pairs are tested, how many revision rounds are included, and whether you receive the editable source file as well as the PDF.",
      ],
      table: {
        caption:
          "What drives guidelines cost: illustrative hours by scope (our planning estimates, not quotes)",
        headers: ["Scope", "Includes", "Illustrative hours"],
        rows: [
          ["One-page guide", "Logo use, colors, fonts, imagery, voice, do and don'ts", "6 to 12"],
          [
            "Standard guide",
            "Full sections, accessible color pairs, 6 to 10 templates",
            "20 to 40",
          ],
          [
            "Full brand book",
            "Detailed sections, voice guide, 15+ templates, rollout session",
            "60 to 120",
          ],
        ],
      },
    },
    {
      heading: "Rolling guidelines out to staff, freelancers and agencies",
      body: [
        "Guidelines only work if people can find them in the moment they need them. Treat the rollout as part of the project, not an afterthought:",
      ],
      bullets: [
        "Put the guide, logo files, fonts and templates in one shared folder or brand portal with a short link.",
        "Walk the team through it in a 30-minute session, using real past work as examples.",
        "Send the link in every brief to freelancers and agencies, and ask them to confirm they've read it.",
        "Name one owner who approves exceptions and updates the guide.",
        "Review the guide once or twice a year, and after any rebrand or new product line.",
      ],
      subsections: [
        {
          heading: "When your guidelines keep getting ignored",
          body: [
            "Repeated drift usually means the guide is too long, the templates are missing, or the identity itself no longer fits the business. If it's the last one, our [rebrand vs refresh decision framework](/blog/rebrand-vs-refresh-a-founders-decision-framework) helps you decide how much to change.",
          ],
        },
      ],
    },
    {
      heading: "When do you need a design system instead?",
      body: [
        "Brand guidelines cover how the brand looks and sounds. A design system goes further for digital products: reusable interface components, spacing and layout rules, and code that developers can use directly.",
        "You probably need one when you have a web app or product UI, more than one developer building screens, or a website that keeps growing new page types. Our post on [design systems for small teams](/blog/design-systems-for-small-teams) explains how to start small.",
        "If you'd like help, Pixel2Tech's [branding and design team](/services/branding-and-design) builds guidelines and the templates that go with them, from a one-page guide to a full brand book.",
      ],
    },
  ],
  faqs: [
    {
      q: "How many pages should brand guidelines be?",
      a: "There's no standard length. For most small businesses, one or two pages covering logo use, colors, fonts, imagery and voice is enough, plus editable templates. Add pages when real problems appear, such as partners misusing the logo or inconsistent ad designs. A longer guide only helps if people actually open it.",
    },
    {
      q: "What is the difference between a style guide and brand guidelines?",
      a: "The terms are often used interchangeably. When they're separated, brand guidelines cover the whole identity (logo, color, type, imagery and voice), while a style guide is narrower: either the visual rules alone, or an editorial guide to spelling, grammar and formatting. Ask any provider which one they mean before you compare quotes.",
    },
    {
      q: "Do I need brand guidelines if I only have a logo?",
      a: "Yes, a short one. A single page with logo versions, clear space, color codes and two fonts stops the drift that starts as soon as a second person makes something for you. It also makes your logo files usable, because it tells people which version to use where.",
    },
    {
      q: "How much do brand guidelines cost?",
      a: "It depends on scope and who does the work, because guidelines are priced on hours. The BLS puts the May 2025 median wage for US graphic designers at $30.27 an hour, so a 30-hour standard guide carries about $910 in wages before overhead and profit. Freelancer, studio and agency quotes vary by how much they include.",
    },
    {
      q: "What format should brand guidelines be delivered in?",
      a: "A PDF for easy sharing, plus the editable source file so the guide can be updated later. You should also receive the logo files, font files or links with license details, and templates in the tools your team uses, such as Canva or Figma. A shared folder or brand portal keeps everything in one place.",
    },
  ],
  sources: [
    {
      label: "W3C: Understanding WCAG 2.2 contrast (minimum)",
      href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
    },
    {
      label: "W3C: Understanding WCAG 2.2 non-text contrast",
      href: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
    },
    { label: "W3C: WCAG 2 overview", href: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
    { label: "Google Fonts: Frequently asked questions", href: "https://fonts.google.com/faq" },
    {
      label: "BLS Occupational Outlook Handbook: Graphic designers",
      href: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm",
    },
  ],
  internalLinks: [
    {
      label: "Brand identity process for startups",
      to: "/blog/brand-identity-process-for-startups",
    },
    { label: "Logo design cost in Pakistan", to: "/blog/logo-design-cost-in-pakistan" },
    {
      label: "Rebrand vs refresh: a founder's decision framework",
      to: "/blog/rebrand-vs-refresh-a-founders-decision-framework",
    },
    { label: "Design systems for small teams", to: "/blog/design-systems-for-small-teams" },
    { label: "Branding and design", to: "/services/branding-and-design" },
  ],
  cta: {
    title: "Is your brand drifting across your site, social and ads?",
    body: "Send us a few recent examples from each channel. We'll point out where the inconsistency comes from and suggest the smallest set of guidelines and templates that would fix it.",
  },
};

export default post;
