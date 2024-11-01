'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface HeroSlide {
    title: string;
    subtitle?: string;
    imageUrl: string;
    imageAlt?: string;
    buttonText?: string;
    buttonLink?: string;
  } 

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}


  
const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: number | undefined; // Use 'number' for intervalId
    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, autoPlayInterval);
    }
  
    return () => clearInterval(intervalId); // No need for '!'
  }, [autoPlay, autoPlayInterval, slides.length]);


  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative" aria-label="Hero Carousel">
      <div
        ref={carouselRef}
        className="overflow-hidden"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
         <div className="flex flex-row w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[500px] flex  flex-row items-center justify-center"
            style={{
              scrollSnapAlign: 'start',
            }}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.imageAlt || 'Hero Banner Image'}
              layout="fill"
              objectFit="cover"
              className="absolute w-full h-full object-cover inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="z-10 text-center text-white px-4 md:px-0">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}
              {slide.buttonLink && (
                <Link href={slide.buttonLink}>
                  <Button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                    {slide.buttonText || 'Learn More'}
                  </Button>
                </Link>
              )}
              </div>
            </div>
        ))}
      </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
              currentSlide === index
                ? 'bg-blue-500'
                : 'bg-gray-400 opacity-50'
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous/Next Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 text-white hover:text-blue-300 focus:outline-none"
        onClick={handlePrevSlide}
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 text-white hover:text-blue-300 focus:outline-none"
        onClick={handleNextSlide}
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
