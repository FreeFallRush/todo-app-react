import { useState } from "react";
import type { Project, Todo } from "./types";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/Modal";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("all-projects");
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleAddProject = (project: {
    name: string;
    description?: string;
    color?: string;
  }) => {
    const newProject: Project = {
      id: uuidv4(),
      name: project.name,
      description: project.description,
      color: project.color,
      todos: [],
    };
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleAddTodo = (
    projectId: string,
    todo: { title: string; dueDate: string; priority: string }
  ) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              todos: [...p.todos, { id: uuidv4(), ...todo }],
            }
          : p
      )
    );
  };

  const handleDeleteTodo = (projectId: string, todoId: string) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? { ...p, todos: p.todos.filter((t) => t.id !== todoId) }
          : p
      )
    );
  };
  const renderPage = () => {
    switch (currentPage) {
      case "all-projects":
        return (
          <ProjectList
            projects={projects}
            onDeleteProject={handleDeleteProject}
            onAddTodo={handleAddTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        );
      case "all-todos":
        return <TodoList todos={todos} onDelete={() => {}} />;
      case "today":
        return <h2>Today’s Todos</h2>;
      case "upcoming":
        return <h2>Upcoming Todos</h2>;
      case "important":
        return <h2>Important Todos</h2>;
      case "expired":
        return <h2>Expired Todos</h2>;
      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <div className="page-content">
      <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      {/* <ProjectForm onAdd={handleAddProject} /> */}
      {/* <ProjectList
        projects={projects}
        onDeleteProject={handleDeleteProject}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
      /> */}
      <Sidebar
        onNavigate={setCurrentPage}
        onAddProject={() => setIsProjectModalOpen(true)}
        className={isSidebarOpen ? "" : "hide"}
      />

      <main className={`main-container ${isSidebarOpen ? "" : "expand"}`}>
        <div className="main-content">{renderPage()}</div>
      </main>

      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title="Add Project"
      >
        <ProjectForm
          onAdd={(project) => {
            handleAddProject(project);
            setIsProjectModalOpen(false);
          }}
        />{" "}
      </Modal>
    </div>
  );
}

export default App;
