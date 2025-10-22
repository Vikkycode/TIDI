'use client'; // This component uses client-side features (framer-motion)

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DonorPartnerLogo from '@/components/DonorPartnerLogo';
import { ThematicAreaDetail } from '@/lib/thematicAreasDetails';

interface ThematicAreaClientPageProps {
  thematicArea: ThematicAreaDetail;
}

const ThematicAreaClientPage: React.FC<ThematicAreaClientPageProps> = ({ thematicArea }) => {
  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "circOut" } },
  };

  // Helper function to render sections conditionally
  const renderSection = (
    id: string,
    title: string,
    content: React.ReactNode,
    bgColor: string = 'bg-white'
  ) => (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`py-16 md:py-24 ${bgColor}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          id={`${id}-title`}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.div variants={itemVariants}>
          {content}
        </motion.div>
      </div>
    </motion.section>
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative py-28 md:py-40 text-white bg-blue-700"
        aria-labelledby="thematic-area-hero-title"
      >
        <Image
          src="/assets/images/thematic-areas-hero.jpg" // Placeholder image
          alt={`${thematicArea.title} Hero Background`}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 via-blue-700/50 to-transparent z-0"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-4 flex justify-center"
          >
             {React.cloneElement(thematicArea.icon as React.ReactElement, { className: "w-20 h-20 text-white drop-shadow-lg" })}
          </motion.div>
          <motion.h1
            id="thematic-area-hero-title"
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {thematicArea.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            {thematicArea.description}
          </motion.p>
        </div>
      </section>

      {renderSection(
        'detailed-description',
        `About ${thematicArea.title}`,
        <div className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed prose prose-lg max-w-none">
          <p>{thematicArea.longDescription}</p>
        </div>
      )}

      {thematicArea.specificPrograms && thematicArea.specificPrograms.length > 0 && (
        renderSection(
          'specific-programs',
          'Specific Programs & Initiatives',
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thematicArea.specificPrograms.map((program, index) => (
              <Card key={index} className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-blue-200/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-semibold text-blue-700">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-700 leading-relaxed mb-4">{program.description}</CardDescription>
                  {program.link && (
                    <Link href={program.link} passHref legacyBehavior>
                      <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Learn More</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>,
          'bg-slate-100'
        )
      )}

       {thematicArea.slug === 'inclusive-tech-education' && thematicArea.curriculumHighlights && thematicArea.curriculumHighlights.length > 0 && (
        renderSection( 'curriculum-highlights', 'Curriculum Highlights',
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl leading-relaxed">
              {thematicArea.curriculumHighlights.map((highlight, index) => ( <li key={index}>{highlight}</li> ))}
            </ul>
          </div>
        )
      )}

       {thematicArea.slug === 'fighting-inequality' && thematicArea.advocacyMethods && thematicArea.advocacyMethods.length > 0 && (
        renderSection( 'advocacy-methods', 'Our Advocacy Approach',
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl leading-relaxed">
              {thematicArea.advocacyMethods.map((method, index) => ( <li key={index}>{method}</li> ))}
            </ul>
          </div>, 'bg-slate-100'
        )
      )}

       {thematicArea.slug === 'building-stronger-communities' && thematicArea.partnershipTypes && thematicArea.partnershipTypes.length > 0 && (
        renderSection( 'partnership-types', 'Types of Partnerships',
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl leading-relaxed">
              {thematicArea.partnershipTypes.map((type, index) => ( <li key={index}>{type}</li> ))}
            </ul>
          </div>
        )
      )}

      {thematicArea.successStories && thematicArea.successStories.length > 0 && (
        renderSection( 'success-stories', 'Success Stories',
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thematicArea.successStories.map((story, index) => (
               <Card key={index} className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-purple-200/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
<<<<<<< HEAD
                 <CardContent className="p-0 flex-grow"> <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{story.quote}"</blockquote> </CardContent>
=======
                 <CardContent className="p-0 flex-grow"> <blockquote className="text-gray-700 italic mb-4 leading-relaxed">&quot;{story.quote}&quot;</blockquote> </CardContent>
>>>>>>> cb739da (update files)
                 <CardFooter className="p-0 pt-4 border-t border-border-light mt-auto"> <p className="text-sm font-semibold text-gray-800">{story.person}, <span className="font-normal text-gray-600">{story.role}</span></p> </CardFooter>
               </Card>
            ))}
          </div>, 'bg-slate-100'
        )
      )}

      {thematicArea.relatedPartners && thematicArea.relatedPartners.length > 0 && (
        renderSection( 'related-partners', 'Related Partners',
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {thematicArea.relatedPartners.map((partner, index) => ( <DonorPartnerLogo key={index} {...partner} /> ))}
          </div>
        )
      )}

      {thematicArea.faqs && thematicArea.faqs.length > 0 && (
        renderSection( 'faqs', 'Frequently Asked Questions',
          <div className="max-w-3xl mx-auto">
             <Accordion type="single" collapsible className="w-full">
              {thematicArea.faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-blue-700 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed"> {faq.answer} </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>, 'bg-slate-100'
        )
      )}

      {thematicArea.callsToAction && thematicArea.callsToAction.length > 0 && (
        renderSection( 'calls-to-action', 'Take Action',
          <div className="flex flex-wrap justify-center gap-6">
            {thematicArea.callsToAction.map((cta, index) => (
              <Link key={index} href={cta.link} passHref legacyBehavior>
<<<<<<< HEAD
                <Button size="lg" variant={cta.variant || 'default'} className={`font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-colors duration-300
                   ${cta.variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
                   ${cta.variant === 'secondary' ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}
                   ${cta.variant === 'outline' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' : ''}
                   ${cta.variant === 'default' ? 'bg-gray-800 hover:bg-gray-900 text-white' : ''}
                `}>
=======
                <Button size="lg" className={`font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-colors duration-300`}>
>>>>>>> cb739da (update files)
                  {cta.text}
                </Button>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ThematicAreaClientPage;