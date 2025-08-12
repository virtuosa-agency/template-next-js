// app/meta/jsonLd.ts is the configuration file for your application's JSON-LD

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Template Next JS",
  alternateName: "Template Next JS",
  url: "https://www.template-next-js.com",
  logo: "https://www.template-next-js.com/images/logo.png",
  image: "https://www.template-next-js.com/api/og",
  description:
    "Premium digital solutions have never been so accessible. Website, brand identity, notoriety: we build everything, custom-made.",
  areaServed: {
    "@type": "Country",
    name: "France",
    "@id": "https://www.wikidata.org/wiki/Q142",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Website Creation",
      description: "Custom websites, premium design and optimized development",
    },
    {
      "@type": "Offer",
      name: "Brand Identity",
      description: "Complete visual identity and brand strategy",
    },
    {
      "@type": "Offer",
      name: "Digital Notoriety",
      description: "Visibility strategy and online presence development",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "07 67 28 48 62",
    contactType: "customer service",
    email: "contact@virtuosa.fr",
    availableLanguage: ["French", "English"],
  },
  potentialAction: {
    "@type": "ContactAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.virtuosa.fr/contact",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "ContactPoint",
      name: "Contact Request",
    },
  },
  sameAs: [
    "https://www.linkedin.com/company/virtuosa",
    "https://twitter.com/virtuosa",
    "https://www.instagram.com/virtuosa",
  ],
};
