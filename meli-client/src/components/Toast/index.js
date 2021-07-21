import { Toast } from "react-bootstrap";
import "./style.css";

const ToastTemplate = ({ title, message, onClose }) => {
  return (
    <div className="toast-template">
      <Toast onClose={onClose}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastTemplate;
