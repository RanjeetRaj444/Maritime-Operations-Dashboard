import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "../../contexts/ThemeContext";

function MarineTrafficChart({ data }) {
  const { darkMode } = useTheme();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="chart-container"
      >
        <defs>
          <linearGradient id="colorCargo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3A6DB5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3A6DB5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTanker" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3CAEA3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3CAEA3" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPassenger" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F6921E" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F6921E" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={darkMode ? "#374151" : "#e5e7eb"}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: darkMode ? "#9ca3af" : "#4b5563" }}
        />
        <YAxis tick={{ fill: darkMode ? "#9ca3af" : "#4b5563" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          type="monotone"
          dataKey="cargo"
          name="Cargo Ships"
          stroke="#3A6DB5"
          fillOpacity={1}
          fill="url(#colorCargo)"
        />
        <Area
          type="monotone"
          dataKey="tanker"
          name="Tankers"
          stroke="#3CAEA3"
          fillOpacity={1}
          fill="url(#colorTanker)"
        />
        <Area
          type="monotone"
          dataKey="passenger"
          name="Passenger Ships"
          stroke="#F6921E"
          fillOpacity={1}
          fill="url(#colorPassenger)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MarineTrafficChart;
