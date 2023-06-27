import Notes from "../components/Notes"
import { useEffect } from "react"
import { useFilters } from "../hooks/useFilters"
import { useNotes } from "../hooks/useNotes"

function ArchivedNotes() {

    const { notes } = useNotes()
    const { setFilters, filterNotes } = useFilters()

    useEffect(() => {
        setFilters(prevState => ({ ...prevState, is_archived: true }))
    }, [setFilters])
    console.log(filterNotes(notes));
    return (
        <section>
            <h1>Archived notes</h1>
            <Notes notes={filterNotes(notes)}></Notes>
        </section>
    )
}

export default ArchivedNotes