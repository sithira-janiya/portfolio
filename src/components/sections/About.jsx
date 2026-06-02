import React from "react";

function About() {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              Education
            </h3>
            <p className="text-gray-700">
              IT Undergraduate focused on software development and modern web
              technologies
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-900">
              Experience
            </h3>
            <p className="text-gray-700">
              Full stack development with React, Node.js, and Spring Boot
              technologies
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Goal</h3>
            <p className="text-gray-700">
              Seeking internship opportunities to grow and contribute as a
              skilled developer
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-8 rounded-xl border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am an IT undergraduate passionate about full stack development. I
            enjoy building scalable web applications using modern technologies
            like React, Node.js, and Spring Boot. My goal is to create elegant,
            efficient solutions that solve real-world problems. I am currently
            seeking an internship opportunity to grow, learn, and contribute as
            a dedicated developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
