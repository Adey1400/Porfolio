import React, { useEffect } from "react";
import Profilephoto from "../assets/ProfileImage.jpg";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      elements.forEach((el) => observer.observe(el));
    }, 100);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors duration-300">
      {/* Divider Heading */}
      <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center mb-12 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
          About Me
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-5xl mx-auto my-8 gap-8 md:gap-12 px-4 sm:px-6 items-center">
        {/* Text block */}
        <div className="md:w-1/2 space-y-5 text-left text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700">
            Hi, I'm Subhankito Roy Choudhury.
          </p>

          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            I'm an Information Technology student passionate about backend engineering and distributed systems.
          </p>

          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            I specialize in Java, Spring Boot, PostgreSQL, REST APIs and Microservices.
          </p>

          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-300">
            Currently I'm building production-style backend applications using Redis, Docker and NGINX while continuously learning System Design.
          </p>

          <div className="fade-in flex flex-wrap gap-2 opacity-0 translate-y-6 transition-all duration-700 delay-400">
            {['Backend Engineering', 'Distributed Systems', 'Java & Spring Boot', 'System Design'].map((item) => (
              <span key={item} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div className="w-full md:w-1/2 flex justify-center items-center fade-in opacity-0 translate-y-6 transition-all duration-700 delay-150">
          <img
            className="w-full max-w-md rounded-md aspect-square object-cover shadow-lg"
            src={Profilephoto}
            alt="Subhankito"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
