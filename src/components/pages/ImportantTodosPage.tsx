import type { Project, Todo } from "../../types";
import BaseTodosPage from "../BaseTodosPage";

interface ImportantTodosPageProps {
  projects: Project[];
  onDeleteTodo: (projectId: string, todoId: string) => void;
  onEditTodo: (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => void;
}

function ImportantTodosPage({
  projects,
  onDeleteTodo,
  onEditTodo,
}: ImportantTodosPageProps) {
  return (
    <BaseTodosPage
      title="Important Todos"
      projects={projects}
      filterFn={(t: Todo) => t.priority === "High Priority"}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default ImportantTodosPage;
