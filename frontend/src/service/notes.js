import useFetch from "../hooks/userFetch"

export const saveNote = (note) => {
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    }
    return fetchData("/notes/", request)
}

export const editNote = (id, note) => {
    const request = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    }
    return fetchData(`/notes/${id}`, request)
}

export const deleteNote = (id) => {
    const request = { method: "DELETE" }
    return fetchData(`/notes/${id}`, request)
}

export const getNotes = () => {
    return fetchData(`/notes/list`)
}

const fetchData = async (url, request = { method: "GET" }) => {
    const baseUrl = "http://localhost:8080"
    const res = await fetch(`${baseUrl}${url}`, request)
    const data = await res.json()
    return data
}