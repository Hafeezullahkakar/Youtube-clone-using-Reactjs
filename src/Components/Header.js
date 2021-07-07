/** @format */

import React from "react";
import { Avatar } from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div>
      <MenuIcon />
      <img
        className="youtube__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="youtube logo"
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar 
      atl = 'Hafeez'
      src = ''
      />
    </div>

  );
}

export default Header;
