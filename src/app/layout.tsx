import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { poppins } from "./utils/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mishbahul Munir | Portfolio",
  description:
    "Explore the professional portfolio of Mishbahul Munir, a passionate Full-Stack Web Developer specializing in modern web technologies such as Next.js, React, TailwindCSS, Express, and PostgreSQL. Discover featured projects, technical skills, and career highlights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
