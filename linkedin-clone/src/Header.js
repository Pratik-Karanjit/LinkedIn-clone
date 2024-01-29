import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../src/photos/linkedin.png'

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
        
      </div>
    </div>
  );
};

export default Header;
