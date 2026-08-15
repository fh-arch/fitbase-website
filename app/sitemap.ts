import type { MetadataRoute } from "next";
import { siteConfig } from "../src/siteConfig";
import { blogArticles } from "../src/blogArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 0.8 },
    // Indexed deliberately. A privacy policy nobody can find is one a data subject cannot read
    // and a Meta reviewer cannot check.
    { url: `${siteConfig.url}/gizlilik`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${siteConfig.url}/kosullar`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${siteConfig.url}/kvkk`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    ...blogArticles.map((article) => ({
      url: `${siteConfig.url}/blog/${article.slug}`,
      lastModified: new Date(article.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
