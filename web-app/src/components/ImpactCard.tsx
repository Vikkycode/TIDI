import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

interface ImpactCardProps {
  title: string;
  number?: number;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  number = 0,
  description,
  icon,
  link,
}) => {
  // Animated count up
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    // Sanitize the input to ensure we're working with a valid number.
    // This prevents NaN errors if a non-numeric value (like '300+') is passed at runtime.
    const targetNumber = Number(number);

    // If the target is not a valid number or is less than/equal to 0, just display it and stop.
    if (isNaN(targetNumber) || targetNumber <= 0) {
      setDisplayNumber(isNaN(targetNumber) ? 0 : targetNumber);
      return;
    }

    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.ceil(targetNumber / (duration / 16))); // Ensure step is at least 1
    const animate = () => {
      start += step;
      if (start >= targetNumber) {
        setDisplayNumber(targetNumber);
      } else {
        setDisplayNumber(start);
        ref.current = window.requestAnimationFrame(animate);
      }
    };
    ref.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(ref.current);
  }, [number]);

  return (
    <Card
      className="relative overflow-hidden bg-gradient-to-br bg-white text-blue-700 shadow-xl transform transition duration-300 ease-in-out hover:scale-105 focus-within:ring-2 focus-within:ring-white hover:shadow-2xl rounded-lg"
      tabIndex={0}
      aria-label={`${title}: ${description}`}
    >
      <Link
        href={link || "#"}
        tabIndex={-1}
        aria-label={title}
        className="relative z-10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg"
      >
        <CardHeader className="flex flex-col items-center">
          {icon && (
            <div className="text-blue-700 text-4xl mb-4 drop-shadow-lg">{icon}</div>
          )}
          <CardTitle className="text-2xl font-bold text-blue-700 mb-2 text-center drop-shadow">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-extrabold text-blue-700 mb-2 drop-shadow" aria-live="polite">
            {displayNumber}
            {typeof number === 'number' && typeof number !== 'undefined' && !isNaN(number) && number > 0 && '+'}
          </p>
          <CardDescription className="text-blue-500 text-base font-medium">{description}</CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};
