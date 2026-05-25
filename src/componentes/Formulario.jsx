import { useState, useEffect } from "react"
import "../styles/Formulario.css"

const Formulario = ()=> {

    const [nome , setNome] = useState("")
    const [idade , setIdade] = useState("")
    const [email , setEmail] = useState("")
    const [dados , setDados] = useState([])

    useEffect(() => {
        console.log(dados)
    }, [dados])

    const handleSubmit = (e) => {
        e.preventDefault()
        const novo = { 
             nome:nome,
             idade:idade,
             email:email
            }
           setDados((prev)=>{
            return [...prev, novo]
           }) 
        //setDados(prev => [...prev, novo])
        setNome("")     
        setIdade("")
        setEmail("")
    }   
    return (<>
                <form onSubmit={handleSubmit} className="formulario">
                    <h1>Formulario em React</h1>
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
                    <div className="formulario-dados">
                         {dados.map((item)=>{
                            return(<p>{item.nome} - {item.idade} - {item.email }</p>)
                         })}
                    </div>
                </form>
    </>)
}

export default Formulario