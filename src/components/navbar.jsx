import React, { useState } from "react";
import profileImage from "../assets/profile.png";
import Resume from "../assets/Resume.pdf";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    console.log("Toggling theme. Current mode:", darkMode ? "Dark" : "Light");
    setDarkMode(!darkMode);
  };

  const navLinks = (
    <>
      <li>
        <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          Projects
        </a>
      </li>
      <li>
        <a href="#certificates" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          Certificates
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap block py-2 sm:py-0 transition-colors">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 shadow-sm text-gray-900 dark:text-gray-100 z-50 transition-colors duration-300 border-b border-gray-100 dark:border-gray-900">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:py-4 max-w-screen-xl mx-auto relative">
        {/* Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="#home">
            <img className="w-8 sm:w-10 rounded-full border border-gray-200 dark:border-gray-800" src={profileImage} alt="Logo" />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks}
        </ul>

        {/* Right - Buttons & Toggle */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-800 shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
          </button>

          <div className="hidden sm:flex space-x-3">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-800 text-sm px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-4 py-2 rounded-xl hover:opacity-90 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none p-1">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
          <ul className="flex flex-col space-y-2 text-sm pt-4">
            {navLinks}
            <li className="pt-4 flex flex-col space-y-3">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-gray-200 dark:border-gray-800 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 rounded-xl transition-opacity"
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
