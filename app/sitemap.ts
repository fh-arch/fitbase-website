import type { MetadataRoute } from "next";
import { siteConfig } from "../src/siteConfig";
import { blogArticles } from "../src/blogArticles";
import { featurePages, solutionPages } from "../src/marketingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date("2026-08-30"), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/ozellikler`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/cozumler`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/demo`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/fiyatlandirma`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteConfig.url}/veri-tasima`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date("2026-08-30"), changeFrequency: "weekly", priority: 0.8 },
    // Indexed deliberately. A privacy policy nobody can find is one a data subject cannot read
    // and a Meta reviewer cannot check.
    { url: `${siteConfig.url}/gizlilik`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${siteConfig.url}/kosullar`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${siteConfig.url}/kvkk`, lastModified: new Date("2026-08-07"), changeFrequency: "yearly" as const, priority: 0.4 },
    ...featurePages.map((page) => ({ url: `${siteConfig.url}/ozellikler/${page.slug}`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly" as const, priority: 0.85 })),
    ...solutionPages.map((page) => ({ url: `${siteConfig.url}/cozumler/${page.slug}`, lastModified: new Date("2026-08-30"), changeFrequency: "monthly" as const, priority: 0.85 })),
    ...blogArticles.map((article) => ({
      url: `${siteConfig.url}/blog/${article.slug}`,
      lastModified: new Date(article.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
