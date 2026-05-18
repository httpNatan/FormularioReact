import { useState } from 'react'
//componentes
import Formulario from './componentes/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>formulario react</h1>
      <Formulario/>
    </>
  )
}

export default App
