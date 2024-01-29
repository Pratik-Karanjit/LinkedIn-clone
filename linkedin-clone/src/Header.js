import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../src/photos/linkedin.png'
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

// all header items go here
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
      <img src={linkedin} alt="LinkedIn Logo" />
      </div>

      <div className="header_search">
      <SearchIcon></SearchIcon>
       <input type="text"></input>
      </div>
      
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
        <HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'></HeaderOption>
        <HeaderOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title='me'></HeaderOption>
      </div>
    </div>
  );
};

export default Header;
