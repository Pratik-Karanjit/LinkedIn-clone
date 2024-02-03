import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedin from "../src/photos/linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

// all header items go here
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //This calls the reducer logout from userSlice and also signs out from firebase
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={linkedin} alt="LinkedIn Logo" />
      </div>

      <div className="header_search">
        <SearchIcon></SearchIcon>
        <input placeholder="Search" type="text"></input>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
        ></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
        ></HeaderOption>
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        ></HeaderOption>
      </div>
    </div>
  );
};

export default Header;
