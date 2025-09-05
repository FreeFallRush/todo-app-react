import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
