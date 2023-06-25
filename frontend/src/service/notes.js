
export const saveNoteService = (note) => {
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    }
    return fetchData("/notes/", request)
}

export const editNoteService = (id, note) => {
    const request = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    }
    return fetchData(`/notes/${id}`, request)
}

export const archiveNoteService = (id) => {
    const request = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetchData(`/notes/${id}/archive`, request)
}

export const unarchiveNoteService = (id) => {
    const request = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetchData(`/notes/${id}/unarchive`, request)
}

export const deleteNoteService = (id) => {
    const request = { method: "DELETE" }
    return fetchData(`/notes/${id}`, request)
}

export const getNotesService = () => {
    return fetchData(`/notes/list`)
}

const fetchData = async (url, request = { method: "GET" }) => {
    const baseUrl = "http://localhost:8080"
    const res = await fetch(`${baseUrl}${url}`, request)
    const data = await res.json()
    return data
}