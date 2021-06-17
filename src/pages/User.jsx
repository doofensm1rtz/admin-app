import {
  CalendarTodayRounded,
  EmailRounded,
  PersonRounded,
  PhoneIphoneRounded,
  LocationOnRounded,
  CloudUploadRounded,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <span className="user-title">Edit User</span>
        <Link to="/newUser">
          <button className="user-create-btn">Create new user</button>
        </Link>
      </div>
      <div className="user-main-container">
        <div className="user-display">
          <div className="user-display-top">
            <img
              src="https://images.unsplash.com/photo-1528234591865-8c4f372b3f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt=""
              className="user-display-image"
            />
            <div className="user-display-top-info">
              <span className="user-display-username">Aldair Vagas</span>
              <span className="user-display-usertitle">Software Engineer</span>
            </div>
          </div>
          <div className="user-display-bottom">
            <span className="user-display-bottom-title">Account details</span>
            <div className="user-display-bottom-info">
              <PersonRounded className="user-display-bottom-icon" />
              <span>aldairvagas99</span>
            </div>
            <div className="user-display-bottom-info">
              <CalendarTodayRounded className="user-display-bottom-icon" />
              <span>12/11/1996</span>
            </div>
            <span className="user-display-bottom-title">Contact details</span>
            <div className="user-display-bottom-info">
              <PhoneIphoneRounded className="user-display-bottom-icon" />
              <span>+91 9283718291</span>
            </div>
            <div className="user-display-bottom-info">
              <EmailRounded className="user-display-bottom-icon" />
              <span>aldairvagas@gmail.com</span>
            </div>
            <div className="user-display-bottom-info">
              <LocationOnRounded className="user-display-bottom-icon" />
              <span>Mumbai | India</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <div className="user-update-container">
            <div className="user-update-left">
              <form className="user-update-form">
                <label>Username</label>
                <input type="text" placeholder="aldairvagas99" />
                <label>Full name</label>
                <input type="text" placeholder="Aldair Vagas" />
                <label>Email</label>
                <input type="email" placeholder="aldairvagas@gmail.com" />
                <label>Phone</label>
                <input type="text" placeholder="+91 9283718291" />
                <label>Address</label>
                <input type="text" placeholder="Mumbai | India" />
              </form>
            </div>
            <div className="user-update-right">
              <img
                src="https://images.unsplash.com/photo-1528234591865-8c4f372b3f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
                className="user-update-image"
              />
              <button className="user-upload-image-btn">
                <label htmlFor="update-image-upload">
                  <CloudUploadRounded className="user-upload-image-icon" />
                  <span>Upload</span>
                </label>
              </button>
              <input
                type="file"
                id="update-image-upload"
                style={{ display: "none" }}
              />
              <button className="user-update-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
