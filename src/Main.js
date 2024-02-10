import React from 'react'

import "./Main.css"
import {Link} from 'react-router-dom'
// import HoverVideoPlayer from 'react-hover-video-player';  {videoname,posterimg,channellogo,videotitle,channelname,views,time}
const Main = function main(props){
  return (
    <div className='main_container'>
        <div className="upper_container">
            <div className="video_container">
             <video className='mainimg'   controls={props.controlsvalue}  >
            <source src={props.videoname} type="video/mp4"/>
            </video>
            </div>
        </div>
        <div className="lower_container">
        <div className="lower_left_container">
       
            <div className="channel_logo_image">
              <img className='channel_logo' src={props.logochannel} alt="" />
            </div>
          
        </div>
        <div className="lower_right_container">
            <div className="lower_upper_container">
              {/* <Link to="/display"> */}
                <div className="video_title">
                  <p className='video_title'>{props.videotitle}</p>
                </div>
                {/* </Link> */}
            </div>
            <div className="lower_lower_container">
                <div className="channel_name">
                  <a href="">{props.channelname}</a>
                </div>
                <div className="time_views">
                  <div className="view_part">
                    <a href="">{props.views}</a>
                  </div>
                  <div className="time_part">
                    <a href="">{props.time}</a>
                  </div>
                </div>

            </div>
        </div>
  
      </div>
      {/* <video src="./video/video1.mp4" type='mp4'></video> */}

    
    </div>
  )
}

export default Main
