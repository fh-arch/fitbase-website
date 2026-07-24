import type { MetadataRoute } from "next";
import { siteConfig } from "../src/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date("2026-07-24"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
