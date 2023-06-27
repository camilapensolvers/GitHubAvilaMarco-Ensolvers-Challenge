import './note.css'

import reactLogo from '../assets/react.svg'

function Note({ noteData, handleEdit, handleDelete, handleArchive, handleUnarchive }) {

    const { id, title, last_edited, archive } = noteData

    return (
        <div className='n-container'>
            <div>
                <img src={reactLogo} alt="Icon of Note" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Last edited: {last_edited}</p>
            </div>
            <div>
                {
                    archive ?
                        <button onClick={handleUnarchive}>Unarchive</button>
                        :
                        <button onClick={handleArchive}>Archive</button>
                }
                <button onClick={() => handleEdit(noteData)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note