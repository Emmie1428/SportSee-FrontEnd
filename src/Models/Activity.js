
class Activity {
    constructor (data) {
        this.userId = data.userId
        this.sessions = data.sessions
    }

    //Création du jour et récupération des données pour DailyActivity//
    get formattedActivity() {
        return this.sessions.map((session, index) => ({
            day: (index + 1).toString(),
            calories: session.calories,
            kilogram: session.kilogram
        }))
    }
}

export default Activity