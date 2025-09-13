import type { Project } from "../../types";
import ProjectList from "../ProjectList";
// import "../../styles/AllPages.css";

interface AllProjectsPageProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

function AllProjectsPage({ projects, onSelectProject }: AllProjectsPageProps) {
  return (
    <div className="all-projects-page">
      <div className="page-header">
        <h2 className="page-title">You have: {projects.length} projects </h2>
      </div>

      <ProjectList projects={projects} onOpenProject={onSelectProject} />
    </div>
  );
}

export default AllProjectsPage;
