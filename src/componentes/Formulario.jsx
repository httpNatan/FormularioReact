import { useState } from "react"

const Formulario = ()=> {

    return (<>
                <form>
                    <label>
                        <span>nome</span>
                        <input type="text" name="nome"  placeholder="nome"/>
                    </label>
                    <label>
                        <span>idade</span>
                        <input type="number" name="idade" placeholder="idade" />
                    </label>
                    <label>
                        <span>email</span>
                        <input type="email" name="email"  placeholder="email"/>
                    </label>
                </form>

    </>)
}

export default Formulario