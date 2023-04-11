import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './css/sidebar.css'
function Sidebar() {
    const user=useSelector(selectUser);
    console.log(user.photoUrl);


    const recentitem=(topic)=>{
        return(<div className="sidebar__recentitem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p> 
        </div>)
    }
  return (

    <div className='sidebar'>
      {/* sidebar top */}
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1678497178543-dde658d2e732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar> 
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who Viewed You </p>
            <p className='sidebar__statNumber'>125</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on Post </p>
            <p className='sidebar__statNumber'>1257</p>
        </div>
       </div>


        {/* sidebar bottom */}
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentitem("Reactjs")}
            {recentitem("Design")}
            {recentitem("Development")}
            {recentitem("Programming")}
            {recentitem("DSA")}

        </div>
      
      
    </div>
  )
}

export default Sidebar
