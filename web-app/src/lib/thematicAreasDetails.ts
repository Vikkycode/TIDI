import { ThematicArea } from './data'; // Assuming ThematicArea type is defined here
import { FaHandshake, FaHandsHelping, FaWheelchair, FaLightbulb, FaUsers } from 'react-icons/fa'; // Import icons
import React from 'react';

// Define interfaces for the detailed data
interface SpecificProgram {
  title: string;
  description: string;
  link?: string; // Link to a program page if available
}

interface SuccessStory {
  quote: string;
  person: string;
  role: string;
  link?: string; // Link to a full story page if available
}

interface RelatedPartner {
  name: string;
  logo: string;
  link?: string; // Link to partner website
}

interface FAQ {
  question: string;
  answer: string;
}

interface CallToAction {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline'; // Button style variant
}

// Extend the base ThematicArea type with detailed fields
export interface ThematicAreaDetail extends ThematicArea {
  longDescription: string;
  specificPrograms?: SpecificProgram[];
  successStories?: SuccessStory[];
  relatedPartners?: RelatedPartner[];
  faqs?: FAQ[];
  callsToAction?: CallToAction[];
  // Add other specific fields as needed for each area (e.g., curriculum highlights, advocacy methods, partnership types)
  curriculumHighlights?: string[]; // Example for education area
  advocacyMethods?: string[]; // Example for inequality area
  partnershipTypes?: string[]; // Example for community area
}

