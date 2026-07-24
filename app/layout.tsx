import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/index.css";
import { siteConfig } from "../src/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fitbase | Fitness ve Stüdyo Yönetim Yazılımı",
    template: "%s | Fitbase",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: siteConfig.name,
    title: "Fitbase | Fitness ve Stüdyo Yönetim Yazılımı",
    description: siteConfig.description,
    images: [{ url: "/fitbase-hero-athletes.png", width: 1536, height: 1024, alt: "Fitbase stüdyo yönetim platformu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitbase | Fitness ve Stüdyo Yönetim Yazılımı",
    description: siteConfig.description,
    images: ["/fitbase-hero-athletes.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/fitbase-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <a className="skip-link" href="#main-content">Ana içeriğe geç</a>
        {children}
      </body>
    </html>
  );
}
