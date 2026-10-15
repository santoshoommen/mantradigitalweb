export type PlanId = "essential" | "grow" | "pro";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  positioning: string;
  summary: string;
  recommended: boolean;
  homepageFeatures: string[];
  enquireLabel: string;
};

export const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    price: 99,
    positioning: "Professional online presence",
    summary: "A professional online presence.",
    recommended: false,
    enquireLabel: "Enquire about Essential",
    homepageFeatures: [
      "Up to 10 designed pages",
      "Mobile responsive design",
      "Contact forms",
      "Basic SEO setup",
      "Analytics integration",
      "15 minutes of updates per month",
      "Managed hosting, security and support",
    ],
  },
  {
    id: "grow",
    name: "Grow",
    price: 199,
    positioning: "Grow and manage your digital presence",
    summary: "A website that evolves with you.",
    recommended: true,
    enquireLabel: "Enquire about Grow",
    homepageFeatures: [
      "Everything in Essential, plus:",
      "CMS to add and manage pages",
      "Enhanced SEO and AI search optimisation",
      "Structured data and answer-focused content",
      "Booking integration with a supported provider",
      "60 minutes of updates per month",
      "Quarterly performance review",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 399,
    positioning: "Ongoing digital partner",
    summary: "An ongoing digital partner.",
    recommended: false,
    enquireLabel: "Enquire about Pro",
    homepageFeatures: [
      "Everything in Grow, plus:",
      "Advanced design and functionality",
      "Enhanced SEO and AI optimisation",
      "Third-party integrations",
      "3 hours of updates per month",
      "Monthly performance review",
      "Conversion optimisation",
      "Higher-priority support",
    ],
  },
];

export const comparisonRows: { label: string; essential: string; grow: string; pro: string }[] = [
  { label: "Monthly price, excluding VAT", essential: "£99", grow: "£199", pro: "£399" },
  {
    label: "Positioning",
    essential: "Professional online presence",
    grow: "Grow and manage your digital presence",
    pro: "Ongoing digital partner",
  },
  {
    label: "Initial site",
    essential: "Up to 10 pages",
    grow: "Up to 10 designed pages at launch",
    pro: "Tailored initial scope, agreed in the proposal",
  },
  {
    label: "Design",
    essential: "Professional styling from reusable foundations",
    grow: "Enhanced, conversion-focused layouts",
    pro: "Advanced design and prioritised improvements",
  },
  {
    label: "CMS editing",
    essential: "No client-facing CMS",
    grow: "Client CMS for self-service publishing",
    pro: "Advanced CMS and content structures",
  },
  {
    label: "Additional pages",
    essential: "Requested through Mantra and quoted",
    grow: "Publish extra pages from approved templates",
    pro: "Approved templates, plus advanced structures as scoped",
  },
  {
    label: "SEO",
    essential: "Foundational on-page and technical SEO",
    grow: "Enhanced SEO",
    pro: "Enhanced SEO with ongoing review",
  },
  {
    label: "AI search optimisation",
    essential: "Not included as a dedicated service",
    grow: "Foundational GEO/AEO. No placement guarantee",
    pro: "Deeper review and recommendations. No placement guarantee",
  },
  {
    label: "Booking",
    essential: "Quoted separately",
    grow: "One supported provider, scoped at onboarding",
    pro: "Supported integrations within the agreed scope",
  },
  {
    label: "Included content changes",
    essential: "15 minutes a month",
    grow: "60 minutes a month",
    pro: "3 hours a month",
  },
  {
    label: "Reporting",
    essential: "Analytics integration",
    grow: "Quarterly performance review",
    pro: "Monthly performance review",
  },
  {
    label: "Support",
    essential: "Standard",
    grow: "Priority",
    pro: "Higher priority",
  },
];

