import { Context } from "../../context/Context";
import { useContext } from "react";
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
  const { currentPage, dispatch } = useContext(Context);
  const updateCurrentPage = (pageName) => {
    dispatch({ type: "SET_SIDEBAR_PAGE", payload: pageName });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Dashboard</div>
          <ul className="sidebar-list">
            <Link
              className="react-link"
              to="/"
              onClick={() => {
                updateCurrentPage("home");
              }}
            >
              <li
                className={`sidebar-list-item ${
                  currentPage === "home" ? "active" : ""
                }`}
              >
                <HomeRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Home</span>
              </li>
            </Link>
            <Link
              className="react-link"
              to="/analytics"
              onClick={() => {
                updateCurrentPage("analytics");
              }}
            >
              <li
                className={`sidebar-list-item ${
                  currentPage === "analytics" ? "active" : ""
                }`}
              >
                <TimelineRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Analytics</span>
              </li>
            </Link>
            <li
              className={`sidebar-list-item ${
                currentPage === "sales" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("sales");
              }}
            >
              <TrendingUpRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Quick Menu</div>
          <ul className="sidebar-list">
            <Link
              className="react-link"
              to="/users"
              onClick={() => {
                updateCurrentPage("users");
              }}
            >
              <li
                className={`sidebar-list-item ${
                  currentPage === "users" ? "active" : ""
                }`}
              >
                <PersonRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Users</span>
              </li>
            </Link>
            <Link
              to="/products"
              className="react-link"
              onClick={() => {
                updateCurrentPage("products");
              }}
            >
              <li
                className={`sidebar-list-item ${
                  currentPage === "products" ? "active" : ""
                }`}
              >
                <StorefrontRounded className="material-icon-sidebar" />
                <span className="sidebar-list-item-text">Products</span>
              </li>
            </Link>
            <li
              className={`sidebar-list-item ${
                currentPage === "transactions" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("transactions");
              }}
            >
              <AttachMoneyRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Transactions</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Notifications</div>
          <ul className="sidebar-list">
            <li
              className={`sidebar-list-item ${
                currentPage === "mail" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("mail");
              }}
            >
              <MailOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Mail</span>
            </li>
            <li
              className={`sidebar-list-item ${
                currentPage === "feedback" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("feedback");
              }}
            >
              <DynamicFeedRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Feedback</span>
            </li>
            <li
              className={`sidebar-list-item ${
                currentPage === "messages" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("messages");
              }}
            >
              <ChatBubbleOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Staff</div>
          <ul className="sidebar-list">
            <li
              className={`sidebar-list-item ${
                currentPage === "manage" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("manage");
              }}
            >
              <WorkOutlineRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Manage</span>
            </li>
            <li
              className={`sidebar-list-item ${
                currentPage === "reports" ? "active" : ""
              }`}
              onClick={() => {
                updateCurrentPage("reports");
              }}
            >
              <ReportRounded className="material-icon-sidebar" />
              <span className="sidebar-list-item-text">Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
