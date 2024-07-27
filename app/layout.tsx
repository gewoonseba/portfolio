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
      <body className="px-2 text-base 2xl:container md:px-5 2xl:mx-auto">
        <Navbar />
        {children}
        <div className="h-[1000px]"></div>
        {children}
        <div className="h-[1000px]"></div>
      </body>
    </html>
  );
}
