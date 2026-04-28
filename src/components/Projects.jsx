import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "StayMate – Boarding House System",
      subtitle: "Full-stack web application",
      description:
        "StayMate is a full-stack web application built to digitalize and automate boarding house, tenant, room, meal, and financial management. The system supports tenants, landlords, meal providers, and administrators with a modular, role-based, and scalable architecture.",
      role: "Group project - responsible for authentication module",
      tech: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      icon: "🏠",
      github: "https://github.com/sithira-janiya/stay_mate.git",
      live: null,
    },
    {
      title: "NextStep — Job Portal Management System",
      subtitle: "Campus job portal platform",
      description:
        "NextStep is a full-featured job portal management system for campus environments. I contributed to the notification, notice management, and complaints modules. It supports students, companies, career consultants, and campus admins with a REST API backend, Swagger/OpenAPI docs, and a modern Next.js frontend.",
      role: "Group project - contributed to notification, notice management, and complaints modules",
      tech: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "💼",
      github: "https://github.com/sithira-janiya/The-NextStep-Platform.git",
      live: "https://the-nextstep-platform-production.up.railway.app/",
    },
    {
      title: "Smart Campus Operations Hub",
      subtitle: "Campus operations platform",
      description:
        "A full-stack campus operations platform for facilities, bookings, maintenance tickets, notifications, and secure role-based administration. Built for SLIIT IT3030 PAF 2026 with a focus on real-world campus workflows and scalable system design.",
      role: "Group project - contributed to tickets module",
      tech: [
        "Spring Boot",
        "React",
        "TypeScript",
        "Java",
        "PostgreSQL",
        "Vite",
        "JWT",
        "OAuth",
      ],
      color: "from-emerald-500 to-teal-500",
      icon: "🏫",
      github:
        "https://github.com/sithira-janiya/it3030-paf-2026-smart-campus-group-PAF_WE_03_02.git",
      live: null,
    },
    {
      title: "Club Master",
      subtitle: "Club management application",
      description:
        "Club Master is a club management application designed to streamline club administration, member management, and role-based access control. It enables efficient governance by allowing different user roles to interact seamlessly within the platform.",
      role: "Single project",
      tech: ["React", "JavaScript", "Node.js", "Role-based Access"],
      color: "from-orange-500 to-amber-500",
      icon: "🎯",
      github: "https://github.com/sithira-janiya/club-master.git",
      live: null,
    },
    {
      title: "Smart Parking Management System",
      subtitle: "Parking automation system",
      description:
        "A smart parking management system with vehicle check-in and check-out, real-time slot tracking, and time-based fee calculation built using Spring Boot and MySQL.",
      role: "Ongoing project",
      tech: ["Spring Boot", "MySQL", "Java", "REST API"],
      color: "from-slate-600 to-slate-900",
      icon: "🚗",
      github: "https://github.com/sithira-janiya/smart-parking-system.git",
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Showcasing my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.role === "Ongoing project"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {project.role}
                  </span>
                </div>

                <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
                  {project.subtitle}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition font-semibold"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition font-semibold"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
