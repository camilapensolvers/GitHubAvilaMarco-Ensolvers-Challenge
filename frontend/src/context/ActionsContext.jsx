import { createContext, useState } from 'react'

export const ActionsContext = createContext()

export function ActionsProvider({ children }) {

    const [actionName, setAction] = useState("")
    const [note, setNote] = useState({})

    return (
        <ActionsContext.Provider value={{
            actionName,
            setAction,
            note,
            setNote
        }}
        >
            {children}
        </ActionsContext.Provider>
    )
}