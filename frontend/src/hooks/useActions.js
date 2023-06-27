import { useContext } from "react"
import { ActionsContext } from "../context/ActionsContext"

export function useActions() {
    const context = useContext(ActionsContext)

    if (context === undefined) {
        throw new Error('useActions must be used within a ActionsProvider')
    }

    return context
}