import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { lato } from "@/utils/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CCB - Comercial Consuling Bureau",
  description: "CCB - Comercial Consuling Bureau EGYPT UAE - Pharmaceutical and Nutrition Consulting",
  abstract: "The official Website for CCB - Comercial Consuling Bureau EGYPT UAE",
  authors: [{name: "Yasser Hegazy"}, {name: "Aly Hegazy"}],
  keywords: [
    "CCB",
    "Comercial Consuling Bureau",
    "CCB Egypt",
    "CCB UAE",
    "CCB Egypt UAE",
    "Comercial",
    "Consulting",
    "Bureau",
    "Pharmaceutical",
    "Nutrition",
    "Egypt",
    "UAE",
    "Cairo",
    "Shams",
    "Heliopolis",
    "Yasser Hegazy",
    "Aly Hegazy",
    "Aly Yasser",
    "Health and wellness",
    "Consulting services",
    "Pharmaceutical consulting",
    "Nutrition consulting",
    "Healthcare consulting",
    "Business consulting",
    "Management consulting",
    "Strategy consulting",
    "Market research",
    "Regulatory compliance",
    "Quality assurance",
    "Supply chain management",
    "Distribution",
    "Sales and marketing",
    "Training and development",
    "Customer service",
    "Innovation",
    "Technology",
    "Digital transformation",
    "Data analytics",
    "Artificial intelligence",
    "Machine learning",
    "Blockchain",
  ],
  icons:{
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
