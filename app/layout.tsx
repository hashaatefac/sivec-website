import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const almarai = Almarai({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIVEC Engineering",
  description: "Innovative Engineering Solutions for a Sustainable Future — Engineering Design, Project Management, Energy Management and Construction in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-almarai)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
