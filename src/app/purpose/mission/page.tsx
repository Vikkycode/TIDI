'use client';
import React from 'react';
import Image from 'next/image'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link';

const MissionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10"> {/* Add z-index */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Our Mission</h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Empowering Deaf individuals to thrive in a technology-driven world.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50"> 
            <Image 
              src="/images/hero-overlay.jpg" // Replace with your image
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0 text-left">
            <p className="text-gray-800 text-lg md:text-xl mb-8">
              At TIDI (Tech Inclusion for the Deaf Initiative), we are driven by a commitment to bridge the digital divide for the Deaf community. 
              We believe that access to quality STEM education is not a privilege, but a right. 
              Our mission is to empower Deaf children, youth, and adults with the skills, knowledge, and confidence to succeed in the ever-evolving technology landscape.
            </p>
          </div>
        </section>

        {/* How We Achieve Our Mission Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              How We Achieve Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/Accessible Edu.jpg" // Replace with relevant image
                  alt="Accessible Education"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Accessible Education
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We provide high-quality, accessible STEM education programs tailored to the unique learning needs of Deaf individuals.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/building community.png" // Replace with relevant image
                  alt="Building Community"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Building Community
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We foster a supportive and inclusive community where Deaf individuals can connect, collaborate, and learn from one another.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/advocacy.png" // Replace with relevant image
                  alt="Advocating for Change"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Advocating for Change
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We advocate for policies and practices that promote digital inclusion and equity for the Deaf community.
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
              Join Us in Our Mission
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Support TIDI and help us create a more inclusive and accessible tech world for all.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
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

export default MissionPage;
