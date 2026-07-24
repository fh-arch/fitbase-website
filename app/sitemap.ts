import type { MetadataRoute } from "next";
import { siteConfig } from "../src/siteConfig";
import { blogArticles } from "../src/blogArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 0.8 },
    ...blogArticles.map((article) => ({
      url: `${siteConfig.url}/blog/${article.slug}`,
      lastModified: new Date(article.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
