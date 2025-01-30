import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import DonorPartnerLogo, { DonorPartnerSectionProps } from '@/components/DonorPartnerLogo';
import DonorPartnerLogo from '@/components/DonorPartnerLogo'
interface DonorPartner {
    name: string;
    logo: string;
    link?: string; // Optional: Link to the partner's website
  }
  

interface DonorPartnerSectionProps {
    partners: DonorPartner[];
  }

export const DonorPartnerSection: React.FC<DonorPartnerSectionProps> = ({ partners }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Delay between children
            delayChildren: 0.5,
          },
        },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition:{duration:0.5} },
      };


  return (
    <section className="py-16" aria-labelledby="donor-partner-section-title">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <h2 id="donor-partner-section-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Donor and Funding Partners
        </h2>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-8"
        >
            {partners.map((partner:any) => (
            <motion.div variants={itemVariants} key={partner.name}>
                <DonorPartnerLogo key={partner.name} {...partner} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


