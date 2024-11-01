'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-teal-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Empowering Deaf individuals through innovative and accessible STEM
              education.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/images/programs-overlay.jpg" // Replace with your image
              alt="Programs Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/coding-bootcamp.jpg" // Replace with relevant image
                  alt="Coding Bootcamp for Deaf Youth"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Coding Bootcamp for Deaf Youth
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Our intensive coding bootcamp provides Deaf youth with
                    in-demand coding skills, preparing them for careers in web
                    development, software engineering, and more.
                  </CardDescription>
                  <Link href="/programs/coding-bootcamp">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Program 2 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/digital-literacy.jpg" // Replace with relevant image
                  alt="Digital Literacy Workshops"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Digital Literacy Workshops
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We offer workshops on essential digital literacy skills,
                    empowering Deaf individuals to navigate the online world
                    with confidence.
                  </CardDescription>
                  <Link href="/programs/digital-literacy">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Program 3 - Add more programs as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Support Our Programs
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Your contribution can make a real difference in the lives of Deaf
              individuals pursuing STEM education.
            </p>
            <Link href="/donate">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Donate Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramsPage;
