import { Button, Form, Modal } from "react-bootstrap"
import useFetch from "../hooks/userFetch"

function ModalNote({ show, handleClose, handleSubmit, noteData }) {

    const { title, content } = noteData

    return (
        <Modal show={show} onHide={handleClose} data-bs-theme="dark" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Create/Edit Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="textarea" name="content" rows={5} defaultValue={content} />
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" onClick={handleClose}>Save</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalNote