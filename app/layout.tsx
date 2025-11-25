import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "LuxeMYS - Quiet Luxury Redefined",
  description: "Premium Malaysian e-commerce for sophisticated fashion consumers. Curated collections of minimalist, high-quality clothing and accessories.",
  keywords: ["luxury fashion", "Malaysian fashion", "premium clothing", "quiet luxury", "minimalist fashion"],
  authors: [{ name: "LuxeMYS" }],
  openGraph: {
    title: "LuxeMYS - Quiet Luxury Redefined",
    description: "Curated collections for the discerning Malaysian",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans text-premium antialiased">
        {children}
        <CartDrawer />
        <Analytics />
      </body>
    </html>
  );
}
