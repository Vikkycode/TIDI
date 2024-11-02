'use client';
// import { Metadata } from 'next';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { 
  FaHandshake, 
  FaHandsHelping, 
  FaWheelchair, 
  FaLightbulb, 
  FaUsers 
} from 'react-icons/fa';

import GalleryPreview from '@/components/GalleryPreview';
import Contact from '@/components/contact';

// const metadata: Metadata = {
//   title: 'Tech Inclusion Deaf Initiative',
//   description: 'Empowering the Deaf community through STEM education.',
// };

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
    title: 'Slide 1 Title',
    subtitle: 'Slide 1 Subtitle',
    imageUrl: '/assets/images/abuvic.jpg',
    imageAlt: 'Slide 1 Image',
    buttonLink: '/about',
  },
  // {
  //     title: 'Slide 2 Title',
  //     subtitle: 'Slide 2 Subtitle',
  //     imageUrl: '/assets/images/abuvic.jpg',
  //     imageAlt: 'Slide 2 Image',
  //     buttonLink: '/about',
  //   },
  //   {
  //     title: 'Slide 3 Title',
  //     subtitle: 'Slide 3 Subtitle',
  //     imageUrl: '/assets/images/abuvic.jpg',
  //     imageAlt: 'Slide 3 Image',
  //     buttonLink: '/about',
  //   },
  // Add more slides...
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
        >
      <HeroCarousel slides={slides} />
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
              {/* Add Card components here to showcase your impact */}
            </div>

            {/* Feature Sections */}
            <section className="py-16 bg-gray-100 rounded-lg" aria-labelledby="about-us-title"> 
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Image on the right for larger screens */}
          <div className="w-full md:w-1/2 md:order-last"> 
            <Image
              src="/assets/images/abuvic.jpg" // Replace with your actual image
              alt="Descriptive alt text about the image" 
              width={500}
              height={350}
              className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 
              id="about-us-title" 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              About Us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
              We are a passionate team of educators, advocates, and technology 
              professionals dedicated to bridging the gap in STEM education for 
              the deaf community. 
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
              Our mission is to empower deaf individuals with the skills and 
              opportunities to thrive in the ever-evolving world of technology.
            </p>
            <Link href="/about">
              <Button className="mt-4">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center px-4 md:px-0">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Our Values
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Inclusion */}
      <Card>
        <CardHeader className="flex flex-col items-center"> 
          <FaHandshake className="text-3xl text-blue-500 mb-2" /> 
          <CardTitle className="text-blue-500 text-xl font-bold">
            Inclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
          We believe that every Deaf individual has the right to
                        access quality education and career opportunities. We
                        work tirelessly to remove barriers and create a space
                        where Deaf individuals can learn, grow, and succeed.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Empowerment */}
      <Card>
        <CardHeader className="flex flex-col items-center"> 
          <FaHandsHelping className="text-3xl text-blue-500 mb-2" /> 
          <CardTitle className="text-blue-500 text-xl font-bold">
            Empowerment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
          At TIDI, we see education as a tool for empowerment. Our
                        programs are designed to give Deaf learners the skills,
                        knowledge, and confidence they need to pursue careers in
                        the tech industry and advocate for themselves.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader className="flex flex-col items-center"> 
          <FaWheelchair className="text-3xl text-blue-500 mb-2" /> 
          <CardTitle className="text-blue-500 text-xl font-bold">
            Accessibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
          Accessibility is at the core of everything we do. From
                        our online platform to our physical tech school, we
                        prioritize making our programs accessible to all Deaf
                        learners. This includes providing sign language
                        interpretation, captioning, and other accommodations
          </CardDescription>
        </CardContent>
      </Card>

      {/* Innovation */}
      <Card>
        <CardHeader className="flex flex-col items-center"> 
          <FaLightbulb className="text-3xl text-blue-500 mb-2" /> 
          <CardTitle className="text-blue-500 text-xl font-bold">
            Innovation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
          The tech industry is constantly evolving, and so are we.
                        TIDI is committed to staying at the forefront of
                        technological advancements and continuously improving our
                        programs to meet the changing needs of the Deaf
                        community.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Collaboration */}
      <Card>
        <CardHeader className="flex flex-col items-center"> 
          <FaUsers className="text-3xl text-blue-500 mb-2" /> 
          <CardTitle className="text-blue-500 text-xl font-bold">
            Collaboration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
          We recognize that creating lasting change requires
          collaboration. TIDI values partnerships with
          organizations, educators, employers, and the Deaf
          community to create programs that are more impactful,
          sustainable, and beneficial
          </CardDescription>
        </CardContent>
      </Card>
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

            <Contact /> {/* Moved outside the flex container */}
          </div>
        </section>
      </main>
    </div>
  );
}
