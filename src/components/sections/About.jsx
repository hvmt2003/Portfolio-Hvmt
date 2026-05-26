import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function About() {
  const { education } = site;

  return (
    <section id="about" className="section-pad mt-24">
      <SectionHeading
        label="About"
        title="Engineering with clarity and ownership"
        description="I build reliable products across the stack—from backend services and APIs to polished React interfaces and ML pipelines."
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface rounded-2xl p-6 md:p-8">
          <p className="leading-relaxed text-slate-300">
            I am a Computer Science undergraduate at IIIT Surat with hands-on
            experience shipping production features at 21CC Education and
            building ML systems at Vysion Technology. I focus on measurable
            outcomes: faster load times, cleaner architecture, and dependable
            user experiences.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            Beyond engineering, I lead campus initiatives, compete in hackathons,
            and contribute to open-source projects that sharpen my problem-solving
            and collaboration skills.
          </p>
        </div>
        <div className="card-surface rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3">
            <span className="rounded-lg bg-blue-500/15 p-2 text-blue-400">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="font-semibold text-white">{education.school}</h3>
              <p className="mt-1 text-sm text-slate-400">{education.degree}</p>
            </div>
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-3">
              <dt className="text-slate-500">Duration</dt>
              <dd className="font-medium text-slate-200">{education.period}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">CGPA</dt>
              <dd className="font-medium text-blue-400">{education.gpa}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
