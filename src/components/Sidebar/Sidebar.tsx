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
}

function Sidebar({ onNavigate, onAddProject }: SidebarProps) {
  return (
    <nav>
      <div className="sidebar">
        <ul className="sidebar-options">
          <li onClick={() => onNavigate("all-projects")}>
            <a href="#">
              <FontAwesomeIcon icon={faFolderOpen} />
              All Projects
            </a>
          </li>
          <li onClick={() => onNavigate("all-todos")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarDays} /> All ToDos
            </a>
          </li>
          <li onClick={() => onNavigate("today")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarDay} /> Today
            </a>
          </li>
          <li onClick={() => onNavigate("upcoming")}>
            <a href="#">
              <FontAwesomeIcon icon={faCalendarWeek} /> Upcoming
            </a>
          </li>
          <li onClick={() => onNavigate("important")}>
            <a href="#">
              <FontAwesomeIcon icon={faTriangleExclamation} /> Important
            </a>
          </li>
          <li onClick={() => onNavigate("expired")}>
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
