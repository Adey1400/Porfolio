import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiC, SiGithub, SiMongodb, SiExpress , SiAppwrite
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "C", icon: <SiC size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
   { name: "Appwrite", icon: <SiAppwrite size={40} /> },
];

const Skills = () => {
  return (
    <section className="bg-white text-gray-700 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
         <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center my-6 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-600 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          My Skills
        </span>
     <div className="flex-grow border-t border-gray-300"></div>
      </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-300 hover:text-gray-900"
            >
              <div>{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;