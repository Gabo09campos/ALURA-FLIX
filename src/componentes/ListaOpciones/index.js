import './ListaOpciones.css'
// Llamamos a las props de Formulario para manejar el comportamiento del select.
const ListaOpciones = (props) => {

    // Creamos un arreglo en donde tendremos los valores que queremos, en este caso son los videos que guardaremos
    const videos = [
        "Back End",
        "Mobile",
        "Infraestructura",
        "Data Science",
        "Desing & UX",
        "Marketing Digital",
        "Inovacion & Diseño"
    ]
    // Esta funcion es para manejar los cambios del select de las opciones.
    // Con el e.target.value cambiamos el valor del select.
    // Con el props.actualizarEquipo actualizamos el input para que lo vea el usuario.
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    // Llamamos el arreglo "videos" que contiene los videos que seran ingresados
    // Dentro del parentesis ponemos el valor que se regresara a los usuarios en este caso es "video" ya que ese es el valor que queremos
    // Se pone "index" como valor unico para las key (key es como el id)
    // Se llama el valor de Formulario con props.valor y se pone un option que no se mostrara en las opciones pero si como placeholder predeterminado.
    return <div className="listaOpciones">
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo </option>
            {videos.map((video, index) => <option key={index}>{video}</option> )}
        </select>
    </div>
}

export default ListaOpciones