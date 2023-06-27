import { ACTIONS } from '../utils/constans';
import Note from "./Note"
import { useActions } from '../hooks/useActions';
import { useNotes } from '../hooks/useNotes';

function Notes({ notes }) {

    const { archiveNote, unarchiveNote } = useNotes()

    const { setNote, setAction } = useActions()

    const handleDelete = (id) => {
        setNote({ id })
        setAction(ACTIONS.DELETE)
    }

    const handleEdit = (note) => {
        setNote(note)
        setAction(ACTIONS.EDIT)
    }

    const handleArchive = (id) => {
        archiveNote(id)
    }

    const handleUnarchive = (id) => {
        unarchiveNote(id)
    }

    return (
        <section className='notes-container'>
            {
                notes?.map((note) => (
                    <Note
                        key={note.id}
                        noteData={note}
                        handleArchive={() => handleArchive(note.id)}
                        handleUnarchive={() => handleUnarchive(note.id)}
                        handleEdit={() => handleEdit(note)}
                        handleDelete={() => handleDelete(note.id)}
                    />
                ))
            }
        </section>
    )
}

export default Notes