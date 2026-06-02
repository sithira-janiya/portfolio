import React from "react";
import { FaAward, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Certificates() {
  const certificates = [
    {
      title: "MongoDB Fundamentals",
      issuer: "MongoDB University",
      description:
        "Comprehensive course covering MongoDB fundamentals including data modeling, CRUD operations, aggregation pipelines, indexing, and MongoDB Atlas.",
      date: "2026",
      icon: SiMongodb,
      color: "from-green-500 to-emerald-500",
      certificateLink:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/59db1da0-c6ca-414c-ac3b-c4c92184b436-it23652200-silva-d-s-j-b1833a1d-3de4-4a95-a905-b7eeb5c3f2b1-certificate.pdf",
      skills: [
        "MongoDB Atlas",
        "Data Modeling",
        "CRUD Operations",
        "Aggregation Pipelines",
        "Database Indexing",
        "MongoDB Java Driver",
        "NoSQL Databases",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Professional certifications and credentials
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 hover:border-purple-200"
              >
                <div className={`h-3 bg-gradient-to-r ${cert.color}`}></div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`bg-gradient-to-br ${cert.color} p-4 rounded-xl text-white text-3xl`}
                      >
                        <IconComponent />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 font-semibold mt-1">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Completed: {cert.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <FaAward className="text-3xl text-yellow-500 opacity-50" />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Skills & Topics:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-medium hover:shadow-lg transition`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition font-semibold shadow-md hover:shadow-lg"
                    >
                      <FaDownload /> View Certificate
                    </a>
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold"
                    >
                      <FaExternalLinkAlt /> Open PDF
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Continuous Professional Development
              </h3>
              <p className="text-gray-700">
                I'm committed to continuous learning and staying updated with
                the latest technologies. Currently expanding expertise in
                MongoDB, NoSQL database design, and advanced data modeling
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
