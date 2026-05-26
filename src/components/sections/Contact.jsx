import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const LeetCodeIcon = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

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
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "LinkedIn Profile",
    icon: Linkedin,
    external: true,
  },
  {
    label: "LeetCode",
    href: site.leetcode,
    value: "leetcode.com/u/hvmt",
    icon: LeetCodeIcon,
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
