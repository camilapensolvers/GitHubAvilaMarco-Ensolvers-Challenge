import { useContext } from "react"
import { ActionContext } from "../context/ActionContext"

export const useAction = () => {
    const context = useContext(ActionContext)

    if (context === undefined) {
        throw new Error('useAction must be used within a ActionProvider')
    }

    return context
}