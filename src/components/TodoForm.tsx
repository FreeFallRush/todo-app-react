import { useState } from "react";

interface NewTodo {
  title: string;
  dueDate: string;
  priority: string;
}
interface TodoFormProps {
  onAdd: (todo: NewTodo) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low Priority");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, dueDate, priority });
    setTitle("");
    setDueDate("");
    setPriority("Low Priority");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High Priority">High Priority</option>
        <option value="Medium Priority">Medium Priority</option>
        <option value="Low Priority">Low Priority</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;
