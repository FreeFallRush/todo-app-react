import type { Project } from "../types";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const truncatedDescription =
    project.description && project.description.length > 50
      ? project.description.substring(0, 50) + "..."
      : project.description || "No description";

  return (
    <div
      className="project-card"
      style={{ backgroundColor: project.color }}
      onClick={() => onClick(project.id)}
    >
      <h3 className="project-title">{project.name}</h3>
      <p className="tasks-number">{project.todos.length} tasks</p>
      <p className="project-description">{truncatedDescription}</p>
    </div>
  );
}

export default ProjectCard;
