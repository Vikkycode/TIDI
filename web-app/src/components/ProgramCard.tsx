// src/components/ProgramCard.tsx
// src/components/ProgramCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { ProgramItem } from '@/app/programs/page'; // OLD IMPORT - REMOVE THIS
import { ProgramItem } from '@/lib/types'; // NEW IMPORT - Adjust path if your types file is elsewhere
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, ArrowRight, FileText, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  program: ProgramItem;
  // onViewReport?: (undefined) => void; 
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onViewReport }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const isPastEvent = program.type === 'past';

  let displayDate = program.date || program.expectedDate || 'Date To Be Determined';
  if (program.date && !program.date.toLowerCase().includes('conducted')) {
    try {
      const dateObj = new Date(program.date.split('(')[0].trim());
      if (!isNaN(dateObj.getTime())) {
        displayDate = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch (e) { /* ignore parsing error, use original string */ }
  }

  const handleCtaClick = (e: React.MouseEvent) => {
    if (program.report && onViewReport) {
      e.preventDefault();
      onViewReport(program.report); // program.report is BaselineReport | undefined
    }
  };

  const ctaText = program.ctaText || (isPastEvent ? (program.report ? 'View Report Summary' : 'View Details') : 'Learn More');
  const canTakeAction = !!program.ctaLink || !!program.report;

  const CtaComponent = (
    <Button
      onClick={program.report ? handleCtaClick : undefined}
      variant={isPastEvent && !program.report ? "outline" : "default"}
      size="sm"
      className={`mt-4 w-full group-hover:opacity-90 transition-colors duration-200 font-semibold
        ${isPastEvent && !program.report ? 'border-tidi-secondary text-tidi-secondary hover:bg-tidi-secondary/10' : ''}
        ${!isPastEvent ? 'bg-tidi-accent hover:bg-tidi-accent-hover text-text-on-accent' : ''}
        ${program.report ? 'bg-tidi-primary hover:bg-tidi-primary-hover text-text-on-primary' : ''}
        ${!canTakeAction ? 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed text-gray-500' : ''}
      `}
      disabled={!canTakeAction}
      aria-label={`${ctaText} for ${program.title}`}
    >
      {ctaText}
      {canTakeAction && (program.report ? <FileText className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />)}
      {!canTakeAction && <AlertTriangle className="ml-2 h-4 w-4" />}
    </Button>
  );

  return (
    <motion.div
      variants={cardVariants}
      className={`bg-card-background rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-in-out flex flex-col overflow-hidden group ${isPastEvent ? 'opacity-90 hover:opacity-100' : ''}`}
    >
      {program.imageUrl && (
        <div className="relative w-full h-48 md:h-52 overflow-hidden">
          <Image
            src={program.imageUrl}
            alt={`Visual for ${program.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {program.type === 'upcoming' && (
            <Badge variant="default" className="absolute top-3 right-3 bg-tidi-accent text-text-on-accent shadow-md">
              UPCOMING
            </Badge>
          )}
          {isPastEvent && (
             <Badge variant="secondary" className="absolute top-3 right-3 bg-gray-500 text-white shadow-md">
              PAST
            </Badge>
          )}
        </div>
      )}

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          {(program.date || program.expectedDate) && (
            <div className="flex items-center text-sm text-tidi-secondary font-medium mb-2">
              <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{displayDate}</span>
            </div>
          )}
          <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-tidi-primary transition-colors duration-200 leading-tight">
            <Link href={program.ctaLink && !program.report ? program.ctaLink : '#'} onClick={program.report ? handleCtaClick : undefined} className="hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm">
                {program.title}
            </Link>
          </h3>
        </div>

        {program.location && (
          <div className="flex items-center text-xs text-text-muted mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            <span>{program.location}</span>
          </div>
        )}

        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-grow">
          {program.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border-light">
          {program.ctaLink && !program.report ? (
            <Link href={program.ctaLink} passHref legacyBehavior>
              <a>{CtaComponent}</a>
            </Link>
          ) : (
            CtaComponent
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
