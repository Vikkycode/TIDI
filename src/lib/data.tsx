import { GraduationCapIcon, BriefcaseIcon, MegaphoneIcon, UsersIcon } from 'lucide-react';
import qualityedu from '@/../public/assets/icons/E-WEB-Goal-04.png'
import economic from '@/../public/assets/icons/E-WEB-Goal-08.png'
import parnter from '@/../public/assets/icons/E-WEB-Goal-17.png'
import inequality from '@/../public/assets/icons/E-WEB-Goal-10.png'
import Image from 'next/image'
interface ThematicArea {
    slug: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    content:string;
  }

// Data for thematic areas
const thematicAreas: ThematicArea[] = [
    {
      slug: 'tech-education',
      title: 'Tech Education',
      description: 'We provide specialized training in key areas such as coding, data analysis, digital literacy, and other in-demand tech skills, designed with the specific needs of Deaf learners in mind.',
      icon: <Image src={qualityedu} className='w-32 h-32 ' alt={'quality education'} />,
      content: 'This is the detailed content for Tech Education. You can expand on the programs offered, the curriculum, the impact on Deaf learners, and any success stories. You can also include images, videos, or testimonials to make this section more engaging.',
    },
    {
      slug: 'career-development',
      title: 'Career Development',
      description: 'We offer mentorship, job placement assistance, and career guidance to help Deaf learners navigate the job market and achieve their professional goals.',
      icon: <Image src={economic} className='w-32 h-32 ' alt={'Decent Work and Economic Growth'} />,
      content: 'This is the detailed content for Career Development. You can talk about the mentorship program, the job placement process, the companies you partner with, and the success stories of Deaf individuals who have found jobs through your program.',
    },
    {
      slug: 'advocacy-awareness',
      title: 'Advocacy & Awareness',
      description: 'We advocate for the rights of Deaf individuals and work to raise awareness about the importance of accessibility in education and employment.',
      icon: <Image src={inequality} className='w-32 h-32 ' alt={'Parntership'} />,
      content: 'This is the detailed content for Advocacy & Awareness. You can discuss the specific advocacy work you do, the events you organize to raise awareness, and the impact you have made in terms of policy changes or increased accessibility.',
    },
    {
      slug: 'community-support',
      title: 'Community Support',
      description: 'We provide a supportive environment where Deaf individuals can connect, learn, and grow together through online forums, in-person events, and our physical tech school.',
      icon: <Image src={parnter} className='w-32 h-32 ' alt={'reduced inequality'} />,
      content: 'This is the detailed content for Community Support. You can describe the online and offline communities you have built, the types of events you host, and the benefits that Deaf individuals experience by being part of your community.',
    },
  ];

  export default thematicAreas;