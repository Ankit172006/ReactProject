import React from 'react'

import "./Main.css"
import { Link } from 'react-router-dom'
// import HoverVideoPlayer from 'react-hover-video-player';
const Main = function main(Main){
  return (
    <div className='main_container'>
        <div className="upper_container">
            <div className="video_container">
            <video className='mainimg' poster={Main.posterimg}  controls={Main.controlsvalue} >
            <source src={Main.videoname} type="video/mp4"/>
            </video>
            </div>
        </div>
        <div className="lower_container">
        <div className="lower_left_container">
            <div className="channel_logo_image">
              <img className='channel_logo' src={Main.channellogo} alt="" />
            </div>
        </div>
        <div className="lower_right_container">
            <div className="lower_upper_container">
              <Link to="/display">
                <div className="video_title">
                  <a className='video_title' href="">{Main.videotitle}</a>
                </div>
                </Link>
            </div>
            <div className="lower_lower_container">
                <div className="channel_name">
                  <a href="">{Main.channelname}</a>
                </div>
                <div className="time_views">
                  <div className="view_part">
                    <a href="">{Main.views}</a>
                  </div>
                  <div className="time_part">
                    <a href="">{Main.time}</a>
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
