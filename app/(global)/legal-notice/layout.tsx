import type { ReactNode } from "react";

import { getPageMetadata } from "@/utils/meta/metadata";

export const metadata = getPageMetadata({
  path: "legal-notice",
  title: "Legal Notice",
  description:
    "Legal notice, privacy information and terms of use for this website.",
});

export default function LegalNoticeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
