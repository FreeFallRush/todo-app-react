import { useState } from "react";
import type { Project, Todo } from "../../types";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import Modal from "../Modal";
import { formatDate } from "../../utils/date";
import "../../styles/AllPages.css";

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
  const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<
    (Todo & { projectId: string }) | null
  >(null);

  const today = new Date();
  const todayString = formatDate(today);

  const allTodos: (Todo & { projectId: string })[] = projects.flatMap((p) =>
    p.todos.map((t) => ({ ...t, projectId: p.id }))
  );

  const upcomingTodos = allTodos.filter((t) => t.dueDate > todayString);

  return (
    <div className="upcoming-todos-page">
      <div className="page-header">
        <h2 className="page-title">Upcoming ToDos: {upcomingTodos.length}</h2>
      </div>

      <TodoList
        todos={upcomingTodos}
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

export default UpcomingTodosPage;
