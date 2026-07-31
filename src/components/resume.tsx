"use client";

import { Download, Printer } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion";
import { experience, profile } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="bg-white/[0.025]">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Resume</p>
          <h2 className="section-title">ATS-aware snapshot for Data Engineering roles.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="glass rounded-lg p-6">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 md:flex-row">
              <div>
                <h3 className="card-title">{profile.name}</h3>
                <p className="mt-2 font-bold text-cyan-100">{profile.title}</p>
                <p className="meta-text">{profile.stack}</p>
              </div>
              <p className="meta-text font-semibold">{profile.email}</p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h4 className="font-black">Core Strengths</h4>
                <p className="body-copy mt-2">ETL, ELT, PySpark, Spark SQL, Databricks, Delta Lake, data validation, Lakehouse design, BI dashboards, and data warehouse modeling.</p>
              </div>
              <div>
                <h4 className="font-black">Recent Experience</h4>
                <p className="body-copy mt-2">
                  {experience.role}, {experience.company}. {experience.duration}.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-lg p-6">
            <h3 className="card-title">Resume Actions</h3>
            <p className="body-copy mt-3">Download the recruiter version, use the plain-text ATS version, or print the page directly.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={profile.resume} download>
                <Download size={18} /> Download Resume
              </Button>
              <Button href={profile.atsResume} variant="secondary" download>
                ATS Resume
              </Button>
              <button className="focus-ring pill-text inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5" type="button" onClick={() => window.print()}>
                <Printer size={18} /> Print Resume
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
