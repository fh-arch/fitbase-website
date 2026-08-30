import type { Metadata } from "next";
import { MarketingIndexPage } from "../../src/components/MarketingIndexPage";
import { featurePages } from "../../src/marketingPages";
export const metadata: Metadata = { title: "Fitness Yönetim Yazılımı Özellikleri", description: "Fitbase Fitness CRM, rezervasyon, üyelik, ödeme takibi, iş akışları ve raporlama özelliklerini inceleyin.", alternates: { canonical: "/ozellikler" } };
export default function FeaturesPage() { return <MarketingIndexPage title="Fitness yönetim yazılımı özellikleri" description="Üye ilişkilerinden rezervasyona, paketlerden operasyon görünürlüğüne kadar Fitbase’in temel çalışma alanlarını şeffaf biçimde inceleyin." pages={featurePages} />; }
