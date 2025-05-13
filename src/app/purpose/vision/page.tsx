'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-green-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              A future where Deaf individuals are leading innovators and
              problem-solvers in the tech world.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/assets/images/banner.jpg" // Replace with your image
              alt="Vision Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Vision Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-800 text-lg md:text-xl mb-8 text-left">
              TIDI envisions a world where Deaf individuals are not only
              participants but leaders in the technology revolution. We see a
              future where Deaf children have equal access to STEM education,
              where Deaf professionals are highly sought after in the tech
              industry, and where Deaf communities are empowered to leverage
              technology for social and economic advancement.
            </p>
          </div>
        </section>

        {/* What Our Vision Looks Like Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              What Our Vision Looks Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/E-WEB-Goal-04.png" // Replace with relevant image
                  alt="Equal Access to Education"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Equal Access to Education
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Every Deaf child has the opportunity to pursue STEM education
                    from an early age, equipped with the resources and support
                    they need to excel.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/image4.jpg" // Replace with relevant image
                  alt="Deaf Leaders in Tech"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Deaf Leaders in Tech
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Deaf professionals are leading innovation in tech companies,
                    startups, and research institutions, breaking down barriers
                    and inspiring future generations.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/images/image5.jpg" // Replace with relevant image
                  alt="Empowered Deaf Communities"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Empowered Deaf Communities
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Deaf communities have the tools and knowledge to leverage
                    technology for economic growth, social change, and improved
                    quality of life.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Help Us Build This Future
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Partner with TIDI to create a more inclusive and accessible tech
              world for all.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Donate
                </Button>
              </Link>
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
};

export default VisionPage;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// interface NGOPageProps {
//   pageTitle: string; // Overall page title (e.g., "Our Vision, Mission & Values")
//   heroImage?: string; // Optional hero image for the top section
//   sections: {
//     title: string;
//     imageOverlay?: string; // Section title (e.g., "Our Vision", "Our Mission", "Core Values")
//     content: string;  // Main content for the section (can be rich text/HTML)
//     image?: string; // Optional image for the section (displayed above content)
//     points?: { // For Vision, Mission, or Values points (if needed)
//       title: string;
//       description: string;
//       icon?: React.ReactNode; // Allow icons for points
//     }[];
//     callToAction?: { link: string; text: string }[]; // Optional call to action
//   }[];
// }

// const pageData: NGOPageProps = { // Replace with your actual page data
//   pageTitle: "Our Vision, Mission & Values",

//   sections: [
//     {
//       title: "Our Vision",
//       content: "A future where Deaf individuals thrive in the tech world.",
//       imageOverlay: '/assets/images/banner.jpg',
//       points: [
//         {
//           title: "Equal Access to Education",
//           description:"Every Deaf child has the opportunity to pursue STEM education from an early age, equipped with the resources and support they need to excel.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: "Deaf Leaders in Tech",
//           description:"Deaf professionals are leading innovation in tech companies, startups, and research institutions, breaking down barriers and inspiring future generations",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: " Empowered Deaf Communities",
//           description:"Deaf communities have the tools and knowledge to leverage technology for economic growth, social change, and improved quality of life.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//       ],
//       callToAction: [
//         // ...call to action for vision
//       ],
//     },
//     {
//       title: "Our Mission",
//       content: "To empower Deaf individuals through inclusive tech education.",
//       points: [
//         {
//           title: " Accessible Education",
//           description:" We provide high-quality, accessible STEM education programs tailored to the unique learning needs of Deaf individuals.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: "Building Community",
//           description:" We foster a supportive and inclusive community where Deaf individuals can connect, collaborate, and learn from one another.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: "Advocating for Change",
//           description:"We advocate for policies and practices that promote digital inclusion and equity for the Deaf community.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//       ],

//       callToAction: [
//         // ...call to action for mission (optional - can be different or omitted)
//       ],
//     },

//     {
//       title: "Core Values",
//       content: "The principles that guide our work.",
//       points: [
//         {
//           title: " Inclusion",
//           description:"We believe that every Deaf individual has the right to access quality education and career opportunities. We work tirelessly to remove barriers and create a space where Deaf individuals can learn, grow, and succeed.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: " Empowerment",
//           description:"At TIDI, we see education as a tool for empowerment. Our programs are designed to give Deaf learners the skills, knowledge, and confidence they need to pursue careers in the tech industry and advocate for themselves.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: " Accessibility",
//           description:"Accessibility is at the core of everything we do. From our online platform to our physical tech school, we prioritize making our programs accessible to all Deaf learners. This includes providing sign language interpretation,captioning, and other accommodations.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: "  Innovation",
//           description:"The tech industry is constantly evolving, and so are we. TIDI is committed to staying at the forefront of technological advancements and continuously improving our programs to meet the changing needs of the Deaf community.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//         {
//           title: "Collaboration",
//           description:"We recognize that creating lasting change requires collaboration. TIDI values partnerships with organizations,educators, employers, and the Deaf community to create impactfulprograms that are more impactful, sustainable, and beneficial.",
//           icon: '/assets/icons/E-WEB-Goal-04.png',
//         },
//       ],
//     }
//   ]
// }

// const NGOPage: React.FC<NGOPageProps> = ({ pageTitle, heroImage, sections }) => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
//   };

//   const cardVariants = {
//     offscreen: { y: 100, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", bounce: 0.4, duration: 0.8 },
//     },
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       {/* Hero Section (Optional) */}
//       {heroImage && (
//         <section className="relative">
//           <Image
//             src={heroImage}
//             alt={`${pageTitle} Hero`}
//             fill
//             objectFit="cover"
//             priority
//             className='absolute inset-0' // Ensures image covers section
//           />
//           <div className="relative z-10 bg-black bg-opacity-50 py-20 text-white text-center"> {/* Added overlay */}
//             <div className="container mx-auto px-4 md:px-0">
//               <motion.h1
//                 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
//                 variants={sectionVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {pageTitle}
//               </motion.h1>
//             </div>
//           </div>
//         </section>
//       )}


