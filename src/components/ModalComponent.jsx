
import "../styles/ModalComponent.css";

function ModalComponent(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">{props.children}</div>
    </div>
  );
}
export default ModalComponent;
