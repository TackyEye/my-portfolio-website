"use client";

import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  demoNotice?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  demoNotice,
  githubUrl,
}: ProjectCardProps) {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 hover:shadow-blue-500/10 transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {demoUrl && !demoNotice && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        )}
        {demoNotice && (
          <button
            type="button"
            onClick={() => setIsNoticeOpen(true)}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo <ExternalLink size={16} />
          </button>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Source Code <Github size={16} />
          </a>
        )}
      </div>

      {isNoticeOpen && demoNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsNoticeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-demo-notice-title"
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="project-demo-notice-title"
              className="mb-3 text-xl font-bold"
            >
              No hosted demo
            </h2>
            <p className="whitespace-pre-line text-slate-600 dark:text-slate-300">
              {demoNotice}
            </p>
            <button
              type="button"
              onClick={() => setIsNoticeOpen(false)}
              className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
