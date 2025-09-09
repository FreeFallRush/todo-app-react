import type { Project } from "../types";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
  projects: Project[];
  onDeleteProject: (id: string) => void;
  onAddTodo: (
    projectId: string,
    todo: { title: string; dueDate: string; priority: string }
  ) => void;
  onDeleteTodo: (projectId: string, todoId: string) => void;
}

function ProjectList({
  projects,
  onDeleteProject,
  onAddTodo,
  onDeleteTodo,
}: ProjectListProps) {
  if (projects.length === 0) return <p>No projects yet!</p>;

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onDelete={onDeleteProject}
          onAddTodo={onAddTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default ProjectList;
