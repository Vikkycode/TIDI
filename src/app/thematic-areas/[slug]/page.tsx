// src/app/thematic-areas/[slug]/page.tsx
'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import thematicAreas from '@/lib/data'; // Import ThematicArea type
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

interface ThematicAreaDetailPageProps {
  params: { slug: string };
}

const ThematicAreaDetailPage: React.FC<ThematicAreaDetailPageProps> = ({ params }) => {
  const { slug } = params;
  const area = thematicAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-blue-600 text-white py-10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 text-5xl md:text-6xl">{area.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{area.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl">{area.description}</p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="mb-10">
          <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center group">
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Homepage
          </Link>
        </div>

        <div className="space-y-12">
          {area.sections.map((section, index) => (
            <motion.section
              key={index}
              custom={index}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              aria-labelledby={`section-title-${index}`}
            >
              <h2
                id={`section-title-${index}`}
                className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6"
              >
                {section.title}
              </h2>

              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.listTitle && (
                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-4">
                  {section.listTitle}
                </h3>
              )}

              {section.listItems && section.listItems.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-4">
                  {section.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.ctaText && section.ctaLink && (
                <div className="mt-6 text-center md:text-left">
                  <Link href={section.ctaLink}>
                    <Button variant="default" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                      {section.ctaText}
                    </Button>
                  </Link>
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ThematicAreaDetailPage;
