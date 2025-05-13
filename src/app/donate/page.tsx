// src/app/donate/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Heart, Users, ShieldCheck, Banknote, Mail, Info, Landmark, Globe } from 'lucide-react'; // Added Globe
import Link from 'next/link';

// Placeholder data - REPLACE WITH YOUR ACTUAL DETAILS
const TIDI_BANK_NAME = "Guaranty Trust Bank (GTB)";
const TIDI_ACCOUNT_NAME = "Tech Inclusion for the Deaf Initiative";
const TIDI_ACCOUNT_NUMBER = "3000568892"; // Replace with your actual account number (that accepts both NGN & USD)
// const TIDI_SWIFT_CODE = "GTBINGLA"; // Example SWIFT code for GTB, VERIFY YOURS (essential for USD transfers)
// const TIDI_BANK_ADDRESS = "Plot 635, Akin Adesola Street, Victoria Island, Lagos, Nigeria"; // Optional: Bank's head office or main branch address

const TIDI_DONATION_EMAIL = "techinclusion112@gmail.com"; 

const DonatePage: React.FC = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const impactPoints = [
    {
      icon: <Users className="h-10 w-10 text-blue-500 mb-4" />,
      title: 'Empower Individuals',
      description: 'Your gift provides Deaf individuals with access to cutting-edge tech education, tools, and mentorship.',
    },
    {
      icon: <Heart className="h-10 w-10 text-pink-500 mb-4" />,
      title: 'Foster Inclusion',
      description: 'Help us build a more inclusive tech industry where Deaf talents are recognized and valued.',
    },
    {
      icon: <Banknote className="h-10 w-10 text-green-500 mb-4" />,
      title: 'Drive Innovation',
      description: 'Support the development of accessible technologies and solutions by and for the Deaf community.',
    },
  ];

  const faqItems = [
    {
      question: "How will TIDI know I've donated?",
      answer: `After making a bank transfer, please send an email to ${TIDI_DONATION_EMAIL} with your name (optional), donation amount & currency (NGN or USD), and date of transfer. A screenshot is helpful but not required. This helps us acknowledge your gift and maintain records.`,
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "TIDI is a registered non-profit initiative. Please consult with your local tax advisor regarding tax deductibility in your region. We can provide an acknowledgment receipt upon request.",
    },
    // {
    //   question: "What information is needed for a USD transfer?",
    //   answer: `For USD transfers to our account, you will typically need our Bank Name (${TIDI_BANK_NAME}), Account Name (${TIDI_ACCOUNT_NAME}), Account Number (${TIDI_ACCOUNT_NUMBER}), and our SWIFT/BIC Code (${TIDI_SWIFT_CODE}). Your bank might also ask for our bank's address.`,
    // },
     {
      question: "What if I have trouble with the transfer?",
      answer: `If you encounter any issues or have questions during the transfer process, please don't hesitate to contact us at ${TIDI_DONATION_EMAIL}. We're here to help!`,
    },
  ];


  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section (remains the same) */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 py-24 md:py-32 text-white text-center"
        >
          <div className="container mx-auto relative z-10 px-4">
            <Heart className="mx-auto h-16 w-16 mb-6 text-pink-300" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Support Deaf Innovators
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 drop-shadow-md">
              Your generous contribution empowers Deaf individuals with vital tech skills,
              fostering a future of inclusion, innovation, and opportunity.
            </p>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/assets/images/donate-hero-bg.jpg"
              alt="Diverse group collaborating on technology"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* How to Donate Section - UPDATED */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <Card className="bg-white shadow-xl rounded-xl max-w-3xl mx-auto">
              <CardHeader className="text-center border-b border-gray-200 pb-6">
                <Landmark className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Donate via Bank Transfer
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Support TIDI directly by making a transfer to our official bank account.
                  <br />This account accepts both Nigerian Naira (NGN) and US Dollars (USD).
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 px-6 md:px-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                    <Globe className="h-6 w-6 mr-2 text-blue-500" /> {/* General icon for multi-currency */}
                    Account Details (Accepts NGN & USD)
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-2"> {/* Increased space-y */}
                    <p className="text-gray-700"><strong>Bank Name:</strong> {TIDI_BANK_NAME}</p>
                    <p className="text-gray-700"><strong>Account Name:</strong> {TIDI_ACCOUNT_NAME}</p>
                    <p className="text-gray-700"><strong>Account Number:</strong> <span className="font-mono text-blue-700 text-lg">{TIDI_ACCOUNT_NUMBER}</span></p>
                    {/* <p className="text-gray-700"><strong>SWIFT/BIC Code (for USD transfers):</strong> <span className="font-mono">{TIDI_SWIFT_CODE}</span></p> */}
                    {/* {TIDI_BANK_ADDRESS && <p className="text-sm text-gray-600"><strong>Bank Address:</strong> {TIDI_BANK_ADDRESS}</p>} */}
                    <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-blue-100">
                      When making a USD transfer, please ensure your bank uses the correct SWIFT code.
                      For NGN transfers, the account number is usually sufficient.
                    </p>
                  </div>
                </div>

                {/* After Donation Instructions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-6">
                    After Your Donation:
                  </h3>
                  <div className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <Mail className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">
                        Please send an email to:
                      </p>
                      <p className="font-semibold text-yellow-700 text-lg break-all">{TIDI_DONATION_EMAIL}</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Include your Name (optional), Donation Amount & Currency (NGN or USD), and Date of Transfer.
                        A screenshot of the transfer confirmation is helpful for our records.
                        This allows us to acknowledge your generous support promptly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 pt-4 justify-center">
                    <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                    Your direct support makes a significant impact.
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Why Your Donation Matters Section (remains the same) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="py-16 md:py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Why Your Donation Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactPoints.map((point, index) => (
                <motion.div key={index} custom={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <Card className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-center">
                    {point.icon}
                    <CardTitle className="text-xl font-semibold text-gray-700 mb-2">{point.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Frequently Asked Questions Section (updated content) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="py-16 md:py-20"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div key={index} custom={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <Card className="bg-white rounded-lg shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-700 flex items-start">
                        <Landmark className="h-5 w-5 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact for Support Section (remains the same) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="py-16 text-center bg-gray-100"
        >
          <div className="container mx-auto px-4">
            <Info className="mx-auto h-10 w-10 text-blue-500 mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Have Questions or Need Assistance?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              If you have any questions about the donation process, alternative ways to give, or how your contribution helps, please don&apos;t hesitate to reach out.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default DonatePage;
