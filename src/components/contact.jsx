import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function Contact() {
  return (
    <div className="w-full h-80  flex flex-col items-center  px-4 text-center">
      <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center my-15 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-600 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          Contact
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="w-[45%] flex flex-col items-center justify-center">
        <span>
          I’m actively looking for opportunities where I can contribute and
          grow. Please feel free to reach out if you have any openings or
          collaborations in mind.
        </span>
        <button
          className=" w-1/3 my-5 border border-gray-300 text-xs sm:text-sm md:text-base text-gray-800 px-3 sm:px-4 py-1 sm:py-2 rounded shadow-sm 
                             hover:bg-gray-300 hover:scale-105 transition duration-200 ease-in-out"
        >
          Write message
        </button>
      </div>
      {/* Social Icons */}
      <div className="flex gap-5 mb-4">
        <a
          href="https://github.com/Adey1400"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 
                hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
        >
          <FaGithub className="w-4 h-4" />
        </a>

        <a
          href="https://www.facebook.com/subhankito.roychoudhury"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full  text-gray-600
                hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
        >
          <FaFacebookF className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-gray-600
               hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>

        <a
          href="https://www.instagram.com/_._.adeyy._/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center border  border-gray-400 rounded-full text-gray-600
              hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
        >
          <FaInstagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
