import { BLOG_POSTS } from "../../src/data";
import { siteConfig } from "../../src/siteConfig";

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] ?? char);

export async function GET() {
  const items = BLOG_POSTS.slice(0, 3).map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}/blog#${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog#${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <author>Fitbase Editoryal Ekibi</author>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title>Fitbase Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Fitness, pilates ve yoga stüdyoları için işletme yönetimi rehberleri.</description>
    <language>tr-TR</language>${items}
  </channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
