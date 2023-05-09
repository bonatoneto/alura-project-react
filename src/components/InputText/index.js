import { useState } from 'react'
import './InputText.css'
const InputText = (props) => {


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <form className="input-text" required>
            <label>
                {props.label}
            </label>
            <input value={props.valor}onChange={aoDigitado} placeholder= {props.placeholder} required />
        </form>
    )
}

export default InputText