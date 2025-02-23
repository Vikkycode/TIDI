'use client'
import React from 'react';
import Gallery from '@/components/Gallery'

const galleryImages: { src: string; alt: string; category: string }[] = [
    {
      src: '/assets/images/image1.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'images',
    },
    {
      src: '/assets/images/image2.jpg',
      alt: 'Image 2 Description',
      category: 'video',
    },
    {
      src: '/assets/images/image3.jpg',
      alt: 'Image 3 Description',
      category: 'images',  
    },
    {
      src: '/assets/images/image4.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'video',
    },
    {
      src: '/assets/images/image5.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'images',
    },
    {
      src: '/assets/images/image6.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'video',
    },
    {
      src: '/assets/images/image7.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'images',
    },
    {
      src: '/assets/images/image8.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'images',
    },
    {
      src: '/assets/images/image9.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'video',
    },
    {
      src: '/assets/images/image10.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'images',
    },
    {
      src: '/assets/images/image11.jpg', // Replace with actual image paths
      alt: 'Image 1 Descriptio',
      category: 'video',
    },
  ];
  
  const categories = Array.from(new Set(galleryImages.map(img => img.category))); // Use Array.from
  const GalleryPage: React.FC = () => {
    return (
      <div>
        <Gallery images={galleryImages} categories={categories} />
      </div>
    );
  };

export default GalleryPage;
