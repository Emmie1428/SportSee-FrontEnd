
class Activity {
    constructor (data) {
        this.userId = data.userId
        this.sessions = data.sessions
    }

    get formattedActivity() {
        return this.sessions.map((session, index) => ({
            day: (index + 1).toString(),
            calories: session.calories,
            kilogram: session.kilogram
        }))
    }
}

export default Activity