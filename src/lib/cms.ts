import { createClient, type SanityClient } from "@sanity/client";
import {
  articles,
  caseStudies,
  faqs,
  onlyPublished,
  services,
  type Article,
  type CaseStudy,
  type Faq,
  type Service,
} from "@/lib/content";

function sanityConfig() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  if (!projectId || !dataset) return null;
  return {
    projectId,
    dataset,
    apiVersion: process.env.SANITY_API_VERSION || "2026-10-15",
  };
}

function client(): SanityClient | null {
  const config = sanityConfig();
  if (!config) return null;
  return createClient({
    ...config,
    useCdn: true,
  });
}

async function fetchPublished<T>(query: string, guard: (value: unknown) => value is T[]): Promise<T[] | null> {
  const cms = client();
  if (!cms) return null;
  const result: unknown = await cms.fetch(query);
  if (!guard(result)) {
    throw new Error("CMS response did not match the expected shape.");
  }
  return result;
}

function isCaseStudyArray(value: unknown): value is CaseStudy[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        item &&
        typeof item === "object" &&
        "slug" in item &&
        "title" in item &&
        "published" in item,
    )
  );
}

function isArticleArray(value: unknown): value is Article[] {
  return (
    Array.isArray(value) &&
    value.every((item) => item && typeof item === "object" && "slug" in item && "title" in item)
  );
}

function isFaqArray(value: unknown): value is Faq[] {
  return (
    Array.isArray(value) &&
    value.every((item) => item && typeof item === "object" && "question" in item && "answer" in item)
  );
}

function isServiceArray(value: unknown): value is Service[] {
  return (
    Array.isArray(value) &&
    value.every((item) => item && typeof item === "object" && "slug" in item && "title" in item)
  );
}

export async function loadCaseStudies() {
  try {
    const remote = await fetchPublished(
      `*[_type == "caseStudy"]{
        "slug": slug.current,
        title,
        client,
        summary,
        cardLabel,
        challenge,
        approach,
        solution,
        tags,
        services,
        published,
        permissionNote
      }`,
      isCaseStudyArray,
    );
    return onlyPublished(remote ?? caseStudies);
  } catch (error) {
    console.error("CMS unavailable for case studies. Using seeded content.");
    console.error(error instanceof Error ? error.message : "Unknown CMS error");
    return onlyPublished(caseStudies);
  }
}

export async function loadArticles() {
  try {
    const remote = await fetchPublished(
      `*[_type == "article"]{
        "slug": slug.current,
        title,
        summary,
        published,
        publishedAt,
        "author": author->name,
        tags,
        body
      }`,
      isArticleArray,
    );
    return onlyPublished(remote ?? articles);
  } catch (error) {
    console.error("CMS unavailable for articles. Using seeded content.");
    console.error(error instanceof Error ? error.message : "Unknown CMS error");
    return onlyPublished(articles);
  }
}

export async function loadFaqs() {
  try {
    const remote = await fetchPublished(
      `*[_type == "faq" && published == true] | order(order asc){
        "id": _id,
        question,
        answer,
        group,
        published
      }`,
      isFaqArray,
    );
    return onlyPublished(remote ?? faqs);
  } catch (error) {
    console.error("CMS unavailable for FAQs. Using seeded content.");
    console.error(error instanceof Error ? error.message : "Unknown CMS error");
    return onlyPublished(faqs);
  }
}

export async function loadServices() {
  try {
    const remote = await fetchPublished(
      `*[_type == "service"] | order(order asc){
        "slug": slug.current,
        navLabel,
        title,
        lede,
        problem,
        approach,
        deliverables,
        boundaries,
        relatedWork
      }`,
      isServiceArray,
    );
    return remote && remote.length > 0 ? remote : services;
  } catch (error) {
    console.error("CMS unavailable for services. Using seeded content.");
    console.error(error instanceof Error ? error.message : "Unknown CMS error");
    return services;
  }
}
