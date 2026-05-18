import { useState } from 'react'
//componentes
import Formulario from './componentes/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario/>
    </>
  )
}

export default App
