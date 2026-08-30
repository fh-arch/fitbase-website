import type { MetadataRoute } from "next";
import { siteConfig } from "../src/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const publicAccess = { allow: "/", disallow: ["/api/", "/admin/", "/personel/"] };
  return {
    rules: [
      { userAgent: "*", ...publicAccess },
      { userAgent: "Googlebot", ...publicAccess },
      { userAgent: "Bingbot", ...publicAccess },
      { userAgent: "OAI-SearchBot", ...publicAccess },
      { userAgent: "ChatGPT-User", ...publicAccess },
      { userAgent: "Claude-SearchBot", ...publicAccess },
      { userAgent: "Claude-User", ...publicAccess },
      { userAgent: "PerplexityBot", ...publicAccess },
      { userAgent: "Perplexity-User", ...publicAccess },
      { userAgent: "Google-Extended", ...publicAccess },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
