export const getCategoriesService = (isArchived) => {
    return fetchData(`/categories/list?is_archive=${isArchived}`)
}

const fetchData = async (url, request = { method: "GET" }) => {
    const baseUrl = "http://localhost:8080"
    const res = await fetch(`${baseUrl}${url}`, request)
    const data = await res.json()
    return data
}