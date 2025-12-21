
class AverageSessions {
    constructor (data) {
        this.userId = data.userId
        this.sessions = data.sessions
    }

    get formattedDuration() {
        const dayLetter = {1:"L", 2:"M", 3:"M", 4:"J", 5:"V", 6:"S", 7:"D"}
        return this.sessions.map((session) => ({
            day: dayLetter[session.day],
            time: session.sessionLength
        }))
    }
}

export default AverageSessions