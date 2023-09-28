import { useState } from 'react'

import Campo from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import './Formulario.css'

// Importamos los inputs desde CampoTexto para reutilizarlos las veces necesarias
// Enviamos las propiedades que queremos que tengan los inputs como HTML normal
//Este componente se deberia llamar NuevoVideo.
const Formulario = (props) => {
    // Con estos arreglos actualizaremos lo ingresado en los inputs.
    const [titulo, actualizarTitulo] = useState("")
    const [linkVideo, actualizarLinkVideo] = useState("")
    const [linkImage, actualizarLinkImage] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [codigo, actualizarCodigo] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    // Creamos un afuncion para evitar que se recarge toda la pagina y de esta manera con el preventDeafult solo se recarga el componente de Formulario
    // Colocamos "let datosAEnviar" para que nos muestre el objeto que se esta creando con lo valores aque se envian.
    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            linkVideo,
            linkImage,
            equipo,
            descripcion,
            codigo
        }
        console.log(datosAEnviar)
    }

    // Con props traemos desde CampoTexto el "required" para que sea necesario el campo
    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
           <h2>Nuevo video</h2>
           <Campo 
                placeholder="Titulo" 
                required 
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
           <Campo 
                placeholder="Link del video" 
                required 
                valor={linkVideo}
                actualizarValor={actualizarLinkVideo}
            />
           <Campo 
                placeholder="Link imagen del video" 
                required 
                valor={linkImage}
                actualizarValor={actualizarLinkImage}
            />
           <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo} 
            />
           <Campo 
                placeholder="Descripcion" 
                required 
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
           <Campo 
                placeholder="Codigo de seguridad" 
                required 
                valor={codigo}
                actualizarValor={actualizarCodigo}
            />

            <div className='menuBotones'>
                <div className='botones'>
                <button>Guardar</button>
                </div>
                <button>Nueva categoria</button>
            </div>
           
        </form> 
    </section>
}

export default Formulario