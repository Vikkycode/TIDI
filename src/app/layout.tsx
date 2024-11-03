import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TiDi",
  description: "Tech Inclusion for the Deaf Initiative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Place the Header component here */}
        {children}
        <Footer /> {/* Place the Footer component here */}
      </body>
    </html>
  );
}
