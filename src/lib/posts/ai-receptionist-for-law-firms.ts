import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "AI Receptionist for Law Firms: Intake Setup and Ethics",
  metaDescription:
    "How US law firms can use an AI receptionist for after-hours intake without ethics trouble: ABA Opinion 512, confidentiality, consent and CRM handoff.",
  keywords: [
    "ai receptionist for law firms",
    "ai legal intake",
    "ai answering service for attorneys",
    "aba formal opinion 512 intake",
    "virtual receptionist for law firms",
    "ai intake for personal injury firms",
    "law firm after hours answering",
  ],
  disclosure:
    "Pixel2Tech is a design and development studio in Lahore, Pakistan, and builds the kind of AI intake systems discussed here.",
  keyTakeaways: [
    "An AI receptionist can answer, triage and book, but it must not give legal advice, value a case or promise representation. Route anything deadline-sensitive to a person.",
    "ABA Formal Opinion 512 (July 29, 2024) applies the duties of competence, confidentiality, communication and supervision to generative AI. Read the vendor's terms and privacy policy before callers' information goes in.",
    "Callers are prospective clients under Model Rule 1.18, so collect only what you need to check conflicts and decide whether to take the matter.",
    "Recording consent varies. Federal law allows one-party consent, but California requires every party's consent to record confidential communications. Disclose recording at the start of every call.",
    "Outbound AI-voice calls fall under the TCPA. The FCC confirmed in February 2024 that AI-generated voices count as artificial voices that need prior express consent.",
  ],
  content: [
    {
      heading: "What can an AI receptionist do for a law firm?",
      definition:
        "An AI receptionist for a law firm is a voice or chat agent that answers calls, collects intake details, flags conflicts and urgency, books consultations and passes a clean record to your intake system. It can cover after-hours calls and overflow, but it should not give legal advice, value a case or accept representation.",
      body: [
        "The useful work is narrow and repetitive: answering on the first ring at 11 p.m., asking the same intake questions every time, and getting the caller onto an attorney's calendar. Those are the tasks a tired person is most likely to rush at the end of a long shift.",
        "The line it must not cross is anything that sounds like legal judgment. 'Do I have a case?', 'What is it worth?' and 'Should I talk to the adjuster?' all get the same answer: an attorney will review your information and call you back by a stated time.",
        "This article is general information, not legal advice. Your state's rules of professional conduct and ethics opinions control, and they vary.",
      ],
    },
    {
      heading: "What does ABA Formal Opinion 512 mean for AI intake?",
      definition:
        "ABA Formal Opinion 512, issued July 29, 2024, says lawyers using generative AI must consider their duties of competence, confidentiality, communication, supervision, candor and reasonable fees. It covers generative AI generally, not phone intake specifically, but its confidentiality and supervision sections map directly onto an AI receptionist.",
      body: [
        "Competence (Rule 1.1). [Opinion 512](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf) says lawyers need not become AI experts but must reasonably understand what a tool can and can't do. For intake, that means knowing how the system decides to escalate and how often it mishears names, dates and places.",
        "Confidentiality (Rule 1.6, with Rule 1.18(b) extending similar protection to prospective clients). Before information goes into a generative AI tool, the lawyer must weigh the risk of disclosure inside and outside the firm. For self-learning tools, the opinion concludes that client informed consent is required before inputting information relating to a representation, and that boilerplate consent in an engagement letter isn't enough. That makes 'does the vendor train models on our callers' data?' the first diligence question, not the last.",
        "Supervision (Rules 5.1 and 5.3). Managing lawyers must set clear policies on permitted AI use and train staff. For outside providers, the opinion points back to earlier cloud and outsourcing guidance: check the vendor's security, retention and liability terms, and make sure you'd be told about a breach.",
        "The opinion's footnotes also cite Florida Bar Ethics Opinion 24-1, which discusses chatbots under Florida's rules against misleading or unduly manipulative advertising. Florida firms should read the two together.",
      ],
    },
    {
      heading: "How should a personal injury intake call flow work?",
      definition:
        "A good intake flow collects just enough to run a conflict check and decide whether to call back, flags anything time-sensitive for a person, and books the next step. It does not try to evaluate the case.",
      body: [
        "[Model Rule 1.18](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_18_duties_of_prospective_client/) treats anyone who consults a lawyer about possibly forming a client-lawyer relationship as a prospective client, and bars the lawyer from using or revealing what they learned even if no representation follows. The rule's comment advises limiting the initial consultation to what reasonably appears necessary to decide whether to take the matter. An AI flow should follow the same discipline.",
        "The comment also says a consultation is more likely when a lawyer invites information without clear warnings that limit the lawyer's obligations. A short, plain statement at the start of the call does real work.",
        "Notice what the flow below leaves out: detailed injury descriptions, who was at fault, treatment specifics and what the other driver said. Those belong in the consultation, after conflicts are cleared. Collecting them earlier adds risk under Rule 1.18 without improving the callback decision.",
      ],
      table: {
        caption: "A personal injury intake flow for an AI receptionist",
        headers: ["Step", "What the AI does", "Hand off to a person when"],
        rows: [
          [
            "1. Greeting and disclosures",
            "Names the firm, says it is an automated assistant, says the call may be recorded and that it can't give legal advice",
            "Caller asks for a person or objects to recording",
          ],
          [
            "2. Reason for calling",
            "Sorts the matter: car crash, truck, slip and fall, workplace injury, other",
            "The matter is outside your practice areas",
          ],
          [
            "3. Contact details",
            "Name, callback number, preferred language and best time to call",
            "Caller can't safely talk right now",
          ],
          [
            "4. Conflict-check fields",
            "Names of other people, companies and insurers involved, as far as the caller knows",
            "Caller names an existing client or the firm itself",
          ],
          [
            "5. Minimal incident facts",
            "Date, city and state of the incident, and whether they already have a lawyer",
            "The date is old enough that a deadline may be close, or the caller is represented",
          ],
          [
            "6. Urgency flags",
            "Asks whether anyone is still in the hospital and whether an insurer has contacted them",
            "Any yes, or any sign of distress or danger",
          ],
          [
            "7. Booking",
            "Offers consultation slots from the attorney calendar",
            "No slot fits within your callback promise",
          ],
          [
            "8. Confirmation",
            "Reads back details and callback time; sends a text only if the caller agrees",
            "Caller disputes a detail",
          ],
        ],
      },
    },
    {
      heading: "Guardrail scripting: disclosures, no advice, escalation",
      definition:
        "Guardrails are the exact sentences the assistant uses at risky moments, plus the triggers that route a call to a person. Write them down, test them and have an attorney approve them.",
      body: [
        "Use this as a starting checklist. Adjust the wording to your state's rules and your firm's voice, and keep the approved version under change control so nobody edits the prompt casually.",
      ],
      bullets: [
        "Opening: 'Thanks for calling [FIRM NAME]. I'm an automated assistant, and this call may be recorded. I can take your details and book a time with our team, but I can't give legal advice.'",
        "Scope limit: 'To see whether we can help, I only need a few basic details for now. An attorney will go over the rest with you.'",
        "Advice deflection: 'I can't tell you whether you have a case or what it may be worth. An attorney will review your information and call you by [TIME].'",
        "Emergency: 'If you or someone else is in danger or needs medical help right now, please hang up and call 911.'",
        "Escalation triggers: the caller asks for a person twice, mentions a deadline or court date, already has a lawyer, is an insurer or opposing party, sounds distressed, or the system has low confidence in what it heard.",
        "Closing: read back the name, number, matter type and callback time, and promise only a callback window the firm reliably meets.",
      ],
      subsections: [
        {
          heading: "What a good exchange sounds like",
          body: [
            "A short illustrative call, written the way we script test cases. The point is the shape: acknowledge, decline the legal question, collect the minimum, flag urgency, confirm.",
          ],
          bullets: [
            "Caller: 'I got rear-ended last week and the other driver's insurance keeps calling me. Do I have a case?'",
            "Assistant: 'I'm sorry that happened. I can't tell you whether you have a case, but I can get you to an attorney who can. What's your name and the best number to reach you?'",
            "The assistant then asks for the other driver's name and insurer if known, the date and city of the crash, and whether the caller already has a lawyer.",
            "Assistant: 'Is anyone still in the hospital, and has an insurance company asked you for a recorded statement?' Under the firm's rules in this example, a yes to either flags the lead for a same-day callback.",
            "The assistant reads back the details, confirms the callback window and asks permission before sending a text confirmation.",
          ],
        },
      ],
    },
    {
      heading: "Call recording and consent: what the law requires",
      definition:
        "Federal law allows recording a call when one party consents, but some states require every party's consent, and outbound AI-voice calls need prior express consent under the TCPA. Disclosing at the start of every inbound call is the simplest way to cover the strictest rule.",
      body: [
        "Federal wiretap law, [18 U.S.C. 2511(2)(d)](https://www.law.cornell.edu/uscode/text/18/2511), makes recording lawful when the person recording is a party to the call or one party has consented, unless the purpose is criminal or tortious.",
        "Some states are stricter. [California Penal Code 632](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632) prohibits recording a confidential communication without the consent of all parties. Injury callers routinely describe medical details they expect to stay private, so treat intake calls as confidential and tell every caller about recording up front.",
        "Outbound calls are a separate question. In a February 2024 declaratory ruling, the [FCC confirmed](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) that the Telephone Consumer Protection Act's restrictions on 'artificial or prerecorded voice' calls cover current AI technologies that generate human voices. Those calls need the called party's prior express consent unless an exemption applies. If your system places callbacks or reminder calls, ask for that consent during the inbound call and log the answer.",
      ],
    },
    {
      heading: "Vendor due diligence: what to ask before you sign",
      body: [
        "Opinion 512 borrows its vendor checklist from earlier guidance on cloud computing and outsourcing. Turn it into written questions and keep the answers on file. That record is part of showing reasonable supervision if anything goes wrong.",
        "Then test the answers. Ask for a sandbox number, call it with your own test script, request the recording and transcript, delete them, and ask for confirmation that they are gone from backups too. How a vendor handles that request tells you more than its sales deck.",
      ],
      table: {
        caption: "Due diligence questions for an AI receptionist vendor",
        headers: ["Question", "Why it matters"],
        rows: [
          [
            "Do you train or fine-tune models on our call data?",
            "Opinion 512 ties its informed-consent conclusion to self-learning tools",
          ],
          [
            "How long are recordings and transcripts kept, and can we set that?",
            "512 says to check whether a provider retains information before and after service ends",
          ],
          [
            "Do you claim any rights to our data?",
            "512 flags providers that assert proprietary rights to submitted information",
          ],
          [
            "Who at your company can access recordings, and is access logged?",
            "Confidentiality depends on who can see the data, not only on encryption",
          ],
          [
            "Will you notify us of a breach or a subpoena for our data?",
            "512 lists notice of a breach or service of process among its checks",
          ],
          [
            "What is your liability cap?",
            "512 says to investigate limits on the provider's liability",
          ],
          [
            "Where is data stored and processed?",
            "Affects your security review and any client-specific restrictions",
          ],
        ],
      },
    },
    {
      heading: "Integrations: calendar, intake CRM and follow-up",
      definition:
        "An AI receptionist is only as useful as the record it leaves behind. Map every intake question to a field in your CRM before you go live.",
      body: [
        "Many PI firms already run intake through a legal CRM such as Clio Grow or Lawmatics, or a general platform like GoHighLevel. The receptionist should create or update a lead there, attach the transcript and recording, set the matter type and flags, and assign the callback to a named person. Calendar booking needs its own limits: only slots attorneys have opened for consultations, buffer time after each call and no double-booking.",
        "Follow-up is where most intake systems leak. Our guide to [automating lead follow-up](/blog/automate-lead-follow-up) covers the text and email sequences that run after the call, and [offline conversion tracking](/blog/offline-conversion-tracking-service-business) shows how to send signed-case outcomes back to your ad platforms, so you can see which campaigns produce clients and not just calls.",
        "Fields worth mapping from day one:",
      ],
      bullets: [
        "Caller name, callback number and preferred language",
        "Matter type and incident date",
        "Adverse parties and insurers for the conflict check",
        "Flags: represented elsewhere, possible deadline, hospitalization, distress",
        "Consent status for recording, texts and any AI-voice callbacks",
        "Transcript, recording link and the assistant's summary, labeled as AI-generated, which Opinion 512 suggests as a training practice for stored GAI output",
      ],
    },
    {
      heading: "What should you measure after launch?",
      definition:
        "Measure whether the assistant gets qualified people to an attorney faster, not how many calls it answers.",
      body: [
        "Set a baseline first. Pull a month of call logs before launch so answer rate by hour and time to callback have something to compare against; without it, every improvement is a guess.",
        "Review a sample of transcripts every week for the first month. You are looking for two failure types: calls it should have escalated and didn't, and moments where it drifted toward advice. Fix the prompt or the flow, then re-test before the change goes live.",
      ],
      bullets: [
        "Answer rate by hour of day, before and after launch",
        "Share of calls escalated, and whether each escalation was justified",
        "Qualified consultations booked per week",
        "Time from first call to attorney callback",
        "Intake errors caught in human review: wrong names, dates or matter types",
        "Caller complaints and requests to speak with a person",
      ],
    },
    {
      heading: "Should you build or buy an AI receptionist?",
      definition:
        "Buy a legal-specific product when your intake is standard and you want to launch quickly. Build or customize when you need your own call flow, your own CRM fields and control over where data goes.",
      body: [
        "For a sense of what custom conversational AI costs to build and run, see our breakdown of [AI chatbot costs for small businesses](/blog/ai-chatbot-cost-small-business). If you want help designing the flow or building on your own stack, that is the work our [AI solutions team](/services/ai-solutions) does.",
      ],
      table: {
        caption: "Build or buy: an AI receptionist for a law firm",
        headers: ["Factor", "Buy an off-the-shelf product", "Build or customize"],
        rows: [
          ["Time to launch", "Faster", "Slower; needs design and testing"],
          [
            "Call flow control",
            "Limited to the vendor's options",
            "Full control over questions and escalation",
          ],
          [
            "Data handling",
            "Vendor's terms, often hard to negotiate",
            "You choose providers, retention and storage",
          ],
          ["CRM integration", "Prebuilt for popular tools", "Mapped to your exact fields"],
          [
            "Ongoing cost",
            "Subscription set by the vendor",
            "Hosting, model usage and maintenance",
          ],
          ["Who fixes problems", "Vendor support queue", "Your developer or studio"],
        ],
      },
      callout: {
        title: "From the studio",
        body: "Before any AI intake line goes live, we write a set of test calls designed to break it: a caller who already has a lawyer, one who asks what their case is worth, one describing an emergency, one who speaks only Spanish, and one who turns out to be the insurer. An attorney listens to the recordings and signs off before real callers reach it.",
      },
    },
  ],
  faqs: [
    {
      q: "Is it ethical for a law firm to use an AI receptionist?",
      a: "It can be, if the firm meets the duties that apply to any staff member or vendor. ABA Formal Opinion 512 says lawyers using generative AI must understand the tool, protect confidential information, supervise its use and read the vendor's terms. For intake, that means limiting what the assistant collects, keeping it away from legal advice and reviewing its work. Check your state's ethics opinions too.",
    },
    {
      q: "Can an AI receptionist give legal advice?",
      a: "It shouldn't. Advice requires legal judgment, and a receptionist, human or AI, isn't positioned to give it. Script the assistant to decline questions about case value, fault or strategy and to promise an attorney callback by a stated time. Test those deflections with the phrasing callers actually use, such as 'Do I have a case?' or 'Should I sign this?'",
    },
    {
      q: "Do callers need to be told they are speaking with AI?",
      a: "We found no single national rule for inbound calls, and state rules vary, so treat disclosure as the default. ABA Model Rule 7.1 bars misleading communications about a lawyer's services, and a caller who thinks they spoke with a paralegal when they spoke with software may feel misled. For outbound AI-voice calls, the FCC has confirmed the TCPA requires prior express consent.",
    },
    {
      q: "How does an AI receptionist handle conflict checks?",
      a: "It collects the names of the other people, companies and insurers involved and passes them to your conflicts process. It doesn't clear conflicts itself. Following the comment to Model Rule 1.18, it should gather only what is needed to check conflicts and decide whether to take the matter, so the firm doesn't absorb disqualifying detail from someone it can't represent.",
    },
    {
      q: "Will an AI receptionist replace my intake team?",
      a: "It shouldn't be set up to. It handles volume and hours: after-hours calls, overflow and consistent first questions. People still handle escalations, emotional calls, conflict decisions and the consultation itself. Under Model Rules 5.1 and 5.3, lawyers remain responsible for supervising the system and the staff who work with it, so someone at the firm has to own its performance.",
    },
  ],
  sources: [
    {
      label:
        "ABA Standing Committee on Ethics: Formal Opinion 512, Generative Artificial Intelligence Tools (July 29, 2024)",
      href: "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
    },
    {
      label: "American Bar Association: Model Rule 1.18, Duties to Prospective Client",
      href: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_18_duties_of_prospective_client/",
    },
    {
      label: "Cornell Law School LII: 18 U.S. Code 2511",
      href: "https://www.law.cornell.edu/uscode/text/18/2511",
    },
    {
      label: "California Legislative Information: Penal Code Section 632",
      href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632",
    },
    {
      label: "FCC Declaratory Ruling FCC 24-17: AI technologies and the TCPA (February 2024)",
      href: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
    },
  ],
  internalLinks: [
    { label: "AI chatbot cost for small businesses", to: "/blog/ai-chatbot-cost-small-business" },
    { label: "Automate lead follow-up", to: "/blog/automate-lead-follow-up" },
    {
      label: "Offline conversion tracking for service businesses",
      to: "/blog/offline-conversion-tracking-service-business",
    },
    { label: "Law firm explainer video cost", to: "/blog/law-firm-explainer-video-cost" },
    { label: "AI solutions", to: "/services/ai-solutions" },
  ],
  cta: {
    title: "Want your intake call flow reviewed before you pick a vendor?",
    body: "Send us your current intake questions and after-hours setup. We'll map a call flow with escalation rules and the CRM fields it should fill, whichever tool you choose.",
  },
};

export default post;
