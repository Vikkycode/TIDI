import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import { ImpactCard } from '@/components/ImpactCard';
import ThematicAreaCard from '@/components/ThematicAreaCard';
import GalleryPreview from '@/components/GalleryPreview';
import { DonorPartnerSection } from '@/components/DonorParnterSection';
import thematicAreas from '@/lib/data'; // Import your thematic area data
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FaHandshake, FaHandsHelping, FaWheelchair, FaLightbulb, FaUsers }  from 'react-icons/fa';

interface HomePageProps {
    impactData: { title: string; number: string | number; description: string; link?: string }[];
    galleryImages: { src: string; alt: string; caption?: string; category: string }[];
    partners: { name: string; logo: string; link?: string }[];
  }
  
  
  const HomePage: React.FC<HomePageProps> = ({ impactData, galleryImages, partners }) => {
    const cardVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
    };
    
      const iconVariants = {
        hover: { rotate: 360 },
        tap: { scale: 0.95 }
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
          
              <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center px-4 md:px-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
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
                            <CardDescription className="text-gray-600 text-left">
                              {description}
                            </CardDescription>
                          </CardContent>
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
            categories={[...new Set(galleryImages.map(image => image.category))]} // Calculate categories dynamically
            galleryLink="/gallery"
          />
  
          {/* Partners Section */}
          <DonorPartnerSection partners={partners} />
              {/* <Contact /> */}
        </main>
        </div>
    );
  }

  export default HomePage
  