import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { lato } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
