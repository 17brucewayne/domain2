// import React from "react";
// import { Avatar, Button } from "@material-ui/core";
// import "./TweetBox.css";
// import { useState } from "react";
// import {Data} from "../data"


// const TweetBox = ({userName,date}) => {
//     const [inputTweet,setInputTweet]= useState("");
//     const newTweet = JSON.parse(localStorage.getItem('tweetlist'));
   
//     const submitTweet=()=>{

//         Data.push({
//             userName: userName,
//             tweet: inputTweet,
//             date: date,
//         })        
//         const newObject={
//             userName: userName,
//             tweet: inputTweet,
//             date: date,
//         }
        
//         const newTweetlist= newTweet.push({
//             userName: userName,
//             tweet: inputTweet,
//             date: date,
//         })
//         localStorage.setItem("tweetlist",JSON.stringify(newTweetlist))        
//     }
    




//     return (
//         <div className="tweetBox">
//             <form>
//                 <div className="tweetBox__input">
//                     <Avatar src="" />
//                     {/* // onChange={(e) => setTweetMessage(e.target.value)}
//             // value={tweetMessage} */}
//                     <div className="form-floating" id="text">
//                     <textarea className="form-control" placeholder="What's Happening ?" id="floatingTextarea" value={inputTweet} onChange={(e)=>{setInputTweet(e.target.value)}}>
                    
//                     </textarea>

//                     </div>
//                 </div>
//                 {/* //   onClick={sendTweet} */}
//                 <Button
//                     type="button"
//                     className="tweetBox__tweetButton"
//                     onClick={submitTweet}
//                 >
//                     Tweet
//                 </Button>
//             </form>
//         </div>
       
//     )

// }
// export default TweetBox;