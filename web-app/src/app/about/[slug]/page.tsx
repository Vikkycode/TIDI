<<<<<<< HEAD
'use client';
import React from 'react';
import { notFound } from 'next/navigation'; // Import notFound for consistency
import thematicAreas from '@/lib/data'; // This imports the array and implicitly the types if defined in data.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you want to use your Button component for CTAs
import { FaArrowLeft } from 'react-icons/fa'; // Optional: for a back button

interface Params {
  slug: string;
}

export default function ThematicAreaDetailPage({ params }: { params: Params }) {
  const id = params.slug;
  const thematicArea = thematicAreas.find(area => area.slug === id);

  if (!thematicArea) {
    // Use notFound() for a proper 404 page if the area doesn't exist
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Optional: A header similar to the other thematic area page for consistency */}
      <header className="bg-blue-600 text-white py-10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-5xl md:text-6xl">{thematicArea.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{thematicArea.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl">{thematicArea.description}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-10">
          <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center group">
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Homepage
          </Link>
        </div>

        <div className="space-y-12">
          {thematicArea.sections.map((section, index) => (
            <section
              key={index}
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
                <div className="space-y-4 text-gray-700 leading-relaxed mb-6 prose max-w-none">
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
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-4 prose max-w-none">
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
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

=======
'use client';
import React from 'react';
import { notFound } from 'next/navigation'; // Import notFound for consistency
import thematicAreas from '@/lib/data'; // This imports the array and implicitly the types if defined in data.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you want to use your Button component for CTAs
import { FaArrowLeft } from 'react-icons/fa'; // Optional: for a back button

interface Params {
  slug: string;
}

export default function ThematicAreaDetailPage({ params }: { params: Params }) {
  const id = params.slug;
  const thematicArea = thematicAreas.find(area => area.slug === id);

  if (!thematicArea) {
    // Use notFound() for a proper 404 page if the area doesn't exist
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Optional: A header similar to the other thematic area page for consistency */}
      <header className="bg-blue-600 text-white py-10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-5xl md:text-6xl">{thematicArea.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{thematicArea.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl">{thematicArea.description}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-10">
          <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center group">
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Homepage
          </Link>
        </div>

        <div className="space-y-12">
          {thematicArea.sections.map((section, index) => (
            <section
              key={index}
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
                <div className="space-y-4 text-gray-700 leading-relaxed mb-6 prose max-w-none">
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
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-4 prose max-w-none">
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
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

>>>>>>> cb739da (update files)
