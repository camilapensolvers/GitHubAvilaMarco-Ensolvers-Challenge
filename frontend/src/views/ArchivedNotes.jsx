import { useEffect } from "react"
import Notes from "../components/Notes"
import UseFilters from "../hooks/useFilters"
import UseNotes from "../hooks/UseNotes"

function ArchivedNotes() {

    const { notes } = UseNotes()
    const { setFilters, filterNotes } = UseFilters()

    useEffect(() => {
        setFilters(prevState => ({ ...prevState, is_archived: true }))
    }, [])

    return (
        <section>
            <h1>Archived notes</h1>
            <Notes notes={filterNotes(notes)}></Notes>
        </section>
    )
}

export default ArchivedNotes