import React from 'react'
import Main from './Main.js';
import "./Main.css"
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
import { Link } from 'react-router-dom';
// import Main from './Main';
function Videodata() {
    const videodata = [
       {
        videotitle:"Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohi",
        videoname:video1,
        posterimg:"https://i.ytimg.com/vi/_vox_-nfjuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYYwhCXi2nncZy5mEhosrCUI6V7A",
        logochannel:"https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s88-c-k-c0x00ffffff-no-rj",
        channelname:"News24 Sports",
        views:"11k views",
        channelname:"News Sports 24",
        time:"11 min ago"
       },
       {
        videotitle:"Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021",
        videoname:video2,
        posterimg:"https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg",
        logochannel:"https://yt3.ggpht.com/ytc/AIf8zZScEeN2LrwAO2mMQQT55TfEQ8CV2BN6_lC85jD6qg=s88-c-k-c0x00ffffff-no-rj",
        channelname:"47 Records",
        views:"39M views",
        time:"4 years ago"
       },
       {
        videotitle:"Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohi",
        videoname:video1,
        posterimg:"https://i.ytimg.com/vi/_vox_-nfjuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYYwhCXi2nncZy5mEhosrCUI6V7A",
        logochannel:"https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s88-c-k-c0x00ffffff-no-rj",
        channelname:"News24 Sports",
        views:"11k views",
        time:"11 min ago"
       },
       ] 
    return (
      <>
        <div className='new_div_video'>
          {videodata.map((value,index)=> {
            return (
              <Link to="/display" style={{textDecoration:"none"}}>
                <Main key={index} videotitle={value.videotitle} videoname={value.videoname} logochannel={value.logochannel} channellogo={value.ch} time={value.time} views={value.views} channelname={value.channelname} />
              </Link>
            );
          })}
        </div>
        <div className='new_div_video'>
                {videodata.map((value,index)=> {
                  return (
                    <Link to="/display" style={{textDecoration:"none"}}>
                      <Main key={index} videotitle={value.videotitle} videoname={value.videoname} logochannel={value.logochannel} channellogo={value.ch} time={value.time} views={value.views} channelname={value.channelname} />
                    </Link>
                  );
                })}
        </div>
      </>
      );
}

export default Videodata
