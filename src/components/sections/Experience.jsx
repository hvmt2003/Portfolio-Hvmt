import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-pad mt-24">
      <SectionHeading
        label="Experience"
        title="Professional journey"
        description="Internships where I delivered production impact across full-stack and machine learning."
      />
      <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-800 md:before:left-4">
        {experience.map((item) => (
          <article key={item.company} className="relative pl-10 md:pl-12">
            <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 md:left-1">
              <Briefcase size={12} />
            </span>
            <div className="card-surface rounded-2xl p-6 transition">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {item.company}
                  </p>
                  <p className="text-sm text-slate-500">{item.location}</p>
                </div>
                <time className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
                  {item.period}
                </time>
              </div>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
