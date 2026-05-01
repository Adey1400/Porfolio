import React from "react";
import { GrCertificate } from "react-icons/gr";
import Certificate1 from "../assets/UC-3f88a336-33eb-48fe-819d-a0b4c42d5bf8.pdf";

const Certificates = () => {
  const certificates = [
    {
      title: "Udemy Course Completion",
      issuer: "Udemy",
      file: Certificate1,
    },

  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center mb-12 px-4 sm:px-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
          <span className="mx-6 text-gray-800 dark:text-gray-100 text-3xl sm:text-4xl font-bold tracking-tight">
            Certificates
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col"
            >
              {/* PDF Preview Container */}
              <div className="relative w-full h-72 sm:h-80 bg-gray-50 dark:bg-gray-800 overflow-hidden border-b border-gray-100 dark:border-gray-800">
                <iframe
                  src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-none scale-[1.02]"
                  title={cert.title}
                ></iframe>
                {/* Invisible overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Info Container */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <GrCertificate size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Issued by: <span className="text-gray-700 dark:text-gray-300">{cert.issuer}</span>
                  </p>
                </div>
                
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 font-medium text-sm self-start"
                >
                  Open Full Document
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
