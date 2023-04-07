import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "styles/globals";

const font = localFont({
  src: [
    {
      path: "./fonts/FuturaCyrillicLight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
