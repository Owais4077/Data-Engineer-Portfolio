import { ArrowUpRight, GitFork, Github, Star } from "lucide-react";
import { Reveal } from "@/components/motion";
import { githubStats, profile, projects } from "@/data/portfolio";

const statCards = [
  { label: "Public Repositories", value: githubStats.publicRepos, detail: "from GitHub profile", icon: Github },
  { label: "Total Stars", value: githubStats.totalStars, detail: "across public repos", icon: Star },
  { label: "Total Forks", value: githubStats.totalForks, detail: "public repo forks", icon: GitFork }
];

export function GitHubSection() {
  const totalLanguageRepos = githubStats.languages.reduce((sum, language) => sum + language.count, 0);

  return (
    <section id="github" className="section-shell">
      <Reveal>
        <p className="section-kicker">GitHub</p>
        <h2 className="section-title">Real GitHub activity, repositories, and language strength.</h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal className="animated-gradient-border glass rounded-lg p-6">
          <Github className="text-cyan-200" size={38} />
          <h3 className="card-title mt-4">Owais4077</h3>
          <p className="body-copy mt-3">
            Public GitHub profile with data engineering, analytics, AI, RAG, dashboards, and applied machine learning projects.
          </p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring pill-text mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-slate-950">
            View GitHub Profile <ArrowUpRight size={16} />
          </a>
        </Reveal>

        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} delay={0.04 * (index + 1)} className="animated-gradient-border glass rounded-lg p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="pill-text uppercase text-cyan-200">{card.label}</p>
                  <strong className="mt-4 block text-4xl font-black leading-none text-white">{card.value}</strong>
                  <p className="meta-text mt-3">{card.detail}</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                  <Icon size={24} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="animated-gradient-border glass rounded-lg p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="section-kicker">Top Languages</p>
              <h3 className="card-title mt-2">Python leads the profile.</h3>
            </div>
            <span className="pill-text rounded-full bg-cyan-300/10 px-3 py-2 text-cyan-100">
              {githubStats.strongestLanguage}
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            {githubStats.languages.map((language) => {
              const width = `${Math.round((language.count / totalLanguageRepos) * 100)}%`;
              return (
                <div key={language.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-200">{language.name}</span>
                    <span className="meta-text">{language.count} repos</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${language.color}`} style={{ width }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="animated-gradient-border glass rounded-lg p-6">
          <p className="section-kicker">Recently Updated</p>
          <h3 className="card-title mt-2">Repository highlights from your profile.</h3>
          <div className="mt-5 grid gap-3">
            {githubStats.recentRepos.map((repo) => (
              <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/40">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <strong className="small-title block">{repo.name}</strong>
                    <p className="meta-text mt-2">{repo.description}</p>
                  </div>
                  <span className="pill-text shrink-0 rounded-full bg-white/10 px-3 py-1 text-cyan-100">{repo.language}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-slate-400">
                  <span className="meta-text inline-flex items-center gap-1"><Star size={14} /> {repo.stars}</span>
                  <span className="meta-text inline-flex items-center gap-1"><GitFork size={14} /> {repo.forks}</span>
                  <span className="meta-text">{repo.pushedAt}</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="animated-gradient-border glass mt-5 rounded-lg p-5">
        <h3 className="card-title">Pinned Project Themes</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {projects.slice(0, 4).map((project) => (
            <a key={project.title} href={project.github} target="_blank" rel="noreferrer" className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/40">
              <strong>{project.title}</strong>
              <p className="meta-text mt-2">{project.category}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
