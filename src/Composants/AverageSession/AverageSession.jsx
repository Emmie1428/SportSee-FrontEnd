import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Rectangle, LineChart, Line} from 'recharts';
import "./AverageSession.scss"
const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  
  console.log(props);
  return (
    <Rectangle
      fill="#E60000"
      zIndex={1000}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};
const AverageSessionAreaChart = ({data}) => {
  return (
    <div className="average-session" style={{ backgroundColor: "#FF0000", fontSize: "15px", fontWeight: "500"}}>
        <h1 className="chart-title">Durée moyenne des sessions</h1>
        <ResponsiveContainer width="100%" height={263}>
            
            <AreaChart
                data={data}
                margin={{bottom: 0}}
              
            >
            <defs>
                <linearGradient id="colorStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1}/>
                    <stop offset="81%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}  
                padding={{left: 19, right: 19}}
                
                
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
                    color: '#000000F',
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
                stoke="#FFFFFF"
                fill="url(#colorStroke)" 
                strokeWidth={2}
                margin={0} 
                zIndex={5000}
                
            />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionAreaChart;