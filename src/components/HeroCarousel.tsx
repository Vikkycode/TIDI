'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'

interface HeroSlide {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}
const slides: HeroSlide[] = [
  {
    title: 'Deaf tech educators',
    subtitle: 'deaf team',
    imageUrl: '/assets/images/abuvic.jpg',
    imageAlt: 'deaf parnters',
    buttonLink: '/team/key-staff',
  },
  {
    title: 'Deaf tech empowerment',
    subtitle: 'We empowered them with tech skills',
    imageUrl: '/assets/images/program.jpg',
    imageAlt: 'deaf community',
    buttonLink: '/gallery',
  },
  {
    title: 'Hand-on Workshop',
    subtitle: 'deaf community learn computer operations',
    imageUrl: '/assets/images/STEM.jpg',
    imageAlt: 'hand-on practical workshop',
    buttonLink: '/gallery',
  },
  // Add more slides...
];



const HeroCarousel: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];


  useEffect(() => {
    // Set up an interval to change the slide every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  // };

  // const iconVariants = {
  //   hover: { rotate: 360 },
  //   tap: { scale: 0.95 }
  // };


  return (
    <section>
      <motion.div
        className="relative w-full h-[500px] flex flex-row items-center justify-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        key={currentSlideIndex}>
        <Image
          src={currentSlide.imageUrl}
          alt={currentSlide.imageAlt || 'Hero Banner Image'}
          layout="fill"
          objectFit="cover"
          className="absolute w-full h-full object-contain inset-0 z-0"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 text-white hover:text-blue-300 focus:outline-none"
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
        >
          {/* Left Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 text-white hover:text-blue-300 focus:outline-none"
          onClick={handleNextSlide}
          aria-label="Next Slide"
        >
          {/* Right Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          {slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${currentSlideIndex === index ? 'bg-blue-500' : 'bg-gray-400 opacity-50'
                }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="z-10 text-center text-white px-4 md:px-0">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg"
            variants={heroVariants}
          >

            {currentSlide.title}
          </motion.h2>
          {currentSlide.subtitle && (
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              {currentSlide.subtitle}
            </p>
          )}
          {currentSlide.buttonLink && (
            <Link href={currentSlide.buttonLink}>
              <Button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                {currentSlide.buttonText || 'Learn More'}
              </Button>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
