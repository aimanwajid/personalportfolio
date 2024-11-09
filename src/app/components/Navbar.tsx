"use client"; // Client component banane ke liye

import Link from 'next/link';
import Button from '../components/button';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-5 shadow-md fixed top-0 left-0 w-full z-10"> {/* Fixed positioning */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">My Portfolio</h1>
        
        {/* Toggle Button for Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" passHref>
            <Button props="Home" />
          </Link>
          <Link href="/about" passHref>
            <Button props="About" />
          </Link>
          <Link href="/skills" passHref>
            <Button props="Skills" />
          </Link>
          <Link href="/projects" passHref>
            <Button props="Projects" />
          </Link>
          <Link href="/CV-template" passHref>
            <Button props="CV Template" />
          </Link>
          <Link href="/contact" passHref>
            <Button props="Contact" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-wrap justify-center space-x-2 bg-gray-800 p-4 mt-2">
          <Link href="/" passHref>
            <Button props="Home" />
          </Link>
          <Link href="/about" passHref>
            <Button props="About" />
          </Link>
          <Link href="/skills" passHref>
            <Button props="Skills" />
          </Link>
         
          <Link href="/CV-template" passHref>
            <Button props="CV Template" />
          </Link>
          <Link href="/contact" passHref>
            <Button props="Contact" />
          </Link>
        </div>
      )}
    </nav>
  );
}