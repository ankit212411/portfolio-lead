import type { Metadata } from "next";
import { IBM_Plex_Sans, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFrame } from "@/components/layout/site-frame";
import { CartProvider } from "@/context/cart-context";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontend-lead-portfolio.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://frontend-lead-portfolio.vercel.app",
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-body text-ink antialiased`}>
        <CartProvider>
          <SiteFrame>{children}</SiteFrame>
        </CartProvider>
      </body>
    </html>
  );
}
