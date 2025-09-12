import { useState, useEffect } from "react";
import "../styles/ModalForm.css";

interface ProjectFormProps {
  onSubmit: (data: {
    name: string;
    description?: string;
    color?: string;
  }) => void;
  initialData?: { name: string; description?: string; color?: string };
}

function ProjectForm({ onSubmit, initialData }: ProjectFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [color, setColor] = useState(initialData?.color || "#000000");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setColor(initialData.color || "#000000");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSubmit({ name, description, color });

    if (!initialData) {
      setName("");
      setDescription("");
      setColor("#000000");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="modal-form">
      <div className="project-name-form">
        <h3>Project Name: </h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="How would you call it?"
          required
        />
      </div>

      <div className="project-description-form">
        <h3>Project Description:</h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Your choice if you want to add a short description to your project..."
        />
      </div>
      <div className="project-color-form">
        <span className="color-input-text">Project's Color:</span>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </form>
  );
}

export default ProjectForm;
