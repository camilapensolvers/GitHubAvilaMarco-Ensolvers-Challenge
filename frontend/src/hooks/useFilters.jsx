import { useState } from "react"

function UseFilters() {
    const [filters, setFilters] = useState({
        is_archived: false,
        category: "all"
    })

    const filterNotes = (notes) => {
        return notes.filter(note => {
            return (
                note.archive === filters.is_archived &&
                (
                    filters.category === "all" ||
                    note.categories.some(c => c === filters.category)
                )
            )
        })
    }

    return { filters, filterNotes, setFilters }
}

export default UseFilters