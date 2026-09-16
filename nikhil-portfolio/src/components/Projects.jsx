import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import projects, { categories } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Portfolio"
          title="Recent work"
          description="A few of the projects I've built. More case studies are added as new projects go live."
        />

        <ProjectFilter categories={categories} active={active} onChange={setActive} />

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-sm">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
