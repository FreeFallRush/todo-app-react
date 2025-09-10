import Button from "./Button";
import "../styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-form-container">{children}</div>

        <div className="modal-actions">
          <Button
            className="modal-form-submit"
            onClick={() => {
              const form = document.querySelector<HTMLFormElement>(
                ".modal-content form"
              );
              form?.requestSubmit();
            }}
          >
            Submit
          </Button>

          <Button className="modal-form-close" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
