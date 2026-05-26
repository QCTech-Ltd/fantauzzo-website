import { siteContent } from "@/lib/content";
import { siteConfig } from "@/lib/metadata";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService"],
  name: siteContent.studio.fullName,
  image: `${siteConfig.url}/images/og.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.studio.address.street,
    addressLocality: siteContent.studio.address.city,
    postalCode: siteContent.studio.address.postalCode,
    addressCountry: "IT",
  },
  telephone: "+390916823872",
  email: siteContent.studio.email,
  url: siteContent.studio.url,
  areaServed: {
    "@type": "City",
    name: "Palermo",
  },
  priceRange: "$$",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
