import type { Project } from "../../types";
import BaseTodosPage from "../BaseTodosPage";
import { isToday } from "../../utils/todoFilters";

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
      filterFn={isToday}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default TodayTodosPage;
