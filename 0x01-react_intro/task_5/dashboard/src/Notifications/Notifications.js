import React from "react";
import close from "./close-icon.png";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          background: "transparent",
          border: "none",
          right: "20px",
        }}
        aria-label="close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}>
          <img src={close} className='close-btn' alt="close"/>
        </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
    </div>
  );
};

export default Notifications;
