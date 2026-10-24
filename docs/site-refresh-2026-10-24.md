# Pixel2Tech site refresh — 24 October 2026

## Owner decisions applied

- Preserve the original three-column moving hero collage exactly as requested in the latest screenshot. The proposed three-project hero replacement is superseded and removed.
- Do not add public prices, new team/profile links or a new warranty.
- Use founder names for studio-authored blog posts: Usama Farooq; preserve existing named bylines. The headless Shopify guide retains its existing Asad biography and is credited to Asad Farooq.
- Studio heading: “One studio. Six people. 50+ projects.”

## Implemented

- Original hero collage preserved, with clearer studio positioning and written-quote copy.
- Home selected-work section with the six requested categories and actual projects: Hi Street, carGO Health, LinkedIn posting agent, performance marketing videos, MADLUVV and brand identity design.
- Video Editing introduction rebuilt as a dark panel with shorter typography, format labels, three linked project previews and a prominent collection action.
- Store/website engagement filters distinguish direct clients and agency partner work. Home's featured ecommerce selection prioritises explicitly tagged direct clients.
- Dedicated agency partner page with accurately labelled Acely, Skin Deep and Holloway work.
- Three industry pages: beauty/DTC ecommerce, professional services and healthcare, plus an industry index.
- Careers enquiry page without invented vacancies, and a factual press information page without invented mentions.
- Filterable `/results` page containing five named, documented project outcomes. These are delivery summaries, not measured business-performance claims.
- Practical Shopify review checklist with newsletter signup, download and measurement worksheet. Existing signup backend reused.
- Phone label contains an actual space before “(optional)” in the shared Home/Contact form.
- X icon replaces the Twitter bird. Footer labels are plain text, and LinkedIn links are outside team-name headings.
- Removed three testimonial entries backed by stock videos and stock portraits; retained the two uploaded client videos under their existing anonymous role descriptions.
- Removed the unverified Escada logo from the public brand strip pending confirmation of the intended entity and permission.
- Founder Person attribution for blog posts, removed blog keywords meta tag, distinct social descriptions and verified Twitter images.
- Added Home breadcrumb schema and a stable WebSite ID; existing Home/blog FAQ schemas and WebSite schema retained.
- Full `/llms.txt` generated from the same article and portfolio data as the site, covering 96 articles and 132 projects.
- New pages included in sitemap and footer discovery links.
- Reintroduced `/careers` is exempt from old theme-removal rules; legacy demo job routes remain 410.
- HTML revalidates after deployment so browsers do not reuse week-old portfolio HTML with obsolete script URLs. Long-lived media caching retained.

## Already present / verified

- Latest-insights thumbnails were already implemented; preserved.
- Booking modal already used a lazy import and only created a Calendly iframe on open; explicit iframe lazy loading added.
- Home and blog FAQs use the same data for visible content and JSON-LD.
- The team carousel's second copy exists for seamless looping and is hidden from assistive technology; it is not a second visible team section. The shared team renderer is retained.
- Every case-study page already has a delivered-outcome block; numerical performance evidence is not available in the supplied content.

## Evidence still needed (not invented or published)

- Client-approved business metrics, including baseline, result, measurement dates, source and permission. The request for five metric-led case studies and numerical results in every case cannot be completed without these records.
- Permission to name the two anonymous video clients and any replacement testimonials, brand/logo permission and verified press features.
- Partner/certification evidence. No Shopify, Google, Meta or compliance badges were fabricated; earning external certifications is outside a code change.
- Team biographies, experience dates and signature-project attribution for Gul E Zahra, Ahsan Mushtaq and Noman Ahmed. New profile links are explicitly excluded by the owner.
- Original research and quarterly founder-led articles require actual source material and editorial review; no invented research or recurring publishing job was created.
- A physical-phone test needs an actual device. Browser mobile viewport checks cover layout and interaction, not physical-device performance.

## Verification

- TypeScript and changed-file ESLint checks.
- Production build and deployment-size check against the hosting limit.
- `node scripts/verify-site-refresh.mjs`: Home, new landing pages, all 96 article authors/schemas, 132 work-discovery links, sitemap, legacy careers handling, HTML cache headers and downloadable checklist.
- Browser checks of the preserved hero collage, Home portfolio, video banner, engagement filters, results filters, mobile overflow and lazy booking flow.

Run HTTP checks against another deployed origin with `VERIFY_BASE_URL`.

## Native booking and team section follow-up

- Replaced the scheduling embed with a website-owned date/time and details flow.
- Google Calendar adapter checks free/busy, creates an invitation and requests Google Meet conferencing. Owner: sales@pixel2tech.com.
- Google OAuth is approved for sales@pixel2tech.com and credentials are stored in the production project environment. A real owner-only event and successful Google Meet conference were verified, then the temporary test event was removed. Secure setup notes: `docs/google-calendar-booking.md`.
- Redesigned StudioCommitments with a dark feature panel and four visual cards, immediately below What clients say.
- Changed the studio heading to One studio. One team. 50+ projects. The original hero collage remains unchanged.
- Verified eight booking logic/adapter tests, TypeScript, changed-file lint, production build, existing 96-article/132-project checks and a local browser booking with a mocked Google backend. The Google owner authorization, real Calendar event and Meet conference were verified. Inbox delivery was not independently checked.

- At the owner's request, Asad Farooq is listed as CEO & Co-Founder across shared team data, his profile, SEO copy and Pixel2Tech timeline. Usama remains CEO & Founder.
