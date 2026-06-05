import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter, VT323, Doto, JetBrains_Mono, Silkscreen } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio";
import { Navbar1 } from "@/components/ui/navbar-1";
import SmoothScrolling from "@/components/smooth-scrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: "400",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: portfolioConfig.metadata.title,
  description: portfolioConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable} ${jetbrainsMono.variable} ${silkscreen.variable} ${doto.variable}`}>
      <body>
        <SmoothScrolling>
          <Navbar1 />
          {children}
          <Script src="/oneko.js" strategy="lazyOnload" />
        </SmoothScrolling>
      </body>
    </html>
  );
}
