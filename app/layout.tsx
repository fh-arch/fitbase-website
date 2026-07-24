import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/index.css";

export const metadata: Metadata = {
  title: "fitbase — Stüdyonu Güvenle Yönet",
  description:
    "Fitness, pilates ve yoga stüdyoları için rezervasyon, ödeme, üye ve operasyon yönetimi tek platformda.",
  icons: {
    icon: "/fitbase-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
