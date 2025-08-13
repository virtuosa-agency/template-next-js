"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://github.com/votre-repo";

export function Canonical() {
  const pathname = usePathname();

  useEffect(() => {
    // Supprimer l'ancien canonical s'il existe
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and add the new canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = `${BASE_URL}${pathname}`;
    document.head.appendChild(canonical);

    // Cleanup on component unmount
    return () => {
      if (existingCanonical) {
        document.head.appendChild(existingCanonical);
      }
    };
  }, [pathname]); // Triggers on each pathname change

  return null; // Le composant ne rend rien visuellement
}
