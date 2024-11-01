'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              A future where Deaf individuals are leading innovators and
              problem-solvers in the tech world.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/images/vision-overlay.jpg" // Replace with your image
              alt="Vision Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Vision Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-800 text-lg md:text-xl mb-8">
              TIDI envisions a world where Deaf individuals are not only
              participants but leaders in the technology revolution. We see a
              future where Deaf children have equal access to STEM education,
              where Deaf professionals are highly sought after in the tech
              industry, and where Deaf communities are empowered to leverage
              technology for social and economic advancement.
            </p>
          </div>
        </section>

        {/* What Our Vision Looks Like Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              What Our Vision Looks Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Equal Access to Education"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Equal Access to Education
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Every Deaf child has the opportunity to pursue STEM education
                    from an early age, equipped with the resources and support
                    they need to excel.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Deaf Leaders in Tech"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Deaf Leaders in Tech
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Deaf professionals are leading innovation in tech companies,
                    startups, and research institutions, breaking down barriers
                    and inspiring future generations.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Empowered Deaf Communities"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Empowered Deaf Communities
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Deaf communities have the tools and knowledge to leverage
                    technology for economic growth, social change, and improved
                    quality of life.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Help Us Build This Future
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Partner with TIDI to create a more inclusive and accessible tech
              world for all.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Donate
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisionPage;
