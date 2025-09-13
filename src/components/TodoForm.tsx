import { useState } from "react";

interface TodoFormProps {
  onSubmit: (todo: {
    title: string;
    dueDate: string;
    priority: string;
  }) => void;
  initialData?: { title: string; dueDate: string; priority: string };
}

function TodoForm({ onSubmit, initialData }: TodoFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [dueDate, setDueDate] = useState(initialData?.dueDate || "");
  const [priority, setPriority] = useState(
    initialData?.priority || "Low Priority"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, dueDate, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="todo-form-field">
        <label>ToDo Name:</label>
        <input
          type="text"
          value={title}
          maxLength={150}
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new todo..."
        />
      </div>

      <div className="todo-form-field">
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          required
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="todo-form-field">
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
        </select>
      </div>
    </form>
  );
}
export default TodoForm;
