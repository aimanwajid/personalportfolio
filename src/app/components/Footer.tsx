import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Aiman wajid. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
        
         
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;