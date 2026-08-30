import App from "../src/App";
import { siteConfig } from "../src/siteConfig";
import { legalEntity } from "../src/legalEntity";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: legalEntity.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/fitbase-logo.png`,
          width: 1000,
          height: 300,
        },
        description: siteConfig.description,
        areaServed: "TR",
        address: { "@type": "PostalAddress", streetAddress: legalEntity.address, addressCountry: "TR" },
        contactPoint: { "@type": "ContactPoint", telephone: legalEntity.phone, email: legalEntity.contactEmail, contactType: "customer support", availableLanguage: "Turkish" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "tr-TR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        audience: {
          "@type": "Audience",
          audienceType: siteConfig.audience,
        },
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <App />
    </>
  );
}
