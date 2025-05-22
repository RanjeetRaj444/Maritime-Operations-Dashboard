import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useTheme } from '../../contexts/ThemeContext'

function FleetStatusChart({ data }) {
  const { darkMode } = useTheme()
  
  const COLORS = ['#3A6DB5', '#3CAEA3', '#F6921E', '#E74C3C']
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="font-medium">{`${payload[0].name}`}</p>
          <p style={{ color: payload[0].color }}>
            {`Count: ${payload[0].value}`}
          </p>
          <p className="text-sm">
            {`(${((payload[0].value / data.reduce((sum, entry) => sum + entry.value, 0)) * 100).toFixed(1)}%)`}
          </p>
        </div>
      )
    }
    return null
  }
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart className="chart-container">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          formatter={(value) => (
            <span style={{ color: darkMode ? '#e5e7eb' : '#4b5563' }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default FleetStatusChart