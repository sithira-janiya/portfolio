import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

function Navbar() {
  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="text-white font-semibold text-lg tracking-wide"
        >
          Sithira Janiya
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sithira-janiya"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-200 hover:bg-white/10 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sithira-janiya"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-200 hover:bg-white/10 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/Sithira_Janiya.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition shadow-sm"
          >
            <FaFilePdf /> CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
