'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Example data source (replace with your real data or fetch from API/db)
const stateReports = {
  kaduna: {
    title: "Kaduna’s Deaf Youth in Tech",
    description: "Hands-on tech training and mentorship for Deaf students in Kaduna, opening doors to digital careers.",
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
        alt: 'Workshop in Kaduna',
        caption: 'Tech Workshop',
      },
      // ...more images
    ],
    report: `This workshop empowered Deaf students in Kaduna with digital skills, mentorship, and career guidance. The event was inclusive, with sign language interpreters and accessible materials. Participants shared their experiences and aspirations, fostering a sense of community and belonging.`,
    date: '2025-07-25',
  },
   Taraba: {
    title: "Taraba’s Deaf Youth in Tech",
    description: "Hands-on tech training and mentorship for Deaf students in Taraba, opening doors to digital careers.",
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
        alt: 'Workshop in Kaduna',
        caption: 'Tech Workshop',
      },
      // ...more images
    ],
    report: `This workshop empowered Deaf students in Kaduna with digital skills, mentorship, and career guidance. The event was inclusive, with sign language interpreters and accessible materials. Participants shared their experiences and aspirations, fostering a sense of community and belonging.`,
    date: '2025-07-25',
  },
   adamawa: {
    title: "Adamawa’s Deaf Youth in Tech",
    description: "Hands-on tech training and mentorship for Deaf students in Adamawa, opening doors to digital careers.",
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
        alt: 'Workshop in Kaduna',
        caption: 'Tech Workshop',
      },
      // ...more images
    ],
    report: `This workshop empowered Deaf students in Kaduna with digital skills, mentorship, and career guidance. The event was inclusive, with sign language interpreters and accessible materials. Participants shared their experiences and aspirations, fostering a sense of community and belonging.`,
    date: '2025-07-25',
  },
  // ...add entries for taraba, gombe, adamawa, bauchi, minna
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function StateReportPage() {
  const params = useParams();
  const stateKey = (params?.state as string)?.toLowerCase();
  const report = stateReports[stateKey];

  if (!report) {
    return (
      <div className="min-h-screen mt-20 absolute  flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">State Not Found</h1>
        <Link href="/gallery" className="text-blue-600 underline">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
      aria-labelledby="state-report-title"
    >
      <Link href="/gallery" className="text-blue-600 underline mb-4 inline-block focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
        ← Back to Gallery
      </Link>
      <h1 id="state-report-title" className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 focus-visible:outline-none" tabIndex={0}>
        {report.title}
      </h1>
      <p className="text-gray-700 mb-6 text-lg">{report.description}</p>
      <div className="flex flex-wrap gap-4 mb-8">
        {report.images.map((img, idx) => (
          <figure
            key={img.src}
            className="relative w-full sm:w-64 h-48 rounded-lg overflow-hidden shadow focus-within:ring-2 focus-within:ring-blue-500 group"
            tabIndex={0}
            aria-label={img.caption || img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={idx === 0}
            />
            {img.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      <article className="prose prose-blue max-w-none text-gray-900 bg-blue-50 rounded-lg p-6 shadow focus-within:ring-2 focus-within:ring-blue-500" tabIndex={0}>
        <p className="mb-2">{report.report}</p>
        <time className="block text-xs text-gray-500 mt-4" dateTime={report.date}>
          {new Date(report.date).toLocaleDateString()}
        </time>
      </article>
    </motion.section>
  );
}