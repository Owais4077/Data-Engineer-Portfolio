"use client";

import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal className="max-w-3xl">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Timeline shaped around Data Engineering delivery.</h2>
      </Reveal>
      <Reveal className="relative mt-10" direction="left">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent md:block" />
        <div className="timeline-pulse absolute left-[0.8rem] top-8 hidden h-4 w-4 rounded-full bg-cyan-300 md:block" />
        <article className="animated-gradient-border glass rounded-lg p-6 md:ml-14">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start">
            <div>
              <p className="pill-text uppercase text-cyan-200">{experience.employment}</p>
              <h3 className="card-title mt-1">{experience.role}</h3>
              <p className="body-copy font-bold">{experience.company}</p>
            </div>
            <div className="meta-text inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-bold">
              <CalendarDays size={17} /> {experience.duration}
            </div>
          </div>
          <ul className="body-copy mt-6 grid gap-3 md:grid-cols-2">
            {experience.responsibilities.map((item, index) => (
              <motion.li
                key={item}
                className="rounded-lg border border-white/10 bg-slate-950/30 p-4"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -3, borderColor: "rgba(34, 211, 238, 0.35)" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span key={tech} className="pill-text rounded-full bg-cyan-300/10 px-3 py-2 text-cyan-100">
                {tech}
              </span>
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  );
}
