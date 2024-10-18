import { ReactNode } from 'react'
import './App.css'

interface Props {
  children: ReactNode
}

function App({ children }: Props) {

  return (
    <>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  )
}

export default App
