import type { Metadata } from "next";
import { Newsreader, Work_Sans, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Konoba Eko Dalmacija — Vodice",
  description:
    "Konoba Eko Dalmacija u Vodicama: domaća dalmatinska kuhinja od pomno biranih, eko namirnica, riva u srcu grada, pogled na more i živa glazba svaku večer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${newsreader.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <RevealInit />
          <SiteHeader />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
