import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--main-font",
 });

export const metadata: Metadata = {
  title: "Gewoon Seba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="text-base">
        <Navbar className="sticky top-0 z-50 w-full" />
        {children}
        <div className="h-[1000px]"></div>
        </body>
    </html>
  );
}
