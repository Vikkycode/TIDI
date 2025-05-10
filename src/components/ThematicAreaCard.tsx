// src/components/ThematicAreaCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ThematicAreaCardProps {
  slug: string;
  title: string;
  icon: React.ReactNode; // This will be the Image component
  description: string;
  // link prop is not needed if we always use slug for internal routing
}

const ThematicAreaCard: React.FC<ThematicAreaCardProps> = ({ slug, title, icon, description }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }} // Adjust amount for when animation triggers
      className="h-full" // Ensure cards in a grid take full height for consistent alignment
    >
      <Link href={`/thematic-areas/${slug}`} className="block h-full">
        <Card className="flex flex-col h-full transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <CardHeader className="flex flex-col items-center text-center pt-6">
            {/* The icon is now an Image component, so it has its own sizing.
                You might want to wrap it in a div to control its container size if needed,
                or ensure the Image component itself is styled appropriately for the card. */}
            <div className="mb-4 text-blue-500 flex justify-center items-center h-20 w-20"> 
              {/* Example wrapper for icon, adjust size as needed */}
              {icon}
            </div>
            <CardTitle className="text-xl font-bold text-blue-600">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center pb-6">
            <CardDescription className="text-gray-600 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>

);
};

export default ThematicAreaCard;
