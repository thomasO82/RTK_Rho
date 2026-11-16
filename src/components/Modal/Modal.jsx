import './modal.css'
const Modal = ({ children, handleToggle }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={handleToggle}></div>
      <div
        className="modalContent"
        role="dialog"
        aria-modal="true"
        aria-label="Planification"
      >
        <button
          type="button"
          aria-label="Fermer la modale"
          className="closeModal"
          onClick={handleToggle}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
export default Modal
