// src/app/team/key-staff/page.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription as DialogDesc // Alias to avoid conflict
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const teamData: TeamMember[] = [
  {
    name: 'Abubakar Idris El-mumbu',
    role: 'Co-Founder & CEO, Tech Inclusion for the Deaf Initiative',
    bio: `Abubakar Mumbu Idris is an advocate for disability inclusion and a leader in accessible technology education. With a background in History and International Studies and certifications in digital skills, including Google Data Analytics, he focuses on bridging the digital divide for Deaf individuals in Nigeria.

His experiences in overcoming barriers to tech education inspired him to establish TIDI, ensuring that Deaf community members gain access to quality tech training.

With over four years of experience as a data analyst, Abubakar empowers Deaf individuals, particularly women and youth, to achieve meaningful employment and community leadership. His mission is to create inclusive pathways for Deaf learners, equipping them with essential skills for the digital era.`,
    imageUrl: '/assets/images/abu.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abubakar-mumbu-idris',
      twitter: 'https://x.com/ELMumbuAbubakar',
      facebook:'https://www.facebook.com/idrees09'
    },
  },
    {
    name: 'Victor Oricha',
    role: 'Co-Founder & COO, Tech Inclusion for the Deaf Initiative',
    bio: `Victor Oricha is a dedicated accessible and inclusive STEM educator for the Deaf communities across Nigeria.

He understands the communication, technical, and emotional challenges Deaf individuals face due to systemic barriers. Victor is passionate about creating accessible learning spaces within the tech field for the Deaf community, demonstrating that "possible" exists even within "impossible."`,
    imageUrl: '/assets/images/Victor 2.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/victor-oricha/',
      twitter: 'https://x.com/oricha_victor',
      facebook:'https://www.facebook.com/victor.emmanuel982'
    },
  },
  // ... other team members
];

interface TeamSectionProps {
  team: TeamMember[];
  title?:string
}

// This is the card that acts as the trigger
const TeamMemberDisplayCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <Card className="flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] cursor-pointer group">
      <CardHeader className="p-0 relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
          {member.name}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          {member.role}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const TeamSection:React.FC<TeamSectionProps> = ({ team,title="Our Key Staff" }) => {
  return (
    <section className="bg-gray-50 py-16 md:py-20" aria-labelledby="team-section-title"> {/* Reverted background */}
      <div className="container mx-auto">
        <h1 id="team-section-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16"> {/* Reverted text color */}
           {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <div>
                  <TeamMemberDisplayCard member={member} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[45vw] bg-white p-0 rounded-lg flex flex-col max-h-[90vh]"> {/* Reverted styles */}
                <DialogHeader className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10"> {/* Reverted styles */}
                  <DialogTitle className="text-2xl font-semibold text-blue-700"> {/* Reverted styles */}
                    {member.name}
                  </DialogTitle>
                  <DialogDesc className="text-gray-500"> {/* Reverted styles */}
                    {member.role}
                  </DialogDesc>
                </DialogHeader>

                <div className="p-6 flex-grow overflow-y-auto">
                  {/* Bio Text Section - Alignment and prose class remain */}
                  <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed text-left"> {/* Reverted text color */}
                    {member.bio.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? <p key={index} className="mb-3 last:mb-0">{paragraph}</p> : null
                    ))}
                  </div>

                  {/* Social Links Section */}
                  {member.socialLinks && (
                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center space-x-4"> {/* Reverted border color */}
                      <span className="text-sm font-medium text-gray-500">Connect:</span> {/* Reverted text color */}
                      {member.socialLinks.linkedin && (
                        <Link
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors" /* Reverted colors */
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FaLinkedin className="h-6 w-6" />
                        </Link>
                      )}
                      {member.socialLinks.twitter && (
                        <Link
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors" /* Reverted colors */
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <FaTwitter className="h-6 w-6" />
                        </Link>
                      )}
                      {member.socialLinks.facebook && (
                        <Link
                          href={member.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors" /* Reverted colors */
                          aria-label={`${member.name}'s Facebook`}
                        >
                          <FaFacebook className="h-6 w-6" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                <DialogClose asChild>
                  <div className="p-4 border-t border-gray-200 text-right sticky right-0 bg-white z-10"> {/* Reverted styles */}
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50"> {/* Reverted styles */}
                      Close
                    </Button>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default  function KeyStaffPage() {
  return <TeamSection team={teamData} />;
}
