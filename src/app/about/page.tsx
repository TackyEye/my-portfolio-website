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
    "Data Engineering": ["Python", "PySpark", "ETL", "Data Pipelines", "Data Integrity"],
    "Cloud Data Services": ["AWS Glue", "AWS Lambda", "Amazon S3", "AWS CDK"],
    "DevOps & Tools": ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    "Other": ["Problem Solving", "Agile", "Team Collaboration", "Technical Writing"],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Data Engineer with 3.5 years of experience in designing, developing, and maintaining data pipelines and ETL processes.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">My Story</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            I moved into data engineering because I enjoy solving practical problems and building systems that make data more useful. Over the past 3.5 years, I've worked on data pipelines and cloud-based applications, with a focus on reliable, maintainable solutions.
          </p>
          <p>
            I work primarily with Python and AWS services such as Lambda, Glue, and S3, along with automation frameworks. I’m also interested in machine learning fundamentals and AI-driven platforms, especially the engineering that helps keep data dependable.
          </p>
          <p>
            I enjoy making complex data workflows easier to understand and operate, whether that means improving a pipeline or automating a repetitive process. I’m always looking to learn new ways to build scalable systems and maintain data integrity.
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
