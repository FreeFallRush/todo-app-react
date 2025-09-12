import { useState } from "react";
import type { Project } from "../types";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";
import Button from "./Button";

import "../styles/ProjectItem.css";
interface ProjectItemProps {
  project: Project;
  onDelete: (id: string) => void;
  onAddTodo: (
    projectId: string,
    todo: { title: string; dueDate: string; priority: string }
  ) => void;
  onDeleteTodo: (projectId: string, todoId: string) => void;
  onEdit: (
    id: string,
    updated: { name: string; description?: string; color?: string }
  ) => void;
}

function ProjectItem({
  project,
  onDelete,
  onAddTodo,
  onDeleteTodo,
  onEdit,
}: ProjectItemProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);

  return (
    <div className="project-page">
      <div className="page-header">
        <h2 className="project-name-header">{project.name}</h2>
        <p className="project-description-header">
          {project.description || "Project has no description"}
        </p>

        <div className="project-actions">
          <Button
            onClick={() => setIsEditModalOpen(true)}
            className="btn-edit project-edit"
          >
            Edit
          </Button>
          <Button
            onClick={() => onDelete(project.id)}
            className="btn-delete project-delete"
          >
            Delete
          </Button>
        </div>
      </div>

      <div className="todo-section">
        <div
          className="todo-section-actions"
          style={{ backgroundColor: project.color }}
        >
          <Button onClick={() => setIsTodoFormOpen((prev) => !prev)}>
            {isTodoFormOpen ? "Cancel" : "Add New Todo"}
          </Button>
        </div>

        {isTodoFormOpen && (
          <TodoForm
            onAdd={(todo) => {
              onAddTodo(project.id, todo);
              setIsTodoFormOpen(false);
            }}
          />
        )}

        <TodoList
          todos={project.todos}
          onDelete={(todoId) => onDeleteTodo(project.id, todoId)}
        />
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Project"
      >
        <ProjectForm
          key={project.id}
          initialData={{
            name: project.name,
            description: project.description,
            color: project.color,
          }}
          onSubmit={(updated) => {
            onEdit(project.id, updated);
            setIsEditModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default ProjectItem;
