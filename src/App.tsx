import { useEffect, useState } from "react";
import type { Project } from "./types";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "./utils/date";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/Modal";
import ProjectForm from "./components/ProjectForm";
import ProjectItem from "./components/ProjectItem";
//import TodoList from "./components/TodoList";
import AllProjectsPage from "./components/pages/AllProjectsPage";
import AllTodosPage from "./components/pages/AllTodosPage";
import TodayTodosPage from "./components/pages/TodayTodosPage";
import UpcomingTodosPage from "./components/pages/UpcomingTodosPage";

import "./App.css";

function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("todoProjects");
    if (saved) {
      try {
        return JSON.parse(saved) as Project[];
      } catch (err) {
        console.error("Failed to parse projects from localStorage", err);
      }
    }

    return [
      {
        id: "demo",
        name: "Demo Project",
        description: "something is better than nothing when testing",
        color: "#93CDF0",
        todos: [
          {
            id: uuidv4(),
            title: "Finish the Odin Project Curriculum",
            dueDate: formatDate(new Date("2023-12-12")),
            priority: "High Priority",
          },
          {
            id: uuidv4(),
            title: "Buy Food for Click the cute cat 🐈",
            dueDate: formatDate(new Date("2025-10-14")),
            priority: "High Priority",
          },
          {
            id: uuidv4(),
            title: "Make research for next artsy project",
            dueDate: formatDate(new Date("2025-11-12")),
            priority: "Medium Priority",
          },
        ],
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("todoProjects", JSON.stringify(projects));
  }, [projects]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("all-projects");
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

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

  const handleEditProject = (
    id: string,
    update: { name: string; description?: string; color?: string }
  ) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...update } : p)));
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    setSelectedProjectId(null);
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

  const handleEditTodo = (
    projectId: string,
    todoId: string,
    updated: { title: string; dueDate: string; priority: string }
  ) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              todos: p.todos.map((t) =>
                t.id === todoId ? { ...t, ...updated } : t
              ),
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
        if (selectedProjectId) {
          const project = projects.find((p) => p.id === selectedProjectId);
          if (!project) return <p>Project not found</p>;
          return (
            <ProjectItem
              project={project}
              onDelete={handleDeleteProject}
              onAddTodo={handleAddTodo}
              onDeleteTodo={handleDeleteTodo}
              onEdit={handleEditProject}
              onEditTodo={handleEditTodo}
            />
          );
        }
        return (
          <AllProjectsPage
            projects={projects}
            onSelectProject={(id) => setSelectedProjectId(id)}
          />
        );
      case "all-todos":
        return (
          <AllTodosPage
            projects={projects}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        );
      case "today":
        return (
          <TodayTodosPage
            projects={projects}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        );
      case "upcoming":
        return (
          <UpcomingTodosPage
            projects={projects}
            onDeleteTodo={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        );
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

      <Sidebar
        onNavigate={(page) => {
          setCurrentPage(page);
          if (page === "all-projects") {
            setSelectedProjectId(null);
          }
        }}
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
          onSubmit={(project) => {
            handleAddProject(project);
            setIsProjectModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
