import type { Todo, Project } from "../types";
import TodoCard from "./TodoCard";
import "../styles/TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  project?: Project;
  showProjectLabel?: boolean;
}

function TodoList({
  todos,
  onDelete,
  project,
  showProjectLabel,
}: TodoListProps) {
  return (
    <div className="todos-container">
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet!</p>
      ) : (
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              project={project}
              onDelete={onDelete}
              showProjectLabel={showProjectLabel}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
