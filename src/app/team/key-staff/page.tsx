'use client'
import React, { useState,useRef } from 'react';
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
    bio: `Abubakar Mumbu Idris is an advocate for disability inclusion and a leader in accessible technology education. With a background in History and International Studies and certifications in digital skills, including Google Data Analytics, he focuses on bridging the digital divide for Deaf individuals in Nigeria.
His experiences in overcoming barriers to tech education inspired him to establish TIDI, ensuring that Deaf community members gain access to quality tech training. With over four years of experience as a data analyst, Abubakar empowers Deaf individuals, particularly women and youth, to achieve meaningful employment and community leadership. His mission is to create inclusive pathways for Deaf learners, equipping them with essential skills for the digital era.
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
    bio: 'Victor Oricha is a dedicated advocate for disability inclusion especially deaf community and a frontend software engineer with accessible te',
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
  const [showFullBio, setShowFullBio] = useState(false);
  const modalButtonRef = useRef<HTMLButtonElement>(null); // Ref for the button that opened the modal
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
            onClick={(event) => 
            {if (event.target === event.currentTarget) {
              setSelectedMember(null);
            }}
          }
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
                height={200}
                className="object-covers h-[300px] w-full rounded-t-lg"
              />
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMember.name}
                </CardTitle>
                <CardDescription className="text-gray-700 mb-2">
                  {selectedMember.role}
                </CardDescription>
                <div className="mb-2"> {/* Added margin-bottom for spacing */}
                <p className="text-gray-600 w-full">
                  {showFullBio ? selectedMember.bio : `${selectedMember.bio.substring(0, 150)}...`}
                </p>
                <button 
                  className="text-blue-500 font-medium hover:underline"
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent event bubbling
                    setShowFullBio(!showFullBio);
                  }}
                >
                  {showFullBio ? 'Read Less' : 'Read More'}
                </button>
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
