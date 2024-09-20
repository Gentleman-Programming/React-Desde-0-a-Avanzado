import './App.css'
import { useFetch } from './hooks';

const url = "https://api.example.com/data";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, error, loading } = useFetch<Data>(url)

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
