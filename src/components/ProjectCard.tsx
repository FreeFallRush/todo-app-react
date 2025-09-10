import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={() => onClick(project.id)}>
      <h3 className="project-title">{project.name}</h3>
      <p className="tasks-number">{project.todos.length} tasks</p>
      <p className="project-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
