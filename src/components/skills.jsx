import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaServer, FaLink
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPostgresql, SiGithub, SiMongodb, SiSpringboot, SiPostman, SiHibernate
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "REST APIs", icon: <FaServer size={40} /> },
  { name: "JPA/Hibernate", icon: <SiHibernate size={40} /> },
  { name: "WebSockets", icon: <FaLink size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center mb-12 px-4 sm:px-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
          <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
            My Skills
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 group"
            >
              <div className="mb-3 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.icon}
              </div>
              <p className="text-sm font-medium tracking-wide text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;