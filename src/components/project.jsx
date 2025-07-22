import React from "react";

import dataWallpaper from "../assets/Data-HD-Wallpaper.jpg";
import weatherIcon from "../assets/Google-Weather-icon.avif";
import BlogImage from "../assets/photo-1515378791036-0648a3ef77b2.jpeg";
import Password from "../assets/thumb_720_450_f_7.jpg";
import ChatImage from "../assets/webchat-online.png";
import ToDoImage from "../assets/ToDo.jpg";
import contactImage from "../assets/Contact.jpg";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Contact Manager App",
    tech: "React, Appwrite, Tailwind CSS",
    image: contactImage,
    description: "A full-stack contact manager with real-time updates, private user-based CRUD operations using Appwrite, and toast notifications. Built with React and styled using Tailwind.",
    github: "https://github.com/Adey1400/Contact_page",
    demo: "https://contact-page-blue-theta.vercel.app", 
  },
  {
    name: "Password Generator",
    tech: "React, Tailwind CSS",
    image: Password,
    description: "A customizable password generator with copy functionality and a clean, animated UI.",
    github: "https://github.com/Adey1400/password_generator",
    demo: "https://password-generator-rosy-alpha.vercel.app",
  },
  {
    name: "Todo App",
    tech: "React, Redux Toolkit, Tailwind CSS",
    image: ToDoImage,
    description: "A clean and responsive Todo app with state management using Redux Toolkit, data persistence with local storage, and animated UI for smooth user interactions.",
    github: "https://github.com/Adey1400/To_Do",

  },
  {
    name: "React Blog App (Phase 1)",
    tech: "React, Vite, Appwrite, Tailwind CSS",
    image: BlogImage,
    description: "A full-stack blog app with authentication using Appwrite, protected routes, responsive UI, and Vercel deployment. Database integration coming soon!",
    github: "https://github.com/Adey1400/react-blog-app",
    demo: "https://simple-blog-ochre.vercel.app/login",
  },
  {
    name: "Dummy Data Generator",
    tech: "MongoDB, Mongoose, Express.js",
    image: dataWallpaper,
    description: "A backend API that seeds and returns dummy data for development and testing.",
    github: "https://github.com/Adey1400/DummyJobGenerator",
  },
  {
    name: "ChatBox App",
    tech: "React, Appwrite, Tailwind CSS",
    image: ChatImage,
    description: "A real-time chat application with public messaging room, typing indicator, and secure user authentication. Built using Appwrite for backend services and React for UI with Tailwind styling.",
    github: "https://github.com/Adey1400/ChatBox",
    demo: "https://chat-box-two-iota.vercel.app",
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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
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
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500 italic mb-1">
                {project.tech}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-800 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 mr-2"
              >
                📁 GitHub Repo
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-800 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
