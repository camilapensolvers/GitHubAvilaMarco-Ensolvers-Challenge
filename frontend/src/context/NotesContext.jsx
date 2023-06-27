import { archiveNoteService, deleteNoteService, editNoteService, getNotesService, saveNoteService, unarchiveNoteService } from '../service/notes'
import { createContext, useEffect, useState } from 'react'

export const NotesContext = createContext()

export function NotesProvider({ children }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotesService().then(data => setNotes(data))
    }, [])

    const saveNote = (note) => {
        const result = saveNoteService(note)
        result.then(noteSaved => setNotes(prevState => [...prevState, noteSaved]))
    }

    const editNote = (id, note) => {
        const result = editNoteService(id, note)
        result.then(editedNote => {
            setNotes(prevState => prevState.map(n => n.id === editedNote.id ? editedNote : n))
        })
    }

    const deleteNote = (id) => {
        const result = deleteNoteService(id)
        result.then(data => {
            setNotes(prevState => prevState.filter(n => n.id !== id))
            console.log(data);
        })
    }

    const archiveNote = (id) => {
        const result = archiveNoteService(id)
        result.then(archivedNote => {
            setNotes(prevState => prevState.map(n => n.id === archivedNote.id ? archivedNote : n))
        })
    }

    const unarchiveNote = (id) => {
        const result = unarchiveNoteService(id)
        result.then(unarchivedNote => {
            setNotes(prevState => prevState.map(n => n.id === unarchivedNote.id ? unarchivedNote : n))
        })
    }

    return (
        <NotesContext.Provider value={{
            notes,
            saveNote,
            editNote,
            deleteNote,
            archiveNote,
            unarchiveNote
        }}
        >
            {children}
        </NotesContext.Provider>
    )
}