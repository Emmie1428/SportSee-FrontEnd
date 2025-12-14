import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserInfo, getActivity, getAverageSessions, getPerformance } from "../Services/API" 

function Home () {
    const {userId} = useParams ()
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function fetchAllDatas() {
            const [user, activity, averageSessions, performance] = await Promise.all([
                getUserInfo(Number(userId)),
                getActivity(Number(userId)), 
                getAverageSessions(Number(userId)),
                getPerformance(Number(userId))
            ])
        
        setData({ user, activity, averageSessions, performance})
        setIsLoaded(true)
        }
        
        fetchAllDatas()},
        [userId]) 

    if(!isLoaded) {
        return(<div>Chargement...</div>)
    }
    if (!data) {
        return (<Navigate to="*" />)
    } else { return (<div>
        <h1>Bonjour {`${data.user.firstName}`}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>)
    }
}

export default Home