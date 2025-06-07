import React from "react";
import { useState,useEffect } from "react";
import profileImage from '../assets/profile.png';



const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or default to false
    return localStorage.getItem("darkMode") === "true" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    

    <nav className="w-screen bg-white shadow">
        
      <div className="flex items-center px-4 py-3 sm:px-6 md:py-4 max-w-screen-xl mx-auto w-full relative">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img className="w-8 sm:w-10" src={profileImage} alt="Logo" />
          </a>
        </div>

        {/* Center - Nav links */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6 text-sm sm:text-base text-center">
            <li>
              <a href="#home" className="hover:text-gray-400 whitespace-nowrap">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400 whitespace-nowrap">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-400 whitespace-nowrap">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 whitespace-nowrap">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 whitespace-nowrap">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right - Buttons */}
        <div className="flex-shrink-0 flex justify-end space-x-1 sm:space-x-3 ml-auto min-w-[120px]">
          <button className="border border-gray-300 text-xs sm:text-sm md:text-base text-gray-800 px-2 sm:px-4 py-1 sm:py-2 rounded shadow-sm 
                             hover:bg-gray-300 hover:scale-105 transition duration-200 ease-in-out whitespace-nowrap">
            Resume
          </button>
          <button className="border border-gray-300 text-xs sm:text-sm md:text-base text-gray-800 px-2 sm:px-4 py-1 sm:py-2 rounded shadow-sm 
                             hover:bg-gray-300 hover:scale-105 transition duration-200 ease-in-out whitespace-nowrap">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
