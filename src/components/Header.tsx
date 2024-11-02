'use client';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import { MenuIcon, XIcon} from 'lucide-react';
import { useState } from 'react';
import { DropdownMenuPortal, DropdownMenuSub } from '@radix-ui/react-dropdown-menu';
import { usePathname } from 'next/navigation';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhone,
  FaLinkedin,
  // FaMailBulk 
} 
  from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io' 

interface NavLink {
  label: string;
  href?: string;
  dropdown?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Who We Are', 
    dropdown: [
      { label: 'About', href: '/about' },
      { 
        label: 'Team', 
        dropdown: [
          { label: 'Key Staff', href: '/team/key-staff' },
          { label: 'State Champions', href: '/team/state-champions' },
        ]
      },
    ]
  },
  { 
    label: 'Our Purpose', 
    dropdown: [
      { label: 'Mission', href: '/purpose/mission' },
      { label: 'Vision', href: '/purpose/vision' },
    ]
  },
  { 
    label: 'Guiding Principles', 
    dropdown: [
      { label: 'Core Values', href: '/principle/values' },
    ]
  },
  { 
    label: 'What We Do', 
    dropdown: [
      { label: 'Key Programs', href: '/programs' },
      { label: 'Services', href: '/services' },
    ]
  },
  { 
    label: 'Donate', 
    href: '/donate' ,
    // Example for a single dropdown item:
    dropdown: [{ label: 'Flutterwave', href: '/donate/flutterwave' }] 
  },
  { label: 'Contact', href: '/contact' },
];



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  
  const renderNavLink = (link: NavLink) => (
    <div key={link.label} className="relative">
      {link.dropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              href={link.href || ''}
              className={`text-gray-600 uppercase flex items-center space-x-4 hover:text-blue-500 transition duration-300
                ${pathname === link.href && 'border-b-4 pb-[18px]  border-blue-500 text-blue-500'}`}
            >
              {link.label}
              <IoMdArrowDropdown className="h-6 w-6 ml-2" />
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-md rounded-none">
            {link.dropdown.map((subLink) => (
              <div key={subLink.label}>
                {subLink.dropdown ? (
                  // Nested Dropdown
                  <DropdownMenu>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className={`text-gray-600 uppercase hover:text-blue-500 transition duration-300
                            ${pathname === subLink.href && 'border-b-4 pb-[18px] border-blue-500 text-blue-500'}`}
                      >
                        {subLink.label}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {subLink.dropdown.map((nestedLink) => (
                            <DropdownMenuItem 
                              key={nestedLink.href} 
                              onClick={() => setIsMobileMenuOpen(false)} // Close on click
                              className="hover:bg-gray-100"
                            >
                              <Link 
                                href={nestedLink.href || ''}
                                className={`text-gray-600 uppercase hover:text-blue-500 transition duration-300
                                  ${pathname === nestedLink.href && 'border-b-4 pb-[18px] border-blue-500 text-blue-500'}`}
                              >
                                {nestedLink.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                  </DropdownMenu>
                ) : (
                  // Regular Link
                  <DropdownMenuItem 
                    key={subLink.href} 
                    onClick={() => setIsMobileMenuOpen(false)} // Close on click
                    className={`text-gray-600 uppercase hover:bg-gray-100 hover:text-blue-500 transition duration-300
                        ${pathname === subLink.href && 'border-b-4 pb-[18px] border-blue-500 text-blue-500'}`}
                  >
                    <Link href={subLink.href || ''}>
                      {subLink.label}
                    </Link>
                  </DropdownMenuItem>
                )}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href={link.href || ''}
          className={`text-gray-600 uppercase hover:text-blue-500 transition duration-300
              ${pathname === link.href && 'border-b-4 pb-[18px] border-blue-500 text-blue-500'}`}
          onClick={() => {
            if (isMobileMenuOpen){
              setIsMobileMenuOpen(false);
            }
          }} // Close on click for top-level links
        >
          {link.label}
        </Link>
      )}
    </div>
  );
  
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container  mx-auto flex items-center justify-between px-4 md:px-0 space-x-6 text-sm text-blue-500">
          {/* Phone */}
          <Link href="tel:+2348160000000" className="hover:text-blue-500 flex items-center space-x-10">
          <FaPhone className="h-8 w-8 pr-5" />
            <span className="sr-only">Phone:</span> +2347036708999
          </Link>
          {/* Email */}
          {/* <Link href="mailto:info@tidi.org" className="hover:text-blue-500 flex items-center space-x-10">
          <FaMailBulk className="h-8 w-8 pr-5" />
            <span className="sr-only">Email:</span> info@tidi.org
          </Link> */}
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://web.facebook.com/thetidi/" className="hover:text-blue-500"><FaFacebook /></Link>
            <Link href="https://x.com/the_tidi" className="hover:text-blue-500"><FaTwitter /></Link>
            <Link href="https://www.linkedin.com/company/tech-inclusion-for-the-deaf-initiative" className="hover:text-blue-500"><FaLinkedin /></Link>
          </div>
        </div>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          TIDI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(renderNavLink)}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >{isMobileMenuOpen ? (
          <XIcon className='h-6 w-6' />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )
        }
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full right-0 bg-white shadow-md uppercase font-bold rounded-none w-full p-4 border border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(renderNavLink)}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
