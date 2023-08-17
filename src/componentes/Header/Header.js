import './Header.css'
import Boton from "../Boton/Boton"

const Header = () => {
    return <div className="header">
        <div className="componentesHeader">
            <img className="logoMain" src="/img/LogoMain.png" alt="Logo" />
            <Boton className="btnHeader">Nuevo video</Boton>
        </div>
        
        <hr />
    </div>
}

export default Header