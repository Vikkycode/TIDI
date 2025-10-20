'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface GalleryPreviewProps {
  images: GalleryImage[];
  galleryLink: string;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ images, galleryLink }) => {
  return (
    <section className="py-16 bg-white" aria-labelledby="gallery-preview-title">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2
          id="gallery-preview-title"
          className="text-3xl md:text-4xl font-bold text-blue-500 mb-8"
        >
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, 6).map((img, idx) => (
            <figure
              key={img.src}
              className="bg-white rounded-lg shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition group animate-fade-in"
              tabIndex={0}
              aria-label={img.caption ? `${img.caption}: ${img.alt}` : img.alt}
            >
              <div className="relative w-full h-56">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={idx === 0}
                />
              </div>
              <figcaption className="p-4">
                {img.caption && (
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{img.caption}</h3>
                )}
                <p className="text-gray-600 text-sm">{img.alt}</p>
                {img.category && (
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {img.category}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href={galleryLink} passHref legacyBehavior>
          <a
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
            aria-label="View Full Gallery"
          >
            View Full Gallery
          </a>
        </Link>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;