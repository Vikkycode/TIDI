import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Example social icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Tech Inclusion Deaf Initiative</h3>
          <p className="text-gray-400">
            Empowering the Deaf community through STEM education.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            {/* Add more links */}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Tech Inclusion Deaf Initiative. All rights reserved.
      </div>
    </footer>
  );
}
