// src/components/DonorParnterSection.tsx
import React from 'react';
// import { motion } from 'framer-motion'; // motion can still be used for the parent container if desired
import DonorPartnerLogo from './DonorPartnerLogo';

export interface DonorPartner {
  name: string;
  logo: string;
  link?: string;
}

interface DonorPartnerSectionProps {
  partners?: DonorPartner[];
}

export const DonorPartnerSection: React.FC<DonorPartnerSectionProps> = ({ partners = [] }) => {
  if (!partners || partners.length === 0) {
    return null; // Don't render the section if there are no partners
  }

  // Duplicate the partners array to create the seamless scrolling effect.
  // The CSS animation will scroll through the first set, and the second set will follow,
  // creating an infinite loop.
  const duplicatedPartners = [...partners];

  // Adjust animation duration for "slow" movement.
  // Example: 25 seconds base duration + 5 seconds per original partner.
  // You can tweak these values to get the exact speed you want.
  const animationDuration = `${10 + partners.length * 1}s`;

  return (
    <section className="py-16 bg-white" aria-labelledby="donor-partner-section-title">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-0 text-center">
        <h2 id="donor-partner-section-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Partners
        </h2>

        {/* 
          The outer div handles the 'masking' of the overflowing content.
          The inner div is what actually scrolls.
        */}
        <div className="w-full overflow-hidden">
          <div
            className="flex animate-scroll-horizontal" // This class will apply our CSS animation
            style={{ animationDuration: animationDuration }}
          >
            {duplicatedPartners.map((partner, index) => (
              // Each partner logo container. flex-shrink-0 prevents logos from shrinking.
              // Added margin for spacing between logos.
              <div
                key={`${partner.name}-${index}`} // Unique key for duplicated items
                className=" flex-shrink-0 justify-center flex items-center mx-6 md:mx-10"
              >
                <DonorPartnerLogo {...partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
