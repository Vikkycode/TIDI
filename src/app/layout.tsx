import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import '@fontsource/poppins/400.css'; // Import Poppins (adjust the weight if needed)
// import '@fontsource/poppins/700.css'; // Import poppins bold(700)

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TIDI - Tech Inclusion for the Deaf Initiative',
  description: 'Empowering Deaf individuals through tech education and opportunities.',
  icons: {
    icon: '/TIDI logo.ico',
    shortcut: '/TIDI logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/TIDI logo.ico"/>
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
