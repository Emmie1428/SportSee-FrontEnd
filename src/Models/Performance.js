
class Performance {
    constructor (data) {
        this.userId = data.userId
        this.cardio = data.kind[1]
        this.energy = data.kind[2]
        this.endurance = data.kind[3]
        this.strength = data.kind[4]
        this.speed = data.kind[5]
        this.intesity = data.kind[6]
        this.data = data.data
    }
}

export default Performance