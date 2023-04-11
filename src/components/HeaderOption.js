import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './css/headerOption.css'
function HeaderOption(props ) {
   const {avatar,Icon,title,onClick}=props;
  return (
    <div onClick={onClick} className='headerOption' >
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && (
        <Avatar ></Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
