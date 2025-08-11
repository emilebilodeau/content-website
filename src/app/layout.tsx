import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Blind Owl Flavour Co. - Bold. Elevated. Effortless. Premium Extracts & Syrups",
  description:
    "Crafting bold, premium extracts and syrups that elevate everything they touch — from lattes to cocktails to desserts. Made in Vancouver, BC. Shop our collection of natural, preservative-free flavours.",
  keywords:
    "culinary extracts, simple syrups, vanilla extract, coffee syrups, cocktail syrups, baking extracts, Vancouver, natural flavours, preservative-free, small batch",
  authors: [{ name: "Blind Owl Flavour Co." }],
  openGraph: {
    title:
      "Blind Owl Flavour Co. - Bold. Elevated. Effortless. Premium Extracts & Syrups",
    description:
      "Crafting bold, premium extracts and syrups that elevate everything they touch — from lattes to cocktails to desserts. Made in Vancouver, BC.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blind Owl Flavour Co. - Bold. Elevated. Effortless. Premium Extracts & Syrups",
    description:
      "Crafting bold, premium extracts and syrups that elevate everything they touch — from lattes to cocktails to desserts. Made in Vancouver, BC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
