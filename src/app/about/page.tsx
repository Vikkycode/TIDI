'use client'
import { Metadata } from 'next';
import FeatureSection from '@/components/FeatureSection'; 
import {Button} from '@/components/ui/button'
import { useState } from 'react';
import TeamMemberCard from '@/components/TeamCard';
// Image imports (replace with your actual image paths)
import storyImage from '@/../public/assets/images/lengnen.jpg'; 
import teamImage from '@/../public/assets/images/lengnen.jpg'; 

// Data for team members (replace with your team's information)
const teamMembers = [
  {
    name: 'Abubakar El-mumbu Idris',
    role: 'Founder & CEO',
    bio: 'A passionate advocate for digital inclusion.The idea for TIDI was born out of a personal journey of overcoming challenges. As university students, we struggled to find accessible tech classes or mentors who understood our unique needs as Deaf individuals. With determination and a passion for technology, we taught ourselves the skills we needed. This experience highlighted the lack of support for Deaf students in tech and inspired us to create a platform where others wouldn’t have to face the same obstacles. TIDI was established to ensure that no Deaf learner is left behind and that they have the opportunity to pursue their dreams in the tech industry and beyond.',
    imageUrl: '/assets/images/lengnen.jpg', // Replace with actual image path
  },
  {
    name: 'Victor Oricha',
    role: 'Co-Founder & COO',
    bio: 'A passionate advocate for digital inclusion.The idea for TIDI was born out of a personal journey of overcoming challenges. As university students, we struggled to find accessible tech classes or mentors who understood our unique needs as Deaf individuals. With determination and a passion for technology, we taught ourselves the skills we needed. This experience highlighted the lack of support for Deaf students in tech and inspired us to create a platform where others wouldn’t have to face the same obstacles. TIDI was established to ensure that no Deaf learner is left behind and that they have the opportunity to pursue their dreams in the tech industry and beyond.',
    imageUrl: '/assets/images/lengnen.jpg', // Replace with actual image path
  },
  // Add more team members here
];

const metadata: Metadata = {
  title: 'About Us - Tech Inclusion Deaf Initiative',
  description: 'Learn more about our mission, team, and impact in empowering the Deaf community through STEM education.',
};

export default function AboutPage() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(teamMembers[0]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              Learn more about our journey and commitment to empowering the Deaf community.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <FeatureSection
          title="Our Story"
          description="Our journey began with a simple but powerful belief: everyone, regardless of hearing ability, deserves equal opportunities in STEM. We are a passionate team of educators, advocates, and technology professionals driven by the mission to bridge the gap in STEM education for the Deaf community. Our hybrid model of education uniquely combines the flexibility of an online platform with the personalized experience of a physical tech school.
          The idea for TIDI was born out of a personal journey of overcoming challenges. As university students, we struggled to find accessible tech classes or mentors who understood our unique needs as Deaf individuals. With determination and a passion for technology, we taught ourselves the skills we needed. This experience highlighted the lack of support for Deaf students in tech and inspired us to create a platform where others wouldn’t have to face the same obstacles. TIDI was established to ensure that no Deaf learner is left behind and that they have the opportunity to pursue their dreams in the tech industry and beyond.
"
          imageUrl='/assets/images/lengnen.jpg' 
          imageAlt="Students learning in the TIDI tech school"
          bgColor="bg-white"
        />

        {/* Our Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Inclusion */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Inclusion</h3>
                <p className="text-gray-600">
                  We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed.
                </p>
              </div>

              {/* Empowerment */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Empowerment</h3>
                <p className="text-gray-600">
                  At TIDI, we see education as a tool for empowerment. Our programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.
                </p>
              </div>

              {/* Accessibility */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation, captioning, and other accommodations.
                </p>
              </div>

              {/* Innovation */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  The tech industry is constantly evolving, and so are we. TIDI is committed to staying at the forefront of technological advancements and continuously improving our programs to meet the changing needs of the Deaf community.
                </p>
              </div>

              {/* Collaboration */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations, educators, employers, and the Deaf community to create programs that are more impactful, sustainable, and beneficial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Meet Our Team
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Team Member Images (Carousel or List) */}
              <div className="w-full md:w-1/2">
              <ul className="flex flex-wrap justify-center gap-8"> 
                {teamMembers.map((member) => (
                  <li key={member.name}>
                    <TeamMemberCard 
                      member={member} 
                      isSelected={selectedTeamMember.name === member.name} 
                      onClick={() => setSelectedTeamMember(member)} 
                    />
                  </li>
                ))}
              </ul>
              </div>

              {/* Selected Team Member Bio */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedTeamMember.name}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {selectedTeamMember.role}
                </p>
                <p className="text-gray-600">
                  {selectedTeamMember.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Thematic Areas Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Thematic Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Tech Education */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Tech Education</h3>
                <p className="text-gray-600">
                  We provide specialized training in key areas such as coding, data analysis, digital literacy, and other in-demand tech skills, designed with the specific needs of Deaf learners in mind.
                </p>
              </div>

              {/* Career Development */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Career Development</h3>
                <p className="text-gray-600">
                  We offer mentorship, job placement assistance, and career guidance to help Deaf learners navigate the job market and achieve their professional goals.
                </p>
              </div>

              {/* Advocacy and Awareness */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Advocacy & Awareness</h3>
                <p className="text-gray-600">
                  We advocate for the rights of Deaf individuals and work to raise awareness about the importance of accessibility in education and employment.
                </p>
              </div>

              {/* Community Support */}
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-4">Community Support</h3>
                <p className="text-gray-600">
                  We provide a supportive environment where Deaf individuals can connect, learn, and grow together through online forums, in-person events, and our physical tech school.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact and Global Reach Section */}
        {/* <FeatureSection
          title="Impact and Global Reach"
          description="Since its inception, TIDI has empowered hundreds of Deaf learners by providing them with the tools and resources they need to succeed in the tech industry. Our graduates have gone on to secure positions in various tech roles, from data analysts to software developers, demonstrating the value and effectiveness of our programs. By equipping Deaf individuals with in-demand tech skills, we are helping to create a more inclusive workforce and contributing to the broader goal of digital inclusion."
          imageUrl={teamImage} // Replace with an image representing impact
          imageAlt="TIDI graduates celebrating their achievements"
          reverse
        /> */}

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Join Us in Empowering the Deaf Community
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Support our mission by donating, volunteering, or partnering with us.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/donate" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Donate
              </a>
              <a href="/get-involved" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
