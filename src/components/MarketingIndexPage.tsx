import Link from "next/link";
import type { MarketingPage } from "../marketingPages";

export function MarketingIndexPage({ title, description, pages }: { title: string; description: string; pages: MarketingPage[] }) {
  return <main id="main-content" className="min-h-screen bg-[#FAF7F2] text-[#252525]">
    <header className="border-b border-[#E7E7E2] bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href="/"><img src="/fitbase-logo.png" alt="Fitbase" className="h-11 w-auto" /></Link><Link href="/demo" className="rounded-xl bg-[#18F28D] px-4 py-2 text-sm font-bold">Demo talebi</Link></div></header>
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24"><p className="text-sm font-bold uppercase tracking-[.16em] text-emerald-700">Fitbase rehberi</p><h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">{description}</p><div className="mt-12 grid gap-5 md:grid-cols-2">{pages.map((page) => { const base = page.kind === "feature" ? "ozellikler" : "cozumler"; return <Link key={page.slug} href={`/${base}/${page.slug}`} className="group rounded-3xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{page.eyebrow}</p><h2 className="mt-3 text-2xl font-black group-hover:text-emerald-700">{page.title}</h2><p className="mt-3 leading-7 text-zinc-600">{page.description}</p><span className="mt-5 inline-block font-bold">Detayları incele →</span></Link>; })}</div></section>
  </main>;
}
