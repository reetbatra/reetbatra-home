import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// The width axis is doing real work here: headlines run expanded,
// sub-headlines run condensed. Without `wdth` this is just another grotesk.
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const description =
  "Reet Batra builds products end to end and then does the growth work herself. Currently building AskTota, an astrology app that reads like a group chat. Bangalore.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reetbatra.com"),
  title: "Reet Batra",
  description,
  openGraph: {
    title: "Reet Batra",
    description,
    url: "https://reetbatra.com",
    siteName: "Reet Batra",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@reet_batra",
    title: "Reet Batra",
    description,
  },
  alternates: { canonical: "https://reetbatra.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
