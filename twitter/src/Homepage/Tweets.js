import React from "react";
import "./Tweets.css";
import "./TweetBox.css";
import { Avatar,Button } from "@material-ui/core";
import { useEffect,useState } from "react";
import { Data } from "../data";



const Tweets = ({userName,date}) => {
  const [tweets, setTweets] = useState(Data);
  console.log(tweets)
 

  let textInput = React.createRef();
  let onOnclickHandler = (e) => {
    const temp=tweets
    temp.push({'userName': userName,
           'tweet': textInput.current.value,
           'date': date}
          )
     temp=temp.reverse;
     textInput.current.value="";     
    setTweets(temp);  
    console.log(textInput.current.value); 
    console.log(typeof(tweets))
  };
 
  // const getTweets = async () => {
  //     // const response = await fetch(url);
  //     // const tweets = await response.json();
  //     setTweets(tweets);

  // };
  // useEffect(() => {
    //     onOnclickHandler();
    // }, []);

    return (
        <>
          <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" style={{margin:4}}/>
                    {/* // onChange={(e) => setTweetMessage(e.target.value)}
            // value={tweetMessage} */}
                    <div className="form-floating" id="text">
                    <textarea className="form-control" placeholder="What's Happening ?" id="floatingTextarea"
                    ref={textInput}
                    //  value={inputTweet} onChange={(e)=>{setInputTweet(e.target.value)}}
                     >
                    
                    </textarea>

                    </div>
                </div>
                {/* //   onClick={sendTweet} */}
                <Button
                    type="button"
                    className="tweetBox__tweetButton"
                    onClick={onOnclickHandler}
                    // onClick={submitTweet}
                >
                    Tweet
                </Button>
            </form>
          </div>
          {tweets.map((tweet)=>{
          return(
            
            <article className="Tweets">
            <div className="avatar">
            <Avatar src="" />
            <i className="username">@{tweet.userName}</i>
            </div>
            <p className="tweet">{tweet.tweet}</p>
            <p className="date">{tweet.date}</p>
            </article>  
          )})}
      </>
    )
}
export default Tweets;