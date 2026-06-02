import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
  FaLocationArrow,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";

const fieldGroups = [
  {
    title: "Frontend",
    icon: FaReact,
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
    note: "Interfaces, motion, layout systems, and responsive user experiences.",
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    items: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "JWT"],
    note: "API design, server logic, authentication, and scalable service layers.",
  },
  {
    title: "Database",
    icon: FaDatabase,
    accent: "from-violet-400 via-fuchsia-500 to-pink-600",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Data Modeling",
      "CRUD",
      "Aggregation",
    ],
    note: "Relational and NoSQL data design with practical query patterns.",
  },
  {
    title: "Tools",
    icon: FaGitAlt,
    accent: "from-amber-400 via-orange-500 to-rose-500",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Postman",
      "Vercel",
      "Railway",
      "Figma",
      "VS Code",
    ],
    note: "Delivery, collaboration, deployment, and product workflow tooling.",
  },
];

const highlights = [
  "Build responsive and user-friendly web applications",
  "Develop RESTful APIs and integrate databases",
  "Write clean, maintainable, and efficient code",
  "Collaborate in teams and deliver quality solutions",
];

const projects = [
  {
    title: "StayMate – Boarding House System",
    status: "Completed",
    summary:
      "A full-stack system for tenant, room, meal, and financial management designed to streamline daily boarding operations.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/sithira-janiya/stay_mate.git",
    live: null,
  },
  {
    title: "NextStep — Job Portal Management System",
    status: "Live",
    summary:
      "A campus job portal platform with notice, notification, and complaints workflows plus a modern frontend experience.",
    tags: ["Node.js", "PostgreSQL", "Next.js", "Tailwind CSS"],
    github: "https://github.com/sithira-janiya/The-NextStep-Platform.git",
    live: "https://the-nextstep-platform-production.up.railway.app/",
  },
  {
    title: "Smart Campus Operations Hub",
    status: "Completed",
    summary:
      "A full-stack campus operations platform with role-based workflows for tickets, bookings, and administrative operations.",
    tags: ["Spring Boot", "React", "TypeScript", "PostgreSQL"],
    github:
      "https://github.com/sithira-janiya/it3030-paf-2026-smart-campus-group-PAF_WE_03_02.git",
    live: null,
  },
  {
    title: "Smart Parking Management System",
    status: "Processing",
    summary:
      "An in-progress parking project focused on vehicle check-in/out, slot tracking, and time-based fee calculation.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/sithira-janiya/smart-parking-system.git",
    live: null,
  },
  {
    title: "Lab System",
    status: "Processing",
    summary:
      "A current work-in-progress lab system project being shaped for structured workflows and practical lab operations.",
    tags: ["In Progress", "GitHub", "System Design"],
    github: "https://github.com/sithira-janiya/lab-system.git",
    live: null,
  },
];

const contacts = [
  {
    label: "GitHub",
    value: "sithira-janiya",
    href: "https://github.com/sithira-janiya",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "sithira-janiya",
    href: "https://www.linkedin.com/in/sithira-janiya",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "sithirajaniya87@gmail.com",
    href: "mailto:sithirajaniya87@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+94 70 417 4576",
    href: "tel:+94704174576",
    icon: FaPhoneAlt,
  },
];

