import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import background from "../src/photos/gradient.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={background} alt="background" />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,433</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1,033</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("Programming")}
        {recentItem("Software Engineer")}
        {recentItem("Design")}
        {recentItem("MongoDB")}
      </div>
    </div>
  );
};

export default Sidebar;
