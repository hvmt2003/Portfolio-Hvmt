"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800/60 hover:text-white"
            >
              {item.label}
            </a>
          ))}
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
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white"
              >
                {item.label}
              </a>
            ))}
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
