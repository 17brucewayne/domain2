import React from "react";
import "./leftcomponent.css";
import Option from "./leftoption"; 
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MessageIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';
import { Button } from "@material-ui/core";


const Left=({call})=>{
 
  return(
      <div className="leftbody">
        <section className="optionlist">
          <Option Icon={HomeIcon} text="Home" onClick={()=>call("home")}/>
          <Option Icon={PersonIcon} text="Profile" onClick={()=>call("profile")}/>
          <Option Icon={NotificationsIcon} text="Notifications" />
          <Option Icon={BookmarkBorderIcon} text="Bookmarks" />
          <Option Icon={MessageIcon} text="Messages" />
          <Option Icon={ListIcon} text="List" />
          <Button variant="outlined" className="tweetbutton">
            Tweet
          </Button>

        </section>
      </div>    
  )
}
export default Left;