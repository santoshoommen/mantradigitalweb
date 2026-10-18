import { getSiteUrl, legalName } from "@/lib/seo";

export function llmsTxt() {
  const base = getSiteUrl();
  const page = (path: string) => `${base}${path === "/" ? "" : path}`;
  return `# Mantra Digital Magic

> ${legalName} designs, builds and looks after websites for companies across the United Kingdom. The studio is based in Buckinghamshire.

Prices on the site exclude VAT. Managed website plans are £99, £199 and £399 a month and start with a 12-month initial commitment. There is no separate upfront website development fee. Nothing on the website, by itself, is a contract. Foundational AI search support does not guarantee placement in Google, ChatGPT, Gemini, Google AI Overviews or any other answer engine.

The site does not publish a street address, phone number or company number.

## Pages

- [Home](${page("/")}): Studio overview, managed plans and selected work.
- [Managed websites](${page("/managed-websites")}): Essential, Grow and Pro plans, what is included, and what is not.
- [Services](${page("/services")}): Web design, branding and digital solutions.
- [Web design and development](${page("/services/web-design-development")}): Marketing sites built around the job the business needs done.
- [Branding and design](${page("/services/branding-design")}): Visual direction for the website and the materials already in use.
- [Digital solutions](${page("/services/digital-solutions")}): Bookings, payments, portals and focused web applications.
- [Our work](${page("/work")}): Chiltern Wellbeing, Cook Local and OnlineArtz. Funmi Obi, founder of Chiltern Wellbeing Foot & Ankle Clinic in Hayes, reports 72 new patients in August and 75 in September after the new website launched, up from around 52 a month. She attributes that result to the website. It is her account of the clinic, not a forecast for another business.
- [About](${page("/about")}): A UK studio based in Buckinghamshire.
- [Process](${page("/process")}): How a project moves from discovery to launch and care.
- [FAQ](${page("/faq")}): Commitment, VAT, CMS access and bespoke quotes.
- [Contact](${page("/contact")}): Enquiry form for a managed website or a bespoke project.
- [Privacy](${page("/privacy")}): How enquiry details, notes and analytics are used.
- [Cookies](${page("/cookies")}): Analytics cookies and the consent choice.
- [Terms](${page("/terms")}): How this website and the published plans work.

## Plans

- Essential: £99 a month, excluding VAT. Up to 10 pages, forms, basic SEO and 15 minutes of updates.
- Grow: £199 a month, excluding VAT. Adds a CMS, foundational AI search support and 60 minutes of updates.
- Pro: £399 a month, excluding VAT. Adds integrations, review and 3 hours of updates.
`;
}
