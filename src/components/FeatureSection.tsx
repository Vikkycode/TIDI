// src/components/FeatureSection.tsx (Update the existing component)

import Image from 'next/image';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image
  imageAlt?: string; // Alt text for the image
  reverse?: boolean; // Reverse layout (image on right)
  bgColor?: string; // Optional background color class
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt,
  reverse = false,
  bgColor = 'bg-white' // Default background color
}) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-4 md:px-0">
        {/* Image (optional) */}
        {imageUrl && (
          <div className={`w-full md:w-1/2 ${reverse ? 'order-last md:order-first' : ''}`}>
            <Image 
              src={imageUrl} 
              alt={imageAlt || 'Feature Image'} 
              width={500} 
              height={350} 
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl">{description}</p>
          {/* You can add a call to action button here if needed */}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
