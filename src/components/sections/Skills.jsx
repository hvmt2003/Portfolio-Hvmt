import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-pad mt-24">
      <SectionHeading
        label="Skills"
        title="Technical toolkit"
        description="Technologies I use to design, build, and ship software."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="card-surface rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