export const commercialNotes = {
  upfront:
    "The monthly plan covers the initial website build. There is no separate upfront website development fee.",
  commitment:
    "Plans begin with a 12-month initial commitment. Monthly fees are billed in advance. What happens after that term is set out in the agreement we share before you commit.",
  vat: "All prices exclude VAT.",
  terms:
    "The website terms explain how this site and the published plans work. Nothing on this page, by itself, is a contract.",
  aiSearch:
    "Foundational AI search support on Grow and Pro makes your services, expertise and business details easier for search and answer engines to understand. It does not guarantee inclusion or ranking in Google, ChatGPT, Gemini, Google AI Overviews or any other AI answer.",
  allowances:
    "Included update time does not roll over. It covers content edits, not new features, new layouts or extra integrations.",
  cms: "On Grow and Pro, new pages you publish are generated from the approved templates and content models. CMS access is not unlimited bespoke design.",
  cancellation:
    "Domain registration should stay in your name. Hosting, continuation and what happens to the site if you cancel are covered in the agreement. Source code does not transfer automatically when a plan ends.",
  quotedSeparately: [
    "New bespoke layouts",
    "Extra integrations",
    "Extensive copywriting",
    "Custom applications",
    "Active SEO campaigns, digital PR and paid advertising",
    "Ongoing content production",
  ],
};

export function planEnquiryHref(id: PlanId) {
  return `/contact?plan=${id}`;
}

export function isPlanId(value: string | undefined): value is PlanId {
  return value === "essential" || value === "grow" || value === "pro";
}

export const trustPoints = [
  { title: "No upfront development fee", icon: "coin" },
  { title: "12-month initial commitment", icon: "calendar" },
  { title: "Managed hosting included", icon: "shield" },
  { title: "Clear, transparent pricing", icon: "tag" },
] as const;

export const homeFeatures = [
  {
    title: "Strategic approach",
    body: "Websites designed around your business goals.",
    icon: "columns",
  },
  {
    title: "Modern technology",
    body: "Fast, secure and built to scale.",
    icon: "laptop",
  },
  {
    title: "Ongoing partnership",
    body: "Support and optimisation, not just a launch.",
    icon: "people",
  },
  {
    title: "AI ready",
    body: "Built for today's search and tomorrow's opportunities.",
    icon: "spark",
  },
] as const;

export const partnerPoints = [
  "Website design and development",
  "Booking systems and online payments",
  "Web applications and custom functionality",
  "Brand identity and digital strategy",
  "Ongoing management and optimisation",
];

export const homeProcess = [
  {
    n: "1",
    title: "Discovery",
    body: "We understand your business, goals and audience.",
  },
  {
    n: "2",
    title: "Design & build",
    body: "We create a tailored design and develop your website.",
  },
  {
    n: "3",
    title: "Launch",
    body: "Your website goes live, fully tested and optimised.",
  },
  {
    n: "4",
    title: "Ongoing support",
    body: "We keep your site secure, up to date and help you grow.",
  },
];

export const fullProcess = [
  {
    title: "Discovery and goals",
    body: "We learn how the business works, who it is for, and what a successful site needs to do.",
  },
  {
    title: "Strategy and visual direction",
    body: "We agree the shape of the site, the message and a visual direction before detailed design.",
  },
  {
    title: "Design and approval",
    body: "You review the design and we refine it. The number of revision rounds is agreed before work starts.",
  },
  {
    title: "Implementation and QA",
    body: "We build, connect the agreed tools, and test content, forms and the main journeys.",
  },
  {
    title: "Launch and handover",
    body: "We launch, check the basics and show you how to work with the site day to day.",
  },
  {
    title: "Continuous care",
    body: "Managed plans continue as a monthly service. Bespoke projects can move onto a separate care plan, quoted on its own.",
  },
];

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/managed-websites", label: "Websites" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
] as const;

export const footerServices = [
  { href: "/managed-websites", label: "Managed Websites" },
  { href: "/services/web-design-development", label: "Bespoke Projects" },
  { href: "/services/digital-solutions", label: "Booking Systems" },
  { href: "/services/digital-solutions", label: "Web Applications" },
  { href: "/services/branding-design", label: "Brand & Strategy" },
  { href: "/managed-websites", label: "Ongoing Support" },
] as const;

