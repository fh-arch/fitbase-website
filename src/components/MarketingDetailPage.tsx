import Link from "next/link";
import type { MarketingPage } from "../marketingPages";
import { siteConfig } from "../siteConfig";

export function MarketingDetailPage({ page }: { page: MarketingPage }) {
  const base = page.kind === "feature" ? "ozellikler" : "cozumler";
  const url = `${siteConfig.url}/${base}/${page.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "tr-TR" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: page.kind === "feature" ? "Özellikler" : "Çözümler", item: `${siteConfig.url}/${base}` },
        { "@type": "ListItem", position: 3, name: page.title, item: url },
      ] },
      { "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };

  return <main id="main-content" className="min-h-screen bg-[#FAF7F2] text-[#252525]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="border-b border-[#E7E7E2] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" aria-label="Fitbase ana sayfa"><img src="/fitbase-logo.png" alt="Fitbase" className="h-11 w-auto" /></Link>
        <nav className="flex items-center gap-4 text-sm font-semibold"><Link href="/ozellikler">Özellikler</Link><Link href="/blog">Blog</Link><Link href="/demo" className="rounded-xl bg-[#18F28D] px-4 py-2 text-[#121212]">Demo talebi</Link></nav>
      </div>
    </header>
    <article>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">{page.eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">{page.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/demo" className="rounded-xl bg-[#252525] px-6 py-3 font-bold text-white">İşletmen için incele</Link><Link href="/ozellikler" className="rounded-xl border border-zinc-300 bg-white px-6 py-3 font-bold">Tüm özellikler</Link></div>
      </section>
      <section className="bg-white py-16"><div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2"><div><h2 className="text-3xl font-black">Neyi çözmeye yardımcı olur?</h2><p className="mt-5 leading-7 text-zinc-600">{page.intro}</p></div><ul className="space-y-3">{page.problems.map((item) => <li key={item} className="rounded-2xl border border-zinc-200 p-5 font-semibold">{item}</li>)}</ul></div></section>
      <section className="mx-auto max-w-5xl px-5 py-16"><h2 className="text-3xl font-black">Temel çalışma alanları</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{page.capabilities.map((item) => <div key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-6"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-zinc-600">{item.description}</p></div>)}</div><p className="mt-5 text-sm text-zinc-500">Özellik kapsamı ve plan uygunluğu demo görüşmesinde yazılı olarak doğrulanır.</p></section>
      <section className="bg-[#DDFBEA] py-16"><div className="mx-auto max-w-4xl px-5"><h2 className="text-3xl font-black">Sıkça sorulan sorular</h2><div className="mt-7 space-y-4">{page.faq.map((item) => <details key={item.question} className="rounded-2xl bg-white p-6"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="mt-4 leading-7 text-zinc-600">{item.answer}</p></details>)}</div></div></section>
    </article>
    <footer className="bg-[#252525] px-5 py-10 text-center text-sm text-zinc-300"><Link href="/gizlilik">Gizlilik Politikası</Link><span className="mx-3">•</span><Link href="/kvkk">KVKK</Link><span className="mx-3">•</span><Link href="/kosullar">Kullanım Koşulları</Link></footer>
  </main>;
}
