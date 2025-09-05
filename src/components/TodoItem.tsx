import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      <strong>{todo.title}</strong> <br />
      Due: {todo.dueDate || "No date"} | Priority: {todo.priority}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