//       {sections.map((section, index) => (
//         <section
//           key={index}
//           className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
//         >
//           <motion.div
//             className="container mx-auto px-4 md:px-0"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//           >
//              {section.image && ( // Optional image for the section
//               <div className="mb-8">  {/* Add margin below image */}
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   width={800}
//                   height={400} // Adjust as needed
//                   className="w-full h-auto rounded-lg shadow-md"
//                 />
//               </div>
//             )}
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
//               {section.title}
//             </h2>
//             {/* Render content, allowing HTML */}
//             <div className="text-gray-700 text-lg md:text-xl text-center mb-8" dangerouslySetInnerHTML={{ __html: section.content }} />


//             {section.points && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {section.points.map((point, pointIndex) => (
//                   <motion.div
//                     key={pointIndex}
//                     variants={cardVariants}
//                     initial="offscreen"
//                     whileInView="onscreen"
//                     viewport={{ once: true, amount: 0.8 }}
//                     className="transform transition duration-300 ease-in-out hover:scale-105"
//                   >
//                     <Card>
//                       {point.icon && <div className="text-blue-500 text-4xl mb-4 text-center">{point.icon}</div>} {/* Icon in Card */}
//                       <CardContent>
//                         <CardTitle className="text-xl font-bold text-gray-800 text-center">
//                           {point.title}
//                         </CardTitle>
//                         <CardDescription className="text-gray-600 text-center">
//                           {point.description}
//                         </CardDescription>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             )}


//             {section.callToAction && (
//                 <div className="mt-8 flex justify-center space-x-4">
//                   {section.callToAction.map((cta, ctaIndex) => (
//                     <Link key={ctaIndex} href={cta.link}>
//                       <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
//                         {cta.text}
//                       </Button>
//                     </Link>
//                   ))}
//                 </div>
//               )}

//           </motion.div>
//         </section>
//       ))}
//     </div>
//   );
// };


// export default NGOPage;
