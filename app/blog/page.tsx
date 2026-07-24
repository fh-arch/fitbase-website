import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Search } from "lucide-react";
import { blogArticles } from "../../src/blogArticles";
import { siteConfig } from "../../src/siteConfig";

export const metadata: Metadata = {
  title: "Sağlıklı Yaşam, Fitness, Yoga ve Pilates Blogu",
  description:
    "Beslenme, günlük rutinler, sağlık, spor, longevity, fitness, yoga ve pilates hakkında uzun, uygulanabilir ve kaynaklı rehberler.",
  keywords: ["sağlıklı yaşam blogu", "fitness rehberi", "beslenme", "longevity", "yoga", "pilates"],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Sağlıklı Yaşam ve Fitness Rehberleri | Fitbase",
    description: "20 kapsamlı rehberle hareket, beslenme ve iyi yaşam alışkanlıklarını keşfedin.",
  },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/blog#page`,
        url: `${siteConfig.url}/blog`,
        name: "Fitbase Sağlıklı Yaşam ve Fitness Blogu",
        description: "Beslenme, spor, longevity, yoga ve pilates rehberleri.",
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
        ],
      },
      {
        "@type": "ItemList",
        numberOfItems: blogArticles.length,
        itemListElement: blogArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/blog/${article.slug}`,
          name: article.title,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <BlogHeader />
      <main id="main-content">
        <section className="border-b border-[#E7E7E2] bg-[#D9FDEE] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Sayfa yolu" className="mb-7 flex items-center gap-2 text-xs text-[#5F6368]">
              <a href="/" className="hover:text-[#252525]">Ana Sayfa</a><span>/</span><span aria-current="page">Blog</span>
            </nav>
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#18F28D] px-4 py-2 text-xs font-bold uppercase tracking-wider"><BookOpen className="h-4 w-4" /> Fitbase bilgi merkezi</span>
              <h1 className="text-4xl font-black tracking-[-0.04em] text-[#252525] sm:text-5xl md:text-6xl">Daha güçlü, dengeli ve sürdürülebilir bir yaşam için 20 rehber</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5F6368]">
                Beslenmeden uykuya, kuvvet antrenmanından longevity yaklaşımına, yoga ve pilatesten günlük rutinlere kadar merak edilen soruları açık cevaplar ve uygulanabilir adımlarla ele alıyoruz.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white bg-white/70 px-4 py-3 text-xs text-[#5F6368]">
                <Search className="h-4 w-4 text-emerald-700" /> İçerikler bilgilendirme amaçlıdır; kişisel tıbbi değerlendirme yerine geçmez.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24" aria-labelledby="tum-rehberler">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="text-xs font-bold uppercase tracking-widest text-emerald-700">8 konu • 20 kapsamlı içerik</p><h2 id="tum-rehberler" className="mt-2 text-3xl font-extrabold text-[#252525]">Tüm rehberler</h2></div>
              <p className="max-w-xl text-sm leading-relaxed text-[#5F6368]">Her yazı benzersiz arama niyetine, doğrudan cevaba, sık sorulan sorulara ve güvenilir kaynaklara sahiptir.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogArticles.map((article, index) => (
                <article key={article.slug} className="group flex min-h-[360px] flex-col justify-between rounded-3xl border border-[#E7E7E2] bg-[#FAF7F2] p-6 hover:-translate-y-1 hover:border-[#18F28D] hover:shadow-xl">
                  <div>
                    <div className="mb-5 flex items-center justify-between text-[11px]">
                      <span className="rounded-lg bg-[#18F28D] px-3 py-1 font-bold text-[#252525]">{article.category}</span>
                      <span className="inline-flex items-center gap-1 text-[#5F6368]"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                    </div>
                    <span className="text-5xl font-black text-[#18F28D]/30">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 text-xl font-extrabold leading-snug text-[#252525] group-hover:text-emerald-700">{article.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#5F6368]">{article.description}</p>
                  </div>
                  <a href={`/blog/${article.slug}`} className="mt-6 inline-flex items-center gap-2 border-t border-[#E7E7E2] pt-4 text-sm font-bold text-[#252525]">
                    Rehberi oku <ArrowRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}

export function BlogHeader() {
  return <header className="sticky top-0 z-40 border-b border-[#E7E7E2] bg-white/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><a href="/" aria-label="Fitbase ana sayfa"><img src="/fitbase-logo.png" alt="Fitbase" width="150" height="45" className="h-9 w-auto" /></a><nav className="flex items-center gap-3"><a href="/blog" className="hidden text-sm font-bold text-[#252525] sm:block">Blog</a><a href="/#pricing" className="rounded-xl bg-[#252525] px-5 py-3 text-xs font-bold text-white hover:bg-black">Demo al</a></nav></div></header>;
}

export function BlogFooter() {
  return <footer className="border-t border-[#E7E7E2] bg-white py-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-xs text-[#5F6368] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>© 2026 Fitbase • Sağlık içerikleri genel bilgilendirme amaçlıdır.</span><a href="/" className="inline-flex items-center gap-2 font-bold text-[#252525]"><ArrowLeft className="h-4 w-4" /> Ana sayfaya dön</a></div></footer>;
}
