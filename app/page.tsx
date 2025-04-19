import { HeroParallax } from "@/components/ui/hero-parallax";
import { techStackProducts } from "@/components/data/techstack";
import MyGithubCalendar from "@/components/github-calendar";
import AboutSection from "@/components/about";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroParallax products={techStackProducts}/>
      <MyGithubCalendar/>
      <AboutSection/>
    </div>
  );
}
