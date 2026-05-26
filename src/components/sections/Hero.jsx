import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-pad relative overflow-hidden pt-8 md:pt-14"
    >
      <div className="glow-orb pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            Open to internships & full-time roles
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-300">{site.title}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm text-slate-500">{site.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-500/50 hover:text-white"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
            {site.highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="card-surface relative overflow-hidden rounded-2xl p-1.5 shadow-2xl shadow-blue-950/20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-900">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
