import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserInfo, getActivity, getAverageSessions, getPerformance } from "../Services/API" 

function Home () {
    const {userId} = useParams ()
    const [data, setData] = useState(12)

    useEffect(() => {
        async function fetchAllDatas() {
            const [user, activity, averageSessions, performance] = await Promise.all([
                getUserInfo(Number(userId)),
                getActivity(Number(userId)), 
                getAverageSessions(Number(userId)),
                getPerformance(Number(userId))
            ])
        
        setData({ user, activity, averageSessions, performance})}

        fetchAllDatas()
    }, [userId]) 

    if (!data) {
        return (<Navigate to="*" />)
    } else { return (<div>
        <p>test{userId}{data.user.lastName}{data.user.lipidCount}</p>
    </div>)

    }

  
}

export default Home