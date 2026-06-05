import type { Metadata } from "next";
import Script from "next/script";
import { Inter, VT323, JetBrains_Mono, Silkscreen, Doto } from "next/font/google";
import "./globals.css";

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
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shiva Bhattacharjee - Portfolio",
  description: "Portfolio of Shiva Bhattacharjee, Applied AI Engineer",
};

import { Navbar1 } from "@/components/ui/navbar-1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable} ${jetbrainsMono.variable} ${silkscreen.variable} ${doto.variable}`}>
      <body>
        <Navbar1 />
        {children}
        <Script src="/oneko.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
