
class User {
    constructor (data) {
        this.userId = data.id
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        this.score = data.todayScore || data.score
        this.calorieCount = data.keyData.calorieCount
        this.proteinCount = data.keyData.proteinCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount
    }

    getNutritionDatas () {
        return [
            {type: "calories", value: this.calorieCount}, 
            {type: "proteines", value: this.proteinCount},
            {type: "glucides", value: this.carbohydrateCount},
            {type: "lipides", value: this.lipidCount}
        ]
    }
}



export default User

