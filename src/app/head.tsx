// app/head.tsx
import { MetadataRoute } from 'next/server';

export default function Head(): MetadataRoute {
  return (
    <head>
      <title>TIDI</title> <meta name="description" content="Empowering the deaf community through STEM education" />
      <link rel="icon" href="/favicon.ico" /> {/* Favicon for all browsers */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> {/* For Apple devices */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" /> {/* For PWA features (if applicable) */}
    </head>
  );
}
