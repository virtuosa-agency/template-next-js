import type { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  metadata as siteMetadata,
  viewport as siteViewport,
} from "@/utils/meta/metadata";
import { jsonLd } from "@/utils/meta/jsonLd";
import "@/styles/_index.scss";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // Prevent </script> breakout if content ever includes user-controlled strings
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
