import type { Project } from "../types";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

interface ProjectItemProps {
  project: Project;
  onDelete: (id: string) => void;
  onAddTodo: (
    projectId: string,
    todo: { title: string; dueDate: string; priority: string }
  ) => void;
  onDeleteTodo: (projectId: string, todoId: string) => void;
}

function ProjectItem({
  project,
  onDelete,
  onAddTodo,
  onDeleteTodo,
}: ProjectItemProps) {
  return (
    <div>
      <h2>{project.name}</h2>
      {project.description && <p>{project.description}</p>}
      <button onClick={() => onDelete(project.id)}>Delete Project</button>

      <TodoForm onAdd={(todo) => onAddTodo(project.id, todo)} />

      <TodoList
        todos={project.todos}
        onDelete={(todoId) => onDeleteTodo(project.id, todoId)}
      />
    </div>
  );
}

export default ProjectItem;
