import type { Metadata, Viewport } from "next";

export const siteConfig = {
  name: "Template Next JS",
  description:
    "A modern Next.js template for building professional landing pages.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.yourdomain.com",
  locale: "en_US",
  email: "hello@yourdomain.com",
  phone: "+33 1 23 45 67 89",
  twitter: "@yourcompany",
  /** Replace `public/images/og.png` (1200×630) when customizing the template. */
  ogImage: {
    path: "/images/og.png",
    width: 1200,
    height: 630,
  },
} as const;

type PageMetadataOptions = {
  path?: string;
  title?: string;
  description?: string;
};

function absoluteUrl(path: string = ""): string {
  const normalized = path.replace(/^\/+/, "");
  return normalized ? `${siteConfig.url}/${normalized}` : siteConfig.url;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export function getPageMetadata({
  path = "",
  title = siteConfig.name,
  description = siteConfig.description,
}: PageMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "" || path === "/";
  const fullTitle = isHome ? siteConfig.name : `${title} | ${siteConfig.name}`;
  const ogImage = {
    url: siteConfig.ogImage.path,
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: fullTitle,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: isHome
      ? {
          default: siteConfig.name,
          template: `%s | ${siteConfig.name}`,
        }
      : title,
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "application-name": siteConfig.name,
      "apple-mobile-web-app-title": siteConfig.name,
    },
  };
}

export const metadata = getPageMetadata();
