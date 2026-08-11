import { siteConfig } from "@/utils/meta/metadata";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

/** E.164-ish phone for Schema.org (digits + leading +) */
function toSchemaTelephone(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? digits : `+${digits}`;
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${siteConfig.url}${siteConfig.ogImage.path}`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: toSchemaTelephone(siteConfig.phone),
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Example Street",
        addressLocality: "Paris",
        postalCode: "75000",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: toSchemaTelephone(siteConfig.phone),
        contactType: "customer service",
        email: siteConfig.email,
        availableLanguage: ["en", "fr"],
      },
      sameAs: [
        "https://www.linkedin.com/company/yourcompany",
        "https://twitter.com/yourcompany",
        "https://www.instagram.com/yourcompany",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};