// Detailed data for each thematic area
const thematicAreasDetails: ThematicAreaDetail[] = [
  {
      slug: 'inclusive-tech-education',
      title: 'Inclusive Tech Education',
      icon: React.createElement(FaHandshake, { className: "w-16 h-16 text-blue-600" }), // Example icon usage
      description: 'Providing accessible and high-quality tech training for the Deaf community.',
      longDescription: 'This thematic area is the cornerstone of TIDI\'s work. We are dedicated to breaking down educational barriers by offering comprehensive technology courses specifically designed for Deaf learners. Our curriculum is delivered in Nigerian Sign Language (NSL) by experienced Deaf instructors, ensuring clear communication and a supportive learning environment. We cover foundational skills like computer literacy and progress to in-demand areas such as programming (Python, JavaScript), web development, data analysis, and digital design. Our goal is to equip Deaf individuals with the practical skills needed to excel in the modern tech industry.',
      specificPrograms: [
          { title: 'Python Programming Fundamentals (NSL)', description: 'Comprehensive video courses covering Python basics with NSL instruction and captioned materials.', 
            // link: '/programs/python-fundamentals' 
        },
          { title: 'Web Development Bootcamp (NSL)', description: 'Intensive, hands-on bootcamp covering HTML, CSS, JavaScript, and modern frameworks, delivered entirely in NSL.', 
            // link: '/programs/web-dev-bootcamp' 
        },
          { title: 'Digital Literacy Workshops', description: 'Introductory sessions on computer basics, internet safety, and essential software for beginners.',
            //  link: '/programs/digital-literacy' 
            },
          // Add more specific programs
      ],
      curriculumHighlights: [
          'NSL as the primary language of instruction',
        //   'Visual-first learning materials',
          'Hands-on coding exercises with accessible feedback',
          'Deaf instructors with industry experience',
          'Focus on practical, job-ready skills',
      ],
      faqs: [
          { question: 'What courses do you offer?', answer: 'We offer courses in Python, Web Development, Data Analytics and plan to expand into UI/UX Design.' },
          { question: 'How is the training delivered?', answer: 'Training is delivered primarily through NSL training workshop, live online sessions with NSL interpreters, and hands-on practical exercises.' },
          { question: 'Do I need prior tech experience?', answer: 'No, we have programs for beginners as well as those with some existing knowledge.' },
      ],
      callsToAction: [
          { text: 'View All Programs', link: '/programs', variant: 'primary' },
        //   { text: 'Apply for a Program', link: '/apply', variant: 'secondary' },
      ],
      sections: []
  },
  {
      slug: 'empowering-deaf-talent',
      title: 'Empowering Deaf Talent',
      icon: React.createElement(FaHandsHelping, { className: "w-16 h-16 text-blue-600" }),
      description: 'Connecting skilled Deaf individuals with meaningful employment opportunities.',
      longDescription: 'Beyond education, TIDI is committed to ensuring our graduates successfully transition into the workforce. This thematic area focuses on career development, mentorship, and job placement assistance. We work closely with employers to promote inclusive hiring practices and provide support to both the Deaf talent and the companies hiring them. Our goal is to build a bridge between skilled Deaf professionals and the tech industry, fostering long-term career success.',
      specificPrograms: [
          { title: 'Career Readiness Workshops', description: 'Training on resume writing, interview skills, and professional communication.', 
            // link: '/services/career-readiness' 
        },
          { title: 'Mentorship Program', description: 'Pairing Deaf students and graduates with experienced tech professionals for guidance and networking.', 
            // link: '/programs/mentorship' 
        },

          { title: 'Job Placement Assistance', description: 'Direct support in finding and applying for jobs, and advocating for necessary workplace accommodations.', 
            // link: '/services/job-placement' 
        },
      ],
      successStories: [
          // Add actual success stories here
        //   { quote: 'After completing the web development bootcamp, TIDI connected me with a fantastic internship that turned into a full-time job!', person: 'Aisha M.', role: 'Junior Web Developer', link: '/success-stories/aisha' },
        //   { quote: 'The mentorship program gave me the confidence and network I needed to navigate the tech job market as a Deaf professional.', person: 'Segun O.', role: 'Data Analyst', link: '/success-stories/segun' },
      ],
      faqs: [
          { question: 'Do you help with job placement?', answer: 'Yes, we provide job placement assistance, including resume help, interview practice, and connecting you with inclusive employers.' },
          { question: 'What kind of jobs can I get after training?', answer: 'Our graduates are prepared for roles such as Junior Developer, Web Designer, Data Entry Specialist, IT Support, and more, depending on the program completed.' },
      ],
      callsToAction: [
          { text: 'Hire Deaf Talent', link: '/contact', variant: 'primary' },
          { text: 'Become a Mentor', link: '/contact', variant: 'secondary' },
      ],
      sections: []
  },
  {
      slug: 'fighting-inequality',
      title: 'Fighting Inequality',
      icon: React.createElement(FaWheelchair, { className: "w-16 h-16 text-blue-600" }),
      description: 'Advocating for policy changes and raising awareness to ensure equal opportunities for the Deaf community.',
      longDescription: 'Inequality in access to education and employment is a major challenge for the Deaf community. TIDI actively engages in advocacy work to influence policy, raise public awareness, and challenge discriminatory practices. We collaborate with Deaf associations, government bodies, and other NGOs to champion the rights of Deaf individuals and create a more equitable society where technology is truly accessible to all.',
      advocacyMethods: [
        //   'Policy recommendations to government agencies',
          'Public awareness campaigns on Deaf inclusion',
          'Workshops and training for employers on Deaf-friendly workplaces',
          'Collaboration with national and international Deaf organizations',
          'Highlighting success stories and the potential of Deaf talent',
      ],
      faqs: [
          { question: 'How can I support your advocacy efforts?', answer: 'You can support us by sharing our campaigns, contacting your representatives, and participating in our awareness events. Follow us on social media to stay updated.' },
          { question: 'What policies are you advocating for?', answer: 'We advocate for policies that mandate accessibility in digital platforms, promote inclusive education standards, and incentivize the hiring of Deaf individuals.' },
      ],
      callsToAction: [
          { text: 'Join Our Advocacy', link: '/contact', 
            // link2: '/get-involved/advocacy', 
            variant: 'primary' },
        //   { text: 'Read Our Policy Briefs', link: '/resources/policy', variant: 'outline' },
      ],
      sections: []
  },
  {
      slug: 'building-stronger-communities',
      title: 'Building Stronger Communities',
      icon: React.createElement(FaUsers, { className: "w-16 h-16 text-blue-600" }),
      description: 'Fostering connections, collaboration, and support networks within the Deaf tech ecosystem.',
      longDescription: 'TIDI believes in the power of community. We work to build a strong, supportive network for Deaf individuals interested in or working in technology. This includes organizing meetups, workshops, and online forums where Deaf learners and professionals can connect, share knowledge, and support each other. We also forge strategic partnerships with other organizations, both within and outside the Deaf community, to amplify our impact and create more opportunities.',
      partnershipTypes: [
          'Partnerships with Deaf associations (e.g., NNAD, NANDS, AAD)',
          'Collaboration with educational institutions',
          'Partnerships with tech companies for internships and jobs',
          'Collaboration with other NGOs focused on disability inclusion',
          'International collaborations for knowledge sharing',
      ],
      relatedPartners: [
          { name: "NNAD", logo: "/assets/images/nnad.png", link: "https://example.com/nnad" }, // Replace with actual links
          { name: "NANDS", logo: "/assets/images/nands.png", link: "https://example.com/nands" },
          { name: "AAD", logo: "/assets/images/AAD.png", link: "https://example.com/aad" },
          // Add more relevant partners
      ],
      faqs: [
        //   { question: 'How can I connect with other Deaf tech enthusiasts?', answer: 'Join our online community forums or attend our local meetups and workshops. Check our events page for upcoming activities.' },
          { question: 'How can my organization partner with TIDI?', answer: 'We welcome partnerships! Please visit our "Partner With Us" page or contact us directly to discuss collaboration opportunities.' },
      ],
      callsToAction: [
        //   { text: 'Join Our Community', link: '/community', variant: 'primary' },
          { text: 'Partner With Us', link: '/contact', variant: 'secondary' },
      ],
      sections: []
  },
   {
       slug: 'innovation', // Assuming 'Innovation' is also a thematic area based on values
       title: 'Innovation',
       icon: React.createElement(FaLightbulb, { className: "w-16 h-16 text-blue-600" }),
       description: 'Fostering creativity and problem-solving skills to drive technological advancements.',
       longDescription: 'Innovation is key to staying relevant in the fast-paced tech world. TIDI encourages a culture of innovation among Deaf learners and professionals. We integrate problem-solving challenges into our curriculum, host hackathons and innovation workshops, and support projects that leverage technology to address challenges faced by the Deaf community and beyond. We aim to nurture the next generation of Deaf tech innovators.',
       specificPrograms: [
           { title: 'Innovation Workshops', description: 'Sessions focused on design thinking, problem-solving, and developing tech solutions.', link: '/programs/innovation-workshops' },
           { title: 'Deaf Tech Hackathons', description: 'Events bringing together Deaf developers to build innovative projects.', link: '/events/hackathons' },
       ],
       faqs: [
           { question: 'How do you encourage innovation?', answer: 'We include innovation challenges in our training, host dedicated workshops and hackathons, and provide a platform for sharing and developing new ideas.' },
       ],
       callsToAction: [
           { text: 'Explore Innovation Programs', link: '/programs#innovation', variant: 'primary' },
           { text: 'Participate in a Hackathon', link: '/events', variant: 'secondary' },
       ],
       sections: []
   },
];

// Function to get thematic area detail by slug
export const getThematicAreaDetailBySlug = (slug: string): ThematicAreaDetail | undefined => {
  return thematicAreasDetails.find(area => area.slug === slug);
};

// Function to get all thematic area slugs for static paths
export const getAllThematicAreaSlugs = (): string[] => {
  return thematicAreasDetails.map(area => area.slug);
};