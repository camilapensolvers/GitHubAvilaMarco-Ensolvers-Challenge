import { Button } from "react-bootstrap";
import Notes from "../components/Notes";
import { useEffect } from "react";
import UseFilters from "../hooks/useFilters";
import UseNotes from "../hooks/UseNotes";
import { useAction } from '../hooks/useAction';
import { ACTIONS } from "../utils/constans";

function NoArchivedNotes() {

    const { notes } = UseNotes()
    const { setFilters, filterNotes } = UseFilters()

    const { setAction } = useAction()

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