import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaFilePdf,
} from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      label: "GitHub",
      value: "sithira-janiya",
      href: "https://github.com/sithira-janiya",
      icon: FaGithub,
      color: "from-gray-800 to-gray-900",
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/sithira-janiya",
      href: "https://www.linkedin.com/in/sithira-janiya",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-700",
    },
    {
      label: "Email",
      value: "sithirajaniya87@gmail.com",
      href: "mailto:sithirajaniya87@gmail.com",
      icon: FaEnvelope,
      color: "from-rose-500 to-pink-600",
    },
    {
      label: "Phone",
      value: "+94 70 41 74 576",
      href: "tel:+94704174576",
      icon: FaPhoneAlt,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Reach out through GitHub, LinkedIn, email, or phone. You can also
            open my CV directly below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Phone" || item.label === "Email"
                    ? "_self"
                    : "_blank"
                }
                rel={
                  item.label === "Phone" || item.label === "Email"
                    ? undefined
                    : "noreferrer"
                }
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-lg`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition">
                      {item.value}
                    </h3>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/Sithira_Janiya_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
          >
            <FaFilePdf /> View CV
          </a>
          <a
            href="https://github.com/sithira-janiya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
          >
            <FaGithub /> Open GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
