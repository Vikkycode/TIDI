'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-500 to-blue-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Supporting the Deaf community through a range of impactful
              initiatives.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/images/services-overlay.jpg" // Replace with your image
              alt="Services Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/educational-resources.jpg" // Replace with relevant image
                  alt="Educational Resources"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Educational Resources
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We provide a curated collection of accessible online
                    resources, learning materials, and tools to support Deaf
                    individuals in their STEM journey.
                  </CardDescription>
                  <Link href="/services/educational-resources">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Explore Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/mentorship-program.jpg" // Replace with relevant image
                  alt="Mentorship Program"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Mentorship Program
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Our mentorship program connects Deaf individuals with
                    experienced professionals in STEM fields for guidance,
                    support, and career advice.
                  </CardDescription>
                  <Link href="/services/mentorship-program">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Service 3 - Add more services as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Partner with Us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Collaborate with TIDI to expand our services and empower more
              Deaf individuals in STEM.
            </p>
            <Link href="/contact">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
