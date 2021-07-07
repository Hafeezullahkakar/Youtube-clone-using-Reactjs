/** @format */

import React from "react";
import './Header.css'
import  Avatar  from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div className= 'header'>
     <div className='header__left'>
      <MenuIcon />
      <img
        className="youtube__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="youtube logo"
      />
     </div>
     <div className ='header__center'>
      <input type="text" placeholder='Search'/>
      <SearchIcon className='searchBtn' />
     </div>
     <div className='header__right'>
      <VideoCallIcon className='header__icons' />
      <AppsIcon className='header__icons' />
      <NotificationsIcon className='header__icons' />
      <Avatar 
      atl = 'Hafeez'
      src = 'https://avatars.githubusercontent.com/u/72004991?s=60&v=4'
      />
     </div>
    </div>

  );
}

export default Header;
