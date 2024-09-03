'use client'; 
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon,XIcon } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
    label: string;
    href: string;
}

const navLinks:NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Contact', href: '/contact'},
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'resources', href: '/resources' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          {/* Replace with your NGO's logo */}
          <span>TIDI</span> 
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          {/* <Button>Donate</Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet>
        <SheetTrigger asChild>
        <button 
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        </SheetTrigger>
        <SheetContent side="right">
          {/* <div className="flex justify-center p-4">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <XIcon className="h-6 w-6" />
            </button>
          </div> */}
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-lg font-medium text-gray-800 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
            {/* <Button>Donate</Button> */}
          </nav>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}
