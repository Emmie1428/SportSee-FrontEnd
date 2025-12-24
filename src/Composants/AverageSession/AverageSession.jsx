import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import "./AverageSession.scss"

const AverageSessionAreaChart = ({data}) => {
  return (
    <div className="average-session" style={{ backgroundColor: "#FF0000", fontSize: "15px", fontWeight: "500"}}>
        <h1 className="chart-title">Durée moyenne des sessions</h1>
        <ResponsiveContainer width="100%" height={190}>
            <AreaChart
                data={data}
                margin={{bottom: 5}}
            >
            <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}  
                className="average-session_x"
                padding={{left: 14, right: 14}}
            />
            <YAxis 
            width="auto" 
            hide={true} 
            margin={19}
            domain={[0, 'dataMax + 10']} 
            padding={{bottom : 20}}
           
            
            />
            <Tooltip 
                itemStyle={{ 
                    color: '#000000F',
                    margin: 0,
                    fontSize: 8,
                    
                    padding: 0
                }}
                cursor={{ stroke: "#E60000", strokeWidth: 50, opacity: 9.75}}
                
                labelFormatter={() => ""}
                formatter={(value, name) =>
                    name === "time"
                        ? [`${value} min`]
                        : [""]
                    }
            />
            <Area type="natural" dataKey="time" stroke="#FFFFFF" fill="#FF0C0C" strokeWidth={2}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionAreaChart;