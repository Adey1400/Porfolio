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
    {
      title: "Professional Certificate",
      issuer: "Certification Authority",
      file: new URL("../assets/Scanned Document 09-04-26 at 6.39.30 PM.pdf", import.meta.url).href,
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-700 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-center my-6 px-4 sm:px-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600 text-2xl sm:text-3xl font-semibold whitespace-nowrap">
            Certificates
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200"
            >
              <div className="p-8 flex flex-col items-center justify-center space-y-4 min-h-64">
                <div className="bg-blue-600 p-4 rounded-full">
                  <GrCertificate size={60} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{cert.issuer}</p>
                </div>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-md hover:shadow-lg"
                >
                  View Certificate
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
