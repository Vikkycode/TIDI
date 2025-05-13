'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImpactCard } from '@/components/ImpactCard';
import { DonorPartnerSection } from '@/components/DonorParnterSection';

const AboutUs: React.FC = () => {
  const missionStatement = "Our mission is to empower Deaf individuals in Nigeria by fostering inclusive tech education and employment opportunities.";
  const visionStatement = "We envision a future where Deaf individuals are leading innovators and problem-solvers in the tech world.";
  const impactData = [
    { title: "Trained", number: '300+', description: "Deaf individuals trained in tech skills." },
    // { title: "Employed", number: 3560, description: "Deaf professionals employed in the tech industry." },
    // ... more impact data
  ];
  const donorPartners = [
    { name: "NNAD", logo: "/assets/images/nnad.png", link: "" },
    { name: "NANDS", logo: "/assets/images/nands.png", link: "" },
    { name: "AAD", logo: "/assets/images/AAD.png", link: "" }
    // ... more donor partners
  ];

return (
  <div className="bg-gray-50 min-h-screen font-sans">
    <section className="relative bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-white">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">About Us</h1>
        <p className="text-lg md:text-xl drop-shadow-md">Learn about our mission, vision, and impact.</p>
      </div>
      <div className="absolute inset-0 opacity-50">
        <Image src="/images/about-us-overlay.jpg" alt="About Us Background" layout="fill" objectFit="cover" />
      </div>
    </section>


    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold  text-blue-500 hover:text-blue-600 transition-colors duration-300 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">{missionStatement}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">{visionStatement}</p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Our Impact Section */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {impactData?.map((item, index) => (
            <ImpactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>


 <DonorPartnerSection partners={donorPartners} />

{/* <PartnerCarousel partners={partners || []} /> */}
  </div>
)
};

export default AboutUs;
