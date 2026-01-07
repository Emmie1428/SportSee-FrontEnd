import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis} from 'recharts'


const GoalRadialBarChart = ({data}) => {
    
    console.log("Score:", data)
  return (
    <div className="daily-activity" style={{ backgroundColor: "#FBFBFB", padding: "20px", borderRadius: "5px", fontWeight: "500", height: "223px", position: "relative"}}>
        <h3 style={{margin: 0, fontSize: "15px"}}>Score</h3>
        <ResponsiveContainer width="100%" height={180}>
            <RadialBarChart
                data={data}
                margin={0}
                barSize={15}
                innerRadius="80%"
                outerRadius="95%"
                
                startAngle={-270}
                endAngle={90}
                
               
                background="#FFF"
            >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false}
                    background="#FFF" 
                />
                <RadialBar 
                    dataKey="value"
                    cornerRadius={10}
                    
                    fill="#FFF"
                    
                />
            </RadialBarChart>
            <div style={{ 
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -53%)",
                width: "148px",
                height: "148px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
                
                    }}>
                <p style={{
                    fontSize: "26px", 
                    fontWeight: "700",
                    color: "#282D30",
                    margin: "0"
                    }}>
                    {data[0].value}%
                </p>
                <p style={{
                    fontSize: "16px", 
                    color: "#74798C",
                    margin: "0"
                    }}>
                    de votre<br></br>objectif
                </p>
            </div>
                
        </ResponsiveContainer>
    </div>
  )
}

export default GoalRadialBarChart