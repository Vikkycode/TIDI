'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'; 
import Link from 'next/link';

import { FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'; // Import icons from react-icons

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    // Add more as needed
  };
}

// interface TeamPageProps {
//   team: TeamMember[];
// }

const teamData: TeamMember[] = [
  {
    name: 'Abubakar Idris El-mumbu',
    role: 'Co-Founder & CEO, Tech Inclusion for the Deaf Initiative',
    bio: `Abubakar Mumbu Idris is a dedicated advocate for disability inclusion and a pioneering leader in accessible technology education. As the co-founder and CEO of Tech Inclusion for the Deaf Initiative (TIDI), he has committed his career to bridging the digital divide for Deaf individuals across Nigeria, providing them with essential tools, skills, and resources to thrive in today’s technology-driven world.
Abubakar's academic background is in History and International Studies, with certifications in digital skills such as Google Data Analytics. His educational journey has been shaped by overcoming the obstacles faced by Deaf individuals in mainstream learning environments. During his undergraduate years, he and a fellow student struggled to find accessible tech classes or mentors, eventually teaching themselves essential tech skills. This experience inspired him to create TIDI, an organization dedicated to ensuring that others in the Deaf community can access quality tech education without facing the same barriers.
In addition to his role with TIDI, Abubakar has over four years of experience as a data analyst, a role that complements his passion for empowering Deaf individuals, particularly women and youth, to secure meaningful employment and become community leaders. Driven by the belief that Deaf individuals can achieve anything with the right support, Abubakar’s mission is to create inclusive pathways for Deaf learners, equipping them with skills such as coding, data analysis, and digital literacy to lead in the digital era.
`,
    imageUrl: '/assets/images/Abubakar.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abubakar-mumbu-idris',
      twitter: 'https://x.com/ELMumbuAbubakar',
      facebook:'https://www.facebook.com/idrees09'
    },
  },
    {
    name: 'Victor Oricha',
    role: 'Co-Founder & CTO, Tech Inclusion for the Deaf Initiative',
    bio: 'Victor is passionate about inclusive edtech program for deaf community',
    imageUrl: '/assets/images/victor.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/victor-oricha/',
      twitter: 'https://x.com/oricha_victor',
      facebook:'https://www.facebook.com/victor.emmanuel982'
    },
  },
  // ... more team members
];


const TeamPage: React.FC = () => {
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
                <div className="overflow-y-auto flex-grow"> {/* Added scrollable container */}
                  <p className="text-gray-600">
                  {selectedMember.bio}
                  </p>
        </div>

                {/* Social Links (Optional) */}
                {selectedMember.socialLinks && (
              <div className="mt-6 flex space-x-4">
                      {selectedMember.socialLinks.linkedin && (
                        <Link href={selectedMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                          <FaLinkedin className="h-6 w-6" /> {/* Use the imported LinkedIn icon */}
                        </Link>
                      )}
                      {selectedMember.socialLinks.twitter && ( 
                        <Link href={selectedMember.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                          <FaTwitter className="h-6 w-6" /> {/* Use the imported Twitter icon */}
                        </Link>
                      )}
                      {selectedMember.socialLinks.facebook && ( 
                        <Link href={selectedMember.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                          <FaFacebook className="h-6 w-6" /> {/* Use the imported Twitter icon */}
                        </Link>
                      )}
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
