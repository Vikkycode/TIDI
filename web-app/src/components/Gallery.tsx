'use client';
import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // shadcn/ui tabs
import { cn } from '@/lib/utils'; // shadcn utility for classnames
import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GalleryData = {
  state: string;
  images: GalleryImage[];
}[];

interface GalleryProps {
  galleryData: GalleryData;
}

const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  const [activeTab, setActiveTab] = React.useState(galleryData[0]?.state || '');

  return (
    <section className="max-w-6xl mx-auto h-screen overflow-hidden bg-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">State Galleries</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
          {galleryData.map(({ state }) => (
            <TabsTrigger
              key={state}
              value={state}
              className={cn(
                'px-4 py-2 rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition',
                activeTab === state
                  ? 'bg-blue-700 text-white shadow'
                  : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-100'
              )}
              aria-label={`Show gallery for ${state}`}
            >
              {state}
            </TabsTrigger>
          ))}
        </TabsList>
        {galleryData.map(({ state, images }) => (
          <TabsContent
            key={state}
            value={state}
            className="animate-fade-in"
            tabIndex={0}
            aria-label={`Gallery for ${state}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <figure
                  key={img.src}
                  className="bg-white rounded-lg shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition group"
                  tabIndex={0}
                  aria-label={`${img.title}: ${img.description}`}
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={idx === 0}
                    />
                  </div>
                  <figcaption className="p-4">
                    <h2 className="text-lg font-semibold text-blue-800 mb-1">{img.title}</h2>
                    <p className="text-gray-600 text-sm">{img.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};

export default Gallery;