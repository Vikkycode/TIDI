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
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader,DialogTitle,DialogDescription } from '@/components/ui/dialog'

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
    bio: `Abubakar Mumbu Idris is an advocate for disability inclusion 
    and a leader in accessible technology education. With a background 
    in History and International Studies and certifications in digital 
    skills, including Google Data Analytics, he focuses on bridging the 
    digital divide for Deaf individuals in Nigeria.His experiences in 
    overcoming barriers to tech education inspired him to establish TIDI,
    ensuring that Deaf community members gain access to quality tech training.
    With over four years of experience as a data analyst, Abubakar empowers
    Deaf individuals, particularly women and youth, to achieve meaningful
    employment and community leadership. His mission is to create inclusive
    pathways for Deaf learners, equipping them with essential skills for the
    digital era.`,
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
    bio: 'Victor Oricha is a dedicated accessible and inclusive STEM educator for the Deaf communities across Nigeria. He understands the communication,technical and emotional challenges Deaf individuals face through barriers, he is passionate about creating accessible learning spaces for the Deaf communities in tech and show them that there is possible in impossbility.   ',
    imageUrl: '/assets/images/Victor 2.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/victor-oricha/',
      twitter: 'https://x.com/oricha_victor',
      facebook:'https://www.facebook.com/victor.emmanuel982'
    },
  },
  // {
  //   name: 'Kabiru Mohammed',
  //   role: 'Assistant Social Media Manager, TIDI',
  //   bio: '',
  //   imageUrl: '/assets/images/kabiru.jpg',
  //   socialLinks: {
  //     linkedin: 'https://www.linkedin.com/in/victor-oricha/',
  //     facebook:'https://www.facebook.com/victor.emmanuel982'
  //   },
  // },

];


interface TeamSectionProps {
  team: TeamMember[];
  title?:string
}



const TeamSection:React.FC<TeamSectionProps> = ({ team,title="Our Amazing Team" }) => {


  return (
    <section className="bg-white py-16" aria-labelledby="team-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2 id="team-section" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
           {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};




const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Card className="transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <CardHeader className="relative">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={300}
          className="object-cover h-[300px] w-full rounded-t-lg"
        />
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <CardTitle className="text-xl font-bold text-gray-800 text-center">
            {member.name}
          </CardTitle>
          <CardDescription className="text-gray-600 text-justify">
            {member.role}
          </CardDescription>
        {member.socialLinks && (
          <div className="flex space-x-4 mt-2">
            {member.socialLinks.linkedin && (
              <Link
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </Link>
            )}
            {member.socialLinks.twitter && (
              <Link
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaTwitter size={20} />
              </Link>
            )}
            {member.socialLinks.facebook && (
              <Link
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaFacebook size={20} />
              </Link>
            )}
          </div>
        )}
        </CardContent>
      </Card>

    </DialogTrigger>
    <DialogContent className="sm:max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw]">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
        {member.name}
      </DialogTitle>
      <DialogDescription className="text-gray-700 mb-2">
        {member.role}
      </DialogDescription>
    </DialogHeader>
          <p className="text-gray-600 whitespace-pre-line"> {/* Preserve formatting */}
            {member.bio}
          </p>
          {member.socialLinks && (
            <div className="mt-6 flex space-x-4">
              {member.socialLinks.linkedin && (
                <Link
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              )}
              {member.socialLinks.twitter && (
                <Link
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter className="h-6 w-6" />
                </Link>
              )}
              {member.socialLinks.facebook && (
                <Link
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaFacebook className="h-6 w-6" />
                </Link>
              )}
            </div>
          )}
          <DialogClose  className='text-blue-600 mt-4' >
            Close
          </DialogClose>
        </DialogContent>

  </Dialog>
  );
};




export default  function KeyStaffPage() {

  return <TeamSection team={teamData} />;
}
