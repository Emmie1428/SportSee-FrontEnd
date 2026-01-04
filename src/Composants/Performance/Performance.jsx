import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const PerformanceRadarChart = ({data}) => {
  return (
    <div style={{background: "#282D30" }}>
        <ResponsiveContainer width="100%" height={263}>
            <RadarChart
                outerRadius="70%"
                innerRadius="10%"
                data={data}
                margin={{
                    top: 10,
                    left: 6,
                    right: 6,
                    bottom: 10,
                }}
            >
            <PolarGrid 
                stroke="#FFF"
                radialLines={false}
            />
            <PolarAngleAxis 
                dataKey="kind"  
                tick={{ 
                    fill: 'white', 
                    fontSize: 12, 
                    fontWeight: 500
                    }}
            />
            <Radar 
                name="Perfomance" 
                dataKey="value" 
                fill="#FF0101" 
                fillOpacity={0.7} 
            />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PerformanceRadarChart