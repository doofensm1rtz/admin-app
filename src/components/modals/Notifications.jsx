import useComponentVisible from "../../lib/custom-hooks/useComponentVisible";
import {
  AssignmentTurnedInRounded,
  PersonAddRounded,
  HomeRounded,
} from "@material-ui/icons";

export default function Notifications({ setVisibility }) {
  const { ref } = useComponentVisible(true, setVisibility);

  return (
    <div ref={ref} className="notification-panel">
      <span className="notification-header">7 new notifications</span>
      <div className="notification-list">
        <div className="notification-list-item">
          <AssignmentTurnedInRounded className="notification-icon" />
          <div className="notification-text">
            <span className="notification-text-header">Update complete</span>
            <span className="notification-text-content">
              Restart server to complete update.
            </span>
          </div>
        </div>
        <div className="notification-list-item">
          <PersonAddRounded className="notification-icon" />
          <div className="notification-text">
            <span className="notification-text-header">New connection</span>
            <span className="notification-text-content">
              Anna accepted your request.
            </span>
          </div>
        </div>
        <div className="notification-list-item">
          <HomeRounded className="notification-icon" />
          <div className="notification-text">
            <span className="notification-text-header">New login</span>
            <span className="notification-text-content">
              Login from 192.1.1.168
            </span>
          </div>
        </div>
      </div>
      <span className="notification-footer">Show all notifications</span>
    </div>
  );
}
