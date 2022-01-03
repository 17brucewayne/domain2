import React from "react";
import "./profile.css";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
const Profile=({userName,country})=>{
   
    return(<>
        <div>
          <div className="background"></div>
          <span className="namebox">
          <Avatar src="" style={{ width:55, height:55}}/>
          <h3 className="username">{userName}</h3>
          </span>
        </div>
          <h4 className="country"><i>{country}</i></h4>
          <Button variant="outlined" className="homebutton">
            Home
          </Button>
          
    
    
      </>
    )
}
export default Profile;