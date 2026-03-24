import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Rishav",
  description: "View my portfolio of web development projects and case studies",
  openGraph: {
    title: "Projects | Rishav",
    description: "View my portfolio of web development projects and case studies",
    type: "website",
  },
};

export default function Projects() {
  const projects = [
    {
      title: "Weather DashBoard",
      description:
        "Interactive weather dashboard displaying real-time weather data, location search, hourly forecasts, and automatic updates every 5 minutes.",
      tags: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "Vercel"],
      demoUrl: "https://weather-dashboard-japan.vercel.app/",
      githubUrl: "https://github.com/TackyEye/weather-dashboard-japan/",
    },
    {
      title: "Project Management App",
      description:
        "Collaborative project management tool with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive dashboard.",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript", "WebSockets"],
      demoUrl: "https://example.com/pm-app",
      githubUrl: "https://github.com/rishav/pm-app",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard for tracking website metrics. Built with React, features interactive charts, data filtering, and automated reports.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://example.com/analytics",
      githubUrl: "https://github.com/rishav/analytics-dashboard",
    },
    {
      title: "Content Management System",
      description:
        "Headless CMS built with Next.js and MongoDB. Provides a REST API for managing blog content, user authentication, and publishing workflows.",
      tags: ["Next.js", "MongoDB", "Node.js", "JWT", "Docker"],
      demoUrl: "https://example.com/cms",
      githubUrl: "https://github.com/rishav/cms",
    },
    {
      title: "Social Media Feed",
      description:
        "Social platform with user authentication, posts, comments, and real-time notifications. Implemented with React and Node.js with WebSocket support.",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Redux"],
      demoUrl: "https://example.com/social",
      githubUrl: "https://github.com/rishav/social-feed",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          A selection of projects I've built showcasing my skills and expertise
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
