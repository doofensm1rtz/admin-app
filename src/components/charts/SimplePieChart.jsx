import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function SimplePieChart() {
  const data = [
    { name: "Other", value: 146 },
    { name: "Direct", value: 54 },
    { name: "Search Engines", value: 125 },
    { name: "Social", value: 260 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#000"];

  return (
    <div className="chart-pie">
      <h2 className="chart-title">Weekly sales</h2>
      <ResponsiveContainer width="99%" aspect={3 / 2}>
        <PieChart>
          <text
            x="50%"
            y="44%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "18px", color: "#1eb980 !important" }}
          >
            +27%
          </text>
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "14px" }}
          >
            more sales
          </text>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="78%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            te
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip wrapperClassName="chart-pie-tooltip" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
