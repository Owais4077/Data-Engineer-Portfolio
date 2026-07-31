"use client";

import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion";
import { profile, socials } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="bg-white/[0.025]">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Ready for Data Engineer interviews and collaboration.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid gap-4">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring glass rounded-lg p-5">
                  <Icon className="text-cyan-200" size={25} />
                  <span className="pill-text mt-3 block uppercase text-slate-500">{item.label}</span>
                  <strong className="mt-1 block break-words">{item.label === "Email" ? profile.email : item.label === "Location" ? profile.location : item.href.replace("https://", "")}</strong>
                </a>
              );
            })}
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-lg p-6">
            <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="grid gap-4 md:grid-cols-2">
              <label className="meta-text grid gap-2 font-bold text-slate-300">
                Name
                <input required name="name" className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white" />
              </label>
              <label className="meta-text grid gap-2 font-bold text-slate-300">
                Email
                <input required type="email" name="email" className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white" />
              </label>
              <label className="meta-text grid gap-2 font-bold text-slate-300 md:col-span-2">
                Message
                <textarea required name="message" rows={6} className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white" />
              </label>
              <div className="flex flex-wrap gap-3 md:col-span-2">
                <button type="submit" className="focus-ring pill-text inline-flex min-h-11 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-slate-950 transition hover:-translate-y-0.5">
                  <Mail size={18} /> Send Message
                </button>
                <Button href={profile.resume} variant="secondary" download>
                  <Download size={18} /> Resume Download
                </Button>
                <span className="meta-text inline-flex items-center gap-2 font-bold">
                  <MapPin size={16} /> {profile.location}
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
