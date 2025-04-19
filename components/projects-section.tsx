// app/projects/page.tsx or components/ProjectsSection.tsx
import ProjectCard from "@/components/project-card";
import { projects } from "@/components/data/projectsList";

export default function ProjectsSection() {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 ">
        Recent Projects
      </h1>
      <p className=" mb-10">
        Explore some of my recent projects below. For more, visit my GitHub profile.
      </p>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
