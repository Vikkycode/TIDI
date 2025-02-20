"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import Link from "next/link";

interface Partner {
    name: string;
    logo: string;
    link?: string;
}
  
export function PartnerCarousel() {

    const partners: Partner[] = [
      { name: "NNAD", logo: "/assets/images/nnad.png", link: "" },
      { name: "NANDS", logo: "/assets/images/nands.png", link: "" },
      { name: "AAD", logo: "/assets/images/AAD.png", link: "" }
    ];

  return (
    <div className="h-[20rem] bg-white rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={partners}
        direction="right"
        speed="slow"
        renderItem={(partner: Partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        )}
      />
    </div>
  );
}



const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
    return (
        <Link href={partner.link || ''} target={partner.link ? '_blank' : '_self'} rel={partner.link ? 'noopener noreferrer' : ''}  className="relative h-64 w-60 bg-blue-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}{/*  Optional: subtle blue overlay */}
            <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={50} //Adjust width/height to fit card
                className="h-20 w-auto mx-auto mt-8 object-contain" //Center & maintain aspect ratio
            />
           <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-b from-transparent to-blue-500"></div> {/* Gradient overlay */}

            <p className="absolute bottom-4 left-4 right-4 text-center text-white font-bold text-lg">{partner.name}</p>


        </Link>
    );
};
