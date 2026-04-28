import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaFilePdf,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/sithira-janiya",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sithira-janiya",
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: "mailto:sithirajaniya87@gmail.com",
      icon: FaEnvelope,
    },
    { label: "Phone", href: "tel:+94704174576", icon: FaPhoneAlt },
    { label: "CV", href: "/Sithira_Janiya.pdf", icon: FaFilePdf },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold mb-3">Sithira Janiya</h2>
              <p className="text-gray-400 leading-relaxed">
                IT undergraduate and full stack developer focused on building
                clean, practical, and scalable web solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Email" || item.label === "Phone"
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      item.label === "Email" || item.label === "Phone"
                        ? undefined
                        : "noreferrer"
                    }
                    aria-label={item.label}
                    title={item.label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="text-lg transition group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            <div className="text-sm text-gray-500">
              © 2026 Sithira Janiya. Built with React and Tailwind CSS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
