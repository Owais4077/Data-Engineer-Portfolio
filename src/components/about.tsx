import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";

const focusAreas = [
  "ETL and ELT pipeline development",
  "Python, SQL, PySpark, Apache Spark",
  "Databricks, Delta Lake, and Lakehouse architecture",
  "Data validation, quality checks, and analytics automation"
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-kicker">About</p>
        <h2 className="section-title">A data engineer who turns raw data into reliable business assets.</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="glass rounded-lg p-6">
          <div className="space-y-5">
            <p className="body-copy">
              I am a Data Engineer and BS Computer Science student specializing in Data Science at the University of Engineering & Technology, Mardan.
            </p>
            <p className="body-copy">
              My work focuses on building dependable data pipelines with Python, SQL, PySpark, Apache Spark, Databricks, Delta Lake, Lakehouse architecture, data warehousing, Big Data processing, automation, and analytics engineering.
            </p>
            <p className="body-copy">
              I enjoy solving messy data problems by creating clear ingestion, validation, transformation, and reporting layers that help teams make decisions with confidence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="glass rounded-lg p-6">
          <h3 className="card-title">Engineering Focus</h3>
          <div className="mt-5 grid gap-4">
            {focusAreas.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={20} />
                <span className="font-semibold text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
