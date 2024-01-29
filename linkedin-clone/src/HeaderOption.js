import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';

const HeaderOption = ({avatar, Icon, title}) => {
  return (
    <div className='headerOption'>
    {Icon && <Icon className='header_icon'></Icon>}
    {avatar && <Avatar className="headerOption_icon" src={avatar}></Avatar>}
    <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption