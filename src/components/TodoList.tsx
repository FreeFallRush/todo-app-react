import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

function TodoList({ todos, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p>No todos yet!</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
