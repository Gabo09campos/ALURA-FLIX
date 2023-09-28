import "./Equipo.css"
// Llamamos a las props para poder definir cada equipo con tu nombre.
const Equipo = (props) => {
    return <section className="equipo">
        <h3>{props.equipo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo 