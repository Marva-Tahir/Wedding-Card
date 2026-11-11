import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayla & Daniyal | Wedding Invitation 2026",
  description:
    "You are cordially invited to the wedding celebrations of Ayla Noor and Daniyal Qureshi. Mehndi, Barat & Walima — Lahore, November 2026.",
  openGraph: {
    title: "Ayla & Daniyal Wedding 2026",
    description:
      "Pakistani Wedding Invitation — Mehndi, Barat & Walima, Lahore, November 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
