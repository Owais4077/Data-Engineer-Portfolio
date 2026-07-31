import { About } from "@/components/about";
import { AnimatedBackground } from "@/components/animated-background";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { GitHubSection } from "@/components/github-section";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Resume />
        <GitHubSection />
        <Contact />
      </main>
    </>
  );
}
