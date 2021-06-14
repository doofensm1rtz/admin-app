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

export default function MobileSidebar({ isSidebarOpened }) {
  return (
    <>
      {isSidebarOpened && (
        <div className="mobile-sidebar">
          <div className="mobile-sidebar-wrapper">
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Dashboard</div>
              <ul className="mobile-sidebar-list">
                <Link className="react-link" to="/">
                  <li className="mobile-sidebar-list-item">
                    <HomeRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">Home</span>
                  </li>
                </Link>
                <li className="mobile-sidebar-list-item">
                  <TimelineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Analytics
                  </span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <TrendingUpRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Sales</span>
                </li>
              </ul>
            </div>
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Quick Menu</div>
              <ul className="mobile-sidebar-list">
                <Link className="react-link" to="/users">
                  <li className="mobile-sidebar-list-item">
                    <PersonRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">Users</span>
                  </li>
                </Link>
                <li className="mobile-sidebar-list-item">
                  <StorefrontRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Products
                  </span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <AttachMoneyRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Transactions
                  </span>
                </li>
              </ul>
            </div>
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Notifications</div>
              <ul className="mobile-sidebar-list">
                <li className="mobile-sidebar-list-item">
                  <MailOutlineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Mail</span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <DynamicFeedRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Feedback
                  </span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <ChatBubbleOutlineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Messages
                  </span>
                </li>
              </ul>
            </div>
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Staff</div>
              <ul className="mobile-sidebar-list">
                <li className="mobile-sidebar-list-item">
                  <WorkOutlineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Manage</span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <TimelineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Analytics
                  </span>
                </li>
                <li className="mobile-sidebar-list-item">
                  <ReportRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
