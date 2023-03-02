import React from "react";
import close from "../assets/close-icon.png";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications (props)  {
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
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Notifications;
