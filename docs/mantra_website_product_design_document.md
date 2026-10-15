# Mantra Digital Magic — Website Product Design Document

**Version:** 1.0  
**Date:** 14 October 2026  
**Status:** Implementation-ready brief; commercial and brand assumptions explicitly flagged  
**Audience:** AI coding agent, designer, product owner, QA

## 0. Instructions to the implementation agent

Build a production-quality, responsive, accessible marketing and lead-generation website for **Mantra Digital Magic**. This document is the source of truth for scope, content intent, design direction, interaction, architecture and acceptance tests. Do not invent client testimonials, project outcomes, awards, company registrations, pricing exclusions, legal terms, or case-study metrics. Mark missing factual information as editable CMS fields or clearly labelled placeholders. Preserve the existing Mantra logo and brand assets if provided; do not fabricate a replacement logo. Make reasonable implementation choices without blocking progress, but report assumptions in a README and highlight decisions requiring owner approval.

**Deliverables:** working application; clean repository; CMS schema and seeded content; functional lead capture; SEO metadata and structured data; deployment instructions; environment-variable template; tests; accessibility and performance checks; concise editorial guide. No placeholder buttons or dead-end CTAs.

## 1. Business objectives and positioning

Mantra Digital Magic is a UK digital agency offering premium design, website development, full-stack digital solutions and ongoing management. The website should generate inbound leads beyond personal referrals, demonstrate genuine delivery capability, convert visitors into discovery calls or qualified enquiries, and create a recurring revenue stream from managed website subscriptions while preserving a separate bespoke offering.

**Core positioning:** *Your business deserves more than just a website.* Supporting message: *Beautifully designed, professionally built and continuously managed digital experiences that help your business grow.* Avoid describing Mantra primarily as a low-cost site builder, an AI website factory or a commodity template vendor. AI-assisted delivery is an internal efficiency advantage, not the main customer-facing value proposition.

**Primary audiences:** (1) UK SMEs needing a professional managed website without upfront development fees; (2) established service businesses needing CMS, search visibility and lead conversion; (3) organisations seeking bespoke branding, web applications, bookings, payments or integrations; (4) existing customers needing ongoing care and optimisation. Initially favour Buckinghamshire and nearby UK service businesses, without making the brand appear geographically limited.

**Business KPIs:** qualified enquiries per month, discovery calls booked, enquiry-to-call conversion, proposal conversion, subscriptions by tier, average recurring revenue, bespoke project pipeline, organic landing-page traffic, source attribution and contact-form completion. No unsubstantiated target numbers are required at launch.

## 2. Commercial offering — authoritative display copy

### Managed websites

All plans: **£0 upfront website development fee**, **12-month initial commitment**, monthly billing in advance (subject to legal review), managed hosting, SSL, baseline security, monitoring, technical maintenance, mobile-responsive design, enquiry form, analytics and basic search-engine discoverability. Following the initial term, propose monthly rolling service with notice provisions **pending owner/legal approval**. Do not claim the site or source code transfers automatically at cancellation; provide a transparent FAQ and approved contract terms before launch.

| Feature | Essential | Grow | Pro |
|---|---|---|---|
| Price | **£99/month** | **£199/month** | **£399/month** |
| Positioning | Professional online presence | Grow and manage your digital presence | Ongoing digital partner |
| Initial site | Up to 10 pages | Up to 10 designed pages at launch | Tailored initial scope, agreed in proposal |
| Design | Professional, customised styling from reusable foundations | Enhanced design and conversion-focused layouts | Advanced design and prioritised improvements |
| CMS editing | No client-facing CMS | Client CMS with self-service publishing | Advanced CMS and content structures |
| Additional content pages | Changes requested through Mantra; extra builds quoted | Client may publish additional pages using existing templates | Same, plus advanced structures as scoped |
| SEO | Foundational on-page and technical SEO | Enhanced SEO | Enhanced SEO with ongoing review |
| AI search optimisation | Not included as a dedicated service | **Foundational GEO/AEO included** | Enhanced GEO/AEO and ongoing recommendations |
| Booking | Quoted separately | Integration with supported existing provider, scoped at onboarding | Supported integrations within agreed scope |
| Included content changes | **15 min/month** | **60 min/month** | **3 hours/month** |
| Reporting | Analytics integration | Quarterly performance review | Monthly performance review |
| Support | Standard | Priority | Higher priority |

