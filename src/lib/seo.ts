import type { Metadata } from "next";

export const siteName = "Mantra Digital Magic";
export const legalName = "Mantra Digital Magic Ltd";

export const defaultDescription =
  "Mantra Digital Magic designs, builds and looks after websites for companies across the UK. The studio is based in Buckinghamshire. Managed plans from £99 a month, excluding VAT.";

const areaServed = [
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "AdministrativeArea", name: "Buckinghamshire" },
];

export const productionSiteUrl = "https://www.mantradigital.org";

export function resolveSiteUrl(nodeEnv: string | undefined, configured: string | undefined) {
  const value = configured?.trim().replace(/\/$/, "") ?? "";
  const local = value.length === 0 || /localhost|127\.0\.0\.1/.test(value);
  if (nodeEnv === "development" && local) return "http://localhost:3000";
  if (local || value === "https://mantradigital.org" || value === "http://mantradigital.org") {
    return productionSiteUrl;
  }
  return value;
}

export function getSiteUrl() {
  return resolveSiteUrl(process.env.NODE_ENV, process.env.NEXT_PUBLIC_SITE_URL);
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = `${getSiteUrl()}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        }
      : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  const sameAs = [process.env.NEXT_PUBLIC_LINKEDIN_URL, process.env.NEXT_PUBLIC_INSTAGRAM_URL].filter(
    (value): value is string => Boolean(value),
  );
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: legalName,
    url: getSiteUrl(),
    logo: `${getSiteUrl()}/brand/mantra-logo.png`,
    description: defaultDescription,
    areaServed,
    slogan: "Your business deserves more than just a website.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Buckinghamshire",
      addressCountry: "GB",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: getSiteUrl(),
    publisher: {
      "@type": "Organization",
      name: legalName,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path}`,
    })),
  };
}

export function reviewJsonLd(review: { body: string; author: string; jobTitle: string; itemName: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: review.body,
    author: {
      "@type": "Person",
      name: review.author,
      jobTitle: review.jobTitle,
    },
    itemReviewed: {
      "@type": "WebSite",
      name: review.itemName,
      url: `${getSiteUrl()}${review.path}`,
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  path: string;
  offers?: { name: string; price: number; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${getSiteUrl()}${service.path}`,
    provider: {
      "@type": "Organization",
      name: legalName,
    },
    areaServed,
    ...(service.offers
      ? {
          offers: service.offers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            price: String(offer.price),
            priceCurrency: "GBP",
            description: offer.description,
            url: `${getSiteUrl()}${service.path}`,
          })),
        }
      : {}),
  };
}
