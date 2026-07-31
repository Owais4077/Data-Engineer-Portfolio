import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion";
import { architectureSteps, profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <Reveal>
          <p className="section-kicker">Data Engineering Portfolio</p>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Image
              src="/Owais_ybix.jpeg"
              alt="Portrait of Owais Ahmad"
              width={132}
              height={132}
              priority
              className="h-32 w-32 rounded-full border-4 border-cyan-300/80 object-cover shadow-glow"
            />
            <div>
              <h1 className="hero-title">
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="hero-subtitle mt-4 text-cyan-200">{profile.title}</p>
            </div>
          </div>
          <p className="mt-5 text-base font-extrabold leading-7 text-violet-200 sm:text-lg">{profile.stack}</p>
          <p className="lead-text mt-5">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.resume} download>
              <Download size={18} /> Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail size={18} /> Contact Me
            </Button>
            <Button href={profile.github} variant="ghost" external>
              <Github size={18} /> GitHub
            </Button>
            <Button href={profile.linkedin} variant="ghost" external>
              <Linkedin size={18} /> LinkedIn
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-4">
                <strong className="block text-2xl font-black leading-tight text-white">{stat.value}</strong>
                <span className="meta-text font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="right" className="animated-gradient-border glass rounded-lg p-5">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="pill-text text-cyan-200">Lakehouse Flow</p>
            <div className="mt-5 grid gap-3">
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950/35 p-4">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200 ${index % 2 === 0 ? "animated-orbit" : "animated-orbit-delayed"}`}>
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="small-title">{step.label}</h2>
                        <span className="pill-text text-slate-500">0{index + 1}</span>
                      </div>
                      <p className="meta-text">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
