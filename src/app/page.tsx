'use client';

import React from 'react';
import HomePage from '@/components/Homepage';



export default function Home() {

  const galleryImages = [
    {
      src: '/assets/images/image1.jpg',
      alt: 'Deaf parnters',
      caption: 'Tech partners',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image2.jpg',
      alt: 'Image 2 Description',
      caption: 'Deaf teams',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image4.jpg',
      alt: 'Image 3 Description',
      category: 'Tech Partners',
      caption:
        'TIDI organized one-day tech training workshop at special school in Zamfara State',
    },
    
    {
      src: '/assets/images/image5.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image6.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image7.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image8.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image9.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image10.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
    {
      src: '/assets/images/image11.jpg',
      alt: 'Image 4 Description',
      category: 'Tech Partners',
    },
  ];
  
  
  const impactData = [
    { title: 'Educated', number: '300+', description: 'Deaf individuals trained in STEM skills.', link: '/educated' },
    { title: 'Communities Reached', number: '4+', description: 'Across different states in Nigeria.', link: '/communities' },
    { title: 'Partnerships', number: '4+', description: 'With organizations committed to Deaf inclusion.', link: '/partnerships' }
  ];
  
  const partners = [
    { name: 'NANDS', logo: '/assets/images/nands.png', link: '' },
    { name: 'NNADS', logo: '/assets/images/nnad.png', link: 'https://www.partner-b.com' },
    { name: 'AAD', logo: '/assets/images/AAD.png' },
  ];
  

  return <HomePage impactData={impactData} galleryImages={galleryImages} partners={partners} />;}