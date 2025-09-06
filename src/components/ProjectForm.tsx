import type { NewProject } from "../types";
import { useState } from "react";

interface ProjectFormProps {
  onAdd: (project: NewProject) => void;
}

function ProjectForm({ onAdd }: ProjectFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({ name, description, color });
    setName("");
    setDescription("");
    setColor("#000000");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="How would you call it?"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Your choice if you want to add a short description to your project..."
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
