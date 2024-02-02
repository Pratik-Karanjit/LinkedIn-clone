import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="header_icon"></Icon>}
      {avatar && (
        <Avatar className="headerOption_icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
