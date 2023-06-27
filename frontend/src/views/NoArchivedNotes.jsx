import { ACTIONS } from "../utils/constans";
import { Button } from "react-bootstrap";
import Notes from "../components/Notes";
import { useActions } from '../hooks/useActions';
import { useEffect } from "react";
import { useFilters } from "../hooks/useFilters";
import { useNotes } from "../hooks/useNotes";

function NoArchivedNotes() {

    const { setAction } = useActions()
    const { notes } = useNotes()
    const { setFilters, filterNotes } = useFilters()

    useEffect(() => {
        setFilters(prevState => ({ ...prevState, is_archived: false }))
    }, [setFilters])

    const handleClick = () => {
        setAction(ACTIONS.SAVE)
    }

    return (
        <section>
            <h1>My notes</h1>
            <Button onClick={handleClick}>Create Note</Button>
            <Notes notes={filterNotes(notes)}></Notes>
        </section>
    )
}

export default NoArchivedNotes