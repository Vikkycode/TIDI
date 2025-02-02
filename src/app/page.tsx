'use client';
// import { Metadata } from 'next';
import React from 'react';
// import Image from 'next/image';
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
import HeroCarousel from '@/components/HeroCarousel'
import { DonorPartnerSection } from '@/components/DonorParnterSection';
// import { DonorPartner } from '@/components/DonorPartnerSection';
import { ImpactCard } from '@/components/ImpactCard';
import thematicAreas from '@/lib/data';
import ThematicAreaCard from '@/components/ThematicAreaCard';
// import Contact from '@/components/contact';
import { motion } from 'framer-motion'

// const metadata: Metadata = {
//   title: 'Tech Inclusion Deaf Initiative',
//   description: 'Empowering the Deaf community through STEM education.',
// };

const galleryImages = [
  {
    src: '/assets/images/abuvic.jpg',
    alt: 'Deaf parnters',
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
];

const impactData = [
  { title: 'Educated', number: '30+', description: 'Deaf individuals trained in STEM skills.', link: '/educated' },
  { title: 'Communities Reached', number: '1', description: 'Across different states in Nigeria.', link: '/communities' },
  { title: 'Partnerships', number: '4', description: 'With organizations committed to Deaf inclusion.', link: '/partnerships' }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
};

const iconVariants = {
  hover: { rotate: 360 },
  tap: { scale: 0.95 }
};

const partners = [
  { name: 'Partner A', logo: '/assets/images/TIDI logo.png', link: 'https://www.partner-a.com' },
  { name: 'Partner B', logo: '/assets/images/TIDI logo.png', link: 'https://www.partner-b.com' },
  { name: 'Partner C', logo: '/assets/images/TIDI logo.png' },
  // ... add more partners
];

export default function HomePage() {

  return (
    <div
      className="bg-gray-50 min-h-screen font-sans"
      aria-label="Tech Inclusion Deaf Initiative Homepage"
    >
      <main>
        {/* Hero Section */}
        <section>
          <HeroCarousel />
        </section>
        {/* About Us */}
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
            <section className="py-16 rounded-lg overflow-hidden" aria-labelledby="about-us-title">
              <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                  {/* Text content now full width */}
                  <div className="w-full text-center md:text-left">
                    <h2 id="about-us-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Empowering Deaf Individuals Through Tech
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl mb-6">
                      At TIDI, we are passionate about fostering inclusivity and opportunity within the deaf community. We believe technology can be a powerful tool for empowerment, and we are dedicated to equipping deaf individuals with the skills they need to thrive in the digital world.
                    </p>
                    <Link href="/about">
                      <Button className="mt-4">Learn Our Story</Button>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { icon: <FaHandshake />, title: 'Inclusion', description: 'We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed' },
                    { icon: <FaHandsHelping />, title: 'Empowerment', description: 'At TIDI, we see education as a tool for empowerment. Ou programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.' },
                    { icon: <FaWheelchair />, title: 'Accessibility', description: 'Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation, captioning, and other accommodations' },
                    { icon: <FaLightbulb />, title: 'Innovation', description: 'The tech industry is constantly evolving, and so are we. TIDI is committed to staying at the forefront of technological advancements and continuously improving our programs to meet the changing needs of the Deaf community.' },
                    { icon: <FaUsers />, title: 'Collaboration', description: 'We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations, educators, employers, and the Deaf community to create programs that are more impactful, sustainable, and beneficial' }
                  ].map(({ icon, title, description }, index) => (
                    <motion.div
                      variants={cardVariants}
                      whileHover="visible"
                      // initial="hidden"
                      className="transform transition duration-300 ease-in-out hover:scale-105"
                      key={index}
                    >
                      <Card key={index}>
                        <CardHeader className="flex flex-col items-center">
                          <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
                            {React.cloneElement(icon, {
                              className: 'text-5xl text-blue-500 mb-2',
                              size: 64 // Adjust icon size as needed
                            })}

                          </motion.div>
                          <CardTitle className="text-blue-500 text-2xl font-bold">{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">
                            {description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-16 bg-white" aria-labelledby="thematic-areas-title">
              <div className="container mx-auto px-4 md:px-0">
                <h2 id="thematic-areas-title" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                  Our Thematic Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {thematicAreas.map((area) => (
                    <ThematicAreaCard key={area.slug} {...area} />
                  ))}
                </div>
              </div>
            </section>
            <section className="py-16" id="learn-more" aria-labelledby="impact-title">
              <div className="container mx-auto px-4 md:px-0">
                <h2 id="impact-title" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Our Impact</h2> {/* Added title */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" aria-label="Our Impact">
                  {impactData.map((item, index) => (
                    <ImpactCard key={index} {...item} /> // Spread the data into the component
                  ))}
                </div>
              </div>
            </section>

            <GalleryPreview images={galleryImages} galleryLink="/gallery" />
            <div>
              {/* ... other content */}
              <DonorPartnerSection partners={partners} />
              {/* ... other content */}
            </div>
            {/* <Contact /> */}
          </div>
        </section>
      </main>
    </div>
  );
}
