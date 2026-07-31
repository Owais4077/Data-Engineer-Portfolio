"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Resume", "#resume"],
  ["GitHub", "#github"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between" aria-label="Primary navigation">
        <Link href="#home" className="focus-ring inline-flex items-center gap-3 font-black">
          <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.9)]" />
          Owais Ahmad
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring pill-text text-slate-300 transition hover:text-cyan-200">
              {label}
            </Link>
          ))}
        </div>
        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mb-3 grid w-[min(1180px,calc(100%-32px))] gap-2 rounded-lg border border-white/10 bg-ink/95 p-3 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring rounded-md px-3 py-2 font-bold text-slate-200" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
