import { ThemeProvider } from "@emotion/react";
import Layout from "components/Layout";
import type { AppProps } from "next/app";
import "styles/index.scss";
import { defaultTheme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
