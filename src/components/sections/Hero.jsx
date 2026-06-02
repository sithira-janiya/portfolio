import React from "react";

function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4 py-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-purple-500 bg-opacity-20 border border-purple-400 rounded-full text-sm font-medium text-purple-300">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Sithira Janiya
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
          IT Undergraduate | Full Stack Developer
        </h3>

        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          I build scalable web applications using React, Node.js, and Spring
          Boot. Passionate about creating elegant solutions to complex problems.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white rounded-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
