import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
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
                    note.categories.some(c => c.name === filters.category)
                )
            )
        })
    }

    return (
        <FiltersContext.Provider value={{
            filters,
            filterNotes,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}