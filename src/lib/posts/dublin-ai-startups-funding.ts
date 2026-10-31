import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "10 Dublin AI Startups to Know (Funding & What They Do)",
  metaDescription:
    "Meet 10 Dublin AI startups working in security, fleet safety, satellites, finance and more, with funding figures checked against published sources.",
  disclosure:
    "Company and funding information checked October 30, 2026. Funding figures are rounded public reports and database estimates, not audited accounts. Some refer to cumulative funding and others to a specific disclosed round; the distinction is called out where relevant. This is a selected list, not a ranking of Dublin's ten most-funded AI companies.",
  keyTakeaways: [
    "Dublin's AI startup scene spans security, workplace safety, space, finance, software infrastructure and consumer research.",
    "Public funding totals vary across sources; reported figures should be treated as snapshots rather than precise rankings.",
    "Several of these companies are building infrastructure and applied AI products for specific industries, not general-purpose chatbots.",
  ],
  content: [
    {
      heading: "Dublin's AI scene is broader than chatbots",
      body: [
        "When people talk about AI startups, the conversation often goes straight to chatbots and large language models. Dublin's startup ecosystem tells a wider story. Companies are applying machine learning to security workflows, fleet operations, workplace safety, satellite imagery, financial administration, software infrastructure and market research.",
        "Below are ten Dublin-based or Dublin-founded companies worth knowing. The selection is intended as a snapshot across different kinds of applied AI, not a definitive ranking. Funding figures are rounded from public company announcements and startup databases checked on October 30, 2026. Sources may count disclosed rounds differently, and some totals include growth investment, so treat each figure as a useful guide rather than an audited number.",
      ],
    },
    {
      heading: "10 Dublin AI startups to know",
      body: [
        "These companies work in different markets, but they share a focus on putting AI to work in a specific operational setting. Explore their products and funding notes below.",
      ],
      subsections: [
        {
          heading: "1. Tines — AI-powered workflows for security and IT",
          body: [
            "[Tines](https://www.tines.com/) helps teams build and run workflows for security and IT operations. Its platform combines automation with AI capabilities, giving technical teams a way to coordinate repetitive work across their tools. Tines announced a $125 million Series C in 2025, bringing its reported total capital raised to about $272 million. [Funding announcement](https://www.prnewswire.com/news-releases/tines-secures-125m-in-series-c-financing-bringing-total-valuation-to-1-125b-302372726.html).",
          ],
        },
        {
          heading: "2. CameraMatics — AI-powered fleet safety",
          body: [
            "[CameraMatics](https://www.cameramatics.com/) uses video telematics and fleet intelligence to help operators improve vehicle safety and day-to-day fleet management. The company announced a growth investment of up to €49 million in June 2026. Public databases report its total funding at roughly $67–72 million, depending on the source and conversion. [Company announcement](https://www.cameramatics.com/resources/cameramatics-secures-up-to-e49m-investment/).",
          ],
        },
        {
          heading: "3. Protex AI — computer vision for workplace safety",
          body: [
            "[Protex AI](https://www.protex.ai/) analyses video from existing cameras to help workplace safety teams identify risks and understand patterns in incidents. The company describes its product as an AI safety platform and reports about $54 million raised to date. That makes it one of the larger funding stories in this selected group. [Company information](https://www.protex.ai/company).",
          ],
        },
        {
          heading: "4. Ubotica Technologies — AI at the edge in space",
          body: [
            "[Ubotica Technologies](https://www.ubotica.com/) develops onboard AI for satellites, helping process Earth-observation data closer to where it is collected. In June 2026, the Irish space technology company announced an $11 million funding round to expand its real-time satellite intelligence work. Dealroom tracks roughly $15 million in total funding. [Latest round announcement](https://www.ubotica.com/news/orbital-ai-pioneer-ubotica-raises-11-million-to-scale-real-time-maritime-intelligence-from-space).",
          ],
        },
        {
          heading: "5. Bronto — AI-native observability and log data",
          body: [
            "[Bronto](https://bronto.io/) is building a log data platform for observability at large scale. Its focus is the infrastructure engineering teams use to investigate what their software is doing, including in the AI era. The Dublin-founded company announced a $14 million seed round in 2025. [Bronto's funding announcement](https://bronto.io/blog/announcing-our-14m-seed-fundraising).",
          ],
        },
        {
          heading: "6. Seapoint — an AI-native financial home for startups",
          body: [
            "[Seapoint](https://www.seapoint.co/) brings financial automation, reporting and financial products together for startups. The company says it has raised €10 million to date, including a €7.5 million seed round. Its product connects financial information so founders can get a clearer view of their business and act on it. [About Seapoint](https://www.seapoint.co/about-us).",
          ],
        },
        {
          heading: "7. TensorX — dedicated infrastructure for AI inference",
          body: [
            "[TensorX](https://tensorx.ai/) is developing AI inference infrastructure on dedicated European GPU capacity. Its pitch centres on performance and data sovereignty: organisations can run AI workloads within an EU-based infrastructure environment. Dealroom lists about $10 million in funding, a rounded database estimate. [About TensorX](https://tensorx.ai/about/).",
          ],
        },
        {
          heading: "8. Dubsof — custom AI workflows and software infrastructure",
          body: [
            "[Dubsof](https://www.dubsof.com/) helps organisations build bespoke software infrastructure to integrate AI into existing processes. The Dublin startup announced a $6.5 million seed round in October 2026. Its story reflects a practical challenge facing businesses: useful AI often needs to connect with the systems and workflows teams already use. [Funding coverage from The Irish Times](https://www.irishtimes.com/business/2026/10/13/dublin-ai-start-up-dubsof-raises-more-than-5m-in-round-led-by-blueyard-capital/).",
          ],
        },
        {
          heading: "9. Bounce Insights — AI-powered consumer research",
          body: [
            "[Bounce Insights](https://www.bounceinsights.com/) helps brands research consumer behaviour, test ideas and understand how people respond to products and campaigns. The company uses AI in survey design and analysis, alongside consumer panels and research expertise. Trinity College Dublin reports that Bounce has raised more than €6.5 million since 2019. [Trinity Innovation profile](https://www.tcd.ie/innovation/news-and-events/stories-and-impacts/launchbox-alumni-bounce-insights/).",
          ],
        },
        {
          heading: "10. Jentic — connecting AI agents to APIs",
          body: [
            "[Jentic](https://jentic.com/) is building an integration layer that helps AI agents connect to software and APIs. The goal is to let agents interact with business systems through a more structured and governed layer. Jentic announced a €4 million pre-seed round in late 2024; later company materials describe approximately $4.5 million in pre-seed funding. [Jentic press information](https://jentic.com/blog/press).",
          ],
        },
      ],
    },
    {
      heading: "What these companies reveal about Dublin's AI opportunity",
      body: [
        "This group points to three useful patterns. First, AI is being applied to work that already has a clear owner and measurable cost: security operations, fleet incidents, finance administration and consumer research. Second, the underlying infrastructure matters. Companies such as Bronto, TensorX and Jentic are working on the systems that help AI products operate, scale or connect to other software. Third, Irish-founded teams are tackling specialised areas, from satellite data to workplace safety, where domain knowledge is as important as model choice.",
        "Funding totals attract attention, but they only tell one part of a company's story. A round can support hiring, product development or expansion; it does not by itself prove product-market fit or long-term success. For a clearer picture, look at what a company sells, who uses it, what problem it solves and how it is adapting its product as AI capabilities change.",
      ],
    },
    {
      heading: "A note on the funding figures",
      body: [
        "The figures in this article come from company announcements, published reporting and startup databases. Sources do not always use the same definition of total funding: some include debt or growth investment, while others show disclosed venture rounds only. Currency conversions can also change over time. We have therefore labelled the numbers as reported amounts, avoided presenting them as an exact league table and linked to available sources so readers can check the underlying context.",
      ],
    },
  ],
  faqs: [
    {
      q: "Are these the ten most-funded AI startups in Dublin?",
      a: "No. This is a selected list of ten companies across several AI categories, not a strict funding ranking. Dealroom's Dublin AI list includes other companies with larger reported totals, and its classifications and figures can change as profiles are updated.",
    },
    {
      q: "How much funding have these Dublin AI startups raised?",
      a: "Public figures range from several million dollars or euros to hundreds of millions. Tines has reported about $272 million raised, while other companies in this article have disclosed smaller totals or specific rounds. Figures are rounded and use different reporting methods, so they should not be added together as an audited ecosystem total.",
    },
    {
      q: "Are all ten companies headquartered in Dublin?",
      a: "The list focuses on Dublin-based or Dublin-founded companies, but team locations and company structures can evolve. Check each company's current website for its latest office and operating footprint.",
    },
    {
      q: "Which Dublin AI startups focus on AI infrastructure?",
      a: "Bronto works on observability and log data, TensorX on AI inference infrastructure, and Jentic on connecting AI agents with APIs and software systems. Dubsof also focuses on infrastructure for integrating AI into business workflows.",
    },
    {
      q: "Where can I find more Dublin AI startups?",
      a: "Dealroom maintains a changing directory of artificial intelligence startups in Dublin. Its classifications and funding estimates are a useful discovery tool, but check company announcements and other sources when you need to confirm a particular figure.",
    },
    {
      q: "Is this list limited to Dublin, or does it cover all of Ireland?",
      a: "This article focuses on companies connected to Dublin. Ireland has AI and technology companies in other cities and regions too, so a separate country-wide guide would include a broader set of startups and research-led businesses.",
    },
  ],
  sources: [
    {
      label: "Dealroom: Artificial intelligence startups in Dublin (updated October 22, 2026)",
      href: "https://dealroom.co/lists/artificial-intelligence-startups-dublin/",
    },
    {
      label: "Tines: $125M Series C and total capital raised",
      href: "https://www.prnewswire.com/news-releases/tines-secures-125m-in-series-c-financing-bringing-total-valuation-to-1-125b-302372726.html",
    },
    {
      label: "CameraMatics: growth investment of up to €49M",
      href: "https://www.cameramatics.com/resources/cameramatics-secures-up-to-e49m-investment/",
    },
    {
      label: "Protex AI: company overview and funding to date",
      href: "https://www.protex.ai/company",
    },
    {
      label: "Ubotica: $11M funding round",
      href: "https://www.ubotica.com/news/orbital-ai-pioneer-ubotica-raises-11-million-to-scale-real-time-maritime-intelligence-from-space",
    },
    {
      label: "Bronto: $14M seed round",
      href: "https://bronto.io/blog/announcing-our-14m-seed-fundraising",
    },
    {
      label: "Seapoint: funding and product overview",
      href: "https://www.seapoint.co/about-us",
    },
    {
      label: "Dubsof: funding report from The Irish Times",
      href: "https://www.irishtimes.com/business/2026/10/13/dublin-ai-start-up-dubsof-raises-more-than-5m-in-round-led-by-blueyard-capital/",
    },
    {
      label: "Bounce Insights: Trinity Innovation profile",
      href: "https://www.tcd.ie/innovation/news-and-events/stories-and-impacts/launchbox-alumni-bounce-insights/",
    },
    {
      label: "Jentic: company press information",
      href: "https://jentic.com/blog/press",
    },
  ],
  internalLinks: [
    { label: "Explore more AI articles", to: "/blog" },
    { label: "Our development services", to: "/services" },
  ],
  cta: {
    title: "Building an AI product for your business?",
    body: "Start with the customer problem, map the workflow and choose technology that fits the people who will use it.",
  },
} satisfies PostBody;

export default post;
