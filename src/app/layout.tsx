import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ============================================
   Root Layout - Small World Hotel
   Wraps all pages with Navbar and Footer
   ============================================ */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Small World Hotel | Luxury Hospitality & Fine Dining",
    template: "%s | Small World Hotel",
  },
  description:
    "Experience world-class hospitality at Small World Hotel. Enjoy luxurious accommodations, exceptional dining, and personalized service across 8 specialized departments.",
  keywords: [
    "hotel",
    "luxury",
    "hospitality",
    "fine dining",
    "accommodation",
    "resort",
    "Small World Hotel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