export const footerCompany = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
] as const;

export const marketingPaths = [
  "/",
  "/managed-websites",
  "/services",
  "/services/web-design-development",
  "/services/branding-design",
  "/services/digital-solutions",
  "/work",
  "/about",
  "/process",
  "/contact",
  "/faq",
  "/privacy",
  "/cookies",
  "/terms",
] as const;

export type Service = {
  slug: string;
  navLabel: string;
  title: string;
  lede: string;
  problem: string;
  approach: string;
  deliverables: string[];
  boundaries: string[];
  relatedWork?: string;
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    navLabel: "Web design and development",
    title: "Websites designed around how your business actually works",
    lede: "A considered marketing site, built properly and ready for people to enquire, book or buy.",
    problem:
      "Many businesses have a page online that looks finished and still fails the basic job: helping the right person understand the offer and take the next step.",
    approach:
      "We start with that job. Structure, words, design and engineering then support it. The result should feel specific to the business, load quickly and stay straightforward to look after.",
    deliverables: [
      "Sitemap and page structure",
      "Visual design",
      "Responsive build",
      "Enquiry forms",
      "Foundational on-page SEO",
      "Launch checks and handover",
    ],
    boundaries: [
      "A managed subscription covers an agreed initial site, not an open-ended product build.",
      "Custom applications, complex integrations and campaign work are scoped separately.",
      "We do not promise that a new website will produce a particular number of enquiries.",
    ],
    relatedWork: "chiltern-wellbeing",
  },
  {
    slug: "branding-design",
    navLabel: "Branding and design",
    title: "A visual identity people can recognise and trust",
    lede: "Brand direction you can use on the website and in the materials the business already needs.",
    problem:
      "When the logo, colours, type and website each make a different impression, a capable business can look unfinished.",
    approach:
      "We clarify who the work is for and how it should feel, then design a practical system: colour, type, layout and, where needed, the way an existing mark is used.",
    deliverables: [
      "Positioning notes and visual direction",
      "Colour, type and layout system",
      "Website design applied from that system",
      "Templates for the pages and assets in scope",
    ],
    boundaries: [
      "A brand exercise is not a guarantee of growth.",
      "Large identity programmes, packaging and print production are quoted separately.",
      "We will not invent a replacement for your logo unless that work is agreed.",
    ],
  },
  {
    slug: "digital-solutions",
    navLabel: "Digital solutions",
    title: "Booking, payments, portals and the joins between them",
    lede: "The practical systems around a website: bookings, payments, integrations and focused web applications.",
    problem:
      "When tools do not talk to each other, teams retype information and customers get stuck between a form, a diary and a payment page.",
    approach:
      "We map the workflow first, then connect a supported platform or build the specific piece that is missing. The aim is a calmer operation, not more software for its own sake.",
    deliverables: [
      "Booking and payment workflows",
      "Third-party API integrations",
      "Customer portals where they are justified",
      "Web applications scoped to a real job",
      "Light automation of repetitive steps",
      "Analytics that show whether the journey works",
    ],
    boundaries: [
      "A managed website subscription does not include a custom application.",
      "Integrations are confirmed during scoping. We do not promise every third-party tool can be connected.",
      "Bespoke projects are quoted. Request a tailored quote rather than assuming a package price.",
    ],
    relatedWork: "cook-local",
  },
];

