import SimpleLineChart from "../components/charts/SimpleLineChart";
import Featured from "../components/Featured";
import { userData } from "../lib/data/dummy";
import SimplePieChart from "../components/charts/SimplePieChart";
import WidgetSmall from "../components/widgets/WidgetSmall";
import WidgetLarge from "../components/widgets/WidgetLarge";

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
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
