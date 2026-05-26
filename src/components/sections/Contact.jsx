import { Code2, Link2, Mail, Phone, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    icon: Mail,
  },
  {
    label: "Phone",
    href: `tel:${site.phoneTel}`,
    value: site.phone,
    icon: Phone,
  },
  {
    label: "GitHub",
    href: site.github,
    value: "github.com/hvmt2003",
    icon: Code2,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "LinkedIn Profile",
    icon: Link2,
    external: true,
  },
  {
    label: "LeetCode",
    href: site.leetcode,
    value: "leetcode.com/u/hvmt",
    icon: Terminal,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad mt-24 mb-8">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Open to full-time SDE, frontend and ML-focused roles."
      />
      <div className="card-surface rounded-2xl p-6 md:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-blue-500/40 hover:bg-slate-900/80"
              >
                <span className="rounded-lg bg-blue-500/15 p-2.5 text-blue-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-slate-200">
                    {link.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        <a
          href={`mailto:${site.email}?subject=Opportunity%20%E2%80%94%20Portfolio`}
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Send an email
        </a>
      </div>
    </section>
  );
}