export type WorkTag = "Web Design" | "Development" | "CMS" | "Digital Experience";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  cardLabel: string;
  challenge: string;
  approach: string;
  solution: string;
  tags: WorkTag[];
  services: string[];
  published: boolean;
  website?: string;
  permissionNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chiltern-wellbeing",
    title: "Chiltern Wellbeing",
    client: "Chiltern Wellbeing",
    cardLabel: "Healthcare website with online booking",
    summary:
      "A calm, professional website for a wellbeing practice, with a clear path to enquire or book.",
    challenge:
      "People looking for support needed to understand the practice quickly and find a straightforward way to get in touch.",
    approach:
      "We shaped the site around reassurance and clarity: what the practice offers, who it is for, and how to book or enquire.",
    solution:
      "A responsive marketing website with a booking-led call to action. Any live booking connection is scoped to the practice's existing provider.",
    tags: ["Web Design", "Digital Experience"],
    services: ["web-design-development"],
    published: true,
    permissionNote: "Homepage screenshots were supplied for the public site.",
  },
  {
    slug: "cook-local",
    title: "Cook Local",
    client: "Cook Local",
    cardLabel: "Marketplace platform and mobile apps",
    summary:
      "The website and mobile apps for Cook Local, where people find small-batch meals from home kitchens nearby.",
    challenge:
      "Cooks needed more than a page about the idea. Neighbours had to find a kitchen, see when it was open, and place an order. The same product had to work on the web and on a phone.",
    approach:
      "We designed one platform for both. The path is the same in the browser and in the apps: enter a postcode, open a kitchen, and order while that kitchen is taking orders.",
    solution:
      "Mantra designed and built Cook Local, including the website at cooklocal.app and the iOS and Android apps. People browse by place and cuisine, see upcoming kitchen drops, and order for collection or delivery. Cooks list a kitchen and sell through the same product.",
    tags: ["Web Design", "Development", "Digital Experience"],
    services: ["digital-solutions", "web-design-development"],
    published: true,
    website: "https://cooklocal.app",
    permissionNote: "Homepage and app screenshots were supplied for the public site.",
  },
  {
    slug: "onlineartz",
    title: "OnlineArtz",
    client: "OnlineArtz",
    cardLabel: "International art marketplace",
    summary:
      "An art marketplace where collectors browse original work and artists can offer pieces for sale.",
    challenge:
      "Collectors needed to see original work clearly, and artists needed a way to present pieces and offer them for sale without a generic shop template.",
    approach:
      "We gave the artwork the page. The path is simple: explore what is available, or start selling.",
    solution:
      "A responsive marketplace for original art. Collectors can explore artists, collections and categories, and artists can offer work for sale. The same site is designed to be used on a phone.",
    tags: ["Web Design", "Development", "Digital Experience"],
    services: ["digital-solutions", "web-design-development"],
    published: true,
    permissionNote: "Homepage screenshots were supplied for the public site.",
  },
  {
    slug: "legends-plus",
    title: "Legends Plus",
    client: "Legends Plus",
    cardLabel: "Unpublished draft",
    summary:
      "Draft placeholder. Do not describe this project as completed until it has launched and the client has approved a case study.",
    challenge: "Not approved for publication.",
    approach: "Not approved for publication.",
    solution: "Not approved for publication.",
    tags: ["Development"],
    services: [],
    published: false,
    permissionNote: "Keep unpublished until launch and client approval.",
  },
];

export const workTags: Array<"All" | WorkTag> = [
  "All",
  "Web Design",
  "Development",
  "CMS",
  "Digital Experience",
];

export function onlyPublished<T extends { published: boolean }>(items: T[]) {
  return items.filter((item) => item.published);
}

export type Faq = {
  id: string;
  question: string;
  answer: string;
  group: "managed" | "bespoke" | "general";
  published: boolean;
};

