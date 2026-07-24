import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { BLOG_POSTS } from "../../src/data";
import { siteConfig } from "../../src/siteConfig";

export const metadata: Metadata = {
  title: "Stüdyo Yönetimi Blogu ve Rehberleri",
  description:
    "Fitness, pilates ve yoga işletmeleri için üye bağlılığı, kapasite planlama, fiyatlandırma ve stüdyo yönetimi rehberleri.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Stüdyo Yönetimi Blogu ve Rehberleri | Fitbase",
    description:
      "Stüdyo sahipleri ve yöneticileri için uygulanabilir işletme yönetimi rehberleri.",
  },
};

const guideDetails = [
  {
    slug: BLOG_POSTS[0].slug,
    question: "Üye bağlılığı nasıl güçlendirilir?",
    answer:
      "Üye bağlılığı; düzenli katılımın izlenmesi, zamanında iletişim, açık paket bilgisi ve tutarlı stüdyo deneyimiyle güçlendirilir. Önce devamsızlık sinyallerini görünür hâle getirin, ardından kişiye uygun ve ölçülü takip akışları kurun.",
    steps: [
      "Yeni üyelerin ilk haftalardaki katılımını takip edin.",
      "Uzun süre rezervasyon yapmayan üyeler için görev oluşturun.",
      "Paket haklarını ve son kullanım koşullarını açıkça gösterin.",
      "Yenileme görüşmelerini son güne bırakmayın.",
    ],
  },
  {
    slug: BLOG_POSTS[1].slug,
    question: "Reformer kapasitesi nasıl daha verimli yönetilir?",
    answer:
      "Reformer kapasite yönetimi; ders kontenjanı, iptal süresi, bekleme listesi ve eğitmen uygunluğunun aynı takvimde izlenmesini gerektirir. Amaç yalnızca doluluk değil, öngörülebilir ve adil bir rezervasyon deneyimidir.",
    steps: [
      "Her ders için gerçek ekipman sayısına göre kontenjan tanımlayın.",
      "İptal politikasını rezervasyon öncesinde görünür kılın.",
      "Boşalan kontenjanları sırayla bekleme listesine sunun.",
      "Ekipman bakım zamanlarını ders takviminden ayrı bırakmayın.",
    ],
  },
  {
    slug: BLOG_POSTS[2].slug,
    question: "Stüdyo paketleri nasıl fiyatlandırılır?",
    answer:
      "Paket fiyatlandırması; kapasite, eğitmen maliyeti, hedeflenen doluluk ve üyelerin kullanım alışkanlığı birlikte değerlendirilerek yapılır. Tek ders, süreli paket ve düzenli üyelik seçeneklerinin işletme üzerindeki etkisi ayrı ayrı hesaplanmalıdır.",
    steps: [
      "Ders başına gerçek operasyon maliyetini hesaplayın.",
      "Paket kullanım süresi ve iptal şartlarını baştan belirleyin.",
      "Nakit akışını tek seferlik satış ve düzenli üyelik olarak ayırın.",
      "Fiyat değişikliklerini mevcut üyelere açık biçimde duyurun.",
    ],
  },
];

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/blog#page`,
        url: `${siteConfig.url}/blog`,
        name: "Fitbase Stüdyo Yönetimi Blogu",
        description:
          "Fitness, pilates ve yoga işletmeleri için stüdyo yönetimi rehberleri.",
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
        itemListElement: BLOG_POSTS.slice(0, 3).map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/blog#${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="sticky top-0 z-40 border-b border-[#E7E7E2] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Fitbase ana sayfa"><img src="/fitbase-logo.png" alt="Fitbase" width="150" height="45" className="h-9 w-auto" /></a>
          <a href="/#pricing" className="rounded-xl bg-[#252525] px-5 py-3 text-xs font-bold text-white hover:bg-black">Demo ve fiyatlandırma</a>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-[#E7E7E2] bg-[#D9FDEE] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Sayfa yolu" className="mb-7 flex items-center gap-2 text-xs text-[#5F6368]">
              <a href="/" className="hover:text-[#252525]">Ana Sayfa</a><span>/</span><span aria-current="page">Blog</span>
            </nav>
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#18F28D] px-4 py-2 text-xs font-bold uppercase tracking-wider"><BookOpen className="h-4 w-4" /> Stüdyo yönetimi rehberleri</span>
              <h1 className="text-4xl font-black tracking-[-0.04em] text-[#252525] sm:text-5xl md:text-6xl">Daha sağlam kararlar için sade ve uygulanabilir içerikler</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5F6368]">
                Fitbase Blog; fitness, pilates ve yoga işletmelerinin rezervasyon, üye bağlılığı, kapasite ve gelir yönetimi sorularını açık adımlar ve gerçek işletme senaryolarıyla ele alır.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24" aria-labelledby="rehberler">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="rehberler" className="mb-10 text-3xl font-extrabold text-[#252525]">Öne çıkan stüdyo yönetimi rehberleri</h2>
            <div className="space-y-8">
              {BLOG_POSTS.slice(0, 3).map((post, index) => {
                const detail = guideDetails[index];
                return (
                  <article id={post.slug} key={post.id} className="scroll-mt-28 rounded-[2rem] border border-[#E7E7E2] bg-[#FAF7F2] p-6 md:p-10">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <div className="mb-4 flex items-center gap-3 text-xs text-[#5F6368]"><span className="rounded-lg bg-[#18F28D] px-3 py-1 font-bold text-[#252525]">{post.category}</span><Clock className="h-4 w-4" />{post.readTime}</div>
                        <h2 className="text-2xl font-extrabold leading-tight text-[#252525] md:text-3xl">{post.title}</h2>
                        <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">{post.excerpt}</p>
                      </div>
                      <div className="rounded-3xl border border-white bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-[#252525]">{detail.question}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#5F6368]">{detail.answer}</p>
                        <ol className="mt-5 space-y-3">
                          {detail.steps.map((step) => <li key={step} className="flex gap-3 text-sm text-[#252525]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" /><span>{step}</span></li>)}
                        </ol>
                        <a href="/#features" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#252525]">İlgili Fitbase özelliklerini incele <ArrowRight className="h-4 w-4 text-emerald-700" /></a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#252525] py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div><h2 className="text-3xl font-extrabold">Stüdyo süreçlerinizi tek yerde görün</h2><p className="mt-2 text-sm text-zinc-300">Rezervasyon, ödeme, ekip ve üye yönetimini Fitbase ile keşfedin.</p></div>
            <a href="/#pricing" className="inline-flex items-center gap-2 rounded-xl bg-[#18F28D] px-6 py-3 text-sm font-bold text-[#252525]">Fitbase’i incele <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7E7E2] bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-xs text-[#5F6368] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 Fitbase</span><a href="/" className="inline-flex items-center gap-2 font-bold text-[#252525]"><ArrowLeft className="h-4 w-4" /> Ana sayfaya dön</a>
        </div>
      </footer>
    </>
  );
}
