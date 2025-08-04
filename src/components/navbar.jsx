import React, { useState } from "react";
import profileImage from "../assets/profile.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <a href="#home" className="hover:text-gray-400 whitespace-nowrap block py-2 sm:py-0">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-gray-400 whitespace-nowrap block py-2 sm:py-0">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-gray-400 whitespace-nowrap block py-2 sm:py-0">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-gray-400 whitespace-nowrap block py-2 sm:py-0">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-gray-400 whitespace-nowrap block py-2 sm:py-0">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white shadow text-black">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:py-4 max-w-screen-xl mx-auto relative">
        {/* Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="#home">
            <img className="w-8 sm:w-10" src={profileImage} alt="Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-4 sm:space-x-6 text-sm sm:text-base absolute left-1/2 -translate-x-1/2">
          {navLinks}
        </ul>

        {/* Right - Buttons */}
        <div className="hidden sm:flex justify-end space-x-3 ml-auto">
          <button className="border border-gray-300 text-xs sm:text-sm md:text-base px-3 py-1 rounded hover:bg-gray-300 transition duration-200">
            Resume
          </button>
          <a
            href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-xs sm:text-sm md:text-base px-3 py-1 rounded hover:bg-gray-300 transition duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-sm border-t pt-4">
            {navLinks}
            <li className="pt-2">
              <button className="w-full border border-gray-300 text-sm px-3 py-2 rounded hover:bg-gray-300 transition duration-200">
                Resume
              </button>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-gray-300 text-sm px-3 py-2 rounded hover:bg-gray-300 transition duration-200"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
