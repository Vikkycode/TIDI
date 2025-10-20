// Example usage in your Impact section (e.g., in Homepage.tsx)
import { ImpactCard } from '@/components/ImpactCard';
import React from 'react';

interface ImpactData {
  title: string;
  number: number;
  description: string;
  link?: string;
}

interface ImpactSectionProps {
  impactData: ImpactData[];
}

export default function ImpactSection({ impactData }: ImpactSectionProps) {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/wallpaper.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby="impact-title"
    >
      <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" aria-hidden="true"></div>
      <div className="relative container mx-auto px-4 md:px-6">
        <h2 id="impact-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16 drop-shadow">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {impactData.map((item, index) => (
            <ImpactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}