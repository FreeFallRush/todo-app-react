import type { Todo, Project } from "../types";
import Button from "./Button";
import { formatDate } from "../utils/date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import "../styles/TodoCard.css";

interface TodoCardProps {
  todo: Todo;
  project?: Project;
  onDelete: (id: string) => void;
  onEdit?: (todo: Todo) => void;
  showProjectLabel?: boolean;
}

function TodoCard({
  todo,
  project,
  onDelete,
  onEdit,
  showProjectLabel,
}: TodoCardProps) {
  const isExpired = todo.dueDate ? new Date(todo.dueDate) < new Date() : false;

  let priorityColor = "#1bbfd1";
  if (todo.priority === "Medium Priority") priorityColor = "#ff7300";
  if (todo.priority === "High Priority") priorityColor = "#c40a5b";

  return (
    <div
      className="todo-card"
      style={{ backgroundColor: project?.color || "#f4f4f4" }}
    >
      {showProjectLabel && project && (
        <p className="todo-project-label">Project: {project.name}</p>
      )}

      <div className="todo-content">
        <div className="todo-name-container">
          <p className="todo-name">{todo.title}</p>
        </div>

        <div className="todo-duedate-container">
          <p className="todo-duedate">
            {isExpired
              ? "Expired"
              : todo.dueDate
              ? formatDate(new Date(todo.dueDate))
              : "No date"}
          </p>
        </div>

        <div
          className="todo-priority-container"
          style={{ backgroundColor: priorityColor, opacity: 0.5 }}
        >
          <p className="todo-priority">{todo.priority}</p>
        </div>

        <div className="todo-actions">
          <Button
            className="edit-todo-btn"
            onClick={() => onEdit && onEdit(todo)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>

          <Button className="delete-todo-btn" onClick={() => onDelete(todo.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
