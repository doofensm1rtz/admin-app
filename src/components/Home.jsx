import SimpleLineChart from "./charts/SimpleLineChart";
import Featured from "./Featured";
import { userData } from "../lib/data/dummy";
import SimplePieChart from "./charts/SimplePieChart";

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <div className="home-charts">
        <SimpleLineChart
          title="User Analytics"
          data={userData}
          XdataKey="month"
          YDataKey="users"
          LineDataKey="users"
          grid
        />
        <SimplePieChart />
      </div>
    </div>
  );
}
