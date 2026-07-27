import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { blogArticles } from "../../../src/blogArticles";
import { siteConfig } from "../../../src/siteConfig";
import { BlogFooter, BlogHeader } from "../page";

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${article.slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.published,
      authors: ["Fitbase Editoryal Ekibi"],
      tags: article.keywords,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = blogArticles.filter((item) => item.slug !== article.slug && (item.category === article.category || item.keywords.some((keyword) => article.keywords.includes(keyword)))).slice(0, 3);
  const canonical = `${siteConfig.url}/blog/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.published,
        dateModified: article.published,
        inLanguage: "tr-TR",
        mainEntityOfPage: canonical,
        author: { "@type": "Organization", name: "Fitbase Editoryal Ekibi", url: siteConfig.url },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        keywords: article.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <BlogHeader />
      <main id="main-content">
        <article>
          <header className="border-b border-[#E7E7E2] bg-[#D9FDEE] py-14 md:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <nav aria-label="Sayfa yolu" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#5F6368]"><a href="/" className="inline-flex min-h-11 items-center">Ana Sayfa</a><span aria-hidden="true">/</span><a href="/blog" className="inline-flex min-h-11 items-center">Blog</a><span aria-hidden="true">/</span><span aria-current="page">{article.category}</span></nav>
              <div className="flex flex-wrap items-center gap-3 text-xs"><span className="rounded-lg bg-[#18F28D] px-3 py-1 font-bold">{article.category}</span><span className="inline-flex items-center gap-1 text-[#5F6368]"><Clock className="h-4 w-4" />{article.readTime}</span><time dateTime={article.published} className="text-[#5F6368]">24 Temmuz 2026</time></div>
              <h1 className="mt-6 text-[2.35rem] font-black leading-[1.08] tracking-[-0.04em] text-[#252525] sm:text-5xl md:text-6xl">{article.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#5F6368]">{article.description}</p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#252525]"><BookOpen className="h-5 w-5 text-emerald-700" /> Fitbase Editoryal Ekibi</div>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_280px] lg:px-8">
            <div className="min-w-0">
              <section className="rounded-3xl border border-[#18F28D]/50 bg-[#D9FDEE] p-6 md:p-8" aria-labelledby="kisa-cevap">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">Kısa cevap</p>
                <h2 id="kisa-cevap" className="mt-2 text-2xl font-extrabold text-[#252525]">{article.title.replace(/\?.*$/, "")}</h2>
                <p className="mt-4 leading-8 text-[#3f4743]">{article.answer}</p>
              </section>

              <div className="prose-fitbase mt-12">
                {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
              </div>

              <section className="mt-12 rounded-3xl bg-[#252525] p-6 text-white md:p-8" aria-labelledby="uygulanabilir-adimlar">
                <h2 id="uygulanabilir-adimlar" className="text-2xl font-extrabold">Bugün uygulanabilecek adımlar</h2>
                <ul className="mt-6 space-y-4">{article.takeaways.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#18F28D]" />{item}</li>)}</ul>
              </section>

              <section className="mt-14" aria-labelledby="sss"><h2 id="sss" className="text-3xl font-extrabold text-[#252525]">Sık sorulan sorular</h2><div className="mt-6 space-y-4">{article.faq.map((item) => <details key={item.question} className="rounded-2xl border border-[#E7E7E2] bg-white p-5" open><summary className="flex min-h-11 cursor-pointer items-center font-bold text-[#252525]">{item.question}</summary><p className="mt-3 text-sm leading-7 text-[#5F6368]">{item.answer}</p></details>)}</div></section>

              <section className="mt-14 border-t border-[#E7E7E2] pt-8" aria-labelledby="kaynaklar"><h2 id="kaynaklar" className="text-xl font-extrabold text-[#252525]">Kaynaklar ve sağlık notu</h2><p className="mt-3 text-sm leading-7 text-[#5F6368]">Bu içerik genel bilgilendirme amaçlıdır; tanı veya kişisel tedavi önerisi değildir. Belirti, hastalık, gebelik veya özel beslenme gereksiniminde yetkili sağlık profesyoneline başvurun.</p><ul className="mt-4 space-y-2">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">{source.label}<ExternalLink className="h-3.5 w-3.5" /></a></li>)}</ul></section>
            </div>

            <aside className="h-fit rounded-3xl border border-[#E7E7E2] bg-[#FAF7F2] p-6 lg:sticky lg:top-28" aria-label="Yazı özeti">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Bu yazıda</p>
              <ol className="mt-4 space-y-3 text-sm text-[#5F6368]">{article.sections.map((section, index) => <li key={section.heading}><span className="mr-2 font-bold text-[#252525]">0{index + 1}</span>{section.heading}</li>)}</ol>
              <a href="/#features" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#252525] px-4 py-3 text-xs font-bold text-white">Fitbase’i keşfet <ArrowRight className="h-4 w-4 text-[#18F28D]" /></a>
            </aside>
          </div>
        </article>

        <section className="border-t border-[#E7E7E2] bg-[#FAF7F2] py-14"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-extrabold text-[#252525]">İlgili rehberler</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{related.map((item) => <a key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-[#E7E7E2] bg-white p-5 hover:border-[#18F28D]"><span className="text-xs font-bold text-emerald-700">{item.category}</span><h3 className="mt-2 font-bold leading-snug text-[#252525]">{item.title}</h3></a>)}</div><a href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#252525]"><ArrowLeft className="h-4 w-4" /> Tüm rehberlere dön</a></div></section>
      </main>
      <BlogFooter />
    </>
  );
}
