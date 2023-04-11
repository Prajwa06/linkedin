import React from "react";
import "./css/header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import {  logout } from "../features/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";



export default function Header() {
  const dispatch=useDispatch();
  
  const logoutAPP=(e)=>{
    e.preventDefault();
    dispatch(logout());
    signOut(auth);
  }
  return (
    <div className="header">
      
      {/* this is left part with icon and search bar */}
      <div className="header__left">
        <img  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Icon" />
        <div className="header__search">
          <SearchIcon/>
          <input placeholder="Search" type="text" />
        </div>
      </div>





      {/* this is right part with navigations tools */}
      <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My-Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Chats"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption onClick={logoutAPP} avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
        </div>
    </div>
  );
}
