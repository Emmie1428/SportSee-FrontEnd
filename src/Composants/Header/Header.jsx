import logo from "../../Assets/logo.png"
import "./Header.scss"

function Header () {
    return (<div className="header">
        <img src={logo} alt="Logo SportSee" className="header_logo" />
        <a href="" className="header_link">Accueil</a>
        <a href="" className="header_link">Profil</a>
        <a href="" className="header_link">Réglage</a>
        <a href="" className="header_link">Communauté</a>
    </div>)
}

export default Header