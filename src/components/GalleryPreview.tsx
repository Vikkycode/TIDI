import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you're using Shadcn UI

interface GalleryPreviewProps {
  images: { src: string; alt: string }[];
  galleryLink: string; // Link to the full gallery page
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ images, galleryLink }) => {
  return (
    <section className="py-16 bg-white" aria-labelledby="gallery-preview-title">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 id="gallery-preview-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, 3).map((image, index) => ( // Display up to 3 images
            <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105"
            style={{ position: 'relative', paddingBottom: '56.25%' /* Aspect Ratio 16:9 */ }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill" // Make the image responsive
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Optional: Add a semi-transparent overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>

        <Link href={galleryLink}>
          <Button className="mt-8">View Full Gallery</Button>
        </Link>
      </div>
    </section>
  );
};

export default GalleryPreview;
