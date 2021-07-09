/** @format */
import React , {useState} from "react";
import './Header.css'
import  Avatar  from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {Link}  from 'react-router-dom'
function Header() {
  const[inputSearch, setInputSearch] = useState("");
  return (
    <div className= 'header'>
     <div className='header__left'>
      <MenuIcon />
      <Link to="/">
      <img
        className="youtube__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="youtube logo"
        />
        </Link>
     </div>
     <div className ='header__center'>
      <input onChange = {(e)=> setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search'/>
      <Link to ={`/search/${inputSearch}`}>
         <SearchIcon className='searchBtn' />
      </Link>
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
