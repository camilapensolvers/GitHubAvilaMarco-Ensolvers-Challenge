import { useContext } from "react"
import { NotesContext } from "../context/NotesContext"

function UseNotes() {
    const context = useContext(NotesContext)

    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider')
    }

    return context
}

export default UseNotes