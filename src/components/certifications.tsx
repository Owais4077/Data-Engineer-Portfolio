import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <Reveal>
        <p className="section-kicker">Certifications</p>
        <h2 className="section-title">Credential gallery that is ready for unlimited future certificates.</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((certificate, index) => {
          const Icon = certificate.icon;
          return (
            <Reveal key={certificate.name} delay={index * 0.04} className="animated-gradient-border glass rounded-lg p-5">
              <div className="grid min-h-36 place-items-center rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.15),rgba(139,92,246,0.2))]">
                <Icon className="text-cyan-100" size={42} />
              </div>
              <h3 className="small-title mt-5">{certificate.name}</h3>
              <p className="body-copy mt-2 font-bold">{certificate.organization}</p>
              <p className="meta-text">{certificate.date}</p>
              <p className="meta-text text-slate-500">{certificate.credential}</p>
              <a href={certificate.verifyUrl} className="focus-ring pill-text mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-cyan-100 transition hover:border-cyan-300/40">
                Verify Credential <ArrowUpRight size={15} />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
