import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rishav",
  description: "Learn about my background, experience, and skills",
  openGraph: {
    title: "About | Rishav",
    description: "Learn about my background, experience, and skills",
    type: "website",
  },
};

export default function About() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    "DevOps & Tools": ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    "Other": ["Problem Solving", "Agile", "Team Collaboration", "Technical Writing"],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Data Engineer with 2.5 years of experience in designing, developing, and maintaining data pipelines and ETL processes.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">My Story</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            I started my journey in web development with a passion for solving complex problems and creating intuitive user experiences. Over the past 5 years, I've worked with startups and established companies to build scalable web applications that make a real impact.
          </p>
          <p>
            My expertise spans the full stack—from building responsive frontends with React to designing robust backends with Node.js. I'm committed to writing clean, maintainable code and staying current with emerging technologies.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring junior developers. I believe in continuous learning and sharing knowledge with the community.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            {
              role: "Data Engineer",
              company: "Principal Global Services",
              period: "October 2024 - Present",
              description: "Built and maintained multiple production applications using AWS and Python. Implemented CI/CD pipelines.",
            },
            {
              role: "Trainee Engineer",
              company: "Principal Global Services",
              period: "July 2023 - September 2024",
              description: "Developed and maintained data pipelines and ETL processes. Mentor junior developers and conduct code reviews.",
            },
            {
              role: "Intern",
              company: "Principal Global Services",
              period: "January 2023 - June 2023",
              description: "Developed frontend components and data processes and participated in code reviews. Learned best practices in data engineering.",
            },
          ].map((job, idx) => (
            <div key={idx} className="border-l-2 border-blue-600 dark:border-blue-400 pl-6">
              <h3 className="text-lg font-bold">{job.role}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{job.period}</p>
              <p className="text-slate-700 dark:text-slate-300">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
