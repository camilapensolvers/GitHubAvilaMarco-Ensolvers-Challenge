import { useContext } from "react"
import { FiltersContext } from "../context/FiltersContext"

export function useFilters() {
    const context = useContext(FiltersContext)

    if (context === undefined) {
        throw new Error('useFilters must be used within a FiltersProvider')
    }

    return context
}