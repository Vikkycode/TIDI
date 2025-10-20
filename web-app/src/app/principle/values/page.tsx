'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaHandsHelping, FaWheelchair, FaLightbulb, FaUsers }  from 'react-icons/fa';
// import { cn } from '@/lib/utils';

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  key:string
}

const valuesData: ValueItem[] = [
  {
    key: 'Inclusion',
    title: 'Inclusion',
    description: 'We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed.',
    icon: <FaHandshake className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Empowerment',
    title: 'Empowerment',
    description: 'At TIDI, we see education as a tool for empowerment. Our programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.',
    icon: <FaHandsHelping className="text-5xl text-blue-500 mb-2" />,
  },
  {
    key: 'Accessibility',
    title: 'Accessibility',
    description: 'Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation, captioning, and other accommodations.',
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
    description: 'We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations, educators, employers, and the Deaf community to create programs that are more impactful, sustainable, and beneficial.',
    icon: <FaUsers className="text-5xl text-blue-500 mb-2" />,
  },
];

const CoreValuesPage: React.FC = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const cardVariants = {
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

  const handleIconClick = (valueKey: string) => {
    setExpandedValue(expandedValue === valueKey ? null : valueKey);
  };

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
              {valuesData.map((value) => (
                <motion.div
                    key={value.key}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="transform transition duration-300 ease-in-out hover:scale-105"
                  >
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick(value.key)}>
                         {value.icon}
                    </CardHeader>
                    <CardTitle className="text-xl mb-4 text-center font-bold text-gray-800">
                            {value.title}
                            </CardTitle>
                     <AnimatePresence initial={false} mode="wait">
                     {expandedValue === value.key && (
                        <motion.div
                        key={value.key}
                        variants={cardVariants}
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
      </main>
    </div>
  );
};

export default CoreValuesPage;
