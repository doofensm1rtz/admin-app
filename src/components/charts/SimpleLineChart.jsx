import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SimpleLineChart({
  data,
  XdataKey,
  YDataKey,
  LineDataKey,
  title,
  grid,
}) {
  return (
    <div className="chart-simple-line">
      <h2 className="chart-title">{title}</h2>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey={XdataKey} stroke="#002984" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={LineDataKey}
            stroke="#757de8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
