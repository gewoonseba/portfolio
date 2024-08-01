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
      <body className="max-w-screen-3xl text-base ~px-2/5 3xl:mx-auto">
        <Navbar />
        {children}
        <div className="h-[1000px]"></div>
        {children}
        <div className="h-[1000px]"></div>
      </body>
    </html>
  );
}
