import Button from "./Button";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        {children}
        <Button variant="secondary" onClick={onClose}>
          Dong
        </Button>
      </div>
    </div>
  );
}
