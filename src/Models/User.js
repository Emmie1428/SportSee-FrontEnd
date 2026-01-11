
class User {
    constructor (data) {
        this.userId = data.id
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        //nommé différement selon les users//
        this.score = data.todayScore || data.score
        this.calorieCount = data.keyData.calorieCount
        this.proteinCount = data.keyData.proteinCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount
    }

    //Association et récupération des données des valeurs nutritionnelles et leur types pour NutritionStats//
    getNutritionDatas () {
        return [
            {type: "calories", value: this.calorieCount}, 
            {type: "proteines", value: this.proteinCount},
            {type: "glucides", value: this.carbohydrateCount},
            {type: "lipides", value: this.lipidCount}
        ]
    }


    //Math pour transformer le score en % pour Goal//
    get scorePourcentage() {
        return [
            {name:"score", value: this.score*100, fill: "#FF0000"}
        ]
    }  
    
        
        
}

export default User

