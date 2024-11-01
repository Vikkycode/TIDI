'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {Card} from '@/components/ui/card'; // Assuming you have a Card component from Shadcn UI
import { Button } from './ui/button';
interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="bg-white py-16" aria-labelledby="gallery-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2 id="gallery-section" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our Gallery
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Image */}
          <Card className="w-full md:w-2/3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800} // Adjust as needed
              height={500} // Adjust as needed
              className="object-cover w-full h-full rounded-t-lg"
            />
            {/* You can add CardHeader, CardContent, etc. here if needed */}
          </Card>

          {/* Thumbnails */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {images.map((image, index) => (
              <Button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative overflow-hidden transition-transform duration-300 ease-in-out 
                  ${selectedImage.src === image.src ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:scale-105'}
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200} // Adjust as needed
                  height={100} // Adjust as needed
                  className="object-cover w-full h-[200px] rounded-lg"
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
