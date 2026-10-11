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
      title: "Sales ETL and Analytics",
      description:
        "PySpark ETL pipeline that cleans sales data, calculates revenue metrics, and analyzes regional, product, and monthly sales trends.",
      tags: ["Python", "PySpark", "ETL", "Data Analytics", "CSV"],
      demoNotice:
        "This project runs locally. Clone the repository, install dependencies with pip install -r requirements.txt, then run spark-submit ./src/main.py (or python ./src/main.py) from the project folder.",
      githubUrl: "https://github.com/TackyEye/sales-etl-analytics",
    },
    {
      title: "Weather DashBoard",
      description:
        "Interactive weather dashboard displaying real-time weather data, location search, hourly forecasts, and automatic updates every 5 minutes.",
      tags: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "Vercel"],
      demoUrl: "https://weather-dashboard-japan.vercel.app/",
      githubUrl: "https://github.com/TackyEye/weather-dashboard-japan/",
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
