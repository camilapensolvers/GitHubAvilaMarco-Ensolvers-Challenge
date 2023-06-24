import reactLogo from '../assets/react.svg'
import './note.css'

function Note({noteData, handleEdit, handleDelete}){

    const {id, title, content } = noteData

    return (
        <div className='n-container'>
            <div>
                <img src={reactLogo} alt="Icon of Note" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Last edited: 10/jan/2023</p>
            </div>
            <div>
                <button>Archive</button>
                <button onClick={() => handleEdit(noteData)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note