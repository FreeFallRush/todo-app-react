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

interface SidebarProps {
  onNavigate: (page: string) => void;
  onAddProject: () => void;
}

function Sidebar({ onNavigate, onAddProject }: SidebarProps) {
  return (
    <nav>
      <div className="sidebar">
        <ul className="sidebar-options">
          <li onClick={() => onNavigate("all-projects")}>
            <FontAwesomeIcon icon={faFolderOpen} />
            All Projects
          </li>
          <li onClick={() => onNavigate("all-todos")}>
            <FontAwesomeIcon icon={faCalendarDays} /> All ToDos
          </li>
          <li onClick={() => onNavigate("today")}>
            <FontAwesomeIcon icon={faCalendarDay} /> Today
          </li>
          <li onClick={() => onNavigate("upcoming")}>
            <FontAwesomeIcon icon={faCalendarWeek} /> Upcoming
          </li>
          <li onClick={() => onNavigate("important")}>
            <FontAwesomeIcon icon={faTriangleExclamation} /> Important
          </li>
          <li onClick={() => onNavigate("expired")}>
            <FontAwesomeIcon icon={faSkullCrossbones} /> Expired
          </li>
        </ul>

        <div className="project-add">
          <Button onClick={onAddProject}>
            Add Project <FontAwesomeIcon icon={faSquarePlus} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
