import type { Project, Todo } from "../../types";
import BaseTodosPage from "../BaseTodosPage";
import { formatDate } from "../../utils/date";

interface TodayTodosPageProps {
  projects: Project[];
  onDeleteTodo: (projectId: string, todoId: string) => void;
  onEditTodo: (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => void;
}

function TodayTodosPage({
  projects,
  onDeleteTodo,
  onEditTodo,
}: TodayTodosPageProps) {
  return (
    <BaseTodosPage
      title="Today's Todos"
      projects={projects}
      filterFn={(t: Todo) => t.dueDate === formatDate(new Date())}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default TodayTodosPage;
