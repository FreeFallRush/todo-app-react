import type { Todo } from "../types";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <div className="todos-container">
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet!</p>
      ) : (
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
