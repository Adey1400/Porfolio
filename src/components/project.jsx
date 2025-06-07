import React from 'react';
import captchaImage from '../assets/CAPTCHA_Alamy.webp';
import dataWallpaper from '../assets/Data-HD-Wallpaper.jpg';
import weatherIcon from '../assets/Google-Weather-icon.avif';
import Tictactoe from '../assets/unnamed.png';
import Password from '../assets/thumb_720_450_f_7.jpg';
import Pizza from '../assets/images.jpeg';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'Pizza Landing Page',
    tech: 'HTML, CSS, JavaScript',
    image: Pizza,
    description: 'A sleek landing page for a fictional pizza brand with engaging UI and smooth interactions.',
    github: 'https://github.com/Adey1400/pizza-landing-page',
  },
  {
    name: 'Password Generator',
    tech: 'React, Tailwind CSS',
    image: Password,
    description: 'A customizable password generator with copy functionality and a clean, animated UI.',
    github: 'https://github.com/Adey1400/password_generator',
  },
  {
    name: 'Captcha Validator',
    tech: 'HTML, CSS, JavaScript',
    image: captchaImage,
    description: 'A functional Captcha generator with refresh option and minimal UI validation.',
    github: 'https://github.com/Adey1400/CAPTCHA',
  },
  {
    name: 'Tic Tac Toe Game',
    tech: 'HTML, CSS, JavaScript',
    image: Tictactoe,
    description: 'Classic tic-tac-toe game with smooth gameplay logic and basic AI support.',
    github: 'https://github.com/Adey1400/tic_tac_toe',
  },
  {
    name: 'Dummy Data Generator',
    tech: 'MongoDB, Mongoose, Express.js',
    image: dataWallpaper,
    description: 'A backend API that seeds and returns dummy data for development and testing.',
    github: 'https://github.com/Adey1400/DummyJobGenerator',
  },
  {
    name: 'Weather App',
    tech: 'HTML, CSS, JS (OpenWeather API)',
    image: weatherIcon,
    description: 'Real-time weather app using OpenWeather API with minimal layout and responsive design.',
    github: 'https://github.com/Adey1400/weather_app',
  },
];


const Projects = () => {
   const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`bg-gray-200 py-12 px-6 md:px-16 transition-opacity duration-[1500ms] ease-in-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center my-6 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-600 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          Projects
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300 text-sm"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.name}</h3>
              <p className="text-xs text-gray-500 italic mb-1">{project.tech}</p>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-800 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                📁 GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Projects;
