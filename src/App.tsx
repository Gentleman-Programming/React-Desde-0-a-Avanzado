import './App.css'
import { getCharacter } from './services/api.service'
import { Character } from './models';
import { useApi } from './hooks/useApi';

function App() {
  const { loading, error, data, fetch } = useApi<Character>(getCharacter(1), { autoFetch: true })

  if (loading) {
    return (<p>Cargando</p>)
  }

  if (error) {
    return (<p>Ups {error.message}</p>)
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={fetch}></button>
    </>
  )
}

export default App