export const faqs: Faq[] = [
  {
    id: "upfront-fee",
    group: "managed",
    published: true,
    question: "What does no upfront development fee mean?",
    answer:
      "You are not asked for a separate project fee to design and build the initial website. The work is covered by the monthly plan. You still pay the monthly fee, beginning with a 12-month commitment, and anything outside the plan is quoted before we do it.",
  },
  {
    id: "commitment",
    group: "managed",
    published: true,
    question: "Is there a minimum term?",
    answer:
      "Yes. Managed website plans start with a 12-month initial commitment. After that, continuation, notice and any rolling arrangement are set out in the agreement we share before you sign.",
  },
  {
    id: "cancel",
    group: "managed",
    published: true,
    question: "What happens if I cancel?",
    answer:
      "Cancellation, notice and what happens to the hosted site are covered in the contract, which you see before you agree. The site and source code do not transfer to you automatically when a plan ends. Your own domain should remain registered in your name.",
  },
  {
    id: "updates",
    group: "managed",
    published: true,
    question: "What do the monthly minutes cover?",
    answer:
      "They cover small content edits: wording, images, opening hours and similar changes. The allowance does not roll into the next month. It is not feature development, a new layout, an integration or a rewrite. Essential includes 15 minutes, Grow 60 minutes and Pro 3 hours.",
  },
  {
    id: "cms",
    group: "managed",
    published: true,
    question: "Do I get a CMS?",
    answer:
      "Essential does not include a client-facing CMS. Changes go through Mantra. Grow and Pro include a CMS so you can publish additional pages from the templates and content models already approved. That is not the same as unlimited bespoke design.",
  },
  {
    id: "ai",
    group: "managed",
    published: true,
    question: "Does Grow guarantee that AI tools will mention my business?",
    answer:
      "No. Grow includes foundational AI search optimisation: clear structure, factual service content, applicable structured data and sensible technical setup. Pro adds review and recommendations. Neither plan guarantees placement in ChatGPT, Gemini, Google AI Overviews or any other answer engine.",
  },
  {
    id: "vat",
    group: "managed",
    published: true,
    question: "Are the prices inclusive of VAT?",
    answer: "No. £99, £199 and £399 a month all exclude VAT.",
  },
  {
    id: "bespoke-difference",
    group: "bespoke",
    published: true,
    question: "How is a bespoke project different from a subscription?",
    answer:
      "A subscription is a managed website with an agreed scope and a monthly fee. Bespoke work — a brand, a web application, a portal, or a more complex integration — is scoped and quoted on its own. A subscription does not include custom application development. Care plans for bespoke builds are also quoted separately and are not the same packages as Essential, Grow and Pro.",
  },
  {
    id: "bespoke-price",
    group: "bespoke",
    published: true,
    question: "Do you publish a starting price for bespoke work?",
    answer:
      "No. Bespoke work is scoped and quoted for the job in front of us. Ask for a tailored quote and we will reply with a scope rather than a guessed number.",
  },
  {
    id: "timeline",
    group: "general",
    published: true,
    question: "How quickly can a site launch?",
    answer:
      "It depends on the scope, how complete your content is, and how quickly feedback comes back. We agree a realistic plan before we start. We do not promise that every site launches in a fixed number of days.",
  },
];

export type Article = {
  slug: string;
  title: string;
  summary: string;
  published: boolean;
  publishedAt?: string;
  author?: string;
  tags: string[];
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "choosing-a-managed-website",
    title: "Choosing a managed website",
    summary: "Draft. Not for publication until the article is written and approved.",
    published: false,
    tags: ["Managed websites"],
    body: ["Draft only."],
  },
];

export const interests = [
  { value: "managed-website", label: "Managed website" },
  { value: "bespoke-website", label: "Bespoke website" },
  { value: "branding", label: "Branding" },
  { value: "digital-solution", label: "Digital solution" },
  { value: "other", label: "Something else" },
] as const;

export const budgets = [
  "Not sure yet",
  "Monthly subscription",
  "Under £2,000",
  "£2,000 to £5,000",
  "£5,000 to £15,000",
  "Over £15,000",
] as const;

export const timelines = [
  "Just exploring",
  "As soon as we can",
  "Within three months",
  "Three to six months",
  "No fixed date",
] as const;

export const onboardingSteps = [
  "A conversation to confirm the plan, the pages and anything that needs a separate quote.",
  "Content, domain and access gathered. Your domain stays in your name.",
  "Design and build of the agreed initial site, with a defined review cycle.",
  "Launch checks, analytics and the enquiry path.",
  "Monthly care within the allowance for your plan.",
];

