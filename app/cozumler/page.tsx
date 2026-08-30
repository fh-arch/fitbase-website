import type { Metadata } from "next";
import { MarketingIndexPage } from "../../src/components/MarketingIndexPage";
import { solutionPages } from "../../src/marketingPages";
export const metadata: Metadata = { title: "Fitness, Pilates ve Yoga İşletmeleri İçin Çözümler", description: "Fitbase’in fitness salonu, pilates stüdyosu, yoga stüdyosu ve personal trainer operasyonlarına yönelik çözümlerini inceleyin.", alternates: { canonical: "/cozumler" } };
export default function SolutionsPage() { return <MarketingIndexPage title="Her spor işletmesi için daha düzenli operasyon" description="İşletme türünüze göre üye, ders, seans, paket ve tahsilat süreçlerinin nasıl bir araya geldiğini keşfedin." pages={solutionPages} />; }
