import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserInfo, getActivity, getAverageSessions, getPerformance } from "../Services/API" 
import "./Home.scss"
import NutritionStats from "../Composants/NutirionStats/NutritionStats"

function Home () {
    const {userId} = useParams ()
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasTimedOut, setHasTimedOut] = useState(false)

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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoaded) (setHasTimedOut(true))
        }, 2500)
        return () => clearTimeout(timer);
            },[isLoaded])
    
    if (hasTimedOut && !isLoaded) return (<Navigate to="*" />)
    
        if (!isLoaded) return (<div>Chargement...</div>)
     
    return (<div className="home">
                <h1 className="home_welcome">Bonjour <span className="home_welcome_name">{`${data.user.firstName}`}</span></h1>
                <p className="home_quote">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="home_nutrition">
                    {data.user.getNutritionDatas().map((nutrition) => (
                        <NutritionStats
                            key={nutrition.type}
                            type={nutrition.type}
                            value={nutrition.value}
                        />)
                    )}
                </div>

            
            </div>)
}
    
export default Home