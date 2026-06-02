const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Project = require("../models/Project");

dotenv.config();

const projects = [
  {
    title: "StayMate – Boarding House System",
    subtitle: "Full-stack boarding house management platform",
    summary:
      "A MERN-based boarding house management system for tenants, landlords, meal providers, and admins. It supports registration, room management, meal workflows, rent tracking, payment handling, and operational reporting.",
    role: "Group project - contributed to user registration and authentication features",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/sithira-janiya/stay_mate.git",
    liveUrl: "",
    imageUrl: "",
    status: "Completed",
    featured: true,
    displayOrder: 1,
  },
  {
    title: "NextStep — Job Portal Management System",
    subtitle: "Campus job portal platform",
    summary:
      "A job portal management system for campus environments with students, companies, career consultants, and admins. I contributed to notification, notice management, and complaints-related workflows.",
    role: "Group project - contributed to notification, notice management, and complaints modules",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/sithira-janiya/The-NextStep-Platform.git",
    liveUrl: "https://the-nextstep-platform-production.up.railway.app/",
    imageUrl: "",
    status: "Live",
    featured: true,
    displayOrder: 2,
  },
  {
    title: "Smart Campus Operations Hub",
    subtitle: "Campus operations platform",
    summary:
      "A full-stack campus operations platform for facilities, bookings, maintenance tickets, notifications, and secure role-based administration. Built for SLIIT IT3030 PAF 2026 with real-world campus workflows.",
    role: "Group project - contributed to tickets module",
    techStack: [
      "Spring Boot",
      "React",
      "TypeScript",
      "Java",
      "PostgreSQL",
      "JWT",
    ],
    githubUrl:
      "https://github.com/sithira-janiya/it3030-paf-2026-smart-campus-group-PAF_WE_03_02.git",
    liveUrl: "",
    imageUrl: "",
    status: "Completed",
    featured: true,
    displayOrder: 3,
  },
  {
    title: "Smart Parking Management System",
    subtitle: "Parking automation backend",
    summary:
      "A smart parking management system with vehicle check-in and check-out, real-time slot tracking, admin slot management, JWT authentication, and time-based fee calculation.",
    role: "Individual project",
    techStack: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    githubUrl: "https://github.com/sithira-janiya/smart-parking-system.git",
    liveUrl: "",
    imageUrl: "",
    status: "Processing",
    featured: true,
    displayOrder: 4,
  },
  {
    title: "Lab Management System",
    subtitle: "Medical laboratory management platform",
    summary:
      "A MERN-based laboratory management system planned for patient registration, test catalog browsing, booking management, admin test management, and report-related workflows.",
    role: "Individual project - in progress",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/sithira-janiya/lab-system.git",
    liveUrl: "",
    imageUrl: "",
    status: "Processing",
    featured: true,
    displayOrder: 5,
  },
];

const seedProjects = async () => {
  try {
    await connectDB();

    await Project.deleteMany();
    console.log("Old projects removed");

    await Project.insertMany(projects);
    console.log("Projects inserted successfully");

    await mongoose.connection.close();
    console.log("MongoDB connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Seeder error:", error.message);
    process.exit(1);
  }
};

seedProjects();
