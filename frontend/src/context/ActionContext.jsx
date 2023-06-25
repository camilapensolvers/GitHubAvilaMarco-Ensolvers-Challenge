import { createContext, useState } from 'react'

export const ActionContext = createContext()

export function ActionProvider({ children }) {

    const [actionName, setAction] = useState("")
    const [note, setNote] = useState({})

    return (
        <ActionContext.Provider value={{
            actionName,
            setAction,
            note,
            setNote
        }}
        >
            {children}
        </ActionContext.Provider>
    )
}