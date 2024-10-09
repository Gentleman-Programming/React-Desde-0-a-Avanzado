import { useEffect, useState } from "react"

export const PromiseError = () => {
  const [data, setData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        throw new Error("La Promesa hizo puff")
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div>Algo salió mal y no me refiero a Guille: {error}</div>
  }

  return <div>{data}</div>
}
