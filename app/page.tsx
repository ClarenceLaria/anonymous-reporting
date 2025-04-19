import { HeroParallax } from "@/components/ui/hero-parallax";
import { techStackProducts } from "@/components/data/techstackList";
import MyGithubCalendar from "@/components/github-calendar";
import AboutSection from "@/components/about";
import Experience from "@/components/experience";
import ProjectsSection from "@/components/projects-section";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroParallax products={techStackProducts}/>
      <MyGithubCalendar/>
      <AboutSection/>
      <ProjectsSection/>
      <TechStacks/>
    </div>
  );
}
