import React from "react";
import "./Header.css";

// all header items go here
const Header = () => {
  return (
    <div className="header">
      <h1>This is header.</h1>
      <div className="header_left">
        <img src="" alt=""></img>
      </div>

      <div className="header_search"></div>
      
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