**Important scope rules:** Included update allowances are non-cumulative; define service hours and response targets before launch. Content edits are not feature development. New bespoke layouts, additional integrations, extensive copywriting, custom applications, active SEO campaigns, digital PR, paid ads and ongoing content production are separately quoted. CMS publishing is not unlimited bespoke design work. Publish a fair-use technical usage policy; avoid arbitrary page-count restrictions on CMS-generated pages. A client's new CMS page is generated from existing approved page templates and content models.

**GEO/AEO scope (Grow):** semantic and answer-focused information architecture, clear services/location/expertise content, applicable schema.org structured data, indexability/crawl checks, canonical URLs, sitemap, factual business entity consistency and appropriately written FAQ/answer sections. Do **not** guarantee inclusion or ranking in ChatGPT, Gemini, Google AI Overviews or other AI answers. Pro adds periodic audits, content opportunity recommendations and review of measurable AI-referred traffic where available; do not promise a comprehensive third-party AI citation-monitoring platform without a contracted tool.

**Commercial items awaiting owner sign-off:** VAT-inclusive versus plus-VAT display; payment provider; billing automation; cancellation and termination policy; source-code licence/buyout; support hours and SLAs; revision limits during initial build; whether first month is charged; specific Pro launch-page scope. Until confirmed, site should display the monthly prices and '12-month initial commitment' with a clearly linked 'Full terms available before agreement'; do not invent legal conditions. Do not claim VAT is included unless confirmed.

### Bespoke digital services

Distinct from subscriptions. Services: website strategy and UX; brand identity and visual design; bespoke websites; CMS implementation; booking and payment workflows; customer portals; web applications; third-party API integration; automation; analytics; SEO-ready architecture; AI search readiness; hosting/migration; care and optimisation. Show **'Bespoke projects from £3,500'** as an indicative starting point **only after owner approval**; otherwise use 'Request a tailored quote'. No promise that a subscription includes custom application development.

### Optional bespoke care plans

A separate recurring care-plan offering for customers who pay upfront for bespoke builds; scope and pricing by quotation. Do not imply these are the same as subscription packages.

## 3. Information architecture and routes

**Required:**
- `/` Home
- `/managed-websites` Subscription offering and tier comparison
- `/services` Service overview
- `/services/web-design-development`
- `/services/branding-design`
- `/services/digital-solutions` (apps, integrations, booking/payments, automation)
- `/services/seo-ai-search` (SEO + GEO/AEO, realistic promises)
- `/work` Portfolio index
- `/work/[slug]` Case-study template
- `/about` Team, approach and values
- `/process` Discovery → Design → Build → Launch → Evolve
- `/contact` Qualified enquiry form
- `/insights` Editorial index (launch only with approved content; otherwise omit from nav)
- `/insights/[slug]` Article template
- `/faq` Subscription and bespoke FAQs
- `/privacy`, `/cookies`, `/terms` Owner-approved legal content (no fabricated legal copy)
- Custom 404 and friendly error states.

Global navigation: Work, Services, Managed Websites, About, Insights (if populated), Contact. Primary CTA: **Let's talk** or **Book a discovery call** only if booking is actually configured. Mobile menu accessible with focus management. Footer includes core services, plan link, contact, legal links, business information only if verified, and a restrained location reference.

## 4. Visual design system

**Visual intent:** sophisticated, feminine-modern where appropriate, light, editorial, distinctive, warm and confident. High-quality agency presentation; avoid generic gradients, random floating orbs, glassmorphism overload, stock-photo hero clichés, icon-card grids on every section and unsubstantiated badges. Reference the existing lowercase 'mantra' identity with a diamond/bindi accent above the 'n' if supplied. Do not assume a final palette; create editable design tokens. Proposed exploratory palette: warm off-white `#FAF8F6`, charcoal `#202027`, muted plum `#8B416F`, blush `#F2E7EC`, pale stone `#EAE6E2`; these are **provisional** and must be adjusted to actual logo artwork. No gradient requirement.

