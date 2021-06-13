import Notifications from "../components/modals/Notifications";
import Messages from "../components/modals/Messages";
import { useState } from "react";
import {
  ChatBubbleOutline,
  NotificationsNoneRounded,
  Settings,
} from "@material-ui/icons";

export default function Navbar() {
  const [showNotification, setShowNotification] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="navbar-left">react-dashboard</div>
          <div className="navbar-right">
            <div className="navbar-icon" onClick={() => setShowMessages(true)}>
              <ChatBubbleOutline />
              <span className="message-number">3</span>
            </div>
            <div
              className="navbar-icon"
              onClick={() => setShowNotification(true)}
            >
              <NotificationsNoneRounded style={{ fontSize: "28px" }} />
              <span className="message-number">7</span>
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

      {showNotification && (
        <Notifications setVisibility={setShowNotification} />
      )}
      {showMessages && <Messages setVisibility={setShowMessages} />}
    </>
  );
}
