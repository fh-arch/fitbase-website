import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingDetailPage } from "../../../src/components/MarketingDetailPage";
import { solutionPages } from "../../../src/marketingPages";

export function generateStaticParams() { return solutionPages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = solutionPages.find((item) => item.slug === slug); if (!page) return {}; return { title: page.title, description: page.description, alternates: { canonical: `/cozumler/${slug}` }, openGraph: { title: page.title, description: page.description, url: `/cozumler/${slug}`, type: "website" } }; }
export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = solutionPages.find((item) => item.slug === slug); if (!page) notFound(); return <MarketingDetailPage page={page} />; }
