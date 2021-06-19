import {
  CalendarTodayRounded,
  EmailRounded,
  PersonRounded,
  PhoneIphoneRounded,
  LocationOnRounded,
  CloudUploadRounded,
} from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  const { name, email, avatar } = location.state;
  const username = name.toLowerCase().replace(" ", "") + "99";

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
            <img src={avatar} alt="" className="user-display-image" />
            <div className="user-display-top-info">
              <span className="user-display-username">{name}</span>
              <span className="user-display-usertitle">Software Engineer</span>
            </div>
          </div>
          <div className="user-display-bottom">
            <span className="user-display-bottom-title">Account details</span>
            <div className="user-display-bottom-info">
              <PersonRounded className="user-display-bottom-icon" />
              <span>{username}</span>
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
              <span>{email}</span>
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
                <input type="text" placeholder={username} />
                <label>Full name</label>
                <input type="text" placeholder={name} />
                <label>Email</label>
                <input type="email" placeholder={email} />
                <label>Phone</label>
                <input type="text" placeholder="+91 9283718291" />
                <label>Address</label>
                <input type="text" placeholder="Mumbai | India" />
              </form>
            </div>
            <div className="user-update-right">
              <img src={avatar} alt="" className="user-update-image" />
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
