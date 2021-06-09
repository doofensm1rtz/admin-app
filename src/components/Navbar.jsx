import {
  ChatBubbleOutline,
  NotificationsNoneRounded,
  Settings,
} from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-left">react-dashboard</div>
        <div className="navbar-right">
          <div className="navbar-icon">
            <ChatBubbleOutline />
            <span className="notification-message">7</span>
          </div>
          <div className="navbar-icon">
            <NotificationsNoneRounded style={{ fontSize: "28px" }} />
            <span className="notification-message">2</span>
          </div>
          <div className="navbar-icon">
            <Settings />
          </div>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
            alt=""
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}
