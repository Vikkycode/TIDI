'use client'
import React, { useState } from 'react';
import Image from 'next/image';

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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our Gallery
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Image */}
          <div className="w-full md:w-2/3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800} // Adjust as needed
              height={500} // Adjust as needed
              className="object-cover w-full h-full"
            />
          </div>

          {/* Thumbnails */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out 
                  ${selectedImage.src === image.src ? 'transform scale-105 ring-2 ring-blue-500' : 'hover:scale-105'}
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200} // Adjust as needed
                  height={100} // Adjust as needed
                  className="object-cover w-full h-[200px]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
