import { useState } from "react";
import type { Project, Todo } from "../../types";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import Modal from "../Modal";
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
  const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<
    (Todo & { projectId: string }) | null
  >(null);

  const todayString = formatDate(new Date());

  const allTodos: (Todo & { projectId: string })[] = projects.flatMap((p) =>
    p.todos.map((t) => ({ ...t, projectId: p.id }))
  );

  const todaysTodos = allTodos.filter((t) => t.dueDate === todayString);

  return (
    <div className="today-todos-page">
      <div className="page-header">
        <h2 className="page-title">Today's ToDos: {todaysTodos.length}</h2>
      </div>

      <TodoList
        todos={todaysTodos}
        showProjectLabel
        onDelete={(todoId) => {
          const project = projects.find((p) =>
            p.todos.some((t) => t.id === todoId)
          );
          if (project) onDeleteTodo(project.id, todoId);
        }}
        onEdit={(todo) => {
          const todoWithProject = allTodos.find((t) => t.id === todo.id);
          if (!todoWithProject) return;
          setTodoToEdit(todoWithProject);
          setIsEditTodoModalOpen(true);
        }}
      />

      <Modal
        isOpen={isEditTodoModalOpen}
        onClose={() => setIsEditTodoModalOpen(false)}
        title="Edit Todo"
      >
        {todoToEdit && (
          <TodoForm
            initialData={{
              title: todoToEdit.title,
              dueDate: todoToEdit.dueDate,
              priority: todoToEdit.priority,
            }}
            onSubmit={(updated) => {
              onEditTodo(todoToEdit.projectId, todoToEdit.id, updated);
              setIsEditTodoModalOpen(false);
            }}
          />
        )}
      </Modal>
    </div>
  );
}

export default TodayTodosPage;
