import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 py-20">
        {/* Hero Section */}
        <section className="text-center md:text-left space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rishav</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Data Engineer with 3.5 years of experience in building cloud-based, data-centric applications using Python, AWS 
(Lambda, Glue, S3, CDK), and automation frameworks. Passionate about applying machine learning fundamentals to 
develop intelligent, scalable solutions. Strong in data structures, backend development, Big Data and cloud 
infrastructure, with a keen interest on AI-driven platform development and data integrity.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* What I Enjoy Building */}
        <section className="space-y-4 py-8 border-y border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold">What I Enjoy Building</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Reliable data pipelines</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Clear, dependable workflows that are easier to understand and maintain.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Cloud automation</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Cloud-based processes that reduce repetitive work and scale with changing needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Useful data platforms</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Tools and foundations that help teams work with data more confidently.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "PySpark",
              "Azure Devops",
              "Git",
              "AWS",
              "Python CDK",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
