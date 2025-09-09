import { useState } from "react";
import type { Project, Todo, NewProject } from "./types";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header/Header";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import "./App.css";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  const handleAddProject = (project: NewProject) => {
    const newProject: Project = {
      id: uuidv4(),
      name: project.name,
      description: project.description,
      color: project.color,
      todos: [],
    };

    setProjects([...projects, newProject]);
    console.log("New project: ", newProject);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleAddTodo = (
    projectId: string,
    todo: { title: string; dueDate: string; priority: string }
  ) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: todo.title,
      dueDate: todo.dueDate,
      priority: todo.priority,
    };

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, todos: [...project.todos, newTodo] }
          : project
      )
    );
  };

  const handleDeleteTodo = (projectId: string, todoId: string) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              todos: project.todos.filter((todo) => todo.id !== todoId),
            }
          : project
      )
    );
  };

  return (
    <div className="page-content">
      <Header onToggleSidebar={() => console.log("toggle sidebar")} />
      <ProjectForm onAdd={handleAddProject} />
      <ProjectList
        projects={projects}
        onDeleteProject={handleDeleteProject}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
