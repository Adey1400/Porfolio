import React from 'react';

function Home() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[90vh] flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        Hi, I'm Subhankito Roy Choudhury
      </div>
      <div className="py-3 text-sm sm:text-base md:text-lg lg:text-xl typewriter-text text-gray-500 dark:text-gray-400">
        Designing and building responsive, user-friendly websites.
      </div>
    </div>
  );
}

export default Home;
