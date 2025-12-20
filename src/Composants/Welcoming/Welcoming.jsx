 import "./Welcoming.scss"

function Welcoming ({firstName}) {
    if (firstName === undefined || firstName === null)
        return (<h1 className="welcome_title">Bonjour
                    <span className="welcome_title_name"> utilisateur inconnu</span> 
                </h1>
        )

    return (<div className="welcome">
                <h1 className="welcome_title">Bonjour
                    <span className="welcome_title_name"> {`${firstName}`}</span>   
                </h1>
                <p className="welcome_quote">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
    )
}
 
export default Welcoming