export const legal = {
  privacy: {
    title: "Privacy",
    updated: "15 October 2026",
    intro:
      "This notice explains how Mantra Digital Magic Ltd uses personal information collected through this website. It covers enquiries, occasional notes, and analytics. It does not cover a private client workspace, because this site does not have customer accounts.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Mantra Digital Magic Ltd is the controller of personal information collected through this website. We design, build and look after websites, and we quote bespoke digital projects. We work from Buckinghamshire and across the UK.",
          "To ask a question about your information, use the contact form or email support@mantradigital.org.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: ["The contact form collects:"],
        bullets: [
          "Your name, work email and a description of the project.",
          "Any optional details you add: organisation, website, the kind of help you need, a managed-website plan, an indicative budget and a timeline.",
          "The page you arrived on, and campaign details if they were present in the link you followed.",
        ],
      },
      {
        heading: "Occasional notes",
        paragraphs: [
          "If you join the list in the footer, we store the email address you give us and the fact that you asked to hear from us. The notes are occasional updates on websites, digital strategy and AI search. You can ask us to stop at any time.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use enquiry details to reply, to understand whether a managed website or a bespoke project is the right fit, and to keep a record if we go on to work together. The lawful basis is steps towards a contract, and our legitimate interest in answering a message you sent us.",
          "We use a newsletter address only to send the notes you asked for. The lawful basis is your consent. You can withdraw it by asking us to stop.",
          "We use a hidden form field and a limit on how often the form can be submitted to reduce spam. The lawful basis is our legitimate interest in keeping the site usable.",
          "If you accept analytics, we use that information to see which pages and calls to action are used. The lawful basis is your consent. If you reject analytics, that measurement does not run.",
          "We do not sell personal information. We do not use it to make automated decisions that have a legal or similarly significant effect on you.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "Enquiry and newsletter messages are emailed to us through our email provider. If a receipt is switched on, that provider also sends you a short note that we received the form. That note is not a booking confirmation.",
          "If you accept analytics, Google Analytics receives usage information, with IP anonymisation switched on.",
          "Our website host may keep ordinary server logs, such as an IP address and the page requested, so the site can be delivered and protected.",
          "We may share information with a professional adviser, or if the law requires it. We do not pass your details to other businesses so they can market to you.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "If an enquiry does not become a project, we keep it for up to 24 months from our last message, then delete it.",
          "If we work together, we keep the records of that engagement for the life of the work and for six years after it ends, which covers the ordinary time limit for a contract claim.",
          "We keep a newsletter address until you ask us to stop, and then remove it within 30 days.",
          "Your analytics choice is stored in your browser until you clear the site's data or choose again.",
        ],
      },
      {
        heading: "Where information is processed",
        paragraphs: [
          "We are based in the United Kingdom. Our email provider, website host or Google may process information outside the UK. Where that happens, we rely on a lawful transfer safeguard, such as an adequacy decision or the UK international data transfer agreement.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask us for a copy of your information, to correct it, to delete it, to restrict how we use it, or to object to our use of it. Where we rely on consent, you can withdraw that consent. You can also ask us to send you information you provided, in a portable form, where the law gives you that right.",
          "Write to us using the contact form or support@mantradigital.org. We may need to confirm it is you before we act. You can also complain to the Information Commissioner's Office at ico.org.uk. We would like the chance to put something right first.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Cookies and similar storage are explained on the cookie page. Analytics cookies are used only after you accept them.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookies",
    updated: "15 October 2026",
    intro:
      "This page explains the cookies and similar storage used on this website. You can read the pages without accepting analytics.",
    sections: [
      {
        heading: "Your choice",
        paragraphs: [
          "A banner asks you to accept or reject analytics cookies. The rest of the site works either way. Analytics is loaded only if you accept and a measurement ID is configured.",
          "Your choice is stored in local storage on your device under the name mantra-consent. That is not a tracking cookie. It exists so we do not ask you on every page. Clear this site's data in your browser if you want the banner to appear again.",
        ],
      },
      {
        heading: "Analytics cookies",
        paragraphs: [
          "If you accept, we load Google Analytics. It helps us see which pages are visited and which calls to action are used, including a plan chosen from the pricing section. IP anonymisation is switched on. We do not use analytics to identify you by name.",
          "Google may set cookies such as _ga and a cookie beginning _ga_. Those cookies can last for up to two years. Google's own description of how it uses information from sites is at policies.google.com/technologies/partner-sites.",
        ],
      },
      {
        heading: "What we do not use",
        paragraphs: ["This site does not set advertising or social-media cookies, and the contact form does not set a marketing cookie."],
      },
      {
        heading: "Browser controls",
        paragraphs: [
          "You can also block or delete cookies in your browser. Blocking all cookies will not stop you reading the site. It may forget an analytics choice you have already made.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    updated: "15 October 2026",
    intro:
      "These terms cover your use of this website and describe the managed-website and bespoke work we offer. Nothing on this website is an offer capable of acceptance. A project starts only when we have both agreed the scope in writing.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "This website is operated by Mantra Digital Magic Ltd. We design, build and manage websites, and we undertake bespoke digital projects such as booking systems, web applications and brand work. Questions about these terms can be sent through the contact form or to support@mantradigital.org.",
        ],
      },
      {
        heading: "Using the website",
        paragraphs: [
          "You may use the site to read about our work and to send an enquiry. You must not misuse it, attempt to break it, or send anything unlawful through the forms. Case studies describe work we have done. They are not a promise that a new project will produce the same result.",
        ],
      },
      {
        heading: "Managed websites",
        paragraphs: [
          "Essential is £99 a month, Grow is £199 a month and Pro is £399 a month. All of those prices exclude VAT. There is no separate upfront fee for the initial website covered by the plan. Plans begin with a 12-month initial commitment, and the monthly fee is billed in advance.",
          "What happens after those 12 months, including notice and how the arrangement continues, is set out in the agreement we share before you commit. Sending the contact form, or choosing Get started, does not start that commitment.",
        ],
      },
      {
        heading: "What a plan includes",
        paragraphs: [
          "The plan covers the agreed initial website and the monthly care described for that plan. Included update time does not roll into the next month. It covers content edits, not a new layout, a new feature or an extra integration.",
          "Essential does not include a client-facing content system. Grow and Pro include one so you can publish from the templates and content models already approved. That is not unlimited bespoke design.",
          "Foundational AI search support on Grow and Pro makes your services and business details easier for search and answer engines to understand. It does not guarantee inclusion or ranking in Google, ChatGPT, Gemini, Google AI Overviews or any other answer.",
        ],
        bullets: [
          "A new bespoke layout, an extra integration, or a custom application is quoted separately.",
          "Extensive copywriting, ongoing content production, active SEO campaigns, digital PR and paid advertising are quoted separately.",
          "Your domain should stay registered in your name. Source code does not transfer to you automatically when a plan ends.",
        ],
      },
      {
        heading: "Bespoke projects",
        paragraphs: [
          "Brand, web applications, portals and other work outside a managed-website plan are scoped and quoted on their own. A subscription does not include that work. Care for a bespoke build, if you want it, is its own agreement.",
        ],
      },
      {
        heading: "Enquiries",
        paragraphs: [
          "We reply by email. The form does not book a call, and an automatic note that we received a message is not confirmation of a project. Prices on the site are there so you can enquire. The written agreement is what you and we are bound by.",
        ],
      },
      {
        heading: "Our content",
        paragraphs: [
          "The words, design and code of this website belong to Mantra Digital Magic Ltd or our licensors. You may not copy them for your own commercial site. Screenshots of client work are shown with permission to illustrate our services.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We take care to keep the information on this site accurate, and we do not promise that every page is complete or free of interruption. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that the law of England and Wales does not allow us to limit.",
          "For other loss arising only from your use of this website, and not from a signed project agreement, we are not liable for loss of profit, business or goodwill, or for loss that was not reasonably foreseeable. A signed agreement sets the liability position for the work it covers.",
        ],
      },
      {
        heading: "Law",
        paragraphs: [
          "These terms are governed by the law of England and Wales, and the courts of England and Wales will hear disputes about them. We may update these terms by publishing a new version on this page. The date at the top is the latest version.",
        ],
      },
    ],
  },
};
