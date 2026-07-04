import React from "react";

import newsAppImage from "../assets/News.webp";
import BlogImage from "../assets/photo-1515378791036-0648a3ef77b2.jpeg";
import PasswordImage from "../assets/thumb_720_450_f_7.jpg";
import ChatImage from "../assets/webchat-online.png";

import Library from "../assets/Library.jpg"
import AetherVault from "../assets/AetherVault.jpg"
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AetherVault",
    tech: "React, Spring Boot, PostgreSQL, Tailwind CSS, Framer Motion",
    image: AetherVault,
    description:
      "A highly secure, zero-knowledge password manager. Features client-side AES-256 encryption so the backend only stores mathematical blobs. Includes dual authentication (JWT & Google OAuth2) and a dynamic UI.",
    highlights: ["Secure auth", "Zero-knowledge design", "Modern UI"],
    github: "https://github.com/Adey1400/AetherVault",
  },
  {
    name: "Library Management System",
    tech: "React, Spring Boot, PostgreSQL, Tailwind CSS",
    image: Library,
    description:
      "A robust full-stack system featuring secure JWT authentication, role-based dashboards for Librarians and Students, and automated book issuing workflows. Built with a Spring Boot backend.",
    highlights: ["Role-based access", "Workflow automation", "REST APIs"],
    github: "https://github.com/Adey1400/library_management",
  },
  {
    name: "React Blog App",
    tech: "React, Vite, Appwrite, Tailwind CSS",
    image: BlogImage,
    description:
      "A full-stack blog app with Appwrite authentication, protected routes, responsive UI, and blog CRUD functionality. Features include image uploads and rich text editing.",
    highlights: ["Protected routes", "CRUD flows", "Modern UX"],
    github: "https://github.com/Adey1400/react-blog-app",
    demo: "https://simple-blog-ochre.vercel.app/login",
  },
  {
    name: "Newsify - React News App",
    tech: "React, Redux Toolkit, Tailwind CSS, News API",
    image: newsAppImage,
    description:
      "A responsive news application built with React and Redux Toolkit. It features real-time news fetching using News API, smooth category filtering, and modern UI.",
    highlights: ["API-driven UI", "Filtering UX", "Responsive design"],
    github: "https://github.com/Adey1400/Newsify",
    demo: "https://newsify-rho.vercel.app"
  },

  {
    name: "ChatBox App",
    tech: "React, Appwrite, Tailwind CSS",
    image: ChatImage,
    description:
      "A real-time chat application with public messaging room, typing indicator, and secure user authentication. Built using Appwrite for backend services.",
    highlights: ["Real-time chat", "Auth flows", "Interactive UX"],
    github: "https://github.com/Adey1400/ChatBox",
  },
  {
    name: "Password Generator",
    tech: "JavaScript, HTML, CSS",
    image: PasswordImage,
    description:
      "A simple yet powerful password generator tool that allows users to customize length and character types for secure passwords.",
    highlights: ["Security-focused", "Input customization", "Clean UX"],
    github: "https://github.com/Adey1400/Password-Generator",
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
      className={`bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-16 transition-all duration-1000 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-11/12 max-w-6xl mx-auto flex items-center justify-center mb-10">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
        <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
          Featured Projects
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
      </div>

      <p className="mx-auto mb-12 max-w-2xl text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
        I focus on building backend-ready, production-minded applications that combine secure architecture, clean APIs, and polished user experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col"
          >
            {/* Image Section with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm font-medium leading-snug">
                  {project.tech}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>

              {project.highlights && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-50 dark:border-gray-900">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold"
                >
                  <Github size={18} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
