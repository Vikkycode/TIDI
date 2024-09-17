import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming you have a Card component from Shadcn UI

interface ThematicArea {
  slug: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ThematicAreaCard: React.FC<ThematicArea> = ({ slug,title,icon,description }) => {
  return (
    <Link href={`/about/${slug}`}>
      <Card className="transform transition duration-300 ease-in-out hover:scale-105">
        <CardHeader className="flex flex-col items-center"> {/* Center icon */}
          <div className="mb-4 text-blue-500"> {/* Add margin for spacing */}
            {icon}
          </div>
          <CardTitle className="text-xl font-bold text-blue-500">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ThematicAreaCard;
