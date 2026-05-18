import { useState } from "react"
import "../styles/Formulario.css"

const Formulario = ()=> {

    const [nome , setNome] = useState("")
    const [idade , setIdade] = useState("")
    const [email , setEmail] = useState("")
    const [dados , setDados] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const novo = { nome, idade, email }
        setDados(prev => [...prev, novo])
        console.log(novo)
        setNome("")     
        setIdade("")
        setEmail("")
    }   
    return (<>
                <form onSubmit={handleSubmit} className="formulario">
                    <h1>formulario react</h1>
                    <label className="formulario-label-nome">
                        <span>nome</span>
                        <input type="text" name="nome"  placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </label>
                    <label className="formulario-label-idade">
                        <span>idade</span>
                        <input type="number" name="idade" placeholder="idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
                    </label>
                    <label className="formulario-label-email">
                        <span>email</span>
                        <input type="email" name="email"  placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                    <button type="submit">enviar</button>
                    
                </form>
    </>)
}

export default Formulario