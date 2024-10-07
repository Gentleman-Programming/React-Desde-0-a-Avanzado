import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/context/ModalContext'

function App() {
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (<>
    <Modal>
      <h2>Hola EVZODA</h2>
      <h3>Te quiero</h3>
    </Modal>
    <button onClick={openModal}>Abrete Sésamo</button>
  </>
  )
}

export default App
