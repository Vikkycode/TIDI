'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProgramCard from '@/components/ProgramCard';
import ReportDetailModal from '@/components/ReportDetailModal';
import { motion } from 'framer-motion';
import { ProgramItem, BaselineReport } from '@/lib/types'; // NEW IMPORT - Adjust path if your types file is elsewhere

// REMOVE LOCAL INTERFACE DEFINITIONS
// export interface ReportSectionDataPoint { /* ... */ }
// export interface ReportSectionListItem { /* ... */ }
// export interface ReportSection { /* ... */ }
// export interface BaselineReport { /* ... */ } // This is now imported
// export interface ProgramItem { /* ... */ } // This is now imported

// --- programsData array (ensure imagePaths are correct) ---
const programsData: ProgramItem[] = [
  {
    id: 'baseline-study-minna',
    type: 'past',
    title: 'Baseline Study: Digital Skills in Minna Deaf Community',
    date: 'Conducted 2023 (Report Published 2024)',
    location: 'Minna, Niger State',
    imageUrl: '/assets/images/image4.jpg',
    description:
      'An in-depth study to understand the digital skill aspirations and challenges faced by the deaf community in Minna, guiding TIDI\'s future initiatives.',
    report: {
      overview: 'The Tech Inclusion for the Deaf Initiative conducted its first program in Minna, focusing on understanding the digital skill aspirations and challenges faced by the deaf community. Data was collected from 31 respondents through the TIDI Baseline Study Questionnaire, and this report provides an in-depth analysis of the findings and actionable recommendations to achieve future goals.',
      sections: [ { title: 'Section A: Personal Information', listData: [ { item: 'Below 10', count: 0 }, { item: '10–15', count: 0 }, { item: '16–20', count: 4 }, { item: 'Above 20', count: 27 } ], description: 'Respondent Age:', }, { title: '', listData: [ { item: 'Male', count: 22 }, { item: 'Female', count: 9 } ], description: 'Gender:' }, ],
      summaryOfFindings: [ 'A majority of respondents are above 20 years old and have completed higher education.', 'Smartphones are the most accessible devices, with limited access to other technologies.', 'Internet usage is frequent among most respondents, with a preference for social media activities.', 'Most respondents have not received prior digital skills training but are motivated to learn for career advancement and personal growth.', 'Hands-on practice and visual materials are the preferred learning methods.', 'Transportation and time constraints are significant barriers to attending training.', 'Data analytics, internet usage, and computer basics rank highly among desired digital skills.', ],
      keyRecommendations: [ { title: 'Develop Accessible Training Programs', points: [ 'Focus on hands-on and visual-based learning to align with preferences.', 'Provide hybrid training options (online and in-person) to address transportation challenges or partner with organisations to provide financial fund for their transportation.', ], }, { title: 'Facilitate Device Accessibility', points: [ 'Partner with technology organizations to provide affordable or donated laptops and tablets.', 'Introduce device-sharing programs in local communities.', ], }, { title: 'Target High-Demand Skills', points: [ 'Prioritize courses in data analytics, computer basics, internet usage, and graphic design.', 'Integrate real-world applications to highlight the value of these skills.', ], }, { title: 'Engage Stakeholders', points: [ 'Collaborate with families, schools, and local organizations to offer support and encouragement.', 'Advocate for the importance of digital skills in community development.', ], }, ],
      futureGoals: [ 'Launch a "Digital Inclusivity Bootcamp": A two-week immersive program tailored to the deaf community, combining hands-on projects, mentorship, and networking opportunities.', 'Create an E-Learning Platform: Develop a platform with sign-language-integrated videos, interactive exercises, and progress tracking.', 'Incentivize Participation: Offer certificates, job placement support, or stipends for completing training programs.', 'Community Outreach Campaign: Raise awareness about the importance of digital skills through community events and success stories of deaf individuals excelling in tech.', ],
    },
  },
  {
    id: 'upcoming-bootcamp-q3-2024',
    type: 'upcoming',
    title: 'Digital Inclusivity Bootcamp',
    expectedDate: 'Q3 2024',
    location: 'Lagos & Online',
    imageUrl: '/assets/images/image1.jpg',
    description:
      'An immersive two-week bootcamp focusing on hands-on tech skills, mentorship, and career readiness for the Deaf community. Stay tuned for application details!',
    ctaText: 'Register Interest',
    ctaLink: '/contact?subject=BootcampInterest',
  },
  {
    id: 'upcoming-elearning-platform',
    type: 'upcoming',
    title: 'TIDI E-Learning Platform Launch',
    expectedDate: 'Late 2024',
    location: 'Online',
    imageUrl: '/assets/images/image2.jpg',
    description:
      'Our accessible e-learning platform with sign-language integrated videos and interactive exercises is under development. Get ready to learn at your own pace!',
    ctaText: 'Notify Me',
    ctaLink: '/contact?subject=ElearningNotify',
  },
];
// --- End of programsData ---


const ProgramsPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<BaselineReport | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pastPrograms = programsData.filter((p) => p.type === 'past');
  const upcomingPrograms = programsData.filter((p) => p.type === 'upcoming');

  const handleViewReport = (report: BaselineReport | undefined) => {
    if (report) {
      setSelectedReport(report);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardGridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  return (
    <div className="bg-background min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-tidi-primary via-tidi-secondary to-teal-500 py-24 md:py-32 text-white">
          <div className="container mx-auto text-center relative z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black drop-shadow-lg"
            >
              Our Programs & Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-500 drop-shadow-md"
            >
              Discover how TIDI empowers Deaf individuals through innovative, accessible, and impactful STEM education, workshops, and initiatives.
            </motion.p>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/assets/images/programs-overlay.jpg"
              alt="Abstract background representing TIDI programs"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Upcoming Programs Section
        {pastPrograms.length > 0 && (
          <section className="py-16 md:py-20 bg-card-background" aria-labelledby="upcoming-programs-title">
            <div className="container mx-auto px-4 md:px-6">
              <motion.h2
                id="upcoming-programs-title"
                variants={sectionTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-tidi-primary text-center mb-12 md:mb-16"
              >
                Upcoming Programs & Initiatives
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={cardGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {upcomingPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </motion.div>
            </div>
          </section>
        )} */}

        {/* Past Programs Section */}
        {pastPrograms.length > 0 && (
          <section className="py-16 md:py-20 bg-background" aria-labelledby="past-programs-title">
            <div className="container mx-auto px-4 md:px-6">
              <motion.h2
                id="past-programs-title"
                variants={sectionTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-tidi-primary text-center mb-12 md:mb-16"
              >
                Past Programs & Impact
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={cardGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {pastPrograms.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    onViewReport={() => handleViewReport(program.report)}
                  />
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* If no programs, show a message */}
        {upcomingPrograms.length === 0 && pastPrograms.length === 0 && (
            <section className="py-20 text-center">
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                    <Image src="/assets/icons/empty-calendar.svg" alt="Empty calendar illustration" width={120} height={120} className="mx-auto mb-6 opacity-70" />
                    <h3 className="text-2xl font-semibold text-text-primary mb-3">No Programs Yet</h3>
                    <p className="text-text-secondary max-w-md mx-auto">
                        We're busy planning impactful programs and events. Please check back soon for updates, or subscribe to our newsletter!
                    </p>
                    <Link href="/contact?subject=NewsletterSubscribe" className="mt-6 inline-block">
                        <Button size="lg" className="bg-tidi-accent hover:bg-tidi-accent-hover text-text-on-accent font-semibold">
                            Subscribe for Updates
                        </Button>
                    </Link>
                </motion.div>
            </section>
        )}

        {/* Call to Action Section */}
        <section className="py-20 bg-tidi-primary text-white">
          <div className="container mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Support Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-500"
            >
              Your contribution can make a real difference in the lives of Deaf
              individuals, helping us provide vital tech education and create inclusive opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale:0.9 }}
              whileInView={{ opacity: 1, scale:1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/donate">
                <Button size="lg" className="bg-blue-500 hover:bg-tidi-accent-hover text-text-on-accent font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                  Donate Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <ReportDetailModal
        report={selectedReport}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProgramsPage;
