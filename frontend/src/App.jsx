import { useEffect, useState } from 'react';
import Note from './components/Note'
import { Button, Modal } from 'react-bootstrap';

import './App.css'
import ModalNote from './components/ModalNote';
import { deleteNote, editNote, getNotes, saveNote } from './service/notes';
import useService from './hooks/userFetch';

function App() {

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({})

  useEffect(() => {
    getNotes().then(data => setNotes(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries());

    if (Object.keys(note).length === 0) {
      const result = saveNote(formJson)
      result.then(note => setNotes([...notes, note]))
    } else {
      const result = editNote(note.id, formJson)
      result.then(note => {
        const newNotes = notes.map(n => n.id === note.id ? note : n)
        setNotes(newNotes)
      })
    }
  }

  const handleSave = () => {
    setNote({})
    setShow(true)
  }

  const handleEdit = (note) => {
    setNote(note)
    setShow(true)
  }

  const handleDelete = (id) => {
    setNote({ id })
    setShowConfirm(true)
  }

  const handleArchive = (id) => {
    console.log("Archive", id);
  }

  const handleDeleteNote = () => {
    const result = deleteNote(note.id)
    result.then(data => {
      const filterNotes = notes.filter(n => n.id !== note.id)
      setNotes(filterNotes)
      setShowConfirm(false)
      console.log(data);
    })
  }

  return (
    <>
      <header>
        <h1>My notes</h1>
        <Button onClick={handleSave}>Create Note</Button>
      </header>
      <section className='notes-container'>
        {
          notes?.map((note) => (
            <Note
              key={note.id}
              noteData={note}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleArchive={ }
            />
          ))
        }
      </section>

      <ModalNote
        show={show}
        noteData={note}
        handleClose={() => setShow(false)}
        handleSubmit={handleSubmit}
      />

      <Modal
        size="sm"
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this note?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="danger" onClick={handleDeleteNote}> Yes </Button>
          <Button onClick={() => setShowConfirm(false)}> No </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