Typography: expressive editorial heading type paired with legible contemporary sans for body; use licensed/open fonts, fluid type scales, careful line lengths, generous whitespace, meaningful asymmetry, subtle motion and strong contrast. Implement design tokens for colour, type, spacing, radii, shadows, breakpoints and motion.

Imagery: actual approved screenshots/mockups from Mantra projects first; use tasteful abstract compositions or licensed imagery only where needed. Avoid inventing project screenshots. Portfolio thumbnails must accurately represent the delivered work. Design responsive desktop/tablet/mobile views; honour `prefers-reduced-motion`. Hover effects must have keyboard and touch equivalents.

Suggested reusable UI: split-screen hero, editorial service features, portfolio image panels, sticky sub-navigation on long pages, clear process timeline, accessible accordion, pricing comparison, testimonial module (hidden until approved quotes exist), conversion CTA strip, form progress/confirmation, content cards, page breadcrumbs and a restrained floating contact affordance if it improves UX.

## 5. Page-by-page functional and content specification

### Home `/`
1. Header: logo, main nav, strong enquiry CTA.
2. Hero: headline 'Your business deserves more than just a website.' Subhead covering design, development and ongoing digital partnership. CTAs 'Explore our work' and 'Let's talk'. Show approved project imagery, not a fabricated client logo wall.
3. Credibility: concrete capabilities and case studies; no invented numbers or awards.
4. What we do: three visually distinct pathways — Managed Websites, Bespoke Websites & Branding, Digital Solutions & Integrations.
5. Selected work: approved Chiltern Wellbeing case study; additional projects only when approved.
6. Managed website teaser: 'From £99/month. No upfront website development fee.' Link to full plans and 12-month term disclosure.
7. Why Mantra: thoughtful design, engineering depth, full lifecycle ownership, ongoing support.
8. Journey: Discover → Design → Develop → Launch → Improve with connected timeline/visual progression rather than five identical boxes.
9. Closing enquiry CTA and footer.

### Managed Websites `/managed-websites`
Hero with value proposition and immediate visible prices. Three tier cards (£99/£199/£399), Grow visually recommended but not manipulative. Full accessible feature comparison. Explain what 'no upfront development fee' means, 12-month commitment, CMS publishing, how content/revisions work, onboarding steps, included versus separately quoted services, domain ownership, site continuity/cancellation subject to approved terms. CTA on each tier: **Enquire about Essential/Grow/Pro** linking to `/contact?plan=essential|grow|pro` with preselection. FAQ accordion. Do not implement direct purchase or Stripe subscriptions in V1 unless owner requests; these are lead-gen packages requiring scope confirmation.

### Services
Service overview and four detail routes. Each service page needs: audience problem, approach, tangible deliverables, relevant proof/case study, boundaries, CTA. For SEO/AI search: distinguish technical readiness from ongoing ranking or AI placement; provide understandable examples, not claims of guaranteed exposure.

### Work and case studies
Index with filterable tags (e.g. Web Design, Development, CMS, Digital Experience). Case-study content model: title, client, permission/publication status, summary, challenge, approach, solution, tech (optional), outcomes with source/approval flag, hero screenshot, supporting imagery, related services, CTA. **Chiltern Wellbeing:** may be used as an initial candidate, but seek permission for logo/screenshots/testimonial; don't invent numerical growth. **EPIC Global Solutions** and **Legends Plus:** do not describe as completed until launched and client-approved. Case studies can be hidden via `published` flag.

### About
Small, credible agency story; design-led thinking plus senior technical delivery. No invented team size, biographies or awards. Explain Mantra's working model and how clients interact with the agency.

### Process
Discovery and goals → strategy and visual direction → design and approval → implementation and QA → launch and handover → continuous care. Distinguish managed subscription onboarding from bespoke project scoping. Include typical timelines only if owner-approved; avoid promising all sites launch in seven days.

