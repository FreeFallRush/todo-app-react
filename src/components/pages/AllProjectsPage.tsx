import type { Project } from "../../types";
import ProjectCard from "../ProjectCard";

interface AllProjectsPageProps {
  projects: Project[];
  onSelectedProject: (projectId: string) => void;
}

function AllProjectsPage({
  projects,
  onSelectedProject,
}: AllProjectsPageProps) {
  return (
    <div className="all-projects-page">
      <div className="page-header">
        <h2 className="page-title">You have: {projects.length} projects </h2>
      </div>
      <div className="cards-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelectedProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProjectsPage;
