import React from "react";
import {
  FaJava,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGithubactions,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: FaReact,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJsSquare },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "Backend",
      icon: FaNode,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Node.js", icon: FaNode },
      ],
    },
    {
      category: "Database",
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", icon: FaDatabase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: FaGitAlt,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "Docker", icon: FaDocker },
        { name: "Postman (API testing)", icon: SiPostman },
        { name: "CI/CD", icon: FaGitAlt },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={catIndex}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${category.color} p-4 rounded-lg text-white text-2xl mr-4`}
                    >
                      <IconComponent />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:from-blue-50 hover:to-purple-50 transition border border-gray-200 hover:border-blue-300 cursor-pointer group"
                        >
                          <div className="text-2xl text-gray-700 group-hover:text-blue-600 transition">
                            <SkillIcon />
                          </div>
                          <span className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <a
            href="https://github.com/sithira-janiya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition"
          >
            <FaGithub /> View my GitHub profile
          </a>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Continuous Learning
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            I'm always exploring new technologies and frameworks to stay updated
            with the latest industry trends and best practices.
          </p>
        </div>

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Related Projects
            </h3>
            <p className="text-gray-600 mt-2">
              Projects where I applied these technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                StayMate — Boarding House System
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Express
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <a
                href="https://github.com/sithira-janiya/stay_mate.git"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600"
              >
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                NextStep — Job Portal
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
              <a
                href="https://github.com/sithira-janiya/The-NextStep-Platform.git"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600"
              >
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                Smart Campus Operations Hub
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Spring Boot
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  PostgreSQL
                </span>
              </div>
              <a
                href="https://github.com/sithira-janiya/it3030-paf-2026-smart-campus-group-PAF_WE_03_02.git"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600"
              >
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Club Master</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <a
                href="https://github.com/sithira-janiya/club-master.git"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