### Contact
Enquiry form with: name (required), work email (required), organisation (optional), website URL (optional), service interest (managed website/bespoke website/branding/digital solution/SEO & AI search/other), subscription plan (conditional or query-prefilled), indicative budget (optional; sensible ranges), project description (required), timeline (optional), consent/privacy acknowledgement. Validate on client and server; honeypot + rate limiting + Turnstile optional; send via Resend (or configured provider), record source/UTM and campaign metadata without storing sensitive excess data. Show accessible success/error messages; prevent duplicate sends; send notification to Mantra and optional acknowledgment to lead. Never claim booking completed without an actual booking integration.

### Insights
CMS-managed articles with author, publish date, summary, hero, content, tags, canonical, SEO metadata, FAQ optional, related articles. Launch with zero indexable thin articles; hide section until there is useful original content. Suggested editorial topics: choosing a managed website, what CMS ownership means, website SEO vs AI discovery, booking integrations for service businesses, when bespoke development is worthwhile.

## 6. Recommended technology architecture

Use existing Mantra familiarity to minimise operational overhead:
- **Next.js App Router + TypeScript** on Vercel or Cloudflare Workers/OpenNext; choose one target and document rationale and runtime limitations before implementing.
- **Tailwind CSS** with design tokens, accessible headless primitives where appropriate, reusable server components and minimal client-side JS.
- **Sanity CMS** for portfolio, insights, services, FAQs, site settings, navigation and reusable editorial sections; website should remain functional if CMS is temporarily unavailable via caching/revalidation strategy.
- **Resend** for contact notifications, with verified sender domain and secrets in environment variables.
- **Analytics:** GA4 and/or privacy-conscious alternative subject to consent configuration; use Google Search Console and Bing Webmaster Tools.
- **Cloudflare Turnstile** optional for form abuse; server verification mandatory if enabled.
- **Images:** use Next image optimisation or deployment-compatible image pipeline; CMS assets may live in Sanity; do not require R2 for V1 unless needed.
- **No customer subscription portal, payments or tenant provisioning in V1.** The marketing site collects enquiries; future client onboarding/billing system is a separate phase.

Suggested project structure:
```
apps/web/app/(marketing)/...
apps/web/app/api/contact/route.ts
apps/web/components/{layout,sections,forms,pricing,portfolio}
apps/web/lib/{cms,seo,validation,analytics,mail}
apps/web/styles/
apps/studio/   # optional standalone Sanity Studio
packages/ui/  # only if useful; avoid premature monorepo complexity
```

### CMS schemas
`siteSettings`, `navigation`, `service`, `caseStudy`, `testimonial`, `faq`, `article`, `author`, `page`, `pricingPlan`, `seoFields`. For pricingPlan support features with categories, included/excluded labels, plan ordering, highlight flag and versioned terms footnote. Lock or review pricing changes before publish to avoid accidental inconsistency. Content editor should have previews and publishing controls; draft projects never appear publicly.

### Content modelling
Prefer structured content and portable blocks; avoid turning every page into an unrestricted page-builder. Create approved layout modules: hero, split feature, editorial text, media gallery, service tiles, process timeline, stats with verified source, FAQ, CTA, pricing and related work. Sanity editors can reorder approved sections without breaking responsive design.

## 7. SEO, GEO/AEO and discoverability requirements

Per-page unique title, description, canonical URL, Open Graph/Twitter images, sitemap.xml, robots.txt, breadcrumbs where applicable, internal links, descriptive image alt text and correct heading hierarchy. Generate JSON-LD for `Organization` and `WebSite`; add `Service`, `BreadcrumbList`, `Article`, `FAQPage` or `LocalBusiness` only when semantically appropriate and factual. Do not overpromise FAQ rich results. Ensure server-rendered crawlable content, fast page delivery, stable URLs, correct redirects, no accidental `noindex` on production, and structured data validation.

