import React from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TIDI - Tech Inclusion for the Deaf Initiative',
  description: 'Empowering Deaf individuals through tech education and opportunities.',
  icons: {
<<<<<<< HEAD
    icon: '/TIDI logo.ico',
    shortcut: '/TIDI logo.ico',
=======
    icon: '/TIDI logo.png',
    shortcut: '/TIDI logo.png',
>>>>>>> cb739da (update files)
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
        <link rel="icon" href="/TIDI logo.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster /> {/* Add the Toaster component here */}
      </body>
    </html>
  );
}
