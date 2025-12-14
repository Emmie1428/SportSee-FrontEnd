import meditating from "../../Assets/meditating.png"
import swimming from "../../Assets/swimming.png"
import biking from "../../Assets/biking.png"
import dumbbell from "../../Assets/dumbbell.png"
import "./VerticalMenu.scss"

function VerticalMenu () {
    return(<div className="vertical-menu">
        <div className="vertical-menu_sports">
            <img src={meditating} alt="Meditating" className="vertical-menu_sports_individual" />
            <img src={swimming} alt="Swimming" className="vertical-menu_sports_individual" />
            <img src={biking} atl="Biking" className="vertical-menu_sports_individual" />
            <img src={dumbbell} alt="Dumbbell" className="vertical-menu_sports_individual" />
        </div>
        <p className="vertical-menu_copiryght">Copiryght, SportSee 2020</p>
    </div>)
}

export default VerticalMenu