import Footer from "@/app/components/nav/footer";
import Navbar from "@/app/components/nav/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interLocal = localFont({
  src: "/./InterVariable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "350 550 600", //fixes weights appearing bolder on mobile
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
    <html lang="en" className={`${interLocal.variable}`}>
      <body className="max-w-screen-3xl text-primary bg-primary 3xl:mx-auto min-h-dvh px-5 text-base">
        <Navbar />
        <main>{children}</main>
        <Footer className="sticky top-full mt-10" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
