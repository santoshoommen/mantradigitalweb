import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "Google-Extended", "PerplexityBot", "ClaudeBot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
    host: getSiteUrl(),
  };
}
