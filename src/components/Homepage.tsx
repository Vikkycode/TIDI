import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import { ImpactCard } from '@/components/ImpactCard';
import ThematicAreaCard from '@/components/ThematicAreaCard';
import GalleryPreview from '@/components/GalleryPreview';
import { DonorPartnerSection } from '@/components/DonorParnterSection';
import thematicAreas from '@/lib/data'; // Import your thematic area data (short descriptions)
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
    description: 'We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed.',
    icon: <FaHandshake className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />,
  },
  {
    key: 'Empowerment',
    title: 'Empowerment',
    description: 'At TIDI, we see education as a tool for empowerment. Our programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.',
    icon: <FaHandsHelping className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />,
  },
  {
    key: 'Accessibility',
    title: 'Accessibility',
    description: 'Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation, captioning, and other accommodations.',
    icon: <FaWheelchair className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />,
  },
  {
    key: 'Innovation',
    title: 'Innovation',
    description: 'The tech industry is constantly evolving, and so are we. TIDI is committed to staying at the forefront of technological advancements and continuously improving our programs to meet the changing needs of the Deaf community.',
    icon: <FaLightbulb className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />,
  },
  {
    key: 'Collaboration',
    title: 'Collaboration',
    description: 'We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations, educators, employers, and the Deaf community to create programs that are more impactful, sustainable, and beneficial.',
    icon: <FaUsers className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors" />,
  },
];
// const lazyFeatureSection = React.lazy(()=> import('./FeatureSection'))

const HomePage: React.FC<HomePageProps> = ({ impactData, galleryImages, partners }) => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
  };

  const iconVariants = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.9 }
  };

    const handleIconClick = (valueKey: string) => {
    setExpandedValue(expandedValue === valueKey ? null : valueKey);
  };

  const valueContentVariants = {
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
    collapsed: { height: 0, opacity: 0, marginTop: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    expanded: { height: 'auto', opacity: 1, marginTop: '1rem', transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="bg-slate-50 min-h-screen font-sans antialiased"
      aria-label="Tech Inclusion Deaf Initiative Homepage"
    >
      <main>
        {/* Hero Section */}
        <HeroCarousel />


        {/* About Us Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-white"
          aria-labelledby="about-us-title"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <h2 id="about-us-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-6 md:mb-8">
                  Empowering Deaf Individuals Through Tech
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed prose prose-lg max-w-none">
                  At TIDI, we are passionate about fostering inclusivity and opportunity within the deaf community. We believe technology can be a powerful tool for empowerment, and we are dedicated to equipping deaf individuals with the skills they need to thrive in the digital world.
                </p>
                <Link href="/about">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus-visible:ring-blue-500">
                    Learn Our Story
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/ashiru.jpg" // Replace with a relevant, high-quality image
                  alt="TIDI team members discussing and collaborating"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-slate-100"
          aria-labelledby="our-values-title"
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 id="our-values-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-12 md:mb-16">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {valuesData.map((value) => (
                    <motion.div
                      key={value.key}
                      variants={itemVariants}
                      className="group" // For hover effects on icon
                    >
                    <Card className="h-full flex flex-col text-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
                      <CardHeader
                        className="flex flex-col items-center cursor-pointer mb-4"
                        onClick={() => handleIconClick(value.key)}
                        aria-expanded={expandedValue === value.key}
                        aria-controls={`value-description-${value.key}`}
                      >
                        <motion.div variants={iconVariants} whileHover="hover" whileTap="tap" className="mb-4">
                          {value.icon}
                        </motion.div>
                        <CardTitle className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <AnimatePresence initial={false}>
                       {expandedValue === value.key && (
                        <motion.div
                          id={`value-description-${value.key}`}
                          key={`content-${value.key}`}
                          variants={valueContentVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                        >
                          <CardContent className="pt-0">
                            <CardDescription className="text-gray-600 text-left whitespace-pre-line leading-relaxed">
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
        </motion.section>

        {/* Thematic Areas Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-white"
          aria-labelledby="thematic-areas-title"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 id="thematic-areas-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-12 md:mb-16">Our Thematic Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {thematicAreas.map(area => (
                <ThematicAreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Impact Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-slate-100"
          aria-labelledby="impact-title"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 id="impact-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-12 md:mb-16">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {impactData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <ImpactCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <GalleryPreview
          images={galleryImages}
          galleryLink="/gallery"
        />

        {/* Partners Section */}
        <DonorPartnerSection partners={partners} />
        {/* <Contact /> */}
      </main>
    </motion.div>
  );
}

export default HomePage;