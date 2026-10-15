import type { Metadata } from "next";

export const siteName = "Mantra Digital Magic";
export const legalName = "Mantra Digital Magic Ltd";

export const defaultDescription =
  "We design, build and manage websites and web applications that help your business attract customers, streamline operations and grow online.";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return raw.replace(/\/$/, "");
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
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
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
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    slogan: "Your business deserves more than just a website.",
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

export function serviceJsonLd(service: { title: string; description: string; path: string }) {
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
    areaServed: "United Kingdom",
  };
}
