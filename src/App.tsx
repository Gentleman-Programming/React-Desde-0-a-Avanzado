import './App.css'
import { AppForm, Button, ColorRed } from './components'


function App() {
  const submit = () => {
    console.log("submitted")
  }

  const handleClick = () => {
    console.log("uy me clickio todo")
  }

  const dimeHola = () => {
    alert("hola !!")
  }

  return (
    <>
      <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo</Button></ColorRed>
      <Button parentMethod={handleClick}> My Boton Normal</Button>

      <AppForm>
        <button type="submit" onClick={submit} ></button>
      </AppForm>
    </>
  )
}

export default App
