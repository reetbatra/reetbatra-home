import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
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
      className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
