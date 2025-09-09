import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <FontAwesomeIcon icon={faSquareCheck} size="3x" />
          <h2 className="logo-text">ToDos</h2>
        </div>
        <div className="toggle-menu">
          <Button onClick={onToggleSidebar} className="toggle-btn">
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
