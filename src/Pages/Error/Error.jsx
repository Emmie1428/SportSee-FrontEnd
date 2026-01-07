import { NavLink } from "react-router-dom"
import "./Error.scss"

function Error() {
    return (
        <div className="error">
            <div className="error_link">
                <NavLink to="user/12">User 12</NavLink>
                <NavLink to="user/18">User 18</NavLink>
            </div>
            <p className="error_message">Oups! Cette page est introuvable</p>
        </div>
    )
}

export default Error