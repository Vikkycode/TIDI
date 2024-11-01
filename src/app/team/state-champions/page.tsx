'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

interface StateChampion {
  name: string;
  state: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    // Add more as needed
  };
}

const StateChampionsPage: React.FC = () => {
  const [selectedChampion, setSelectedChampion] = useState<StateChampion | null>(null);

  // Placeholder data for State Champions - replace with actual data later
  const stateChampions: StateChampion[] = [
    // {
    //   name: 'Jane Doe',
    //   state: 'Lagos',
    //   bio: 'Jane is a passionate advocate for...',
    //   imageUrl: '/images/placeholder.jpg', // Replace with actual image URL
    //   socialLinks: {
    //     linkedin: 'https://www.linkedin.com/in/janedoe/',
    //     twitter: 'https://twitter.com/janedoe',
    //   },
    // },
    // ... more champions
  ];

  return (
    <section className="bg-white h-screen py-16" aria-labelledby="champions-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2
          id="champions-section"
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
        >
          Our State Champions
        </h2>

        {stateChampions.length === 0 ? (
          <p className="text-center text-gray-600">
            Check back soon to meet our amazing State Champions!
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stateChampions.map((champion) => (
                <button
                  key={champion.name}
                  onClick={() => setSelectedChampion(champion)}
                  className="focus:outline-none"
                  aria-label={`Read more about ${champion.name}`}
                >
                  <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                    <Image
                      src={champion.imageUrl}
                      alt={champion.name}
                      width={400}
                      height={300}
                      className="object-cover h-[300px] w-full rounded-t-lg"
                    />
                    <CardContent>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {champion.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {champion.state}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>

            {/* Modal for Selected Champion */}
            {selectedChampion && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={() => setSelectedChampion(null)}
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <Card className="bg-white w-full max-w-lg mx-4 md:mx-0 rounded-lg shadow-lg relative">
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => setSelectedChampion(null)}
                    aria-label="Close Modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <Image
                    src={selectedChampion.imageUrl}
                    alt={selectedChampion.name}
                    width={400}
                    height={300}
                    className="object-cover h-[300px] w-full rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                      {selectedChampion.name}
                    </CardTitle>
                    <CardDescription className="text-gray-700 mb-4">
                      {selectedChampion.state}
                    </CardDescription>
                    <p className="text-gray-600">{selectedChampion.bio}</p>

                    {/* Social Links (Optional) */}
                    {selectedChampion.socialLinks && (
                      <div className="mt-6 flex space-x-4">
                        {selectedChampion.socialLinks.linkedin && (
                          <Link
                            href={selectedChampion.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {/* LinkedIn icon path */}
                            </svg>
                          </Link>
                        )}
                        {/* Add more social links as needed */}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default StateChampionsPage;
