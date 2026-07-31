import { Reveal } from "@/components/motion";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="bg-white/[0.025]">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">A practical stack for modern data platforms.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.03} className="animated-gradient-border glass rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <GroupIcon size={21} />
                  </div>
                  <h3 className="small-title">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span key={skill.name} className="pill-text inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-200">
                        {SkillIcon ? <SkillIcon className="text-cyan-200" size={16} /> : null}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
