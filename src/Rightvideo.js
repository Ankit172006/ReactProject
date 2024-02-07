import React from 'react'
import video1 from "./video/video1.mp4"
import "./Rightvideo.css"
function Rightvideo(Main) {
  return (
    <div>
      <div className="right_video_container">
        <div className="mini_video_container">
        <video className='mainimg'   >
            <source src={video1} type="video/mp4"/>
            </video>
        </div>
        <div className="mini_discription">
        <div className="lower_right_container">
            <div className="lower_upper_container">
                <div className="video_title">
                  <a className='video_titlenew' href="">{Main.videotitle}</a>
                </div>
            </div>
            <div className="lower_lower_container">
                <div className="channel_namenew">
                  <a href="">{Main.channelname}</a>
                </div>
                <div className="time_views">
                  <div className="view_partnew">
                    <a href="">{Main.views}</a>
                  </div>
                  <div className="time_partnew">
                    <a href="">{Main.time}</a>
                  </div>
                </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Rightvideo
