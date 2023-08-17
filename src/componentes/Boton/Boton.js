import './Boton.css'

const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}
// Se importa en el header
export default Boton