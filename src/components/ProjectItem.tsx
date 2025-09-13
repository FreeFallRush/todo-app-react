import { useState } from "react";
import type { Project, Todo } from "../types";

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
  onEditTodo: (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => void;
}

function ProjectItem({
  project,
  onDelete,
  onAddTodo,
  onDeleteTodo,
  onEdit,
  onEditTodo,
}: ProjectItemProps) {
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);
  const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  return (
    <div className="project-page">
      <div className="page-header">
        <h2 className="project-name-header">{project.name}</h2>
        <p className="project-description-header">
          {project.description || "Project has no description"}
        </p>

        <div className="project-actions">
          <Button
            onClick={() => setIsEditProjectModalOpen(true)}
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
          <Button
            className="add-todo-btn"
            onClick={() => setIsAddTodoModalOpen(true)}
          >
            Add New Todo
          </Button>
        </div>

        <TodoList
          todos={project.todos}
          onDelete={(todoId) => onDeleteTodo(project.id, todoId)}
          project={project}
          onEdit={(todo) => {
            setTodoToEdit(todo);
            setIsEditTodoModalOpen(true);
          }}
        />
      </div>

      <Modal
        isOpen={isAddTodoModalOpen}
        onClose={() => setIsAddTodoModalOpen(false)}
        title="Add New Todo"
      >
        <TodoForm
          onSubmit={(todo) => {
            onAddTodo(project.id, todo);
            setIsAddTodoModalOpen(false);
          }}
        />
      </Modal>

      <Modal
        isOpen={isEditTodoModalOpen}
        onClose={() => setIsEditTodoModalOpen(false)}
        title="Edit Todo"
      >
        {todoToEdit && (
          <TodoForm
            initialData={{
              title: todoToEdit.title,
              dueDate: todoToEdit.dueDate,
              priority: todoToEdit.priority,
            }}
            onSubmit={(updated) => {
              onEditTodo(project.id, todoToEdit.id, updated);
              setIsEditTodoModalOpen(false);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={isEditProjectModalOpen}
        onClose={() => setIsEditProjectModalOpen(false)}
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
            setIsEditProjectModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default ProjectItem;
