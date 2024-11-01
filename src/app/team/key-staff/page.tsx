'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; 
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    // Add more as needed
  };
}

// interface TeamPageProps {
//   team: TeamMember[];
// }

const teamData: TeamMember[] = [
  {
    name: 'Abubakar Idris El-mumbu',
    role: 'Founder & CEO',
    bio: 'Abubakar is passionate about inclusive edtech program for deaf community',
    imageUrl: '/assets/images/Abubakar.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/victor-oricha/',
      twitter: 'https://x.com/victororicha',
    },
  },
    {
    name: 'Victor Oricha',
    role: 'Co-Founder & CTO',
    bio: 'Victor is passionate about inclusive edtech program for deaf community',
    imageUrl: '/assets/images/victor.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/victor-oricha/',
      twitter: 'https://x.com/victororicha',
    },
  },
  // ... more team members
];


const TeamPage: React.FC<TeamMember[]> = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-white py-16" aria-labelledby="team-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2 id="team-section" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our Amazing Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          {teamData?.map((member) => (
            <button 
              key={member.name} 
              onClick={() => setSelectedMember(member)} 
              className="focus:outline-none" // For better accessibility
              aria-label={`Read more about ${member.name}`}
            >
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {member.role}
                  </CardDescription>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Modal for Selected Member */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedMember(null)} // Close modal on overlay click
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <Card className="bg-white w-full max-w-lg mx-4 md:mx-0 rounded-lg shadow-lg relative">
              <button 
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none" 
                onClick={() => setSelectedMember(null)}
                aria-label="Close Modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                width={400}
                height={300}
                className="object-cover h-[300px] w-full rounded-t-lg"
              />
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedMember.name}
                </CardTitle>
                <CardDescription className="text-gray-700 mb-4">
                  {selectedMember.role}
                </CardDescription>
                <p className="text-gray-600">
                  {selectedMember.bio}
                </p>

                {/* Social Links (Optional) */}
                {selectedMember.socialLinks && (
                  <div className="mt-6 flex space-x-4">
                    {selectedMember.socialLinks.linkedin && (
                      <Link href={selectedMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          {/* LinkedIn icon path */}
                        </svg>
                      </Link>
                    )}
                    {/* Add more social links as needed */}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamPage;
