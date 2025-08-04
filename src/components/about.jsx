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
    <div className="bg-gray-200 py-8 sm:py-12">
      {/* Divider Heading */}
      <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center my-6 px-4 sm:px-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-600 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          About Me
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-5xl mx-auto my-8 gap-8 md:gap-12 px-4 sm:px-6">
        {/* Text block */}
        <div className="md:w-1/2 space-y-6 text-justify text-sm sm:text-base leading-relaxed">
          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700">
            I'm a B.Tech student in Information Technology at Narula Institute of Technology, passionate about building intuitive web applications. I have experience with C, Java, HTML, CSS, JavaScript, and React, and I'm currently focused on becoming a skilled full-stack developer.
          </p>

          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            Alongside web development, I’m learning Data Structures and Algorithms in Java to strengthen my problem-solving skills. I enjoy turning ideas into functional, user-friendly projects and aim to secure a role where I can contribute meaningfully while continuing to grow.
          </p>

          <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            Outside of tech, I enjoy playing guitar, listening to music, and working on creative side projects. I love collaborating with others and believe that learning together builds stronger solutions and better teams.
          </p>
        </div>

        {/* Image block */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full rounded-md aspect-square object-cover"
            src={Profilephoto}
            alt="Subhankito"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
