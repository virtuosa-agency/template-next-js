import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
    >
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}

export default App;
