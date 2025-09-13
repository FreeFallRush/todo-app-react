import type { Project } from "../../types";
import BaseTodosPage from "../BaseTodosPage";

interface AllTodosPageProps {
  projects: Project[];
  onDeleteTodo: (projectId: string, todoId: string) => void;
  onEditTodo: (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => void;
}

function AllTodosPage({
  projects,
  onDeleteTodo,
  onEditTodo,
}: AllTodosPageProps) {
  return (
    <BaseTodosPage
      title="All Todos"
      projects={projects}
      filterFn={() => true}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default AllTodosPage;
