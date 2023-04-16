import { Global, ThemeProvider, css } from "@emotion/react";
import Layout from "components/Layout";
import type { AppProps } from "next/app";
import "styles/globals";
import { defaultTheme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global
        styles={css`
          body {
            background: ${defaultTheme.colors.white};
            font-size: ${defaultTheme.fontSizes.body};
            line-height: ${defaultTheme.lineHeights.body};
            color: ${defaultTheme.colors.base_text};
            font-weight: ${defaultTheme.fontWeights.normal};
            font-family: futura-pt, sans-serif;
            min-height: 100%;
          }
          body > div {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
