import React, { useEffect, useState } from 'react';
import Resume from '../assets/Resume .pdf';

function Home() {
  const phrases = ['Backend Developer', 'Java Developer', 'Spring Boot Developer', 'Microservices Enthusiast'];
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 55 : 85;
    const pauseDuration = 1200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else if (currentText.length > 0) {
        setCurrentText(currentPhrase.slice(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hi, I'm Subhankito Roy Choudhury
      </div>
      <div className="py-3 text-sm sm:text-base md:text-lg lg:text-xl min-h-[1.6em] text-gray-500 dark:text-gray-400">
        <span className="typing-line">
          <span>{currentText}</span>
          <span className="typing-cursor" />
        </span>
      </div>
      <p className="max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400">
        I build reliable backend services, REST APIs, and distributed systems with Java, Spring Boot, and modern cloud tooling.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm font-medium">
        <span className="tech-pill text-orange-500 dark:text-orange-400">Java</span>
        <span className="tech-pill text-emerald-600 dark:text-emerald-400">Spring Boot</span>
        <span className="tech-pill text-sky-600 dark:text-sky-400">Microservices</span>
        <span className="tech-pill text-purple-600 dark:text-purple-400">Redis</span>
        <span className="tech-pill text-blue-600 dark:text-blue-400">PostgreSQL</span>
        <span className="tech-pill text-amber-600 dark:text-amber-400">Docker</span>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-gray-900 dark:hover:bg-blue-400"
        >
          View Projects
        </a>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
