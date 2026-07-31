import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
};

const variants = {
  primary: "bg-cyan-300 text-slate-950 hover:bg-white",
  secondary: "border border-cyan-300/30 bg-cyan-300/10 text-white hover:border-cyan-200",
  ghost: "border border-white/15 bg-white/5 text-white hover:border-white/35"
};

export function Button({ href, children, variant = "primary", download, external }: ButtonProps) {
  const className = `focus-ring pill-text inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-3 transition hover:-translate-y-0.5 ${variants[variant]}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} download={download} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} download={download}>
      {children}
    </Link>
  );
}
