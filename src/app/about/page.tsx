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
import Link from 'next/link';
import ThematicAreaCard from '@/components/ThematicAreaCard';
import thematicAreas from '@/lib/data';
// Image imports (replace with your actual image paths)
import Image from 'next/image';

const metadata: Metadata = {
  title: 'About Us - Tech Inclusion Deaf Initiative',
  description:
    'Learn more about our mission, team, and impact in empowering the Deaf community through STEM education.',
};

export default function AboutPage() {
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
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Inclusion"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Inclusion
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We believe that every Deaf individual has the right to
                    access quality education and career opportunities. We work
                    tirelessly to remove barriers and create a space where Deaf
                    individuals can learn, grow, and succeed.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Empowerment */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Empowerment"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Empowerment
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    At TIDI, we see education as a tool for empowerment. Our
                    programs are designed to give Deaf learners the skills,
                    knowledge, and confidence they need to pursue careers in
                    the tech industry and advocate for themselves.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Accessibility */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Accessibility"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Accessibility
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Accessibility is at the core of everything we do. From our
                    online platform to our physical tech school, we prioritize
                    making our programs accessible to all Deaf learners. This
                    includes providing sign language interpretation,
                    captioning, and other accommodations.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Innovation"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Innovation
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    The tech industry is constantly evolving, and so are we.
                    TIDI is committed to staying at the forefront of
                    technological advancements and continuously improving our
                    programs to meet the changing needs of the Deaf community.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Collaboration */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Collaboration"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Collaboration
                  </CardTitle>
                  <CardDescription className="text-gray-600">
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
        
        {/* Our Thematic Areas Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Thematic Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {thematicAreas?.map((area) => (
                <ThematicAreaCard key={area.slug} {...area} /> 
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
