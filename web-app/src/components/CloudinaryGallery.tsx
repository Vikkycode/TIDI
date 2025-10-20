import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CloudinaryGallery: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cloudinary-images')
      .then(res => res.json())
      .then(data => {
        setImages(data.images || []);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Gallery</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(img => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="rounded shadow object-cover w-full h-48"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CloudinaryGallery;