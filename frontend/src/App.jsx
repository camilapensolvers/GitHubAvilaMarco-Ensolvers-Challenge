import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/userFetch'


function App() {
  const url = "http://localhost:8080/hello"

  const { data } = useFetch(url)

  return (
    <>
      <h1>Test Hello API</h1>
      <p>
        {data?.message}
      </p>
    </>
  )
}

export default App
