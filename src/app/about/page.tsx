'use client';
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import TeamMemberCard from '@/components/TeamCard';
import ThematicAreaCard from '@/components/ThematicAreaCard';
import thematicAreas from '@/lib/data';
// Image imports (replace with your actual image paths)
import Image from 'next/image';

// Data for team members (replace with your team's information)
const teamMembers = [
  {
    name: 'Abubakar El-mumbu Idris',
    role: 'Founder & CEO',
    bio: `Founder and CEO, Tech Inclusion for the Deaf Initiative (TIDI)
Abubakar Mumbu Idris is a dedicated advocate for disability inclusion and a pioneering leader in the field of accessible technology education. As the founder and CEO of Tech Inclusion for the Deaf Initiative (TIDI), Abubakar has committed his career to bridging the digital divide for Deaf individuals across Nigeria and beyond. His work focuses on providing Deaf learners with the tools, skills, and resources needed to thrive in today’s technology-driven world.
\n
Born and raised in Nigeria, Abubakar faced significant challenges as a Deaf individual navigating the educational system. During his time as an undergraduate student, he and a fellow student struggled to find accessible tech classes or mentors who could support their learning needs. Undeterred, they taught themselves the necessary tech skills, an experience that would later inspire the creation of TIDI. This personal journey fueled his passion for ensuring that other Deaf individuals would not have to face the same barriers.\n\n\n
Although TIDI is in its early stages, Abubakar’s vision is clear: to create an inclusive educational platform that empowers Deaf learners with essential tech skills such as coding, data analysis, and digital literacy. TIDI’s innovative approach, combining both online and in-person training, is designed to address the unique challenges faced by the Deaf community in accessing quality tech education. While the impact of TIDI is still growing, Abubakar is committed to expanding its reach and effectiveness, with the goal of making a lasting difference in the lives of Deaf individuals.\n
In addition to his work with TIDI, Abubakar is a seasoned data analyst with over 4 years of experience. He is passionate about training and empowering Deaf individuals, particularly women and youth, to secure meaningful employment and become leaders in their communities. While TIDI’s journey has just begun, Abubakar’s dedication to advocacy, education, and empowerment positions him as a key figure in the movement for disability inclusion in Nigeria.\n
Abubakar’s work is driven by a simple yet powerful belief: that with the right support, Deaf individuals can achieve anything. Through TIDI, he aims to break down barriers and create opportunities for Deaf learners, ensuring they are not only included in the digital revolution but are also poised to lead it.
`,
    imageUrl: '/assets/images/Abubakar.jpg', // Replace with actual image path
  },
  {
    name: 'Victor Oricha',
    role: 'Co-Founder & COO',
    bio: 'Co-Founder and COO,Tech Inclusion for the Deaf Initiative (TIDI). Victor Oricha is a passionate advocate for inclusive tech education and work as a data science and web developer. I graduated from University of Ilorin with a bachelor degree in Computer Science Education. I equip Deaf youth with tech skill through innovative solution',
    imageUrl: '/assets/images/victor.jpg', // Replace with actual image path
  },
  // Add more team members here
];

const metadata: Metadata = {
  title: 'About Us - Tech Inclusion Deaf Initiative',
  description:
    'Learn more about our mission, team, and impact in empowering the Deaf community through STEM education.',
};

export default function AboutPage() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(
    teamMembers[0]
  );

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
              Learn more about our journey and commitment to empowering the
              Deaf community.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <Image
                  src="/assets/images/team.jpg"
                  alt="Students learning in the TIDI tech school"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 text-lg md:text-xl">
                  Our journey began with a simple but powerful belief:
                  everyone, regardless of hearing ability, deserves equal
                  opportunities in STEM. We are a passionate team of
                  educators, advocates, and technology professionals driven by
                  the mission to bridge the gap in STEM education for the Deaf
                  community. Our hybrid model of education uniquely combines
                  the flexibility of an online platform with the personalized
                  experience of a physical tech school. The idea for TIDI was
                  born out of a personal journey of overcoming challenges. As
                  university students, we struggled to find accessible tech
                  classes or mentors who understood our unique needs as Deaf
                  individuals. With determination and a passion for
                  technology, we taught ourselves the skills we needed. This
                  experience highlighted the lack of support for Deaf students
                  in tech and inspired us to create a platform where others
                  wouldn’t have to face the same obstacles. TIDI was
                  established to ensure that no Deaf learner is left behind and
                  that they have the opportunity to pursue their dreams in the
                  tech industry and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Inclusion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-500 text-xl font-bold">
                    Inclusion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe that every Deaf individual has the right to
                    access quality education and career opportunities. We work
                    tirelessly to remove barriers and create a space where Deaf
                    individuals can learn, grow, and succeed.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Empowerment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-500 text-xl font-bold">
                    Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    At TIDI, we see education as a tool for empowerment. Our
                    programs are designed to give Deaf learners the skills,
                    knowledge, and confidence they need to pursue careers in
                    the tech industry and advocate for themselves.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Accessibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-500 text-xl font-bold">
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Accessibility is at the core of everything we do. From our
                    online platform to our physical tech school, we prioritize
                    making our programs accessible to all Deaf learners. This
                    includes providing sign language interpretation,
                    captioning, and other accommodations.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-500 text-xl font-bold">
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The tech industry is constantly evolving, and so are we.
                    TIDI is committed to staying at the forefront of
                    technological advancements and continuously improving our
                    programs to meet the changing needs of the Deaf community.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Collaboration */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-500 text-xl font-bold">
                    Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We recognize that creating lasting change requires
                    collaboration. TIDI values partnerships with organizations,
                    educators, employers, and the Deaf community to create
                    programs that are more impactful, sustainable, and
                    beneficial.
                  </CardDescription>
                </CardContent>
              </Card>
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
                <p className="text-gray-600">{selectedTeamMember.bio}</p>
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
              {thematicAreas?.map((area) => (
                <ThematicAreaCard key={area.slug} area={area} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Join Us in Empowering the Deaf Community
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Support our mission by donating, volunteering, or partnering
              with us.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/get-involved">
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
