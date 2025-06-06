import React from 'react';
import { notFound } from 'next/navigation';
import { getThematicAreaDetailBySlug, getAllThematicAreaSlugs } from '@/lib/thematicAreasDetails';
import ThematicAreaClientPage from './ThematicAreaClientPage'; // Import the new client component


// Define props for the page component
interface ThematicAreaPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for SSG (Static Site Generation)
export async function generateStaticParams() {
  const slugs = getAllThematicAreaSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Page component
const ThematicAreaPage: React.FC<ThematicAreaPageProps> = ({ params }) => {
  const { slug } = params;
  const thematicArea = getThematicAreaDetailBySlug(slug);

  // If thematic area not found, render 404 page
  if (!thematicArea) {
    notFound();
  }

  return (
    // Pass the fetched thematicArea data to the client component
    <ThematicAreaClientPage thematicArea={thematicArea} />
  );
};

export default ThematicAreaPage;