For AI search readiness: use concise factual service descriptions, clear headings and answer-oriented sections, explicit company/service/location facts, consistent naming, accessible HTML, transparent authorship where appropriate, and citation-worthy original case-study content. Respect crawler controls and privacy. Avoid claiming that adding an `llms.txt` file or schema alone guarantees AI visibility. Establish a measurement baseline for organic search, branded searches, enquiries and AI referral traffic where measurable.

Local discoverability: accurate Buckinghamshire service-area language; create relevant local landing pages only where genuinely useful and unique, not doorway pages. Google Business Profile only if eligibility and business details are confirmed.

## 8. Accessibility, privacy, security and performance

Target WCAG 2.2 AA. Keyboard navigation, visible focus, skip link, labelled form fields, semantic headings/landmarks, contrast, reduced motion, descriptive error handling, accessible mobile menu, modal focus management and touch target sizes. Test at 320px, 375px, 768px, 1024px and wide desktop.

GDPR/UK privacy: minimise lead data, configurable retention, privacy notice approved by owner, cookie consent for non-essential analytics where legally required, no tracking before consent where applicable. No secrets in browser bundle. Contact endpoint: schema validation, origin checks as appropriate, rate limits, anti-spam controls, output escaping, safe logging and no PII in analytics events. Add security headers compatible with CMS/assets and deployed platform.

Performance targets (field data where available): Core Web Vitals 'good' thresholds: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at 75th percentile; initial Lighthouse mobile goal >=90 performance and >=95 accessibility/SEO, subject to realistic hosting/network constraints. Optimise fonts, images, responsive sizes, caching, lazy loading and third-party scripts.

## 9. Conversion tracking and analytics

Track consent-respecting events: `cta_click` (location, destination), `pricing_plan_select` (tier), `contact_form_start`, `contact_form_submit`, `contact_form_success`, `portfolio_case_view`, `service_page_view`. Capture UTM attribution where available and privacy-compliant. Build an internal report specification: sessions, organic sessions, landing pages, qualified enquiries, form conversion, plan interest, source/campaign, discovery-call bookings if integrated. Avoid vanity metrics without actionability.

## 10. Responsive interaction details

Desktop: editorial grid, generous imagery, sophisticated hover states, clear persistent navigation. Tablet: two-column sections collapse gracefully. Mobile: one-column hierarchy, visible pricing and CTA, sticky header only if it doesn't obscure content, no horizontal overflow. Pricing comparison should use accessible cards or a horizontally scrollable labelled table; preserve feature meaning. Animations should be subtle, performant and optional under reduced motion. All accordions, menus, tabs and filters must be keyboard-operable and announce state correctly.

## 11. Content voice and writing rules

British English. Warm, intelligent, direct, understated confidence. Avoid 'revolutionary', 'world-class', 'cutting-edge', 'guaranteed rankings', invented client outcomes and AI jargon for its own sake. Lead with business outcomes, then explain how design and engineering support them. Avoid 'unlimited' unless qualified. Every page needs a clear next step. Ensure price and contract disclosures are adjacent to purchase-intent CTAs, not hidden in footnotes.

Example homepage copy:
- H1: **Your business deserves more than just a website.**
- Intro: **We design, build and look after digital experiences that make your business easier to discover, trust and choose. From fully managed websites to bespoke platforms, Mantra brings considered design and dependable engineering together.**
- Managed offering: **A website that works for your business, without the upfront development cost. Plans from £99/month, with a 12-month initial commitment.**
- CTA: **Tell us what you're building.**

## 12. Implementation phases

**Phase 0 — discovery/inputs:** collect approved logo files, fonts/colours, domain, business contact details, approved project screenshots, verified client permissions, legal documents, email sender/domain, analytics IDs, hosting preference, VAT policy and subscription terms. Log missing inputs.

**Phase 1 — foundation:** repository, design tokens, responsive shell, navigation/footer, SEO helpers, CMS schemas, preview, image handling and environment configuration.

**Phase 2 — core pages:** home, managed websites/pricing, services, process, about, work, case-study templates, FAQ and contact. Seed real approved content; flag placeholders.

**Phase 3 — conversion:** contact API and email, plan preselection, spam prevention, analytics, thank-you UX, error states, privacy controls.

