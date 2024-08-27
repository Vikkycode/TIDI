// app/page.tsx (Homepage)
import { Metadata } from 'next';
import Image from 'next/image';
import FeatureSection from '@/components/FeatureSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech Inclusion Deaf Initiative',
  description: 'Empowering the Deaf community through STEM education.',
};

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans" aria-label="Tech Inclusion Deaf Initiative Homepage"> 
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white" aria-labelledby="hero-title">
          <div className="container mx-auto text-center">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-4">
              Tech Inclusion Deaf Initiative
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering the Deaf community to thrive in the world of STEM.
            </p>
            <Link href="#learn-more" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300" aria-label="Learn more about our impact">
              Learn More
            </Link>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16" id="learn-more" aria-labelledby="impact-title">
          <div className="container mx-auto">
            {/* <h2 id="impact-title" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Our Impact
            </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="A grid showcasing our impact in three areas">
              {/* Impact Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out" aria-label="Impact area 1: Title of Impact 1">
                {/* <Image 
                  src="/assets/images/lengnen.jpg" 
                  alt="Impactful Image 1 Description" 
                  width={400} 
                  height={300} 
                  className="object-cover w-full h-64"
                /> */}
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Title of Impact 1
                  </h3>
                  <p className="text-gray-600">
                    Short description of the impact or achievement. Make it engaging and concise.
                  </p>
                </div> */}
              </div>              
              {/* Repeat for Impact Card 2 and 3, ensuring each card has a unique aria-label and descriptive alt text for images */}
            </div>
            <FeatureSection
            title="Our Mission"
            description="To empower deaf children and adults to reach their full potential in STEM fields by providing accessible, high-quality education and resources."
            imageUrl="/assets/images/lengnen.jpg" // Replace with actual image
            imageAlt="Description of mission image"
            bgColor="bg-gray-100" // Optional background color
            />
            <FeatureSection
            title="About Us"
            description="We are a passionate team of educators, advocates, and technology professionals dedicated to bridging the gap in STEM education for the deaf community. Learn more about our story and the impact we're making."
            imageUrl="/assets/images/lengnen.jpg" // Replace with actual image
            imageAlt="Description of about us image"
            reverse // Image on the right
          />

              <FeatureSection 
                title="About the STEM School"
                description="Learn about our innovative STEM curriculum designed for deaf children and adults."
                imageUrl="/assets/images/lengnen.jpg"
                imageAlt="Students working on a STEM project"
                />
                <FeatureSection 
                title="Get Involved"
                description="Make a difference in the lives of deaf individuals. Volunteer or donate today!"
                imageUrl="/assets/images/lengnen.jpg"
                imageAlt="Volunteers helping at an event"
                reverse // Reverse the layout for this section
                />
          </div>
        </section>
        {/* Add more feature sections, ensuring each section has appropriate ARIA attributes */}
      </main>
    </div>
  );
}
