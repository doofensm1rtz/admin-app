import { AccountCircleRounded } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widget-small-image"
          />
          <div className="widget-small-user-info">
            <span className="widget-small-user-name">Emily Garland</span>
            <span className="widget-small-user-title">Photographer</span>
          </div>
          <button className="widget-small-btn">
            <AccountCircleRounded className="material-icon-widget-small" />
            View
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widget-small-image"
          />
          <div className="widget-small-user-info">
            <span className="widget-small-user-name">Masha Raymers</span>
            <span className="widget-small-user-title">Engineer</span>
          </div>
          <button className="widget-small-btn">
            <AccountCircleRounded className="material-icon-widget-small" />
            View
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="widget-small-image"
          />
          <div className="widget-small-user-info">
            <span className="widget-small-user-name">Rodrigo Souza</span>
            <span className="widget-small-user-title">Manager</span>
          </div>
          <button className="widget-small-btn">
            <AccountCircleRounded className="material-icon-widget-small" />
            View
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widget-small-image"
          />
          <div className="widget-small-user-info">
            <span className="widget-small-user-name">Andrea Piacquadio</span>
            <span className="widget-small-user-title">Business</span>
          </div>
          <button className="widget-small-btn">
            <AccountCircleRounded className="material-icon-widget-small" />
            View
          </button>
        </li>
      </ul>
    </div>
  );
}
