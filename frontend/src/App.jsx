import './App.css'

import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { ACTIONS } from './utils/constans';
import FormNote from './components/FormNote';
import ModalNote from './components/ModalNote';
import { getCategoriesService } from './service/categories';
import { useActions } from './hooks/useActions';
import { useFilters } from './hooks/useFilters';
import { useNotes } from './hooks/useNotes';

function App() {
  const { actionName, setAction, note, setNote } = useActions()
  const { notes, deleteNote } = useNotes()
  const { filters, setFilters } = useFilters()
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log("UPDATE CATEGORIES", filters.is_archived);
    getCategoriesService(filters.is_archived).then(data => setCategories(data))
  }, [notes, filters])

  useEffect(() => {
    if (actionName !== "") {
      setShow(true)
    }
  }, [actionName, note])

  const handleDeleteNote = () => {
    deleteNote(note.id)
    closeModal()
  }

  const closeModal = () => {
    setShow(false)
    setNote({})
    setAction("")
  }

  const handleChange = (e) => {
    const current = e.target.value
    setFilters(prevState => ({
      ...prevState,
      category: current
    }))
  }

  return (
    <>
      <header>
        <nav>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to="notes/archived" className='nav-link'>Archive notes</Link>
            </li>
            <li className='nav-item'>
              <Link to="notes" className='nav-link'>My notes</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          categories
        </Form.Label>
        <Col sm="10">
          <Form.Select onChange={handleChange}>
            <option value="all">all</option>
            {
              categories?.map(c =>
                <option key={c.id} value={c.name} > {c.name}</option>
              )
            }

          </Form.Select>
        </Col>
      </Form.Group >

      <Outlet />

      {
        actionName !== "" &&
        <ModalNote

          show={show}
          handleClose={closeModal}
          title={
            actionName === ACTIONS.DELETE
              ? "Are you sure you want to delete this note?"
              : "Create/Edit Note"
          }
        >
          {
            actionName === ACTIONS.DELETE
              ?
              <>
                <Button variant="danger" onClick={(handleDeleteNote)}> Yes </Button>
                <Button onClick={closeModal}> No </Button>
              </>
              :
              <FormNote
                handleClose={closeModal}
              ></FormNote>
          }
        </ModalNote>
      }
    </>
  )
}

export default App
