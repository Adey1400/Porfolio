import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const fullText = `I’m actively looking for opportunities where I can contribute and grow in backend engineering, distributed systems, and scalable product development.`;
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
    <div className="w-full py-20 px-4 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Header */}
      <div className="w-full max-w-5xl flex items-center justify-center mb-12 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
        <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
          Contact
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
      </div>

      {/* Contact Message */}
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 px-4 text-gray-700 dark:text-gray-300 mb-8">
        <p ref={textRef} className="text-lg sm:text-xl leading-relaxed font-medium">
          {typedText || fullText[0]}
        </p>
      </div>

      {/* Write Message Button */}
      <a
        href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-12 rounded-xl bg-gray-900 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-400"
      >
        Let’s Connect
      </a>

      {/* Social Icons */}
      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href="https://github.com/Adey1400"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300
              hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-sm"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/subhankito.roychoudhury"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300
              hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-sm"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/subhankito-roy-choudhury-96144a314/recent-activity/all/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300
              hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-sm"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/_._.adeyy._/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300
              hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-sm"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
