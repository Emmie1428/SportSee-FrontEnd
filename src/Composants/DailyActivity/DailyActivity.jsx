import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine} from 'recharts';
import "./DailyActivity.scss"

const ActivityBarChart = ({data}) => {
  return (
    <div style={{ backgroundColor: "#FBFBFB", padding: "20px", borderRadius: "5px", fontSize: "14px", color: "#9B9EAC", fontWeight: "500"}}>
        <span className="bar-chart_title">Activité quotidienne</span>
        <ResponsiveContainer width="100%" height={320}>
            <BarChart
                data={data}
                barGap={8}
                barSize={8}
            >
                <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false}
                    yAxisId="kg"
                />
                <XAxis 
                    dataKey="day"
                    tickLine={false} 
                    tickCount={3}
                />
                <YAxis 
                    yAxisId="kg"
                    width="auto"
                    orientation="right" 
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                    allowDecimals={false}
                    domain={[dataMin => Math.floor(dataMin) - 1,   
                            dataMax => Math.ceil(dataMax) + 2  
                    ]}
                />
              
                <YAxis 
                    yAxisId="kcal"
                    hide={true}
                />
                <Tooltip 
                    contentStyle={{ background: '#E60000',
                        border: "none" ,
                        fontSize: 7,
                        margin: 0
                        }}
                    itemStyle={{ color: '#FFFFFF',
                        margin: 0
                     }}
                    cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    labelFormatter={() => ''} 
                    formatter={(value, name) =>
                    name === 'kilogram'
                        ? [`${value} kg`]
                        : [`${value} kCal`]
                    }
                />
                <Legend 
                    iconType="circle"
                    iconSize={8}
                    verticalAlign="top"
                    align="right"
                    width="auto"
                    fontColor={"#9B9EAC"}
                    wrapperStyle={{
                        paddingBottom: "30px"
                    }}
                    formatter={(value) => {
                    const labels = {
                        kilogram: "Poids (kg)", 
                        calories: "Calories brûlées (kCal)"
                    }
                    return (labels[value])
                }}

                />
                <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30"  radius={[4 , 4 , 0, 0]} />
                <Bar yAxisId="kcal" dataKey="calories" fill="#E60000"  radius={[4 , 4 , 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ActivityBarChart