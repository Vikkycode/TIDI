<<<<<<< HEAD
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
=======
'use client'
import React from 'react';
import Gallery from '@/components/Gallery'


const galleryData = [
  // {
  //   state: 'Minna',
  //   images: [
  //     {
  //       src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/minna1.jpg',
  //       alt: 'Mentorship session in Minna',
  //       title: 'Mentorship Session',
  //       description: 'Deaf students learning about technology careers in Minna.',
  //     },
  //     {
  //       src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/minna2.jpg',
  //       alt: 'Group photo in Minna',
  //       title: 'Group Photo',
  //       description: 'Participants and mentors after a successful workshop.',
  //     },
  //   ],
  // },
  {
    state: 'Kaduna',
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
        alt: 'Tech Careers and Workshop in Kaduna',
        title: 'Tech Careers & Workshop',
        description: 'TIDI volunteers led and mentored 56 Deaf secondary students on tech careers at Kaduna State Special Education School.',
      },
      // ...more images
    ],
  },
  {
    state: 'Taraba',
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.39.47_93649202_kviusb.jpg',
        alt: 'Taraba workshop',
        title: 'Empowerment Workshop',
        description: 'Empowering 30+ Deaf youths and secondary students with Career Pathway in Taraba.',
      },
      // ...more images
    ],
  },
  {
    state: 'Gombe',
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.42.10_32a55625_bbl8ne.jpg',
        alt: 'Gombe workshop',
        title: 'Career Guidance Workshop',
        description: 'Career guidance session for 50 Deaf secondary students in Gombe.',
      },
      // ...more images
    ],
  },
  {
    state: 'Adamawa',
    images: [
      {
        src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/IMG-20250703-WA0022_osmo7u.jpg',
        alt: 'Adamawa workshop',
        title: 'Digital Mentorship',
        description: 'Digital mentorship program for 30+ Deaf secondary students in Adamawa in Adamawa.',
      },
      // ...more images
    ],
  },
];
const GalleryPage: React.FC = () => (
  <div>
    <Gallery galleryData={galleryData} />
  </div>
);

export default GalleryPage;
>>>>>>> cb739da (update files)
