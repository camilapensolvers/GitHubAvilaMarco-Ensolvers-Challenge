import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'
import ModalNote from './components/ModalNote';
import { Link, Outlet } from 'react-router-dom';
import FormNote from './components/FormNote';
import UseNotes from './hooks/UseNotes';
import UseFilters from './hooks/useFilters';
import { useAction } from './hooks/useAction';
import { ACTIONS } from './utils/constans';

function App() {
  const { deleteNote } = UseNotes()
  const { actionName, setAction, note, setNote } = useAction()
  const [show, setShow] = useState(false);
  const { setFilters } = UseFilters()

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

      <Outlet />

      {actionName !== "" &&
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
