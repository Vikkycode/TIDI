'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, XIcon } from 'lucide-react';
import React, { useState, useEffect, memo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
      {
        label: 'Team', href: '/team', subLinks: [
          { label: 'Key Staff', href: '/team/key-staff' },
          { label: 'State Champions', href: '/team/state-champions' },
        ]
      },
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
  { label: 'Contact', href: '/contact' },
];

interface RenderNavLinkProps extends NavLink {
  pathname: string;
  level?: number;
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  isScrolled: boolean; // Added for dynamic desktop link styling
  activeDropdown?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setActiveDropdown?: (_value: string | null) => void;
  onDesktopItemClick?: () => void;
}

const RenderNavLinkComponent: React.FC<RenderNavLinkProps> = ({
  pathname,
  label,
  href,
  subLinks,
  level = 0,
  closeMobileMenu,
  isMobileMenuOpen,
  isScrolled, // Destructure new prop
  activeDropdown,
  setActiveDropdown,
  onDesktopItemClick,
}) => {
  const router = useRouter();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href)) || (subLinks && subLinks.some(sub => pathname.startsWith(sub.href)));
  const isDropdown = !!subLinks;

  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const handleMobileAccordionToggle = (e: React.MouseEvent) => { // Changed to only MouseEvent
    e.stopPropagation();
    if (isDropdown) {
      setIsMobileSubmenuOpen(prev => !prev); // Use functional update
    }
  };

  const handleMobileDirectLinkClick = () => {
    router.push(href);
    closeMobileMenu();
  };

  const handleDesktopDirectLinkClick = () => {
    if (onDesktopItemClick) onDesktopItemClick();
  };

  // --- Mobile Menu Rendering ---
  if (isMobileMenuOpen) {
    if (isDropdown) {
      return (
        <div className="w-full">
          <button
            onClick={handleMobileAccordionToggle} // Only onClick
            // onTouchStart removed
            className={`flex items-center justify-between w-full text-left space-x-2 cursor-pointer font-medium focus:outline-none py-3 text-sm
              ${isActive ? 'text-blue-500' : 'text-white'} hover:text-blue-300 transition duration-150`}
            aria-expanded={isMobileSubmenuOpen}
          >
            <span>{label}</span>
            <FaChevronDown className={`h-3 w-3 transition-transform duration-200 ${isMobileSubmenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isMobileSubmenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pl-4 mt-1 space-y-1 overflow-hidden border-l border-gray-700"
              >
                {subLinks?.map((subLink) => (
                  <RenderNavLinkComponent
                    key={subLink.label}
                    pathname={pathname}
                    {...subLink}
                    level={level + 1}
                    closeMobileMenu={closeMobileMenu}
                    isMobileMenuOpen={isMobileMenuOpen}
                    isScrolled={isScrolled} // Pass isScrolled (though not used by mobile styles here)
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    } else {
      // Mobile direct link
      return (
        <button
          onClick={handleMobileDirectLinkClick} // Only onClick
          // onTouchStart removed
          className={`block w-full text-left font-medium py-3 text-sm
            ${isActive ? 'text-blue-400' : 'text-white'} hover:text-blue-300 transition duration-150`}
        >
          {label}
        </button>
      );
    }
  }

  // --- Desktop Menu Rendering ---
  // Determine colors based on isScrolled (which implies header background color)
  const desktopBaseTextColor = isScrolled ? 'text-white' : 'text-gray-700'; // Adjusted for bg-white
  const desktopActiveTextColor = isScrolled ? 'text-blue-300' : 'text-blue-600';
  const desktopHoverTextColor = isScrolled ? 'hover:text-blue-300' : 'hover:text-blue-700';


  if (isDropdown && setActiveDropdown) {
    return (
      <DropdownMenu open={activeDropdown === label} onOpenChange={(open) => setActiveDropdown(open ? label : null)}>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center space-x-1 cursor-pointer font-medium focus:outline-none px-3 py-2 text-sm
              ${isActive ? desktopActiveTextColor : desktopBaseTextColor} ${desktopHoverTextColor} transition duration-150`}
          >
            <span>{label}</span>
            <FaChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-black/70 backdrop-blur-md shadow-lg rounded-md p-1 border border-gray-700 mt-2 w-52"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {subLinks?.map((subLink) => (
            <DropdownMenuItem key={subLink.label} asChild className="focus:bg-gray-700 rounded p-0 text-sm">
              <RenderNavLinkComponent
                pathname={pathname}
                {...subLink}
                level={level + 1}
                closeMobileMenu={closeMobileMenu}
                isMobileMenuOpen={false}
                isScrolled={isScrolled} // Pass isScrolled
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                onDesktopItemClick={onDesktopItemClick}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    // Desktop direct link
    return (
      <Link
        href={href}
        className={`font-medium px-3 py-2 focus:outline-none text-sm
          ${isActive ? desktopActiveTextColor : desktopBaseTextColor} ${desktopHoverTextColor} transition duration-150`}
        onClick={handleDesktopDirectLinkClick}
      >
        {label}
      </Link>
    );
  }
};


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  return (
    <header className={`fixed w-full py-2 top-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/70 backdrop-blur-md' : 'bg-white'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" onClick={closeMobileMenu} aria-label="Home">
          <Image src="/assets/images/TIDI logo.png" alt="TIDI Logo" width={60} height={60} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map(link => (
            <div
              key={link.label}
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
              onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
            >
              <RenderNavLinkComponent
                {...link}
                pathname={pathname}
                closeMobileMenu={closeMobileMenu}
                isMobileMenuOpen={false}
                isScrolled={isScrolled} // Pass isScrolled to desktop nav items
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                onDesktopItemClick={() => setActiveDropdown(null)}
              />
            </div>
          ))}
        </nav> {/* Corrected closing tag */}

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none z-50 transition-colors duration-150 ${isScrolled || isMobileMenuOpen ? 'text-white hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <XIcon className='h-7 w-7' /> : <MenuIcon className="h-7 w-7" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 w-full max-w-xs h-screen bg-gray-900 shadow-xl z-50 overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={closeMobileMenu} aria-label="Home">
                  <Image src="/assets/images/TIDI logo.png" alt="TIDI Logo" width={50} height={50} />
                </Link>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map(link => (
                  <RenderNavLinkComponent
                    key={link.label}
                    {...link}
                    pathname={pathname}
                    closeMobileMenu={closeMobileMenu}
                    isMobileMenuOpen={true}
                    isScrolled={isScrolled} // Pass isScrolled (though not directly used by mobile styles here)
                  />
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default memo(Header);