**Phase 4 — QA and launch:** automated tests, content review, responsive/a11y/performance/security checks, structured data validation, staging approval, production deployment, sitemap submission, monitoring and rollback plan.

**Phase 5 — post-launch (not V1 blocker):** editorial programme, case-study expansion, A/B testing, automated lead CRM, booking integration, customer portal, subscription billing, lead nurture, local landing pages based on evidence.

## 13. Acceptance criteria / definition of done

1. Every required route loads without console/runtime errors and works on mobile/tablet/desktop.
2. Prices consistently show £99, £199 and £399 per month; 12-month initial term and no upfront development fee disclosed.
3. Essential displays up to 10 initial pages and no client CMS; Grow and Pro clearly explain self-service publishing from existing templates, not unlimited bespoke layouts.
4. Grow clearly includes foundational AI search optimisation with no placement guarantees.
5. Every plan CTA preselects the correct plan in the contact form.
6. Form has working server-side validation, abuse protection, delivery and success/failure states; test emails received.
7. CMS can publish/unpublish approved case studies and articles, and drafts remain hidden.
8. No fabricated case-study outcomes, testimonials, client logos or legal claims appear.
9. Unique SEO metadata, canonical tags, sitemap, robots, schema and indexability checks work in production.
10. Keyboard-only navigation and screen-reader labels are functional; automated accessibility tests pass with manual spot checks.
11. Core Web Vitals and image optimisation are measured; major performance regressions resolved.
12. Analytics respects configured consent, with useful enquiry and plan-selection events.
13. Deployment is reproducible from README and `.env.example`; no credentials committed.
14. All owner-approval blockers are listed in a final handover checklist, with no unsupported legal copy silently published.

## 14. Test plan

- Unit: pricing data, metadata builders, form schema, URL/UTM parsing, CMS data mapping.
- Integration: contact submission, mail-provider failure, rate limiting, invalid inputs, CMS draft/published filtering.
- E2E: homepage → pricing → Grow CTA → prefilled enquiry → successful submission; mobile nav; work → case study → contact; FAQ keyboard controls; 404.
- Accessibility: axe checks plus manual keyboard/screen-reader walkthrough for menu, comparison, accordion and form.
- Visual: screenshot comparison at mobile/tablet/desktop; long headings and translated/expanded text resilience.
- SEO: production crawl, canonical/robots/sitemap, structured data and social share previews.
- Security: verify no secrets leaked, no form open relay, abuse controls, safe error responses.

## 15. Decisions requiring owner approval before production

- Actual logo, approved visual identity and image assets.
- Legal trading name/contact address/company details for footer and policies.
- VAT status and whether prices are inclusive or exclusive of VAT.
- Contract wording: minimum term, notice, early termination, ownership, licence, buyout, domain and export.
- Exact build revisions, support SLAs, support hours, content-edit accounting and fair use.
- Whether Grow booking integration is included as one standard provider or only where technically feasible after scoping.
- Pro initial website scope and what constitutes an included integration.
- Approved portfolio material and case-study outcomes; permission to feature clients.
- CMS, hosting and analytics provider selection if existing organisational standards differ.
- Enquiry destination email, sender domain and privacy/cookie policy.
- Whether to display a bespoke project starting price.

## 16. Prompt for AI coding agent

> Implement the Mantra Digital Magic marketing website described in `mantra_website_product_design_document.md`. Start by auditing the existing repository and assets. Write a concise implementation plan and identify missing owner-approved content without inventing it. Build the production-ready responsive website using Next.js App Router, TypeScript, an accessible component system, Sanity CMS and a server-validated Resend enquiry flow, unless the repository has an established equivalent architecture. Prioritise premium visual design, conversion-focused UX, honest pricing and service boundaries, SEO and AI search readiness, performance, accessibility and secure deployment. Use approved client work only. Implement the routes, components, CMS models, tests, analytics events and acceptance criteria in the PDD. Run lint, typecheck, tests, build and browser-level responsive checks; fix failures. Document environment setup, deployment, CMS editorial workflows, assumptions and outstanding owner approvals. Do not implement subscription billing or customer accounts in V1.
