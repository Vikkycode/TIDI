import React from 'react';
import Gallery from '@/components/Gallery'

const galleryImages: { src: string; alt: string }[] = [
    {
      src: '/assets/images/abuvic.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
    },
    {
      src: '/assets/images/team.jpg',
      alt: 'Image 2 Description',
    },
    {
      src: '/assets/images/program.jpg',
      alt: 'Image 3 Description',
    },
    // Add more images as needed
  ];
  
  const GalleryPage: React.FC = () => {
    return (
      <div>
        <Gallery images={galleryImages} />
      </div>
    );
  };

export default GalleryPage;