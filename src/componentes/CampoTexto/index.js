import { useState } from 'react'
import './CampoTexto.css'

// creamos el arrow function del input que se estara reutilizando y lo exportamos
// Con props importamos los datos que se envian desde Formulario con props.dato
const Campo = (props) => {
    // Con esta funcion controlaremos los cambios que se iran ingresando en los imputs. Y loa tremos con props desde Formulario.
    // Con actualizarValor se juntan las letras ingresadas para mostrar la palabra completa al usuario.
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    // Con el onChange se actualizara lo que se ingrese en cada input de acuerdo a lo que pide con la funcion manejarCambio.
    return <div className="campoTexto">
        <input 
            placeholder={props.placeholder}
            required={props.required}
            valor={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default Campo