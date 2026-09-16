// ============================================================
// PROJECTS
// To add a new project:
// 1. Put a screenshot in /public/projects/ (e.g. myproject.png)
// 2. Copy an object below and fill in the fields
// 3. Leave liveUrl or githubUrl as "" if you don't have one yet
// ============================================================

const projects = [
  {
    title: "Quiz Master Platform",
    description:
      "A full-stack quiz platform with secure login, an analytics dashboard and animated result screens. Built end to end, from the database to the UI.",
    image: "/Quiz.png",
    technologies: ["JavaScript", "Express.js", "MongoDB", "JWT Auth"],
    category: "Full Stack",
    liveUrl: "https://quiz-test-delta.vercel.app",
    githubUrl: "",
    isLive: true,
  },
  {
    title: "React TypeScript Web App",
    description:
      "A modern web application built with React and TypeScript, focused on clean, responsive UI components and deployed to production on Vercel.",
    image: "/NikAnk.png",
    technologies: ["React", "TypeScript", "Vercel"],
    category: "Web App",
    liveUrl: "https://real-project-nik-ank.vercel.app",
    githubUrl: "",
    isLive: true,
  },
  {
    title: "More Projects on GitHub",
    description:
      "Explore my full collection of web apps, experiments, UI builds, and full-stack work with source code, demos, and project updates.",
    image: "/Github.png",
    technologies: ["GitHub", "Frontend", "Full Stack", "Projects"],
    category: "Websites",
    liveUrl: "",
    githubUrl: "https://github.com/Nikhil-Singh-dev",
    isLive: false,
  },
];

export const categories = ["All", "Websites", "Web App", "E-commerce", "Full Stack", "Other"];

export default projects;
