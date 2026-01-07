import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Rectangle} from 'recharts';
import "./AverageSession.scss"

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="#E60000"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  )
}

const AverageSessionAreaChart = ({data}) => {
  return (
    <div className="average-session" style={{ background: "linear-gradient(to top, #FF1A1A 5%, #FF0000 90%)", fontSize: "15px"}}>
        <h1 className="chart-title">Durée moyenne des sessions</h1>
        <ResponsiveContainer width="100%" height={263}>
            <AreaChart
                data={data}
                margin={{bottom: 10}}
            >
            <defs>
                <linearGradient id="colorStroke" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" strokeOpacity={1} />
                    <stop offset="81%" stopColor="#FF6666" strokeOpacity={.4} />
                </linearGradient>
            </defs>
            <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}   
                interval="preserveStartEnd"
                cursor={<CustomCursor/>}       
            />
            <YAxis 
                width="auto" 
                hide={true} 
                margin={0}
                domain={[0, 'dataMax + 30']} 
                allowDataOverflow 
            />
            <Tooltip 
                itemStyle={{ 
                    color: "#000000/",
                    margin: 0,
                    fontSize: 8,
                    padding: 0
                }}               
                cursor={<CustomCursor/>}   
                labelFormatter={() => ""}
                formatter={(value, name) =>
                    name === "time"
                        ? [`${value} min`]
                        : [""]
                }
            />
            <Area 
                type="natural" 
                activeDot={{ stroke: "rgba(225, 225, 225, 30%)", strokeWidth: 9, r: 4 }} 
                dataKey="time" 
                stroke="url(#colorStroke)"
                fill="#FF1A1A"
                strokeWidth={2}
                margin={0} 
                width="100%"
                zIndex={50000}
            />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionAreaChart;