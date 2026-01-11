
class Performance {
    constructor (data) {
        this.userId = data.userId
        this.cardio = data.kind[1]
        this.energy = data.kind[2]
        this.endurance = data.kind[3]
        this.strength = data.kind[4]
        this.speed = data.kind[5]
        this.intensity = data.kind[6]
        this.data = data.data
    }

    //Association du chiffre de type de donnée à son terme et récupération des donnes pour Performance//
    get formattedPerformance() {
        const kindTitle = {1:"Cardio", 2:"Énergie", 3:"Endurance", 4:"Force", 5:"Vitesse", 6:"Intensité"}
        const performancedata =  this.data.map((data) => ({
            value: data.value,
            kind: kindTitle[data.kind]
        }))
        return performancedata.reverse()
    }
}

export default Performance