import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-pad mt-24">
      <SectionHeading
        label="Projects"
        title="Selected work"
        description="End-to-end builds spanning full-stack web, AI systems, and cloud deployment."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card-surface group flex flex-col rounded-2xl p-6 transition"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300">
              {project.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              <Code2 size={16} />
              View repository
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
