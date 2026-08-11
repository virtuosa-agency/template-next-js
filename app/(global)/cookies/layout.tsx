import type { ReactNode } from "react";

import { getPageMetadata } from "@/utils/meta/metadata";

export const metadata = getPageMetadata({
  path: "cookies",
  title: "Cookie Management",
  description:
    "Learn how this website uses cookies and how you can manage your preferences.",
});

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return children;
}
