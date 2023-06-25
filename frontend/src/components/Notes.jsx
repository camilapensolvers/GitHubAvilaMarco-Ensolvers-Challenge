import { useAction } from '../hooks/useAction';
import Note from "./Note"
import { ACTIONS } from '../utils/constans';
import UseNotes from '../hooks/UseNotes';

function Notes({ notes }) {

    const { archiveNote, unarchiveNote } = UseNotes()

    const { setNote, setAction } = useAction()

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