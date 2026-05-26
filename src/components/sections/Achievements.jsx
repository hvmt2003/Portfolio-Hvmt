import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { site } from "@/lib/site";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad mt-24">
      <SectionHeading
        label="Achievements"
        title="Leadership & recognition"
        description="Highlights from grants, hackathons, and campus leadership."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="card-surface flex gap-4 rounded-2xl p-5 transition"
          >
            <span className="mt-0.5 text-blue-400">
              <Award size={20} />
            </span>
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
      <a
        href={site.certificationsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
      >
        View certifications
        <ExternalLink size={14} />
      </a>
    </section>
  );
}
