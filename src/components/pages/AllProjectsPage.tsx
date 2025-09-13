import type { Project } from "../../types";
import ProjectList from "../ProjectList";
import PageLayout from "../PageLayout";

interface AllProjectsPageProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

function AllProjectsPage({ projects, onSelectProject }: AllProjectsPageProps) {
  return (
    <PageLayout title="All Projects" count={projects.length}>
      <ProjectList projects={projects} onOpenProject={onSelectProject} />
    </PageLayout>
  );
}

export default AllProjectsPage;
