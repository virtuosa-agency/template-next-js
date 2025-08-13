// Providers est un composant qui permet de fournir les providers pour le site
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      disableTransitionOnChange={true}
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  );
}
