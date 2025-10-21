'use client';

import React from 'react';
import HomePage from '@/components/Homepage';
// import CloudinaryGallery from '@/components/CloudinaryGallery';


export default function Home() {

const galleryImages = [
  // {
  //   src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/minna1.jpg',
  //   alt: 'Mentorship session in Minna',
  //   caption: 'Mentorship Session',
  //   category: 'Minna',
  // },
  {
    src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
    alt: 'Tech workshop in Kaduna',
    caption: 'Tech Workshop',
    category: 'Kaduna',
  },
  {
    src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.39.47_93649202_kviusb.jpg',
    alt: 'Empowerment workshop in Taraba',
    caption: 'Empowerment Workshop',
    category: 'Taraba',
  },
  {
    src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.42.10_32a55625_bbl8ne.jpg',
    alt: 'Career guidance in Gombe',
    caption: 'Career Guidance',
    category: 'Gombe',
  },
  {
    src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/IMG-20250703-WA0022_osmo7u.jpg',
    alt: 'Digital mentorship in Adamawa',
    caption: 'Digital Mentorship',
    category: 'Adamawa',
  },
  {
    src: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/IMG_6954_ye9nv6.jpg',
    alt: 'Future leaders in Bauchi',
    caption: 'Future Leaders',
    category: 'Bauchi',
  },
];
  
  
  const impactData = [
    { title: 'Educated', number: '300+', description: 'Deaf students trained in Tech Careers and Mentorship.', link: '/educated' },
    { title: 'Communities Reached', number: '4+', description: 'Across different Northeast states in Nigeria.', link: '/communities' },
    { title: 'Partnerships', number: '6+', description: 'With organizations committed to Deaf inclusion.', link: '/partnerships' }
  ];
  
  const partners = [
    { name: 'NANDS', logo: 'https://res.cloudinary.com/your-cloud-name/image/upload/f_auto,q_auto/v1/tidi-webapp/nands.png', link: '' },
    { name: 'NNADS', logo: 'https://res.cloudinary.com/your-cloud-name/image/upload/f_auto,q_auto/v1/tidi-webapp/nnad.png', link: 'https://www.partner-b.com' },
    { name: 'AAD', logo: 'https://res.cloudinary.com/your-cloud-name/image/upload/f_auto,q_auto/v1/tidi-webapp/AAD.png' },
  ];
  


  return (

    <div className="min-h-screen bg-gray-50">
      <HomePage impactData={impactData} galleryImages={galleryImages} partners={partners} />
      {/* <CloudinaryGallery /> */}
    </div>
  );
}