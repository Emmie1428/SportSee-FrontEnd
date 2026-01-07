import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserInfo, getActivity, getAverageSessions, getPerformance } from "../Services/API" 
import "./Home.scss"
import Welcoming from "../Composants/Welcoming/Welcoming"
import NutritionStats from "../Composants/NutirionStats/NutritionStats"
import ActivityBarChart from "../Composants/DailyActivity/DailyActivity"
import AverageSessionAreaChart from "../Composants/AverageSession/AverageSession"
import PerformanceRadarChart from "../Composants/Performance/Performance"
import GoalRadialBarChart from "../Composants/Goal"

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

    if (!isLoaded) return (<div>Chargement...</div>)
     
    return (<div className="home">
                <div className="home_welcoming">
                    <Welcoming
                    key={data.user.firstName}
                    firstName={data.user.firstName}
                    />
                </div>
                <div className="home_nutrition">
                    {data.user.getNutritionDatas().map((nutrition) => (
                        <NutritionStats
                            key={nutrition.type}
                            type={nutrition.type}
                            value={nutrition.value}
                        />)
                    )}  
                </div>
                <div className="home_daily-actvity">
                    {! data.activity ? (
                        <div>Données indisponible</div>
                    ):(
                        <ActivityBarChart
                            key={data.activity.userId}
                            data={data.activity.formattedActivity}
                        />
                    )}
                </div>
                <div className="home_average-session">
                    <AverageSessionAreaChart
                        key={data.averageSessions.userId}
                        data={data.averageSessions.formattedDuration}
                    />
                </div>
                <div className="home_performance">
                    {! data.performance ? (
                        <div>Données indisponible</div>
                    ):(
                        <PerformanceRadarChart
                            key={data.performance.userId}
                            data={data.performance.formattedPerformance}
                        />
                    )}
                </div>
                <div className="home_goal">
                    {! data.user.score ? (
                        <div>Données indisponible</div>
                    ):(
                        <GoalRadialBarChart
                            key={data.user.userId}
                            data={data.user.scorePourcentage}
                        />
                    )}
                </div>
            </div>)
}
    
export default Home