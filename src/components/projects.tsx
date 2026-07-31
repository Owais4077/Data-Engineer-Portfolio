import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  DatabaseZap,
  FileSearch,
  GitBranch,
  LineChart,
  MapPinned,
  Stethoscope,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion";
import { projects, type Project } from "@/data/portfolio";

const coverIcons: Record<Project["visual"], typeof DatabaseZap> = {
  pipeline: DatabaseZap,
  dashboard: BarChart3,
  rag: FileSearch,
  agent: Bot,
  pricing: TrendingUp,
  medical: Stethoscope,
  navigation: MapPinned,
  career: BrainCircuit
};

function ProjectCover({ project }: { project: Project }) {
  const Icon = coverIcons[project.visual];

  return (
    <div className={`project-cover project-cover-${project.visual} rounded-lg border border-white/10 p-4`}>
      <div className="relative z-10 flex items-center justify-between">
        <span className="pill-text rounded-full bg-white/10 px-3 py-1 text-cyan-100">{project.category}</span>
        <GitBranch className="text-cyan-200" size={20} />
      </div>
      <div className="relative z-10 mt-8 grid place-items-center">
        <div className="project-icon-orb">
          <Icon size={42} />
        </div>
      </div>
      <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
        {project.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-slate-950/45 p-3">
            <strong className="block text-xl font-black leading-tight">{stat.value}</strong>
            <span className="meta-text font-bold">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-white/[0.025]">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Premium project cards built for recruiter scanning.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04} className="animated-gradient-border glass group rounded-lg p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr]">
                <ProjectCover project={project} />
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="body-copy mt-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="pill-text rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-cyan-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="meta-text mt-4 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <LineChart className="mt-0.5 shrink-0 text-violet-200" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button href={project.github} variant="secondary" external>
                      GitHub <ArrowUpRight size={16} />
                    </Button>
                    <Button href={project.demo} variant="ghost">
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
