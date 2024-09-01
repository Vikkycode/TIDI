'use client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GalleryPreview from '@/components/GalleryPreview';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const metadata: Metadata = {
  title: 'Tech Inclusion Deaf Initiative',
  description: 'Empowering the Deaf community through STEM education.',
};

const galleryImages = [
  {
    src: '/assets/images/abuvic.jpg',
    alt: 'Image 1 Description',
    caption: 'Tech partners',
  },
  {
    src: '/assets/images/team.jpg',
    alt: 'Image 2 Description',
    caption: 'Deaf teams',
  },
  {
    src: '/assets/images/program.jpg',
    alt: 'Image 3 Description',
    caption:
      'TIDI organized one-day tech training workshop at special school in Zamfara State',
  },
  {
    src: '/assets/images/program.jpg',
    alt: 'Image 4 Description',
  },
  // Add more images as needed
];

export default function HomePage() {
  return (
    <div
      className="bg-gray-50 min-h-screen font-sans"
      aria-label="Tech Inclusion Deaf Initiative Homepage"
    >
      <main>
        {/* Hero Section */}
        <section
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white"
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto text-center px-4 md:px-0">
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Tech Inclusion Deaf Initiative
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering the Deaf community to thrive in the world of STEM.
            </p>
            <Link
              href="#learn-more"
              className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
              aria-label="Learn more about our impact"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Our Impact Section */}
        <section
          className="py-16"
          id="learn-more"
          aria-labelledby="impact-title"
        >
          <div className="container mx-auto px-4 md:px-0">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              aria-label="A grid showcasing our impact in three areas"
            >
              {/* Impact Card 1 */}
              {/* <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/lengnen.jpg"
                  alt="Impactful Image 1 Description"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    Title of Impact 1
                  </CardTitle>
                  <CardDescription>
                    Short description of the impact or achievement. Make it
                    engaging and concise.
                  </CardDescription>
                </CardContent>
              </Card>

              
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/lengnen.jpg"
                  alt="Impactful Image 2 Description"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    Title of Impact 2
                  </CardTitle>
                  <CardDescription>
                    Short description of the impact or achievement. Make it
                    engaging and concise.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/lengnen.jpg"
                  alt="Impactful Image 3 Description"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    Title of Impact 3
                  </CardTitle>
                  <CardDescription>
                    Short description of the impact or achievement. Make it
                    engaging and concise.
                  </CardDescription>
                </CardContent>
              </Card> */}
            </div>

            {/* Feature Sections */}
            <section className="bg-gray-100 py-16 rounded-lg">
              <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/assets/images/abuvic.jpg"
                      alt="Abubakar and Victor smiled together"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                      To empower deaf children and adults to reach their full
                      potential in STEM fields by providing accessible,
                      high-quality education and resources.
                    </p>
                    <Link href="/about">
                      <Button className="mt-4">Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 rounded-lg">
              <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/assets/images/team.jpg"
                      alt="Abubakar and Victor smiled together"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      About Us
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                      We are a passionate team of educators, advocates, and
                      technology professionals dedicated to bridging the gap in
                      STEM education for the deaf community. Learn more about
                      our story and the impact we're making.
                    </p>
                    <Link href="/about">
                      <Button className="mt-4">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-100 py-16 rounded-lg">
              <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/assets/images/STEM.jpg"
                      alt="Students working on a STEM project"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      About the STEM School
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                      Learn about our innovative STEM curriculum designed for
                      deaf children and adults.
                    </p>
                    <Link href="/about">
                      <Button className="mt-4">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <GalleryPreview images={galleryImages} galleryLink="/gallery" />

            <section className="py-16 rounded-lg">
              <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/assets/images/program.jpg"
                      alt="Volunteers helping at an event"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Get Involved
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                      Make a difference in the lives of deaf individuals.
                      Volunteer or donate today!
                    </p>
                    <Link href="/get-involved">
                      <Button className="mt-4">Get Involved</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
