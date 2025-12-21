import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import "./AverageSession.scss"

const AverageSessionAreaChart = ({data}) => {
  return (
    <div className="average-session" style={{ backgroundColor: "#FF0000", borderRadius: "5px", fontSize: "15px", fontWeight: "500", width: "258px", maxHeight: "244px", paddingBottom: "19px"}}>
        <h1 className="chart-title">Durée moyenne des sessions</h1>
        <ResponsiveContainer width="100%" height={190}>
            <AreaChart
                data={data}
                width={280}
                padding={0}
            >
            <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}  
                className="average-session_x"
            />
            <YAxis 
            width="auto" 
            hide={true}  
           
            
            />
            <Tooltip />
            <Area type="natural" dataKey="time" stroke="#FFFFFF" fill="#FF0C0C" strokeWidth={2}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionAreaChart;