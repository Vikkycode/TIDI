import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tech Inclusion Deaf Initiative',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(inter.className)}>
        <Header /> {/* Place the Header component here */}
        {children}
        <Footer /> {/* Place the Footer component here */}
      </body>
    </html>
  );
}


// Add Fonts to head
export function generateStaticParams() {
  return [{ slug: "/" }];
}

