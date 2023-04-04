import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/assets/styles/globals.css";

const flexo = localFont({
  src: [
    {
      path: "../../public/fonts/flexo/flexo-regular/Flexo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/flexo/flexo-demi/Flexo-Demi.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/flexo/flexo-mediumit/Flexo-MediumIt.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/flexo/flexo-medium/Flexo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/flexo/flexo-boldIt/Flexo-BoldIt.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/flexo/flexo-bold/Flexo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/flexo/flexo-heavy/Flexo-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-flexo",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${flexo.variable} flexo-regular`}>
      <Component {...pageProps} />
    </div>
  );
}