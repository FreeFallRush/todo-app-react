import { useState } from "react";
import "../styles/ModalForm.css";

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
        <h3 className="todo-name-text">ToDo Name:</h3>
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
        <h3 className="todo-duedate-text">Due Date:</h3>
        <input
          type="date"
          value={dueDate}
          required
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="todo-form-field">
        <h3 className="todo-priority-text">Priority:</h3>
        <select
          className="todo-priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
        </select>
      </div>
    </form>
  );
}
export default TodoForm;
