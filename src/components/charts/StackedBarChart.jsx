import { analyticsBarChartRows } from "../../lib/data/dummy";
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StackedBarChart() {
  return (
    <div className="chart-stacked-bar">
      <h2 className="chart-title">Mobile / Desktop</h2>
      <ResponsiveContainer width="99%" aspect={3 / 1}>
        <BarChart
          width={500}
          height={300}
          data={analyticsBarChartRows}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" />
          {/* <YAxis /> */}
          <Tooltip />
          <Bar dataKey="desktop" stackId="a" fill="#8884d8" barSize={20} />
          <Bar dataKey="mobile" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
