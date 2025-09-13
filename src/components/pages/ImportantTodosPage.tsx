import type { Project } from "../../types";
import BaseTodosPage from "../BaseTodosPage";
import { isImportant } from "../../utils/todoFilters";

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
      filterFn={isImportant}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default ImportantTodosPage;
