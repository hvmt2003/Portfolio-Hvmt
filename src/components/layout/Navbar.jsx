"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "achievements", "contact"];
      
      // Check if user is at the bottom of the page
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.scrollY;
      
      if (windowHeight + scrollPos >= scrollHeight - 20) {
        setActiveSection("contact");
        return;
      }

      let currentActive = "";
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // We look at the top of the section relative to the header.
          // Since the header is sticky and about ~72px, we offset by ~120px to see what's active.
          const topOffset = 120; 
          
          if (rect.top <= topOffset && rect.bottom >= topOffset) {
            currentActive = id;
            minDistance = -1; // Exact intersection
          } else if (minDistance !== -1) {
            const distance = Math.abs(rect.top - topOffset);
            if (distance < minDistance) {
              minDistance = distance;
              currentActive = id;
            }
          }
        }
      });
      
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060a12]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-blue-400">
            {site.shortName}
          </span>
          <span className="hidden text-sm font-medium text-slate-200 sm:inline">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500/10 text-blue-400 font-medium shadow-sm shadow-blue-500/5"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-800 bg-[#060a12] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400 font-medium"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