function PortfolioShowcase() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  const handleHeroPointerLeave = () => {
    setCursor((current) => ({ ...current, active: false }));
  };

  return (
    <main className="portfolio-shell">
      <section
        id="top"
        className="hero-panel"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Full Stack Developer</p>

            <h1 className="hero-title">
              <span className="hero-title-accent">Looking for Internship</span>
              Clean systems. Strong UI. Practical delivery.
            </h1>

            <p className="hero-subtitle">
              I am Sithira Janiya, an IT undergraduate building modern React
              frontends, scalable APIs, and deploy-ready web apps. This layout
              is tuned for clarity, polish, and a clean Vercel deployment.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                <FaArrowRight /> View Projects
              </a>
              <a
                className="btn btn-secondary"
                href="/Sithira_Janiya_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf /> Open CV
              </a>
              <a
                className="btn btn-tertiary"
                href="https://github.com/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                className="btn btn-tertiary"
                href="https://www.linkedin.com/in/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-card">
                <span className="meta-label">GitHub</span>
                <span className="meta-value">github.com/sithira-janiya</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">LinkedIn</span>
                <span className="meta-value">
                  linkedin.com/in/sithira-janiya
                </span>
              </div>
            </div>

            <div className="hero-bars">
              <div className="hero-bar">
                <span className="hero-bar-line" />
                <span className="hero-bar-copy">
                  Passionate about building scalable web applications and
                  solving real-world problems.
                </span>
              </div>
            </div>

            <div className="stack-grid">
              <h2 className="stack-title">What I Do</h2>
              <ul className="check-list">
                {highlights.map((item) => (
                  <li key={item} className="check-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-panel">
              <svg
                className="hero-visual-image"
                viewBox="0 0 1000 1400"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="profileClip">
                    <path d="M140,50 C330,10 670,10 860,50 C980,180 930,700 820,1100 C700,1350 300,1350 180,1100 C60,700 40,180 140,50 Z" />
                  </clipPath>
                </defs>
                <image
                  href="/profile-cutout.png"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#profileClip)"
                />
              </svg>

              <div
                className={`cursor-ripple ${cursor.active ? "is-active" : ""}`}
                style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}
              />
              <div className="hero-visual-badge">
                <span className="portrait-chip-dot" />
                Available for internship and freelance work
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell content-panel" id="stack">
        <div className="section-grid">
          <div className="section-heading">
            <span className="section-kicker">Tech Stack</span>
            <h2 className="section-title">
              Professional skills grouped by field
            </h2>
            <p className="section-lead">
              The stack is organized the way recruiters read it: frontend,
              backend, database, and tools.
            </p>
          </div>

          <div className="field-grid">
            {fieldGroups.map((field) => {
              const Icon = field.icon;
              return (
                <article key={field.title} className="field-card glass-card">
                  <div className={`field-icon ${field.accent}`}>
                    <Icon />
                  </div>
                  <h3 className="field-title">{field.title}</h3>
                  <p className="field-note">{field.note}</p>
                  <div className="chip-row">
                    {field.items.map((item) => (
                      <span key={item} className="skill-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="profile-links glass-card">
            <div>
              <span className="section-kicker">Professional Presence</span>
              <h3 className="field-title" style={{ marginTop: 10 }}>
                GitHub and LinkedIn kept visible for quick review
              </h3>
            </div>
            <div className="profile-links-row">
              <a
                className="mini-link"
                href="https://github.com/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                className="mini-link"
                href="https://www.linkedin.com/in/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                className="mini-link"
                href="/Sithira_Janiya_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf /> CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell content-panel" id="projects">
        <div className="section-grid">
          <div className="section-heading">
            <span className="section-kicker">Projects</span>
            <h2 className="section-title">
              Featured work and active processing projects
            </h2>
            <p className="section-lead">
              The list includes the NextStep live deployment and the current
              processing projects you asked to surface.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card glass-card">
                <div className="project-head">
                  <div>
                    <span
                      className={`project-status ${project.status.toLowerCase()}`}
                    >
                      {project.status}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <FaExternalLinkAlt className="project-head-icon" />
                </div>

                <p className="project-copy">{project.summary}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className="btn btn-secondary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live ? (
                    <a
                      className="btn btn-primary"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLocationArrow /> Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell content-panel" id="contact">
        <div className="section-grid">
          <div className="section-heading">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">
              Use the CV, GitHub, and LinkedIn links directly
            </h2>
            <p className="section-lead">
              These are the exact links a recruiter or collaborator will need
              first.
            </p>
          </div>

          <div className="contact-grid">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const isInline =
                contact.label === "Email" || contact.label === "Phone";
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={isInline ? "_self" : "_blank"}
                  rel={isInline ? undefined : "noreferrer"}
                  className="glass-card contact-card"
                >
                  <span className="contact-label">
                    <Icon />
                    {contact.label}
                  </span>
                  <h3 className="service-title" style={{ marginTop: 14 }}>
                    {contact.value}
                  </h3>
                </a>
              );
            })}
          </div>

          <div className="glass-card">
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href="/Sithira_Janiya_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf /> View CV
              </a>
              <a
                className="btn btn-secondary"
                href="https://github.com/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Open GitHub
              </a>
              <a
                className="btn btn-tertiary"
                href="https://www.linkedin.com/in/sithira-janiya"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> Open LinkedIn
              </a>
            </div>
          </div>

          <div className="divider" />
          <div className="footer-strip">
            © 2026 Sithira Janiya. Built with React and Tailwind CSS, ready for
            Vercel deployment.
          </div>
        </div>
      </section>
    </main>
  );
}

export default PortfolioShowcase;
