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

export default function MobileSidebar() {
  const { currentPage, isSidebarOpen, dispatch } = useContext(Context);
  const updateCurrentPage = (pageName) => {
    dispatch({ type: "SET_SIDEBAR_PAGE", payload: pageName });
    dispatch({ type: "SET_SIDEBAR_STATE", payload: false });
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="mobile-sidebar">
          <div className="mobile-sidebar-wrapper">
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Dashboard</div>
              <ul className="mobile-sidebar-list">
                <Link
                  className="react-link"
                  to="/"
                  onClick={() => {
                    updateCurrentPage("home");
                  }}
                >
                  <li
                    className={`mobile-sidebar-list-item ${
                      currentPage === "home" ? "active" : ""
                    }`}
                  >
                    <HomeRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">Home</span>
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
                    className={`mobile-sidebar-list-item ${
                      currentPage === "analytics" ? "active" : ""
                    }`}
                  >
                    <TimelineRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">
                      Analytics
                    </span>
                  </li>
                </Link>
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "sales" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("sales");
                  }}
                >
                  <TrendingUpRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Sales</span>
                </li>
              </ul>
            </div>
            <div className="mobile-sidebar-menu">
              <div className="mobile-sidebar-menu-title">Quick Menu</div>
              <ul className="mobile-sidebar-list">
                <Link
                  className="react-link"
                  to="/users"
                  onClick={() => {
                    updateCurrentPage("users");
                  }}
                >
                  <li
                    className={`mobile-sidebar-list-item ${
                      currentPage === "users" ? "active" : ""
                    }`}
                  >
                    <PersonRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">Users</span>
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
                    className={`mobile-sidebar-list-item ${
                      currentPage === "products" ? "active" : ""
                    }`}
                    onClick={() => {
                      updateCurrentPage("products");
                    }}
                  >
                    <StorefrontRounded className="material-icon-mobile-sidebar" />
                    <span className="mobile-sidebar-list-item-text">
                      Products
                    </span>
                  </li>
                </Link>
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "transactions" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("transactions");
                  }}
                >
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
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "mail" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("mail");
                  }}
                >
                  <MailOutlineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Mail</span>
                </li>
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "feedback" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("feedback");
                  }}
                >
                  <DynamicFeedRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">
                    Feedback
                  </span>
                </li>
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "messages" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("messages");
                  }}
                >
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
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "manage" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("manage");
                  }}
                >
                  <WorkOutlineRounded className="material-icon-mobile-sidebar" />
                  <span className="mobile-sidebar-list-item-text">Manage</span>
                </li>
                <li
                  className={`mobile-sidebar-list-item ${
                    currentPage === "reports" ? "active" : ""
                  }`}
                  onClick={() => {
                    updateCurrentPage("reports");
                  }}
                >
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
