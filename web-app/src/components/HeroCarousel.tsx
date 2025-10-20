'use client';
import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
// import type {Timeout} from 'node:timers'

type Timeout = ReturnType<typeof setTimeout>;

interface HeroSlide {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}
const slides: HeroSlide[] = [
  // {
  //   title: 'Empowering Deaf Students in Minna',
  //   description: 'Career mentorship workshop inspiring Deaf secondary school students in Minna to pursue technology and innovation.',
  //   imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/minna_hero.jpg',
  //   imageAlt: 'Mentorship in Minna',
  //   buttonText: 'See Minna Impact',
  //   buttonLink: '/gallery/minna',
  // },
  {
    title: 'Kaduna’s Deaf Youth in Tech',
    description: 'Hands-on tech training and mentorship for Deaf students in Kaduna, opening doors to digital careers.',
    imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/DSC_2161_wofjgv',
    imageAlt: 'Workshop in Kaduna',
    buttonText: 'See Kaduna Impact',
    buttonLink: '/gallery/kaduna',
  },
  {
    title: 'Taraba’s Path to Inclusion',
    description: 'Empowering Deaf students in Taraba with skills and mentorship for a brighter, tech-driven future.',
    imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.39.47_93649202_kviusb.jpg',
    imageAlt: 'Workshop in Taraba',
    buttonText: 'See Taraba Impact',
    buttonLink: '/gallery/taraba',
  },
  {
    title: 'Gombe’s Deaf Tech Trailblazers',
    description: 'Career guidance and digital skills for Deaf secondary school students in Gombe.',
    imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/WhatsApp_Image_2025-07-25_at_10.42.10_32a55625_bbl8ne.jpg',
    imageAlt: 'Workshop in Gombe',
    buttonText: 'See Gombe Impact',
    buttonLink: '/gallery/gombe',
  },
  {
    title: 'Adamawa’s Digital Mentorship',
    description: 'Mentorship and tech workshops for Deaf students in Adamawa, fostering inclusion and opportunity.',
    imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/IMG-20250703-WA0022_osmo7u.jpg',
    imageAlt: 'Workshop in Adamawa',
    buttonText: 'See Adamawa Impact',
    buttonLink: '/gallery/adamawa',
  },
  {
    title: 'Bauchi’s Deaf Future Leaders',
    description: 'Equipping Deaf students in Bauchi with career mentorship and digital skills for tomorrow.',
    imageUrl: 'https://res.cloudinary.com/dr1qigl4z/image/upload/q_auto,f_auto/IMG_6954_ye9nv6.jpg',
    imageAlt: 'Workshop in Bauchi',
    buttonText: 'See Bauchi Impact',
    buttonLink: '/gallery/bauchi',
  },
];


const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Start new timer
    timerRef.current = setTimeout(nextSlide, 5000); // 5 seconds

    // Cleanup: clear timer on unmount
    return () => clearTimeout(timerRef.current || 0);
  }, [currentSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white text-md md:text-lg mb-6">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].buttonText && slides[currentSlide].buttonLink && (
                <Link
                  href={slides[currentSlide].buttonLink || ''}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                >
                  {slides[currentSlide].buttonText}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;