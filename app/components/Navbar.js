"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-indigo-600 font-bold text-xl cursor-pointer">
                Portofolio
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#about">
                <span className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="#skills">
                <span className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                  Skills
                </span>
              </Link>
              <Link href="#services">
                <span className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="#portfolio">
                <span className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                  Portfolio
                </span>
              </Link>
              <Link href="#contact">
                <span className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <div className="flex flex-col space-y-2">
            <Link href="#about">
              <span
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium block cursor-pointer"
              >
                About
              </span>
            </Link>
            <Link href="#skills">
              <span
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium block cursor-pointer"
              >
                Skills
              </span>
            </Link>
            <Link href="#services">
              <span
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium block cursor-pointer"
              >
                Services
              </span>
            </Link>
            <Link href="#portfolio">
              <span
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium block cursor-pointer"
              >
                Portfolio
              </span>
            </Link>
            <Link href="#contact">
              <span
                onClick={toggleMenu}
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium inline-block cursor-pointer"
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
