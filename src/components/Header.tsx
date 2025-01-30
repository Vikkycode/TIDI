'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone,
  FaLinkedin,
  FaMailBulk,
  FaChevronDown
} from 'react-icons/fa';


interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Who We Are', 
    href: '/who-we-are',
    subLinks: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team', subLinks: [
        { label: 'Key Staff', href: '/team/key-staff' },
        { label: 'State Champions', href: '/team/state-champions' },
      ]},
    ]
  },
  { 
    label: 'Our Purpose', 
    href: '/our-purpose',
    subLinks: [
      { label: 'Mission', href: '/purpose/mission' },
      { label: 'Vision', href: '/purpose/vision' },
    ]
  },
  { 
    label: 'Guiding Principles', 
    href: '/guiding-principles',
    subLinks: [
      { label: 'Core Values', href: '/principle/values' },
    ]
  },
  { 
    label: 'What We Do', 
    href: '/what-we-do',
    subLinks: [
      { label: 'Key Programs', href: '/programs' },
      { label: 'Services', href: '/services' },
    ]
  },  
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/events' },
  // { label: 'Gallery', href: '/gallery' },
  { 
    label: 'Donate', 
    href: '/donate', 
    subLinks: [{ label: 'Flutterwave', href: '/donate/flutterwave' }] 
  },
  { label: 'Contact', href: '/contact' },
];

const renderNavLink = (link: NavLink, level: number = 0) => {
  const isActive = usePathname() === link.href || (link.subLinks && link.subLinks.some(sub => sub.href === usePathname()));
  const isDropdown = !!link.subLinks;

  return (
    <div key={link.label} className="relative">
      {isDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <div  className={`flex items-center space-x-2 cursor-pointer ${isActive ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}>
                <Link href={level === 0 ? link.href : ""} >{link.label}</Link>
              {level === 0 && <FaChevronDown className="h-4 w-4" />}
             </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-md rounded-md p-2 border border-gray-200">
            {link.subLinks?.map(subLink => renderNavLink(subLink, level + 1))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (

          <Link href={link.href}
              className={`block px-4 py-2 ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}>
            {link.label}
          </Link>
      )}
    </div>
  );
};



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  return (
    <header className="bg-white shadow-md py-2 sticky top-0 z-50">
       {/* <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-0 space-x-6 text-sm text-blue-500">
        
          <Link href="tel:+2348160000000" className="hover:text-blue-500 flex items-center space-x-2">
            <FaPhone className="h-5 w-5 mr-1" />
            <span className="sr-only">Phone:</span> +234 703 670 8999
          </Link>
          
          <Link href="mailto:techinclusion112@gmail.com" className="hover:text-blue-500 flex items-center space-x-2">
            <FaMailBulk className="h-5 w-5 mr-1" />
            <span className="sr-only">Email:</span>techinclusion112@gmail.com 
          </Link>
        
          <div className="flex space-x-4">
            <Link href="https://web.facebook.com/thetidi/" className="hover:text-blue-500" aria-label="Facebook"><FaFacebook className="h-5 w-5" /></Link>
            <Link href="https://x.com/the_tidi" className="hover:text-blue-500" aria-label="Twitter/X"><FaTwitter className="h-5 w-5" /></Link>
            <Link href="https://www.linkedin.com/company/tech-inclusion-for-the-deaf-initiative" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin className="h-5 w-5" /></Link>
            <Link href="https://www.instagram.com/techinclusiondeafinitiative" className="hover:text-blue-500" aria-label="Instagram"><FaInstagram className="h-5 w-5"/></Link>
          </div>
        </div> */}
      <div className="container mx-auto flex items-center justify-between px-4 mt-2 md:px-0"> {/* Added margin-top */}
        <Link href="/" aria-label="Home">
           {/* TIDI Logo or Name */}
           <Image
            src="/assets/images/TIDI logo.png"  // Replace with the actual path to your logo image
            alt="TIDI Logo"
            width={70}
            height={70}
          />  
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => renderNavLink(link))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className='h-6 w-6' />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto"> {/* Fixed position, full-screen */}
            <div className="p-4"> {/* Added padding */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-gray-800 hover:text-blue-500 float-right focus:outline-none" 
                aria-label="Close Mobile Menu"
              >
                <XIcon className="h-6 w-6" />
              </button>
              <nav className="flex flex-col space-y-4 mt-8"> {/* Added margin-top */}
                {navLinks.map(link => renderNavLink(link))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
