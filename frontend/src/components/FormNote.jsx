import { Button, Form } from 'react-bootstrap'
import { useAction } from '../hooks/useAction'
import { ACTIONS } from '../utils/constans'
import UseNotes from '../hooks/UseNotes'
import { useEffect, useId, useRef, useState } from 'react'

function FormNote({ handleClose }) {
    const { saveNote, editNote } = UseNotes()
    const { actionName, note } = useAction()
    const { title, content, categories } = note
    const categoryRef = useRef()
    const [categoriesForm, setCategoriesForm] = useState(categories || [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const categoriesData = e.target.querySelectorAll("input[type='checkbox']")
        const formJson = Object.fromEntries(formData.entries());

        formJson.categories = [...categoriesData].map(c => ({
            name: c.name
        }));

        if (actionName === ACTIONS.SAVE) {
            saveNote(formJson)
        } else if (actionName === ACTIONS.EDIT) {
            editNote(note.id, formJson)
        }
        handleClose()
    }

    const handleClick = () => {
        const current = categoryRef.current.value
        if (current === "" || categoriesForm.some(c => c.name === current))
            return categoryRef.current.value = ""

        setCategoriesForm(prevState =>
            [...prevState, { name: current }]
        )
        categoryRef.current.value = ""
    }

    const handleDelete = (id) => {
        setCategoriesForm(prevState =>
            prevState.filter(c => {
                if (isNaN(id)) {
                    return c.name !== id
                } else {
                    return c.id !== id
                }
            })
        )
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
                <Form.Group className="mb-3" controlId="categories">
                    <Form.Label>Categories</Form.Label>
                    <div>
                        {categoriesForm &&
                            categoriesForm.map((c, i) => (
                                <div
                                    key={`c-${c.name}-${i}`}
                                    className='d-flex flex-row form-check'
                                >
                                    <label className="form-check-label">
                                        {c.name}
                                        <input name={c.name} type="checkbox" className="d-none" />
                                    </label>
                                    <span onClick={() => handleDelete(c.id || c.name)}>❌</span>
                                </div>
                            ))
                        }
                    </div>
                    <Form.Control ref={categoryRef} type="text" placeholder='add category' />
                    <Button onClick={handleClick}>Add</Button>
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
