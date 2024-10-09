import { useEffect } from "react"

export const EffectExample = () => {
  useEffect(() => {
    throw new Error("Ups")
  }, [])

  return <div></div>
}

