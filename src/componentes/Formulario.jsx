import { useState } from "react"
import "../styles/Formulario.css"

const Formulario = ()=> {

    return (<>
                <form className="formulario">
                    <label className="formulario-label-nome">
                        <span>nome</span>
                        <input type="text" name="nome"  placeholder="nome"/>
                    </label>
                    <label className="formulario-label-idade">
                        <span>idade</span>
                        <input type="number" name="idade" placeholder="idade" />
                    </label>
                    <label className="formulario-label-email">
                        <span>email</span>
                        <input type="email" name="email"  placeholder="email"/>
                    </label>
                </form>
    </>)
}

export default Formulario