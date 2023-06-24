import {useState, useEffect} from "react"

function useService(promise){
    const [data, setData] = useState(null)

    useEffect(() =>{
        promise.then(data => setData(data))
    }, [])

    return {data}
}

export default useService