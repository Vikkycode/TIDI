'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye} from 'lucide-react'; // Added more icons for potential use
// import { ImpactCard } from '@/components/ImpactCard';

import { DonorPartnerSection } from '@/components/DonorParnterSection';

const AboutUs: React.FC = () => {
  const missionStatement = "Our mission is to empower Deaf students across national states in Nigeria by fostering inclusive tech education, STEM education, and career guidance.";
  const visionStatement = "We envision a future where Deaf students are leading innovators and problem-solvers in the tech world.";
  const impactData = [
    { title: "Trained", number: '300+', description: "Deaf students trained in tech skills." },
    // { title: "Partnerships", icon: <Handshake className="w-10 h-10" />, description: "Collaborations to expand our reach." },
    // ... more impact data
  ];
  const donorPartners = [
    { name: "NNAD", logo: "/assets/images/nnad.png", link: "" },
    { name: "NANDS", logo: "/assets/images/nands.png", link: "" },
    { name: "AAD", logo: "/assets/images/AAD.png", link: "" }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
  };

return (
  <div className="bg-slate-50 min-h-screen font-sans antialiased">
    {/* Hero Section */}
    <section
      className="relative py-28 md:py-40 text-white bg-blue-700"
      aria-labelledby="about-us-hero-title"
    >
      <Image
        src="/assets/images/minna.jpg" // Replace with a more relevant, high-quality hero image
        alt="Diverse group of individuals collaborating, representing TIDI's community"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30" // Subtle background image
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 via-blue-700/50 to-transparent z-0"></div> {/* Gradient overlay */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h1
          id="about-us-hero-title"
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >About TIDI</motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Discover our journey, passion, and commitment to empowering the Deaf community through technology.
        </motion.p>
      </div>
    </section>

    {/* Our Story Section */}
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 bg-white"
      aria-labelledby="our-story-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            id="our-story-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-12 md:mb-16"
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          >
            Our Story: From Shared Dreams to Empowering a Community
          </motion.h2>
          <div className="space-y-8 font-normal text-justify text-gray-700 text-lg md:text-xl leading-relaxed prose prose-lg max-w-none">
            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              The journey of the Tech Inclusion for the Deaf Initiative (TIDI) began not in a boardroom, but in the vibrant halls of the University of Ilorin in 2019. We, Victor and Abubakar, were two students united by a burgeoning passion for technology, particularly Python. Eager to dive deeper, we enrolled in a month-long Hack Brain bootcamp.
            </motion.p>
            <p>
              While our enthusiasm was high, the reality of the learning environment quickly set in. We found ourselves struggling to keep pace, to grasp concepts that weren&apos;t delivered in an accessible way. Our learning became a testament to sheer determination – countless hours spent surfing the internet, poring over YouTube tutorials, often huddled together on the cold floor outside the Department of Educational Technology, just to catch the public Wi-Fi signal late into the night.
            </p>
            <p>
              It was through these shared struggles that the seed for TIDI was planted. We experienced firsthand the profound lack of accessibility in tech education for Deaf individuals. We knew there had to be a better way, a path where passion wasn&apos;t stifled by barriers.
            </p>
            <p>
              The dream of establishing an NGO to address these challenges was born during our university days. However, financial constraints and the demands of our studies meant we had to put our plans on hold, though the vision never faded. We kept the dream alive, always on the same page, waiting for the right moment.
            </p>
            <p>
              Upon completing our studies, we immediately set to work. TIDI was founded on a simple yet powerful premise: to empower Deaf individuals through quality tech education, delivered in sign language by experienced Deaf facilitators – facilitators like us, who understood the journey.
            </p>
            <p>
              We&apos;ve seen too many bright minds in the Deaf community lose out on incredible opportunities simply because the path wasn&apos;t made accessible. Our core motivation is to ensure that no Deaf individual has to endure the hardships we faced. We want to help them unlock their full potential, pursue their dreams in tech, and secure meaningful employment through practical skills and internship opportunities.
            </p>
            <p>
              TIDI is more than just an initiative; it&apos;s a commitment. A commitment to breaking down barriers, fostering inclusivity, and building a future where Deaf individuals are not just participants, but leaders and innovators in the tech landscape – across Nigeria, Africa, and the world.
            </p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Image Divider - Optional, but can add visual appeal */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 md:py-16 bg-slate-100" // Changed background for visual break
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-72 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="/assets/images/cofounders.jpg"
            alt="Victor and Abubakar, co-founders of TIDI, working collaboratively."
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {/* You can replace this with an actual image of you and Abubakar or a relevant team photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">The Founders&apos; Journey</h3>
            <p className="text-slate-200 text-sm md:text-base mt-1 drop-shadow-sm">United by a vision for an inclusive tech future.</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Mission & Vision Section */}
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 bg-white"
      aria-labelledby="mission-vision-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 id="mission-vision-title" className="sr-only">Our Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-blue-200/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
              <Target className="w-10 h-10 mr-4 text-blue-600 flex-shrink-0" />
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{missionStatement}</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-purple-200/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <h3 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">
              <Eye className="w-10 h-10 mr-4 text-purple-600 flex-shrink-0" />
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{visionStatement}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>



    <><motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-slate-100"
        aria-labelledby="our-impact-title"
      >
        {/* <div className="container mx-auto px-4 md:px-6">
          <h2 id="our-impact-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-12 md:mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {impactData?.map((item, index: React.Key | null | undefined) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Impact {...item} />
              </motion.div>
            ))}
          </div>
        </div> */}
      </motion.section><DonorPartnerSection partners={donorPartners} /></>
  </div>
)
};

export default AboutUs;
