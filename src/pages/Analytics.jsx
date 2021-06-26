import React from "react";
import StackedBarChart from "../components/charts/StackedBarChart";
import SimplePieChart from "../components/charts/SimplePieChart";
import MapLondon from "../components/maps/MapLondon";

export default function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics-top">
        <div className="analytics-top-left">
          <div className="analytics-top-left-item">
            <div className="analytics-top-left-header">
              <h3>Visitors</h3>
              <span>Today</span>
            </div>
            <div className="analytics-top-left-number">24.532</div>
            <div className="analytics-top-left-change">
              <span>+14%</span>
              <p>Since last week</p>
            </div>
          </div>
          <div className="analytics-top-left-item">
            <div className="analytics-top-left-header">
              <h3>Activity</h3>
              <span>Annual</span>
            </div>
            <div className="analytics-top-left-number">63.200</div>
            <div className="analytics-top-left-change">
              <span className="analytics-negative">-12%</span>
              <p>Since last week</p>
            </div>
          </div>
          <div className="analytics-top-left-item">
            <div className="analytics-top-left-header">
              <h3>Real-Time</h3>
              <span>Monthly</span>
            </div>
            <div className="analytics-top-left-number">1.320</div>
            <div className="analytics-top-left-change">
              <span className="analytics-negative">-18%</span>
              <p>Since last week</p>
            </div>
          </div>
          <div className="analytics-top-left-item">
            <div className="analytics-top-left-header">
              <h3>Bounce</h3>
              <span>Yearly</span>
            </div>
            <div className="analytics-top-left-number">12.364</div>
            <div className="analytics-top-left-change">
              <span>+27%</span>
              <p>Since last week</p>
            </div>
          </div>
        </div>
        <div className="analytics-top-right">
          <StackedBarChart />
        </div>
      </div>
      <div className="analytics-middle">
        <div className="analytics-middle-left">
          <h2 className="chart-title">Real - Time</h2>
          <MapLondon />
        </div>
        <div className="analytics-middle-right">
          <SimplePieChart />
        </div>
      </div>
      <div className="analytics-bottom">
        <div className="analytics-bottom-left">
          <span className="analytics-bottom-title">Languages</span>
          <table className="analytics-bottom-left-table">
            <thead>
              <tr>
                <th>Language</th>
                <th>Users</th>
                <th>% Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>en-us</td>
                <td>865</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-65"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>en-gb</td>
                <td>240</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-45"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>fr-fr</td>
                <td>220</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-35"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>es-es</td>
                <td>162</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-40"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>de-de</td>
                <td>86</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-30"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>ru-ru</td>
                <td>32</td>
                <td>
                  <div className="percentage-block">
                    <div className="percentage-block-child percentage-block-child-20"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="analytics-bottom-right">
          <span className="analytics-bottom-title">Traffic sources</span>
          <table className="analytics-bottom-right-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Users</th>
                <th>Sessions</th>
                <th>Bounce Rate</th>
                <th>Avg. Session Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td>1024</td>
                <td>1265</td>
                <td>
                  <button className="analytics-bottom-right-btn">34%</button>
                </td>
                <td>00:06:25</td>
              </tr>
              <tr>
                <td>Direct</td>
                <td>872</td>
                <td>1077</td>
                <td>
                  <button className="analytics-bottom-right-btn bg-danger">
                    63%
                  </button>
                </td>
                <td>00:09:18</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>812</td>
                <td>1022</td>
                <td>
                  <button className="analytics-bottom-right-btn">28%</button>
                </td>
                <td>00:05:26</td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>523</td>
                <td>654</td>
                <td>
                  <button className="analytics-bottom-right-btn">24%</button>
                </td>
                <td>00:09:18</td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td>713</td>
                <td>821</td>
                <td>
                  <button className="analytics-bottom-right-btn">22%</button>
                </td>
                <td>00:06:19</td>
              </tr>
              <tr>
                <td>DuckDuckGo</td>
                <td>693</td>
                <td>826</td>
                <td>
                  <button className="analytics-bottom-right-btn bg-danger">
                    53%
                  </button>
                </td>
                <td>00:04:19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
