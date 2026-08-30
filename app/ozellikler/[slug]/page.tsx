import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingDetailPage } from "../../../src/components/MarketingDetailPage";
import { featurePages } from "../../../src/marketingPages";

export function generateStaticParams() { return featurePages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = featurePages.find((item) => item.slug === slug); if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/ozellikler/${slug}` }, openGraph: { title: page.title, description: page.description, url: `/ozellikler/${slug}`, type: "website" } };
}
export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = featurePages.find((item) => item.slug === slug); if (!page) notFound(); return <MarketingDetailPage page={page} />; }
