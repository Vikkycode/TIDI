import React from 'react'
import Link from 'next/link'

  const ThematicAreaCard: React.FC = ({area}) => {
   return (
   <Link href={`/about/${area?.slug}`}>
      <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105">
      <div className="flex justify-center mb-8">
            {area?.icon}
          </div>
        <h3 className="text-xl font-bold text-blue-500 mb-4">{area?.title}</h3>
        <p className="text-gray-600">{area?.description}</p>
      </div>
    </Link>
   )
};

  export default ThematicAreaCard;