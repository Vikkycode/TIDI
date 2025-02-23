'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const CoreValuesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Core Values
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Guiding principles that shape our work and inspire us to make a
              difference.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/assets/icons/E-WEB-Goal-04.png" // Replace with your image
              alt="Core Values Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Inclusion */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Inclusion"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Inclusion
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-left">
                    We believe that every Deaf individual has the right to
                    access quality education and career opportunities. We work
                    tirelessly to remove barriers and create a space where Deaf
                    individuals can learn, grow, and succeed.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Empowerment */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Empowerment"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Empowerment
                  </CardTitle>
                  <CardDescription className="text-gray-600  text-left">
                    At TIDI, we see education as a tool for empowerment. Our
                    programs are designed to give Deaf learners the skills,
                    knowledge, and confidence they need to pursue careers in
                    the tech industry and advocate for themselves.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Accessibility */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Accessibility"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Accessibility
                  </CardTitle>
                  <CardDescription className="text-gray-600  text-left">
                    Accessibility is at the core of everything we do. From our
                    online platform to our physical tech school, we prioritize
                    making our programs accessible to all Deaf learners. This
                    includes providing sign language interpretation,
                    captioning, and other accommodations.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Innovation"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Innovation
                  </CardTitle>
                  <CardDescription className="text-gray-600  text-left">
                    The tech industry is constantly evolving, and so are we.
                    TIDI is committed to staying at the forefront of
                    technological advancements and continuously improving our
                    programs to meet the changing needs of the Deaf community.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Collaboration */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Collaboration"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Collaboration
                  </CardTitle>
                  <CardDescription className="text-gray-600  text-left">
                    We recognize that creating lasting change requires
                    collaboration. TIDI values partnerships with organizations,
                    educators, employers, and the Deaf community to create
                    programs that are more impactful, sustainable, and
                    beneficial.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoreValuesPage;
