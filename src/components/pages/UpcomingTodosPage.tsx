import type { Project, Todo } from "../../types";
import BaseTodosPage from "../BaseTodosPage";

interface UpcomingTodosPageProps {
  projects: Project[];
  onDeleteTodo: (projectId: string, todoId: string) => void;
  onEditTodo: (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => void;
}

function UpcomingTodosPage({
  projects,
  onDeleteTodo,
  onEditTodo,
}: UpcomingTodosPageProps) {
  return (
    <BaseTodosPage
      title="Upcoming Todos"
      projects={projects}
      filterFn={(t: Todo) => new Date(t.dueDate) > new Date()}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default UpcomingTodosPage;
