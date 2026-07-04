import React from "react";
import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLock,
  FaReact,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiHibernate,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava size={24} /> },
      { name: "Spring Boot", icon: <SiSpringboot size={24} /> },
      { name: "Spring Security", icon: <FaShieldAlt size={24} /> },
      { name: "Hibernate", icon: <SiHibernate size={24} /> },
      { name: "JPA", icon: <FaDatabase size={24} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
      { name: "MySQL", icon: <SiMysql size={24} /> },
      { name: "MongoDB", icon: <SiMongodb size={24} /> },
      { name: "Redis", icon: <SiRedis size={24} /> },
    ],
  },
  {
    title: "Microservices",
    skills: [
      { name: "Docker", icon: <FaDocker size={24} /> },
      { name: "NGINX", icon: <SiNginx size={24} /> },
      { name: "REST APIs", icon: <FaServer size={24} /> },
      { name: "JWT", icon: <FaLock size={24} /> },
      { name: "OAuth2", icon: <FaShieldAlt size={24} /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={24} /> },
      { name: "JavaScript", icon: <SiJavascript size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={24} /> },
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "Maven", icon: <FaTools size={24} /> },
      { name: "Postman", icon: <SiPostman size={24} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center mb-12 px-4 sm:px-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
          <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
            My Skills
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-left">
              <div className="mb-5 inline-block rounded-full bg-transparent px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300">
                {category.title}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-transparent px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-900/70"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium tracking-wide text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;