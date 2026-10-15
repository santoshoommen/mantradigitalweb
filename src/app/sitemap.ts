import type { MetadataRoute } from "next";
import { marketingPaths, onlyPublished, caseStudies } from "@/lib/content";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticRoutes = marketingPaths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
  const studies = onlyPublished(caseStudies).map((study) => ({
    url: `${base}/work/${study.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...studies];
}
