'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';
// Optional: Import icons if you want to add them
import { Code, BarChart3,Video, Handshake, Target } from 'lucide-react';

// Define the structure for a service
interface Service {
  title: string;
  description: string;
  imageUrl: string; // Placeholder image path
  imageAlt: string;
  linkUrl: string; // Link to a potential detail page
  icon?: React.ElementType; // Optional icon component
}

// Array of TIDI's services
const tidiServices: Service[] = [
  {
    title: 'Sign Language Services',
    description:
      'Providing professional sign language interpretation and translation services to bridge communication gaps.',
    imageUrl: '/assets/images/accessible Edu.png', // Replace with actual image path
    imageAlt: 'Hands signing, representing sign language services.',
    linkUrl: '/services/sign-language',
    icon: Handshake, // Example icon
  },
  {
    title: 'Web Development',
    description:
      'Creating accessible, responsive, and modern websites tailored to your needs, ensuring inclusivity for all users.',
    imageUrl: '/images/services/web-development.jpg', // Replace with actual image path
    imageAlt: 'Laptop displaying code, representing web development.',
    linkUrl: '/services/web-development',
    icon: Code, // Example icon
  },
  {
    title: 'Data Analytics',
    description:
      'Transforming raw data into actionable insights through comprehensive analysis and clear visualizations.',
    imageUrl: '/images/services/data-analytics.jpg', // Replace with actual image path
    imageAlt: 'Abstract charts and graphs, representing data analytics.',
    linkUrl: '/services/data-analytics',
    icon: BarChart3, // Example icon
  },
  {
    title: 'Video Editing',
    description:
      'Producing professional and engaging video content with options for captions and sign language integration.',
    imageUrl: '/images/services/video-editing.jpg', // Replace with actual image path
    imageAlt: 'Film reel and editing timeline, representing video editing.',
    linkUrl: '/services/video-editing',
    icon: Video, // Example icon
  },
  {
    title: 'Monitoring & Evaluation',
    description:
      'Implementing robust M&E frameworks to track progress, measure impact, and ensure project effectiveness.',
    imageUrl: '/images/services/monitoring-evaluation.jpg', // Replace with actual image path
    imageAlt: 'Magnifying glass over a checklist, representing monitoring and evaluation.',
    linkUrl: '/services/monitoring-evaluation',
    icon: Target, // Example icon
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white shadow-lg">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold p text-white mb-4 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
              Empowering organizations and individuals with accessible,
              inclusive, and high-quality professional services.
            </p>
          </div>
          {/* Optional: Subtle background pattern or image */}
          <div
            className="absolute inset-0 bg-black opacity-20"
            aria-hidden="true"
          >
            {/* Example using an overlay image - replace if you have one */}
            <Image
              src="/images/services-hero-background.jpg" // Replace with your image
              alt="" // Decorative image, alt text is empty
              layout="fill"
              objectFit="cover"
              priority // Load hero image faster
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {tidiServices.map((service) => (
                <Card
                  key={service.linkUrl} // Use a unique key for mapping
                  className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200"
                >
                  {/* <div className="relative h-56 w-full"> */}
                    {/* Use Next.js Image for optimization */}
                    {/* <Image
                      src={service.imageUrl}
                      alt={service.imageAlt} // Use descriptive alt text
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105" // Optional subtle zoom on hover
                    />
                  </div> */}
                  <CardHeader className="pb-2">
                    {/* Optional: Add Icon here */}
                    {service.icon && <service.icon className="h-8 w-8 text-indigo-600 mb-2" />}
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    {/* <Link href={service.linkUrl} passHref legacyBehavior>
                      <Button
                        variant="outline"
                        className="mt-auto w-full sm:w-auto self-start border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                        aria-label={`Learn more about ${service.title}`} // More descriptive aria-label
                      >
                        Learn More
                      </Button>
                    </Link> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Let TIDI help you achieve your goals with our expert services.
              Contact us today to discuss your project or requirements.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
