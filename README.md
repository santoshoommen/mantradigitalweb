# Mantra Digital Magic

Marketing and enquiry website for Mantra Digital Magic Ltd. The homepage follows the supplied showcase. The routes, pricing boundaries, forms and content rules follow `docs/mantra_website_product_design_document.md`.

## Scripts

```bash
npm install
npm run dev
npm test
npm run lint
npm run typecheck
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js App Router, TypeScript and Tailwind CSS, deployed with the assumption of **Vercel**. Vercel runs this App Router project without an OpenNext adapter. Cloudflare Workers remains possible later, but it adds runtime limits this first version does not need.

There is no customer portal, subscription billing or tenant provisioning. The site collects enquiries.

Content lives in `src/lib/content.ts` and is served as-is when Sanity is not configured. `src/sanity/schema.ts` is the Sanity document model (settings, navigation, services, case studies, testimonials, FAQs, articles, authors, pages, pricing plans and SEO fields). Pricing figures stay in code unless a reviewed CMS payload contains all three plans, so a draft cannot wipe £99 / £199 / £399. Draft case studies and articles with `published: false` are not rendered. Legends Plus is seeded as an unpublished draft.

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap and structured data. Production is `https://www.mantradigital.org` |
| `NEXT_PUBLIC_GA_ID` | GA4. Loaded only after the visitor accepts analytics |
| `SANITY_PROJECT_ID`, `SANITY_DATASET` | Optional CMS. Blank uses seeded content |
| `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL` | Enquiry and newsletter email |
| `CONTACT_SEND_ACKNOWLEDGEMENT` | Optional plain reply to the enquirer. It does not confirm a booking |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Optional spam check. Enforced only when both are set |
| `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_INSTAGRAM_URL` | Optional. Icons stay decorative until these are set |

In development, a valid enquiry is accepted and logged when Resend is not configured. The success message says the team was not emailed. In production, missing email configuration returns an error instead of a false success.

## Contact form

`/contact` collects name, work email, organisation, website, service interest, plan (prefilled from `?plan=essential|grow|pro`), budget, timing, project description and consent. Validation runs in the browser and again in `POST /api/contact`. The API checks origin, rate-limits by IP, ignores a honeypot field, and can verify Turnstile. UTM parameters are included in the notification email and are not written to a database.

## Editorial

Write in British English. Be specific and calm. Do not use “revolutionary”, “world-class”, “cutting-edge”, “unlimited”, or any claim that a plan guarantees rankings or mentions in ChatGPT, Gemini or Google AI Overviews.

Publish a case study only when `published` is true and the client has agreed to be named. Leave outcomes empty until the client has approved the number and its source. Do not turn Legends Plus, or any unlaunched project, into a completed story.

Do not publish a testimonial until `approved` is true. The testimonial module is not on the site until that exists.

The blog is not on the public site. Article drafts stay unpublished in the content model until there is something to publish.

Pricing and the 12-month initial commitment must sit next to enquiry buttons, not only in a footnote.

## Deployment

1. Create a Vercel project from this repository.
2. Set the environment variables above. Use the production site URL.
3. Verify the Resend domain and send a test enquiry.
4. Confirm `robots.txt` and `sitemap.xml` after launch, then submit the sitemap in Google Search Console and Bing Webmaster Tools.
5. Run Lighthouse against the production URL. The build is set up for static marketing pages, next/font and no analytics script until consent.

Security headers set in `next.config.ts`: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`. Add HSTS at the host. A strict Content-Security-Policy needs a nonce for Next.js inline scripts; add it when the production domain and any analytics host are final.

## Assumptions

- The showcase image in `docs/` is the visual template. Homepage wording and layout follow it. Inner pages carry the product document’s scope and disclosures.
- The attached wordmark is the logo. Colours are taken from that artwork and the showcase: cream `#FDF8F5`, ink `#202838`, plum `#8E3144`.
- The public name is Mantra Digital Magic Ltd, from the logo. No street address, company number or phone number is shown.
- Social profile URLs are unknown, so those icons are not links.
- The showcase includes a Blog link. That route is not on the public site until there are articles to publish.
- Chiltern Wellbeing, Cook Local and OnlineArtz use screenshots supplied for the public site. No performance numbers are invented.
- Bespoke work says “Request a tailored quote”. The £3,500 starting point is not shown.
- All published prices exclude VAT.
- The enquiry destination email is whatever `CONTACT_TO_EMAIL` is set to.

## Owner approval still required

- Confirm the logo, palette and permission to name Chiltern Wellbeing, Cook Local and OnlineArtz.
- Legal trading name, address, company number and contact email for the footer and policies.
- Contract wording: minimum term after month 12, notice, termination, ownership, licence, buyout, domain and export. The site does not claim source code transfers on cancellation.
- Support hours, response targets, revision rounds during the initial build, and whether the first month is charged.
- Whether Grow booking integration is one standard provider or only where it is technically feasible.
- What Pro includes at launch, and what counts as an included integration.
- Approved case-study outcomes, if any.
- A solicitor should review the privacy, cookie and terms pages before they are treated as the client contract. The signed agreement still governs each project.
- Whether to show a bespoke starting price.
- Analytics ID and cookie wording before GA4 is enabled.
