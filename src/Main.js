import React from 'react'
import "./Main.css"
const Main = function main(Main){
  return (
    <div className='main_container'>
        <div className="upper_container">
            <div className="video_container">
              <img className='mainimg' src={Main.mainimg} alt="" />
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
                <div className="video_title">
                  <a className='video_title' href="">{Main.videotitle}</a>
                </div>
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
    </div>
  )
}

export default Main
