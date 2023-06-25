import { Button, Form } from 'react-bootstrap'
import { useAction } from '../hooks/useAction'
import { ACTIONS } from '../utils/constans'
import UseNotes from '../hooks/UseNotes'

function FormNote({ handleClose }) {
    const { saveNote, editNote } = UseNotes()
    const { actionName, note } = useAction()
    const { title, content } = note

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const formJson = Object.fromEntries(formData.entries());

        if (actionName === ACTIONS.SAVE) {
            saveNote(formJson)
        } else if (actionName === ACTIONS.EDIT) {
            editNote(note.id, formJson)
        }
        handleClose()
    }

    return (
        <>
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
                <Button type="submit">Save</Button>
            </Form>
        </>
    )
}

export default FormNote
