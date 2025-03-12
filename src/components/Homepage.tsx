import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import { ImpactCard } from '@/components/ImpactCard';
import ThematicAreaCard from '@/components/ThematicAreaCard';
import GalleryPreview from '@/components/GalleryPreview';
import { DonorPartnerSection } from '@/components/DonorParnterSection';
import thematicAreas from '@/lib/data'; // Import your thematic area data
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FaHandshake, FaHandsHelping, FaWheelchair, FaLightbulb, FaUsers } from 'react-icons/fa';

interface HomePageProps {
  impactData: { title: string; number: string | number; description: string; link?: string }[];
  galleryImages: { src: string; alt: string; caption?: string; category: string }[];
  partners: { name: string; logo: string; link?: string }[];
}

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  key: string
}

const valuesData: ValueItem[] = [
  {
    key: 'Inclusion',
    title: 'Inclusion',
    description: 'We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed',
    icon: <FaHandshake className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Empowerment',
    title: 'Empowerment',
    description: 'At TIDI, we see education as a tool for empowerment. Ou programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.',
    icon: <FaHandsHelping className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Accessibility',
    title: 'Accessibility',
    description: 'Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation, captioning, and other accommodations',
    icon: <FaWheelchair className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Innovation',
    title: 'Innovation',
    description: 'The tech industry is constantly evolving, and so are we. TIDI is committed to staying at the forefront of technological advancements and continuously improving our programs to meet the changing needs of the Deaf community.',
    icon: <FaLightbulb className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Collaboration',
    title: 'Collaboration',
    description: 'We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations, educators, employers, and the Deaf community to create programs that are more impactful, sustainable, and beneficial',
    icon: <FaUsers className="text-5xl text-blue-500 mb-2" />,
  },
];
// const lazyFeatureSection = React.lazy(()=> import('./FeatureSection'))

const HomePage: React.FC<HomePageProps> = ({ impactData, galleryImages, partners }) => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  };

  const iconVariants = {
    hover: { rotate: 360 },
    tap: { scale: 0.95 }
  };

    const handleIconClick = (valueKey: string) => {
    setExpandedValue(expandedValue === valueKey ? null : valueKey);
  };
    const cardVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="bg-gray-50 min-h-screen font-sans"
      aria-label="Tech Inclusion Deaf Initiative Homepage"
    >
      <main>
        {/* Hero Section */}
        <HeroCarousel />


        {/* About Us Section */}
        <section className="py-16 bg-white rounded-lg overflow-hidden" aria-labelledby="about-us-title">
          <div className="container mx-auto px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full text-center md:text-left"> {/* Text Content */}
                <h2 id="about-us-title" className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
                  Empowering Deaf Individuals Through Tech
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-6">
                  At TIDI, we are passionate about fostering inclusivity and opportunity within the deaf community. We believe technology can be a powerful tool for empowerment, and we are dedicated to equipping deaf individuals with the skills they need to thrive in the digital world.
                </p>
                <Link href="/about">
                  <Button className="mt-4 bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {valuesData.map((value) => (
                    <motion.div
                    key={value.key}
                    variants={cardVariants}
                    whileHover="visible"
                    className="transform transition duration-300 ease-in-out hover:scale-105"
                  >
                    <Card className="overflow-hidden">
                      <CardHeader className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick(value.key)}>
                      <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
                        {value.icon}
                         </motion.div>
                      </CardHeader>
                      <CardTitle className="text-xl mb-4 font-bold text-gray-800">
                            {value.title}
                            </CardTitle>
                      <AnimatePresence initial={false} mode="wait">
                       {expandedValue === value.key && (
                        <motion.div
                        key={value.key}
                        variants={cardVariants2}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        >
                        <CardContent className="p-4">
                            <CardDescription className="text-gray-600 text-left whitespace-pre-line">
                            {value.description}
                            </CardDescription>
                        </CardContent>
                        </motion.div>
                        )}
                     </AnimatePresence>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Thematic Areas Section */}
        <section className="py-16 bg-white" aria-labelledby="thematic-areas-title">
          <div className="container mx-auto px-4 md:px-0">
            <h2 id="thematic-areas-title" className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">Our Thematic Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {thematicAreas.map(area => (
                <ThematicAreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16 bg-gray-100" aria-labelledby="impact-title">
          <div className="container mx-auto px-4 md:px-0">
            <h2 id="impact-title" className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactData.map((item, index) => (
                <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible">
                  <ImpactCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GalleryPreview
          images={galleryImages}
          galleryLink="/gallery"
        />

        {/* Partners Section */}
        <DonorPartnerSection partners={partners} />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default HomePage;

