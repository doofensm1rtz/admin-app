import {
  HomeRounded,
  TimelineRounded,
  TrendingUpRounded,
  PersonRounded,
  StorefrontRounded,
  AttachMoneyRounded,
  MailOutlineRounded,
  DynamicFeedRounded,
  ChatBubbleOutlineRounded,
  WorkOutlineRounded,
  ReportRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Dashboard</div>
          <ul className="sidebar-list">
            <Link className="react-link" to="/">
              <li className="sidebar-list-item">
                <HomeRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Home</span>
              </li>
            </Link>
            <li className="sidebar-list-item">
              <TimelineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Analytics</span>
            </li>
            <li className="sidebar-list-item">
              <TrendingUpRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Quick Menu</div>
          <ul className="sidebar-list">
            <Link className="react-link" to="/users">
              <li className="sidebar-list-item">
                <PersonRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Users</span>
              </li>
            </Link>
            <li className="sidebar-list-item">
              <StorefrontRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Products</span>
            </li>
            <li className="sidebar-list-item">
              <AttachMoneyRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Transactions</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Notifications</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Mail</span>
            </li>
            <li className="sidebar-list-item">
              <DynamicFeedRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Feedback</span>
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Staff</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Manage</span>
            </li>
            <li className="sidebar-list-item">
              <TimelineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Analytics</span>
            </li>
            <li className="sidebar-list-item">
              <ReportRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
