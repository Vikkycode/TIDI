import React from 'react';
import Image from 'next/image';

// Import your icons (ensure paths are correct)
import qualityedu from '@/../public/assets/icons/E-WEB-Goal-04.png';
import economic from '@/../public/assets/icons/E-WEB-Goal-08.png';
import inequality from '@/../public/assets/icons/E-WEB-Goal-10.png';
import partnerIcon from '@/../public/assets/icons/E-WEB-Goal-17.png'; // Renamed 'parnter' to 'partnerIcon' for clarity

// Note: Fa... icons were imported in your original file but not used in thematicAreas.
// If they are used elsewhere in this file, keep them. Otherwise, they can be removed.
// import {
//   FaChartLine,
//   FaGraduationCap,
//   FaHandsHelping,
//   FaLaptopCode,
//   FaMicrophone,
// } from 'react-icons/fa';

interface ThematicAreaSection {
  title: string;
  paragraphs?: string[];
  listTitle?: string;
  listItems?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export interface ThematicArea {
  slug: string;
  title: string; // Main title for the thematic area (used on card and detail page H1)
  icon: React.ReactNode;
  description: string; // Short description for the card on homepage and intro on detail page
  sections: ThematicAreaSection[];
}


const thematicAreas: ThematicArea[] = [
  {
    slug: 'inclusive-tech-education', // Match the slug in thematicAreasDetails.ts
    title: 'Inclusive Tech Education for Deaf Learners',
    icon: <Image src={qualityedu} width={128} height={128} alt="Quality Education Icon" />,
    description:
      'TIDI provides Deaf learners across Nigeria with accessible digital skills training, promoting inclusive education and closing the digital divide.',
    sections: [
      {
        title: 'Why Quality Education Must Include the Deaf Community',
        paragraphs: [
          'For too long, education systems in Nigeria have overlooked the needs of Deaf students. Many are excluded not because they lack potential but because they lack access. At Tech Inclusion for the Deaf Initiative (TIDI), we believe education must be inclusive, practical, and adaptive to every learner’s communication needs.',
          'This work aligns with Sustainable Development Goal 4: Quality Education, which calls for inclusive and equitable education for all and lifelong learning opportunities, especially for persons with disabilities.',
        ],
      },
      {
        title: 'How We Deliver Inclusive Tech Education',
        listTitle:
          'Our Tech Education program empowers Deaf individuals with digital skills that are relevant in today’s world:',
        listItems: [
          'Accessible Learning Paths: All trainings are designed with sign language, visual content, subtitles, and Deaf-friendly teaching approaches.',
          'Courses in High-Demand Skills: We teach coding, digital marketing, graphic design, Microsoft Office, data analytics, and more.',
          'Trainer Capacity Building: We train both Deaf and hearing instructors to facilitate accessible classrooms that welcome every learner.',
          'Offline and Community-Based Learning: In areas with poor connectivity, we deliver training through local hubs, ensuring rural Deaf learners are not left out.',
        ],
      },
      {
        title: 'Impact Highlights',
        listItems: [
          'Trained 300+ Deaf learners in digital skills across 9 Nigerian states.',
          'Partnered with institutions to integrate sign language interpretation into tech bootcamps and workshops.',
          'Supported Deaf youth in gaining access to higher education and remote work opportunities.',
        ],
      },
      {
        title: 'Breaking Educational Barriers with Technology',
        paragraphs: [
          'Education is the key to opportunity. But for Deaf individuals, it only works when delivered in a language and format they can access. Our mission is to create educational experiences that are not only inclusive but also empowering.',
        ],
        ctaText: 'Want to learn more about our courses? \nVisit our Programs page.',
        ctaLink: '/programs', // Adjust link as needed
      },
    ],
  },
  {
    slug: 'empowering-deaf-talent', // Match the slug in thematicAreasDetails.ts
    title: 'Empowering Deaf Talent Through Career Development',
    icon: <Image src={economic} width={128} height={128} alt="Decent Work and Economic Growth Icon" />,
    description:
      'TIDI equips Deaf individuals with employable skills, mentorship, and job access, supporting SDG 8 and building a more inclusive economy in Nigeria.',
    sections: [
      {
        title: 'Why Decent Work Must Include Deaf Workers',
        paragraphs: [
          'Unemployment and underemployment remain high among Deaf people in Nigeria not because of ability, but because of exclusion. Many employers are unaware of how to accommodate Deaf staff, and most workplaces are not designed with accessibility in mind.',
          'At Tech Inclusion for the Deaf Initiative (TIDI), we address these gaps head-on. We believe in a future where Deaf individuals have equal access to jobs, promotions, and leadership roles not just charity roles or internships.',
          'Our work contributes directly to Sustainable Development Goal 8: Decent Work and Economic Growth, which promotes productive employment and equal opportunity for all.',
        ],
      },
      {
        title: 'How TIDI Supports Deaf Career Growth',
        listTitle:
          'Our Career Development track provides Deaf individuals with the tools, support, and confidence to enter and thrive in the job market:',
        listItems: [
          'Career Skills Training: From resume writing and job interviews to remote work readiness, we teach practical skills that matter.',
          'Entrepreneurship Support: We mentor Deaf-led businesses and connect them to digital markets and funding opportunities.',
          'Employment Partnerships: We collaborate with inclusive employers, helping them understand Deaf culture, workplace accessibility, and how to retain Deaf talent.',
          'Mentorship & Role Models: We connect Deaf youth with successful Deaf professionals to show what’s possible and how to get there.',
        ],
      },
      {
        title: 'Impact Highlights',
        listItems: [
          'Helped 100+ Deaf individuals secure employment or internships across sectors.',
          'Facilitated workplace accessibility audits for partner organizations.',
          'Launched a pilot Deaf entrepreneurship series in 2024, supporting 15 Deaf-led startups.',
        ],
      },
      {
        title: 'A More Inclusive Economy Is Possible',
        paragraphs: [
          'When we invest in Deaf talent, everyone benefits. Inclusion isn’t a favor, it’s a smart, sustainable path to economic growth. Our goal is simple: remove the barriers, then watch the brilliance unfold.',
        ],
        ctaText: 'Want to collaborate or hire Deaf professionals? \nContact our Career Team.',
        ctaLink: '/contact', // Adjust link as needed
      },
    ],
  },
  {
    slug: 'fighting-inequality', // Match the slug in thematicAreasDetails.ts
    title: 'Fighting Inequality Through Awareness',
    icon: <Image src={inequality} width={128} height={128} alt="Reduced Inequality Icon" />, // Corrected alt text
    description:
      'Discover how TIDI tackles inequality through Deaf advocacy, inclusive policy work, and accessible education campaigns across Nigeria.',
    sections: [
      {
        title: 'Why Reducing Inequality Matters for Deaf Nigerians',
        paragraphs: [
          'At Tech Inclusion for the Deaf Initiative (TIDI), reducing inequality isn’t just part of our mission—it’s the heart of it. Across Nigeria, Deaf individuals continue to face systemic exclusion in schools, workplaces, and public spaces. Many lack access to sign language interpreters, accessible digital tools, or environments that support full participation.',
          'We align this work with Sustainable Development Goal 10: Reduced Inequalities, which calls for the inclusion of all people, regardless of disability, background, or location.',
        ],
      },
      {
        title: 'How TIDI Advances Inclusion Through Advocacy',
        listTitle: 'Our Advocacy & Awareness program is focused on creating long-term structural change through:',
        listItems: [
          'Policy Advocacy: We collaborate with government agencies and institutions to promote inclusive policies and ensure that Deaf voices are heard in decision-making processes related to education, employment, and digital access.',
          'Public Awareness Campaigns: We design and implement campaigns to educate the public, challenge stereotypes, and promote understanding of Deaf culture, rights, and capabilities.',
          'Community Mobilization & Empowerment: We equip Deaf individuals and their allies with the knowledge and tools to advocate for their rights and drive change within their communities.',
          // Add more specific points as available
        ],
      },
      {
        title: 'Our Impact in Advocacy',
        paragraphs: [
            "Through targeted advocacy, TIDI has contributed to increased awareness of Deaf inclusion issues at local and national levels. We actively participate in policy dialogues and work to ensure that new legislation and initiatives are Deaf-inclusive. Our campaigns have reached thousands, fostering a more informed and supportive public.",
            "[More specific impact points and success stories can be added here as they become available.]"
        ],
        // ctaText: "Join Our Advocacy Efforts",
        // ctaLink: "/get-involved/advocacy" // Example CTA
      },
    ],
  },
  {
    slug: 'building-stronger-communities', // Match the slug in thematicAreasDetails.ts
    title: 'Building Stronger Communities Through Partnerships',
    icon: <Image src={partnerIcon} width={128} height={128} alt="Partnerships for the Goals Icon" />, // Corrected alt text
    description:
      'TIDI strengthens Deaf inclusion in Nigeria through local and global partnerships that drive access, training, and sustainable community support.',
    sections: [
      {
        title: 'Why Partnerships Matter for Deaf Inclusion',
        paragraphs: [
          'At Tech Inclusion for the Deaf Initiative (TIDI), we believe that no change happens in isolation. Building a truly inclusive society requires collaboration across sectors—governments, NGOs, tech companies, schools, and communities must work together. That’s why our Community Support efforts are rooted in partnerships.',
          'We align this work with Sustainable Development Goal 17: Partnerships for the Goals, which promotes cross-sector cooperation for sustainable development, especially in low-resource and marginalized communities.',
        ],
      },
      {
        title: 'Our Community Support Model',
        listTitle: 'TIDI creates impact by building networks of care, training, and opportunity:',
        listItems: [
          'Grassroots Partnerships: We collaborate with Deaf communities and local organizations to design solutions that reflect lived experience.',
          'Cross-Sector Collaboration: We work with schools, hospitals, tech hubs, and civil society to integrate accessibility into programs, services, and spaces.',
          'Volunteer Mobilization: Our network of trained volunteers supports outreach, peer mentorship, and community-led workshops across Nigerian states.',
          'Capacity Building: We offer technical support, strategy development, and training to other disability-focused groups and youth-led initiatives.',
        ],
      },
      {
        title: 'Highlights and Impact',
        listItems: [
          'Partnered with 4+ community organizations in 6 states to deliver tech and leadership training for Deaf youth.',
          'Launched joint programs with NNADYS, NANDS, and grassroots Deaf associations.',
          'Facilitated community access dialogues that led to the adoption of inclusive practices in schools and public events.',
        ],
      },
      {
        title: 'Creating Change, Together',
        paragraphs: [
          'We know that real transformation happens when people unite around a shared goal. Our partnerships aren’t just collaborations, they are community. They are a reminder that inclusion is everyone’s responsibility.',
        ],
        ctaText: 'Want to partner with us? Reach out here.',
        ctaLink: '/contact', // Adjust link as needed
      },
    ],
  },
];

export default thematicAreas;