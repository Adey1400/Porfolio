import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const fullText = `I’m actively looking for opportunities where I can contribute and grow. Please feel free to reach out if you have any openings or collaborations in mind.`;
  const [typedText, setTypedText] = useState("");
  const [startedTyping, setStartedTyping] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartedTyping(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startedTyping) return;

    let currentIndex = 0;
    setTypedText(""); // reset

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [startedTyping]);

  return (
    <div className="w-full py-10 px-4 flex flex-col items-center text-center bg-white">
      {/* Section Header */}
      <div className="w-full max-w-5xl flex items-center justify-center mb-8 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-700 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          Contact
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Contact Message */}
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 px-4 text-gray-700 mb-6">
        <p ref={textRef} className="text-sm sm:text-base md:text-lg leading-relaxed">
          {typedText || fullText[0]}
        </p>
      </div>

      {/* Write Message Button */}
      <button
        className="mb-6 border border-gray-300 text-sm sm:text-base text-gray-800 px-6 py-2 rounded shadow-sm 
                   hover:bg-gray-300 hover:scale-105 transition duration-200 ease-in-out"
      >
        Write message
      </button>

      {/* Social Icons */}
      <div className="flex gap-4 flex-wrap justify-center">
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
