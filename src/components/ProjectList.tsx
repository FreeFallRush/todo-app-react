import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  onOpenProject: (id: string) => void;
}

function ProjectList({ projects, onOpenProject }: ProjectListProps) {
  if (projects.length === 0) return <p>No projects yet!</p>;

  return (
    <div className="cards-container">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onOpenProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;
