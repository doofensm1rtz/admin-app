import { smallWidgetRows } from "../../lib/data/dummy";
import { AccountCircleRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">Members</span>
      <ul className="widget-small-list">
        {smallWidgetRows.map((row, index) => (
          <li className="widget-small-list-item" key={index}>
            <img src={row.avatar} alt="" className="widget-small-image" />
            <div className="widget-small-user-info">
              <span className="widget-small-user-name">{row.name}</span>
              <span className="widget-small-user-title">{row.title}</span>
            </div>
            <Link
              className="react-link"
              to={{
                pathname: `user/${index + 1}`,
                state: {
                  name: row.name,
                  email: row.email,
                  avatar: row.avatar,
                },
              }}
            >
              <button className="widget-small-btn">
                <AccountCircleRounded className="material-icon-widget-small" />
                View
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
