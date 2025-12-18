import flame from "../../Assets/flame.svg"
import chicken from "../../Assets/chicken.svg"
import apple from "../../Assets/apple.svg"
import burger from"../../Assets/burger.svg"
import "./NutritionStats.scss"


const nutritionConfig = {
    calories: {title: "Calories", unit: "kCal", icon: flame, color: "rgba(255, 0, 0, 0.1)"}, 
    proteines: {title: "Protéines", unit: "g", icon: chicken, color: "rgba(74, 184, 255, 0.1)" },
    glucides: {title: "Glucides", unit: "g", icon: apple, color: "rgba(249, 206, 35, 0.1)"},
    lipides: {title: "Lipides", unit: "g", icon: burger, color: "rgba(253, 81, 129, 0.1)"}
}
    

function NutritionStats ({type, value}) {
    const config = nutritionConfig[type]
    
    return (<div className="nutrition">
                <div className="nutrition_icon" style={{backgroundColor: `${config.color}`}}>
                    <img src={config.icon} alt={config.title} className="nutrition_icon_img"/>
                </div>
                <div className="nutrition_info">
                    <h2 className="nutrition_info_title">{config.title}</h2>
                    <p className="nutrition_info_value">{value}{config.unit}</p>
                </div>
            </div>
    )
}

export default NutritionStats