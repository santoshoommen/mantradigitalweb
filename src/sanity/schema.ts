/**
 * Sanity content model for the marketing site.
 * These objects match Sanity v3 document schemas and can be registered in a Studio.
 * Pricing stays in code (src/lib/content.ts) until a dataset is reviewed, so a draft
 * publish cannot silently change £99 / £199 / £399.
 */

const seoFields = [
  { name: "seoTitle", title: "SEO title", type: "string" },
  { name: "seoDescription", title: "SEO description", type: "text", rows: 3 },
  { name: "canonicalPath", title: "Canonical path", type: "string" },
  { name: "ogImage", title: "Social image", type: "image" },
  { name: "noIndex", title: "Hide from search engines", type: "boolean" },
];

export const schemaTypes = [
  {
    name: "siteSettings",
    title: "Site settings",
    type: "document",
    fields: [
      { name: "siteName", type: "string", validation: "required" },
      { name: "legalName", type: "string" },
      { name: "description", type: "text" },
      { name: "contactEmail", type: "string", description: "Publish only after the address is confirmed." },
      { name: "locationNote", type: "string" },
      { name: "linkedin", type: "url" },
      { name: "instagram", type: "url" },
      ...seoFields,
    ],
  },
  {
    name: "navigation",
    title: "Navigation",
    type: "document",
    fields: [
      {
        name: "primary",
        type: "array",
        of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "string" }] }],
      },
      {
        name: "footerServices",
        type: "array",
        of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "string" }] }],
      },
    ],
  },
  {
    name: "service",
    title: "Service",
    type: "document",
    fields: [
      { name: "navLabel", type: "string" },
      { name: "title", type: "string" },
      { name: "slug", type: "slug", options: { source: "title" } },
      { name: "lede", type: "text" },
      { name: "problem", type: "text" },
      { name: "approach", type: "text" },
      { name: "deliverables", type: "array", of: [{ type: "string" }] },
      { name: "boundaries", type: "array", of: [{ type: "string" }] },
      { name: "relatedWork", type: "string" },
      { name: "order", type: "number" },
      ...seoFields,
    ],
  },
  {
    name: "caseStudy",
    title: "Case study",
    type: "document",
    fields: [
      { name: "title", type: "string" },
      { name: "slug", type: "slug" },
      { name: "client", type: "string" },
      { name: "website", type: "url" },
      { name: "published", type: "boolean", description: "Drafts stay off the public site." },
      { name: "permissionNote", type: "text", description: "Internal. Not shown publicly." },
      { name: "summary", type: "text" },
      { name: "cardLabel", type: "string" },
      { name: "challenge", type: "text" },
      { name: "approach", type: "text" },
      { name: "solution", type: "text" },
      { name: "tags", type: "array", of: [{ type: "string" }] },
      { name: "services", type: "array", of: [{ type: "string" }] },
      {
        name: "outcomes",
        type: "array",
        description: "Leave empty unless the client has approved the figure and its source.",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", type: "string" },
              { name: "value", type: "string" },
              { name: "source", type: "string" },
              { name: "approved", type: "boolean" },
            ],
          },
        ],
      },
      ...seoFields,
    ],
  },
  {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
      { name: "quote", type: "text" },
      { name: "person", type: "string" },
      { name: "role", type: "string" },
      { name: "published", type: "boolean", initialValue: false },
      { name: "approved", type: "boolean", description: "Do not publish without written client approval." },
    ],
  },
  {
    name: "faq",
    title: "FAQ",
    type: "document",
    fields: [
      { name: "question", type: "string" },
      { name: "answer", type: "text" },
      { name: "group", type: "string", options: { list: ["managed", "bespoke", "general"] } },
      { name: "published", type: "boolean" },
      { name: "order", type: "number" },
    ],
  },
  {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
      { name: "name", type: "string" },
      { name: "role", type: "string" },
    ],
  },
  {
    name: "article",
    title: "Article",
    type: "document",
    fields: [
      { name: "title", type: "string" },
      { name: "slug", type: "slug" },
      { name: "summary", type: "text" },
      { name: "published", type: "boolean", initialValue: false },
      { name: "publishedAt", type: "datetime" },
      { name: "author", type: "reference", to: [{ type: "author" }] },
      { name: "tags", type: "array", of: [{ type: "string" }] },
      { name: "body", type: "array", of: [{ type: "block" }] },
      ...seoFields,
    ],
  },
  {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
      { name: "title", type: "string" },
      { name: "slug", type: "slug" },
      {
        name: "sections",
        type: "array",
        of: [
          { type: "heroSection" },
          { type: "editorialSection" },
          { type: "ctaSection" },
        ],
      },
      ...seoFields,
    ],
  },
  {
    name: "pricingPlan",
    title: "Pricing plan",
    type: "document",
    description: "Review prices against src/lib/content.ts before publishing. The site keeps code prices if CMS data is incomplete.",
    fields: [
      { name: "planId", type: "string", options: { list: ["essential", "grow", "pro"] } },
      { name: "name", type: "string" },
      { name: "price", type: "number" },
      { name: "positioning", type: "string" },
      { name: "recommended", type: "boolean" },
      { name: "order", type: "number" },
      { name: "termsFootnote", type: "text" },
      {
        name: "features",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", type: "string" },
              { name: "category", type: "string" },
              { name: "included", type: "boolean" },
            ],
          },
        ],
      },
    ],
  },
  { name: "seoFields", title: "SEO fields", type: "object", fields: seoFields },
];
