import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faCalendarDays,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarDay,
  faCalendarWeek,
  faTriangleExclamation,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import "../../styles/Sidebar.css";

interface SidebarProps {
  onNavigate: (page: string) => void;
  onAddProject: () => void;
  className?: string;
}

function Sidebar({ onNavigate, onAddProject, className = "" }: SidebarProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <nav className={className}>
      <div className="sidebar">
        <ul className="sidebar-options">
          <li onClick={() => handleNavigate("all-projects")}>
            <a href="#">
              <FontAwesomeIcon icon={faFolderOpen} />
              All Projects
            </a>
          </li>
          <li onClick={() => handleNavigate("all-todos")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarDays} /> All ToDos
            </a>
          </li>
          <li onClick={() => handleNavigate("today")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarDay} /> Today
            </a>
          </li>
          <li onClick={() => handleNavigate("upcoming")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarWeek} /> Upcoming
            </a>
          </li>
          <li onClick={() => handleNavigate("important")}>
            <a href="#">
              <FontAwesomeIcon icon={faTriangleExclamation} /> Important
            </a>
          </li>
          <li onClick={() => handleNavigate("expired")}>
            <a href="#">
              <FontAwesomeIcon icon={faSkullCrossbones} /> Expired
            </a>
          </li>
        </ul>

        <div className="project-add">
          <Button onClick={onAddProject} className="add-project-btn">
            Add Project <FontAwesomeIcon icon={faSquarePlus} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
