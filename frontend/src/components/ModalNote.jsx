import { Modal } from "react-bootstrap"

function ModalNote({ show, handleClose, title, children }) {

    return (
        <Modal show={show} onHide={handleClose} data-bs-theme="dark" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default ModalNote